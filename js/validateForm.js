// VALIDATE FORM
function printErr(elementID,hintMess)
{
    document.getElementById(elementID).innerHTML=hintMess;
}
// VALIDATE LOGIN FORM
function validateLogin()
{
    var email = document.getElementById('loginEmail').value;
    var pass = document.getElementById('loginPass').value;
    var loginEmailErr = document.getElementById('loginEmail');
    var loginPassErr = document.getElementById('loginPass');

    var emailErr = passErr = true;

    
    // Validate Email Login
    if (email=="")
    {
        printErr("loginEmailErr","Email Address is required");
        loginEmailErr.classList.add("input-err");
    }
    else
    {
        var regex = /^user@rhythmhouse.com$/  // Fake database 
        //True pattern : regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
        if (regex.test(email)==false)
        {
            printErr("loginEmailErr","Email Address is invalid (Fake Database : Email login is 'user@rhythmhouse.com')");
            loginEmailErr.classList.add("input-err");
        }
        else
        {
            printErr("loginEmailErr","");
            loginEmailErr.classList.remove("input-err");
            emailErr = false;
        }
    }
    // Validate Password Login
    if (pass=="")
    {
        printErr("loginPassErr","The Password field is required.");
        loginPassErr.classList.add("input-err");
    }
    else
    {   var regex = /^123@123a$/ //Fake database
        // True pattern : var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/;
        if (regex.test(pass)==false)
        {
            printErr("loginPassErr","Password is invalid (Fake Database : Password is '123@123a')");
            loginPassErr.classList.add("input-err");
        }
        else
        {
            printErr("loginPassErr","");
            loginPassErr.classList.remove("input-err");
            passErr = false;
        }
    }
    if (emailErr==true||passErr==true)
    {
        return false;
    }
    else
    {
        return ; 
    }   
}
/*********************/
// VALIDATE REGISTER FORM
function validateReg()
{
    var email = document.getElementById('regEmail').value;
    var cfemail = document.getElementById('regCfEmail').value;
    var fname = document.getElementById('regFname').value;
    var lname = document.getElementById('regLname').value;
    var pass = document.getElementById('regPass').value;
    var cfpass = document.getElementById('regCfPass').value;
    var regEmailErr = document.getElementById('regEmail');
    var regCfEmailErr = document.getElementById('regCfEmail');
    var regFnameErr = document.getElementById('regFname');
    var regLnameErr = document.getElementById('regLname');
    var regPassErr = document.getElementById('regPass');
    var regCfPassErr = document.getElementById('regCfPass');
    var emailErr = emailCfErr = fnameErr = lnameErr = passErr=passCfErr = true;

    // Validate Email
    if (email=="")
    {
        printErr("regEmailErr","Email Address is required");
        regEmailErr.classList.add("input-err");
    }
    else
    {
        var regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (regex.test(email)==false)
        {
            printErr("regEmailErr","Email Address is invalid");
            regEmailErr.classList.add("input-err");
        }
        else
        {
            printErr("regEmailErr","");
            regEmailErr.classList.remove("input-err");
            emailErr = false;
        }
    }
    // Validate Confirm Email
    if (cfemail=="")
    {
        printErr("regCfEmailErr","Confirm Email Address is required");
        regCfEmailErr.classList.add("input-err");
    }
    else
    {
        var regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (regex.test(cfemail)==false)
        {
            printErr("regCfEmailErr","Confirm Email Address is invalid");
            regCfEmailErr.classList.add("input-err");
        }
        else
            {
                if (cfemail!=email)
                {
                    printErr("regCfEmailErr","Confirm Email Address must be same Email Address");
                    regCfEmailErr.classList.add("input-err");
                }
                else
                {
                    printErr("regCfEmailErr","");
                    regCfEmailErr.classList.remove("input-err");
                    emailCfErr = false;
                }
            }
    }
    // Validate First Name
    if (fname=="")
    {
        printErr("regFnameErr","First Name is required");
        regFnameErr.classList.add("input-err");
    }
    else
    {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(fname)==false)
        {
            printErr("regFnameErr","First Name is invalid . Firstname must be only characters");
            regFnameErr.classList.add("input-err");
        }
        else
        {
            printErr("regFnameErr","");
            regFnameErr.classList.remove("input-err");
            fnameErr = false;
        }
    }
    // Validate Last Name
    if (lname=="")
    {
        printErr("regLnameErr","Last Name is required");
        regLnameErr.classList.add("input-err");
    }
    else
    {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lname)==false)
        {
            printErr("regLnameErr","Last Name is invalid. Last Name must be only characters");
            regLnameErr.classList.add("input-err");
        }
        else
        {
            printErr("regLnameErr","");
            regLnameErr.classList.remove("input-err");
            lnameErr = false;
        }
    }
    // Validate Password
    if (pass=="")
    {
        printErr("regPassErr","The Password field is required.");
        regPassErr.classList.add("input-err");
    }
    else
    {   var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,}$/;
        if (regex.test(pass)==false)
        {
            printErr("regPassErr","Password is invalid (Must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character)");
            regPassErr.classList.add("input-err");
        }
        else
        {
            printErr("regPassErr","");
            regPassErr.classList.remove("input-err");
            passErr = false;
        }
    }
    // Validate Password
    if (cfpass=="")
    {
        printErr("regCfPassErr","The Confirm Password field is required.");
        regCfPassErr.classList.add("input-err");
    }
    else
    {   
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,}$/;
        if (regex.test(cfpass)==false)
        {
            printErr("regCfPassErr","Confirm Password is invalid (Must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character)");
            regCfPassErr.classList.add("input-err");
        }


        else
        {
            if (cfpass!=pass)
            {
                printErr("regCfPassErr","Confirm Password must be same Password");
                regCfPassErr.classList.add("input-err");
            }
            else
                {
                    printErr("regCfPassErr","");
                    regCfPassErr.classList.remove("input-err");
                    passCfErr = false;
                }
        }
    }
    if (emailErr==true||emailCfErr==true||fnameErr==true||lnameErr==true||passErr==true||passCfErr==true)
    {
        return false;
    }
    else
    {

        return ;
    }
}
/**************************/
// VALIDATE CONTACT FORM
function validateContact()
{
    var subject = document.getElementById('contactSub').value;
    var email = document.getElementById('contactEmail').value;
    var fname = document.getElementById('contactFname').value;
    var lname = document.getElementById('contactLname').value;
    var comment = document.getElementById('contactComment').value;
    var contactSubErr = document.getElementById('contactSub');
    var contactEmailErr = document.getElementById('contactEmail');
    var contactFnameErr = document.getElementById('contactFname');
    var contactLnameErr = document.getElementById('contactLname');
    var contactCommentErr = document.getElementById('contactComment');

    var subjectErr = emailErr = fnameErr = lnameErr= commentErr = true;

    // Validate subject
    if (subject=="")
    {
        printErr("contactSubErr","Subject is required");
        contactSubErr.classList.add("input-err");
    }
    else
    {
        printErr("contactSubErr","");
        contactSubErr.classList.remove("input-err");
        subjectErr = false;
    }
    // Validate Email
    if (email=="")
    {
        printErr("contactEmailErr","Email Address is required");
        contactEmailErr.classList.add("input-err");
    }
    else
    {
        var regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
        if (regex.test(email)==false)
        {
            printErr("contactEmailErr","Email Address is invalid");
            contactEmailErr.classList.add("input-err");
        }
        else
        {
            printErr("contactEmailErr","");
            contactEmailErr.classList.remove("input-err");
            emailErr = false;
        }
    }
    // Validate First Name
    if (fname=="")
    {
        printErr("contactFnameErr","First Name is required");
        contactFnameErr.classList.add("input-err");
    }
    else
    {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(fname)==false)
        {
            printErr("contactFnameErr","First Name is invalid . Firstname must be only characters");
            contactFnameErr.classList.add("input-err");
        }
        else
        {
            printErr("contactFnameErr","");
            contactFnameErr.classList.remove("input-err");
            fnameErr = false;
        }
    }
    // Validate Last Name
    if (lname=="")
    {
        printErr("contactLnameErr","Last Name is required");
        contactLnameErr.classList.add("input-err");
    }
    else
    {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lname)==false)
        {
            printErr("contactLnameErr","Last Name is invalid. Last Name must be only characters");
            contactLnameErr.classList.add("input-err");
        }
        else
        {
            printErr("contactLnameErr","");
            contactLnameErr.classList.remove("input-err");
            lnameErr = false;
        }
    }
    // Validate comment
    if (comment=="")
    {
        printErr("contactCommentErr","Please provide a reason for contacting us");
        contactCommentErr.classList.add("input-err");
    }
    else
    {
        printErr("contactCommentErr","");
        contactCommentErr.classList.remove("input-err");
        commentErr = false;
    }
    if (emailErr==true||subjectErr==true||fnameErr==true||lnameErr==true||commentErr==true)
    {
        return false;
    }
    else
    {
        return ; 
    }   
}
function myMap(){
    var myLatlng = new google.maps.LatLng(19.11729335295856,72.86502659670198); 
    var mapOptions = {
        zoom: 16,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Rhythm House"
    });
    marker.setMap(map);
}          