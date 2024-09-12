
function calculateTax(income, expenses) {
  let s = income - expenses;
  let taxMoney = s * 0.20;
  
         
  if( (income >= 0 && expenses >= 0)|| expenses > income){
    
    return "Invalid Input";
  }

  return taxMoney;
  
}




