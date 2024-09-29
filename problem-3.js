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