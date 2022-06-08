
var count = 0;

document.getElementById("p1").addEventListener('keydown', function (e) {
    if(e.key == "." || e.key == ",")
    {
       count++;

    }
    }, false);

    
document.getElementById("p2").addEventListener('keydown', function (e) {
    if(e.key == "." || e.key == ",")
    {
      window.alert(`Round your answer to nearest integer`);
    }
    }, false);


document.getElementById("btn").onclick = myFunction;

function sign(a)
{
  if(a == 160)
  {
  if(a.includes("+"))
  {
    window.alert("Your Answer can be simplified further");

  }
}
  
}

  

function myFunction() {
    var a = document.getElementById("p1").value;
    var b = document.getElementById("p2").value;

    sign(a);
    if(count)
    {
      count = 0;
        window.alert("Remove fullstop and comma from your answer");
    }
    else
    {
    
    if(a == 160)
    {
        document.getElementById("t1").innerHTML ="Your Answer is Correct for Q1";

    }
    else
    {
        document.getElementById("t1").innerHTML =`Your Answer is Incorrect ,The correct answer is 160`;

    }

    if(b == 414)
    {
        document.getElementById("t2").innerHTML ="Your Answer is Correct for Q2";

    }
    else
    {
        document.getElementById("t2").innerHTML ="Your Answer is Incorrect ,The correct answer is 414";

    }
  }

  }
  
