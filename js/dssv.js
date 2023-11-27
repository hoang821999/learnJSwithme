var dsDiem =[];
function dssv() {
    var mssv = document.forms["bangdiemform"]["mssv"].value;
    var hoten = document.forms["bangdiemform"]["hoten"].value;
    var diem = document.forms["bangdiemform"]["diem"].value;
    var sv = {
        mssv: mssv,
        hoten: hoten,
        diem: diem,
        xeploai: function () {
            if (diem>5) return "Đậu";
            else return "Trượt";
        }
    }
    dsDiem[dsDiem.length] = sv;
    
    showKq();
    document.getElementById("ketqua").innerHTML = showKq();
}
function showKq() {
    var kq = "";
    dsDiem.forEach(sinhvien => { //Mỗi phần tử chúng ta sẽ làm gì với nó
        kq += "<tr><td>" + sinhvien.mssv + "</td><td>" + sinhvien.hoten + "</td><td>" + sinhvien.diem + "</td><td>" + sinhvien.xeploai() + "</td></tr>";
    });
    return kq;
}