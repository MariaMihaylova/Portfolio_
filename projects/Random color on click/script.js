let colors = ['red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow', 'whitesmoke', 'coral', 'brown', 'azure', 'darkcyan', 'darkorange'];
let button = document.getElementById('button');
button.addEventListener('click', function() {
    let index = parseInt((Math.random() * colors.length) + 1);
    let canvas = document.getElementById('canvas');

    canvas.style.background = `${colors[index]}`
})