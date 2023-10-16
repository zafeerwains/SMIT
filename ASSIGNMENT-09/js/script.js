let empty = " "

document.getElementById("css").onclick = function () {
    document.getElementById("os").innerHTML = empty
    document.getElementById("rs").innerHTML = empty
    let a = prompt("Enter first string ")
    let b = prompt("Enter second string ")
    let c = a + " " + b
    document.getElementById("os").innerHTML = 'let a=prompt("Enter first string "); let b=prompt("Enter second string "); let c=a+" "+b;'
    document.getElementById("rs").innerHTML = c
}
document.getElementById("anu").onclick = function () {
    document.getElementById("os").innerHTML = empty
    document.getElementById("rs").innerHTML = empty
    let a = prompt("Enter first Name ")
    let b = prompt("Enter second Name ")
    let c = "Hi! " + a + " " + b + " you are learning JS"
    document.getElementById("os").innerHTML = 'let a=prompt("Enter first string "); let b=prompt("Enter second string "); let c=a+" "+b;'
    document.getElementById("rs").innerHTML = c
}
document.getElementById("cop").onclick = function(){
    document.getElementById("os").innerHTML = empty
    document.getElementById("rs").innerHTML = empty    
    let num1 = prompt("Enter First Value")
    let num2 = prompt("Enter second Value")
    
    if (num1 === num2){
    
        document.getElementById("rs").innerHTML = ("Your condition is true.")
        document.getElementById("os").innerHTML = "num1 === num2"
    } else {
        document.getElementById("rs").innerHTML = ("Your condition is false.")
        document.getElementById("os").innerHTML = (num1 + "===" + num2)
    }
}
document.getElementById("iei").onclick = function () {
    document.getElementById("os").innerHTML = empty
    document.getElementById("rs").innerHTML = empty
    let a = prompt("Enter Your marks ")
    if (a >= 90) {
        alert("you got A")
        document.getElementById("rs").innerHTML = "You got A"
        document.getElementById("os").innerHTML = a
    } else if (a >= 80) {
        alert("you got B")
        document.getElementById("rs").innerHTML = "You got B"
        document.getElementById("os").innerHTML = a
    } else if (a >= 70) {
        alert("you got C")
        document.getElementById("rs").innerHTML = "You got C"
        document.getElementById("os").innerHTML = a
    } else if (a >= 60) {
        alert("you got D")
        document.getElementById("rs").innerHTML = "You got D"
        document.getElementById("os").innerHTML = a
    } else if (a >= 50) {
        alert("you got E")
        document.getElementById("rs").innerHTML = "You got E"
        document.getElementById("os").innerHTML = a
    } else {
        alert("YOU ARE FAIL ")
        document.getElementById("rs").innerHTML = "You are fail"
        document.getElementById("os").innerHTML = a
    }
}
document.getElementById("tsc").onclick = function () {
    document.getElementById("os").innerHTML = empty
    document.getElementById("rs").innerHTML = empty

    let age = +prompt("Enter Your Age")
    let weight = +prompt("Enter Your Weight")

    if (age >= 18 && weight <= 70) {

        document.getElementById("rs").innerHTML = ("You are healthy.")
        document.getElementById("os").innerHTML = " AGE= " + age + "<br>" + " Weight= " + weight + ""
    }

    else if (age >= 18 && weight > 70) {
        document.getElementById("rs").innerHTML = (" You are fatty ")
        document.getElementById("os").innerHTML = " AGE= " + age + "<br>" + " Weight= " + weight + ""

    } else {
        document.getElementById("os").innerHTML = " AGE= " + age + "<br>" + " Weight= " + weight + ""
        document.getElementById("rs").innerHTML = ("You are a Baby")

    }
}

document.getElementById("nested").onclick = function () {
    document.getElementById("os").innerHTML = empty
    document.getElementById("rs").innerHTML = empty

    let age = +prompt("Enter Your Age");

    if (age >= 18) {

        let weight = +prompt("Enter Your Weight")

        if (weight <= 70) {
            document.getElementById("os").innerHTML = "Age is " + age + " wieght is" + weight
            document.getElementById("rs").innerHTML = "You are smart man."
        } else {
            document.getElementById("rs").innerHTML = "You are Fatty."
            document.getElementById("os").innerHTML = "Age is " + age + " wieght is" + weight

        }
    } else {
        document.getElementById("rs").innerHTML = "You are a Baby."
        document.getElementById("os").innerHTML = "Age is " + age + " wieght is" + weight

    }
}
document.getElementById("login").onclick = function () {
    document.getElementById("os").innerHTML = empty
    document.getElementById("rs").innerHTML = empty
    let userName = prompt("Enter your user name")
    let password = prompt("Enter your password")
    if (userName === "Zafeer" && password === "123") {
        document.getElementById("rs").innerHTML = userName + ", User logged in."
    } else {
        document.getElementById("rs").innerHTML = userName + " ,Username or Password is Incorrect"
    }
}
document.getElementById("co").onclick = function () {
    document.getElementById("rs").innerHTML = empty
}
document.getElementById("cs").onclick = function () {
    document.getElementById("os").innerHTML = empty
}

