function sendNotification(email) {
  if (email.indexOf("@") < 0 || typeof email !== "string") {
    return "Invalid Email";
  }
  const username = email.split("@")[0];
  const domainName = email.split("@")[1];
  const message = username + " " + "sent you an email from" + " " + domainName;
  return message;
}