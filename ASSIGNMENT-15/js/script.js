const output = output => document.getElementById("output").innerHTML = output
const input = input1 => document.getElementById(input1).value
const randomId = () => Math.random().toString(36).slice(2)
let users = [];
const clearOutput = () => {
    document.getElementById("output").innerHTML = " "
}
const ageCal = () => { 
    let time = new Date()
    let birthtime = new Date(input("dob"))
    let timepass = time.getTime() - birthtime.getTime()
    timepass = timepass / (1000 * 3600 * 24*365)
    timepass = Math.floor(timepass)
    return timepass
}

const usersData = () => {
    event.preventDefault()
    firstname = input("firstName")
    firstname.trim()
    if (firstname.length < 3) {
        notify("Enter First Name ", "error")
        return
    }
    lastname = input("lastName")
    lastname.trim()
    if (lastname.length < 3) {
        notify("Enter Last Name ", "error")
        return
    }
    fullName=firstname+" "+lastname
    email = input("email")
    // var expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailValidation = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (!emailValidation.test(email)) {
        notify("Enter the Email Correctly", "error")
        return
    }
    dateOfBirth = input("dob")
    if (!dateOfBirth) {
        notify("Enter Date of Birth", "error")
        return
    }


    User = {
        firstname,
        lastname,
        fullName,
        dateOfBirth,
        email,
        age: ageCal(),
        id: randomId(),
    }
    notify("Succesfully Added in List", "success")
    users.push(User)
    // console.log(users)
}
const tablePrint = () => {
    if (!users.length) {
        notify("There is no single user available", "error");
        return;
    }

    let tableStartingCode = "<div class='table-responsive'><table class='table'>";
    let tableHead = "<thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Date of Birth</th><th>Age</th>";
    let tableEndingCode = "</table></div>";
    let tableBody = " ";
    for (i = 0; i < users.length; i++) {
        tableBody += "<tr scope='row'><th>" + (i + 1) + "</th><td>" + users[i].firstname + "</td><td>" + users[i].lastname + "</td><td>" + users[i].email + "</td><td>" + users[i].dateOfBirth + "</td><td>" + users[i].age + "</td></tr>";
        let table = tableStartingCode + tableHead + "<tbody>" + tableBody + "</tbody>" + tableEndingCode;
        // document.getElementById("output").innerHTML = table ;
        output(table)
    }
}

const printcon=()=>{
    if (!users.length) {
        notify("There is no single user available", "error");
        return;
    }
    for(let user of users){

        console.log(user)
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