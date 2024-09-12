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
