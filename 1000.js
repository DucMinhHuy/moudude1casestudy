let sua=["Nicolaus Copernicus (theo tiếng Latinh; tiếng Ba Lan: Mikołaj Kopernik tiếng Đức: Nikolaus Kopernikus, thường được phiên âm trong tiếng Việt là Cô-péc-ních tiếng Pháp Nicolas Copernic) (19 tháng 2, 473 – 24 tháng 5, 543) là một nhà thiên văn học đã nêu ra hình thức hiện đại đầu tiên của thuyết nhật tâm (Mặt Trời ở trung tâm) trong cuốn sách mang tính mở đầu một kỷ nguyên của ông cuốn Về sự chuyển động quay của các thiên thể (De revolutionibus orbium coelestium). Copernicus sinh năm 1473 tại thành phố Toruń ở Hoàng gia Phổ, một tỉnh tự trị của Vương quốc Ba Lan (1385–1569). Ông học tập ở Ba Lan và Ý, và dành phần lớn cuộc đời làm việc ở Frombork,Hoàng gia Phổ, nơi ông mất năm 1543 Copernik là một trong những học giả có hiểu biết về nhiều phương diện ở thời đại ông sống.Ông là một nhà toán học, thiên văn học, luật gia, học giả kinh điển, nhà cai trị, viên chức hành chính, nhà ngoại giao, nhà kinh tế, và người lính.Trong số những khả năng của mình, ông đã lựa chọn thiên văn học làm nghề nghiệp chính, sự phát triển thuyết nhật tâm của ông được coi là giả thuyết khoa học quan trọng nhất trong lịch sử,đánh dấu bước chuyển sang thiên văn học hiện đạ",
"Pythagoras, nhà toán học Hy Lạp (575 -500 TC)Ông là người đã đưa ra định lý Pythagorean mà tất cả chúng ta đã học ở trường.Ngoài định nghĩa toán học nổi tiếng này, Pythagoras còn là học giả nổi tiếng đầu tiên nhấn mạnh rằng các hiện tượng tự nhiên có thể được giải thích bằng toán học (mở đường cho việc nghiên cứu Vật lý)và thậm chí còn là nguồn cảm hứng cho các học thuyết của Plato. Vì thế ông chính là một thiên tài lớn",
"Empedocles, Nhà khoa học và Triết học Hy Lạp 490-430 Ông là một nhà triết học và bác học thời Hy Lạp cổ đại học trò của Platon và thầy dạy của Alexandros Đại đế Di bút của ông bao gồm nhiều lĩnh vực như vật lý học, siêu hình học, thi văn, kịch nghệ, âm nhạc, luận lý học, tu từ học,ngôn ngữ học, Kinh tế học, chính trị học, đạo đức học, sinh học, và động vật học. Ông được xem là người đặt nền móng cho môn luận lý học,và được mệnh danh là Cha đẻ của Khoa học chính trị.Ông cũng thiết lập một phương cách tiếp cận với triết học bắt đầu bằng quan sát và trải nghiệm trước khi đi tới tư duy trừu tượng.Cùng với Platon và Socrates, Aristoteles là 1 trong 3 cột trụ của văn minh Hy Lạp cổ đại."]
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