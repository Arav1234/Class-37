class Game{
    constructor(){

    }
    getstate(){
        var GS = database.ref('gameState');
        GS.on("value",function(data){
            gameState = data.val;
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            player = new Player();
            player.getcount();
            form = new Form();
            form.display();
        }
    }
    play() {
        form.hide();
        textSize(30); 
        text("Game Start",120,100)
        Player.getplayers();
        if(players!==undefined){
            var dp=130
            for(var i in players){
                if(i==="player"+player.index)
                fill("red");
                else
                fill("blue");
                dp = dp+20
                textSize(15)
                text(players[i].name+":"+players[i].distance,120,dp)
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+50
            player.update();
        }

        
   }
}