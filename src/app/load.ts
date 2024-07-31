import indexHTML from "../../assets/html/index.html";

document.addEventListener("DOMContentLoaded", () => {
  if (location.host != "neal.fun" || !location.pathname.startsWith("/infinite-craft"))
    return;

  document.documentElement.innerHTML = indexHTML;
  
});
