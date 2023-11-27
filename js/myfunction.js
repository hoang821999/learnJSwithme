function hinhchunhat() {
    var dai = parseInt(document.getElementById("dai").value);// parseInt chuyển đổi từ dạng string sang dạng number
    var rong = parseInt(document.getElementById("rong").value);
    var chuvi = (dai + rong) * 2;
    var dientich = dai * rong;

    document.getElementById("chuvi").innerHTML = chuvi;
    document.getElementById("dientich").innerHTML = dientich;

};