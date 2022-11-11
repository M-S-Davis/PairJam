const items = Array.from(document.getElementsByClassName("menu-item"));

items.forEach((item, index) => {
  item.onmouseover = () => {
    document.getElementById("menu").dataset.activeIndex = index;
  };
});
