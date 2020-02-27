let thing = "asdf";
thing = 123;
thing = true;

if (thing == 123) {

}

for (let i = 0; i < 5; i++) {

}

while (false) {

}

let accel = 10;

function updateAccel() {
    document.getElementById("accelDisplay").style.scale = accel * 0.85
}

function test(thingToTest) {

    return "done"
}

let count = 0;

function buttonClicked(el) {
    count++;
    let countText = "I've been clicked " + count + " times!";
    el.innerHTML = countText;
    if (count == 1) {
        el.classList.add("buttonClicked");
    }
}

function disappearDiv() {
    document.getElementById("disappear").classList.add("disappearClick");
}

document.getElementById("disappear").onclick = disappearDiv;

function keyLog(e) {
    console.log(e.code);
    if (e.code == "KeyP") {
        console.log("Open Inventory!");
    }
}

document.onkeydown = keyLog;
