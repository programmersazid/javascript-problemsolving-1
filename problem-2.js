
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

 

