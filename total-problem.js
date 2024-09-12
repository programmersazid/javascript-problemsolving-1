
function calculateTax(income, expenses) {
    let s = income - expenses;
    let taxMoney = s * 0.20;
    
           
    if( (income >= 0 && expenses >= 0)|| expenses > income){
      
      return "Invalid Input";
    }
  
    return taxMoney;
    
  }
  
  
function sendNotification(email) {
    let Email = email.split('@');
    if(Email.length === 2)
    {
      let userName = Email[0];
      let domainName = Email[1];
  
      return '${userName}sent you an email from ${domainName}';
    }
    else if(email.indexOf('@') === -1){
      return "Invalid Email";
    }
  
  
  }
  
   
  function checkDigitsInName(name) {
    if( typeof name !== "string"){
        return "Invalid Input";
    }
    else{
        for (i= 1; i < name.length; i++){
            if( isNaN(name[i])){
                return true;
            }
            else{
                return false;
            }
        }
    }
}

function calculateFinalScore(obj)  {

    let scoringResult = obj.testScore + obj.schoolGrade;

    let finalResult = scoringResult + 20;


    if(typeof obj !== 'object' ) {

          return 'Invalid Input';
    }
    else if(obj.isFFamily === true && finalResult >= 80) {

          return true;   
    }

    else if(scoringResult === 80 && obj.isFFamily === false) {

         return true;
    }

    else if(obj.testScore <50 && obj.schoolGrade <30 && obj.isFFamily === false ) {

        return false;
    }

    else if(obj.testScore <40 && obj.schoolGrade <20 && obj.isFFamily === true ) {

        return false;
    }

    else if(obj.testScore >= 40 && obj.schoolGrade >= 20 && obj.isFFamily === true ) {

        return true;
    }

    else {

        return false;
    }   
};

  
function waitingTime(waitingTimes, serialNumber) {

    if (!Array.isArray(waitingTimes) || typeof serialNumber!== "number") {

      return "Invalid Input";

    }
    let x = serialNumber - 1;
    const interviewCall = x - waitingTimes.length;
  
    let count = 0;

    for (const t of waitingTimes) {

      count = count + t;

    }
    const avgTime = Math.round(count/ waitingTimes.length);
    let  r = avgTime * interviewCall;
    return r;
  }
 
  
  
  