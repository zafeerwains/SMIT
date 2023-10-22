let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function input() {
    return document.getElementById("inputvalue").value
}
function showOutput(z) {
    return document.getElementById("output").innerHTML = '<span style="color:blue;,font-size:17px;">' + z + '</span>'
}

function clear2() {
    document.getElementById("inputvalue").value = ""
}
function clear1() {
    document.getElementById("output").innerHTML = ""
}
document.getElementById("original").innerHTML = new Date
function tellToday() {
    let time = new Date()
    let a = time.getHours()
    let b = time.getMinutes()
    let c = time.getSeconds()
    let fulltime = a + ":" + b + ":" + c
    document.getElementById("output").innerHTML += '<br> You click @<span style="color:red; font-size: 20px;" >' + fulltime + '</span>'
}
function nameOfToday() {
    clear1()
    let time = new Date()
    let today = time.getDay()
    today = days[today]
    showOutput(today)
    tellToday()
}
function daypass() {
    clear1()
    let value = input()
    if (!value) {
        alert("Enter the Date of birth ")
        tellToday()
        return
    }
    let time = new Date()
    let birthtime = new Date(value)
    let timepass = time.getTime() - birthtime.getTime()
    timepass = timepass / (1000 * 3600 * 24)
    timepass = Math.floor(timepass)
    showOutput(timepass)
    tellToday()
}
function nextbirthday() {
    clear1()
    let value = input()
    if (!value) {
        alert("Enter the Date of birth ")
        tellToday()
        return
    }
    let currentBirth = new Date()
    let birthyear = new Date(value)
    birthyear = birthyear.setFullYear(currentBirth.getFullYear())
    let day = birthyear - currentBirth
    day = day / (1000 * 3600 * 24)
    day = Math.floor(day)
    showOutput(day)
    tellToday()
}
function greet() {
    clear1()
    let name = prompt("Enter the name of user")
    let greet
    let date = new Date()
    date = date.getHours()
    if (date > 4 && date < 10) {
        greet = "Good Morning"
    }
    else if (date >= 10 && date < 14) {
        greet = "Good Noon"
    }
    else if (date >= 14 && date < 18) {
        greet = "Good Evening"
    }
    else {
        greet = "Good Night"
    }
    let show = greet + " " + name
    document.getElementById("greet").innerHTML = '<span style="color:white;">' + show + '</span>'
    showOutput(show)
    tellToday()
}
function time1() {
    tellToday()
}
function time2() {
    tellToday()
}
function time3() {
    tellToday()
}
function calculationoftax(amount, rate) {
    let totalamount = amount * (rate / 100)
    return totalamount
}
function taxCalculate(amount, tax1) {
    let tax = amount + tax1
    return tax
}
function ct() {
    clear1()
    let amount = +prompt("Enter the amount ")
    let rate = +prompt("Enter the percentage of tax")
    showOutput(calculationoftax(amount, rate))
    tellToday()
}
function ctax() {
    clear1()
    let amount = +prompt("Enter the amount ")
    let rate = +prompt("Enter the percentage of tax")
    let tax = calculationoftax(amount, rate)
    // showOutput(tax)
    showOutput(taxCalculate(amount, tax))
    tellToday()
}

