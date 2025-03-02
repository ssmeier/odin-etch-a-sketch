class EtchBoard {
    constructor(x,y){
        this.x = x
        this.y = y

    }

    generateBoard (x,y) {
        var totalSquares = (x * y);
        for(let i = 0; i <= totalSquares; i++){
            let pixel = document.createElement("div");
            console.log(pixel)
            pixel.classList.add('pixel');
            console.log(document.querySelector('.board-container'))
            document.querySelector('.board-container').appendChild(div);
        }
    }
}

let defaultBoard = new EtchBoard(16,16);
defaultBoard.generateBoard(16,16);