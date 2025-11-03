// JavaScript Document
console.log("welkom world");


document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("header nav");
  const dropdownBtn = nav.querySelector("button:nth-of-type(1)");
  const dropdownMenu = nav.querySelector("ul:nth-of-type(1)");

  dropdownBtn.addEventListener("click", () => {
    const expanded = dropdownBtn.getAttribute("aria-expanded") === "true";
    dropdownBtn.setAttribute("aria-expanded", !expanded);
    dropdownMenu.hidden = expanded;

    // Optional arrow rotation
    const arrow = dropdownBtn.querySelector("svg");
    if (arrow) arrow.style.transform = expanded ? "rotate(0deg)" : "rotate(180deg)";
  });
});