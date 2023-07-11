// Create divs using JS
// put grid squares inside another container div
// Make sure divs appear as grid, use flexbox
// borders and margins adjust the size of the squares

const container = document.querySelector('.container');
const newButton = document.querySelector('.newRound')



// Create the grid
function createGrid(height = 16, width =16)  {
    //Make a row and column for each height or width
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
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

newButton.addEventListener('click' , (e) => {
  const gridCol = Number.parseInt(prompt("Enter the amount of grid Columns : ")) ;
  const gridRows = Number.parseInt(prompt("Enter the amount of grid rows  : ")) ;

  container.innerHTML = "";
  //Take input and create the grid
  createGrid(gridCol, gridRows);

} );


createGrid();

