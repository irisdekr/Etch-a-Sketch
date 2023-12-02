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

    const gridBlocks = document.querySelectorAll(".block");

    gridBlocks.forEach(block => { 
        block.addEventListener("mouseover", () => {
            block.classList.add("hover-block");
        });
    });

        //code for button
        document.querySelector('button').onclick = function() {popUp()};

        //need to change 'string', now you can't turn in numbers between 16 and 100.
        function popUp() {
            let askGridSize = prompt("Choose a new gridsize by typing a number between 16 and 100:", "");
                if (askGridSize == null || typeof(askGridSize) == 'string' || askGridSize <= 16 || askGridSize >= 100) {
                    alert("This size is not available.");
                } else {
                let gridItemAmount = askGridSize //how to make this reach let gridItemAmount?
                }
          }
});