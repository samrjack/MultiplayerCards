var socket;

var state = "refreshed";

function setup() {
    createCanvas(800, 800);
    background(51);

    socket = io('http://localhost:3000');
    //socket.on('mouse', newDrawing);

    input = createInput();
    input.position(20, 65);

    button = createButton('submit');
    button.position(input.x + input.width, 65);
    button.mousePressed(joinLobby);

    prompt = createElement('h2', 'Please enter a lobby to join');
    prompt.position(20, 5);

    textAlign(CENTER);
    textSize(50);
}

function joinLobby() {
    const lobbyName = input.value().toLowerCase();
    console.log("Joining the lobby: " + lobbyName);
    socket.emit('join_lobby', lobbyName);
}

function draw() {
}
