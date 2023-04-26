//Dom element
const boxes = document.querySelectorAll(".box");
const image = document.querySelector(".image");

//loop through each boxes element
boxes.forEach((box) => {
   //when a draggable element dragged over a box element
   box.addEventListener("dragover", (e) => {
      e.preventDefault(); //prevent default behavior
      box.classList.add("hovered");
   });

   //when a draggable element leaves box element
   box.addEventListener("dragleave", () => {
      box.classList.remove("hovered");
   });

   //when a draggable element is dropped on a box element
   box.addEventListener("drop", () => {
      box.appendChild(image);
      box.classList.remove("hovered");
   });
});
