var a = null;
var b = null;
var o = null;
var kq = "";
function hienthi(x) {
    if((x != "") && (x != "ok")){
        kq += x;   
    }
    document.getElementById("kq").value = kq;
}

function toanhang(x) {
    if(a == null) {
        a = parseInt(x.value);
    } else {
        b = parseInt(x.value);
    }
    hienthi(x.value);
}
function toantu(x) {
    o = x.value;
    hienthi(x.value);
}
function thuchien() {
    switch (o) {
        case "+":
            kq = a + b;
            break;
        case "-":
            kq = a - b;
            break;
        case "*":
            kq = a * b;
            break;     
        case ":":
            kq = a / b;
            break;    
    }
    hienthi("ok");
    lamlai();
}
function lamlai() {
    a = null;
    b = null;
    o = null;
    kq = "";
}