function them(x) {
    var tr = x.parentElement.parentElement;
    var td = tr.children;
    var mssp = td[0].innerHTML;
    var soluong = td[4].children[0].value;

    var cont = 1;// bien theo doi dò tìm nếu không trung thì =0 ngược lại =1
    //tìm trong giỏ hàng mssp có tồn tại không ?
    // nếu có cập nhật lại số lượng trong giỏ hàng

    var gh = document.getElementById("giohang");
        var gh_tr = gh.children;
        for (let i = 0; i < gh_tr.length; i++) {
            var gh_td = gh_tr[i].getElementsByTagName("td");
            var mssp_giohang = gh_td[0].innerHTML;
            var soluong_giohang = parseInt(gh_td[4].innerHTML);
            if(mssp_giohang == mssp) {
                gh_td[4].innerHTML = parseInt(soluong_giohang) + parseInt(soluong);
                cont=0;
                break;
            }
        }
        //xong dò tìm trong giỏ hàng
        //nếu không có trùng thì tiếp tục add
    if(cont==1) {
        var hinh = td[1].children[0].src;
        var ten = td[2].innerHTML;
        var dongia = td[3].children[0].innerHTML;
        var thanhtien = parseInt(dongia) * parseInt(soluong);
        
        var giohang_tr = document.createElement("tr");
        //tao td và nội dung mssp
        var giohang_td = document.createElement("td");
        var giohang_td_mssp = document.createTextNode(mssp);
        giohang_td.appendChild(giohang_td_mssp);
        giohang_tr.appendChild(giohang_td);
        //tao td và nội dung hình:
        var giohang_td = document.createElement("td");
        var giohang_td_hinh = document.createElement("img");
        giohang_td_hinh.src = hinh;
        giohang_td_hinh.style.height = "80px"
        giohang_td.appendChild(giohang_td_hinh);
        giohang_tr.appendChild(giohang_td);
        //tao td và nội dung tên:
        var giohang_td = document.createElement("td");
        var giohang_td_ten = document.createTextNode(ten);
        giohang_td.appendChild(giohang_td_ten)
        giohang_tr.appendChild(giohang_td);
        //tao td và nội dung đơn giá:
        var giohang_td = document.createElement("td");
        var giohang_td_dongia = document.createTextNode(dongia);
        giohang_td.appendChild(giohang_td_dongia)
        giohang_tr.appendChild(giohang_td);
        //tạo td và nội dung số lượng:
        var giohang_td = document.createElement("td");
        var giohang_td_soluong = document.createTextNode(soluong);
        giohang_td.appendChild(giohang_td_soluong)
        giohang_tr.appendChild(giohang_td);
        //tạo td và nội dung thành tiền:
        var giohang_td = document.createElement("td");
        var giohang_td_thanhtien = document.createTextNode(thanhtien);
        giohang_td.appendChild(giohang_td_thanhtien)
        giohang_tr.appendChild(giohang_td);
        //tạo nút xoá
        var giohang_td = document.createElement("td");
        var giohang_td_nut = document.createElement("input");
        giohang_td_nut.type = "button";
        giohang_td_nut.value = "Xoá";
        giohang_td_nut.setAttribute("onclick","xoa(this)");
        giohang_td.appendChild(giohang_td_nut);
        giohang_tr.appendChild(giohang_td);
        // gắn tr vào giỏi hàng tbody
        var giohang = document.getElementById("giohang");
        giohang.appendChild(giohang_tr);
    }    
    //Gọi hàm tính tổng giá trị đơn hàng
    tongdonhang();

}
    function xoa(x) {
        var tr = x.parentElement.parentElement;
        tr.remove();
        tongdonhang();
    }
    
    function tongdonhang() {
        var giohang = document.getElementById("giohang");
        var tr = giohang.children;
        var tong = 0;
        for (let i = 0; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName("td");
            var thanhtien = parseInt(td[3].innerHTML)*parseInt(td[4].innerHTML);
            tong += thanhtien;
        }
        document.getElementById("tongdonhang").innerHTML = tong;
    }