song = "";
song1 = "";

function preload()
{
    song = loadSound("Music 1.mp3");
    song1 = loadSound("Music 2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song1.play();
}