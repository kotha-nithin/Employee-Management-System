function validateLength(str, errorId, propertyName, maxLength = false) {
    str = str.trim();
    let inputName = `<i class='fa fa-exclamation-circle'></i> `;
    inputName += propertyName;
    if (str.length == 0) {
        errorsCount++;
        document.getElementById(errorId).innerHTML = `${inputName} is a required field!`;
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
    console.log(regExp);
    console.log(regExp.test(str));
    if (!regExp.test(str)) {
        errorsCount++;
        document.getElementById(errorId).innerHTML = errorMessage;
        return false;
    }
    return true;
}

let Employee_Id, First_Name, Last_Name, Email_Id, Mobile_Num, Gender, hobbies, doj, Team_Name, Address1, Address2, City, State, PinCode, errorsCount = 0;

function validateId() {
    Employee_Id = document.getElementById("employee_Id").value;
    document.getElementById("check_employee_Id").innerHTML = "";
    if (!validateLength(Employee_Id, "check_employee_Id", "Employee Id")) {
        return false;
    }
    else if (!validateRegex(Employee_Id, "^[a-zA-Z0-9-]+$", "check_employee_Id", "Employee Id only contain aplhabets, hyphen & numbers!")) {
        return false;
    }
    return true;
}

function validateName() {
    First_Name = document.getElementById("first_Name").value;
    document.getElementById("check_first_Name").innerHTML = "";
    if (!validateLength(First_Name, "check_first_Name", "Name")) {
        return false;
    }
    else if (!validateRegex(First_Name, "[a-zA-z]+([\s][a-zA-Z]+)*$", "check_first_Name", "Only aplhabets are allowed in Name field!")) {
        return false;
    }
    return true;
}

function validateEmail() {
    Email_Id = document.getElementById("email_Id").value;
    document.getElementById("check_email_Id").innerHTML = "";
    if (!validateLength(Email_Id, "check_email_Id", "Email Address")) {
        return false;
    }
    else if (!validateRegex(Email_Id, "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", "check_email_Id", "Must be valid Email!")) {
        return false;
    }
    return true;
}

function validateMobileNum() {
    Mobile_Num = document.getElementById("mobile_Num").value;
    document.getElementById("check_mobile_Num").innerHTML = "";
    if (!validateLength(Mobile_Num, "check_mobile_Num", "Mobile Number")) {
        return false;
    }
    else if (!validateRegex(Mobile_Num, "^[1-9][0-9]{9}$", "check_mobile_Num", "Not a valid Mobile Number!")) {
        return false;
    }
    return true;
}

function validateGender() {
    Gender = document.forms.employee_Information_Form.gender.value;
    document.getElementById("check_gender").innerHTML = "";
    let errorIcon = `<i class='fa fa-exclamation-circle'></i> `;
    if (Gender != "Male" && Gender != "Female") {
        errorsCount++;
        document.getElementById("check_gender").innerHTML = errorIcon + "Please select your gender!";
        return false;
    }
    return true;
}

function validateHobbies() {
    var checkboxes = document.getElementsByName('Hobbies');
    document.getElementById("check_hobbies").innerHTML = "";
    hobbies = "";
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            hobbies += checkboxes[i].value + ", ";
        }
    }
    hobbies = hobbies.substring(0, hobbies.length - 2);
    let errorIcon = `<i class='fa fa-exclamation-circle'></i> `;
    if (hobbies.length == 0) {
        errorsCount++;
        document.getElementById("check_hobbies").innerHTML = errorIcon + "Please select atleast any one Hobbie!";
        return false;
    }
    return true;
}

function validateDOJ() {
    doj = document.getElementById("doj").value;
    document.getElementById("check_doj").innerHTML = "";
    if (!validateLength(doj, "check_doj", "Date of Joining")) {
        return false;
    }
    return true;
}

