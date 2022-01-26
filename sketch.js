var racket1, racket2;
var ball;
var edges;
var score1 = 0;
var score2 = 0;





function setup(){
   


    createCanvas(1000,900);

    racket1 = createSprite(10, 500, 20, 100);
    racket2 = createSprite(900 , 500, 20, 100);
    ball = createSprite(500, 500, 10, 50);
    ball.velocityX = 10;
    ball.velocityY = 7;
    edges = createEdgeSprites();

    


}
function draw(){
    background("black");
    if (ball.isTouching(edges[0]) || ball.isTouching(edges[1]) || ball.isTouching(edges[2]) || ball.isTouching(edges[3]) || ball.isTouching(racket1) || ball.isTouching(racket2))  {
        ball.bounceOff(racket1);
        ball.bounceOff(racket2);
        ball.bounceOff(edges[0]);
        ball.bounceOff(edges[1]);
        ball.bounceOff(edges[2]);
        ball.bounceOff(edges[3]);
    }
    
    for(i = 0; i <= 400; i+20){
        line(500, i, 500, i+10);
    }
    drawSprites();

    



}
