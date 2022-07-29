let Product=["IpadPro","Ipad pro2","Ipad pro3","Ipad pro4"];
//hien thi danh sach
function show(){
    let count="";
    for(let i=0;i<Product.length;i++){
        count+="<tr>"+
           "<td style='width: 110px'>"+Product[i]+"</td>"+
           "<td onclick='edit("+i+")' bgcolor='#ffd700'>edit</td>"+
           "<td onClick='deleteIn("+i+")' bgcolor='aqua'>delete"+"</td>"+
            "<td onclick='save("+i+")' bgcolor='#6495ed' >save</td>"+
        "</tr>"
    }
    document.getElementById("enter1").innerHTML=count;
    // document.getElementById("enter2").innerHTML=Product.length;
}
show();
function nhap(){
    // lay du lieu trong input
    let newProduct=document.getElementById("enter").value;
    Product.push(newProduct);
    show();
}
function deleteIn(index){
    Product.splice(index,1);
    show();
}
function edit(index){
    // alert(index);
    Product[index]=document.getElementById("enter").value;
    let trList= document.querySelectorAll("tr");
    let td = trList[index].querySelector("td");
    let ad=td.innerText;
    // console.log(ad);
    // td.innerText = "";
    td.innerHTML = "<input id='enter5' type=\"text\" value=\"" + ad + "\">";


    // alert(tdList.length)

    // show();
}
function save(){
    let huy=document.getElementById("enter5").value;
    Product.push(huy);
    console.log(huy)
}
