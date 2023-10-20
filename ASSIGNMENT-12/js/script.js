function clear2(){
    document.getElementById("output").innerHTML = ""
}
function clear1() {
    document.getElementById("inputvalue").value = ""
}
function round() {
    document.getElementById("output").innerHTML = ""
    let value = document.getElementById("inputvalue").value
    value = Number(value)
    if (!value) {
        alert("Enter a number")
        return
    }
    value = Math.round(value)
    document.getElementById("output").innerHTML = 'The round off value is<span style="font-size:24px; color:green;">"' + value + '"</span>'
}
function floor() {
    document.getElementById("output").innerHTML = ""
    let value = document.getElementById("inputvalue").value
    value = Number(value)
    if (!value) {
        alert("Enter a number")
        return
    }
    value = Math.floor(value)
    document.getElementById("output").innerHTML = 'The floor  value is<span style="font-size:24px; color:green;">"' + value + '"</span>'
}
function ceil() {
    document.getElementById("output").innerHTML = ""
    let value = document.getElementById("inputvalue").value
    value = Number(value)
    if (!value) {
        alert("Enter a number")
        return
    }
    value = Math.ceil(value)
    document.getElementById("output").innerHTML = 'The ceil  value is<span style="font-size:24px; color:green;">"' + value + '"</span>'
}
function random() {
    document.getElementById("output").innerHTML = ""
    let value = Math.random()
    document.getElementById("output").innerHTML = '<span style="font-size:30px;  color:green;">' + value + '</span>'
}
function dice() {
    document.getElementById("output").innerHTML = ""
    let dice = (Math.random() * 6) + 1
    dice = Math.floor(dice)
    document.getElementById("output").innerHTML = '<span style="font-size:30px;  color:green;">' + dice + '</span>'
}
function password() {
    document.getElementById("output").innerHTML = ""
    let value = document.getElementById("inputvalue").value
    value = Number(value)
    if (!value) {
        alert("Enter a Length of Password")
        return
    }
    let a = "QWERTYUIOPLKJHGFDSAZXVBNM"
    let b = "qwertyuioplkjhgfdsazxcvbnm"
    let c = "1234567890"
    let d = "!@#$%^&*()-=<>?|=+/-"
    let e = a + b + c + d
    for (let z = 0; z < value; z++) {
        let random = Math.random()
        random = random * e.length
        random = Math.floor(random)
        let strong = e.charAt(random)
        // strong+=strong
        let strongPassword = document.getElementById("output").innerHTML += strong
        document.getElementById("output").innerHTML = '<span style="font-size:30px;  color:green;">' + strongPassword + '</span>'
    }
}
function cs() {
    let value = document.getElementById("inputvalue").value
    value = Number(value)
    if (!value) {
        alert("Enter a string which will be converted into Number")
        return
    }
    console.log(value)
    document.getElementById("output").innerHTML = '<span style="font-size:30px;  color:green;">' + value + '</span>'
}
function cgst() {
    let value = document.getElementById("inputvalue").value
    value = Number(value)
    if (!value) {
        alert("Enter the Amount")
        return
    }
    let tax = +prompt("Enter the Percentage of Tax ")
    tax = value * (tax / 100)
    let tvalue = value + tax
    tvalue = tvalue.toFixed(2)
    document.getElementById("output").innerHTML = 'The Amount<span style="font-size:30px;  color:green;">"' + value + '"</span><br>The Tax Amount<span style="font-size:30px;  color:red;">"' + tax + '"</span><br>The  Total Amount<span style="font-size:30px;  color:blue;">"' + tvalue + '"</span>'

}
function cl() {
    let value = document.getElementById("inputvalue").value
    value = Number(value)
    if (!value) {
        let ovalue = 25.123456
        ovalue = ovalue.toFixed(2)
        document.getElementById("output").innerHTML = 'The Value is Rounded upto two Decimal<span style="font-size:30px;  color:green;">"' + ovalue + '"</span>'
    } else {
        value = value.toFixed(2)
        document.getElementById("output").innerHTML = 'The Value is Rounded upto two Decimal<span style="font-size:30px;  color:green;">"' + value + '"</span>'
    }
}
function input() {
    return document.getElementById("inputvalue").value
}
