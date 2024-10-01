// const container = document.querySelector(".js-container");
// container.addEventListener("mouseover", onMouseMove);
// container.addEventListener("mouseout", onMouseMove);

// function onMouseMove(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }
//   event.currentTarget.classList.toggle("container-focus");
// }

const btnContainer = document.querySelector(".js-buttons");
btnContainer.addEventListener("click", onButtonsContainerClick);

const selectedBtns = [];

function onButtonsContainerClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  //   event.target.classList.add("btn-active");
  const btn = event.target;
  btn.classList.toggle("btn-active");

  //   selectedBtns.push.event.target.dataset.value;
  selectedBtns.push(event.target.dataset.value);
  console.log(selectedBtns);
}
