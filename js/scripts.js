$(document).ready(function(){
  $("#survey").submit(function(event){
    event.preventDefault();
    $("#survey-hide").hide();
    const name = $("#nameInput").val();
    const questionOne = $("input:radio[name=questionOne]:checked").val();
    const questionTwo = $("input:radio[name=questionTwo]:checked").val();
    const questionThree = $("input:radio[name=questionThree]:checked").val();
    const questionFour = $("input:radio[name=questionFour]:checked").val();
    const questionFive = $("input:radio[name=questionFive]:checked").val();
    let total = 0;

    $(".name").text(name);

    if (questionOne === "isekai") {
      total +=1;
    } else if (questionOne === "fantasy") {
      total +=2;
    }else if (questionOne === "comedy") {
      total +=3;
    }else if (questionOne === "sliceOfLife") {
      total +=4;
    }else {
      total +=5;
    };

    if (questionTwo === "slime") {
      total +=1;
    } else if (questionTwo === "castle") {
      total +=2;
    }else if (questionTwo === "attackOnTitan") {
      total +=3;
    }else if (questionTwo === "myHero") {
      total +=4;
    }else {
      total +=5;
    };

    if (questionThree === "goku") {
      total +=1;
    } else if (questionThree === "saitama") {
      total +=2;
    }else if (questionThree=== "naruto") {
      total +=3;
    }else if (questionThree=== "midoriya") {
      total +=4;
    }else {
      total +=5;
    };

    if (questionFour=== "ichigo") {
      total +=1;
    } else if (questionFour === "sasuke") {
      total +=2;
    }else if (questionFour === "kakashi") {
      total +=3;
    }else if (questionFour === "edward") {
      total +=4;
    }else {
      total +=5;
    };

    if (questionFive === "bakugo") {
      total +=1;
    } else if (questionFive === "josephJoestar") {
      total +=2;
    }else if (questionFive === "kirito") {
      total +=3;
    } else if (questionFive === "kaneki") {
        total +=4;
    }else {
      total +=5;
    };

    if (total <=6) {
      $("#result1").show();
    } else if (total <=12) {
      $("#result2").show();
    } else if (total <=18) {
      $("#result3").show();
    }else {
      $("#result4").show();
    }

  });
});