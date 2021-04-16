var name = prompt("Enter your name please:")
var age = parseInt(prompt("Enter your age please:"))

function userName(name){
    var x = "Welcome to our website, " + name + ".";
    document.getElementById("slog").innerHTML = x;

}

userName(name);


var users = [

    {
        name:"",
        age: 0,
    },

]



function userRecord(name, age){

    var newName = name;
    var newAge = age;
    users[0].name = newName;
    users[0].age = newAge;
}

userRecord(name, age);

var userInfo = users[0].name + ", " + users[0].age



alert(userInfo)

var ale = users[0].age >= 18 ? "Welcome." : "Access Denied.";

alert(ale);


