class Player{
    constructor(){
this.index=null;
this.distance=0;
this.name=null;
    }
    getcount(){
        var PC = database.ref('playerCount');
        PC.on("value",function(data){
            playerCount = data.val();
        })
    }
    updatecount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
var pi = "players/player"+this.index
database.ref(pi).set({
    name:this.name,
    distance:this.distance
})
    }
    static getplayers(){
        var playerinfo = database.ref('players')
        playerinfo.on("value",function(data){
            players = data.val();
        })
    }
}