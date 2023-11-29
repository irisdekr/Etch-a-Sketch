document.addEventListener('DOMContentLoaded', function() {
    
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
});

// isDown=false;
// secondsToHold=1
// elem=document.querySelector('body');
// elem.addEventListener('mousedown', function(event) { 
// 	// simulating hold event
//     if (isDown==false){
// 		isDown=true;
// 	    setTimeout(function() {
// 			if (isDown==true){
// 				console.log("Hold");
// 			}
// 		}, (secondsToHold*1000));
// 	}
// });
// elem.addEventListener('mouseup', function(event) {
// 	isDown=false;  
// });

// block.addEventListener("mouseover", evt => {
//     if (evt.buttons === 1) {
//       block.classList.add("hover-block");
//     }