// truy xuất thong tin bệnh nhân
function xuatThongTinBN(id) {
     const ThongTinBN= JSON.parse(localStorage.getItem(id))
    return ThongTinBN
}
// cấp SID
function capSID(){
    // tao 4 số đuôi nhay từ 1000 đến 9999 và lặp lại
    const SoHienTai = JSON.parse(localStorage.getItem('number'))
    if (SoHienTai === null || SoHienTai === undefined ) {
       var SoMoi = 1000
       localStorage.setItem('number','1000')
    }else if(SoHienTai === 9999){
        var SoMoi = 1000
    }else { 
        var SoMoi = SoHienTai + 1
    }
    localStorage.setItem('number',JSON.stringify(SoMoi))
    
    var ngayHomNay = new Date();
    // Lấy ngày, tháng và năm từ đối tượng Date
    var ngay = ngayHomNay.getDate();
    var thang = ngayHomNay.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
    var nam = ngayHomNay.getFullYear() % 100; // Lấy 2 chữ số cuối cùng của năm
    // Đảm bảo ngày và tháng có hai chữ số
    ngay = ngay < 10 ? '0' + ngay : ngay;
    thang = thang < 10 ? '0' + thang : thang;
    
    // Tạo chuỗi ddmmyy
    const SID = `${ngay}${thang}${nam}${SoMoi}`;
    return SID
    }
// nhâp thông tin bệnh nhân
function nhapBN(Name,NamSinh,GioiTinh,Khoa ) {
    const ThongTinBN ={
        id: capSID(),
        Name,
        NamSinh,
        GioiTinh,
        Khoa,
        ChiDinhXN:''
    } 
    localStorage.setItem(ThongTinBN.id,JSON.stringify(ThongTinBN))
    return ThongTinBN
}

// Sửa Thông tin Bn
const obNoiDungSua ={
    Name:'',
    NamSinh:'',
    GioiTinh:'',
    Khoa:''
}
function suaThongTinBN(id,themNoiDungSua){
    const ThongTinBN= JSON.parse(localStorage.getItem(id))
    const NoiDungSua = themNoiDungSua()
    // lọc thuộc tính ''
    for (let key in NoiDungSua) {
        if (NoiDungSua[key] === ''){
            delete NoiDungSua[key]
        }      
    }
    
    ThongTinBNnew = {...ThongTinBN,...NoiDungSua}
    localStorage.setItem(ThongTinBNnew.id,JSON.stringify(ThongTinBNnew))
    return ThongTinBNnew
}