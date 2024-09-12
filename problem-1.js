
function calculateTax(income, expenses) {
  let s = income - expenses;
  let taxMoney = s * 0.20;
  
         
  if( (income >= 0 && expenses >= 0)|| expenses > income){
    return "Invalid Input";
  }

  return taxMoney;
  
}


let m =  calculateTax(5000,2000);
console.log(m);

