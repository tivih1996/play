// nhập chỉ định xét nghiệm
function nhapChiDinh(id,ChiDinhXN){
    const loadThongTinBN = JSON.parse(localStorage.getItem(id))
    // kiểm tra có ID hay không
    if (loadThongTinBN === null || loadThongTinBN === undefined) {
        alert(" Id không tồn tại !!!");
        return;
    }
    // tạo chỉ định xét nghiệm
    const ChiDinhXNMoi ={}
    ChiDinhXNMoi[ChiDinhXN] = ''
    loadThongTinBN.ChiDinhXN = {...loadThongTinBN.ChiDinhXN,...ChiDinhXNMoi}
    // cập nhập trên local
    localStorage.setItem(loadThongTinBN.id,JSON.stringify(loadThongTinBN))
    return loadThongTinBN
}
// nhập kết quả xét nghiệm
function nhapKetQua (id,tenXN,KetQua) {
    const loadThongTinBN = JSON.parse(localStorage.getItem(id))
     // kiểm tra có ID hay không
    if (loadThongTinBN === null || loadThongTinBN === undefined) {
        alert(" Id không tồn tại !!!");
        return;
    }
    //  kiểm tra có chỉ đinh hya không
    if (tenXN in loadThongTinBN.ChiDinhXN){
        loadThongTinBN.ChiDinhXN[tenXN] = KetQua
    }else{
        alert('Bệnh nhân không có chỉ định này !!!');
        return;
    } 
    //cap nhat tren local
    localStorage.setItem(loadThongTinBN.id,JSON.stringify(loadThongTinBN))
    return loadThongTinBN
}

// xoá chi định xét nghiệm
