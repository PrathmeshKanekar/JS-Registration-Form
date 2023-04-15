let data = new Array(); 

function subData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mob = document.getElementById("mob").value;
    let address = document.getElementById("address").value;

    if(name == ""){
        alert("Please Enter Name");
        document.getElementById("name").focus();
        return false;
    }
    if(email == ""){
        alert("Please Enter Email");
        document.getElementById("email").focus();
        return false;
    } 
    if(mob == "" ){
        
        alert("Please Enter Mobile No");
        document.getElementById("mob").focus();
        return false;
    }
    if(address == ""){
        alert("Please Enter Address");
        document.getElementById("address").focus();
        return false;
    }
  
    let info = {
        Uname : name,
        Uemail : email,
        Umob : mob,
        Uaddress : address,
        
    }
    data.push(info);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mob").value = "";
    document.getElementById("address").value = "";
    
    
    show();
}
function show(){
    
    let dataShow = "<table class='table table-dark'>";
        dataShow += "<tr>";
        dataShow += "<th>No</th>";
        dataShow += "<th>Name</th>";
        dataShow += "<th>Email</th>";
        dataShow += "<th>Mobile No</th>";
        dataShow += "<th>Address</th>";
        dataShow += "</tr>";

    for (let i = 0; i <data.length; i++) {
        dataShow += "<tr>";        
        dataShow += "<td>"+ (i + 1) +"</td>";
        dataShow += "<td>"+ data[i].Uname +"</td>";
        dataShow += "<td>"+ data[i].Uemail +"</td>";
        dataShow += "<td>"+ data[i].Umob +"</td>";
        dataShow += "<td>"+ data[i].Uaddress +"</td>";
        dataShow += "</tr>";
            }
        dataShow += "</table>"    

        document.getElementById("table").innerHTML = dataShow;
}
show();