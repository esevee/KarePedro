function test (){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;
    var job = document.getElementById("job").value;
    if(firstname.length >= 5){
        document.getElementById("result").style.color = "red";
    } else{
        document.getElementById("result").style.color = "green";
    }
    
    if(job == "IT"){
        document.getElementById("result").style.backgroundColor = "purple"; 
    }else{
        document.getElementById("result").style.backgroundColor = "yellow";
    }
    document.getElementById("result").innerHTML = firstname + "<br>" + lastname + "<br>" + age + "<br>" + job;
}

document.getElementById("above").addEventListener("click", test, false);
