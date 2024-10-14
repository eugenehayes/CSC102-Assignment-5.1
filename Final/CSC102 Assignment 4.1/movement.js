// Fuctions for stop and start movement buttons
let moveInterval;
let img = document.getElementById("memeImage");
let positionX = 0, positionY = 0;
let moveSpeed = 10;
//Start Button
function startMoving() {
    

    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

    moveInterval = setInterval(() => {
        positionX += (Math.random() * 10 - 5) * moveSpeed;
        positionY += (Math.random() * 10 - 5) * moveSpeed;

        if (positionX < 0) positionX = 0;
        if (positionY < 0) positionY = 0;
        if (positionX + img.width > window.innerWidth) positionX = window.innerWidth - img.width;
        if (positionY + img.height > window.innerHeight) positionY = window.innerHeight - img.height;


        img.style.left = positionX + "px";
        img.style.top = positionY + "px";
    }, 100);
    }

    function stopMoving() {
        // Disable Stop button and enable Start button
        document.getElementById('stopButton').disabled = true;
        document.getElementById('startButton').disabled = false;

        // Stop the movement
        clearInterval(moveInterval);
    }
