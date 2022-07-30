let sua=["Leonardo da Vinci (phát âm tiếng Ý: [leoˈnardo da ˈvintʃi] (nghe)[nb 1]; sinh ngày 15 tháng 4 năm 1452 - tại Anchiano, Ý, mất ngày 2 tháng 5 năm 1519 tại Amboise, Pháp), tên khai sinh là Leonardo di ser Piero da Vinci,[nb 2] là một họa sĩ, nhà điêu khắc, kiến trúc sư, nhạc sĩ, bác sĩ, kỹ sư, nhà giải phẫu, nhà phát minh và nhà triết học tự nhiên người Ý. Ông được coi là thiên tài toàn năng nhất lịch sử nhân loại. Ông là tác giả của những bức hoạ nổi tiếng như Mona Lisa, Bữa ăn tối cuối cùng.",
"Roger Bacon, O.M. (1214–1294), cũng gọi là Doctor Mirabilis (tiếng Latin:thầy giáo tuyệt vời), là một trong những thầy dòng Franciscan nổi tiếng vào thời của ông. Ông là một triết gia người Anh đã nhấn mạnh tầm quan trọng đáng kể vào chủ nghĩa kinh nghiệm, ông là một trong những người châu Âu đầu tiên ủng hộ phương pháp khoa học hiện đại.",
"Desiderius Erasmus Roterodamus (28 tháng 10 năm 1466 - 12 tháng 7 năm 1536), cũng gọi là Erasmus thành Rotterdam là nhà triết học chủ nghĩa nhân văn Phục Hưng phương Bắc,[1][2][3] linh mục Công giáo, nhà phê bình xã hội, giáo sư, nhà thần học người Hà Lan. Ông được xem như học giả lớn nhất trong thời đại của mình, nổi tiếng với các tác phẩm mang giọng điệu chế giễu sâu cay tầng lớp tăng lữ. Ông đã góp phần vào việc tuyển tập các bản văn Tân Ước tiếng Hy Lạp và tiếng La-tinh (bản Vulgata khoảng thế kỷ IV) trong đó mang những sắc thái nhân văn chủ nghĩa, bản Kinh Thánh này sau được Martin Luther dùng để dịch sang tiếng Đức. Kinh Thánh của ông có rất nhiều ảnh hưởng. Ông được gọi là Hoàng tử của chủ nghĩa nhân văn và là nhà tiên tri cho Cải cách Tin Lành."]
function show(){
    let count="";
    for(let i=0;i<sua.length;i++) {
        count += "<tr>" +
            "<td>" + sua[i] + "</td>" +
            "<td onclick='edit(" + i + ")' bgcolor='#ffd700'>edit</td>" +
            "<td onClick='deleteIn(" + i + ")' bgcolor='aqua'>delete" + "</td>" +
            "<td onclick='save(" + i + ")' bgcolor='#6495ed' >save</td>" +
            "</tr>"
    }
    document.getElementById("enter1").innerHTML = count;
}
show();
function nhap(){
    let newProduct=document.getElementById("enter").value;
    sua.push(newProduct);
    show();
}
function deleteIn(index){
    sua.splice(index,1);
    show();
}
function edit(index) {
    let ad;
    let td;
    for(let i=0;i<3;i++) {
        sua[index] = document.getElementById("enter").value;

        let trList = document.querySelectorAll("tr");
        td = trList[index].querySelector("td");
        ad = td.innerText;
    }
        td.innerHTML = "<input id='enter2' type=\"text\" value=\"" + ad + "\">";
}
function save(){
    let huy=document.getElementById("enter2").value;
    sua.push(huy);
    console.log(huy)
}