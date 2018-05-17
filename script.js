
var user={};
var userList=[];
var loggedUser={}



function login()
{
    if(localStorage.getItem("userslist")!=null)
    {
        var loginForm=document.forms["loginform"];
        userList=JSON.parse(localStorage.getItem("userslist"));

        userList.forEach(user => {
            
            if(user.username==loginForm["username"].value && user.password==loginForm["password"].value)
            {
                loggedUser=user;
                console.log(loggedUser);
            }
        });
        

        getProfile();

    }else{
        alert("Kindly Register");
    }
}



function getLogin()
{
    document.getElementById("signup").style.display="none";
    document.getElementById("login").style.display="block";
}




function getReg()
{
    document.getElementById("signup").style.display="block";
    document.getElementById("login").style.display="none";
}


function signup()
{

  console.log(document.forms);
  
   var signupform=(document.forms["signupform"]);

   console.log(signupform);
   
   user.username=signupform["username"].value;
   user.password=signupform["password"].value;
   user.mobile=signupform["mobile"].value;
   user.email=signupform["email"].value;

   userList.push(user);

   localStorage.setItem("userslist",JSON.stringify(userList));

   getLogin();
}


function getProfile()
{
    document.getElementById("login").style.display='none';
    document.getElementById('profile').style.display='block';

    var table=document.getElementById("profiletable");

    console.log(table);
    

    for(att in loggedUser)
    {
        var tr=document.createElement("tr");
        var tdl=document.createElement("td");
        tdl.innerHTML=att;
        var tdv=document.createElement("td");
        tdv.innerHTML=loggedUser[att];
        tr.appendChild(tdl);
        tr.appendChild(tdv);
        table.appendChild(tr);
    }
}