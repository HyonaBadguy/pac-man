function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

  const squares =[]
function createBoard() {
    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        //  square.classList.add('square')
        grid.appendChild(square)
        //squares.push(square)
    }
}
createBoard()
