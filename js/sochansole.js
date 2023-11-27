function sochansole() {
    var soThu1 = parseInt(document.getElementById("so1").value);
    var soThu2 = parseInt(document.getElementById("so2").value);

    document.getElementById("ketqua1").innerHTML = kiemtraso(soThu1);
    document.getElementById("ketqua2").innerHTML = kiemtraso(soThu2);
}
function kiemtraso (x) {
    if (x % 2 == 0) {
        return x + " đây là số chẵn";
    } else {
        return x + " đây là số lẻ";
    }
}