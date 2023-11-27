document.addEventListener('DOMContentLoaded', function() {
    
    let gridItemAmount = 16

    const grid = document.querySelector('.grid');

    function createRows(gridItemAmount) {
        const rowContainer = document.createElement('div');
      
        for (let i = 0; i < gridItemAmount; i++) {
            const block = document.createElement('div');
            rowContainer.appendChild(block);
        }
        grid.appendChild(rowContainer)
    }

    for (let i = 0; i < gridItemAmount; i++) {
    createRows(gridItemAmount)
    } 
});