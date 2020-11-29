var name=prompt("What is your name?");


/*time*/
var count = 120;
var interval = setInterval(timer, 1000);
function timer(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === -1){
    clearInterval(interval);
    alert("You're out of time!\n"+"\nYou scored "+getScore());
    document.getElementById("Result").disabled = false;
 document.getElementById("Result").style.background="#dbf6e9";
 document.getElementById("details").disabled = false; 
 document.getElementById("details").style.background="#dbf6e9";
  }
};

/* hourglass*/

function hourglass() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf251;";
  setTimeout(function () {
      a.innerHTML = "&#xf252;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf253;";
    }, 2000);
}
hourglass();
setInterval(hourglass, 3000);



/*marks*/

var answers = ["A","D","A","C","D"];

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<4; y++)
      if(radios[y].checked) 
      return radios[y].value; // return the checked value
  		
}

//scores

function getScore(){
  var score = 0;
  for (var i=0; i<5; i++)
    if(getCheckedValue("radio"+(i+1))===answers[i]) score += 1; // increment only
  return score;
}

function returnScore(){

 document.getElementById("Result").disabled = false;
 document.getElementById("Result").style.background="#dbf6e9";
 document.getElementById("details").disabled = false; 
 document.getElementById("details").style.background="#dbf6e9";

    clearInterval(interval);
if(name.length!=0)
{
  alert(name.toUpperCase()+", you scored "+ getScore() +" out of 5.");
}
else
{	
  alert("You scored "+ getScore() +" out of 5.");
}
}



/*piechart*/
function viewScore(){

	var chart = new CanvasJS.Chart("chartContainer",
	{
		
		theme: "light2",
		responsive : true, 
		animationEnabled: true,
		data: [
		{       
			type: "pie",
			indexLabelFontSize: 20,
			radius: 100,
			showInLegend: true,
			startAngle: 25,
			toolTipContent: "#percent %",
			legendText: "{indexLabel}",
			dataPoints: [
				{  y: getScore(), indexLabel: "Correct", color:"green" },
				{  y: 5-getScore(), indexLabel: "Wrong", color:"red" },
				]
		}
		]
	});
	chart.render();
}

//detailed analysis