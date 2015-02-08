var x = [];
var y = [];
var probSetAns =  [];
var num1;
var num2;
var numRight =0;

var count = 0;

$(document).ready(function(){
	for(i = 0; i< 10; i++){
		num1=Math.floor((Math.random() * 10)+1);
		num2=Math.floor((Math.random() * 20)+1);
		x.push(num1);
		y.push(num2);
		probSetAns.push(num1+num2);
	};

	display(x[0],y[0]);
	getAnswer();

});

//displays text	
function display(first, second){
	//$("body").append("<p>" + x[0] + "+" + y[0] + "=" + "</p>");
	$("#problem").html("<P>" + first + "+" + second + "=" + "</P>");
}


function getAnswer(){
	$("#go").click(function() {
		
		var ans=$("#answer").val();
		alert(probSetAns[count]);
  		if(ans == probSetAns[count]){
  			alert("GOOD JOB!!");

  			numRight++;
  		}else{
  			alert("NO PRESSURE THERE'S ALWAYS A NEXT TIME");

  		}

  		//increment the array pointer for index I++
  		count++;
	  	if(count < 10){
	  		//show the next numbers $("#problem").html("")
	  		display(x[count],y[count]);
  		}
  		else{
  			$("#problem").html("<P> you got " + numRight + " right</p>");
  		}
  	
	});
}