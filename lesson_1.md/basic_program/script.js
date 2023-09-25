document.querySelector('.button').addEventListener('click', function() {
    random()
})

function random() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let color = "rgb(" + x + "," + y + "," + z + ")";
    console.log(color);

    document.body.style.background = color;
}