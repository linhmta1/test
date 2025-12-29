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
        {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("5/30/2025 19:45:00"),end_time:new Date("5/31/2025 1:00:00"),learn_number:1,lesson_name:"Tổng quan các kì thi tuyển sinh đại học năm 2026 & Chiến lược ôn luyện",teacher:"Mentor: Nguyễn Thị Khánh Linh; Hồ Thị Khánh Linh"},
    {code:"mentorsayhipen2026",subject:"[Tổng ôn PEN 2026] MentorsayHi",start_time:new Date("6/7/2025 19:45:00"),end_time:new Date("6/7/2025 23:59:00"),learn_number:2,lesson_name:"Chiến lược ôn luyện cân bằng cho kì thi TN THPT và HSA",teacher:"Mentor: Nguyễn Quang Minh"},
        {code:"mentorsayhihsa2026",subject:"[Tổng ôn HSA 2026] MentorsayHi",start_time:new Date("6/7/2025 19:45:00"),end_time:new Date("6/7/2025 23:59:00"),learn_number:2,lesson_name:"Chiến lược ôn luyện cân bằng cho kì thi TN THPT và HSA",teacher:"Mentor: Nguyễn Quang Minh"},
        {code:"mentorsayhipen2026",subject:"[Tổng ôn PEN 2026] MentorsayHi",start_time:new Date("6/14/2025 19:45:00"),end_time:new Date("6/14/2025 23:59:00"),learn_number:3,lesson_name:"Chiến lược ôn luyện cân bằng cho kì thi TN THPT và TSA",teacher:"Mentor: Nguyễn Quang Minh"},
        {code:"mentorsayhitsa2026",subject:"[Tổng ôn TSA 2026] MentorsayHi",start_time:new Date("6/14/2025 19:45:00"),end_time:new Date("6/14/2025 23:59:00"),learn_number:3,lesson_name:"Chiến lược ôn luyện cân bằng cho kì thi TN THPT và TSA",teacher:"Mentor: Nguyễn Quang Minh"},
    {code:"mentorsayhipen2026",subject:"[Tổng ôn PEN 2026] MentorsayHi",start_time:new Date("6/19/2025 19:45:00"),end_time:new Date("6/19/2025 23:30:00"),learn_number:4,lesson_name:"Chiến lược ôn luyện cân bằng cho kì thi TN THPT và V-ACT",teacher:"Mentor_Bùi Vĩnh Thọ"},
        {code:"mentorsayhivact2026",subject:"[Tổng ôn TSA 2026] MentorsayHi",start_time:new Date("6/19/2025 19:45:00"),end_time:new Date("6/19/2025 23:30:00"),learn_number:4,lesson_name:"Chiến lược ôn luyện cân bằng cho kì thi TN THPT và V-ACT",teacher:"Mentor_Bùi Vĩnh Thọ"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn PEN 2026] MentorsayHi",start_time:new Date("6/21/2025 19:45:00"),end_time:new Date("6/21/2025 23:59:00"),learn_number:5,lesson_name:"Chủ đề HÌNH HỌC PHẲNG",teacher:"Mentor: Nguyễn Đức Minh"},
    {code:"mentorsayhitsa2026",subject:"[Tổng ôn TSA 2026] MentorsayHi",start_time:new Date("6/28/2025 19:45:00"),end_time:new Date("6/28/2025 23:59:00"),learn_number:6,lesson_name:"Chủ đề SỐ HỌC",teacher:"Mentor: Nguyễn Đức Minh"},
     {code:"mentorsayhi2026",subject:"[Tổng ôn TSA 2026] MentorsayHi",start_time:new Date("7/5/2025 19:45:00"),end_time:new Date("7/5/2025 23:59:00"),learn_number:7,lesson_name:"Chủ đề HÌNH HỌC KHÔNG GIAN",teacher:"Mentor: Nguyễn Hợp Huy"},
        {code:"mentorsayhi2026",subject:"[Tổng ôn TSA 2026] MentorsayHi",start_time:new Date("7/12/2025 19:45:00"),end_time:new Date("7/12/2025 23:59:00"),learn_number:8,lesson_name:"Chủ đề HÀM SỐ VÀ ĐỒ THỊ",teacher:"Mentor: Nguyễn Đức Minh"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("7/19/2025 19:45:00"),end_time:new Date("7/19/2025 23:59:00"),learn_number:9,lesson_name:"Chủ đề MỘT SỐ YẾU TỐ THỐNG KÊ",teacher:"Mentor: Nguyễn Hợp Huy"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn TSA 2026] MentorsayHi",start_time:new Date("7/26/2025 19:45:00"),end_time:new Date("7/26/2025 23:59:00"),learn_number:10,lesson_name:"Chủ đề ĐẠI SỐ TỔ HỢP",teacher:"Mentor: Nguyễn Đức Minh"},
        {code:"mentorsayhi2026",subject:"[Tổng ôn TSA 2026] MentorsayHi",start_time:new Date("8/7/2025 19:45:00"),end_time:new Date("8/7/2025 23:59:00"),learn_number:11,lesson_name:"Chủ đề MỘT SỐ YẾU TỐ XÁC SUẤT",teacher:"Mentor: Nguyễn Hợp Huy"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("8/16/2025 19:45:00"),end_time:new Date("8/16/2025 23:59:00"),learn_number:13,lesson_name:"Chủ đề NGUYÊN HÀM. TÍCH PHÂN",teacher:"Mentor: Nguyễn Đức Minh"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("8/23/2025 19:45:00"),end_time:new Date("8/24/2025 02:00:00"),learn_number:14,lesson_name:"Chủ đề Vật lí lớp 10",teacher:"Mentor: Lê Thế Anh"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("8/30/2025 19:45:00"),end_time:new Date("8/31/2025 02:00:00"),learn_number:15,lesson_name:"Chủ đề Hóa học lớp 10",teacher:"Mentor: Hồ Thị Khánh Linh"},
        {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("9/6/2025 19:45:00"),end_time:new Date("9/7/2025 02:00:00"),learn_number:15,lesson_name:"Chủ đề Hóa học lớp 10",teacher:"Mentor: Hồ Thị Khánh Linh"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("9/13/2025 19:45:00"),end_time:new Date("9/13/2025 23:59:00"),learn_number:17,lesson_name:"Chủ đề Vật lí lớp 11",teacher:"Mentor: Lê Thế Anh"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("9/20/2025 19:45:00"),end_time:new Date("9/20/2025 23:59:00"),learn_number:18,lesson_name:"Chủ đề Hóa học lớp 11",teacher:"Mentor: Hồ Thị Khánh Linh"},
        {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("9/27/2025 19:45:00"),end_time:new Date("9/27/2025 23:59:00"),learn_number:19,lesson_name:"Chủ đề LŨY THỪA - MŨ - LOGARIT",teacher:"Mentor: Nguyễn Đức Minh"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("10/4/2025 19:45:00"),end_time:new Date("10/4/2025 23:59:00"),learn_number:20,lesson_name:"Chủ đề Vật lí nhiệt",teacher:"Mentor: Lê Thế Anh"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("10/11/2025 19:45:00"),end_time:new Date("10/11/2025 23:59:00"),learn_number:21,lesson_name:"Chủ đề Ester - lipid. Carbohydrate",teacher:"Mentor: Nguyễn Thị Khánh Linh"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("10/18/2025 19:45:00"),end_time:new Date("10/19/2025 00:30:00"),learn_number:22,lesson_name:"Chủ đề LƯỢNG GIÁC",teacher:"Mentor: Nguyễn Đức Minh"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("10/25/2025 19:45:00"),end_time:new Date("10/26/2025 00:30:00"),learn_number:23,lesson_name:"Chủ đề Khí lí tưởng",teacher:"Mentor: Lê Thế Anh"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("11/13/2025 20:45:00"),end_time:new Date("11/14/2025 00:50:00"),learn_number:24,lesson_name:"Chủ đề Hợp chất chứa nitrogen. Polymer",teacher:"Mentor: Hồ Thị Khánh Linh"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("11/08/2025 19:45:00"),end_time:new Date("11/09/2025 00:30:00"),learn_number:25,lesson_name:"Chủ đề PHƯƠNG TRÌNH - BẤT PHƯƠNG TRÌNH - HỆ BẤT PHƯƠNG TRÌNH",teacher:"Mentor: Lê Thế Anh"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("11/15/2025 19:45:00"),end_time:new Date("11/16/2025 00:30:00"),learn_number:26,lesson_name:"Chủ đề PHƯƠNG TRÌNH - BẤT PHƯƠNG TRÌNH - HỆ BẤT PHƯƠNG TRÌNH",teacher:"Mentor: Lê Thế Anh"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("11/22/2025 19:45:00"),end_time:new Date("11/23/2025 00:30:00"),learn_number:27,lesson_name:"Chủ đề Pin điện và điện phân. Đại cương về kim loại",teacher:"Mentor: Hồ Thị Khánh Linh"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("11/29/2025 19:45:00"),end_time:new Date("11/30/2025 00:30:00"),learn_number:28,lesson_name:"Chủ đề LOGIC VÀ PHÂN TÍCH SỐ LIỆU",teacher:"Mentor: Lê Thế Anh"},
         {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("12/13/2025 19:45:00"),end_time:new Date("12/14/2025 00:30:00"),learn_number:30,lesson_name:"Chủ đề Vật lí hạt nhân",teacher:"Mentor: Lê Thế Anh"},
         {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("12/06/2025 19:45:00"),end_time:new Date("12/07/2025 00:30:00"),learn_number:29,lesson_name:"Chủ đề Nguyên tố nhóm IA và nhóm IIA. Sơ lược về kim loại chuyển tiếp dãy thứ nhất và phức chất",teacher:"Mentor: Hồ Thị Khánh Linh"},
         {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("12/20/2025 19:45:00"),end_time:new Date("12/21/2025 00:30:00"),learn_number:31,lesson_name:"Chủ đề LOGIC",teacher:"Mentor: Nguyễn Đức Minh"},
    {code:"lopchuadetsa-181225",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("2025-12-18 19:15:00"),end_time:new Date("2025-12-18 23:30:00"),learn_number:1,lesson_name:"Chữa đề thi thử TSA đợt 1",teacher:"Mentor_Nguyễn Đình Trung"},
    {code:"lopchuadevcat-201225",subject:"[Luyện đề V-ACT] Mentor_V-ACT",start_time:new Date("2025-12-20 21:15:00"),end_time:new Date("2025-12-21 01:00:00"),learn_number:1,lesson_name:"Chữa đề thi thử V-ACT đợt 1",teacher:"Mentor_Lê Thế Anh"},
    {code:"lopchuadehsa-211225",subject:"[Luyện đề HSA] Mentor_HSA",start_time:new Date("2025-12-21 19:15:00"),end_time:new Date("2025-12-22 00:30:00"),learn_number:1,lesson_name:"Chữa đề thi thử HSA đợt 1",teacher:"Mentor_Hồ Thị Khánh Linh"},
        {code:"luyendementortsakg12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("2025-12-28 19:15:00"),end_time:new Date("2025-12-29 01:00:00"),learn_number:11,lesson_name:"Hướng dẫn đề luyện TSA26GH - Phần Tư duy Toán học",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendementortsatc12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("2025-12-28 19:15:00"),end_time:new Date("2025-12-29 01:00:00"),learn_number:11,lesson_name:"Hướng dẫn đề luyện TSA26GH - Phần Tư duy Toán học",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendelichsuhsakg12026",subject:"[Luyện đề HSA] Lịch sử",start_time:new Date("2025-12-28 19:15:00"),end_time:new Date("2025-12-29 01:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26CD - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
{code:"luyendementorvactkg12026",subject:"[Luyện đề V-ACT] Mentor_V-ACT",start_time:new Date("2025-12-28 19:15:00"),end_time:new Date("2025-12-29 01:00:00"),learn_number:3,lesson_name:"Hỗ trợ đề luyện Tiếng Anh V-ACT26_P1",teacher:"Mentor_Phạm Hoàng Nam"},
{code:"luyendetoanvactkg12026",subject:"[Luyện đề V-ACT] Toán",start_time:new Date("2025-12-28 19:15:00"),end_time:new Date("2025-12-29 01:00:00"),learn_number:12,lesson_name:"Toán_V-ACT26_Luyện đề 04",teacher:"Nguyễn Hoài Nam"},
{code:"luyendementorvacttc12026",subject:"[Luyện đề V-ACT] Mentor_V-ACT",start_time:new Date("2025-12-28 19:15:00"),end_time:new Date("2025-12-29 01:00:00"),learn_number:3,lesson_name:"Hỗ trợ đề luyện Tiếng Anh V-ACT26_P1",teacher:"Mentor_Phạm Hoàng Nam"},
{code:"luyendedinhtinhhsakg12026",subject:"[Luyện đề HSA] Ngữ văn",start_time:new Date("2025-12-28 21:15:00"),end_time:new Date("2025-12-29 03:00:00"),learn_number:5,lesson_name:"Luyện đề HSA26E - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendedinhtinhhsatc12026",subject:"[Luyện đề HSA] Ngữ văn",start_time:new Date("2025-12-28 21:15:00"),end_time:new Date("2025-12-29 03:00:00"),learn_number:5,lesson_name:"Luyện đề HSA26E - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2025-12-29 19:15:00"),end_time:new Date("2025-12-30 01:00:00"),learn_number:26,lesson_name:"Luyện đề TSA26I- Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendehoahochsakg12026",subject:"[Luyện đề HSA] Hóa học",start_time:new Date("2025-12-29 19:15:00"),end_time:new Date("2025-12-30 01:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26CD - Phần Khoa học Hóa học",teacher:"Vũ Tuấn Minh"},
{code:"luyendetienganhvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2025-12-29 19:15:00"),end_time:new Date("2025-12-30 01:00:00"),learn_number:14,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 04",teacher:"Nguyễn Thanh Hương"},
{code:"luyendekhoahocslkhvactkg12026",subject:"[Luyện đề V-ACT] SLKH",start_time:new Date("2025-12-29 19:15:00"),end_time:new Date("2025-12-30 01:00:00"),learn_number:13,lesson_name:"SLKH_V-ACT26_Luyện đề 234_KHTN",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetienganhvacttc12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2025-12-29 19:15:00"),end_time:new Date("2025-12-30 01:00:00"),learn_number:14,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 04",teacher:"Nguyễn Thanh Hương"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("2025-12-29 21:15:00"),end_time:new Date("2025-12-30 03:00:00"),learn_number:25,lesson_name:"Luyện đề TSA26H - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahoctsatc12026",subject:"[Luyện đề TSA] KH",start_time:new Date("2025-12-29 21:15:00"),end_time:new Date("2025-12-30 03:00:00"),learn_number:25,lesson_name:"Luyện đề TSA26H - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("2025-12-30 19:15:00"),end_time:new Date("2025-12-31 01:00:00"),learn_number:25,lesson_name:"Luyện đề TSA26H - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendedinhtinhhsakg12026",subject:"[Luyện đề HSA] Ngữ văn",start_time:new Date("2025-12-30 19:15:00"),end_time:new Date("2025-12-31 01:00:00"),learn_number:5,lesson_name:"Luyện đề HSA26E - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendehoahochsakg12026",subject:"[Luyện đề HSA] Hóa học",start_time:new Date("2025-12-30 20:45:00"),end_time:new Date("2025-12-31 02:30:00"),learn_number:2,lesson_name:"Luyện đề HSA26CD - Phần Khoa học Hóa học",teacher:"Vũ Tuấn Minh"},
{code:"luyendetienganhvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2025-12-30 20:45:00"),end_time:new Date("2025-12-31 02:30:00"),learn_number:14,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 04",teacher:"Nguyễn Thanh Hương"},
{code:"luyendedinhluonghsakg12026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2025-12-30 21:15:00"),end_time:new Date("2025-12-31 03:00:00"),learn_number:5,lesson_name:"Luyện đề HSA26E - Phần Tư duy Định lượng",teacher:"Nguyễn Đức Tài"},
{code:"luyendedinhluonghsatc12026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2025-12-30 21:15:00"),end_time:new Date("2025-12-31 03:00:00"),learn_number:5,lesson_name:"Luyện đề HSA26E - Phần Tư duy Định lượng",teacher:"Nguyễn Đức Tài"},
{code:"luyendekhoahocptslvactkg12026",subject:"[Luyện đề V-ACT] LG&PTSL3",start_time:new Date("2025-12-30 21:15:00"),end_time:new Date("2025-12-31 03:00:00"),learn_number:15,lesson_name:"LG&PTSL_V-ACT26_Luyện đề 34",teacher:"Nguyễn Hoài Nam"},
{code:"luyendekhoahocptslvacttc12026",subject:"[Luyện đề V-ACT] LG&PTSL3",start_time:new Date("2025-12-30 21:15:00"),end_time:new Date("2025-12-31 03:00:00"),learn_number:15,lesson_name:"LG&PTSL_V-ACT26_Luyện đề 34",teacher:"Nguyễn Hoài Nam"},
{code:"luyendekhoahocptslvactkg12026",subject:"[Luyện đề V-ACT] LG&PTSL3",start_time:new Date("2025-12-31 19:15:00"),end_time:new Date("2026-01-01 01:00:00"),learn_number:15,lesson_name:"LG&PTSL_V-ACT26_Luyện đề 34",teacher:"Nguyễn Hoài Nam"},
{code:"luyendedinhtinhhsakg12026",subject:"[Luyện đề HSA] Ngữ văn",start_time:new Date("2025-12-31 20:45:00"),end_time:new Date("2026-01-01 02:30:00"),learn_number:5,lesson_name:"Luyện đề HSA26E - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendedochieutsakg12026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("2025-12-31 21:15:00"),end_time:new Date("2026-01-01 03:00:00"),learn_number:28,lesson_name:"Luyện đề TSA26IJ - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"luyendedochieutsatc12026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("2025-12-31 21:15:00"),end_time:new Date("2026-01-01 03:00:00"),learn_number:28,lesson_name:"Luyện đề TSA26IJ - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"luyendementorhsakg12026",subject:"[Luyện đề HSA] Mentor_HSA",start_time:new Date("2025-12-31 21:15:00"),end_time:new Date("2026-01-01 03:00:00"),learn_number:6,lesson_name:"Mentor 06_Hỗ trợ đề live HSA26DE phần Định lượng",teacher:"Mentor_Hồ Thị Khánh Linh"},
{code:"luyendementorhsatc12026",subject:"[Luyện đề HSA] Mentor_HSA",start_time:new Date("2025-12-31 21:15:00"),end_time:new Date("2026-01-01 03:00:00"),learn_number:6,lesson_name:"Mentor 06_Hỗ trợ đề live HSA26DE phần Định lượng",teacher:"Mentor_Hồ Thị Khánh Linh"},
{code:"luyendedochieutsakg12026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("2026-01-01 19:15:00"),end_time:new Date("2026-01-02 01:00:00"),learn_number:28,lesson_name:"Luyện đề TSA26IJ - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"luyendedinhluonghsakg12026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-01-01 19:15:00"),end_time:new Date("2026-01-02 01:00:00"),learn_number:5,lesson_name:"Luyện đề HSA26E - Phần Tư duy Định lượng",teacher:"Nguyễn Đức Tài"},
{code:"luyendekhoahocslkhvactkg12026",subject:"[Luyện đề V-ACT] SLKH",start_time:new Date("2026-01-01 19:15:00"),end_time:new Date("2026-01-02 01:00:00"),learn_number:13,lesson_name:"SLKH_V-ACT26_Luyện đề 234_KHTN",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-02 19:15:00"),end_time:new Date("2026-01-03 01:00:00"),learn_number:29,lesson_name:"Luyện đề TSA26J - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("2026-01-02 19:15:00"),end_time:new Date("2026-01-03 01:00:00"),learn_number:25,lesson_name:"Luyện đề TSA26H - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetoantsatc12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-02 19:15:00"),end_time:new Date("2026-01-03 01:00:00"),learn_number:29,lesson_name:"Luyện đề TSA26J - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetienganhhsakg12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-02 19:15:00"),end_time:new Date("2026-01-03 01:00:00"),learn_number:5,lesson_name:"Luyện đề HSA26E - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendetienganhhsatc12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-02 19:15:00"),end_time:new Date("2026-01-03 01:00:00"),learn_number:5,lesson_name:"Luyện đề HSA26E - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendetienganhvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-01-02 19:15:00"),end_time:new Date("2026-01-03 01:00:00"),learn_number:14,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 04",teacher:"Nguyễn Thanh Hương"},
{code:"luyendekhoahocptslvactkg12026",subject:"[Luyện đề V-ACT] LG&PTSL3",start_time:new Date("2026-01-03 19:15:00"),end_time:new Date("2026-01-04 01:00:00"),learn_number:15,lesson_name:"LG&PTSL_V-ACT26_Luyện đề 34",teacher:"Nguyễn Hoài Nam"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-03 20:45:00"),end_time:new Date("2026-01-04 02:30:00"),learn_number:29,lesson_name:"Luyện đề TSA26J - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendementorvactkg12026",subject:"[Luyện đề V-ACT] Mentor_V-ACT",start_time:new Date("2026-01-03 21:15:00"),end_time:new Date("2026-01-04 03:00:00"),learn_number:4,lesson_name:"Hỗ trợ đề luyện Toán-Tiếng Việt V-ACT26_02-03",teacher:"Mentor_Lê Thế Anh"},
{code:"luyendementorvacttc12026",subject:"[Luyện đề V-ACT] Mentor_V-ACT",start_time:new Date("2026-01-03 21:15:00"),end_time:new Date("2026-01-04 03:00:00"),learn_number:4,lesson_name:"Hỗ trợ đề luyện Toán-Tiếng Việt V-ACT26_02-03",teacher:"Mentor_Lê Thế Anh"},
{code:"luyendedochieutsakg12026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("2026-01-04 19:15:00"),end_time:new Date("2026-01-05 01:00:00"),learn_number:28,lesson_name:"Luyện đề TSA26IJ - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"luyendedinhluonghsakg12026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-01-04 19:15:00"),end_time:new Date("2026-01-05 01:00:00"),learn_number:5,lesson_name:"Luyện đề HSA26E - Phần Tư duy Định lượng",teacher:"Nguyễn Đức Tài"},
{code:"luyendesinhhochsakg12026",subject:"[Luyện đề HSA] Sinh học",start_time:new Date("2026-01-04 21:15:00"),end_time:new Date("2026-01-05 03:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26CD - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
{code:"luyendesinhhochsatc12026",subject:"[Luyện đề HSA] Sinh học",start_time:new Date("2026-01-04 21:15:00"),end_time:new Date("2026-01-05 03:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26CD - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("2026-01-05 19:15:00"),end_time:new Date("2026-01-06 01:00:00"),learn_number:29,lesson_name:"Luyện đề TSA26J - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetienganhhsakg12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-05 19:15:00"),end_time:new Date("2026-01-06 01:00:00"),learn_number:5,lesson_name:"Luyện đề HSA26E - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendetienganhvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-01-05 19:15:00"),end_time:new Date("2026-01-06 01:00:00"),learn_number:16,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 05",teacher:"Nguyễn Thanh Hương"},
{code:"luyendetienganhvacttc12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-01-05 19:15:00"),end_time:new Date("2026-01-06 01:00:00"),learn_number:16,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 05",teacher:"Nguyễn Thanh Hương"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("2026-01-05 21:15:00"),end_time:new Date("2026-01-06 03:00:00"),learn_number:27,lesson_name:"Luyện đề TSA26I - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahoctsatc12026",subject:"[Luyện đề TSA] KH",start_time:new Date("2026-01-05 21:15:00"),end_time:new Date("2026-01-06 03:00:00"),learn_number:27,lesson_name:"Luyện đề TSA26I - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("2026-01-06 19:15:00"),end_time:new Date("2026-01-07 01:00:00"),learn_number:27,lesson_name:"Luyện đề TSA26I - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendementorvactkg12026",subject:"[Luyện đề V-ACT] Mentor_V-ACT",start_time:new Date("2026-01-06 19:15:00"),end_time:new Date("2026-01-07 01:00:00"),learn_number:5,lesson_name:"Hỗ trợ đề luyện Tư duy khoa học 01-04",teacher:"Mentor_Lê Thế Anh"},
{code:"luyendementorvacttc12026",subject:"[Luyện đề V-ACT] Mentor_V-ACT",start_time:new Date("2026-01-06 19:15:00"),end_time:new Date("2026-01-07 01:00:00"),learn_number:5,lesson_name:"Hỗ trợ đề luyện Tư duy khoa học 01-04",teacher:"Mentor_Lê Thế Anh"},
{code:"luyendetienganhhsakg12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-06 20:45:00"),end_time:new Date("2026-01-07 02:30:00"),learn_number:5,lesson_name:"Luyện đề HSA26E - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendetienganhvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-01-06 20:45:00"),end_time:new Date("2026-01-07 02:30:00"),learn_number:16,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 05",teacher:"Nguyễn Thanh Hương"},
{code:"luyendedinhluonghsakg12026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-01-06 21:15:00"),end_time:new Date("2026-01-07 03:00:00"),learn_number:6,lesson_name:"Luyện đề HSA26F - Phần Tư duy Định lượng",teacher:"Phạm Thái Sơn"},
{code:"luyendedinhluonghsatc12026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-01-06 21:15:00"),end_time:new Date("2026-01-07 03:00:00"),learn_number:6,lesson_name:"Luyện đề HSA26F - Phần Tư duy Định lượng",teacher:"Phạm Thái Sơn"},
{code:"luyendesinhhochsakg12026",subject:"[Luyện đề HSA] Sinh học",start_time:new Date("2026-01-07 19:15:00"),end_time:new Date("2026-01-08 01:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26CD - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
{code:"luyendedinhtinhhsakg12026",subject:"[Luyện đề HSA] Ngữ văn",start_time:new Date("2026-01-07 21:15:00"),end_time:new Date("2026-01-08 03:00:00"),learn_number:6,lesson_name:"Luyện đề HSA26F - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendedinhtinhhsatc12026",subject:"[Luyện đề HSA] Ngữ văn",start_time:new Date("2026-01-07 21:15:00"),end_time:new Date("2026-01-08 03:00:00"),learn_number:6,lesson_name:"Luyện đề HSA26F - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendedinhluonghsakg12026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-01-08 19:15:00"),end_time:new Date("2026-01-09 01:00:00"),learn_number:6,lesson_name:"Luyện đề HSA26F - Phần Tư duy Định lượng",teacher:"Phạm Thái Sơn"},
{code:"luyendesinhhochsakg12026",subject:"[Luyện đề HSA] Sinh học",start_time:new Date("2026-01-08 19:15:00"),end_time:new Date("2026-01-09 01:00:00"),learn_number:2,lesson_name:"Luyện đề HSA26CD - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
{code:"luyendevatlihsakg12026",subject:"[Luyện đề HSA] Vật lí",start_time:new Date("2026-01-08 21:15:00"),end_time:new Date("2026-01-09 03:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26EF - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendevatlihsatc12026",subject:"[Luyện đề HSA] Vật lí",start_time:new Date("2026-01-08 21:15:00"),end_time:new Date("2026-01-09 03:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26EF - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendetoanvactkg12026",subject:"[Luyện đề V-ACT] Toán",start_time:new Date("2026-01-08 21:15:00"),end_time:new Date("2026-01-09 03:00:00"),learn_number:17,lesson_name:"Toán_V-ACT26_Luyện đề 05",teacher:"Nguyễn Hoài Nam"},
{code:"luyendetoanvacttc12026",subject:"[Luyện đề V-ACT] Toán",start_time:new Date("2026-01-08 21:15:00"),end_time:new Date("2026-01-09 03:00:00"),learn_number:17,lesson_name:"Toán_V-ACT26_Luyện đề 05",teacher:"Nguyễn Hoài Nam"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("2026-01-09 19:15:00"),end_time:new Date("2026-01-10 01:00:00"),learn_number:27,lesson_name:"Luyện đề TSA26I - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetienganhhsakg12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-09 19:15:00"),end_time:new Date("2026-01-10 01:00:00"),learn_number:6,lesson_name:"Luyện đề HSA26F - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendedinhtinhhsakg12026",subject:"[Luyện đề HSA] Ngữ văn",start_time:new Date("2026-01-09 19:15:00"),end_time:new Date("2026-01-10 01:00:00"),learn_number:6,lesson_name:"Luyện đề HSA26F - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendetienganhhsatc12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-09 19:15:00"),end_time:new Date("2026-01-10 01:00:00"),learn_number:6,lesson_name:"Luyện đề HSA26F - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendetoanvactkg12026",subject:"[Luyện đề V-ACT] Toán",start_time:new Date("2026-01-09 19:15:00"),end_time:new Date("2026-01-10 01:00:00"),learn_number:17,lesson_name:"Toán_V-ACT26_Luyện đề 05",teacher:"Nguyễn Hoài Nam"},
{code:"luyendetienganhvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-01-09 19:15:00"),end_time:new Date("2026-01-10 01:00:00"),learn_number:16,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 05",teacher:"Nguyễn Thanh Hương"},
{code:"luyendedinhtinhhsakg12026",subject:"[Luyện đề HSA] Ngữ văn",start_time:new Date("2026-01-10 20:45:00"),end_time:new Date("2026-01-11 02:30:00"),learn_number:6,lesson_name:"Luyện đề HSA26F - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
{code:"luyendekhoahocslkhvactkg12026",subject:"[Luyện đề V-ACT] SLKH",start_time:new Date("2026-01-10 21:15:00"),end_time:new Date("2026-01-11 03:00:00"),learn_number:18,lesson_name:"SLKH_V-ACT26_Luyện đề 234_KHXH",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahocslkhvacttc12026",subject:"[Luyện đề V-ACT] SLKH",start_time:new Date("2026-01-10 21:15:00"),end_time:new Date("2026-01-11 03:00:00"),learn_number:18,lesson_name:"SLKH_V-ACT26_Luyện đề 234_KHXH",teacher:"Vũ Khắc Ngọc"},
{code:"luyendementorhsakg12026",subject:"[Luyện đề HSA] Mentor_HSA",start_time:new Date("2026-01-11 19:15:00"),end_time:new Date("2026-01-12 01:00:00"),learn_number:7,lesson_name:"Mentor 07_Hỗ trợ đề tự luyện - Phần Tiếng Anh",teacher:"Mentor_Võ Minh Ngọc"},
{code:"luyendevatlihsakg12026",subject:"[Luyện đề HSA] Vật lí",start_time:new Date("2026-01-11 19:15:00"),end_time:new Date("2026-01-12 01:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26EF - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendedinhluonghsakg12026",subject:"[Luyện đề HSA] Toán",start_time:new Date("2026-01-11 19:15:00"),end_time:new Date("2026-01-12 01:00:00"),learn_number:6,lesson_name:"Luyện đề HSA26F - Phần Tư duy Định lượng",teacher:"Phạm Thái Sơn"},
{code:"luyendementorhsatc12026",subject:"[Luyện đề HSA] Mentor_HSA",start_time:new Date("2026-01-11 19:15:00"),end_time:new Date("2026-01-12 01:00:00"),learn_number:7,lesson_name:"Mentor 07_Hỗ trợ đề tự luyện - Phần Tiếng Anh",teacher:"Mentor_Võ Minh Ngọc"},
{code:"luyendetoanvactkg12026",subject:"[Luyện đề V-ACT] Toán",start_time:new Date("2026-01-11 19:15:00"),end_time:new Date("2026-01-12 01:00:00"),learn_number:17,lesson_name:"Toán_V-ACT26_Luyện đề 05",teacher:"Nguyễn Hoài Nam"},
{code:"luyendetienganhhsakg12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-12 19:15:00"),end_time:new Date("2026-01-13 01:00:00"),learn_number:6,lesson_name:"Luyện đề HSA26F - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendevatlihsakg12026",subject:"[Luyện đề HSA] Vật lí",start_time:new Date("2026-01-12 19:15:00"),end_time:new Date("2026-01-13 01:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26EF - Phần Khoa học Vật lí",teacher:"Nguyễn Hữu Tình"},
{code:"luyendetienganhvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-01-12 19:15:00"),end_time:new Date("2026-01-13 01:00:00"),learn_number:19,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 06",teacher:"Nguyễn Thanh Hương"},
{code:"luyendekhoahocslkhvactkg12026",subject:"[Luyện đề V-ACT] SLKH",start_time:new Date("2026-01-12 19:15:00"),end_time:new Date("2026-01-13 01:00:00"),learn_number:18,lesson_name:"SLKH_V-ACT26_Luyện đề 234_KHXH",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetienganhvacttc12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-01-12 19:15:00"),end_time:new Date("2026-01-13 01:00:00"),learn_number:19,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 06",teacher:"Nguyễn Thanh Hương"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("2026-01-12 21:15:00"),end_time:new Date("2026-01-13 03:00:00"),learn_number:30,lesson_name:"Luyện đề TSA26J - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahoctsatc12026",subject:"[Luyện đề TSA] KH",start_time:new Date("2026-01-12 21:15:00"),end_time:new Date("2026-01-13 03:00:00"),learn_number:30,lesson_name:"Luyện đề TSA26J - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("2026-01-13 19:15:00"),end_time:new Date("2026-01-14 01:00:00"),learn_number:30,lesson_name:"Luyện đề TSA26J - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetiengvietvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Việt",start_time:new Date("2026-01-13 19:15:00"),end_time:new Date("2026-01-14 01:00:00"),learn_number:20,lesson_name:"Tiếng Việt_V-ACT26_Luyện đề 04",teacher:"Văn Trịnh Quỳnh An"},
{code:"luyendetiengvietvacttc12026",subject:"[Luyện đề V-ACT] Tiếng Việt",start_time:new Date("2026-01-13 19:15:00"),end_time:new Date("2026-01-14 01:00:00"),learn_number:20,lesson_name:"Tiếng Việt_V-ACT26_Luyện đề 04",teacher:"Văn Trịnh Quỳnh An"},
{code:"luyendetienganhhsakg12026",subject:"[Luyện đề HSA] Tiếng Anh",start_time:new Date("2026-01-13 20:45:00"),end_time:new Date("2026-01-14 02:30:00"),learn_number:6,lesson_name:"Luyện đề HSA26F - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
{code:"luyendetienganhvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Anh",start_time:new Date("2026-01-13 20:45:00"),end_time:new Date("2026-01-14 02:30:00"),learn_number:19,lesson_name:"Tiếng Anh_V-ACT26_Luyện đề 06",teacher:"Nguyễn Thanh Hương"},
{code:"luyendelichsuhsakg12026",subject:"[Luyện đề HSA] Lịch sử",start_time:new Date("2026-01-13 21:15:00"),end_time:new Date("2026-01-14 03:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26EF - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
{code:"luyendelichsuhsatc12026",subject:"[Luyện đề HSA] Lịch sử",start_time:new Date("2026-01-13 21:15:00"),end_time:new Date("2026-01-14 03:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26EF - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
{code:"luyendedialihsakg12026",subject:"[Luyện đề HSA] Địa lí",start_time:new Date("2026-01-14 19:15:00"),end_time:new Date("2026-01-15 01:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26EF - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
{code:"luyendedialihsatc12026",subject:"[Luyện đề HSA] Địa lí",start_time:new Date("2026-01-14 19:15:00"),end_time:new Date("2026-01-15 01:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26EF - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
{code:"luyendetiengvietvactkg12026",subject:"[Luyện đề V-ACT] Tiếng Việt",start_time:new Date("2026-01-14 19:15:00"),end_time:new Date("2026-01-15 01:00:00"),learn_number:20,lesson_name:"Tiếng Việt_V-ACT26_Luyện đề 04",teacher:"Văn Trịnh Quỳnh An"},
{code:"luyendelichsuhsakg12026",subject:"[Luyện đề HSA] Lịch sử",start_time:new Date("2026-01-15 19:15:00"),end_time:new Date("2026-01-16 01:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26EF - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
{code:"luyendekhoahocslkhvactkg12026",subject:"[Luyện đề V-ACT] SLKH",start_time:new Date("2026-01-15 19:15:00"),end_time:new Date("2026-01-16 01:00:00"),learn_number:18,lesson_name:"SLKH_V-ACT26_Luyện đề 234_KHXH",teacher:"Vũ Khắc Ngọc"},
{code:"luyendesinhhochsakg12026",subject:"[Luyện đề HSA] Sinh học",start_time:new Date("2026-01-15 21:15:00"),end_time:new Date("2026-01-16 03:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26EF - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
{code:"luyendesinhhochsatc12026",subject:"[Luyện đề HSA] Sinh học",start_time:new Date("2026-01-15 21:15:00"),end_time:new Date("2026-01-16 03:00:00"),learn_number:3,lesson_name:"Luyện đề HSA26EF - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
{code:"luyendetoanvactkg12026",subject:"[Luyện đề V-ACT] Toán",start_time:new Date("2026-01-15 21:15:00"),end_time:new Date("2026-01-16 03:00:00"),learn_number:21,lesson_name:"Toán_V-ACT26_Luyện đề 06",teacher:"Nguyễn Hoài Nam"},
{code:"luyendetoanvacttc12026",subject:"[Luyện đề V-ACT] Toán",start_time:new Date("2026-01-15 21:15:00"),end_time:new Date("2026-01-16 03:00:00"),learn_number:21,lesson_name:"Toán_V-ACT26_Luyện đề 06",teacher:"Nguyễn Hoài Nam"},
    {code:"demo-topuni",subject:"[Demo] Demo TopUni",start_time:new Date("2025-12-29 10:15:00"),end_time:new Date("2025-12-29 20:00:00"),learn_number:1,lesson_name:"Demo TopUni Buổi 1",teacher:"Nguyễn Ngọc Tú"},
    {code:"demo-topuni2",subject:"[Demo] Demo TopUni",start_time:new Date("2025-12-29 10:15:00"),end_time:new Date("2025-12-29 23:00:00"),learn_number:2,lesson_name:"Demo TopUni Buổi 1",teacher:"Nguyễn Ngọc Tú"},
        {code:"demo",subject:"[Demo] Demo",start_time:new Date("5/22/2025 14:22:00"),end_time:new Date("5/22/2025 16:27:00"),learn_number:1,lesson_name:"Luyện đề Demo",teacher:"HOCMAI"}
    ];

const lichhoctest = [
    { code: "demo-topuni", learn_number: 1 },    
    { code: "demo-topuni", learn_number: 2 },
        { code: "demo-topuni", learn_number: 3 },
        { code: "luyendementortsakg12026", learn_number: 11 },
          { code: "luyendementortsatc12026", learn_number: 11 },
          { code: "luyendelichsuhsakg12026", learn_number: 2 },
          { code: "luyendetoanvactkg12026", learn_number: 12 },
          { code: "luyendedinhtinhhsakg12026", learn_number: 5 },
          { code: "luyendedinhtinhhsatc12026", learn_number: 5 }
    ];

    const boxList = [
        {code:"mentorsayhihsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"8e41bec4f7cad494",tid:"56"},
        {code:"mentorsayhitsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"8e41bec4f7cad494",tid:"56"},
        {code:"mentorsayhivact",boxid:"952000",boxtag:"3Ot9Nu",tkey:"8e41bec4f7cad494",tid:"56"},
        {code:"mentorsayhipen",boxid:"952000",boxtag:"3Ot9Nu",tkey:"8e41bec4f7cad494",tid:"56"},
        {code:"luyendelichsuhsa",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b2c8ea677756b0ae",tid:"57"},
        {code:"mentorsayhi2026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"8b3d1a7bebece17a",tid:"106"},
        {code:"mentorsayhipen2026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"8b3d1a7bebece17a",tid:"106"},
        {code:"mentorsayhihsa2026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"8b3d1a7bebece17a",tid:"106"},
         {code:"mentorsayhitsa2026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"8b3d1a7bebece17a",tid:"106"},
        {code:"mentorsayhivact2026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"8b3d1a7bebece17a",tid:"106"},
        {code:"tongonvatli2026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"76b5c3918fdfcc8e",tid:"34"},
        {code:"tongontienganh2026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"0704f4245822300e",tid:"36"},
         {code:"tongonhoahoc2026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"4a46e690b7bfeea8",tid:"35"},
        {code:"tongonsinhhoc2026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"f66f70066c946ce7",tid:"37"},
        {code:"tongontoan2026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"715016736bed7c2c",tid:"33"},
        {code:"tongonnguvan2026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"0ce8bcdfb8ff943d",tid:"38"},
        {code:"luyendetoantsakg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"2e7427603c9ccdc1",tid:"54"},
        {code:"luyendedochieutsakg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"ebfdff07059e8eee",tid:"52"},
        {code:"luyendekhoahoctsakg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"3aaeabec8dd6fd1e",tid:"53"},
        {code:"luyendetoantsatc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"2e7427603c9ccdc1",tid:"54"},
        {code:"luyendedochieutsatc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"ebfdff07059e8eee",tid:"52"},
        {code:"luyendekhoahoctsatc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"3aaeabec8dd6fd1e",tid:"53"},
        {code:"luyendementortsakg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"d278bb49ac6ae9ac",tid:"55"},
        {code:"lopchuadetsa-181225",boxid:"952000",boxtag:"3Ot9Nu",tkey:"d278bb49ac6ae9ac",tid:"55"},
        {code:"luyendementortsatc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"d278bb49ac6ae9ac",tid:"55"},
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
        {code:"luyendementorhsakg12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"de7ba707b755af74",tid:"79"},
        {code:"luyendementorhsatc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"de7ba707b755af74",tid:"79"},
        {code:"lopchuadehsa-211225",boxid:"952000",boxtag:"3Ot9Nu",tkey:"de7ba707b755af74",tid:"79"},
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
{code:"lopchuadevcat-201225",boxid:"952000",boxtag:"3Ot9Nu",tkey:"37aa69db8596da24",tid:"71"},
        { code: "demo-topuni", boxid: "952000", boxtag: "3Ot9Nu", tkey: "5cec50d8a8e9397e", tid: "3" },
        { code: "demo-topuni2", boxid: "952000", boxtag: "3Ot9Nu", tkey: "5cec50d8a8e9397e", tid: "3" },
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
                    }, 500); // 1000 milliseconds = 1 second
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
