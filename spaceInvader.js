"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawLine();

function drawLine() {

    //SPACE INVADER

    context.fillStyle = "#000000";
    context.beginPath();
    context.rect(50, 50, 300,300);
    context.fill();

    context.fillStyle = "#00ff00";
    context.beginPath();
    context.rect(125, 75, 50,50);
    context.fill();

    context.fillStyle = "#00ff00";
    context.beginPath();
    context.rect(225, 75, 50,50);
    context.fill();

    context.fillStyle = "#00ff00";
    context.beginPath();
    context.rect(175, 125, 50,50);
    context.fill();

    context.fillStyle = "#00ff00";
    context.beginPath();
    context.rect(75, 175, 250,50);
    context.fill();

    context.fillStyle = "#00ff00";
    context.beginPath();
    context.rect(125, 225, 50,50);
    context.fill();

    context.fillStyle = "#00ff00";
    context.beginPath();
    context.rect(225, 225, 50,50);
    context.fill();

    context.fillStyle = "#00ff00";
    context.beginPath();
    context.rect(225, 225, 50,50);
    context.fill();

    context.fillStyle = "#00ff00";
    context.beginPath();
    context.rect(75, 275, 50,50);
    context.fill();

    context.fillStyle = "#00ff00";
    context.beginPath();
    context.rect(275, 275, 50,50);
    context.fill();

    //CREEPER MINECRAFT om te oefenen

    context.fillStyle = "#00ff00";
    context.beginPath();
    context.rect(50, 400, 400,400);
    context.fill();

    context.fillStyle = "#000000";
    context.beginPath();
    context.rect(100, 500, 100,100);
    context.fill();

    context.fillStyle = "#000000";
    context.beginPath();
    context.rect(300, 500, 100,100);
    context.fill();

    context.fillStyle = "#000000";
    context.beginPath();
    context.rect(200, 600, 100,150);
    context.fill();

    context.fillStyle = "#000000";
    context.beginPath();
    context.rect(150, 650, 50,150);
    context.fill();

    context.fillStyle = "#000000";
    context.beginPath();
    context.rect(300, 650, 50,150);
    context.fill();

}

