// document.addEventListener("DOMContentLoaded", function () {
//   var stack;

//   stack = window.swing.Stack();

//   [].forEach.call(
//     document.querySelectorAll(".stack li"),
//     function (targetElement) {
//       stack.createCard(targetElement);

//       targetElement.classList.add("in-deck");
//     }
//   );

//   stack.on("throwout", function (e) {
//     console.log(
//       e.target.innerText || e.target.textContent,
//       "has been thrown out of the stack to the",
//       e.throwDirection,
//       "direction."
//     );

//     e.target.classList.remove("in-deck");
//   });

//   stack.on("throwin", function (e) {
//     console.log(
//       e.target.innerText || e.target.textContent,
//       "has been thrown into the stack from the",
//       e.throwDirection,
//       "direction."
//     );

//     e.target.classList.add("in-deck");
//   });
// });
