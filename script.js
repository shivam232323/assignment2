
var count = 0;
var k =0;
document.getElementById("p1").addEventListener('keydown', function (e) {
    if(e.key == "." || e.key == ",")
    {
       count++;
       window.alert("Remove dot and comma")

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
    k++;
    window.alert("Your Answer can be simplified further");
  
  }
  else
  {
    k=0;
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
        document.getElementById("t1").innerHTML ="Answer is incorrect";

    }
    else
    {
      console.log(k);
    if(a.includes(".") || a.includes(","))
    {
      document.getElementById("t1").innerHTML ="Answer is incorrect";

    }
    else if(a == 160 && k == 0)
    {
        document.getElementById("t1").innerHTML ="Your Answer is Correct for Q1";

    }
    else if(k>0)
    {
      document.getElementById("t1").innerHTML =" ";
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
  
