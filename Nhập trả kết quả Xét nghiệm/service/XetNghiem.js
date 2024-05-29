// nhập chỉ định xét nghiệm
function nhapChiDinh(id,ChiDinhXN){
    const loadThongTinBN = JSON.parse(localStorage.getItem(id))

    if (loadThongTinBN === null || loadThongTinBN === undefined) {
        alert(" Id không tồn tại !!!");
        return;
    }
    
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
    // const LoadChiDinhXN = loadThongTinBN.ChiDinhXN
    
    if (tenXN in loadThongTinBN.ChiDinhXN){
        loadThongTinBN.ChiDinhXN[tenXN] = KetQua
    }else{
        alert('Bệnh nhân không có chỉ định này !!!');
        return;
    } 
    // loadThongTinBN.ChiDinhXN[tenXN] = KetQua
    //cap nhat tren local
    localStorage.setItem(loadThongTinBN.id,JSON.stringify(loadThongTinBN))
    return loadThongTinBN
}
// sửa chỉ định xét nghiệm
// xoá chi định xét nghiệm
