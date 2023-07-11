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

          //Adding a hover effect
          cell.addEventListener('mouseover' , (e) => {
            e.target.style.backgroundColor = "black";
          });
      
          // Append the cell to the grid container
          container.appendChild(cell);

        }
      }
}

