function diemsinhvien() {
    var hoTen = document.getElementById("hovaten").value;
    var diemSv = document.getElementById("diemsv").value;

    document.getElementById("kqhoten").innerHTML = hoTen.toUpperCase();
    document.getElementById("kqdiem").innerHTML = diemSv;
    document.getElementById("kqxeploai").innerHTML = xeploai(diemSv);
    document.getElementById("kqcuoi").innerHTML = kq(diemSv);
}

function xeploai(x) {
    if (x >= 9) {
        return "xuất sắc";
    } else if((x>=8) && (x<9)) {
        return " giỏi";
    } else if((x>=7) && (x<8)) {
        return " khá";
    } else if((x>=5) && (x<7)) {
        return " trung bình khá";
    } else if((x == 5)) {
        return " trung bình";
    } else {
        return " yếu";
    }
}

function kq(x) {
    if (x < 5) {
        return "rớt";
    } else {
        return "đậu";
    }
}