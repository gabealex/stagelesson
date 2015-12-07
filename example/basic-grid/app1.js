Stage(function(stage) {

  var Math = Stage.Math, Mouse = Stage.Mouse;

  //set the viewbox to be 500 by 500
  

  var j = 0, i = 0;
  //create a variable column and append it to stage
  
  //pin the column with alignment 0.5 and spacing 1
  

  for (j = 0; j < 9; j++) {

    //create a variabl row and append it to column with spacing 1
    

    for (i = 0; i < 9; i++) {
      
      //create a variable cell and set animate to 'rainbow'
      

      //append cell to row and pin it with pivot 0.5
      

      cell.on(Mouse.MOVE, function(point) {
          this.gotoFrame(Math.random(this.length()));
          this.pin({

            //set X scale to be betwwen random 0.5 and 1.5
            
            //set Y scale to be between random 0.5 and 1.5
            
            //set X to skew between random  0 and 0.5
            
            //set Y skew between random  0 and 0.5
            
            //set rotation to be betwwen  random -5 and 5
            
            //set X to pivot between random  0.2 and 0.8
            
            //set Y to pivot between random  0.2 and 0.8
            
          });

        return true;
      });
    }
  }

});