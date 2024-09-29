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