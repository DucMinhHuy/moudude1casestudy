function display() {
    let username=document.getElementById("enter").value;
    let password=document.getElementById("enter2").value;
    if(username=="huy" && password==123){
        alert("thanh cong")
        window.open("cachtaobang.html");
    }else{
        alert("nhap username password");
    }
};