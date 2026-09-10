if (40 > 50) {
  console.log("if body");
 } else {
  console.log("else body");
}
 let password = "123abc";
  let retypePass = "123qabc";
 if (password === retypePass) {
       console.log("login");
 } else {
   console.log("plz checkout ur Pass");
 }

let UserIsLogin = true;

 if (UserIsLogin) {
  console.log("Welcome to our website");
 } else {
  console.log("plz login first");
}
 let roles = "studsssent";

 if (roles == "admin") {
  console.log("dashbord page");
} else if (roles == "teacher") {
  console.log("teacher page ");
} else if (roles == "student") {
 console.log("studetn page");
} else {
   console.log("first login ");
}

 let balance = 5000;
 let withdraw = 2000;

if (withdraw <= balance) {
 console.log("Withdrawal successful");
} else if (withdraw > balance) {
  console.log("Insufficient balance");
 }

 let total = 2500;

 if (total >= 5000) {
   console.log("30% discount");
}
else if (total >= 3000) {
   console.log("20% discount");
} else if (total >= 2000) {
  console.log("10% discount");
 } else if (total >= 1000) {
  console.log("5% discount");
 } else {
  console.log("No discount");
}

let role = "admin";
let password1 = "123";

if (role === "admin" && password1 == 123) {
  console.log("dahsbord page");
} else {
  console.log("plz check ur username and pass");
}

 
let loginByGithub = false;
let loginByGoogle = true;

if (loginByGithub || loginByGoogle) {
  console.log("Welcome");
} else {
  console.log("plz first login");
}



let age = "20";
let age2 = 20;

console.log(age == age2);
console.log(age === age2);