function validateTeamName() {
    Team_Name = document.getElementById("employee_Team").value;
    document.getElementById("check_employee_Team").innerHTML = "";
    let errorIcon = `<i class='fa fa-exclamation-circle'></i> `;
    if (Team_Name == "default") {
        errorsCount++;
        document.getElementById("check_employee_Team").innerHTML = errorIcon + "Please select any Team!";
        return false;
    }
    return true;
}

function validateAddress1() {
    Address1 = document.getElementById("address1").value;
    document.getElementById("check_address1").innerHTML = "";
    if (!validateLength(Address1, "check_address1", "Address Line 1", 80)) {
        return false;
    }
    return true;
}

function validateAddress2() {
    Address2 = document.getElementById("address2").value;
    document.getElementById("check_address2").innerHTML = "";
    if (!validateLength(Address2, "check_address2", "Address Line 2", 80)) {
        return false;
    }
    return true;
}

function validateCity() {
    City = document.getElementById("city").value;
    document.getElementById("check_city").innerHTML = "";
    if (!validateLength(City, "check_city", "City")) {
        return false;
    }
    else if (!validateRegex(City, "[a-zA-z]+([\s][a-zA-Z]+)*$", "check_city", "City should not contain special characters & numbers!")) {
        return false;
    }
    return true; 0
}

function validateState() {
    State = document.getElementById("state").value;
    document.getElementById("check_state").innerHTML = "";
    let errorIcon = `<i class='fa fa-exclamation-circle'></i> `;
    if (State == "default") {
        errorsCount++;
        document.getElementById("check_state").innerHTML = errorIcon + "Please select any state!";
        return false;
    }
    return true;
}

function validatePinCode() {
    PinCode = document.getElementById("pincode").value;
    document.getElementById("check_pincode").innerHTML = "";
    if (!validateLength(PinCode, "check_pincode", "Pin Code")) {
        return false;
    }
    else if (!validateRegex(PinCode, "^[1-9]{1}[0-9]{5}$", "check_pincode", "Pin Code can be only six digits!")) {
        return false;
    }
    return true;
}

function validate() {
    errorsCount = 0;
    validateId();
    validateName();
    validateEmail();
    validateMobileNum();
    validateGender();
    validateHobbies();
    validateDOJ();
    validateTeamName();
    validateAddress1();
    validateAddress2();
    validateCity();
    validateState();
    validatePinCode();

    if (errorsCount != 0) return false;

    Last_Name = document.getElementById("last_Name").value;
    let Full_Name = `${First_Name} ${Last_Name}`;
    let address = `${Address1}, ${Address2}, ${City}, ${State} - ${PinCode}`;
    let detailsObj = {};
    detailsObj.EmployeeId = Employee_Id;
    detailsObj.FullName = Full_Name;
    detailsObj.EmailId = Email_Id;
    detailsObj.Mobile_Num = Mobile_Num;
    detailsObj.Gender = Gender;
    detailsObj.Hobbies = hobbies;
    detailsObj.doj = doj;
    detailsObj.teamName = Team_Name;
    detailsObj.address = address;
    let detailsObjString = JSON.stringify(detailsObj);

    if (localStorage["Index"]) {
        localStorage["Index"]++;
    }
    else {
        localStorage["Index"] = 1;
    }
    index = (localStorage["Index"]);
    localStorage[index] = detailsObjString;
    loadDisplay();
    return true;
}

function addAddress() {
    let x = document.getElementById("address");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//AJAX
function loadDisplay() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            let script = document.createElement("script");
            script.type = "text/javascript";
            script.id = "display-script";
            script.text = xhttp.responseText;
            let existingScript = document.querySelector(`script[id="display-script"]`);
            if (!existingScript) {
                document.head.appendChild(script);
            }
            //eval(xhttp.responseText);
            //let display = new Function(xhttp.responseText);
            document.getElementById("display-employee-content").innerHTML = displayDetails();
        }
    }
    xhttp.open("GET", "js/display.js", true);
    xhttp.send();
    document.getElementById("Details").style = "display: contents";
}

function Logout() {
    let confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
        window.location.href = "index.html";
    }
}
