console.log("JavaScript wants to know who will win rock, paper, scissors!");


// rock, baby, and scissors are 0,1,2 indexes within the array

// Math.random selects a random integers from the array
//options.length refers to the total length of the options in the array rather than an actual number
// we need this to be a new value, every single time the function is run (onclick function - listen for the button/action--> function (playGame))


//we named our array randomIndex, so this is the same thing as listing: options[var randomIndex = Math.floor(Math.random() * options.length);]

//if computer _________ and human ________ then --> __________


//1. ESTABLISH USERS CHOICE

	var options = ["Rock","Paper","Scissors"];

	function randomIndex() {
		 var index = Math.floor(Math.random()*options.length);
		return options[index];
	}

	function buttonClickRock(){
		console.log("User clicked Rock");
		var compChoice = randomIndex();
		document.getElementById("user-message").style.display = "block";
		document.getElementById("user-choice").innerHTML = "ROCK";

		document.getElementById("computer-choice").innerHTML = compChoice; 
		document.getElementById("computer-message").style.display = "block";

		var result = ""

		if (compChoice === "Rock") {
			result = "You Tie!";
		} else if (compChoice === "Paper") {
			result = "You Lose!";
		} else  {
			result = "You Win!";
		}
		
		setTimeout(function(){
			document.getElementById("result").innerHTML = result;
	    }, 2000);
	}    

	
	function buttonClickPaper(){
		console.log("User clicked Paper");
		var compChoice = randomIndex();
		document.getElementById("user-message").style.display = "block";
		document.getElementById("user-choice").innerHTML = "PAPER";

		document.getElementById("computer-choice").innerHTML = compChoice; 
		document.getElementById("computer-message").style.display = "block";

		var result = ""

		if (compChoice === "Paper") {
			result = "You Tie!";
		} else if (compChoice === "Scissors") {
			result = "You Lose!";
		} else  {
			result = "You Win!";
		}
		
		setTimeout(function(){
			document.getElementById("result").innerHTML = result;
	    }, 2000);
	 }

		    

		
	function buttonClickScissors() {
		console.log("User clicked Scissors");
	
		var compChoice = randomIndex();
		document.getElementById("user-message").style.display = "block";
		document.getElementById("user-choice").innerHTML = "SCISSORS";

		document.getElementById("computer-choice").innerHTML = compChoice; 
		document.getElementById("computer-message").style.display = "block";

		var result = ""

		if (compChoice === "Scissors") {
			result = "You Tie!";
		} else if (compChoice === "Rock") {
			result = "You Lose!";
		} else  {
			result = "You Win!";
		}


		setTimeout(function(){
			document.getElementById("result").innerHTML = result;
	    }, 2000);
	}
		
		


		   



//2. ANNOUNCE "you chose______"

//3. HAVE COMPUTER SELECT

// function playGame(){
// 			var options = ["rock", "paper","scissors"];
// 			var randomIndex = Math.floor(Math.random() * options.length);
// 			options[randomIndex]
// 			resultMessage

//   	 		var computerOption = Math.random();
// 			if (computerOption <0.34){
// 				computerOption = "stone";
// 			}else if(computerOption <=0.67){
// 				computerOption = "paper";
// 			}else{
// 				computerOption = "scissor";
// 			}
			
// 			resultMessage = compare(userOption, computerOption);
			
// 			document.getElementById("result").innerHTML = 
// 			"<p>User select: " + userOption + " - Computer select:" 
// 			+ computerOption + "</p> <p>" + resultMessage + "</p>";
			
//   	    }






//4. ANNOUNCE "computer chose_____"


 

// function(options[0]){
// 		console.log("Computer chose Rock");
// 		document.getElementById("computerChoice").innerHTML = "ROCK!";
// 		var computerLine = document.getElementById("computer-choice-line");
// 		computerLine.style.display = "block";
// 	}
// function(options[1]){
// 	console.log("Computer chose Paper");
// 	document.getElementById("computerChoice").innerHTML = "PAPER!";
// 	var computerLine = document.getElementById("computer-choice-line");
// 	computerLine.style.display = "block";
// }
// function(options[2]){
// 	console.log("Computer chose Scissors");
// 	document.getElementById("computerChoice").innerHTML = "SCISSORS!";
// 	var computerLine = document.getElementById("computer-choice-line");
// 	computerLine.style.display = "block";
// }



//5. COMPARE 

// function compare(userChoice, options)
// 		{
// 		    if (userChoice = "ROCK!") and 
// 		    {
// 		        if (options == "scissors")
// 		        {
// 		             return "You win.";
// 		        } else {
// 		            return "The computer win. Try again.";
// 		        }
		        
// 		    } else if (userChoice == "PAPER!") {
		        
// 		        if (options == "ROCK!")
// 		        {
// 		             return "You win." ;
// 		        } else if("scissors") {
// 		            return "The computer win. Try again." ;
// 		        }
		        
// 		    } else if (userChoice == "SCISSORS!") {
		      
// 		        if (options == "rock")
// 		        {
// 		            return "The computer wins. Try again.";
// 		        }else{
// 		            return "You win.";
// 		        }
// 		    }
// 		}  




// COMMENT

// 1. know users choice
// 2. know computers choice 
// 3. build out html page, boiler plate from original page
// 4. change css - 3 buttons: rock, paper, scissor (give them an id)
// 5. write the if statement (if user says rock, and computer says scissors---> what happens: won, lost, tie!); 
// // 6. Format:
// 	Button 1/button 2/ button 3
// 	Computer chose _____
// 	You won/you lost/you tie!: 
// 7. Tie
// 8. Won
// 9. Lost

// ** if statement inside of the statement - maybe (?)
// function Rock   --> as an onclick event  --> updating a variable
// function scissor