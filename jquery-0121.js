//copy all >> file js github
let status = 0;
var data;

function btoaUTF8(str) {
    const encoder = new TextEncoder();
    const outputdata = encoder.encode(str);
    return btoa(String.fromCharCode(...outputdata));
}

function atobUTF8(base64Str) {
    const decodedData = atob(base64Str);
    const decoder = new TextDecoder();
    return decoder.decode(Uint8Array.from(decodedData, (c) => c.charCodeAt(0)));
}

const lichhoc = [
        {code:"luyendelichsukg2hsa",subject:"[LĐ HSA KG2] Lịch sử",start_time:new Date("3/31/2025 20:15:00"),end_time:new Date("4/1/2025 1:30:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
        {code:"luyendedinhtinhct1hsa",subject:"[LĐ HSA CT1] Định tính",start_time:new Date("3/31/2025 20:45:00"),end_time:new Date("4/1/2025 2:00:00"),learn_number:9,lesson_name:"Luyện đề HSA25I - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
        {code:"luyendetienganhct1hsa",subject:"[LĐ HSA CT1] Tiếng Anh",start_time:new Date("3/31/2025 20:45:00"),end_time:new Date("4/1/2025 2:00:00"),learn_number:9,lesson_name:"Luyện đề HSA25I - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendevatlypen",subject:"[LĐ THPTQG] Vật lý",start_time:new Date("3/31/2025 20:45:00"),end_time:new Date("4/1/2025 2:00:00"),learn_number:9,lesson_name:"Luyện đề Pen I số 05",teacher:"Nguyễn Hữu Tình"},
        {code:"luyendedinhtinhkg2hsa",subject:"[LĐ HSA KG2] Định tính",start_time:new Date("3/31/2025 20:45:00"),end_time:new Date("4/1/2025 2:00:00"),learn_number:6,lesson_name:"Luyện đề HSA25F - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
        {code:"luyendetienganhkg2hsa",subject:"[LĐ HSA KG2] Tiếng Anh",start_time:new Date("3/31/2025 20:45:00"),end_time:new Date("4/1/2025 2:00:00"),learn_number:6,lesson_name:"Luyện đề HSA25F - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendehoahocct1hsa",subject:"[LĐ HSA CT1] Hóa học",start_time:new Date("3/31/2025 21:15:00"),end_time:new Date("4/1/2025 2:30:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Hóa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedochieuct2tsa",subject:"[LĐ TSA CT2] Đọc hiểu",start_time:new Date("3/31/2025 21:15:00"),end_time:new Date("4/1/2025 2:30:00"),learn_number:7,lesson_name:"Luyện đề TSA25MN - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedochieuct3tsa",subject:"[LĐ TSA CT3] Đọc hiểu",start_time:new Date("3/31/2025 21:15:00"),end_time:new Date("4/1/2025 2:30:00"),learn_number:7,lesson_name:"Luyện đề TSA25MN - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendetienganhpen",subject:"[LĐ THPTQG] Tiếng Anh",start_time:new Date("4/1/2025 20:15:00"),end_time:new Date("4/2/2025 1:30:00"),learn_number:10,lesson_name:"Tiếng Anh_Luyện đề PEN-I số 05",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendedinhtinhct1hsa",subject:"[LĐ HSA CT1] Định tính",start_time:new Date("4/1/2025 20:45:00"),end_time:new Date("4/2/2025 2:00:00"),learn_number:9,lesson_name:"Luyện đề HSA25I - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
        {code:"luyendesinhhocpen",subject:"[LĐ THPTQG] Sinh học",start_time:new Date("4/1/2025 20:45:00"),end_time:new Date("4/2/2025 2:00:00"),learn_number:9,lesson_name:"Phương pháp và kĩ năng chủ đề Sinh thái học (Hủy live)",teacher:"Nguyễn Duy Khánh"},
        {code:"luyendehoahocpen",subject:"[LĐ THPTQG] Hóa học",start_time:new Date("4/1/2025 20:45:00"),end_time:new Date("4/2/2025 2:00:00"),learn_number:9,lesson_name:"Phương pháp và kĩ năng xử lý câu hỏi Lý thuyết thuộc Chuyên đề nâng cao và ứng dụng",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendelichsukg2hsa",subject:"[LĐ HSA KG2] Lịch sử",start_time:new Date("4/1/2025 20:45:00"),end_time:new Date("4/2/2025 2:00:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
        {code:"luyendedinhtinhkg2hsa",subject:"[LĐ HSA KG2] Định tính",start_time:new Date("4/1/2025 20:45:00"),end_time:new Date("4/2/2025 2:00:00"),learn_number:6,lesson_name:"Luyện đề HSA25F - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
        {code:"mentorsayhipen",subject:"[Mentorsayhi] PEN",start_time:new Date("4/1/2025 21:15:00"),end_time:new Date("4/2/2025 2:30:00"),learn_number:59,lesson_name:"Pen-I_Toán_Đề luyện PEN-I số 03",teacher:"Nguyễn Hợp Huy"},
        {code:"luyendekhoahocct2tsa",subject:"[LĐ TSA CT2] Khoa học",start_time:new Date("4/1/2025 21:15:00"),end_time:new Date("4/2/2025 2:30:00"),learn_number:13,lesson_name:"Luyện đề TSA25M - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendekhoahocct3tsa",subject:"[LĐ TSA CT3] Khoa học",start_time:new Date("4/1/2025 21:15:00"),end_time:new Date("4/2/2025 2:30:00"),learn_number:13,lesson_name:"Luyện đề TSA25M - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedialict1hsa",subject:"[LĐ HSA CT1] Địa lí",start_time:new Date("4/2/2025 20:15:00"),end_time:new Date("4/3/2025 1:30:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
        {code:"luyendehoahocct1hsa",subject:"[LĐ HSA CT1] Hóa học",start_time:new Date("4/2/2025 20:45:00"),end_time:new Date("4/3/2025 2:00:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Hóa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedinhluongct1hsa",subject:"[LĐ HSA CT1] Định lượng",start_time:new Date("4/2/2025 20:45:00"),end_time:new Date("4/3/2025 2:00:00"),learn_number:9,lesson_name:"Luyện đề HSA25I - Phần Tư duy định lượng",teacher:"Nguyễn Đức Tài"},
        {code:"luyendetoanpen",subject:"[LĐ THPTQG] Toán",start_time:new Date("4/2/2025 20:45:00"),end_time:new Date("4/3/2025 2:00:00"),learn_number:9,lesson_name:"Phương pháp giải các bài toán vận dụng",teacher:"Nguyễn Thanh Tùng"},
        {code:"luyendesinhhocpen",subject:"[LĐ THPTQG] Sinh học",start_time:new Date("4/2/2025 20:45:00"),end_time:new Date("4/3/2025 2:00:00"),learn_number:9,lesson_name:"Phương pháp và kĩ năng chủ đề Sinh thái học (Hủy live)",teacher:"Nguyễn Duy Khánh"},
        {code:"luyendedinhluongkg2hsa",subject:"[LĐ HSA KG2] Định lượng",start_time:new Date("4/2/2025 20:45:00"),end_time:new Date("4/3/2025 2:00:00"),learn_number:6,lesson_name:"Luyện đề HSA25F - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
        {code:"mentorsayhivact",subject:"[Mentorsayhi] V-ACT",start_time:new Date("4/2/2025 21:15:00"),end_time:new Date("4/3/2025 2:30:00"),learn_number:60,lesson_name:"V-ACT_Đề luyện_V-ACT25_Đề 567_KHTN",teacher:"Vũ Văn Trường"},
        {code:"luyendetoanct2tsa",subject:"[LĐ TSA CT2] Toán",start_time:new Date("4/2/2025 21:15:00"),end_time:new Date("4/3/2025 2:30:00"),learn_number:14,lesson_name:"Luyện đề TSA25N - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
        {code:"luyendetoanct3tsa",subject:"[LĐ TSA CT3] Toán",start_time:new Date("4/2/2025 21:15:00"),end_time:new Date("4/3/2025 2:30:00"),learn_number:14,lesson_name:"Luyện đề TSA25N - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
        {code:"luyendesinhhockg2hsa",subject:"[LĐ HSA KG2] Sinh học",start_time:new Date("4/2/2025 21:15:00"),end_time:new Date("4/3/2025 2:30:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
        {code:"luyendedialict1hsa",subject:"[LĐ HSA CT1] Địa lí",start_time:new Date("4/3/2025 20:45:00"),end_time:new Date("4/4/2025 2:00:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
        {code:"luyendetienganhct1hsa",subject:"[LĐ HSA CT1] Tiếng Anh",start_time:new Date("4/3/2025 20:45:00"),end_time:new Date("4/4/2025 2:00:00"),learn_number:9,lesson_name:"Luyện đề HSA25I - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendevatlypen",subject:"[LĐ THPTQG] Vật lý",start_time:new Date("4/3/2025 20:45:00"),end_time:new Date("4/4/2025 2:00:00"),learn_number:9,lesson_name:"Luyện đề Pen I số 05",teacher:"Nguyễn Hữu Tình"},
        {code:"luyendetoanpen",subject:"[LĐ THPTQG] Toán",start_time:new Date("4/3/2025 20:45:00"),end_time:new Date("4/4/2025 2:00:00"),learn_number:9,lesson_name:"Phương pháp giải các bài toán vận dụng",teacher:"Nguyễn Thanh Tùng"},
        {code:"luyendetienganhkg2hsa",subject:"[LĐ HSA KG2] Tiếng Anh",start_time:new Date("4/3/2025 20:45:00"),end_time:new Date("4/4/2025 2:00:00"),learn_number:6,lesson_name:"Luyện đề HSA25F - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendelichsukg2hsa",subject:"[LĐ HSA KG2] Lịch sử",start_time:new Date("4/3/2025 20:45:00"),end_time:new Date("4/4/2025 2:00:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
        {code:"luyendedinhluongct1hsa",subject:"[LĐ HSA CT1] Định lượng",start_time:new Date("4/3/2025 21:15:00"),end_time:new Date("4/4/2025 2:30:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
        {code:"mentorsayhitsa",subject:"[Mentorsayhi] TSA",start_time:new Date("4/3/2025 21:15:00"),end_time:new Date("4/4/2025 2:30:00"),learn_number:61,lesson_name:"TSA_Đề luyện TSA25B - Phần Tư duy Khoa học",teacher:"Nguyễn Trần Gia Duy"},
        {code:"luyendedochieuct2tsa",subject:"[LĐ TSA CT2] Đọc hiểu",start_time:new Date("4/3/2025 21:15:00"),end_time:new Date("4/4/2025 2:30:00"),learn_number:8,lesson_name:"Luyện đề TSA25OP - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedochieuct3tsa",subject:"[LĐ TSA CT3] Đọc hiểu",start_time:new Date("4/3/2025 21:15:00"),end_time:new Date("4/4/2025 2:30:00"),learn_number:8,lesson_name:"Luyện đề TSA25OP - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedinhluongkg2hsa",subject:"[LĐ HSA KG2] Định lượng",start_time:new Date("4/3/2025 21:15:00"),end_time:new Date("4/4/2025 2:30:00"),learn_number:7,lesson_name:"Luyện đề HSA25G - Phần Tư duy định lượng",teacher:"Nguyễn Đức Tài"},
        {code:"luyendekhoahocct2tsa",subject:"[LĐ TSA CT2] Khoa học",start_time:new Date("4/4/2025 18:45:00"),end_time:new Date("4/5/2025 0:00:00"),learn_number:13,lesson_name:"Luyện đề TSA25M - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendekhoahocct3tsa",subject:"[LĐ TSA CT3] Khoa học",start_time:new Date("4/4/2025 18:45:00"),end_time:new Date("4/5/2025 0:00:00"),learn_number:13,lesson_name:"Luyện đề TSA25M - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedinhtinhct1hsa",subject:"[LĐ HSA CT1] Định tính",start_time:new Date("4/4/2025 20:30:00"),end_time:new Date("4/5/2025 1:45:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
        {code:"luyendedinhtinhkg2hsa",subject:"[LĐ HSA KG2] Định tính",start_time:new Date("4/4/2025 20:30:00"),end_time:new Date("4/5/2025 1:45:00"),learn_number:7,lesson_name:"Luyện đề HSA25G - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
        {code:"luyendesinhhocpen",subject:"[LĐ THPTQG] Sinh học",start_time:new Date("4/4/2025 20:45:00"),end_time:new Date("4/5/2025 2:00:00"),learn_number:9,lesson_name:"Phương pháp và kĩ năng chủ đề Sinh thái học",teacher:"Nguyễn Duy Khánh"},
        {code:"luyendetienganhpen",subject:"[LĐ THPTQG] Tiếng Anh",start_time:new Date("4/4/2025 20:45:00"),end_time:new Date("4/5/2025 2:00:00"),learn_number:10,lesson_name:"Tiếng Anh_Luyện đề PEN-I số 05",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendehoahocpen",subject:"[LĐ THPTQG] Hóa học",start_time:new Date("4/4/2025 20:45:00"),end_time:new Date("4/5/2025 2:00:00"),learn_number:9,lesson_name:"Phương pháp và kĩ năng xử lý câu hỏi Lý thuyết thuộc Chuyên đề nâng cao và ứng dụng",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendesinhhockg2hsa",subject:"[LĐ HSA KG2] Sinh học",start_time:new Date("4/4/2025 20:45:00"),end_time:new Date("4/5/2025 2:00:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
        {code:"luyendetoanct2tsa",subject:"[LĐ TSA CT2] Toán",start_time:new Date("4/5/2025 18:45:00"),end_time:new Date("4/6/2025 0:00:00"),learn_number:14,lesson_name:"Luyện đề TSA25N - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
        {code:"luyendetoanct3tsa",subject:"[LĐ TSA CT3] Toán",start_time:new Date("4/5/2025 18:45:00"),end_time:new Date("4/6/2025 0:00:00"),learn_number:14,lesson_name:"Luyện đề TSA25N - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
        {code:"luyendetoanpen",subject:"[LĐ THPTQG] Toán",start_time:new Date("4/5/2025 20:15:00"),end_time:new Date("4/6/2025 1:30:00"),learn_number:10,lesson_name:"Toán_Luyện đề PEN-I số 5",teacher:"Nguyễn Thanh Tùng"},
        {code:"luyendetienganhct1hsa",subject:"[LĐ HSA CT1] Tiếng Anh",start_time:new Date("4/5/2025 20:45:00"),end_time:new Date("4/6/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendehoahocct1hsa",subject:"[LĐ HSA CT1] Hóa học",start_time:new Date("4/5/2025 20:45:00"),end_time:new Date("4/6/2025 2:00:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Hóa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendevatlypen",subject:"[LĐ THPTQG] Vật lý",start_time:new Date("4/5/2025 20:45:00"),end_time:new Date("4/6/2025 2:00:00"),learn_number:9,lesson_name:"Luyện đề Pen I số 05",teacher:"Nguyễn Hữu Tình"},
        {code:"luyendetienganhkg2hsa",subject:"[LĐ HSA KG2] Tiếng Anh",start_time:new Date("4/5/2025 20:45:00"),end_time:new Date("4/6/2025 2:00:00"),learn_number:7,lesson_name:"Luyện đề HSA25G - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendesinhhockg2hsa",subject:"[LĐ HSA KG2] Sinh học",start_time:new Date("4/5/2025 20:45:00"),end_time:new Date("4/6/2025 2:00:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
        {code:"mentorsayhitsa",subject:"[Mentorsayhi] TSA",start_time:new Date("4/5/2025 21:15:00"),end_time:new Date("4/6/2025 2:30:00"),learn_number:62,lesson_name:"TSA_Đề luyện TSA25H - Phần Tư duy Toán học",teacher:"Nguyễn Hợp Huy"},
        {code:"luyendekhoahocct2tsa",subject:"[LĐ TSA CT2] Khoa học",start_time:new Date("4/5/2025 21:15:00"),end_time:new Date("4/6/2025 2:30:00"),learn_number:14,lesson_name:"Luyện đề TSA25N - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendekhoahocct3tsa",subject:"[LĐ TSA CT3] Khoa học",start_time:new Date("4/5/2025 21:15:00"),end_time:new Date("4/6/2025 2:30:00"),learn_number:14,lesson_name:"Luyện đề TSA25N - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedinhluongct1hsa",subject:"[LĐ HSA CT1] Định lượng",start_time:new Date("4/6/2025 20:45:00"),end_time:new Date("4/7/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
        {code:"luyendedialict1hsa",subject:"[LĐ HSA CT1] Địa lí",start_time:new Date("4/6/2025 20:45:00"),end_time:new Date("4/7/2025 2:00:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
        {code:"luyendetienganhpen",subject:"[LĐ THPTQG] Tiếng Anh",start_time:new Date("4/6/2025 20:45:00"),end_time:new Date("4/7/2025 2:00:00"),learn_number:10,lesson_name:"Tiếng Anh_Luyện đề PEN-I số 05",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendedinhluongkg2hsa",subject:"[LĐ HSA KG2] Định lượng",start_time:new Date("4/6/2025 20:45:00"),end_time:new Date("4/7/2025 2:00:00"),learn_number:7,lesson_name:"Luyện đề HSA25G - Phần Tư duy định lượng",teacher:"Nguyễn Đức Tài"},
        {code:"luyendevatlyct1hsa",subject:"[LĐ HSA CT1] Vật lý",start_time:new Date("4/6/2025 21:15:00"),end_time:new Date("4/7/2025 2:30:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Vật lí",teacher:"Nguyễn Thành Đạt"},
        {code:"luyendedochieuct2tsa",subject:"[LĐ TSA CT2] Đọc hiểu",start_time:new Date("4/6/2025 21:15:00"),end_time:new Date("4/7/2025 2:30:00"),learn_number:8,lesson_name:"Luyện đề TSA25OP - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendetoanct2tsa",subject:"[LĐ TSA CT2] Toán",start_time:new Date("4/6/2025 21:15:00"),end_time:new Date("4/7/2025 2:30:00"),learn_number:14,lesson_name:"Luyện đề TSA25N - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
        {code:"luyendedochieuct3tsa",subject:"[LĐ TSA CT3] Đọc hiểu",start_time:new Date("4/6/2025 21:15:00"),end_time:new Date("4/7/2025 2:30:00"),learn_number:8,lesson_name:"Luyện đề TSA25OP - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendetoanct3tsa",subject:"[LĐ TSA CT3] Toán",start_time:new Date("4/6/2025 21:15:00"),end_time:new Date("4/7/2025 2:30:00"),learn_number:14,lesson_name:"Luyện đề TSA25N - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
        {code:"luyendehoahocpen",subject:"[LĐ THPTQG] Hóa học",start_time:new Date("4/6/2025 21:15:00"),end_time:new Date("4/7/2025 2:30:00"),learn_number:10,lesson_name:"Luyện đề Pen-I số 05 (đề tiêu chuẩn)",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendevatlykg2hsa",subject:"[LĐ HSA KG2] Vật lý",start_time:new Date("4/6/2025 21:15:00"),end_time:new Date("4/7/2025 2:30:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Vật lí",teacher:"Nguyễn Thành Đạt"},
        {code:"luyendedinhtinhct1hsa",subject:"[LĐ HSA CT1] Định tính",start_time:new Date("4/7/2025 20:45:00"),end_time:new Date("4/8/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
        {code:"luyendetienganhct1hsa",subject:"[LĐ HSA CT1] Tiếng Anh",start_time:new Date("4/7/2025 20:45:00"),end_time:new Date("4/8/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendedinhtinhkg2hsa",subject:"[LĐ HSA KG2] Định tính",start_time:new Date("4/7/2025 20:45:00"),end_time:new Date("4/8/2025 2:00:00"),learn_number:7,lesson_name:"Luyện đề HSA25G - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
        {code:"luyendetienganhkg2hsa",subject:"[LĐ HSA KG2] Tiếng Anh",start_time:new Date("4/7/2025 20:45:00"),end_time:new Date("4/8/2025 2:00:00"),learn_number:7,lesson_name:"Luyện đề HSA25G - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendedochieuct2tsa",subject:"[LĐ TSA CT2] Đọc hiểu",start_time:new Date("4/7/2025 21:15:00"),end_time:new Date("4/8/2025 2:30:00"),learn_number:8,lesson_name:"Luyện đề TSA25OP - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedochieuct3tsa",subject:"[LĐ TSA CT3] Đọc hiểu",start_time:new Date("4/7/2025 21:15:00"),end_time:new Date("4/8/2025 2:30:00"),learn_number:8,lesson_name:"Luyện đề TSA25OP - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendetienganhpen",subject:"[LĐ THPTQG] Tiếng Anh",start_time:new Date("4/8/2025 20:15:00"),end_time:new Date("4/9/2025 1:30:00"),learn_number:11,lesson_name:"Tiếng Anh_Luyện đề PEN-I số 06",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendedinhtinhct1hsa",subject:"[LĐ HSA CT1] Định tính",start_time:new Date("4/8/2025 20:45:00"),end_time:new Date("4/9/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
        {code:"luyendesinhhocpen",subject:"[LĐ THPTQG] Sinh học",start_time:new Date("4/8/2025 20:45:00"),end_time:new Date("4/9/2025 2:00:00"),learn_number:9,lesson_name:"Phương pháp và kĩ năng chủ đề Sinh thái học",teacher:"Nguyễn Duy Khánh"},
        {code:"luyendehoahocpen",subject:"[LĐ THPTQG] Hóa học",start_time:new Date("4/8/2025 20:45:00"),end_time:new Date("4/9/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề Pen-I số 05 (đề tiêu chuẩn)",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedinhtinhkg2hsa",subject:"[LĐ HSA KG2] Định tính",start_time:new Date("4/8/2025 20:45:00"),end_time:new Date("4/9/2025 2:00:00"),learn_number:7,lesson_name:"Luyện đề HSA25G - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
        {code:"mentorsayhitsa",subject:"[Mentorsayhi] TSA",start_time:new Date("4/8/2025 21:15:00"),end_time:new Date("4/9/2025 2:30:00"),learn_number:63,lesson_name:"TSA_Đề luyện TSA25CD - Phần Tư duy Đọc hiểu",teacher:"Nguyễn Hợp Huy"},
        {code:"luyendekhoahocct2tsa",subject:"[LĐ TSA CT2] Khoa học",start_time:new Date("4/8/2025 21:15:00"),end_time:new Date("4/9/2025 2:30:00"),learn_number:14,lesson_name:"Luyện đề TSA25N - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendekhoahocct3tsa",subject:"[LĐ TSA CT3] Khoa học",start_time:new Date("4/8/2025 21:15:00"),end_time:new Date("4/9/2025 2:30:00"),learn_number:14,lesson_name:"Luyện đề TSA25N - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedialikg2hsa",subject:"[LĐ HSA KG2] Địa lí",start_time:new Date("4/9/2025 20:15:00"),end_time:new Date("4/10/2025 1:30:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
        {code:"luyendevatlyct1hsa",subject:"[LĐ HSA CT1] Vật lý",start_time:new Date("4/9/2025 20:45:00"),end_time:new Date("4/10/2025 2:00:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Vật lí",teacher:"Nguyễn Thành Đạt"},
        {code:"luyendedinhluongct1hsa",subject:"[LĐ HSA CT1] Định lượng",start_time:new Date("4/9/2025 20:45:00"),end_time:new Date("4/10/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
        {code:"luyendetoanpen",subject:"[LĐ THPTQG] Toán",start_time:new Date("4/9/2025 20:45:00"),end_time:new Date("4/10/2025 2:00:00"),learn_number:10,lesson_name:"Toán_Luyện đề PEN-I số 5",teacher:"Nguyễn Thanh Tùng"},
        {code:"luyendesinhhocpen",subject:"[LĐ THPTQG] Sinh học",start_time:new Date("4/9/2025 20:45:00"),end_time:new Date("4/10/2025 2:00:00"),learn_number:9,lesson_name:"Phương pháp và kĩ năng chủ đề Sinh thái học",teacher:"Nguyễn Duy Khánh"},
        {code:"luyendevatlykg2hsa",subject:"[LĐ HSA KG2] Vật lý",start_time:new Date("4/9/2025 20:45:00"),end_time:new Date("4/10/2025 2:00:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Vật lí",teacher:"Nguyễn Thành Đạt"},
        {code:"luyendedinhluongkg2hsa",subject:"[LĐ HSA KG2] Định lượng",start_time:new Date("4/9/2025 20:45:00"),end_time:new Date("4/10/2025 2:00:00"),learn_number:7,lesson_name:"Luyện đề HSA25G - Phần Tư duy định lượng",teacher:"Nguyễn Đức Tài"},
        {code:"mentorsayhivact",subject:"[Mentorsayhi] V-ACT",start_time:new Date("4/9/2025 21:15:00"),end_time:new Date("4/10/2025 2:30:00"),learn_number:64,lesson_name:"V-ACT_Đề luyện_V-ACT25_Đề 567_KHXH",teacher:"Vũ Văn Trường"},
        {code:"luyendetoanct2tsa",subject:"[LĐ TSA CT2] Toán",start_time:new Date("4/9/2025 21:15:00"),end_time:new Date("4/10/2025 2:30:00"),learn_number:15,lesson_name:"Luyện đề TSA25O - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
        {code:"luyendetoanct3tsa",subject:"[LĐ TSA CT3] Toán",start_time:new Date("4/9/2025 21:15:00"),end_time:new Date("4/10/2025 2:30:00"),learn_number:15,lesson_name:"Luyện đề TSA25O - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
        {code:"luyendetienganhct1hsa",subject:"[LĐ HSA CT1] Tiếng Anh",start_time:new Date("4/10/2025 20:45:00"),end_time:new Date("4/11/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendetoanpen",subject:"[LĐ THPTQG] Toán",start_time:new Date("4/10/2025 20:45:00"),end_time:new Date("4/11/2025 2:00:00"),learn_number:10,lesson_name:"Toán_Luyện đề PEN-I số 5",teacher:"Nguyễn Thanh Tùng"},
        {code:"luyendedialikg2hsa",subject:"[LĐ HSA KG2] Địa lí",start_time:new Date("4/10/2025 20:45:00"),end_time:new Date("4/11/2025 2:00:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
        {code:"luyendetienganhkg2hsa",subject:"[LĐ HSA KG2] Tiếng Anh",start_time:new Date("4/10/2025 20:45:00"),end_time:new Date("4/11/2025 2:00:00"),learn_number:7,lesson_name:"Luyện đề HSA25G - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"mentorsayhihsa",subject:"[Mentorsayhi] HSA",start_time:new Date("4/10/2025 21:15:00"),end_time:new Date("4/11/2025 2:30:00"),learn_number:65,lesson_name:"HSA_Đề luyện HSA25AB - Phần Khoa học Hóa",teacher:"Nguyễn Trần Gia Duy"},
        {code:"luyendedinhluongkg2hsa",subject:"[LĐ HSA KG2] Định lượng",start_time:new Date("4/10/2025 21:15:00"),end_time:new Date("4/11/2025 2:30:00"),learn_number:8,lesson_name:"Luyện đề HSA25H - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
        {code:"luyendekhoahocct2tsa",subject:"[LĐ TSA CT2] Khoa học",start_time:new Date("4/11/2025 18:45:00"),end_time:new Date("4/12/2025 0:00:00"),learn_number:14,lesson_name:"Luyện đề TSA25N - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendekhoahocct3tsa",subject:"[LĐ TSA CT3] Khoa học",start_time:new Date("4/11/2025 18:45:00"),end_time:new Date("4/12/2025 0:00:00"),learn_number:14,lesson_name:"Luyện đề TSA25N - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedinhtinhkg2hsa",subject:"[LĐ HSA KG2] Định tính",start_time:new Date("4/11/2025 20:30:00"),end_time:new Date("4/12/2025 1:45:00"),learn_number:8,lesson_name:"Luyện đề HSA25H - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
        {code:"luyendesinhhocpen",subject:"[LĐ THPTQG] Sinh học",start_time:new Date("4/11/2025 20:45:00"),end_time:new Date("4/12/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề Pen-I số 05 (đề tiêu chuẩn)",teacher:"Nguyễn Duy Khánh"},
        {code:"luyendetienganhpen",subject:"[LĐ THPTQG] Tiếng Anh",start_time:new Date("4/11/2025 20:45:00"),end_time:new Date("4/12/2025 2:00:00"),learn_number:11,lesson_name:"Tiếng Anh_Luyện đề PEN-I số 06",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendehoahocpen",subject:"[LĐ THPTQG] Hóa học",start_time:new Date("4/11/2025 20:45:00"),end_time:new Date("4/12/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề Pen-I số 05 (đề tiêu chuẩn)",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendetoanct2tsa",subject:"[LĐ TSA CT2] Toán",start_time:new Date("4/12/2025 18:45:00"),end_time:new Date("4/13/2025 0:00:00"),learn_number:15,lesson_name:"Luyện đề TSA25O - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
        {code:"luyendetoanct3tsa",subject:"[LĐ TSA CT3] Toán",start_time:new Date("4/12/2025 18:45:00"),end_time:new Date("4/13/2025 0:00:00"),learn_number:15,lesson_name:"Luyện đề TSA25O - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
        {code:"luyendetoanpen",subject:"[LĐ THPTQG] Toán",start_time:new Date("4/12/2025 20:15:00"),end_time:new Date("4/13/2025 1:30:00"),learn_number:11,lesson_name:"Toán_Luyện đề PEN-I số 6",teacher:"Nguyễn Thanh Tùng"},
        {code:"luyendevatlyct1hsa",subject:"[LĐ HSA CT1] Vật lý",start_time:new Date("4/12/2025 20:45:00"),end_time:new Date("4/13/2025 2:00:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Vật lí",teacher:"Nguyễn Thành Đạt"},
        {code:"luyendetienganhkg2hsa",subject:"[LĐ HSA KG2] Tiếng Anh",start_time:new Date("4/12/2025 20:45:00"),end_time:new Date("4/13/2025 2:00:00"),learn_number:8,lesson_name:"Luyện đề HSA25H - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendevatlykg2hsa",subject:"[LĐ HSA KG2] Vật lý",start_time:new Date("4/12/2025 20:45:00"),end_time:new Date("4/13/2025 2:00:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Vật lí",teacher:"Nguyễn Thành Đạt"},
        {code:"luyendekhoahocct2tsa",subject:"[LĐ TSA CT2] Khoa học",start_time:new Date("4/12/2025 21:15:00"),end_time:new Date("4/13/2025 2:30:00"),learn_number:15,lesson_name:"Luyện đề TSA25O - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendekhoahocct3tsa",subject:"[LĐ TSA CT3] Khoa học",start_time:new Date("4/12/2025 21:15:00"),end_time:new Date("4/13/2025 2:30:00"),learn_number:15,lesson_name:"Luyện đề TSA25O - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendetienganhpen",subject:"[LĐ THPTQG] Tiếng Anh",start_time:new Date("4/13/2025 20:45:00"),end_time:new Date("4/14/2025 2:00:00"),learn_number:11,lesson_name:"Tiếng Anh_Luyện đề PEN-I số 06",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendedinhluongkg2hsa",subject:"[LĐ HSA KG2] Định lượng",start_time:new Date("4/13/2025 20:45:00"),end_time:new Date("4/14/2025 2:00:00"),learn_number:8,lesson_name:"Luyện đề HSA25H - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
        {code:"luyendedialikg2hsa",subject:"[LĐ HSA KG2] Địa lí",start_time:new Date("4/13/2025 20:45:00"),end_time:new Date("4/14/2025 2:00:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
        {code:"luyendetoanct2tsa",subject:"[LĐ TSA CT2] Toán",start_time:new Date("4/13/2025 21:15:00"),end_time:new Date("4/14/2025 2:30:00"),learn_number:15,lesson_name:"Luyện đề TSA25O - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
        {code:"luyendetoanct3tsa",subject:"[LĐ TSA CT3] Toán",start_time:new Date("4/13/2025 21:15:00"),end_time:new Date("4/14/2025 2:30:00"),learn_number:15,lesson_name:"Luyện đề TSA25O - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
        {code:"luyendehoahocpen",subject:"[LĐ THPTQG] Hóa học",start_time:new Date("4/13/2025 21:15:00"),end_time:new Date("4/14/2025 2:30:00"),learn_number:11,lesson_name:"Luyện đề Pen-I số 06 (đề nâng cao)",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendevatlypen",subject:"[LĐ THPTQG] Vật lý",start_time:new Date("4/14/2025 20:45:00"),end_time:new Date("4/15/2025 2:00:00"),learn_number:10,lesson_name:"Phương pháp kĩ năng xử lí câu hỏi thí nghiệm thực hành trong Vật lí",teacher:"Nguyễn Hữu Tình"},
        {code:"luyendedinhtinhkg2hsa",subject:"[LĐ HSA KG2] Định tính",start_time:new Date("4/14/2025 20:45:00"),end_time:new Date("4/15/2025 2:00:00"),learn_number:8,lesson_name:"Luyện đề HSA25H - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
        {code:"luyendetienganhkg2hsa",subject:"[LĐ HSA KG2] Tiếng Anh",start_time:new Date("4/14/2025 20:45:00"),end_time:new Date("4/15/2025 2:00:00"),learn_number:8,lesson_name:"Luyện đề HSA25H - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendehoahockg2hsa",subject:"[LĐ HSA KG2] Hóa học",start_time:new Date("4/14/2025 21:15:00"),end_time:new Date("4/15/2025 2:30:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Hóa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendetienganhpen",subject:"[LĐ THPTQG] Tiếng Anh",start_time:new Date("4/15/2025 20:15:00"),end_time:new Date("4/16/2025 1:30:00"),learn_number:12,lesson_name:"Tiếng Anh_Luyện đề PEN-I số 07",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendesinhhocpen",subject:"[LĐ THPTQG] Sinh học",start_time:new Date("4/15/2025 20:45:00"),end_time:new Date("4/16/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề Pen-I số 05 (đề tiêu chuẩn)",teacher:"Nguyễn Duy Khánh"},
        {code:"luyendehoahocpen",subject:"[LĐ THPTQG] Hóa học",start_time:new Date("4/15/2025 20:45:00"),end_time:new Date("4/16/2025 2:00:00"),learn_number:11,lesson_name:"Luyện đề Pen-I số 06 (đề nâng cao)",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedinhtinhkg2hsa",subject:"[LĐ HSA KG2] Định tính",start_time:new Date("4/15/2025 20:45:00"),end_time:new Date("4/16/2025 2:00:00"),learn_number:8,lesson_name:"Luyện đề HSA25H - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
        {code:"mentorsayhitsa",subject:"[Mentorsayhi] TSA",start_time:new Date("4/15/2025 21:15:00"),end_time:new Date("4/16/2025 2:30:00"),learn_number:67,lesson_name:"TSA_Hướng dẫn đề Thi thử ĐGTD TSA đợt 3",teacher:"Nguyễn Hợp Huy"},
        {code:"luyendekhoahocct2tsa",subject:"[LĐ TSA CT2] Khoa học",start_time:new Date("4/15/2025 21:15:00"),end_time:new Date("4/16/2025 2:30:00"),learn_number:15,lesson_name:"Luyện đề TSA25O - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendekhoahocct3tsa",subject:"[LĐ TSA CT3] Khoa học",start_time:new Date("4/15/2025 21:15:00"),end_time:new Date("4/16/2025 2:30:00"),learn_number:15,lesson_name:"Luyện đề TSA25O - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendenguvanpen",subject:"[LĐ THPTQG] Ngữ văn",start_time:new Date("4/16/2025 20:15:00"),end_time:new Date("4/17/2025 1:30:00"),learn_number:12,lesson_name:"Luyện đề PEN-I số 12",teacher:"Trịnh Thu Tuyết"},
        {code:"luyendetoanpen",subject:"[LĐ THPTQG] Toán",start_time:new Date("4/16/2025 20:45:00"),end_time:new Date("4/17/2025 2:00:00"),learn_number:11,lesson_name:"Toán_Luyện đề PEN-I số 6",teacher:"Nguyễn Thanh Tùng"},
        {code:"luyendesinhhocpen",subject:"[LĐ THPTQG] Sinh học",start_time:new Date("4/16/2025 20:45:00"),end_time:new Date("4/17/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề Pen-I số 05 (đề tiêu chuẩn)",teacher:"Nguyễn Duy Khánh"},
        {code:"luyendehoahockg2hsa",subject:"[LĐ HSA KG2] Hóa học",start_time:new Date("4/16/2025 20:45:00"),end_time:new Date("4/17/2025 2:00:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Hóa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedinhluongkg2hsa",subject:"[LĐ HSA KG2] Định lượng",start_time:new Date("4/16/2025 20:45:00"),end_time:new Date("4/17/2025 2:00:00"),learn_number:8,lesson_name:"Luyện đề HSA25H - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
        {code:"mentorsayhivact",subject:"[Mentorsayhi] V-ACT",start_time:new Date("4/16/2025 21:15:00"),end_time:new Date("4/17/2025 2:30:00"),learn_number:68,lesson_name:"V-ACT_Đề luyện_V-ACT25_Đề 8910_KHTN",teacher:"Vũ Văn Trường"},
        {code:"luyendesinhhockg2hsa",subject:"[LĐ HSA KG2] Sinh học",start_time:new Date("4/16/2025 21:15:00"),end_time:new Date("4/17/2025 2:30:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
        {code:"luyendevatlypen",subject:"[LĐ THPTQG] Vật lý",start_time:new Date("4/17/2025 20:45:00"),end_time:new Date("4/18/2025 2:00:00"),learn_number:10,lesson_name:"Phương pháp kĩ năng xử lí câu hỏi thí nghiệm thực hành trong Vật lí",teacher:"Nguyễn Hữu Tình"},
        {code:"luyendetoanpen",subject:"[LĐ THPTQG] Toán",start_time:new Date("4/17/2025 20:45:00"),end_time:new Date("4/18/2025 2:00:00"),learn_number:11,lesson_name:"Toán_Luyện đề PEN-I số 6",teacher:"Nguyễn Thanh Tùng"},
        {code:"luyendetienganhkg2hsa",subject:"[LĐ HSA KG2] Tiếng Anh",start_time:new Date("4/17/2025 20:45:00"),end_time:new Date("4/18/2025 2:00:00"),learn_number:8,lesson_name:"Luyện đề HSA25H - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"mentorsayhihsa",subject:"[Mentorsayhi] HSA",start_time:new Date("4/17/2025 21:15:00"),end_time:new Date("4/18/2025 2:30:00"),learn_number:69,lesson_name:"HSA_Đề luyện HSA25AB - Phần Khoa học Sinh",teacher:"Nguyễn Trần Gia Duy"},
        {code:"luyendedinhluongkg2hsa",subject:"[LĐ HSA KG2] Định lượng",start_time:new Date("4/17/2025 21:15:00"),end_time:new Date("4/18/2025 2:30:00"),learn_number:9,lesson_name:"Luyện đề HSA25I - Phần Tư duy định lượng",teacher:"Nguyễn Đức Tài"},
        {code:"luyendekhoahocct2tsa",subject:"[LĐ TSA CT2] Khoa học",start_time:new Date("4/18/2025 18:45:00"),end_time:new Date("4/19/2025 0:00:00"),learn_number:15,lesson_name:"Luyện đề TSA25O - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendekhoahocct3tsa",subject:"[LĐ TSA CT3] Khoa học",start_time:new Date("4/18/2025 18:45:00"),end_time:new Date("4/19/2025 0:00:00"),learn_number:15,lesson_name:"Luyện đề TSA25O - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedinhtinhkg2hsa",subject:"[LĐ HSA KG2] Định tính",start_time:new Date("4/18/2025 20:30:00"),end_time:new Date("4/19/2025 1:45:00"),learn_number:9,lesson_name:"Luyện đề HSA25I - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
        {code:"luyendesinhhocpen",subject:"[LĐ THPTQG] Sinh học",start_time:new Date("4/18/2025 20:45:00"),end_time:new Date("4/19/2025 2:00:00"),learn_number:11,lesson_name:"Luyện đề Pen-I số 06 (đề nâng cao)",teacher:"Nguyễn Duy Khánh"},
        {code:"luyendetienganhpen",subject:"[LĐ THPTQG] Tiếng Anh",start_time:new Date("4/18/2025 20:45:00"),end_time:new Date("4/19/2025 2:00:00"),learn_number:12,lesson_name:"Tiếng Anh_Luyện đề PEN-I số 07",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendehoahocpen",subject:"[LĐ THPTQG] Hóa học",start_time:new Date("4/18/2025 20:45:00"),end_time:new Date("4/19/2025 2:00:00"),learn_number:11,lesson_name:"Luyện đề Pen-I số 06 (đề nâng cao)",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendesinhhockg2hsa",subject:"[LĐ HSA KG2] Sinh học",start_time:new Date("4/18/2025 20:45:00"),end_time:new Date("4/19/2025 2:00:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
        {code:"luyendetoanpen",subject:"[LĐ THPTQG] Toán",start_time:new Date("4/19/2025 20:15:00"),end_time:new Date("4/20/2025 1:30:00"),learn_number:12,lesson_name:"Toán_Luyện đề PEN-I số 7",teacher:"Nguyễn Thanh Tùng"},
        {code:"luyendenguvanpen",subject:"[LĐ THPTQG] Ngữ văn",start_time:new Date("4/19/2025 20:45:00"),end_time:new Date("4/20/2025 2:00:00"),learn_number:12,lesson_name:"Luyện đề PEN-I số 12",teacher:"Trịnh Thu Tuyết"},
        {code:"luyendevatlypen",subject:"[LĐ THPTQG] Vật lý",start_time:new Date("4/19/2025 20:45:00"),end_time:new Date("4/20/2025 2:00:00"),learn_number:10,lesson_name:"Phương pháp kĩ năng xử lí câu hỏi thí nghiệm thực hành trong Vật lí",teacher:"Nguyễn Hữu Tình"},
        {code:"luyendetienganhkg2hsa",subject:"[LĐ HSA KG2] Tiếng Anh",start_time:new Date("4/19/2025 20:45:00"),end_time:new Date("4/20/2025 2:00:00"),learn_number:9,lesson_name:"Luyện đề HSA25I - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendehoahockg2hsa",subject:"[LĐ HSA KG2] Hóa học",start_time:new Date("4/19/2025 20:45:00"),end_time:new Date("4/20/2025 2:00:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Hóa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendesinhhockg2hsa",subject:"[LĐ HSA KG2] Sinh học",start_time:new Date("4/19/2025 20:45:00"),end_time:new Date("4/20/2025 2:00:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
        {code:"luyendetienganhpen",subject:"[LĐ THPTQG] Tiếng Anh",start_time:new Date("4/20/2025 20:45:00"),end_time:new Date("4/21/2025 2:00:00"),learn_number:12,lesson_name:"Tiếng Anh_Luyện đề PEN-I số 07",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendedinhluongkg2hsa",subject:"[LĐ HSA KG2] Định lượng",start_time:new Date("4/20/2025 20:45:00"),end_time:new Date("4/21/2025 2:00:00"),learn_number:9,lesson_name:"Luyện đề HSA25I - Phần Tư duy định lượng",teacher:"Nguyễn Đức Tài"},
        {code:"luyendehoahocpen",subject:"[LĐ THPTQG] Hóa học",start_time:new Date("4/20/2025 21:15:00"),end_time:new Date("4/21/2025 2:30:00"),learn_number:12,lesson_name:"Luyện đề Pen-I số 07 (đề nâng cao)",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendelichsukg2hsa",subject:"[LĐ HSA KG2] Lịch sử",start_time:new Date("4/21/2025 20:15:00"),end_time:new Date("4/22/2025 1:30:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
        {code:"luyendevatlypen",subject:"[LĐ THPTQG] Vật lý",start_time:new Date("4/21/2025 20:45:00"),end_time:new Date("4/22/2025 2:00:00"),learn_number:11,lesson_name:"Luyện đề Pen I số 06",teacher:"Nguyễn Hữu Tình"},
        {code:"luyendenguvanpen",subject:"[LĐ THPTQG] Ngữ văn",start_time:new Date("4/21/2025 20:45:00"),end_time:new Date("4/22/2025 2:00:00"),learn_number:12,lesson_name:"Luyện đề PEN-I số 12",teacher:"Trịnh Thu Tuyết"},
        {code:"luyendedinhtinhkg2hsa",subject:"[LĐ HSA KG2] Định tính",start_time:new Date("4/21/2025 20:45:00"),end_time:new Date("4/22/2025 2:00:00"),learn_number:9,lesson_name:"Luyện đề HSA25I - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
        {code:"luyendetienganhkg2hsa",subject:"[LĐ HSA KG2] Tiếng Anh",start_time:new Date("4/21/2025 20:45:00"),end_time:new Date("4/22/2025 2:00:00"),learn_number:9,lesson_name:"Luyện đề HSA25I - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendetienganhpen",subject:"[LĐ THPTQG] Tiếng Anh",start_time:new Date("4/22/2025 20:15:00"),end_time:new Date("4/23/2025 1:30:00"),learn_number:13,lesson_name:"Tiếng Anh_Luyện đề PEN-I số 08",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendesinhhocpen",subject:"[LĐ THPTQG] Sinh học",start_time:new Date("4/22/2025 20:45:00"),end_time:new Date("4/23/2025 2:00:00"),learn_number:11,lesson_name:"Luyện đề Pen-I số 06 (đề nâng cao)",teacher:"Nguyễn Duy Khánh"},
        {code:"luyendehoahocpen",subject:"[LĐ THPTQG] Hóa học",start_time:new Date("4/22/2025 20:45:00"),end_time:new Date("4/23/2025 2:00:00"),learn_number:12,lesson_name:"Luyện đề Pen-I số 07 (đề nâng cao)",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendelichsukg2hsa",subject:"[LĐ HSA KG2] Lịch sử",start_time:new Date("4/22/2025 20:45:00"),end_time:new Date("4/23/2025 2:00:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
        {code:"luyendedinhtinhkg2hsa",subject:"[LĐ HSA KG2] Định tính",start_time:new Date("4/22/2025 20:45:00"),end_time:new Date("4/23/2025 2:00:00"),learn_number:9,lesson_name:"Luyện đề HSA25I - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
        {code:"mentorsayhipen",subject:"[Mentorsayhi] PEN",start_time:new Date("4/22/2025 21:15:00"),end_time:new Date("4/23/2025 2:30:00"),learn_number:71,lesson_name:"Pen-I_Toán_Đề luyện PEN-I số 04",teacher:"Nguyễn Hợp Huy"},
        {code:"luyendedialikg2hsa",subject:"[LĐ HSA KG2] Địa lí",start_time:new Date("4/23/2025 20:15:00"),end_time:new Date("4/24/2025 1:30:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
        {code:"luyendetoanpen",subject:"[LĐ THPTQG] Toán",start_time:new Date("4/23/2025 20:45:00"),end_time:new Date("4/24/2025 2:00:00"),learn_number:12,lesson_name:"Toán_Luyện đề PEN-I số 7",teacher:"Nguyễn Thanh Tùng"},
        {code:"luyendesinhhocpen",subject:"[LĐ THPTQG] Sinh học",start_time:new Date("4/23/2025 20:45:00"),end_time:new Date("4/24/2025 2:00:00"),learn_number:11,lesson_name:"Luyện đề Pen-I số 06 (đề nâng cao)",teacher:"Nguyễn Duy Khánh"},
        {code:"luyendedinhluongkg2hsa",subject:"[LĐ HSA KG2] Định lượng",start_time:new Date("4/23/2025 20:45:00"),end_time:new Date("4/24/2025 2:00:00"),learn_number:9,lesson_name:"Luyện đề HSA25I - Phần Tư duy định lượng",teacher:"Nguyễn Đức Tài"},
        {code:"mentorsayhivact",subject:"[Mentorsayhi] V-ACT",start_time:new Date("4/23/2025 21:15:00"),end_time:new Date("4/24/2025 2:30:00"),learn_number:72,lesson_name:"V-ACT_Đề luyện_V-ACT25_Đề 8910_KHXH",teacher:"Vũ Văn Trường"},
        {code:"luyendevatlypen",subject:"[LĐ THPTQG] Vật lý",start_time:new Date("4/24/2025 20:45:00"),end_time:new Date("4/25/2025 2:00:00"),learn_number:11,lesson_name:"Luyện đề Pen I số 06",teacher:"Nguyễn Hữu Tình"},
        {code:"luyendetoanpen",subject:"[LĐ THPTQG] Toán",start_time:new Date("4/24/2025 20:45:00"),end_time:new Date("4/25/2025 2:00:00"),learn_number:12,lesson_name:"Toán_Luyện đề PEN-I số 7",teacher:"Nguyễn Thanh Tùng"},
        {code:"luyendedialikg2hsa",subject:"[LĐ HSA KG2] Địa lí",start_time:new Date("4/24/2025 20:45:00"),end_time:new Date("4/25/2025 2:00:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
        {code:"luyendetienganhkg2hsa",subject:"[LĐ HSA KG2] Tiếng Anh",start_time:new Date("4/24/2025 20:45:00"),end_time:new Date("4/25/2025 2:00:00"),learn_number:9,lesson_name:"Luyện đề HSA25I - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendelichsukg2hsa",subject:"[LĐ HSA KG2] Lịch sử",start_time:new Date("4/24/2025 20:45:00"),end_time:new Date("4/25/2025 2:00:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
        {code:"mentorsayhihsa",subject:"[Mentorsayhi] HSA",start_time:new Date("4/24/2025 21:15:00"),end_time:new Date("4/25/2025 2:30:00"),learn_number:73,lesson_name:"HSA_Đề luyện HSA25A - Phần Tiếng Anh",teacher:"Nguyễn Trần Gia Duy"},
        {code:"luyendedinhluongkg2hsa",subject:"[LĐ HSA KG2] Định lượng",start_time:new Date("4/24/2025 21:15:00"),end_time:new Date("4/25/2025 2:30:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
        {code:"luyendedinhtinhkg2hsa",subject:"[LĐ HSA KG2] Định tính",start_time:new Date("4/25/2025 20:30:00"),end_time:new Date("4/26/2025 1:45:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
        {code:"luyendesinhhocpen",subject:"[LĐ THPTQG] Sinh học",start_time:new Date("4/25/2025 20:45:00"),end_time:new Date("4/26/2025 2:00:00"),learn_number:12,lesson_name:"Luyện đề Pen-I số 07 (đề nâng cao)",teacher:"Nguyễn Duy Khánh"},
        {code:"luyendetienganhpen",subject:"[LĐ THPTQG] Tiếng Anh",start_time:new Date("4/25/2025 20:45:00"),end_time:new Date("4/26/2025 2:00:00"),learn_number:13,lesson_name:"Tiếng Anh_Luyện đề PEN-I số 08",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendehoahocpen",subject:"[LĐ THPTQG] Hóa học",start_time:new Date("4/25/2025 20:45:00"),end_time:new Date("4/26/2025 2:00:00"),learn_number:12,lesson_name:"Luyện đề Pen-I số 07 (đề nâng cao)",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendetoanpen",subject:"[LĐ THPTQG] Toán",start_time:new Date("4/26/2025 20:15:00"),end_time:new Date("4/27/2025 1:30:00"),learn_number:13,lesson_name:"Toán_Luyện đề PEN-I số 8",teacher:"Nguyễn Thanh Tùng"},
        {code:"luyendevatlypen",subject:"[LĐ THPTQG] Vật lý",start_time:new Date("4/26/2025 20:45:00"),end_time:new Date("4/27/2025 2:00:00"),learn_number:11,lesson_name:"Luyện đề Pen I số 06",teacher:"Nguyễn Hữu Tình"},
        {code:"luyendetienganhkg2hsa",subject:"[LĐ HSA KG2] Tiếng Anh",start_time:new Date("4/26/2025 20:45:00"),end_time:new Date("4/27/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendetienganhpen",subject:"[LĐ THPTQG] Tiếng Anh",start_time:new Date("4/27/2025 20:45:00"),end_time:new Date("4/28/2025 2:00:00"),learn_number:13,lesson_name:"Tiếng Anh_Luyện đề PEN-I số 08",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendedinhluongkg2hsa",subject:"[LĐ HSA KG2] Định lượng",start_time:new Date("4/27/2025 20:45:00"),end_time:new Date("4/28/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
        {code:"luyendedialikg2hsa",subject:"[LĐ HSA KG2] Địa lí",start_time:new Date("4/27/2025 20:45:00"),end_time:new Date("4/28/2025 2:00:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
        {code:"luyendehoahocpen",subject:"[LĐ THPTQG] Hóa học",start_time:new Date("4/27/2025 21:15:00"),end_time:new Date("4/28/2025 2:30:00"),learn_number:13,lesson_name:"Luyện đề Pen-I số 08 (đề nâng cao)",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendevatlykg2hsa",subject:"[LĐ HSA KG2] Vật lý",start_time:new Date("4/27/2025 21:15:00"),end_time:new Date("4/28/2025 2:30:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Vật lí",teacher:"Nguyễn Thành Đạt"},
        {code:"luyendevatlypen",subject:"[LĐ THPTQG] Vật lý",start_time:new Date("4/28/2025 20:45:00"),end_time:new Date("4/29/2025 2:00:00"),learn_number:12,lesson_name:"Luyện đề Pen I số 07",teacher:"Nguyễn Hữu Tình"},
        {code:"luyendedinhtinhkg2hsa",subject:"[LĐ HSA KG2] Định tính",start_time:new Date("4/28/2025 20:45:00"),end_time:new Date("4/29/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
        {code:"luyendetienganhkg2hsa",subject:"[LĐ HSA KG2] Tiếng Anh",start_time:new Date("4/28/2025 20:45:00"),end_time:new Date("4/29/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendehoahockg2hsa",subject:"[LĐ HSA KG2] Hóa học",start_time:new Date("4/28/2025 21:15:00"),end_time:new Date("4/29/2025 2:30:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Hóa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendetienganhpen",subject:"[LĐ THPTQG] Tiếng Anh",start_time:new Date("4/29/2025 20:15:00"),end_time:new Date("4/30/2025 1:30:00"),learn_number:14,lesson_name:"Tiếng Anh_Luyện đề PEN-I số 09",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendesinhhocpen",subject:"[LĐ THPTQG] Sinh học",start_time:new Date("4/29/2025 20:45:00"),end_time:new Date("4/30/2025 2:00:00"),learn_number:12,lesson_name:"Luyện đề Pen-I số 07 (đề nâng cao)",teacher:"Nguyễn Duy Khánh"},
        {code:"luyendehoahocpen",subject:"[LĐ THPTQG] Hóa học",start_time:new Date("4/29/2025 20:45:00"),end_time:new Date("4/30/2025 2:00:00"),learn_number:13,lesson_name:"Luyện đề Pen-I số 08 (đề nâng cao)",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedinhtinhkg2hsa",subject:"[LĐ HSA KG2] Định tính",start_time:new Date("4/29/2025 20:45:00"),end_time:new Date("4/30/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
        {code:"luyendetoanpen",subject:"[LĐ THPTQG] Toán",start_time:new Date("4/30/2025 20:45:00"),end_time:new Date("5/1/2025 2:00:00"),learn_number:13,lesson_name:"Toán_Luyện đề PEN-I số 8",teacher:"Nguyễn Thanh Tùng"},
        {code:"luyendesinhhocpen",subject:"[LĐ THPTQG] Sinh học",start_time:new Date("4/30/2025 20:45:00"),end_time:new Date("5/1/2025 2:00:00"),learn_number:12,lesson_name:"Luyện đề Pen-I số 07 (đề nâng cao)",teacher:"Nguyễn Duy Khánh"},
        {code:"luyendevatlykg2hsa",subject:"[LĐ HSA KG2] Vật lý",start_time:new Date("4/30/2025 20:45:00"),end_time:new Date("5/1/2025 2:00:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Vật lí",teacher:"Nguyễn Thành Đạt"},
        {code:"luyendehoahockg2hsa",subject:"[LĐ HSA KG2] Hóa học",start_time:new Date("4/30/2025 20:45:00"),end_time:new Date("5/1/2025 2:00:00"),learn_number:5,lesson_name:"Luyện đề HSA25IJ - Phần Khoa học Hóa học",teacher:"Vũ Khắc Ngọc"},
        {code:"luyendedinhluongkg2hsa",subject:"[LĐ HSA KG2] Định lượng",start_time:new Date("4/30/2025 20:45:00"),end_time:new Date("5/1/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
        {code:"luyendevatlypen",subject:"[LĐ THPTQG] Vật lý",start_time:new Date("5/1/2025 20:45:00"),end_time:new Date("5/2/2025 2:00:00"),learn_number:12,lesson_name:"Luyện đề Pen I số 07",teacher:"Nguyễn Hữu Tình"},
        {code:"luyendetoanpen",subject:"[LĐ THPTQG] Toán",start_time:new Date("5/1/2025 20:45:00"),end_time:new Date("5/2/2025 2:00:00"),learn_number:13,lesson_name:"Toán_Luyện đề PEN-I số 8",teacher:"Nguyễn Thanh Tùng"},
        {code:"luyendetienganhkg2hsa",subject:"[LĐ HSA KG2] Tiếng Anh",start_time:new Date("5/1/2025 20:45:00"),end_time:new Date("5/2/2025 2:00:00"),learn_number:10,lesson_name:"Luyện đề HSA25J - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
        {code:"demo",subject:"[Demo] Demo",start_time:new Date("1/8/2025 11:22:00"),end_time:new Date("1/8/2025 12:27:00"),learn_number:1,lesson_name:"Luyện đề Demo",teacher:"HOCMAI"}
    ];
    
    const boxList = [
        { code: "toan", boxid: "952000", boxtag: "3Ot9Nu", tkey: "715016736bed7c2c", tid: "33" },
        { code: "vatli", boxid: "952000", boxtag: "3Ot9Nu", tkey: "76b5c3918fdfcc8e", tid: "34" },
        { code: "hoahoc", boxid: "952000", boxtag: "3Ot9Nu", tkey: "4a46e690b7bfeea8", tid: "35" },
        { code: "tienganh", boxid: "952000", boxtag: "3Ot9Nu", tkey: "0704f4245822300e", tid: "36" },
        { code: "sinhhoc", boxid: "952000", boxtag: "3Ot9Nu", tkey: "f66f70066c946ce7", tid: "37" },
        { code: "nguvan", boxid: "952000", boxtag: "3Ot9Nu", tkey: "0ce8bcdfb8ff943d", tid: "38" },
        { code: "lichsu", boxid: "952000", boxtag: "3Ot9Nu", tkey: "357f39a45ebe341e", tid: "39" },
        { code: "diali", boxid: "952000", boxtag: "3Ot9Nu", tkey: "117f2e42c22c4396", tid: "40" },
        { code: "dochieukhoahoc", boxid: "952000", boxtag: "3Ot9Nu", tkey: "ad8ad9b389b07034", tid: "41" },
        { code: "2toan", boxid: "952000", boxtag: "3Ot9Nu", tkey: "67b8e06bab9dbd0d", tid: "43" },
        { code: "2vatly", boxid: "952000", boxtag: "3Ot9Nu", tkey: "cd93523027c999fd", tid: "44" },
        { code: "2hoahoc", boxid: "952000", boxtag: "3Ot9Nu", tkey: "02cfa96be94ff112", tid: "45" },
        { code: "2tienganh", boxid: "952000", boxtag: "3Ot9Nu", tkey: "5f10b229c87890cc", tid: "46" },
        { code: "2sinhhoc", boxid: "952000", boxtag: "3Ot9Nu", tkey: "1bf484429d1a0807", tid: "47" },
        { code: "2nguvan", boxid: "952000", boxtag: "3Ot9Nu", tkey: "776cfdcbc67bb5ba", tid: "48" },
        { code: "2lichsu", boxid: "952000", boxtag: "3Ot9Nu", tkey: "52fc17d41558accd", tid: "49" },
        { code: "2diali", boxid: "952000", boxtag: "3Ot9Nu", tkey: "35a683e00aaf8e28", tid: "50" },
        { code: "2dochieukhoahoc", boxid: "952000", boxtag: "3Ot9Nu", tkey: "01040391e94c0454", tid: "51" },
        { code: "luyendedochieutsa", boxid: "952000", boxtag: "3Ot9Nu", tkey: "ebfdff07059e8eee", tid: "52" },
        { code: "luyendekhoahoctsa", boxid: "952000", boxtag: "3Ot9Nu", tkey: "3aaeabec8dd6fd1e", tid: "53" },
        { code: "luyendetoantsa", boxid: "952000", boxtag: "3Ot9Nu", tkey: "2e7427603c9ccdc1", tid: "54" },
        { code: "luyendetoantsa1", boxid: "952000", boxtag: "3Ot9Nu", tkey: "d278bb49ac6ae9ac", tid: "55"},
        {code:"mentorsayhihsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"8e41bec4f7cad494",tid:"56"},
        {code:"mentorsayhitsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"8e41bec4f7cad494",tid:"56"},
        {code:"mentorsayhivact",boxid:"952000",boxtag:"3Ot9Nu",tkey:"8e41bec4f7cad494",tid:"56"},
        {code:"mentorsayhipen",boxid:"952000",boxtag:"3Ot9Nu",tkey:"8e41bec4f7cad494",tid:"56"},
        {code:"luyendelichsuhsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b2c8ea677756b0ae",tid:"57"},
        {code:"luyendehoahochsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"ce0344e994ae584f",tid:"58"},
        {code:"luyendesinhhochsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"61dd1694d16015e9",tid:"59"},
        {code:"luyendedinhluonghsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"ff0e97ef544eb048",tid:"60"},
        {code:"luyendedinhtinhhsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"da7dd95baab0af03",tid:"61"},
        {code:"luyendetienganhhsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"11a069976630c5a8",tid:"62"},
        {code:"luyendevatlyhsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"f839bab6f5ad3480",tid:"63"},
        {code:"luyendedialihsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"e3b92c1c9cb530ae",tid:"64"},
        {code:"luyendetiengvietvact",boxid:"952000",boxtag:"3Ot9Nu",tkey:"2926b230a532bcd4",tid:"66"},
        {code:"luyendetienganhvact",boxid:"952000",boxtag:"3Ot9Nu",tkey:"179d9866911dede2",tid:"67"},
        {code:"luyendetoanvact",boxid:"952000",boxtag:"3Ot9Nu",tkey:"d81a5cb731eeafda",tid:"68"},
        {code:"luyendeslkhvact",boxid:"952000",boxtag:"3Ot9Nu",tkey:"54f1fe80e1f5ee79",tid:"69"},
        {code:"luyendeptslvact",boxid:"952000",boxtag:"3Ot9Nu",tkey:"697e51d140376016",tid:"70"},
        {code:"luyendetoanct1tsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"1a37bb164cc92929",tid:"72"},
        {code:"luyendetoanct2tsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"1a37bb164cc92929",tid:"72"},
        {code:"luyendedochieuct1tsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"e32b666f0a71b182",tid:"74"},
        {code:"luyendekhoahocct1tsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"fe0c8e040145aaab",tid:"75"},
        {code:"luyendedochieuct2tsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"e32b666f0a71b182",tid:"74"},
        {code:"luyendekhoahocct2tsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"fe0c8e040145aaab",tid:"75"},
        {code:"luyendelichsuct1hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b44a17d834d4eb26",tid:"78"},
        {code:"luyendedinhtinhct1hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"de7ba707b755af74",tid:"79"},
        {code:"luyendedinhluongct1hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"648e252bd511a0e2",tid:"80"},
        {code:"luyendetienganhct1hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"75d2071b79aa16da",tid:"81"},
        {code:"luyendevatlyct1hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"055a55256ee9165d",tid:"82"},
        {code:"luyendehoahocct1hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"60045e5b3178b9cc",tid:"83"},
        {code:"luyendesinhhocct1hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b9c3c3ded29cc325",tid:"84"},
        {code:"luyendedialict1hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"e636c93d254eeae2",tid:"85"},
        {code:"luyendetoanpen",boxid:"952000",boxtag:"3Ot9Nu",tkey:"3c8c7399d8138f38",tid:"86"},
        {code:"luyendenguvanpen",boxid:"952000",boxtag:"3Ot9Nu",tkey:"e0ee3daaa5bca2cc",tid:"87"},
        {code:"luyendetienganhpen",boxid:"952000",boxtag:"3Ot9Nu",tkey:"3097f82bce7f4a28",tid:"88"},
        {code:"luyendevatlypen",boxid:"952000",boxtag:"3Ot9Nu",tkey:"7bd403066bcd0f9d",tid:"89"},
        {code:"luyendehoahocpen",boxid:"952000",boxtag:"3Ot9Nu",tkey:"cab19f767bed88fb",tid:"90"},
        {code:"luyendesinhhocpen",boxid:"952000",boxtag:"3Ot9Nu",tkey:"456c8691e3aaaca1",tid:"91"},
        {code:"luyendelichsukg2hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b0a0ad34db1db39a",tid:"94"},
        {code:"luyendehoahockg2hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"2c6b6cd023e503cf",tid:"95"},
        {code:"luyendesinhhockg2hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"de0af4b98a71b668",tid:"96"},
        {code:"luyendedinhluongkg2hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"156e9966a04d4c38",tid:"97"},
        {code:"luyendedinhtinhkg2hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"e574728e3ba6e71d",tid:"98"},
        {code:"luyendetienganhkg2hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"4e8c9ae17d9dc514",tid:"99"},
        {code:"luyendevatlykg2hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"ac43826098724e65",tid:"100"},
        {code:"luyendedialikg2hsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"c6f8ff61539c4871",tid:"101"},
        {code:"luyendetoanct3tsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"1a37bb164cc92929",tid:"72"},
        {code:"luyendedochieuct3tsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"e32b666f0a71b182",tid:"74"},
        {code:"luyendekhoahocct3tsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"fe0c8e040145aaab",tid:"75"},
        { code: "demo", boxid: "952000", boxtag: "3Ot9Nu", tkey: "5cec50d8a8e9397e", tid: "3" }
    ];
    
    function getBoxByCode(code) {
        // Loop through each object in the list
        for (const box of boxList) {
            // Check if the current object's code matches the provided code
            if (box.code === code) {
                // If a match is found, return the entire box object
                return box;
            }
        }
    
        // If no match is found, return undefined
        return undefined;
    }
    const today = new Date();
    
    function checkCurrentTimeInSchedule(code, learn_number) {
        const now = new Date();
        const result = lichhoc.filter((item) => item.code === code && item.learn_number === learn_number && now >= item.start_time && now <= item.end_time);
    
        if (result.length > 0) {
            //if (now >= result.start_time && now <= result.end_time) {
            //alert("ok");
            //} else {
            //clearInterval(checkSessionInterval);
            //gắn đoạn code logout bắt đăng nhập lại
            //document.cookie = "_ladipage_unique_user_id=";
            //window.location.href = "https://topclass.hocmai.vn/lophoc?subject="+code;
            //}
        } else {
            //alert("Không tìm thấy lịch học.");
            document.cookie = "_ladipage_unique_user_id=";
            window.location.href = "https://topuni.hocmai.vn/lichhoc";
        }
    }
    
    function checkClassAvailability(subjectCode) {
        // Find classes for the specified subject
        const subjectClasses = lichhoc.filter((item) => item.code === subjectCode);
        // Check if any class is happening now
        const ongoingClass = subjectClasses.find((item) => {
            return today >= item.start_time && today < item.end_time;
        });
    
        return ongoingClass ? ongoingClass.learn_number : 0;
    }
    
    function encodeBase64(str) {
        return btoa(unescape(encodeURIComponent(str)));
    }
    
    function decodeBase64(str) {
        return decodeURIComponent(escape(atob(str)));
    }
    
    let checkSessionInterval;
    
    function checkSessionStatus(user, code, learn_number) {
        console.log("check ip");
        // Tạo dữ liệu yêu cầu POST
        const requestData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer 1233tOk3WKdw30w75eilg6It83r",
            },
            // Đặt body dữ liệu yêu cầu là một JSON với các thông tin cần gửi
            body: JSON.stringify({ user }),
            // body: JSON.stringify({ action: 'check_session' })
        };
    
        // Gửi yêu cầu POST đến API
        fetch("https://api-stream.hocmai.net/check_session", requestData)
            .then((response) => response.json())
            .then((result) => {
                if (!result.success) {
                    clearInterval(checkSessionInterval);
                    //gắn đoạn code logout bắt đăng nhập lại
                    document.cookie = "_ladipage_unique_user_id=";
                    window.location.href = "https://topuni.hocmai.vn/lichhoc"+"&return=multi";
    
                    //alert('You have been logged out due to a login from another IP.');
                }
            })
            .catch((error) => console.error("Error:", error));
    
        checkCurrentTimeInSchedule(code, learn_number);
    }
    let global_check = false;
    function check_spam() {
        // URL của API Google Apps Script
        const c_id = atobUTF8(getCookie("_ladipage_unique_user_id"));
        var code = window.location.href.substring(28);
        const apiUrl = `https://script.google.com/macros/s/AKfycbz5Eo9LL7Ha7pP6v9qwn2mnz-se61o-golud4gH3ArhZbW-WJpQeH6FQhcEiPCmOCzANA/exec?action=checkSpam&username=${c_id}&code=${code}`;
    
        // Sử dụng fetch để gọi API
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json(); // Chuyển đổi dữ liệu trả về thành JSON
            })
            .then((data) => {
                global_check = data.status;
                console.log("Response data:", data); // In ra dữ liệu trả về
                if (global_check) {
                    location.reload();
                }
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }
    function checkStatus() {
        if (!global_check) {
            check_spam(); // Call function a() if status is false
        }
    }
    
    setInterval(checkStatus, 3600000); // Check every 10 minutes (600000 ms)
    function getBoxChat(name, code) {
        //boxchat start here
        const secret = "iYKMfS0z9kkYdD-Z";
        var box = getBoxByCode(code);
        // Corrected: Use curly braces {} for object literals
        const params = {
            boxid: box.boxid,
            boxtag: box.boxtag,
            tkey: box.tkey,
            tid: box.tid,
            nme: name, // Replace with actual user name variable
            lnk: "", // Replace with profile URL (optional)
            pic: "", // Replace with avatar URL (optional)
        };
    
        const arr = [];
    
        // Corrected: for...of loop to iterate over object properties
        for (const [key, value] of Object.entries(params)) {
            if (value) {
                arr.push(`${key}=${encodeURIComponent(value)}`);
            }
        }
    
        const path = "/box/?" + arr.join("&");
    
        // Cryptographic Hashing (Requires CryptoJS)
        const hash = CryptoJS.HmacSHA256(path, secret);
        const sig = encodeURIComponent(CryptoJS.enc.Base64.stringify(hash));
    
        const url = "https://www5.cbox.ws" + path + "&sig=" + sig;
    
        // Create the iframe
        const iframe = document.createElement("iframe");
        iframe.width = "100%";
        iframe.height = "445";
        iframe.src = url;
        iframe.marginHeight = "0";
        iframe.marginWidth = "0";
        iframe.scrolling = "no";
        iframe.allowTransparency = "yes";
        iframe.frameBorder = "0";
    
        // Append the iframe to your desired container (e.g., <div id="cboxContainer"></div>)
    
        const c_id = atobUTF8(getCookie("_ladipage_unique_user_id"));
        // URL của API Google Apps Script
        const apiUrl = `https://script.google.com/macros/s/AKfycbz5Eo9LL7Ha7pP6v9qwn2mnz-se61o-golud4gH3ArhZbW-WJpQeH6FQhcEiPCmOCzANA/exec?action=checkSpam&username=${c_id}&code=${code}`;
    
        // Sử dụng fetch để gọi API
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json(); // Chuyển đổi dữ liệu trả về thành JSON
            })
            .then((data) => {
                global_check = data.status;
                console.log("Response data:", data); // In ra dữ liệu trả về
                // load box chat
                if (global_check) {
                    alert("Bạn đã bị cấm chat");
                } else {
                    let intervalId = setInterval(function () {
                        let element = document.getElementById("boxchat");
                        if (element) {
                            document.getElementById("boxchat").appendChild(iframe);
                            clearInterval(intervalId); // Dừng vòng lặp
                        }
                    }, 500); // 1000 milliseconds = 1 second
                }
                // end load box chat
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }
    async function loading() {
        status = 1;
        var c_user = getCookie("_ladipage_unique_user_id");
        var code = window.location.href.substring(28);
    
        const learn_number = checkClassAvailability(code);
        if (learn_number == 0) {
            window.location.href = "https://topuni.hocmai.vn/lichhoc";
        }
    
        if (c_user != "") {
            //check lượt học
            await check(c_user, code, learn_number);
        } else {
            window.location.href = "https://topuni.hocmai.vn/lichhoc";
        }
    
        //const secret = "648214918886d99c";
        const name = atobUTF8(getCookie("_ladipage_unique_user_name"));
    
        if (name == null || name == "") {
            await check(c_user, code, learn_number);
        }
    
        getBoxChat(name, code);
    }
    
    async function insertSignalDivIfNeeded() {
        // Kiểm tra xem div có id "signal" đã tồn tại chưa
        const existingSignalDiv = document.getElementById("signal");
    
        // Nếu đã tồn tại, không làm gì cả
        if (existingSignalDiv) {
            console.log("Div có id 'signal' đã tồn tại.");
            return;
        }
    
        // Tìm thẻ div có id là "my-video_html5_api"
        const targetDiv = document.getElementById("my-video_html5_api");
    
        // Nếu thẻ div không tồn tại, thoát khỏi hàm
        if (!targetDiv) {
            console.warn("Không tìm thấy thẻ div có id 'my-video_html5_api'.");
            return;
        }
    
        // Tạo phần tử div mới với id là "signal"
        const signalDiv = document.createElement("div");
        signalDiv.id = "signal";
    
        // Chèn phần tử div mới vào trước thẻ div mục tiêu
        targetDiv.parentNode.insertBefore(signalDiv, targetDiv);
        const response = await fetch("https://api.ipify.org?format=json");
        const dataip = await response.json();
        const signal = document.getElementById("signal");
    
        document.getElementById("signal").innerHTML = encodeBase64(dataip.ip);
    }
    
    function moveSignal() {
        const video = document.getElementById("my-video");
        insertSignalDivIfNeeded();
        const signal = document.getElementById("signal");
    
        const videoWidth = video.clientWidth;
        const videoHeight = video.clientHeight;
        const signalWidth = signal.clientWidth;
        const signalHeight = signal.clientHeight;
    
        const maxLeft = videoWidth - signalWidth;
        const maxTop = videoHeight - signalHeight;
    
        const randomLeft = Math.random() * maxLeft;
        const randomTop = Math.random() * maxTop;
    
        signal.style.left = randomLeft + "px";
        signal.style.top = randomTop + "px";
    }
    
    window.onload = async function () {
        loading();
        status = 2;
        try {
            //moveSignal();
            //setInterval(moveSignal, 3000);
        } catch (error) {}
    };
    //setInterval(loading, 500000);
    
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    
    async function check(c_user, code, learn_number) {
        //user, code, learn_number
        var user = atobUTF8(c_user);
    
        if (code.length > 0 && user.length > 0) {
            try {
                data = {
                    user,
                    code,
                    learn_number,
                    status,
                };
    
                const response = await fetch("https://api-stream.hocmai.net/check_user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer 1233tOk3WKdw30w75eilg6It83r",
                    },
                    body: JSON.stringify(data),
                });
    
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
    
                const result = await response.json();
    
                if (result.success) {
                    //alert(JSON.stringify(result));
                    checkSessionInterval = setInterval(() => {
                        checkSessionStatus(user, code, learn_number);
                    }, 50000);
    
                    /*
                        const log = await fetch('https://api-stream.hocmai.net/log_learning', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer 1233tOk3WKdw30w75eilg6It83r'
                            },
                            body: JSON.stringify(data)
                        });
                        */
                    const log = await fetch("https://api-stream.hocmai.net/log_learning", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer 1233tOk3WKdw30w75eilg6It83r",
                        },
                        body: JSON.stringify(data),
                    });
    
                    setInterval(async () => {
                        data.status = status;
                        const log = await fetch("https://api-stream.hocmai.net/log_learning", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer 1233tOk3WKdw30w75eilg6It83r",
                            },
                            body: JSON.stringify(data),
                        });
                    }, 300000);
    
                    document.cookie = "_ladipage_unique_user_id=" + btoaUTF8(result.user.user);
                    document.cookie = "_ladipage_unique_user_name=" + btoaUTF8(result.user.name);
                    //alert("ok học bình thường");
                } else {
                    //clear cookie and redirect
                    document.cookie = "_ladipage_unique_user_id=";
                    window.location.href = "https://topuni.hocmai.vn/lichhoc";
                }
            } catch (error) {
                console.error("Fetch error: ", error);
                console.log(error.message);
                alert("Hệ thống đang quá tải, vui lòng thử lại sau");
            }
        }
    }
