document.addEventListener('DOMContentLoaded', function() {
    
    //code for grid 
    let gridItemAmount = 16

    const grid = document.querySelector('.grid');

    function createRows(gridItemAmount) {
        const rowContainer = document.createElement('div');
      
        for (let i = 0; i < gridItemAmount; i++) {
            const block = document.createElement('div');
            block.classList.add("block");
            rowContainer.appendChild(block);
        }
        grid.appendChild(rowContainer)
    }

    for (let i = 0; i < gridItemAmount; i++) {
    createRows(gridItemAmount)
    } 

    //code for changing color of blocks when hovering. 

    function generateRandomColor(){
        let maxVal = 0xFFFFFF; 
        let randomNumber = Math.random() * maxVal; 
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);   
        return `#${randColor.toUpperCase()}`
    }

    const gridBlocks = document.querySelectorAll(".block");

    gridBlocks.forEach(block => { 
        block.addEventListener("mouseover", () => {
            //block.classList.add("hover-block"); use this code for grey blocks 
            block.style.backgroundColor = generateRandomColor()
        });
    });

    //code for button
    document.querySelector('button').onclick = function() {popUp()};

    function popUp() {
        let askGridSize = prompt("Choose a new gridsize by typing a number between 16 and 100:");
            if (askGridSize == null || isNaN(askGridSize) || askGridSize <= 15 || askGridSize >= 101) {//use isNaN instead of string
                alert("This size is not available.");
            } else {
                gridItemAmount = Number(askGridSize);
                recreateGrid();
            }
    }
    
    //code for creating a new grid in the chosen size. 
    function recreateGrid() {
        // Clear the existing grid
        grid.innerHTML = "";
        // Create a new grid with the updated size
        const rowContainer = document.createElement('div');
            for (let i = 0; i < gridItemAmount; i++) {
                createRows(gridItemAmount)
                    const block = document.createElement('div');
                    block.classList.add("block")
                    rowContainer.appendChild(block);
            }
        grid.appendChild(rowContainer)

         //code for changing color of blocks when hovering on the new sized grid. 
         function generateRandomColor(){
            let maxVal = 0xFFFFFF; 
            let randomNumber = Math.random() * maxVal; 
            randomNumber = Math.floor(randomNumber);
            randomNumber = randomNumber.toString(16);
            let randColor = randomNumber.padStart(6, 0);   
            return `#${randColor.toUpperCase()}`
        }
    
        const gridBlocks = document.querySelectorAll(".block");
    
        gridBlocks.forEach(block => { 
            block.addEventListener("mouseover", () => {
                //block.classList.add("hover-block"); use this code for grey blocks. 
                block.style.backgroundColor = generateRandomColor()
            });
        });
    }
});