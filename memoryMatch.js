// GLOBAL VARIABLE GO HERE:


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
  }
}
