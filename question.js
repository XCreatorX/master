/*/////////////////////////////
* Quiz Evaluation Script © jscheuer1
* permission to use granted
* this credit must stay intact
/////////////////////////////*/

//Set number of questions
var numQuest=2

////////////////Stop Editing///////////////
var ie=document.all
function showAnswer(el,ans){
	ie? ie[el].innerHTML='The answer is: '+ ans : document.getElementById(el).innerHTML='The answer is: '+ ans
}

function addup()  {
	var q, right, statement, total=0
	questions=new Array();
	for (i = 0; i < numQuest; i++)
		questions[i]=0
		if (document.forms.quiz.q1['right1']){
			for (i = 0; i < numQuest; i++){
				q="q"+(i+1)
				right="right"+(i+1)
				if (document.forms.quiz[q][right].checked)
					questions[i]=1
			}
		}
		else if (document.getElementById){
			for (i = 0; i < numQuest; i++){
				right="right"+(i+1)
				if (document.getElementById(right).checked)
					questions[i]=1
			}
		}
		else
			return;
		for (i = 0; i < numQuest; i++)
			total += questions[i]
/*/////////////////////////////////////////////////
Set score response below.
///////////////////Edit Below to Suit/////////////*/
statement='You scored '+ total +' out of '+ numQuest +' correct, '+ Math.round(total/numQuest*100) +'%'
/////////////////Stop Editing///////////////////
ie? ie.results.innerHTML=statement : document.getElementById('results').innerHTML=statement
}
function clearR(){
ie? ie.results.innerHTML='' : document.getElementById('results').innerHTML=''
for (i = 0; i < numQuest; i++)
ie? ie["ans"+(i+1)].innerHTML='' : document.getElementById("ans"+(i+1)).innerHTML=''
}