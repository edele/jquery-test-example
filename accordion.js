export function accordionClickHandler(event) {
  const element = event.currentTarget;

  if (element.className.includes("accordion--hidden")) {
    element.className = "accordion";
  } else {
    element.className = "accordion accordion--hidden";
  }
}

export function init($) {
  $(".accordion").click(event => accordionClickHandler(event, $));
}
