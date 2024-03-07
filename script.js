let currentFloor = 0;

function playSoundEffect() {
    const soundEffect = document.getElementById('soundEffect');
    soundEffect.play();
    setTimeout(() => {
        soundEffect.pause();
    }, durationInSeconds * 1000);
}

function moveLift(floor) {
    const lift = document.querySelector('.lift');
    lift.style.top = `${(2 - floor) * 200}px`; // Adjust position based on floor
}
function requestUp(floor) {
    if (currentFloor === 0 && floor === 1) {
        setTimeout(() => {
            currentFloor = 1;
            moveLift(currentFloor);
            alert('Arrived at Level 1');
            playSoundEffect(5);
        }, 5000);
        setTimeout(() => {
            currentFloor = 2;
            moveLift(currentFloor);
            alert('Arrived at Level 2');
            playSoundEffect(10);
        }, 10000);
    } else if (currentFloor === 1) {
        if (floor === 2) {
            setTimeout(() => {
                currentFloor = 2;
                moveLift(currentFloor);
                alert('Arrived at Level 2');
                playSoundEffect(10);
            }, 10000);
        } else if (floor === 1) {
            alert('Already at Level 1');
        }
    } else if (currentFloor === 0 && floor === 2) {
        setTimeout(() => {
            currentFloor = 2;
            moveLift(currentFloor);
            alert('Arrived at Level 2');
            playSoundEffect(10);
        }, 10000);
    }
}


function requestDown(floor) {

    if (currentFloor === 2 && floor === 1) {
        console.log("Moving from Level 2 to Level 1");
        setTimeout(() => {
            currentFloor = 1;
            moveLift(currentFloor);
            alert('Arrived at Level 1');
            playSoundEffect(5);
        }, 5000);

        setTimeout(() => {
            currentFloor = 0;
            moveLift(currentFloor);
            alert('Arrived at Ground Level');
            playSoundEffect(10);
        }, 10000);


    } else if (currentFloor === 1 && floor === 0) {

        setTimeout(() => {
            currentFloor = 0;
            moveLift(currentFloor);
            alert('Arrived at Ground Level');
            playSoundEffect(10);
        }, 10000);
    } else if (currentFloor === 1 && floor === 1) {
        alert('Already at Ground Level');
    } else if (currentFloor === 1 && floor === 1) {

        setTimeout(() => {
            currentFloor = 1;
            moveLift(currentFloor);
            alert('Arrived at Level 1');
            playSoundEffect(5);
        }, 5000);
    } else if (currentFloor === 2 && floor === 2) {
        setTimeout(() => {
            currentFloor = 0;
            moveLift(currentFloor);
            alert('Arrived at Ground Level');
            playSoundEffect(10);
        }, 10000);
    } else {
        console.log("Invalid request or condition");
    }
}

