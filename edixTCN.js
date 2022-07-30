let sua=["Pythagoras (570-495 trước Công nguyên)Pythagoras," +
" nhà toán học, triết học khoa học người Hy Lạp nổi danh trong thời cổ đại " +
"Tên ông và những định lý toán học cơ bản luôn có trong sách giáo khoa" +
"Với định lý nổi tiếng mang tên ông Trong tam giác vuông" +
"bình phương cạnh huyền bao giờ cũng bằng tổng bình phương hai cạnh còn lại" +
"được coi là tiền đề cơ bản trong hình học và giúp ông nổi danh khắp thế giới" +
"Ngoài ra Pythagoras còn là một nhà triết họclà người sáng lập ra phong trào tín ngưỡng" +
" có tên học thuyết Pythagoras. Một đặc trưng trong“lối sống của Pythagoras” " +
"này là việc nhấn mạnh vào một chế độ ăn uống kiêng khem." +
"Chế độ ăn uống kiêng khem nổi tiếng nhất của Pythagoras có lẽ là việc cấm ăn các loại đậu." +
"Ông bị coi là lập dị khi đưa ra những lý do cho việc kiêng ăn đậu bao gồm:" +
" đậu ảnh hưởng đến giấc ngủ và sự thanh thản trong tâm tríhình dáng của đậu giống với tinh hoàn," +
" và nếu hạt đậu bị vùi lấp trong phân, chúng sẽ biến thành hình người"]
function show(){
    let h="<tr>"+
        "<td>"+sua+"</td>"+
    "<td onclick='edit()' bgcolor='#ffd700'>edit</td>"+
        "<td onclick='save()' bgcolor='#6495ed' >save</td>"+
    "</tr>"
    document.getElementById("enter1").innerHTML=h;
}
show();
function nhap(){
    // lay du lieu trong input
    let newEdix=document.getElementById("enter").value;
    sua.push(newEdix);
    show();
}
function edit(){
    sua=document.getElementById("enter").value;
    let trList= document.querySelector("tr");
    let td = trList.querySelector("td");
    let ad=td.innerText;
    td.innerHTML = "<input id='enter2' type=\"text\" value=\"" + ad + "\">";
}
function save(){
    let huy=document.getElementById("enter2").value;
    sua.push(huy);
    console.log(huy);
}