// Create divs using JS
// put grid squares inside another container div
// Make sure divs appear as grid, use flexbox
// borders and margins adjust the size of the squares

const container = document.querySelector('.container');
const square = document.getElementsByClassName('.square');
let nothingness = false;


createGrid();


// Create the grid
function createGrid()  {
    for (let row = 0; row < 16; row++) {
        for (let col = 0; col < 16; col++) {
          // Create a new div element for each cell
          const cell = document.createElement("div");
          cell.classList.add("square");
          
          // Add any desired CSS styles to the cell
          cell.style.width = "50px";
          cell.style.height = "50px";
          cell.style.border = "1px solid black";
          cell.style.display = "flex";
      
          // Append the cell to the grid container
          container.appendChild(cell);

        }
      }
}

for(let i = 0; i < square.length; i++) {
  square[i].addEventListener([click] 
    (function() {
      square[i].textContent;
      square.target.style.backgroundColor="black";
    }));
}



//container.addEventListener('mouseover'  , addColor);
// function addColor(e) {
//   if (nothingness === true) {
//     e.target.style.backgroundColor = "black";
//     console.log("black");
//   } else {
//     e.target.style.backgroundColor = "black";
//     console.log("white");
//   }
// }


//Creating a function to hover over the square
//create a function for hovering over.
// Implement into into the function addColor
//create event listener that takes function
// Go back to addColor , create a bool that will make sure the color shows

//Somehow, you need to iterate over the array (each DOM div array), and apply the listener to each of its elements.