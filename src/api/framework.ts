// reinventing the wheel, why not!

// Example (it's also type-safe!)
/*
  const btn = _("button#example_btn.a.b.c",
    _("img", { src: "icon.png" }),
    _("span", "Click me"),
    { onclick: () => alert("hi") }
  );
*/

export type ElementSelector<T extends string>
  = T extends `${infer K extends keyof HTMLElementTagNameMap}#${string}` ? HTMLElementTagNameMap[K]
  : T extends `${infer K extends keyof HTMLElementTagNameMap}.${string}` ? HTMLElementTagNameMap[K]
  : T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T]
  : HTMLDivElement;

export const $ = <T extends string>(s: T) => document.querySelector(s) as ElementSelector<T>;
export const $$ = <T extends string>(s: T) => document.querySelectorAll(s) as NodeListOf<ElementSelector<T>>;

const parseSelector = (sel: string) => ({
  tag: sel.split(/[.#]/)[0],
  id: (sel.match(/#[^.#]+/)?.[0] || "").slice(1) || null,
  class: (sel.match(/\.[^.#]+/g) || []).map((x) => x.slice(1))
});

const assignObj = (obj: any, dest: any) => {
  for (const key in obj) {
    const val = obj[key];
    if (typeof val == "object" && !Array.isArray(val) && key in dest) {
      assignObj(val, dest[key]);
    } else {
      dest[key] = val;
    }
  }
}

const addChildren = (element: HTMLElement, array: any[]) => {
  array.forEach((obj) => {
    if (typeof obj == "string") element.appendChild(document.createTextNode(obj));
    else if (Array.isArray(obj)) addChildren(element, obj);
    else if (obj instanceof HTMLElement) element.appendChild(obj);
    else if (typeof obj == "object") assignObj(obj, element);
  });
}

type Child<T> = string | Child<T>[] | HTMLElement | {[K in keyof T]?: Partial<T[K]>};

export function _<T extends string>(
  selector: T,
  ...children: Child<ElementSelector<T>>[]
): ElementSelector<T> {
  const sel = parseSelector(selector);
  const element = document.createElement(sel.tag) as ElementSelector<T>;

  if (sel.id) element.id = sel.id;
  if (sel.class.length) element.className = sel.class.join(" ");

  addChildren(element, children);
  return element;
}
