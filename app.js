let thoi_gian = 10;
let diem = 0;
let dang_choi;
const chu_duoc_nhap = document.querySelector('#chu_duoc_nhap');
const chu_hien_tai = document.querySelector('#chu_hien_tai');
const diem_hien_thi = document.querySelector('#diem');
const thoi_gian_hien_thi = document.querySelector('#giay');
const thong_bao = document.querySelector('#thong_bao');
const chu = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

window.addEventListener('load', chay_ham)

function chay_ham() {
    hien_thi_chu(chu);
}

function hien_thi_chu(chu) {
    const chu_ngau_nhien = Math.floor(Math.random() * chu.length);
    chu_hien_tai.innerHTML = chu[chu_ngau_nhien];
}

function chay_ham() {
    hien_thi_chu(chu);
    setInterval(dem_nguoc, 1000);
}

function dem_nguoc() {
    if (thoi_gian > 0) {
        thoi_gian--;
    } else if (thoi_gian == 0) {
        dang_choi = false;
    }
    thoi_gian_hien_thi.innerHTML = thoi_gian;
}

function chay_ham() {
    hien_thi_chu(chu);
    chu_duoc_nhap.addEventListener('input', so_sanh_chu)
    setInterval(dem_nguoc, 1000);
}

function so_sanh_chu() {
    if (so_sanh_tu()) {
        dang_choi = true;
        thoi_gian = 10;
        hien_thi_chu(chu);
        chu_duoc_nhap.value = '';
        diem++;
    }
    diem_hien_thi.innerHTML = diem;
}

function so_sanh_tu() {
    if ((chu_duoc_nhap.value) === (chu_hien_tai.innerHTML)) {
        thong_bao.innerHTML = 'Đúng Rồi';
        return true;
    } else {
        thong_bao.innerHTML = '';
        return false;
    }
}

function chay_ham() {
    hien_thi_chu(chu);
    chu_duoc_nhap.addEventListener('input', so_sanh_chu)
    setInterval(dem_nguoc, 1000);
    setInterval(kiem_tra_chu, 50);
}

function kiem_tra_chu() {
    if (!dang_choi && thoi_gian === 0) {
        thong_bao.innerHTML = 'Trò Chơi Kết Thúc!';
        diem = 0;
    }
}