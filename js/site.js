
//Get the Values From the Page
//Starts or controller function
function getValues(){

  //Get Values from the Page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
     
    
    //Parse attempt into integers Converts a string to an integer
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //Check
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
          //We call Generate Numbers
          let numbers = generateNumbers(startValue, endValue);
          //We call Display Numbers
             displayNumbers(numbers);
     }
     else{
      alert("Please enter integers in both fields");
     }

  
}

//Generate numbers from the start value to the end value
//Logic Function (s)
function generateNumbers(sValue, eValue){
  //Declare an array to hold the numbers
   let numbers = [];

  //We want to get all numbers from the start value to the end value
  for(let index = sValue; index <= eValue; index++){
    //This will execute in a loop until index = eValue
    numbers.push(index);
  }
   return numbers;
}

//Display the numbers and highlight the even numbers in bold
//Display Function (s)
function displayNumbers(numbers){
  
   let templateRows = "";


  //Loop over the input numbers
  for(let index = 0; index < numbers.length; index++){

    let className = "even";
    //Get the current number
    let number = numbers[index];
    
    //Return the remainder if zero then it is an even number
    if(number % 2 == 0){
      //This is an even number
      className = "even";
    }
    else{
      //This is an odd number
      className = "odd";
    }
    templateRows += `<tr><td class="${className}">${number}</td></tr>`;
  }
  document.getElementById("results").innerHTML = templateRows;

}


