import { addTheme } from "../api";

addTheme({
  id: "default@light",
  name: "Default Light",
  type: "light",
  colors: {
    backgroundColor: "#fff",
    secondaryBackgroundColor: "#d6d6d6",
    ternaryBackgroundColor: "#afafaf",
    activeBackground: "#fff9ea",
  
    textColor: "#040404",
    secondaryTextColor: "#262626",
    ternaryTextColor: "#454545",
  
    instanceBackground: "linear-gradient(0deg, #f7feff, #fff 70%)",
    instanceBorder: "#91a8c1",
    instanceHoverBackground: "linear-gradient(0deg, #d6fcff, #fff 90%)",
    instanceHoverBorder: "#91a8c1",
  
    itemBackground: "#fff",
    borderColor: "#c8c8c8",
  },
  accent: {
    defaultHue: 235,
    saturation: 0.65,
    brightness: 1
  }
});

addTheme({
  id: "default@dark",
  name: "Default Dark",
  type: "dark",
  colors: {
    backgroundColor: "#18181b",
    secondaryBackgroundColor: "#2d2d30",
    ternaryBackgroundColor: "#444446",
    activeBackground: "#423a24",
  
    textColor: "#fff",
    secondaryTextColor: "#d6d6d6",
    ternaryTextColor: "#afafaf",
  
    instanceBackground: "linear-gradient(180deg, #22252b, #18181b 80%)",
    instanceBorder: "#525252",
    instanceHoverBackground: "linear-gradient(180deg, #3d4249, #18181b 80%)",
    instanceHoverBorder: "#a3a3a3",
  
    itemBackground: "#18181b",
    borderColor: "#525252",
  },
  accent: {
    defaultHue: 235,
    saturation: 0.48,
    brightness: 0.66
  }
});

addTheme({
  id: "default@amoled",
  name: "Default Amoled",
  type: "dark",
  colors: {
    backgroundColor: "#18181b",
    secondaryBackgroundColor: "#2d2d30",
    ternaryBackgroundColor: "#444446",
    activeBackground: "#423a24",
  
    textColor: "#fff",
    secondaryTextColor: "#d6d6d6",
    ternaryTextColor: "#afafaf",
  
    instanceBackground: "linear-gradient(180deg, #22252b, #18181b 80%)",
    instanceBorder: "#525252",
    instanceHoverBackground: "linear-gradient(180deg, #3d4249, #18181b 80%)",
    instanceHoverBorder: "#a3a3a3",
  
    itemBackground: "#18181b",
    borderColor: "#525252",
  },
  accent: {
    defaultHue: 235,
    saturation: 0.48,
    brightness: 0.66
  }
});
