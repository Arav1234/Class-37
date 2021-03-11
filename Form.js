class Form {
    constructor(){
      this.input = createInput("Name")
      this.title = createElement("h2")
     this.button = createButton('Play')
     this.greeting = createElement('h3');
    }

    hide() {
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
    }
    display(){
       
        this.title.html("Car Racing Game")
        this.title.position(130,0)
        
        this.input.position(130,150)
       
        this.button.position(250, 200);

        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
    
         player.name = this.input.value();
          
          playerCount=playerCount+1;
          player.index = playerCount;
          player.update();
          player.updatecount(playerCount);
         
          this.greeting.html("Hello " +player.name )
          this.greeting.position(130, 160)
        });
    }
    }