// Business Logic

function User (name1, name2, fruit, hair) {
  this.name1 = name1;
  this.name2 = name2;
  this.fruit = fruit;
  this.hair = hair;
  this.animals = [];
}

// User.prototype. = function() {
//
// }

var moral = 0;
function setMoral(diff){
  moral += diff
  $("body").removeClass("dark-1 dark-2 dark-3 light-1 light-2 light-3");
  if (moral > 0){
    $("body").addClass(`light-${moral}`);
  } else if(moral < 0){
    $("body").addClass(`dark${moral}`);
  }
}



// User Interface Logic
$(document).ready(function(){
  $("#userInput").submit(function(e){
    e.preventDefault();
    var name1Input = $("#name1").val();
    var name2Input = $("#name2").val();
    var fruitInput = $("#fruit").val();
    var hairInput = $("#hair").val();
    var animalsInput = $("#animals").val().split(",");
    var newUser = new User(name1Input, name2Input, fruitInput, hairInput);

    $.each(animalsInput, function(index, animal){
      newUser.animals.push(animal);
    });
  
  });
});
