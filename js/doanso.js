function doanso() {
    var sobk = document.getElementById("sobk").value;
    var x = Math.round(20*Math.random())
    var kq = "";
    if (x == sobk) {
        kq = "Đoán quá giỏi !";
    } else if(x<sobk){
        kq ="Rất tiếc số bạn chọn đã lớn hơn số random" + " .Số random: " + x;
    } else {
        kq = "Rất tiếc số bạn chọn đã nhỏ hơn số random" + "số random:" + x;
    }
    document.getElementById("ketqua").innerHTML = kq;
}