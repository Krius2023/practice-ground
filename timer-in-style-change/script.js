let idx = 0, intId = null;

function styleShuffle() {
    let txtEle = document.getElementById("styled_text");
    idx = (idx + 1) % 3;

    switch (idx) {
        case 0:
            txtEle.style.color = "blue";
            txtEle.style.fontFamily = "Cursive";
            txtEle.innerText = "Blue";
            txtEle.style.textDecoration = "underline";
            break;
        case 1:
            txtEle.style.color = "red";
            txtEle.style.fontFamily = "Helvetica";
            txtEle.innerText = "Red";
            txtEle.style.textDecoration = "line-through";
            break;
        case 2:
            txtEle.style.color = "black";
            txtEle.style.fontFamily = "Brush Script";
            txtEle.innerText = "Black";
            txtEle.style.fontStyle = "Italic";
            txtEle.style.textDecoration = "none";
            break;
        default:
            break;
    }
}

function startShuffle() {
    if (!intId) {
        intId = setInterval(styleShuffle, 1000);
    }
}

function stopShuffle() {
    clearInterval(intId);
    intId = null;
}
