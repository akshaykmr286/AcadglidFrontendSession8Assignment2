
//Login function
function logIn(){
    //alert("succes");
    var uName = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    //call the function to check username and password
    var isuser = validateUser(uName,password);
    if(isuser){
        alert("Cool..User Exists");
        //If user exists then save the credentials in localstorage
        //Write your code to redirect to home page
        localStorage.setItem(uName,password);
        return true;
        //Redirect to home.html
    }else{
        alert("Credentials doesnot match");
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        document.getElementById("err").innerHTML="LogIn Error : Please Enter Valid Credentials";
        return false;
    }
}
//Logout function
function logOut(){
    //deleyte the localstorage object
    localStorage.removeItem("akshay@gmail.com");
    alert("You are Logged Out ..!!");
    //now redirect to index.html
    window.location.href="./index.html";
}
/*
This function checks the user name and passord is correct or not by calling API else returns false
*/
function validateUser(uname,password){
    /*
    here goes the API call.
    But for now the credentials are hardcoded and checked from the global JSON array userlist
    */
    if(uname == 'akshay@gmail.com' && password == 'system123'){
        return true;
    }else{
        return false;
    }
        
}

/*
Function to check if user id log in or not
*/
function checkLogin(){
    var pass = localStorage.getItem("akshay@gmail.com");
    if(pass == 'system123'){
        return true;
    }else{
        return false;
    }
}
