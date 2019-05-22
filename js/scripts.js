//setting up people
var person1 =
{
  firstName:"Elizabeth",
  lastName:"Monahan",
  age: 24,
  residence: "New Jersey"
};
var person2 =
{
  firstName: "Sandra",
  lastName: "Kramer",
  age: 25,
  residence: "Phoenix"
};
console.log(person1, person2);
document.getElementById("ppl").innerHTML = person1.firstName + " " + person1.lastName
+ " is " + person1.age + " years old " + "and from " + person1.residence + "!";
document.getElementById("ppl").innerHTML = person2.firstName + " " + person2.lastName
+ " is " + person2.age + " years old " + "and from " + person2.residence + "!";
//setting up messages possible
var messages [];

//chat simulation

function Message(type, user, message) {
  this.type = type;
  this.user = user;
  this.message = message;
}

function addMessageHandler(buttonId) {
  var messType
  var messU
  switch (buttonId)
  {
    case 'send-button':
      messType = 'out-message';

      break;
    case 'reply-button':
      messType = 'in-message';

      break;
    default:
      messType = 'undefined';
      break;

      }
var message = document.getElementById('id);
var user = document.getElementById('');
      var message = new Message (type, user, message);

messages.push(message);

var newT = document.createElement('m');
newT.className = message.type;

var newU = document.createElement('m');
newU.className = 'user';
var userNode = document.createTextNode(message.user);
userNode.appendChild(userNode);

var newM = document.createElement('m');
newM.className = 'message';
var mNode = document.createTextNode(message.message);
newM.appendChild(mNode);

newT.appendChild(newU);
newT.appendChild(newM);
var container = document.getElementById('message-container');
container.appendChild(newT);
}
function init () {
  //addMessageHandler function to buttons
  document.getElementById("send").onclick = function() {addMessageHandler("send")};
  document.getElementById("reply").onclick = function() {addMessageHandler("reply")};
}

// Initialize
init();
var fruit = ["mango", "pear", "banana"];
var veg = ["cucumber", "broccoli", "carrot"];
console.log(fruit, veg);
//button action
function myFunction() {
  var mes = "message changed"
  document.getElementById("buttonex").innerHTML = mes;
}
//greeting/named function
function hello()
{
  var c = "Patrick";
  var greeting = "Hello and welcome to the site, " + c;
  return (greeting);
  document.write(greeting + c);
}

console.log(hello(name));
//calculator function
function calc()
{
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var o = document.querySelector("#operator").value;
  var calculate;

  if (o == "add")
  {
    calculate = a+b;
  } else if (o == "sub")
  {
    calculate = a-b;
  } else if (o == "mult")
  {
    calculate = a*b;
  } else if (o == "divi")
  {
    calculate = a/b;
  }

  document.querySelector("#result").innerHTML = calculate;
}
//annonymous Function
var testExample = function()
{
  var next ="Let's try the calculator"
  return next;
}
console.log(testExample());
