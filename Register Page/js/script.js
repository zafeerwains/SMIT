const inputValue = input => document.getElementById(input).value.trim()
const emptyInputValue = input => document.getElementById(input).value = ""
const randomId = () => Math.random().toString(36).slice(2)
const emailVerify = (users, logInEmail) => {
    for (let user of users) {
        if (logInEmail === user.userEmail) return user
    }
}
const signUp = () => {
    let users = JSON.parse(localStorage.getItem("users")) || []
    let firstName = inputValue("fName")
    if (firstName.length < 3) return notify("Enter the First Name properly", "error")
    let lastName = inputValue("lName")
    if (lastName.length < 3) return notify("Enter the Last Name properly", "error")
    let userEmail = inputValue("emailInput")
    let dataFound = emailVerify(users, userEmail)
    if (dataFound) return notify("Already account on this email", "error")
    let emailValidation = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (!emailValidation.test(userEmail)) return notify("Enter the Email Correctly", "error")
    let firstPassword = inputValue("fPassword")
    if (firstPassword.length < 6) return notify("Enter atleast 6 Digit Password", "error")
    let confirmPassowrd = inputValue("cPassword")
    if (firstPassword !== confirmPassowrd) return notify("Confirm the password", "error")
    if (document.getElementById("conditionCheck").checked === false) return notify("Check the conditions and improve it", "error")
    let user = {
        fullName: firstName + " " + lastName,
        firstName: firstName,
        lastName: lastName,
        userEmail: userEmail,
        password: confirmPassowrd,
        id: randomId(),
        dateCreated: new Date().getTime(),
    }
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
    emptyInputValue("fName")
    emptyInputValue("lName")
    emptyInputValue("fPassword")
    emptyInputValue("cPassword")
    emptyInputValue("emailInput")
    notify("Registered Successfully", "success")
    console.log(users)
}
const logIn = () => {
    let users = JSON.parse(localStorage.getItem("users")) || []
    let logInEmail = inputValue("emailInput")
    let emailValidation = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (!emailValidation.test(logInEmail)) return notify("Enter the Email Correctly", "error")
    let matchedEmail = emailVerify(users, logInEmail)
    console.log(matchedEmail)
    let logInPassword = inputValue("fPassword")
    if (document.getElementById("conditionCheck").checked === false) return notify("Check the conditions and improve it", "error")
    if (logInPassword.length < 6) return notify("Enter atleast 6 Digit Password", "error")
    if (logInPassword === matchedEmail.password) {
        notify("Successfully login", "success")
        let userPage = `<center><i><h1>Welcome <h1>${matchedEmail.fullName}</h1></h1></i><i>Click to <a href="login.html">sign out</a></i></center>`
        document.write(userPage)
    } else {
        notify("wrong credentials", "error")
    }
}
const notify = (msg, type) => {
    let color = "black"
    switch (type) {
        case "success":
            color = "linear-gradient(to right,#82CD47,#379237)"
            break
        case "error":
            color = "linear-gradient(to right,#E21818,#EA5455)"
            break
        default:
            color = color
    }
    Toastify({
        text: msg,
        duration: 3000,
        colse: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: { background: color, },
    }).showToast();
}