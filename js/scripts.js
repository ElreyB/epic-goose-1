// Business Logic

function User (name1, name2, fruit, hair) {
  this.name1 = name1;
  this.name2 = name2;
  this.fruit = fruit;
  this.hair = hair;
  this.animals = [];
}

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
  $("button#begin").click(function(e){
    e.preventDefault();
    $(".instructions").addClass("hide");
    $(".form-page").removeClass("hide");
  });
  $("#userInput").submit(function(e){
    e.preventDefault();
    $(".form-page").addClass("hide");
    $(".book-cover").removeClass("hide");
    var name1Input = $("#name1").val();
    var name2Input = $("#name2").val();
    var fruitInput = $("#fruit").val();
    var hairInput = $("#hair").val();
    var animalsInput = $("#animals").val().split(",");
    var newUser = new User(name1Input, name2Input, fruitInput, hairInput);
    $.each(animalsInput, function(index, animal){
      newUser.animals.push(animal);
    });
    $.each(newUser.animals, function(index, animal){
      $(".animalInput" + index).text(animal);
      console.log(index + ":" + animal);
    });
    $(".playerOne").text(newUser.name1);
    $(".playerTwo").text(newUser.name2);
    $(".fruitInput").text(newUser.fruit);
    $(".hairInput").text(newUser.hair);

    $("button#open-book").click(function(e){
      e.preventDefault();
      $("body").addClass("light");
      $(".cover-page").addClass("hide");
      $(".firstPage").removeClass("hide");
    });

    $(".turn-page").click(function(e){
     e.preventDefault();
     $("body").addClass("light");
     $(".firstPage").addClass("hide");
     $(".secondPage").removeClass("hide");
   });

    $(".left2").click(function(e) {
      e.preventDefault();
      $("body").addClass("dark");
      $(".secondPage").addClass("hide");
      $(".thirdPage").removeClass("hide");
    });

    $(".right2").click(function(e) {
      e.preventDefault();
      $("body").addClass("light");
      $(".secondPage").addClass("hide");
      $(".thirtyPage").removeClass("hide");
    });

    $(".left3").click(function(e){
      e.preventDefault();
      $("body").addClass("light");
      $(".thirdPage").addClass("hide");
      $(".fourthPage").removeClass("hide");
    });

    $(".right3").click(function(e){
      e.preventDefault();
      $("body").addClass("dark");
      $(".thirdPage").addClass("hide");
      $(".thirtyOnePage").removeClass("hide");
    });

    $(".turn-page2").click(function(e){
      e.preventDefault();
      $("body").addClass("light");
      $(".fourthPage").addClass("hide");
      $(".fifthPage").removeClass("hide");
    });
    $(".turn-page3").click(function(e){
      e.preventDefault();
      $("body").addClass("light");
      $(".fifthPage").addClass("hide");
      $(".sixthPage").removeClass("hide");
    });
    $(".turn-page4").click(function(e){
      e.preventDefault();
      $("body").addClass("light");
      $(".sixthPage").addClass("hide");
      $(".seventhPage").removeClass("hide");
    });
    $(".turn-page5").click(function(e){
      e.preventDefault();
      $("body").addClass("light");
      $(".seventhPage").addClass("hide");
      $(".eigthPage").removeClass("hide");
    });
    $(".turn-page6").click(function(e){
      e.preventDefault();
      $("body").addClass("light");
      $(".eigthPage").addClass("hide");
      $(".ninthPage").removeClass("hide");
    });
    $(".turn-page7").click(function(e){
      e.preventDefault();
      $("body").addClass("light");
      $(".tenPage").addClass("hide");
      $(".elevenPage").removeClass("hide");
    });
    $(".turn-page8").click(function(e){
      e.preventDefault();
      $("body").addClass("light");
      $(".elevenPage").addClass("hide");
      $(".twelvePage").removeClass("hide");
    });
    $(".left9").click(function(e){
      e.preventDefault();
      $("body").addClass("light");
      $(".ninthPage").addClass("hide");
      $(".tenPage").removeClass("hide");
    });
    $(".right9").click(function(e){
      e.preventDefault();
      $("body").addClass("dark");
      $(".ninthPage").addClass("hide");
      $(".thirtyFourPage").removeClass("hide");
    });

    $(".left31").click(function(e){
      e.preventDefault();
      $("body").addClass("light");
      $(".thirtyOnePage").addClass("hide");
      $(".thirtyThreePage").removeClass("hide");
    });

    $(".right31").click(function(e){
      e.preventDefault();
      $("body").addClass("dark");
      $(".thirtyOnePage").addClass("hide");
      $(".thirtyTwoPage").removeClass("hide");
    });

    $(".left32").click(function(e){
      e.preventDefault();
      $("body").addClass("light");
      $(".thirtyTwoPage").addClass("hide");
      $(".fifthPage").removeClass("hide");
    });

    $(".right32").click(function(e){
      e.preventDefault();
      $("body").addClass("dark");
      $(".thirtyTwoPage").addClass("hide");
      $(".thirteenPage").removeClass("hide");
    });

    $(".turn-page9").click(function(e){
      e.preventDefault();
      $("body").addClass("dark");
      $(".thirtyThreePage").addClass("hide");
      $(".thirtyFivePage").removeClass("hide");
    });

    // $(".left33").click(function(e){
    //   e.preventDefault();
    //   $("body").addClass("light");
    //   $(".thirtyThreePage").addClass("hide");
    //   $(".fifthPage").removeClass("hide");
    // });
    //
    // $(".right33").click(function(e){
    //   e.preventDefault();
    //   $("body").addClass("dark");
    //   $(".thirtyThreePage").addClass("hide");
    //   $(".thirteenPage").removeClass("hide");
    // });


    // need path for right32


// add buttons
    $(".turn-page6").click(function(e){
      e.preventDefault();
      $("body").addClass("dark");
      $(".eigthPage").addClass("hide");
      $(".ninthPage").removeClass("hide");
    });

    $(".turn-page6").click(function(e){
      e.preventDefault();
      $("body").addClass("dark");
      $(".eigthPage").addClass("hide");
      $(".ninthPage").removeClass("hide");
    });




  });
});
