let Username = prompt("Are you User or Admin ??");


if (Username === "Admin" || Username === "admin") {

    let Pass = prompt('Password??', '')

    if(Pass === 'TheMaster')
        {
        alert("Welcome Back Admin")
    }
    else if (Pass === '' || Pass === null ){
        alert("Cancelled")
    }
    else {
        alert("Password is Wrong")
    }
}
else if (Username === '' || Username === null)
{
    alert("Cancelled")
}
else{
    alert("You are Not Admin")
}


