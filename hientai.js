let sua=["Albert Einstein (phiên âm tiếng Việt: An-be Anh-xtanh) (/ˈaɪnstaɪn/ EYEN-styne;[4] tiếng Đức: [ˈalbɛʁt ˈʔaɪnʃtaɪn]  (Speaker Icon.svg nghe); 14 tháng 3 năm 1879 – 18 tháng 4 năm 1955) là một nhà vật lý lý thuyết người Đức, được công nhận là một trong những nhà vật lý vĩ đại nhất mọi thời đại, người đã phát triển thuyết tương đối tổng quát, một trong hai trụ cột của vật lý hiện đại (trụ cột còn lại là cơ học lượng tử). Mặc dù được biết đến nhiều nhất qua phương trình về sự tương đương khối lượng-năng lượng được xem là phương trình nổi tiếng nhất thế giới,[5] ông lại được trao Giải Nobel Vật lý năm 1921 cho những cống hiến của ông đối với vật lý lý thuyết, và đặc biệt cho sự khám phá ra định luật của hiệu ứng quang điện.[6] Công trình về hiệu ứng quang điện của ông mang tính bước ngoặt khai sinh ra lý thuyết lượng tử.",
"Thomas Alva Edison (11 tháng 2 năm 1847 – 18 tháng 10 năm 1931) là một nhà phát minh và thương nhân đã phát triển rất nhiều thiết bị có ảnh hưởng lớn tới cuộc sống trong thế kỷ 20. Ông được một nhà báo đặt danh hiệu Thầy phù thủy ở Menlo Park, ông là một trong những nhà phát minh đầu tiên ứng dụng các nguyên tắc sản xuất hàng loạt vào quy trình sáng tạo, và vì thế có thể coi là đã sáng tạo ra phòng nghiên cứu công nghiệp đầu tiên. Một số phát minh được gán cho ông, tuy ông không hoàn toàn là người đầu tiên có ý tưởng đó, nhưng sau khi bằng sáng chế đầu tiên được thay đổi nó trở thành của ông (nổi tiếng nhất là bóng đèn, trên thực tế là công việc của rất nhiều người bên trong công ty của ông). Edison được coi là một trong những nhà phát minh, nhà khoa học vĩ đại và giàu ý tưởng nhất trong lịch sử, ông giữ 1.093 bằng sáng chế tại Hoa Kỳ dưới tên ông, cũng như các bằng sáng chế ở Anh Quốc, Pháp, và Đức (tổng cộng 1.500 bằng phát minh trên toàn thế giới).",
"Nikola Tesla (chữ Kirin Serbia: Никола Тесла) (10 tháng 7 năm 1856 – 7 tháng 1 năm 1943) là một nhà phát minh, kỹ sư điện, kỹ sư cơ khí,người Mỹ gốc Serbia.[2][3][4] Ông được biết đến nhiều nhất vì những đóng góp của mình để thiết kế ra hệ thống dòng điện xoay chiều cung cấp điện dòng điện xoay chiều hiện đại"]
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