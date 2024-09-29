function calculateTax(income, expenses) {
  if (
    income <= 0 ||
    expenses <= 0 ||
    income < expenses ||
    typeof income !== "number" ||
    typeof expenses !== "number"
  ) {
    return "Invalid Input";
  }
  const savedCost = income - expenses;
  const tax = savedCost * 0.2;
  return tax;
}


function sendNotification(email) {
  if (email.indexOf("@") < 0 || typeof email !== "string") {
    return "Invalid Email";
  }
  const username = email.split("@")[0];
  const domainName = email.split("@")[1];
  const message = username + " " + "sent you an email from" + " " + domainName;
  return message;
}

function checkDigitsInName(name) {
  if (typeof name !== "string" || name === undefined) {
    return "Invalid Input";
  }
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (const num of numbers) {
    for (const nameVal of name) {
      if (num == nameVal) {
        return true;
      }
    }
  }
  return false;
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
 
  
  
  