// Create divs using JS
// put grid squares inside another container div
// Make sure divs appear as grid, use flexbox
// borders and margins adjust the size of the squares

const container = document.querySelector('.container');

createGrid();

// Create the grid
function createGrid()  {
    for (let row = 0; row < 16; row++) {
        for (let col = 0; col < 16; col++) {
          // Create a new div element for each cell
          const cell = document.createElement("div");
          cell.classList.add('square');
          
          // Add any desired CSS styles to the cell
          cell.style.width = "30px";
          cell.style.height = "30px";
          cell.style.border = "1px solid black";
          cell.style.display = "flex";
      
          // Append the cell to the grid container
          container.appendChild(cell);
        }
      }
}

// Being able to declare all of the squares within the grid
const hoverSquare = document.getElementsByClassName('.square');

//Creating a function to hover over the square
hoverSquare.addEventListener("mouseenter" , function() {
    hoverSquare.style.backgroundColor = "black";
});

//create a function for hovering over.
// Implement into into the function createGrid
// Create function name , add event listener in the function
// Go back to CreateGrid, call the function with cell.function

//Somehow, you need to iterate over the array (each DOM div array), and apply the listener to each of its elements.