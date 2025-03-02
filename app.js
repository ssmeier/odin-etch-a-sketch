class EtchBoard {

    generateBoard (x) {
        var columns = x;
        for(let i = 0; i <= columns; i++){
            let col = document.createElement("div");
            col.classList.add('pixel-col')
            document.querySelector('.board-container').appendChild(col)
                for(let j = 0; j <= columns; j++) {
                    let pixel = document.createElement("div");
                    pixel.classList.add('pixel');
                    pixel.addEventListener('mouseover', () => {
                        pixel.classList.add('color-pixel')
                    });
                    col.appendChild(pixel)
                }
        }
    }

    clearBoard(){
        let board = document.querySelector('.board-container');
        board.innerHTML = '';
    }

}

let DefaultBoard = new EtchBoard;
const defaultSize = 16;
let resetButton = document.querySelector('.reset-button')

resetButton.addEventListener('click', () =>{
    DefaultBoard.clearBoard();
    DefaultBoard.generateBoard(defaultSize);
});
let generateButton = document.querySelector('.new-board-button')
generateButton.addEventListener('click', () => {
    let genNum = prompt('Enter a number x to generate an x by x grid')
    DefaultBoard.generateBoard(parseInt(genNum))
})
DefaultBoard.generateBoard(defaultSize)