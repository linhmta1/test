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
{code:"luyendementortsakg12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("2026-01-22 19:15:00"),end_time:new Date("2026-01-23 01:00:00"),learn_number:12,lesson_name:"Chữa đề thi thử TSA tháng 1.2026",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendementortsatc12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("2026-01-22 19:15:00"),end_time:new Date("2026-01-23 01:00:00"),learn_number:12,lesson_name:"Chữa đề thi thử TSA tháng 1.2026",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendementortsakg22026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("2026-01-22 19:15:00"),end_time:new Date("2026-01-23 01:00:00"),learn_number:1,lesson_name:"Chữa đề thi thử TSA tháng 1.2026",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendementortsatc22026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("2026-01-22 19:15:00"),end_time:new Date("2026-01-23 01:00:00"),learn_number:1,lesson_name:"Chữa đề thi thử TSA tháng 1.2026",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendedinhluonghsakg12026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-01-22 19:15:00"),end_time:new Date("2026-01-23 01:00:00"),learn_number:7,lesson_name:"Luyện đề HSA26G - Phần Tư duy Định lượng",teacher:"Nguyễn Đức Tài"},
{code:"luyendelichsuhsakg22026",subject:"[Luyện đề HSA] Lịch sử",start_time:new Date("2026-01-22 19:15:00"),end_time:new Date("2026-01-23 01:00:00"),learn_number:1,lesson_name:"Luyện đề HSA26KL - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
{code:"luyendevatlihsakg12026",subject:"[Luyện đề HSA] Vật lí",start_time:new Date("2026-01-22 21:15:00"),end_time:new Date("2026-01-23 03:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26EF - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendevatlihsatc12026",subject:"[Luyện đề HSA] Vật lí",start_time:new Date("2026-01-22 21:15:00"),end_time:new Date("2026-01-23 03:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26EF - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendesinhhochsakg22026",subject:"[Luyện đề HSA] Sinh học",start_time:new Date("2026-01-22 21:15:00"),end_time:new Date("2026-01-23 03:00:00"),learn_number:1,lesson_name:"Luyện đề HSA26KL - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
{code:"luyendesinhhochsatc22026",subject:"[Luyện đề HSA] Sinh học",start_time:new Date("2026-01-22 21:15:00"),end_time:new Date("2026-01-23 03:00:00"),learn_number:1,lesson_name:"Luyện đề HSA26KL - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
{code:"luyendekhoahocptslvactkg12026",subject:"[Luyện đề V-ACT] LG&PTSL5",start_time:new Date("2026-01-22 21:15:00"),end_time:new Date("2026-01-23 03:00:00"),learn_number:24,lesson_name:"LG&PTSL_V-ACT26_Luyện đề 56",teacher:"Nguyễn Hoài Nam"},
{code:"luyendekhoahocptslvacttc12026",subject:"[Luyện đề V-ACT] LG&PTSL5",start_time:new Date("2026-01-22 21:15:00"),end_time:new Date("2026-01-23 03:00:00"),learn_number:24,lesson_name:"LG&PTSL_V-ACT26_Luyện đề 56",teacher:"Nguyễn Hoài Nam"},
{code:"luyendetoantsakg22026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-23 19:15:00"),end_time:new Date("2026-01-24 01:00:00"),learn_number:2,lesson_name:"P1_Phương pháp, kĩ năng xử lí phần thi Tư duy toán học - Đề thi thử 123 (Cẩm nang)",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendekhoahoctsakg22026",subject:"[Luyện đề TSA] KH",start_time:new Date("2026-01-23 19:15:00"),end_time:new Date("2026-01-24 01:00:00"),learn_number:1,lesson_name:"P1_PP/KN xử lí phần thi Tư duy khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetoantsatc22026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-23 19:15:00"),end_time:new Date("2026-01-24 01:00:00"),learn_number:2,lesson_name:"P1_Phương pháp, kĩ năng xử lí phần thi Tư duy toán học - Đề thi thử 123 (Cẩm nang)",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetienganhhsakg12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-23 19:15:00"),end_time:new Date("2026-01-24 01:00:00"),learn_number:7,lesson_name:"Luyện đề HSA26G - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendedinhtinhhsakg12026",subject:"[Luyện đề HSA] Ngữ văn4",start_time:new Date("2026-01-23 19:15:00"),end_time:new Date("2026-01-24 01:00:00"),learn_number:7,lesson_name:"Luyện đề HSA26G - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendetienganhhsatc12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-23 19:15:00"),end_time:new Date("2026-01-24 01:00:00"),learn_number:7,lesson_name:"Luyện đề HSA26G - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendehoahochsakg22026",subject:"[Luyện đề HSA] Hóa học",start_time:new Date("2026-01-23 19:15:00"),end_time:new Date("2026-01-24 01:00:00"),learn_number:1,lesson_name:"Luyện đề HSA26KL - Phần Khoa học Hóa học",teacher:"Vũ Tuấn Minh"},
{code:"luyendedialihsakg22026",subject:"[Luyện đề HSA] Địa lí",start_time:new Date("2026-01-23 19:15:00"),end_time:new Date("2026-01-24 01:00:00"),learn_number:1,lesson_name:"Luyện đề HSA26KL - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
{code:"luyendehoahochsatc22026",subject:"[Luyện đề HSA] Hóa học",start_time:new Date("2026-01-23 19:15:00"),end_time:new Date("2026-01-24 01:00:00"),learn_number:1,lesson_name:"Luyện đề HSA26KL - Phần Khoa học Hóa học",teacher:"Vũ Tuấn Minh"},
{code:"luyendekhoahocptslvactkg12026",subject:"[Luyện đề V-ACT] LG&PTSL5",start_time:new Date("2026-01-23 19:15:00"),end_time:new Date("2026-01-24 01:00:00"),learn_number:24,lesson_name:"LG&PTSL_V-ACT26_Luyện đề 56",teacher:"Nguyễn Hoài Nam"},
{code:"luyendetienganhvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-01-23 19:15:00"),end_time:new Date("2026-01-24 01:00:00"),learn_number:22,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 07",teacher:"Nguyễn Thanh Hương"},
{code:"luyendekhoahoctsakg22026",subject:"[Luyện đề TSA] KH",start_time:new Date("2026-01-24 19:15:00"),end_time:new Date("2026-01-25 01:00:00"),learn_number:1,lesson_name:"P1_PP/KN xử lí phần thi Tư duy khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetiengvietvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Việt",start_time:new Date("2026-01-24 19:15:00"),end_time:new Date("2026-01-25 01:00:00"),learn_number:23,lesson_name:"Tiếng Việt_V-ACT26_Luyện đề 05",teacher:"Văn Trịnh Quỳnh An"},
{code:"luyendedinhtinhhsakg12026",subject:"[Luyện đề HSA] Ngữ văn4",start_time:new Date("2026-01-24 20:45:00"),end_time:new Date("2026-01-25 02:30:00"),learn_number:7,lesson_name:"Luyện đề HSA26G - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendedialihsakg22026",subject:"[Luyện đề HSA] Địa lí",start_time:new Date("2026-01-24 20:45:00"),end_time:new Date("2026-01-25 02:30:00"),learn_number:1,lesson_name:"Luyện đề HSA26KL - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
{code:"luyendekhoahocslkhvactkg12026",subject:"[Luyện đề V-ACT] SLKH",start_time:new Date("2026-01-24 21:15:00"),end_time:new Date("2026-01-25 03:00:00"),learn_number:25,lesson_name:"SLKH_V-ACT26_Luyện đề 567_KHTN",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahocslkhvacttc12026",subject:"[Luyện đề V-ACT] SLKH",start_time:new Date("2026-01-24 21:15:00"),end_time:new Date("2026-01-25 03:00:00"),learn_number:25,lesson_name:"SLKH_V-ACT26_Luyện đề 567_KHTN",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-25 17:45:00"),end_time:new Date("2026-01-25 23:30:00"),learn_number:31,lesson_name:"Cập nhật tình hình thi TSA đợt 1",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetoantsatc12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-25 17:45:00"),end_time:new Date("2026-01-25 23:30:00"),learn_number:31,lesson_name:"Cập nhật tình hình thi TSA đợt 1",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetoantsakg22026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-25 19:15:00"),end_time:new Date("2026-01-26 01:00:00"),learn_number:31,lesson_name:"Cập nhật tình hình thi TSA đợt 1",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetoantsatc22026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-25 19:15:00"),end_time:new Date("2026-01-26 01:00:00"),learn_number:31,lesson_name:"Cập nhật tình hình thi TSA đợt 1",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendevatlihsakg12026",subject:"[Luyện đề HSA] Vật lí",start_time:new Date("2026-01-25 19:15:00"),end_time:new Date("2026-01-26 01:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26EF - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendedinhluonghsakg12026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-01-25 19:15:00"),end_time:new Date("2026-01-26 01:00:00"),learn_number:7,lesson_name:"Luyện đề HSA26G - Phần Tư duy Định lượng",teacher:"Nguyễn Đức Tài"},
{code:"luyendesinhhochsakg22026",subject:"[Luyện đề HSA] Sinh học",start_time:new Date("2026-01-25 19:15:00"),end_time:new Date("2026-01-26 01:00:00"),learn_number:1,lesson_name:"Luyện đề HSA26KL - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
{code:"luyendelichsuhsakg22026",subject:"[Luyện đề HSA] Lịch sử",start_time:new Date("2026-01-25 19:15:00"),end_time:new Date("2026-01-26 01:00:00"),learn_number:1,lesson_name:"Luyện đề HSA26KL - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
{code:"luyendekhoahocptslvactkg12026",subject:"[Luyện đề V-ACT] LG&PTSL5",start_time:new Date("2026-01-25 19:15:00"),end_time:new Date("2026-01-26 01:00:00"),learn_number:24,lesson_name:"LG&PTSL_V-ACT26_Luyện đề 56",teacher:"Nguyễn Hoài Nam"},
{code:"luyendedochieutsakg22026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("2026-01-25 21:15:00"),end_time:new Date("2026-01-26 03:00:00"),learn_number:3,lesson_name:"Giới thiệu một số dạng văn bản trong đề thi",teacher:"Vũ Khắc Ngọc"},
{code:"luyendedochieutsatc22026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("2026-01-25 21:15:00"),end_time:new Date("2026-01-26 03:00:00"),learn_number:3,lesson_name:"Giới thiệu một số dạng văn bản trong đề thi",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetienganhhsakg12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-26 19:15:00"),end_time:new Date("2026-01-27 01:00:00"),learn_number:7,lesson_name:"Luyện đề HSA26G - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendevatlihsakg12026",subject:"[Luyện đề HSA] Vật lí",start_time:new Date("2026-01-26 19:15:00"),end_time:new Date("2026-01-27 01:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26EF - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendehoahochsakg22026",subject:"[Luyện đề HSA] Hóa học",start_time:new Date("2026-01-26 19:15:00"),end_time:new Date("2026-01-27 01:00:00"),learn_number:1,lesson_name:"Luyện đề HSA26KL - Phần Khoa học Hóa học",teacher:"Vũ Tuấn Minh"},
{code:"luyendesinhhochsakg22026",subject:"[Luyện đề HSA] Sinh học",start_time:new Date("2026-01-26 19:15:00"),end_time:new Date("2026-01-27 01:00:00"),learn_number:1,lesson_name:"Luyện đề HSA26KL - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
{code:"luyendetienganhvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-01-26 19:15:00"),end_time:new Date("2026-01-27 01:00:00"),learn_number:26,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 08",teacher:"Nguyễn Thanh Hương"},
{code:"luyendekhoahocslkhvactkg12026",subject:"[Luyện đề V-ACT] SLKH",start_time:new Date("2026-01-26 19:15:00"),end_time:new Date("2026-01-27 01:00:00"),learn_number:25,lesson_name:"SLKH_V-ACT26_Luyện đề 567_KHTN",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetienganhvacttc12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-01-26 19:15:00"),end_time:new Date("2026-01-27 01:00:00"),learn_number:26,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 08",teacher:"Nguyễn Thanh Hương"},
{code:"luyendetoantsakg22026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-26 20:45:00"),end_time:new Date("2026-01-27 02:30:00"),learn_number:2,lesson_name:"P1_Phương pháp, kĩ năng xử lí phần thi Tư duy toán học - Đề thi thử 123 (Cẩm nang)",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendedochieutsakg22026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("2026-01-27 19:15:00"),end_time:new Date("2026-01-28 01:00:00"),learn_number:3,lesson_name:"Giới thiệu một số dạng văn bản trong đề thi",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetoantsakg22026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-27 19:15:00"),end_time:new Date("2026-01-28 01:00:00"),learn_number:2,lesson_name:"P1_Phương pháp, kĩ năng xử lí phần thi Tư duy toán học - Đề thi thử 123 (Cẩm nang)",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetiengvietvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Việt",start_time:new Date("2026-01-27 19:15:00"),end_time:new Date("2026-01-28 01:00:00"),learn_number:27,lesson_name:"Tiếng Việt_V-ACT26_Luyện đề 06",teacher:"Văn Trịnh Quỳnh An"},
{code:"luyendetiengvietvacttc12026",subject:"[Luyện đề V-ACT] Tiếng Việt",start_time:new Date("2026-01-27 19:15:00"),end_time:new Date("2026-01-28 01:00:00"),learn_number:27,lesson_name:"Tiếng Việt_V-ACT26_Luyện đề 06",teacher:"Văn Trịnh Quỳnh An"},
{code:"luyendetoantnthptkg12026",subject:"FALSE",start_time:new Date("2026-01-27 19:15:00"),end_time:new Date("2026-01-28 01:00:00"),learn_number:1,lesson_name:"Chiến lược xử lí nhóm câu hỏi biết - hiểu",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetoantnthpttc12026",subject:"FALSE",start_time:new Date("2026-01-27 19:15:00"),end_time:new Date("2026-01-28 01:00:00"),learn_number:1,lesson_name:"Chiến lược xử lí nhóm câu hỏi biết - hiểu",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetienganhhsakg12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-27 20:45:00"),end_time:new Date("2026-01-28 02:30:00"),learn_number:7,lesson_name:"Luyện đề HSA26G - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendehoahochsakg22026",subject:"[Luyện đề HSA] Hóa học",start_time:new Date("2026-01-27 20:45:00"),end_time:new Date("2026-01-28 02:30:00"),learn_number:1,lesson_name:"Luyện đề HSA26KL - Phần Khoa học Hóa học",teacher:"Vũ Tuấn Minh"},
{code:"luyendetienganhvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-01-27 20:45:00"),end_time:new Date("2026-01-28 02:30:00"),learn_number:26,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 08",teacher:"Nguyễn Thanh Hương"},
{code:"luyendedinhluonghsakg12026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-01-27 21:15:00"),end_time:new Date("2026-01-28 03:00:00"),learn_number:8,lesson_name:"Luyện đề HSA26H - Phần Tư duy Định lượng",teacher:"Phạm Thái Sơn"},
{code:"luyendedinhluonghsatc12026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-01-27 21:15:00"),end_time:new Date("2026-01-28 03:00:00"),learn_number:8,lesson_name:"Luyện đề HSA26H - Phần Tư duy Định lượng",teacher:"Phạm Thái Sơn"},
{code:"luyendedinhluonghsakg22026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-01-27 21:15:00"),end_time:new Date("2026-01-28 03:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26L - Phần Tư duy Định lượng",teacher:"Nguyễn Đức Tài"},
{code:"luyendedinhluonghsatc22026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-01-27 21:15:00"),end_time:new Date("2026-01-28 03:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26L - Phần Tư duy Định lượng",teacher:"Nguyễn Đức Tài"},
{code:"livestreamnuocrutvact2026",subject:"[Livestream] Toán",start_time:new Date("2026-01-27 20:15:00"),end_time:new Date("2026-01-28 01:00:00"),learn_number:1,lesson_name:"Bí kíp gia tăng điểm số phần Toán & Logic-Phân tích số liệu - VACT",teacher:"Nguyễn Hoài Nam"},
{code:"luyendedialihsakg22026",subject:"[Luyện đề HSA] Địa lí",start_time:new Date("2026-01-28 19:15:00"),end_time:new Date("2026-01-29 01:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26MN - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
{code:"luyendedialihsatc22026",subject:"[Luyện đề HSA] Địa lí",start_time:new Date("2026-01-28 19:15:00"),end_time:new Date("2026-01-29 01:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26MN - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
{code:"luyendetiengvietvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Việt",start_time:new Date("2026-01-28 19:15:00"),end_time:new Date("2026-01-29 01:00:00"),learn_number:27,lesson_name:"Tiếng Việt_V-ACT26_Luyện đề 06",teacher:"Văn Trịnh Quỳnh An"},
{code:"luyendetoantsakg22026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-28 20:45:00"),end_time:new Date("2026-01-29 02:30:00"),learn_number:31,lesson_name:"Cập nhật tình hình thi TSA đợt 1",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetoantnthptkg12026",subject:"FALSE",start_time:new Date("2026-01-28 20:45:00"),end_time:new Date("2026-01-29 02:30:00"),learn_number:1,lesson_name:"Chiến lược xử lí nhóm câu hỏi biết - hiểu",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendekhoahoctsakg22026",subject:"[Luyện đề TSA] KH",start_time:new Date("2026-01-28 21:15:00"),end_time:new Date("2026-01-29 03:00:00"),learn_number:4,lesson_name:"P2_PP/KN xử lí phần thi Tư duy khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahoctsatc22026",subject:"[Luyện đề TSA] KH",start_time:new Date("2026-01-28 21:15:00"),end_time:new Date("2026-01-29 03:00:00"),learn_number:4,lesson_name:"P2_PP/KN xử lí phần thi Tư duy khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendedinhtinhhsakg12026",subject:"[Luyện đề HSA] Ngữ văn4",start_time:new Date("2026-01-28 21:15:00"),end_time:new Date("2026-01-29 03:00:00"),learn_number:8,lesson_name:"Luyện đề HSA26H - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendedinhtinhhsatc12026",subject:"[Luyện đề HSA] Ngữ văn4",start_time:new Date("2026-01-28 21:15:00"),end_time:new Date("2026-01-29 03:00:00"),learn_number:8,lesson_name:"Luyện đề HSA26H - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendevatlitnthptkg12026",subject:"FALSE",start_time:new Date("2026-01-28 21:15:00"),end_time:new Date("2026-01-29 03:00:00"),learn_number:1,lesson_name:"Chủ đề Vật lí Nhiệt, Khí lí tưởng và Hạt nhân nguyên tử_PP xử lí nhóm câu hỏi Lí thuyết ",teacher:"Nguyễn Hữu Tình"},
{code:"luyendevatlitnthpttc12026",subject:"FALSE",start_time:new Date("2026-01-28 21:15:00"),end_time:new Date("2026-01-29 03:00:00"),learn_number:1,lesson_name:"Chủ đề Vật lí Nhiệt, Khí lí tưởng và Hạt nhân nguyên tử_PP xử lí nhóm câu hỏi Lí thuyết ",teacher:"Nguyễn Hữu Tình"},
{code:"luyendetoantsakg22026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-29 19:15:00"),end_time:new Date("2026-01-30 01:00:00"),learn_number:31,lesson_name:"Cập nhật tình hình thi TSA đợt 1",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendedochieutsakg22026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("2026-01-29 19:15:00"),end_time:new Date("2026-01-30 01:00:00"),learn_number:3,lesson_name:"Giới thiệu một số dạng văn bản trong đề thi",teacher:"Vũ Khắc Ngọc"},
{code:"luyendedinhluonghsakg12026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-01-29 19:15:00"),end_time:new Date("2026-01-30 01:00:00"),learn_number:8,lesson_name:"Luyện đề HSA26H - Phần Tư duy Định lượng",teacher:"Phạm Thái Sơn"},
{code:"luyendedinhluonghsakg22026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-01-29 19:15:00"),end_time:new Date("2026-01-30 01:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26L - Phần Tư duy Định lượng",teacher:"Nguyễn Đức Tài"},
{code:"luyendekhoahocslkhvactkg12026",subject:"[Luyện đề V-ACT] SLKH",start_time:new Date("2026-01-29 19:15:00"),end_time:new Date("2026-01-30 01:00:00"),learn_number:25,lesson_name:"SLKH_V-ACT26_Luyện đề 567_KHTN",teacher:"Vũ Khắc Ngọc"},
{code:"luyendevatlitnthptkg12026",subject:"FALSE",start_time:new Date("2026-01-29 19:15:00"),end_time:new Date("2026-01-30 01:00:00"),learn_number:1,lesson_name:"Chủ đề Vật lí Nhiệt, Khí lí tưởng và Hạt nhân nguyên tử_PP xử lí nhóm câu hỏi Lí thuyết ",teacher:"Nguyễn Hữu Tình"},
{code:"luyendementorhsakg12026",subject:"[Luyện đề HSA] Mentor_HSA",start_time:new Date("2026-01-29 19:15:00"),end_time:new Date("2026-01-29 23:00:00"),learn_number:7,lesson_name:"Chữa đề thi thử HSA tháng 1.2026",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendevatlihsakg12026",subject:"[Luyện đề HSA] Vật lí",start_time:new Date("2026-01-29 21:15:00"),end_time:new Date("2026-01-30 03:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendementorhsatc12026",subject:"[Luyện đề HSA] Mentor_HSA",start_time:new Date("2026-01-29 19:15:00"),end_time:new Date(""2026-01-29 23:00:00""),learn_number:7,lesson_name:"Chữa đề thi thử HSA tháng 1.2026",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendevatlihsatc12026",subject:"[Luyện đề HSA] Vật lí",start_time:new Date("2026-01-29 21:15:00"),end_time:new Date("2026-01-30 03:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendementorhsakg22026",subject:"[Luyện đề HSA] Mentor_HSA",start_time:new Date("2026-01-29 19:15:00"),end_time:new Date("2026-01-29 23:00:00"),learn_number:2,lesson_name:"Chữa đề thi thử HSA tháng 1.2026",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendementorhsakg220262901",subject:"[Luyện đề HSA] Mentor_HSA",start_time:new Date("2026-01-29 21:15:00"),end_time:new Date("2026-01-30 03:00:00"),learn_number:3,lesson_name:"Mentor_Hỗ trợ đề Tiếng Anh HSA26KL",teacher:"Mentor_Võ Minh Ngọc"},
{code:"luyendementorhsatc22026",subject:"[Luyện đề HSA] Mentor_HSA",start_time:new Date("2026-01-29 21:15:00),end_time:new Date("2026-01-29 23:00:00"),learn_number:2,lesson_name:"Chữa đề thi thử HSA tháng 1.2026",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendementorhsatc220262901",subject:"[Luyện đề HSA] Mentor_HSA",start_time:new Date("2026-01-29 21:15:00"),end_time:new Date("2026-01-30 03:00:00"),learn_number:3,lesson_name:"Mentor_Hỗ trợ đề Tiếng Anh HSA26KL",teacher:"Mentor_Võ Minh Ngọc"},
{code:"luyendetoanvactkg12026",subject:"[Luyện đề V-ACT] Toán",start_time:new Date("2026-01-29 21:15:00"),end_time:new Date("2026-01-30 03:00:00"),learn_number:28,lesson_name:"Toán_V-ACT26_Luyện đề 07",teacher:"Nguyễn Hoài Nam"},
{code:"luyendetoanvacttc12026",subject:"[Luyện đề V-ACT] Toán",start_time:new Date("2026-01-29 21:15:00"),end_time:new Date("2026-01-30 03:00:00"),learn_number:28,lesson_name:"Toán_V-ACT26_Luyện đề 07",teacher:"Nguyễn Hoài Nam"},
{code:"luyendesinhhoctnthptkg12026",subject:"FALSE",start_time:new Date("2026-01-29 21:15:00"),end_time:new Date("2026-01-30 03:00:00"),learn_number:1,lesson_name:"Chủ đề Di truyền phân tử_Phương pháp kĩ năng xử lí câu hỏi",teacher:"Phạm Ngọc Hà"},
{code:"luyendesinhhoctnthpttc12026",subject:"FALSE",start_time:new Date("2026-01-29 21:15:00"),end_time:new Date("2026-01-30 03:00:00"),learn_number:1,lesson_name:"Chủ đề Di truyền phân tử_Phương pháp kĩ năng xử lí câu hỏi",teacher:"Phạm Ngọc Hà"},
{code:"luyendetoantsakg22026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-30 19:15:00"),end_time:new Date("2026-01-31 01:00:00"),learn_number:5,lesson_name:"P2_Phương pháp, kĩ năng xử lí phần thi Tư duy toán học - Đề thi thử 123 (Cẩm nang)",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendekhoahoctsakg22026",subject:"[Luyện đề TSA] KH",start_time:new Date("2026-01-30 19:15:00"),end_time:new Date("2026-01-31 01:00:00"),learn_number:4,lesson_name:"P2_PP/KN xử lí phần thi Tư duy khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetoantsatc22026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-30 19:15:00"),end_time:new Date("2026-01-31 01:00:00"),learn_number:5,lesson_name:"P2_Phương pháp, kĩ năng xử lí phần thi Tư duy toán học - Đề thi thử 123 (Cẩm nang)",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetienganhhsakg12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-30 19:15:00"),end_time:new Date("2026-01-31 01:00:00"),learn_number:8,lesson_name:"Luyện đề HSA26H - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendedinhtinhhsakg12026",subject:"[Luyện đề HSA] Ngữ văn4",start_time:new Date("2026-01-30 19:15:00"),end_time:new Date("2026-01-31 01:00:00"),learn_number:8,lesson_name:"Luyện đề HSA26H - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendetienganhhsatc12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-30 19:15:00"),end_time:new Date("2026-01-31 01:00:00"),learn_number:8,lesson_name:"Luyện đề HSA26H - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendetienganhhsakg22026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-30 19:15:00"),end_time:new Date("2026-01-31 01:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26M - Phần Tiếng Anh",teacher:"Nguyễn Thanh Hương"},
{code:"luyendedialihsakg22026",subject:"[Luyện đề HSA] Địa lí",start_time:new Date("2026-01-30 19:15:00"),end_time:new Date("2026-01-31 01:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26MN - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
{code:"luyendetienganhhsatc22026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-30 19:15:00"),end_time:new Date("2026-01-31 01:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26M - Phần Tiếng Anh",teacher:"Nguyễn Thanh Hương"},
{code:"luyendetoanvactkg12026",subject:"[Luyện đề V-ACT] Toán",start_time:new Date("2026-01-30 19:15:00"),end_time:new Date("2026-01-31 01:00:00"),learn_number:28,lesson_name:"Toán_V-ACT26_Luyện đề 07",teacher:"Nguyễn Hoài Nam"},
{code:"luyendetienganhvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-01-30 19:15:00"),end_time:new Date("2026-01-31 01:00:00"),learn_number:26,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 08",teacher:"Nguyễn Thanh Hương"},
{code:"luyendesinhhoctnthptkg12026",subject:"FALSE",start_time:new Date("2026-01-30 19:15:00"),end_time:new Date("2026-01-31 01:00:00"),learn_number:1,lesson_name:"Chủ đề Di truyền phân tử_Phương pháp kĩ năng xử lí câu hỏi",teacher:"Phạm Ngọc Hà"},
{code:"luyendetoantnthptkg12026",subject:"FALSE",start_time:new Date("2026-01-30 19:15:00"),end_time:new Date("2026-01-31 01:00:00"),learn_number:1,lesson_name:"Chiến lược xử lí nhóm câu hỏi biết - hiểu",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendekhoahoctsakg22026",subject:"[Luyện đề TSA] KH",start_time:new Date("2026-01-31 19:15:00"),end_time:new Date("2026-02-01 01:00:00"),learn_number:4,lesson_name:"P2_PP/KN xử lí phần thi Tư duy khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetiengvietvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Việt",start_time:new Date("2026-01-31 19:15:00"),end_time:new Date("2026-02-01 01:00:00"),learn_number:27,lesson_name:"Tiếng Việt_V-ACT26_Luyện đề 06",teacher:"Văn Trịnh Quỳnh An"},
{code:"luyendevatlitnthptkg12026",subject:"FALSE",start_time:new Date("2026-01-31 19:15:00"),end_time:new Date("2026-02-01 01:00:00"),learn_number:1,lesson_name:"Chủ đề Vật lí Nhiệt, Khí lí tưởng và Hạt nhân nguyên tử_PP xử lí nhóm câu hỏi Lí thuyết ",teacher:"Nguyễn Hữu Tình"},
{code:"luyendedinhtinhhsakg12026",subject:"[Luyện đề HSA] Ngữ văn4",start_time:new Date("2026-01-31 20:45:00"),end_time:new Date("2026-02-01 02:30:00"),learn_number:8,lesson_name:"Luyện đề HSA26H - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendedialihsakg22026",subject:"[Luyện đề HSA] Địa lí",start_time:new Date("2026-01-31 20:45:00"),end_time:new Date("2026-02-01 02:30:00"),learn_number:2,lesson_name:"Luyện đề HSA26MN - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
{code:"luyendementorvactkg12026",subject:"[Luyện đề V-ACT] Mentor_V-ACT",start_time:new Date("2026-01-31 21:15:00"),end_time:new Date("2026-02-01 03:00:00"),learn_number:6,lesson_name:"Chữa đề thi thử V-ACT tháng 1.2026",teacher:"Mentor_Lê Thế Anh"},
{code:"luyendementorvacttc12026",subject:"[Luyện đề V-ACT] Mentor_V-ACT",start_time:new Date("2026-01-31 21:15:00"),end_time:new Date("2026-02-01 03:00:00"),learn_number:6,lesson_name:"Chữa đề thi thử V-ACT tháng 1.2026",teacher:"Mentor_Lê Thế Anh"},
{code:"luyendementorhsakg12026",subject:"[Luyện đề HSA] Mentor_HSA",start_time:new Date("2026-02-01 19:15:00"),end_time:new Date("2026-02-02 01:00:00"),learn_number:11,lesson_name:"Mentor 10_Hỗ trợ đề live HSA26HIJ phần Định lượng",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendevatlihsakg12026",subject:"[Luyện đề HSA] Vật lí",start_time:new Date("2026-02-01 19:15:00"),end_time:new Date("2026-02-02 01:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendedinhluonghsakg12026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-02-01 19:15:00"),end_time:new Date("2026-02-02 01:00:00"),learn_number:8,lesson_name:"Luyện đề HSA26H - Phần Tư duy Định lượng",teacher:"Phạm Thái Sơn"},
{code:"luyendementorhsatc12026",subject:"[Luyện đề HSA] Mentor_HSA",start_time:new Date("2026-02-01 19:15:00"),end_time:new Date("2026-02-02 01:00:00"),learn_number:11,lesson_name:"Mentor 10_Hỗ trợ đề live HSA26HIJ phần Định lượng",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendedinhluonghsakg22026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-02-01 19:15:00"),end_time:new Date("2026-02-02 01:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26L - Phần Tư duy Định lượng",teacher:"Nguyễn Đức Tài"},
{code:"luyendetoanvactkg12026",subject:"[Luyện đề V-ACT] Toán",start_time:new Date("2026-02-01 19:15:00"),end_time:new Date("2026-02-02 01:00:00"),learn_number:28,lesson_name:"Toán_V-ACT26_Luyện đề 07",teacher:"Nguyễn Hoài Nam"},
{code:"luyendesinhhoctnthptkg12026",subject:"FALSE",start_time:new Date("2026-02-01 19:15:00"),end_time:new Date("2026-02-02 01:00:00"),learn_number:1,lesson_name:"Chủ đề Di truyền phân tử_Phương pháp kĩ năng xử lí câu hỏi",teacher:"Phạm Ngọc Hà"},
{code:"luyendementortsakg22026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("2026-02-01 21:15:00"),end_time:new Date("2026-02-02 03:00:00"),learn_number:2,lesson_name:"TSA Mentor 1",teacher:""},
{code:"luyendementortsatc22026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("2026-02-01 21:15:00"),end_time:new Date("2026-02-02 03:00:00"),learn_number:2,lesson_name:"TSA Mentor 1",teacher:""},
{code:"luyendementortsakg22026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("2026-02-02 19:15:00"),end_time:new Date("2026-02-03 01:00:00"),learn_number:3,lesson_name:"TSA Mentor 2",teacher:""},
{code:"luyendementortsatc22026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("2026-02-02 19:15:00"),end_time:new Date("2026-02-03 01:00:00"),learn_number:3,lesson_name:"TSA Mentor 2",teacher:""},
{code:"luyendetienganhhsakg12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-02-02 19:15:00"),end_time:new Date("2026-02-03 01:00:00"),learn_number:8,lesson_name:"Luyện đề HSA26H - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendevatlihsakg12026",subject:"[Luyện đề HSA] Vật lí",start_time:new Date("2026-02-02 19:15:00"),end_time:new Date("2026-02-03 01:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendetienganhhsakg22026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-02-02 19:15:00"),end_time:new Date("2026-02-03 01:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26M - Phần Tiếng Anh",teacher:"Nguyễn Thanh Hương"},
{code:"luyendetienganhvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-02-02 19:15:00"),end_time:new Date("2026-02-03 01:00:00"),learn_number:29,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 09",teacher:"Nguyễn Thanh Hương"},
{code:"luyendetienganhvacttc12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-02-02 19:15:00"),end_time:new Date("2026-02-03 01:00:00"),learn_number:29,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 09",teacher:"Nguyễn Thanh Hương"},
{code:"luyendenguvantnthptkg12026",subject:"FALSE",start_time:new Date("2026-02-02 19:15:00"),end_time:new Date("2026-02-03 01:00:00"),learn_number:1,lesson_name:"Luyện đề TN THPT số 1",teacher:"Trịnh Thu Tuyết"},
{code:"luyendenguvantnthpttc12026",subject:"FALSE",start_time:new Date("2026-02-02 19:15:00"),end_time:new Date("2026-02-03 01:00:00"),learn_number:1,lesson_name:"Luyện đề TN THPT số 1",teacher:"Trịnh Thu Tuyết"},
{code:"luyendetoantsakg22026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-02-02 20:45:00"),end_time:new Date("2026-02-03 02:30:00"),learn_number:5,lesson_name:"P2_Phương pháp, kĩ năng xử lí phần thi Tư duy toán học - Đề thi thử 123 (Cẩm nang)",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendehoahoctnthptkg12026",subject:"FALSE",start_time:new Date("2026-02-02 21:15:00"),end_time:new Date("2026-02-03 03:00:00"),learn_number:1,lesson_name:"Phương pháp và kĩ năng xử lý câu hỏi về hóa học hữu cơ",teacher:"Vũ Tuấn Minh"},
{code:"luyendehoahoctnthpttc12026",subject:"FALSE",start_time:new Date("2026-02-02 21:15:00"),end_time:new Date("2026-02-03 03:00:00"),learn_number:1,lesson_name:"Phương pháp và kĩ năng xử lý câu hỏi về hóa học hữu cơ",teacher:"Vũ Tuấn Minh"},
{code:"luyendetoantsakg22026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-02-03 19:15:00"),end_time:new Date("2026-02-04 01:00:00"),learn_number:5,lesson_name:"P2_Phương pháp, kĩ năng xử lí phần thi Tư duy toán học - Đề thi thử 123 (Cẩm nang)",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetoantnthptkg12026",subject:"FALSE",start_time:new Date("2026-02-03 19:15:00"),end_time:new Date("2026-02-04 01:00:00"),learn_number:2,lesson_name:"Luyện đề TN THPT số 1",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendenguvantnthptkg12026",subject:"FALSE",start_time:new Date("2026-02-03 19:15:00"),end_time:new Date("2026-02-04 01:00:00"),learn_number:1,lesson_name:"Luyện đề TN THPT số 1",teacher:"Trịnh Thu Tuyết"},
{code:"luyendehoahoctnthptkg12026",subject:"FALSE",start_time:new Date("2026-02-03 19:15:00"),end_time:new Date("2026-02-04 01:00:00"),learn_number:1,lesson_name:"Phương pháp và kĩ năng xử lý câu hỏi về hóa học hữu cơ",teacher:"Vũ Tuấn Minh"},
{code:"luyendetoantnthpttc12026",subject:"FALSE",start_time:new Date("2026-02-03 19:15:00"),end_time:new Date("2026-02-04 01:00:00"),learn_number:2,lesson_name:"Luyện đề TN THPT số 1",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetienganhhsakg12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-02-03 20:45:00"),end_time:new Date("2026-02-04 02:30:00"),learn_number:8,lesson_name:"Luyện đề HSA26H - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendetienganhhsakg22026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-02-03 20:45:00"),end_time:new Date("2026-02-04 02:30:00"),learn_number:3,lesson_name:"Luyện đề HSA26M - Phần Tiếng Anh",teacher:"Nguyễn Thanh Hương"},
{code:"luyendetienganhvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-02-03 20:45:00"),end_time:new Date("2026-02-04 02:30:00"),learn_number:29,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 09",teacher:"Nguyễn Thanh Hương"},
{code:"luyendelichsuhsakg12026",subject:"[Luyện đề HSA] Lịch sử",start_time:new Date("2026-02-03 21:15:00"),end_time:new Date("2026-02-04 03:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
{code:"luyendelichsuhsatc12026",subject:"[Luyện đề HSA] Lịch sử",start_time:new Date("2026-02-03 21:15:00"),end_time:new Date("2026-02-04 03:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
{code:"luyendedinhluonghsakg22026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-02-03 21:15:00"),end_time:new Date("2026-02-04 03:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26M - Phần Tư duy Định lượng",teacher:"Phạm Thái Sơn"},
{code:"luyendedinhluonghsatc22026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-02-03 21:15:00"),end_time:new Date("2026-02-04 03:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26M - Phần Tư duy Định lượng",teacher:"Phạm Thái Sơn"},
{code:"luyendekhoahocptslvactkg12026",subject:"",start_time:new Date("2026-02-03 21:15:00"),end_time:new Date("2026-02-04 03:00:00"),learn_number:30,lesson_name:"LG&PTSL_V-ACT26_Luyện đề 78",teacher:"Nguyễn Hoài Nam"},
{code:"luyendekhoahocptslvacttc12026",subject:"",start_time:new Date("2026-02-03 21:15:00"),end_time:new Date("2026-02-04 03:00:00"),learn_number:30,lesson_name:"LG&PTSL_V-ACT26_Luyện đề 78",teacher:"Nguyễn Hoài Nam"},
{code:"luyendedialihsakg12026",subject:"",start_time:new Date("2026-02-04 19:15:00"),end_time:new Date("2026-02-05 01:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
{code:"luyendedialihsatc12026",subject:"",start_time:new Date("2026-02-04 19:15:00"),end_time:new Date("2026-02-05 01:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
{code:"luyendekhoahocptslvactkg12026",subject:"",start_time:new Date("2026-02-04 19:15:00"),end_time:new Date("2026-02-05 01:00:00"),learn_number:30,lesson_name:"LG&PTSL_V-ACT26_Luyện đề 78",teacher:"Nguyễn Hoài Nam"},
{code:"luyendetoantnthptkg12026",subject:"",start_time:new Date("2026-02-04 20:45:00"),end_time:new Date("2026-02-05 02:30:00"),learn_number:2,lesson_name:"Luyện đề TN THPT số 1",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendekhoahoctsakg22026",subject:"",start_time:new Date("2026-02-04 21:15:00"),end_time:new Date("2026-02-05 03:00:00"),learn_number:6,lesson_name:"Luyện đề TSA26K - Phần Tư duy khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahoctsatc22026",subject:"",start_time:new Date("2026-02-04 21:15:00"),end_time:new Date("2026-02-05 03:00:00"),learn_number:6,lesson_name:"Luyện đề TSA26K - Phần Tư duy khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendedinhtinhhsakg22026",subject:"",start_time:new Date("2026-02-04 21:15:00"),end_time:new Date("2026-02-05 03:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26L - Phần Tư duy Định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendedinhtinhhsatc22026",subject:"",start_time:new Date("2026-02-04 21:15:00"),end_time:new Date("2026-02-05 03:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26L - Phần Tư duy Định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendevatlitnthptkg12026",subject:"",start_time:new Date("2026-02-04 21:15:00"),end_time:new Date("2026-02-05 03:00:00"),learn_number:2,lesson_name:"Luyện đề TN THPT số 01 (Đề cơ bản)",teacher:"Nguyễn Hữu Tình"},
{code:"luyendevatlitnthpttc12026",subject:"",start_time:new Date("2026-02-04 21:15:00"),end_time:new Date("2026-02-05 03:00:00"),learn_number:2,lesson_name:"Luyện đề TN THPT số 01 (Đề cơ bản)",teacher:"Nguyễn Hữu Tình"},
{code:"luyendelichsuhsakg12026",subject:"",start_time:new Date("2026-02-05 19:15:00"),end_time:new Date("2026-02-06 01:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
{code:"luyendedinhluonghsakg22026",subject:"",start_time:new Date("2026-02-05 19:15:00"),end_time:new Date("2026-02-06 01:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26M - Phần Tư duy Định lượng",teacher:"Phạm Thái Sơn"},
{code:"luyendevatlitnthptkg12026",subject:"",start_time:new Date("2026-02-05 19:15:00"),end_time:new Date("2026-02-06 01:00:00"),learn_number:2,lesson_name:"Luyện đề TN THPT số 01 (Đề cơ bản)",teacher:"Nguyễn Hữu Tình"},
{code:"luyendehoahoctnthptkg12026",subject:"",start_time:new Date("2026-02-05 19:15:00"),end_time:new Date("2026-02-06 01:00:00"),learn_number:1,lesson_name:"Phương pháp và kĩ năng xử lý câu hỏi về hóa học hữu cơ",teacher:"Vũ Tuấn Minh"},
{code:"luyendenguvantnthptkg12026",subject:"",start_time:new Date("2026-02-05 20:45:00"),end_time:new Date("2026-02-06 02:30:00"),learn_number:1,lesson_name:"Luyện đề TN THPT số 1",teacher:"Trịnh Thu Tuyết"},
{code:"luyendesinhhochsakg12026",subject:"",start_time:new Date("2026-02-05 21:15:00"),end_time:new Date("2026-02-06 03:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
{code:"luyendesinhhochsatc12026",subject:"",start_time:new Date("2026-02-05 21:15:00"),end_time:new Date("2026-02-06 03:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
{code:"luyendevatlihsakg22026",subject:"",start_time:new Date("2026-02-05 21:15:00"),end_time:new Date("2026-02-06 03:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26MN - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendevatlihsatc22026",subject:"",start_time:new Date("2026-02-05 21:15:00"),end_time:new Date("2026-02-06 03:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26MN - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendetoanvactkg12026",subject:"",start_time:new Date("2026-02-05 21:15:00"),end_time:new Date("2026-02-06 03:00:00"),learn_number:31,lesson_name:"Toán_V-ACT26_Luyện đề 08",teacher:"Nguyễn Hoài Nam"},
{code:"luyendetoanvacttc12026",subject:"",start_time:new Date("2026-02-05 21:15:00"),end_time:new Date("2026-02-06 03:00:00"),learn_number:31,lesson_name:"Toán_V-ACT26_Luyện đề 08",teacher:"Nguyễn Hoài Nam"},
{code:"luyendesinhhoctnthptkg12026",subject:"",start_time:new Date("2026-02-05 21:15:00"),end_time:new Date("2026-02-06 03:00:00"),learn_number:2,lesson_name:"Luyện đề TN THPT số 01 (đề cơ bản)",teacher:"Phạm Ngọc Hà"},
{code:"luyendesinhhoctnthpttc12026",subject:"",start_time:new Date("2026-02-05 21:15:00"),end_time:new Date("2026-02-06 03:00:00"),learn_number:2,lesson_name:"Luyện đề TN THPT số 01 (đề cơ bản)",teacher:"Phạm Ngọc Hà"},
{code:"luyendetoantsakg22026",subject:"",start_time:new Date("2026-02-06 19:15:00"),end_time:new Date("2026-02-07 01:00:00"),learn_number:7,lesson_name:"Luyện đề TSA26K - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendekhoahoctsakg22026",subject:"",start_time:new Date("2026-02-06 19:15:00"),end_time:new Date("2026-02-07 01:00:00"),learn_number:6,lesson_name:"Luyện đề TSA26K - Phần Tư duy khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetoantsatc22026",subject:"",start_time:new Date("2026-02-06 19:15:00"),end_time:new Date("2026-02-07 01:00:00"),learn_number:7,lesson_name:"Luyện đề TSA26K - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendehoahochsakg12026",subject:"",start_time:new Date("2026-02-06 19:15:00"),end_time:new Date("2026-02-07 01:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Hóa học",teacher:"Vũ Tuấn Minh"},
{code:"luyendedialihsakg12026",subject:"",start_time:new Date("2026-02-06 19:15:00"),end_time:new Date("2026-02-07 01:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
{code:"luyendehoahochsatc12026",subject:"",start_time:new Date("2026-02-06 19:15:00"),end_time:new Date("2026-02-07 01:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Hóa học",teacher:"Vũ Tuấn Minh"},
{code:"luyendetienganhhsakg22026",subject:"",start_time:new Date("2026-02-06 19:15:00"),end_time:new Date("2026-02-07 01:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26N - Phần Tiếng Anh",teacher:"Nguyễn Thanh Hương"},
{code:"luyendedinhtinhhsakg22026",subject:"",start_time:new Date("2026-02-06 19:15:00"),end_time:new Date("2026-02-07 01:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26L - Phần Tư duy Định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendetienganhhsatc22026",subject:"",start_time:new Date("2026-02-06 19:15:00"),end_time:new Date("2026-02-07 01:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26N - Phần Tiếng Anh",teacher:"Nguyễn Thanh Hương"},
{code:"luyendetoanvactkg12026",subject:"",start_time:new Date("2026-02-06 19:15:00"),end_time:new Date("2026-02-07 01:00:00"),learn_number:31,lesson_name:"Toán_V-ACT26_Luyện đề 08",teacher:"Nguyễn Hoài Nam"},
{code:"luyendetienganhvactkg12026",subject:"",start_time:new Date("2026-02-06 19:15:00"),end_time:new Date("2026-02-07 01:00:00"),learn_number:29,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 09",teacher:"Nguyễn Thanh Hương"},
{code:"luyendesinhhoctnthptkg12026",subject:"",start_time:new Date("2026-02-06 19:15:00"),end_time:new Date("2026-02-07 01:00:00"),learn_number:2,lesson_name:"Luyện đề TN THPT số 01 (đề cơ bản)",teacher:"Phạm Ngọc Hà"},
{code:"luyendetoantnthptkg12026",subject:"",start_time:new Date("2026-02-06 19:15:00"),end_time:new Date("2026-02-07 01:00:00"),learn_number:2,lesson_name:"Luyện đề TN THPT số 1",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetienganhtnthptkg12026",subject:"",start_time:new Date("2026-02-06 21:15:00"),end_time:new Date("2026-02-07 03:00:00"),learn_number:1,lesson_name:"Chủ đề Relationships - Nâng cấp từ vựng thông qua các dạng bài trong bài thi TN THPT",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendetienganhtnthpttc12026",subject:"",start_time:new Date("2026-02-06 21:15:00"),end_time:new Date("2026-02-07 03:00:00"),learn_number:1,lesson_name:"Chủ đề Relationships - Nâng cấp từ vựng thông qua các dạng bài trong bài thi TN THPT",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendekhoahoctsakg22026",subject:"",start_time:new Date("2026-02-07 19:15:00"),end_time:new Date("2026-02-08 01:00:00"),learn_number:6,lesson_name:"Luyện đề TSA26K - Phần Tư duy khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahocptslvactkg12026",subject:"",start_time:new Date("2026-02-07 19:15:00"),end_time:new Date("2026-02-08 01:00:00"),learn_number:30,lesson_name:"LG&PTSL_V-ACT26_Luyện đề 78",teacher:"Nguyễn Hoài Nam"},
{code:"luyendevatlitnthptkg12026",subject:"",start_time:new Date("2026-02-07 19:15:00"),end_time:new Date("2026-02-08 01:00:00"),learn_number:2,lesson_name:"Luyện đề TN THPT số 01 (Đề cơ bản)",teacher:"Nguyễn Hữu Tình"},
{code:"luyendedialihsakg12026",subject:"",start_time:new Date("2026-02-07 20:45:00"),end_time:new Date("2026-02-08 02:30:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
{code:"luyendedinhtinhhsakg22026",subject:"",start_time:new Date("2026-02-07 20:45:00"),end_time:new Date("2026-02-08 02:30:00"),learn_number:2,lesson_name:"Luyện đề HSA26L - Phần Tư duy Định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendekhoahocslkhvactkg12026",subject:"",start_time:new Date("2026-02-07 21:15:00"),end_time:new Date("2026-02-08 03:00:00"),learn_number:32,lesson_name:"SLKH_V-ACT26_Luyện đề 567_KHXH",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahocslkhvacttc12026",subject:"",start_time:new Date("2026-02-07 21:15:00"),end_time:new Date("2026-02-08 03:00:00"),learn_number:32,lesson_name:"SLKH_V-ACT26_Luyện đề 567_KHXH",teacher:"Vũ Khắc Ngọc"},
{code:"luyendesinhhochsakg12026",subject:"",start_time:new Date("2026-02-08 19:15:00"),end_time:new Date("2026-02-09 01:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
{code:"luyendelichsuhsakg12026",subject:"",start_time:new Date("2026-02-08 19:15:00"),end_time:new Date("2026-02-09 01:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
{code:"luyendementorhsakg22026",subject:"",start_time:new Date("2026-02-08 19:15:00"),end_time:new Date("2026-02-09 01:00:00"),learn_number:4,lesson_name:"HSA mentor 3",teacher:""},
{code:"luyendevatlihsakg22026",subject:"",start_time:new Date("2026-02-08 19:15:00"),end_time:new Date("2026-02-09 01:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26MN - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendedinhluonghsakg22026",subject:"",start_time:new Date("2026-02-08 19:15:00"),end_time:new Date("2026-02-09 01:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26M - Phần Tư duy Định lượng",teacher:"Phạm Thái Sơn"},
{code:"luyendementorhsatc22026",subject:"",start_time:new Date("2026-02-08 19:15:00"),end_time:new Date("2026-02-09 01:00:00"),learn_number:4,lesson_name:"HSA mentor 3",teacher:""},
{code:"luyendementorvactkg12026",subject:"",start_time:new Date("2026-02-08 19:15:00"),end_time:new Date("2026-02-09 01:00:00"),learn_number:7,lesson_name:"Hỗ trợ đề luyện Toán-Tiếng Việt V-ACT26_04-05",teacher:"Mentor_Lê Thế Anh"},
{code:"luyendetoanvactkg12026",subject:"",start_time:new Date("2026-02-08 19:15:00"),end_time:new Date("2026-02-09 01:00:00"),learn_number:31,lesson_name:"Toán_V-ACT26_Luyện đề 08",teacher:"Nguyễn Hoài Nam"},
{code:"luyendementorvacttc12026",subject:"",start_time:new Date("2026-02-08 19:15:00"),end_time:new Date("2026-02-09 01:00:00"),learn_number:7,lesson_name:"Hỗ trợ đề luyện Toán-Tiếng Việt V-ACT26_04-05",teacher:"Mentor_Lê Thế Anh"},
{code:"luyendesinhhoctnthptkg12026",subject:"",start_time:new Date("2026-02-08 19:15:00"),end_time:new Date("2026-02-09 01:00:00"),learn_number:2,lesson_name:"Luyện đề TN THPT số 01 (đề cơ bản)",teacher:"Phạm Ngọc Hà"},
{code:"luyendedochieutsakg22026",subject:"",start_time:new Date("2026-02-08 21:15:00"),end_time:new Date("2026-02-09 03:00:00"),learn_number:8,lesson_name:"Luyện đề TSA26KL - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"luyendedochieutsatc22026",subject:"",start_time:new Date("2026-02-08 21:15:00"),end_time:new Date("2026-02-09 03:00:00"),learn_number:8,lesson_name:"Luyện đề TSA26KL - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"luyendehoahochsakg12026",subject:"",start_time:new Date("2026-02-09 19:15:00"),end_time:new Date("2026-02-10 01:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Hóa học",teacher:"Vũ Tuấn Minh"},
{code:"luyendesinhhochsakg12026",subject:"",start_time:new Date("2026-02-09 19:15:00"),end_time:new Date("2026-02-10 01:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
{code:"luyendetienganhhsakg22026",subject:"",start_time:new Date("2026-02-09 19:15:00"),end_time:new Date("2026-02-10 01:00:00"),learn_number:4,lesson_name:"Luyện đề HSA26N - Phần Tiếng Anh",teacher:"Nguyễn Thanh Hương"},
{code:"luyendevatlihsakg22026",subject:"",start_time:new Date("2026-02-09 19:15:00"),end_time:new Date("2026-02-10 01:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26MN - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendekhoahocslkhvactkg12026",subject:"",start_time:new Date("2026-02-09 19:15:00"),end_time:new Date("2026-02-10 01:00:00"),learn_number:32,lesson_name:"SLKH_V-ACT26_Luyện đề 567_KHXH",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetoantsakg22026",subject:"",start_time:new Date("2026-02-09 20:45:00"),end_time:new Date("2026-02-10 02:30:00"),learn_number:7,lesson_name:"Luyện đề TSA26K - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetienganhtnthptkg12026",subject:"",start_time:new Date("2026-02-09 20:45:00"),end_time:new Date("2026-02-10 02:30:00"),learn_number:1,lesson_name:"Chủ đề Relationships - Nâng cấp từ vựng thông qua các dạng bài trong bài thi TN THPT",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendehoahoctnthptkg12026",subject:"",start_time:new Date("2026-02-09 21:15:00"),end_time:new Date("2026-02-10 03:00:00"),learn_number:2,lesson_name:"Bí kíp luyện đề TN THPT số 01 (đề mức độ 7+)",teacher:"Vũ Tuấn Minh"},
{code:"luyendehoahoctnthpttc12026",subject:"",start_time:new Date("2026-02-09 21:15:00"),end_time:new Date("2026-02-10 03:00:00"),learn_number:2,lesson_name:"Bí kíp luyện đề TN THPT số 01 (đề mức độ 7+)",teacher:"Vũ Tuấn Minh"},
{code:"luyendedochieutsakg22026",subject:"",start_time:new Date("2026-02-10 19:15:00"),end_time:new Date("2026-02-11 01:00:00"),learn_number:8,lesson_name:"Luyện đề TSA26KL - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetoantsakg22026",subject:"",start_time:new Date("2026-02-10 19:15:00"),end_time:new Date("2026-02-11 01:00:00"),learn_number:7,lesson_name:"Luyện đề TSA26K - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendehoahoctnthptkg12026",subject:"",start_time:new Date("2026-02-10 19:15:00"),end_time:new Date("2026-02-11 01:00:00"),learn_number:2,lesson_name:"Bí kíp luyện đề TN THPT số 01 (đề mức độ 7+)",teacher:"Vũ Tuấn Minh"},
{code:"luyendetienganhtnthptkg12026",subject:"",start_time:new Date("2026-02-10 19:15:00"),end_time:new Date("2026-02-11 01:00:00"),learn_number:1,lesson_name:"Chủ đề Relationships - Nâng cấp từ vựng thông qua các dạng bài trong bài thi TN THPT",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendehoahochsakg12026",subject:"",start_time:new Date("2026-02-10 20:45:00"),end_time:new Date("2026-02-11 02:30:00"),learn_number:4,lesson_name:"Luyện đề HSA26GH - Phần Khoa học Hóa học",teacher:"Vũ Tuấn Minh"},
{code:"luyendetienganhhsakg22026",subject:"",start_time:new Date("2026-02-10 20:45:00"),end_time:new Date("2026-02-11 02:30:00"),learn_number:4,lesson_name:"Luyện đề HSA26N - Phần Tiếng Anh",teacher:"Nguyễn Thanh Hương"},
{code:"luyendedinhluonghsakg12026",subject:"",start_time:new Date("2026-02-10 21:15:00"),end_time:new Date("2026-02-11 03:00:00"),learn_number:9,lesson_name:"Luyện đề HSA26I - Phần Tư duy Định lượng",teacher:"Nguyễn Đức Tài"},
{code:"luyendedinhluonghsatc12026",subject:"",start_time:new Date("2026-02-10 21:15:00"),end_time:new Date("2026-02-11 03:00:00"),learn_number:9,lesson_name:"Luyện đề HSA26I - Phần Tư duy Định lượng",teacher:"Nguyễn Đức Tài"},
{code:"luyendedinhtinhhsakg12026",subject:"",start_time:new Date("2026-02-11 21:15:00"),end_time:new Date("2026-02-12 03:00:00"),learn_number:9,lesson_name:"Luyện đề HSA26I - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendedinhtinhhsatc12026",subject:"",start_time:new Date("2026-02-11 21:15:00"),end_time:new Date("2026-02-12 03:00:00"),learn_number:9,lesson_name:"Luyện đề HSA26I - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendedochieutsakg22026",subject:"",start_time:new Date("2026-02-12 19:15:00"),end_time:new Date("2026-02-13 01:00:00"),learn_number:8,lesson_name:"Luyện đề TSA26KL - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"luyendedinhluonghsakg12026",subject:"",start_time:new Date("2026-02-12 19:15:00"),end_time:new Date("2026-02-13 01:00:00"),learn_number:9,lesson_name:"Luyện đề HSA26I - Phần Tư duy Định lượng",teacher:"Nguyễn Đức Tài"},
{code:"luyendekhoahocslkhvactkg12026",subject:"",start_time:new Date("2026-02-12 19:15:00"),end_time:new Date("2026-02-13 01:00:00"),learn_number:32,lesson_name:"SLKH_V-ACT26_Luyện đề 567_KHXH",teacher:"Vũ Khắc Ngọc"},
{code:"luyendehoahoctnthptkg12026",subject:"",start_time:new Date("2026-02-12 19:15:00"),end_time:new Date("2026-02-13 01:00:00"),learn_number:2,lesson_name:"Bí kíp luyện đề TN THPT số 01 (đề mức độ 7+)",teacher:"Vũ Tuấn Minh"},
{code:"luyendevatlihsakg12026",subject:"",start_time:new Date("2026-02-12 21:15:00"),end_time:new Date("2026-02-13 03:00:00"),learn_number:5,lesson_name:"Luyện đề HSA26IJ - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendevatlihsatc12026",subject:"",start_time:new Date("2026-02-12 21:15:00"),end_time:new Date("2026-02-13 03:00:00"),learn_number:5,lesson_name:"Luyện đề HSA26IJ - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendetienganhhsakg12026",subject:"",start_time:new Date("2026-02-13 19:15:00"),end_time:new Date("2026-02-14 01:00:00"),learn_number:9,lesson_name:"Luyện đề HSA26I - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendedinhtinhhsakg12026",subject:"",start_time:new Date("2026-02-13 19:15:00"),end_time:new Date("2026-02-14 01:00:00"),learn_number:9,lesson_name:"Luyện đề HSA26I - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendetienganhhsatc12026",subject:"",start_time:new Date("2026-02-13 19:15:00"),end_time:new Date("2026-02-14 01:00:00"),learn_number:9,lesson_name:"Luyện đề HSA26I - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendedinhtinhhsakg12026",subject:"",start_time:new Date("2026-02-14 20:45:00"),end_time:new Date("2026-02-15 02:30:00"),learn_number:9,lesson_name:"Luyện đề HSA26I - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendevatlihsakg12026",subject:"",start_time:new Date("2026-02-15 19:15:00"),end_time:new Date("2026-02-16 01:00:00"),learn_number:5,lesson_name:"Luyện đề HSA26IJ - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendedinhluonghsakg12026",subject:"",start_time:new Date("2026-02-15 19:15:00"),end_time:new Date("2026-02-16 01:00:00"),learn_number:9,lesson_name:"Luyện đề HSA26I - Phần Tư duy Định lượng",teacher:"Nguyễn Đức Tài"},
    {code:"demo-topuni",subject:"[Demo] Demo TopUni",start_time:new Date("2025-12-29 10:15:00"),end_time:new Date("2025-12-29 20:00:00"),learn_number:1,lesson_name:"Demo TopUni Buổi 1",teacher:"Nguyễn Ngọc Tú"},
    {code:"demo-topuni2",subject:"[Demo] Demo TopUni",start_time:new Date("2025-12-29 10:15:00"),end_time:new Date("2025-12-29 23:00:00"),learn_number:2,lesson_name:"Demo TopUni Buổi 1",teacher:"Nguyễn Ngọc Tú"},
    {code:"demo-topuni3",subject:"[Demo] Demo TopUni",start_time:new Date("2025-12-29 10:15:00"),end_time:new Date("2025-12-29 23:00:00"),learn_number:3,lesson_name:"Demo TopUni Buổi 1",teacher:"Nguyễn Ngọc Tú"},
        {code:"demo",subject:"[Demo] Demo",start_time:new Date("5/22/2025 14:22:00"),end_time:new Date("5/22/2025 16:27:00"),learn_number:1,lesson_name:"Luyện đề Demo",teacher:"HOCMAI"}
    ];


    const boxList = [
        
   
        {code:"luyendementorhsakg220262901",boxid:"952000",boxtag:"3Ot9Nu",tkey:"d278bb49ac6ae9ac",tid:"55"},
        {code:"luyendementorhsatc220262901",boxid:"952000",boxtag:"3Ot9Nu",tkey:"d278bb49ac6ae9ac",tid:"55"},
        {code:"luyendelichsuhsakg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b2c8ea677756b0ae",tid:"57"},
        {code:"luyendehoahochsakg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"ce0344e994ae584f",tid:"58"},
        {code:"luyendesinhhochsakg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"61dd1694d16015e9",tid:"59"},
        {code:"luyendedinhluonghsakg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"ff0e97ef544eb048",tid:"60"},
        {code:"luyendedinhtinhhsakg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"da7dd95baab0af03",tid:"61"},
        {code:"luyendetienganhhsakg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"11a069976630c5a8",tid:"62"},
        {code:"luyendevatlihsakg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"f839bab6f5ad3480",tid:"63"},
        {code:"luyendedialihsakg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"e3b92c1c9cb530ae",tid:"64"},
        {code:"luyendelichsuhsatc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b2c8ea677756b0ae",tid:"57"},
        {code:"luyendehoahochsatc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"ce0344e994ae584f",tid:"58"},
        {code:"luyendesinhhochsatc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"61dd1694d16015e9",tid:"59"},
        {code:"luyendedinhluonghsatc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"ff0e97ef544eb048",tid:"60"},
        {code:"luyendedinhtinhhsatc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"da7dd95baab0af03",tid:"61"},
        {code:"luyendetienganhhsatc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"11a069976630c5a8",tid:"62"},
        {code:"luyendevatlihsatc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"f839bab6f5ad3480",tid:"63"},
        {code:"luyendedialihsatc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"e3b92c1c9cb530ae",tid:"64"},
        {code:"luyendementorhsakg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"56979b1f24efa327",tid:"103"},
        {code:"luyendementorhsatc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"56979b1f24efa327",tid:"103"},
        {code:"luyendetiengvietvactkg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"2926b230a532bcd4",tid:"66"},
{code:"luyendetienganhvactkg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"179d9866911dede2",tid:"67"},
{code:"luyendetoanvactkg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"d81a5cb731eeafda",tid:"68"},
{code:"luyendekhoahocslkhvactkg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"54f1fe80e1f5ee79",tid:"69"},
{code:"luyendekhoahocptslvactkg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"697e51d140376016",tid:"70"},
{code:"luyendetiengvietvacttc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"2926b230a532bcd4",tid:"66"},
{code:"luyendetienganhvacttc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"179d9866911dede2",tid:"67"},
{code:"luyendetoanvacttc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"d81a5cb731eeafda",tid:"68"},
{code:"luyendekhoahocslkhvacttc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"54f1fe80e1f5ee79",tid:"69"},
{code:"luyendekhoahocptslvacttc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"697e51d140376016",tid:"70"},
{code:"luyendementorvactkg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"37aa69db8596da24",tid:"71"},
{code:"luyendementorvacttc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"37aa69db8596da24",tid:"71"},
        {code:"luyendedinhtinhhsakg22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"e574728e3ba6e71d",tid:"98"},
{code:"luyendedinhtinhhsatc22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"e574728e3ba6e71d",tid:"98"},
        {code:"luyendedinhluonghsakg22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"156e9966a04d4c38",tid:"97"},
{code:"luyendedinhluonghsatc22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"156e9966a04d4c38",tid:"97"},
        {code:"luyendetienganhhsakg22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"4e8c9ae17d9dc514",tid:"99"},
{code:"luyendetienganhhsatc22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"4e8c9ae17d9dc514",tid:"99"},
        {code:"luyendevatlihsakg22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"ac43826098724e65",tid:"100"},
{code:"luyendevatlihsatc22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"ac43826098724e65",tid:"100"},
        {code:"luyendementorhsakg22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"56979b1f24efa327",tid:"103"},
{code:"luyendementorhsatc22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"56979b1f24efa327",tid:"103"},
        {code:"luyendelichsuhsakg22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b0a0ad34db1db39a",tid:"94"},
{code:"luyendelichsuhsatc22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b0a0ad34db1db39a",tid:"94"},
        {code:"luyendedialihsakg22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"c6f8ff61539c4871",tid:"101"},
{code:"luyendedialihsatc22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"c6f8ff61539c4871",tid:"101"},
        {code:"luyendekhoahoctsakg22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"6a498c8677d8a5db",tid:"73"},
{code:"luyendekhoahoctsatc22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"6a498c8677d8a5db",tid:"73"},
        {code:"luyendesinhhochsakg22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b9c3c3ded29cc325",tid:"84"},
{code:"luyendesinhhochsatc22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b9c3c3ded29cc325",tid:"84"},
        {code:"luyendehoahochsakg22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"2c6b6cd023e503cf",tid:"95"},
{code:"luyendehoahochsatc22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"2c6b6cd023e503cf",tid:"95"},
        {code:"luyendetoantsakg22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"dd5597719983213b",tid:"76"},
{code:"luyendetoantsatc22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"dd5597719983213b",tid:"76"},
        {code:"luyendedochieutsakg22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"e32b666f0a71b182",tid:"74"},
{code:"luyendedochieutsatc22026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"e32b666f0a71b182",tid:"74"},
        { code: "demo-topuni", boxid: "952000", boxtag: "3Ot9Nu", tkey: "5cec50d8a8e9397e", tid: "3" },
        { code: "demo-topuni2", boxid: "952000", boxtag: "3Ot9Nu", tkey: "5cec50d8a8e9397e", tid: "3" },
        {code:"livestreamnuocrutvact2026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"37aa69db8596da24",tid:"71"},
        {code:"luyendetoantnthptkg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"3c8c7399d8138f38",tid:"86"},
{code:"luyendetoantnthpttc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"3c8c7399d8138f38",tid:"86"},
        {code:"luyendevatlitnthptkg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"7bd403066bcd0f9d",tid:"89"},
{code:"luyendevatlitnthpttc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"7bd403066bcd0f9d",tid:"89"},
        {code:"luyendesinhhoctnthptkg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"456c8691e3aaaca1",tid:"91"},
{code:"luyendesinhhoctnthpttc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"456c8691e3aaaca1",tid:"91"},
        {code:"demo-topuni3",boxid:"952000",boxtag:"3Ot9Nu",tkey:"76b5c3918fdfcc8e",tid:"34"},
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
        console.log("[checkCurrentTimeInSchedule] Checking:", { code, learn_number });
        const now = new Date();
        const result = lichhoc.filter((item) => item.code === code && item.learn_number === learn_number && now >= item.start_time && now <= item.end_time);

        if (result.length > 0) {
            console.log("[checkCurrentTimeInSchedule] ✅ Found valid schedule:", result);
        } else {
            console.warn("[checkCurrentTimeInSchedule] ❌ No valid schedule found, clearing cookie");
            document.cookie = "_ladipage_unique_user_id=";
        }
    }

    function checkClassAvailability(subjectCode) {
        console.log("[checkClassAvailability] Checking code:", subjectCode);
        // Find classes for the specified subject
        const subjectClasses = lichhoc.filter((item) => item.code === subjectCode);
        console.log("[checkClassAvailability] Found classes:", subjectClasses.length);

        // Check if any class is happening now
        const ongoingClass = subjectClasses.find((item) => {
            return today >= item.start_time && today < item.end_time;
        });

        if (ongoingClass) {
            console.log("[checkClassAvailability] ✅ Ongoing class found:", ongoingClass);
            return ongoingClass.learn_number;
        } else {
            console.warn("[checkClassAvailability] ❌ No ongoing class for:", subjectCode);
            return 0;
        }
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
                    //window.location.href = "https://topuni.hocmai.vn/lichhoc"+"&return=multi";

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

    setInterval(checkStatus, 36000000); // Check every 10 minutes (600000 ms)
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
                    }, 1500); // 1000 milliseconds = 1 second
                }
                // end load box chat
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }
    async function loading() {
        console.log("[loading] 🚀 Starting loading function");
        status = 1;
        var c_user = getCookie("_ladipage_unique_user_id");
        var code = window.location.href.substring(28);
        console.log("[loading] Extracted code from URL:", code);
        console.log("[loading] User cookie:", c_user ? "Found" : "Not found");

        const learn_number = checkClassAvailability(code);
        console.log("[loading] Learn number:", learn_number);

        if (learn_number == 0) {
            console.error("[loading] ❌ No class available, should redirect to lichhoc");
            //window.location.href = "https://topuni.hocmai.vn/lichhoc";
            return;
        }

        if (c_user != "") {
            console.log("[loading] ✅ User found, calling check()");
            await check(c_user, code, learn_number);
        } else {
            console.error("[loading] ❌ No user cookie, should redirect to lichhoc");
           // window.location.href = "https://topuni.hocmai.vn/lichhoc";
           return;
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
    //setInterval(loading, 1000000);

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
        console.log("[check] 🔍 Starting check:", { code, learn_number });
        var user = atobUTF8(c_user);
        console.log("[check] Decoded user:", user);

        if (code.length > 0 && user.length > 0) {
            try {
                data = {
                    user,
                    code,
                    learn_number,
                    status,
                };
                console.log("[check] Sending data to API:", data);

                const response = await fetch("https://api-stream.hocmai.net/check_user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer 1233tOk3WKdw30w75eilg6It83r",
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    console.error("[check] ❌ API response not OK:", response.status);
                    throw new Error("Network response was not ok");
                }

                const result = await response.json();
                console.log("[check] API result:", result);

                if (result.success) {
                    console.log("[check] ✅ Check successful, setting up intervals");
                    checkSessionInterval = setInterval(() => {
                        checkSessionStatus(user, code, learn_number);
                    }, 50000);

                    // Call log_learning API
                    try {
                        const log = await fetch("https://api-stream.hocmai.net/log_learning", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer 1233tOk3WKdw30w75eilg6It83r",
                            },
                            body: JSON.stringify(data),
                        });
                        console.log("[check] log_learning response:", log.status);
                    } catch (logError) {
                        console.warn("[check] ⚠️ log_learning failed (expected):", logError.message);
                    }

                    setInterval(async () => {
                        data.status = status;
                        try {
                            const log = await fetch("https://api-stream.hocmai.net/log_learning", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: "Bearer 1233tOk3WKdw30w75eilg6It83r",
                                },
                                body: JSON.stringify(data),
                            });
                        } catch (err) {
                            console.warn("[check] ⚠️ Periodic log_learning failed:", err.message);
                        }
                    }, 300000);

                    document.cookie = "_ladipage_unique_user_id=" + btoaUTF8(result.user.user);
                    document.cookie = "_ladipage_unique_user_name=" + btoaUTF8(result.user.name);
                    console.log("[check] ✅ Cookies set successfully");
                } else {
                    console.error("[check] ❌ Check failed, clearing cookie");
                    document.cookie = "_ladipage_unique_user_id=";
                    //window.location.href = "https://topuni.hocmai.vn/lichhoc";
                }
            } catch (error) {
                console.error("[check] ❌ Fetch error:", error);
                console.error("[check] Error message:", error.message);
                console.error("[check] Error stack:", error.stack);
                alert("Hệ thống đang quá tải, vui lòng thử lại sau");
            }
        } else {
            console.warn("[check] ⚠️ Invalid code or user:", { code: code.length, user: user.length });
        }
    }
