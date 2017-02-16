// GLOBAL VARIABLE GO HERE:

var clickedArray = [] //This empty array keeps track of clciked table cells

// EXECUTE FUNCTIONS HERE:

setUp();



// FUNCTIONS DEFINITIONS GO HERE:

function randomAnswers(){
  var answers = [1,1,2,2,3,3,4,4,5];
  answers.sort(function(item){
    // this function returns a random value to each item since
    // just one parameter passed in
    // this value is used to sort the elements of the array
    return .5 - Math.random();
  })
  return answers;
}

function setUp(){
  var grid = document.getElementsByTagName('td');
  var answers = randomAnswers();

  for(var i=0;i<grid.length;i++){
    var cell = grid[i];
    cell.completed = false;
    cell.clicked = false;
    cell.value = answers[i];
    cell.addEventListener("mouseenter",function(){
    if(this.completed == false && this.clicked == false)
        this.style.background = "orange";
});

/* Now that each table cell object has been allocated a 'completed' , 'clicked'
and 'value' property , we sill add an eventListener to each */

cell.addEventListener("mouseleave",function(){
    if(this.completed == false && this.clicked == false)
        this.style.background = "blue";
});

cell.addEventListener('click',function(){
      if(this.clicked == false && this.completed==false)
      {
        clickedArray.push(this);
        reveal(this);
      }


});



  }
}


 function reveal(cell){
    cell.style.backgroundColor = "red";
    cell.innerHTML = cell.value;
    cell.clicked = true;
}
