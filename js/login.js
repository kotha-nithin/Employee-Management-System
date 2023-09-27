function validateLength(str, errorId, propertyName, minLength = false, maxLength = false) {
    str = str.trim();
    let inputName = `<i class='fa fa-exclamation-circle'></i> `;
    inputName += propertyName;
    if (str.length == 0) {
        errorsCount++;
        document.getElementById(errorId).innerHTML = `${inputName} is a required field!`;
        return false;
    }
    else if (minLength && str.length < minLength) {
        errorsCount++;
        document.getElementById(errorId).innerHTML = `${inputName} should be at least ${minLength} characters!`;
        return false;
    }

    else if (maxLength && str.length > maxLength) {
        errorsCount++;
        document.getElementById(errorId).innerHTML = `${inputName} should not exceed ${maxLength} characters!`;
        return false;
    }
    return true;
}

function validateRegex(str, regex, errorId, message) {
    let errorMessage = `<i class='fa fa-exclamation-circle'></i> `;
    errorMessage += message;
    str = str.trim();
    let regExp = new RegExp(regex);
    if (!regExp.test(str)) {
        errorsCount++;
        document.getElementById(errorId).innerHTML = errorMessage;
        return false;
    }
    return true;
}

let username, password, signUp_emailId, signUp_Username, signUp_Password, signUp_ConfirmPassword, errorsCount = 0;

function validateUserName() {
    username = document.getElementById("username").value;
    document.getElementById("check_username").innerHTML = "";
    if (!validateLength(username, "check_username", "Username or Email Id")) {
        return false;
    }
    return true;
}

function validatePassword() {
    password = document.getElementById("password").value;
    document.getElementById("check_password").innerHTML = "";
    if (!validateLength(password, "check_password", "Password")) {
        return false;
    }
    return true;
}

function validate_signUp_Email() {
    signUp_emailId = document.getElementById("signUp_email").value;
    document.getElementById("check_signUp_email").innerHTML = "";
    if (!validateLength(signUp_emailId, "check_signUp_email", "Email Address")) {
        return false;
    }
    else if (!validateRegex(signUp_emailId, "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", "check_signUp_email", "Must be valid Email!")) {
        return false;
    }
    return true;
}

function validate_signUp_Username() {
    signUp_Username = document.getElementById("signUp_username").value;
    document.getElementById("check_signUp_username").innerHTML = "";
    if (!validateLength(signUp_Username, "check_signUp_username", "Username", 5)) {
        return false;
    }
    else if (!validateRegex(signUp_Username, "^[a-zA-Z0-9_]+$", "check_signUp_username", "Username should contain only alphabets, numbers and underscore!")) {
        return false;
    }
    return true;
}

function validate_signUp_Password() {
    signUp_Password = document.getElementById("signUp_password").value;
    document.getElementById("check_signUp_password").innerHTML = "";
    if (!validateLength(signUp_Password, "check_signUp_password", "Password", 8)) {
        return false;
    }
    else if (!validateRegex(signUp_Password, "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$", "check_signUp_password", "Password should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character!")) {
        return false;
    }
    return true;
}

function validate_signUp_ConfirmPassword() {
    signUp_ConfirmPassword = document.getElementById("signUp_confirmPassword").value;
    document.getElementById("check_signUp_confirmPassword").innerHTML = "";
    let errorIcon = `<i class='fa fa-exclamation-circle'></i> `;
    if (!validateLength(signUp_ConfirmPassword, "check_signUp_confirmPassword", "Confirm Password")) {
        return false;
    }
    if (signUp_Password != signUp_ConfirmPassword) {
        errorsCount++;
        document.getElementById("check_signUp_confirmPassword").innerHTML = errorIcon + "Password & Confirm Password doesn't match!";
        return false;
    }
    return true;
}

function employeeLogin() {
    errorsCount = 0;
    validateUserName();
    validatePassword();
    if (errorsCount != 0) return false;
    let errorIcon = `<i class='fa fa-exclamation-circle'></i> `;
    /*
    if ((username == "sabira" || username == "sai.biradar@planonsoftware.com") && password == "Brdrsai@22") {
        window.location.href = "form.html";
    }
    else {
        document.getElementById("check_password").innerHTML = errorIcon + "Invalid Username or Password!";
    }  
    */

    if (localStorage["SignUp_Details"]) {
        let signUp_Array = JSON.parse(localStorage["SignUp_Details"]);
        for (let signUp_Obj of signUp_Array) {
            if ((username == signUp_Obj.email || username == signUp_Obj.username) && password == signUp_Obj.password) {
                window.location.href = "form.html";
            }
            else {
                document.getElementById("check_password").innerHTML = errorIcon + "Invalid Username or Password!";
            }
        }
    }
    else {
        document.getElementById("check_password").innerHTML = errorIcon + "Invalid Username or Password!";
    }


}

if (localStorage["SignUp_Details"]) {
    var signUp_arr = JSON.parse(localStorage["SignUp_Details"]);;
}
else {
    signUp_arr = [];
}


function employeeSignUp() {
    errorsCount = 0;
    let duplicateCount = 0;
    validate_signUp_Email();
    validate_signUp_Username();
    validate_signUp_Password();
    validate_signUp_ConfirmPassword();
    if (errorsCount != 0) return false;

    for (let signUp_Object of signUp_arr) {
        if (signUp_emailId == signUp_Object.email || signUp_Username == signUp_Object.username) {
            duplicateCount++;
            document.getElementById("message").innerHTML = "Account already exits!";
            document.getElementById("message").style = "color: #F12A0A";
        }
    }

    if (duplicateCount == 0) {
        let signUp_Obj = { email: signUp_emailId, username: signUp_Username, password: signUp_Password };
        signUp_arr.push(signUp_Obj);
        localStorage["SignUp_Details"] = JSON.stringify(signUp_arr);
        document.getElementById("message").innerHTML = "Successful Registration!";
        document.getElementById("message").style = "color: #69F10A";
    }
}

function show(main_id, replace_id) {
    document.getElementById(main_id).style = "display: none";
    document.getElementById(replace_id).style = "display: contents";
}