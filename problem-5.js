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
 