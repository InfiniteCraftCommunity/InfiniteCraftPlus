import { RE_EXTENSION_ID } from "../const";

export const COLOR_KEYS = {
  backgroundColor: "background-color",
  secondaryBackgroundColor: "secondary-background-color",
  ternaryBackgroundColor: "ternary-background-color",
  activeBackground: "active-background",
  textColor: "text-color",
  secondaryTextColor: "secondary-text-color",
  ternaryTextColor: "ternary-text-color",
  instanceBackground: "instance-background",
  instanceBorder: "instance-border",
  instanceHoverBackground: "instance-hover-background",
  instanceHoverBorder: "instance-hover-border",
  itemBackground: "item-background",
  borderColor: "border-color",
} as const;

export interface ThemeOptions {
  id: string;
  name: string;
  type: "light" | "dark";
  colors: Record<keyof typeof COLOR_KEYS, string>;
  css?: string | string[];
  icons?: {
    fill?: boolean;
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
    /** low: -25, default: 0, high: 200 */
    emphasis?: "low" | "default" | "high";
    opticalSize?: 20 | 24 | 40 | 48;
  };
  accent?: {
    /** Number from 0 to 360 */
    defaultHue?: number;
    /** Float from 0 to 1 */
    saturation: number;
    /** Float from 0 to 1 */
    brightness: number;
  };
}

const themes: ThemeOptions[] = [];
let activeTheme: ThemeOptions;

export function addTheme(options: ThemeOptions) {
  if (!RE_EXTENSION_ID.test(options.id)) throw new Error(`theme ID must match ${RE_EXTENSION_ID}`);
  if (themes.some((x) => x.id == options.id)) throw new Error(`the theme ${options.id} is already registered`);
  
  // TODO: use zod to validate the settings
  themes.push(options);
}

export function selectTheme(id: string | ThemeOptions) {
  const theme = themes.find((x) => x.id == id || x == id);
  if (!theme) throw new Error(`unknown theme: ${typeof id == "string" ? id : id.id}`);
  
  activeTheme = theme;
  // TODO: load the theme
}

