var cities = ["Faisalabad", "Lahore", "karachi ", "Islamabad", "Burewala","Sheikhupura ", "Kashmir"];
let empty=""
document.getElementById("simple-alert").onclick = function(){
    document.getElementById("output").innerHTML = empty
    alert("Alert button is clicked")
    document.getElementById("output").innerHTML = "Alert button is clicked"
}


document.getElementById("print-name").onclick = function(){
    document.getElementById("output").innerHTML = empty
    var myName = prompt("please enter your name")
    document.getElementById("output").innerHTML = myName ;
}

document.getElementById("print-cities").onclick = function (){
    document.getElementById("output").innerHTML = empty
    for (var i=0; i<cities.length ; i++){
        output.innerHTML += "I Love " + cities[i] + "<br>"
    }
}

document.getElementById("add-city").onclick = function (){
    document.getElementById("output").innerHTML = empty
    var cities = ["Faisalabad", "Lahore", "karachi ", "Islamabad", "Burewala","Sheikhupura ", "Kashmir"];
    var newCity = prompt ("Please enter city name you want to add")
    cities.push(newCity)
for (var i = 0 ; i < cities.length ; i++){
   output.innerHTML += "I Love " + cities[i] + "<br>"
}
}
document.getElementById("generate-table").onclick = function(){
    document.getElementById("output").innerHTML = empty

    let num = +prompt("please enter table number")
    for(var i=1 ; i<11 ; i++){
        var res = i*num
        output.innerHTML += num + " " + "*" + " " + i + " " + "=" + " " + res + "<br>"
    }
}
document.getElementById("clear-output").onclick = function (){
    document.getElementById("output").innerHTML = empty
}