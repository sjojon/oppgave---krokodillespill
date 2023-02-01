//model
let numLeft;
let numRight;
let points = 0;

//view
randomNum()
function updateView() {
    document.getElementById('app').innerHTML = /*html*/`
    <h1>Krokodillespillet</h1><br>
    <div id="textBox">
        <img id="croc" src="cartoon-crocodile.jpg"><br>
        <p>Hvilket tall er størst? eller er de like?<br>
        Bruk: <strong> ">" "<" </strong> eller <strong>"="</strong></p>
        <p id="tallSize"> ${numLeft} ? ${numRight}</p>
        <input id="operator" type="text"><br>
        <p>Points: ${points}</p>
        <button class="btn" onclick="check(operator.value)">Check</button>
        <button class="btn" onclick="reset()">Reset</button>
    </div>
    
    `;
}
updateView();

//controller
function check(operatorInput) {
    if (operatorInput === ">" && numLeft > numRight) {
        points++;
    }
    else if (operatorInput === "<" && numLeft < numRight) {
        points++;
    }
    else if (operatorInput === "=" && numLeft === numRight) {
        points++;
    }
    else {
        points--;
    }
    randomNum();

}

function randomNum() {
    numLeft = Math.ceil(Math.random() * 10);
    numRight = Math.ceil(Math.random() * 10);
    updateView();
}

function reset() {
    points = 0;
    randomNum()
}