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
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("11/06/2025 19:45:00"),end_time:new Date("11/07/2025 00:30:00"),learn_number:24,lesson_name:"Chủ đề Hợp chất chứa nitrogen. Polymer",teacher:"Mentor_Nguyễn Đình Trung"},
    {code:"mentorsayhi2026",subject:"[Tổng ôn 2026] MentorsayHi",start_time:new Date("11/08/2025 19:45:00"),end_time:new Date("11/09/2025 00:30:00"),learn_number:25,lesson_name:"Chủ đề PHƯƠNG TRÌNH - BẤT PHƯƠNG TRÌNH - HỆ BẤT PHƯƠNG TRÌNH",teacher:"Mentor: Hồ Thị Khánh Linh"},
        {code:"tongonvatli2026",subject:"[Tổng ôn] Vật lí",start_time:new Date("10/29/2025 19:15:00"),end_time:new Date("10/30/2025 1:00:00"),learn_number:8,lesson_name:"Ôn tập chủ đề Trường từ_P2",teacher:"Nguyễn Hữu Tình"},
{code:"tongonnguvan2026",subject:"[Tổng ôn] Ngữ văn",start_time:new Date("10/29/2025 21:15:00"),end_time:new Date("10/30/2025 3:00:00"),learn_number:8,lesson_name:"Ôn tập chuyên đề: Kiến thức làm văn",teacher:"Vương Thúy Hằng"},
{code:"luyendementortsakg12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("10/29/2025 21:15:00"),end_time:new Date("10/30/2025 3:00:00"),learn_number:1,lesson_name:"Hướng dẫn đề tự luyện Khoa học_phần PP/KN",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendementortsatc12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("10/29/2025 21:15:00"),end_time:new Date("10/30/2025 3:00:00"),learn_number:1,lesson_name:"Hướng dẫn đề tự luyện Khoa học_phần PP/KN",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"tongonsinhhoc2026",subject:"[Tổng ôn] Sinh học",start_time:new Date("10/30/2025 19:15:00"),end_time:new Date("10/31/2025 1:00:00"),learn_number:8,lesson_name:"Tổng ôn Sinh thái học (P2)",teacher:"Phạm Ngọc Hà"},
{code:"tongontoan2026",subject:"[Tổng ôn] Toán",start_time:new Date("10/30/2025 20:45:00"),end_time:new Date("10/31/2025 2:30:00"),learn_number:8,lesson_name:"Ôn tập chủ đề Đại số (P2)",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonvatli2026",subject:"[Tổng ôn] Vật lí",start_time:new Date("10/30/2025 21:15:00"),end_time:new Date("10/31/2025 3:00:00"),learn_number:9,lesson_name:"Ôn tập chủ đề Vật lí hạt nhân_P1",teacher:"Nguyễn Hữu Tình"},
{code:"tongontienganh2026",subject:"[Tổng ôn] Tiếng Anh",start_time:new Date("10/31/2025 19:15:00"),end_time:new Date("11/1/2025 1:00:00"),learn_number:9,lesson_name:"Idioms",teacher:"Nguyễn Trung Nguyên"},
{code:"tongonnguvan2026",subject:"[Tổng ôn] Ngữ văn",start_time:new Date("10/31/2025 19:15:00"),end_time:new Date("11/1/2025 1:00:00"),learn_number:8,lesson_name:"Ôn tập chuyên đề: Kiến thức làm văn",teacher:"Vương Thúy Hằng"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("10/31/2025 19:15:00"),end_time:new Date("11/1/2025 1:00:00"),learn_number:6,lesson_name:"Luyện đề TSA26A - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("10/31/2025 19:15:00"),end_time:new Date("11/1/2025 1:00:00"),learn_number:5,lesson_name:"PP/KN xử lí phần thi Tư duy khoa học_P2",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetoantsatc12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("10/31/2025 19:15:00"),end_time:new Date("11/1/2025 1:00:00"),learn_number:6,lesson_name:"Luyện đề TSA26A - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonsinhhoc2026",subject:"[Tổng ôn] Sinh học",start_time:new Date("11/1/2025 19:15:00"),end_time:new Date("11/2/2025 1:00:00"),learn_number:8,lesson_name:"Tổng ôn Sinh thái học (P2)",teacher:"Phạm Ngọc Hà"},
{code:"tongonnguvan2026",subject:"[Tổng ôn] Ngữ văn",start_time:new Date("11/1/2025 19:15:00"),end_time:new Date("11/2/2025 1:00:00"),learn_number:8,lesson_name:"Ôn tập chuyên đề: Kiến thức làm văn",teacher:"Vương Thúy Hằng"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/1/2025 20:45:00"),end_time:new Date("11/2/2025 2:30:00"),learn_number:6,lesson_name:"Luyện đề TSA26A - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonhoahoc2026",subject:"[Tổng ôn] Hóa học",start_time:new Date("11/1/2025 21:15:00"),end_time:new Date("11/2/2025 3:00:00"),learn_number:9,lesson_name:"Tổng ôn chủ đề Pin điện - điện phân và Đại cương kim loại hay lạ khó",teacher:"Vũ Tuấn Minh"},
{code:"tongonvatli2026",subject:"[Tổng ôn] Vật lí",start_time:new Date("11/2/2025 19:15:00"),end_time:new Date("11/3/2025 1:00:00"),learn_number:9,lesson_name:"Ôn tập chủ đề Vật lí hạt nhân_P1",teacher:"Nguyễn Hữu Tình"},
{code:"tongontoan2026",subject:"[Tổng ôn] Toán",start_time:new Date("11/2/2025 19:15:00"),end_time:new Date("11/3/2025 1:00:00"),learn_number:8,lesson_name:"Ôn tập chủ đề Đại số (P2)",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendementortsakg12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("11/2/2025 19:15:00"),end_time:new Date("11/3/2025 1:00:00"),learn_number:2,lesson_name:"Hướng dẫn đề tự luyện Toán_phần PP/KN",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendementortsatc12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("11/2/2025 19:15:00"),end_time:new Date("11/3/2025 1:00:00"),learn_number:2,lesson_name:"Hướng dẫn đề tự luyện Toán_phần PP/KN",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"tongontienganh2026",subject:"[Tổng ôn] Tiếng Anh",start_time:new Date("11/3/2025 19:15:00"),end_time:new Date("11/4/2025 1:00:00"),learn_number:9,lesson_name:"Idioms",teacher:"Nguyễn Trung Nguyên"},
{code:"tongonhoahoc2026",subject:"[Tổng ôn] Hóa học",start_time:new Date("11/3/2025 19:15:00"),end_time:new Date("11/4/2025 1:00:00"),learn_number:9,lesson_name:"Tổng ôn chủ đề Pin điện - điện phân và Đại cương kim loại hay lạ khó",teacher:"Vũ Tuấn Minh"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/3/2025 19:15:00"),end_time:new Date("11/4/2025 1:00:00"),learn_number:6,lesson_name:"Luyện đề TSA26A - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonsinhhoc2026",subject:"[Tổng ôn] Sinh học",start_time:new Date("11/3/2025 21:15:00"),end_time:new Date("11/4/2025 3:00:00"),learn_number:9,lesson_name:"Kĩ năng xử lí dạng bài đúng sai",teacher:"Phạm Ngọc Hà"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/3/2025 21:15:00"),end_time:new Date("11/4/2025 3:00:00"),learn_number:7,lesson_name:"Luyện đề TSA26A - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahoctsatc12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/3/2025 21:15:00"),end_time:new Date("11/4/2025 3:00:00"),learn_number:7,lesson_name:"Luyện đề TSA26A - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"tongontoan2026",subject:"[Tổng ôn] Toán",start_time:new Date("11/4/2025 19:15:00"),end_time:new Date("11/5/2025 1:00:00"),learn_number:9,lesson_name:"Ôn tập chủ đề Đại số (P3)",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonhoahoc2026",subject:"[Tổng ôn] Hóa học",start_time:new Date("11/4/2025 19:15:00"),end_time:new Date("11/5/2025 1:00:00"),learn_number:9,lesson_name:"Tổng ôn chủ đề Pin điện - điện phân và Đại cương kim loại hay lạ khó",teacher:"Vũ Tuấn Minh"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/4/2025 19:15:00"),end_time:new Date("11/5/2025 1:00:00"),learn_number:7,lesson_name:"Luyện đề TSA26A - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"tongontienganh2026",subject:"[Tổng ôn] Tiếng Anh",start_time:new Date("11/4/2025 20:45:00"),end_time:new Date("11/5/2025 2:30:00"),learn_number:9,lesson_name:"Idioms",teacher:"Nguyễn Trung Nguyên"},
{code:"tongonvatli2026",subject:"[Tổng ôn] Vật lí",start_time:new Date("11/5/2025 19:15:00"),end_time:new Date("11/6/2025 1:00:00"),learn_number:9,lesson_name:"Ôn tập chủ đề Vật lí hạt nhân_P1",teacher:"Nguyễn Hữu Tình"},
{code:"tongonnguvan2026",subject:"[Tổng ôn] Ngữ văn",start_time:new Date("11/5/2025 21:15:00"),end_time:new Date("11/6/2025 3:00:00"),learn_number:9,lesson_name:"Ôn tập chuyên đề: Viết bài văn nghị luận xã hội",teacher:"Vương Thúy Hằng"},
{code:"luyendedochieutsakg12026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("11/5/2025 21:15:00"),end_time:new Date("11/6/2025 3:00:00"),learn_number:8,lesson_name:"Luyện đề TSA26AB - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"luyendedochieutsatc12026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("11/5/2025 21:15:00"),end_time:new Date("11/6/2025 3:00:00"),learn_number:8,lesson_name:"Luyện đề TSA26AB - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"tongonsinhhoc2026",subject:"[Tổng ôn] Sinh học",start_time:new Date("11/6/2025 19:15:00"),end_time:new Date("11/7/2025 1:00:00"),learn_number:9,lesson_name:"Kĩ năng xử lí dạng bài đúng sai",teacher:"Phạm Ngọc Hà"},
{code:"luyendedochieutsakg12026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("11/6/2025 19:15:00"),end_time:new Date("11/7/2025 1:00:00"),learn_number:8,lesson_name:"Luyện đề TSA26AB - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"tongontoan2026",subject:"[Tổng ôn] Toán",start_time:new Date("11/6/2025 20:45:00"),end_time:new Date("11/7/2025 2:30:00"),learn_number:9,lesson_name:"Ôn tập chủ đề Đại số (P3)",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonvatli2026",subject:"[Tổng ôn] Vật lí",start_time:new Date("11/6/2025 21:15:00"),end_time:new Date("11/7/2025 3:00:00"),learn_number:10,lesson_name:"Ôn tập chủ đề Vật lí hạt nhân_P2",teacher:"Nguyễn Hữu Tình"},
{code:"tongontienganh2026",subject:"[Tổng ôn] Tiếng Anh",start_time:new Date("11/7/2025 19:15:00"),end_time:new Date("11/8/2025 1:00:00"),learn_number:10,lesson_name:"Mệnh đề trạng ngữ và mệnh đề danh ngữ",teacher:"Nguyễn Trung Nguyên"},
{code:"tongonnguvan2026",subject:"[Tổng ôn] Ngữ văn",start_time:new Date("11/7/2025 19:15:00"),end_time:new Date("11/8/2025 1:00:00"),learn_number:9,lesson_name:"Ôn tập chuyên đề: Viết bài văn nghị luận xã hội",teacher:"Vương Thúy Hằng"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/7/2025 19:15:00"),end_time:new Date("11/8/2025 1:00:00"),learn_number:9,lesson_name:"Luyện đề TSA26B - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/7/2025 19:15:00"),end_time:new Date("11/8/2025 1:00:00"),learn_number:7,lesson_name:"Luyện đề TSA26A - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetoantsatc12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/7/2025 19:15:00"),end_time:new Date("11/8/2025 1:00:00"),learn_number:9,lesson_name:"Luyện đề TSA26B - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonsinhhoc2026",subject:"[Tổng ôn] Sinh học",start_time:new Date("11/8/2025 19:15:00"),end_time:new Date("11/9/2025 1:00:00"),learn_number:9,lesson_name:"Kĩ năng xử lí dạng bài đúng sai",teacher:"Phạm Ngọc Hà"},
{code:"tongonnguvan2026",subject:"[Tổng ôn] Ngữ văn",start_time:new Date("11/8/2025 19:15:00"),end_time:new Date("11/9/2025 1:00:00"),learn_number:9,lesson_name:"Ôn tập chuyên đề: Viết bài văn nghị luận xã hội",teacher:"Vương Thúy Hằng"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/8/2025 20:45:00"),end_time:new Date("11/9/2025 2:30:00"),learn_number:9,lesson_name:"Luyện đề TSA26B - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonhoahoc2026",subject:"[Tổng ôn] Hóa học",start_time:new Date("11/8/2025 21:15:00"),end_time:new Date("11/9/2025 3:00:00"),learn_number:10,lesson_name:"Tổng ôn chủ đề Nguyên tố nhóm IA, IIA và Kim loại chuyển tiếp, phức chất",teacher:"Vũ Tuấn Minh"},
{code:"tongonvatli2026",subject:"[Tổng ôn] Vật lí",start_time:new Date("11/9/2025 19:15:00"),end_time:new Date("11/10/2025 1:00:00"),learn_number:10,lesson_name:"Ôn tập chủ đề Vật lí hạt nhân_P2",teacher:"Nguyễn Hữu Tình"},
{code:"tongontoan2026",subject:"[Tổng ôn] Toán",start_time:new Date("11/9/2025 19:15:00"),end_time:new Date("11/10/2025 1:00:00"),learn_number:9,lesson_name:"Ôn tập chủ đề Đại số (P3)",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendedochieutsakg12026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("11/9/2025 19:15:00"),end_time:new Date("11/10/2025 1:00:00"),learn_number:8,lesson_name:"Luyện đề TSA26AB - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"tongontienganh2026",subject:"[Tổng ôn] Tiếng Anh",start_time:new Date("11/10/2025 19:15:00"),end_time:new Date("11/11/2025 1:00:00"),learn_number:10,lesson_name:"Mệnh đề trạng ngữ và mệnh đề danh ngữ",teacher:"Nguyễn Trung Nguyên"},
{code:"tongonhoahoc2026",subject:"[Tổng ôn] Hóa học",start_time:new Date("11/10/2025 19:15:00"),end_time:new Date("11/11/2025 1:00:00"),learn_number:10,lesson_name:"Tổng ôn chủ đề Nguyên tố nhóm IA, IIA và Kim loại chuyển tiếp, phức chất",teacher:"Vũ Tuấn Minh"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/10/2025 19:15:00"),end_time:new Date("11/11/2025 1:00:00"),learn_number:9,lesson_name:"Luyện đề TSA26B - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonsinhhoc2026",subject:"[Tổng ôn] Sinh học",start_time:new Date("11/10/2025 21:15:00"),end_time:new Date("11/11/2025 3:00:00"),learn_number:10,lesson_name:"Kĩ năng xử lí dạng bài điền đáp án",teacher:"Phạm Ngọc Hà"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/10/2025 21:15:00"),end_time:new Date("11/11/2025 3:00:00"),learn_number:10,lesson_name:"Luyện đề TSA26B - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahoctsatc12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/10/2025 21:15:00"),end_time:new Date("11/11/2025 3:00:00"),learn_number:10,lesson_name:"Luyện đề TSA26B - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"tongontoan2026",subject:"[Tổng ôn] Toán",start_time:new Date("11/11/2025 19:15:00"),end_time:new Date("11/12/2025 1:00:00"),learn_number:10,lesson_name:"Ôn tập chủ đề Thống kê & Xác suất (P1)",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonhoahoc2026",subject:"[Tổng ôn] Hóa học",start_time:new Date("11/11/2025 19:15:00"),end_time:new Date("11/12/2025 1:00:00"),learn_number:10,lesson_name:"Tổng ôn chủ đề Nguyên tố nhóm IA, IIA và Kim loại chuyển tiếp, phức chất",teacher:"Vũ Tuấn Minh"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/11/2025 19:15:00"),end_time:new Date("11/12/2025 1:00:00"),learn_number:10,lesson_name:"Luyện đề TSA26B - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"tongontienganh2026",subject:"[Tổng ôn] Tiếng Anh",start_time:new Date("11/11/2025 20:45:00"),end_time:new Date("11/12/2025 2:30:00"),learn_number:10,lesson_name:"Mệnh đề trạng ngữ và mệnh đề danh ngữ",teacher:"Nguyễn Trung Nguyên"},
{code:"tongonvatli2026",subject:"[Tổng ôn] Vật lí",start_time:new Date("11/12/2025 19:15:00"),end_time:new Date("11/13/2025 1:00:00"),learn_number:10,lesson_name:"Ôn tập chủ đề Vật lí hạt nhân_P2",teacher:"Nguyễn Hữu Tình"},
{code:"tongonnguvan2026",subject:"[Tổng ôn] Ngữ văn",start_time:new Date("11/12/2025 21:15:00"),end_time:new Date("11/13/2025 3:00:00"),learn_number:10,lesson_name:"Ôn tập chuyên đề: Viết bài văn nghị luận văn học",teacher:"Phạm Hữu Cường"},
{code:"luyendementortsakg12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("11/12/2025 21:15:00"),end_time:new Date("11/13/2025 3:00:00"),learn_number:3,lesson_name:"Hướng dẫn đề luyện TSA26AB - Phần Tư duy Khoa học",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendementortsatc12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("11/12/2025 21:15:00"),end_time:new Date("11/13/2025 3:00:00"),learn_number:3,lesson_name:"Hướng dẫn đề luyện TSA26AB - Phần Tư duy Khoa học",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"tongonsinhhoc2026",subject:"[Tổng ôn] Sinh học",start_time:new Date("11/13/2025 19:15:00"),end_time:new Date("11/14/2025 1:00:00"),learn_number:10,lesson_name:"Kĩ năng xử lí dạng bài điền đáp án",teacher:"Phạm Ngọc Hà"},
{code:"tongontoan2026",subject:"[Tổng ôn] Toán",start_time:new Date("11/13/2025 20:45:00"),end_time:new Date("11/14/2025 2:30:00"),learn_number:10,lesson_name:"Ôn tập chủ đề Thống kê & Xác suất (P1)",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonnguvan2026",subject:"[Tổng ôn] Ngữ văn",start_time:new Date("11/14/2025 19:15:00"),end_time:new Date("11/15/2025 1:00:00"),learn_number:10,lesson_name:"Ôn tập chuyên đề: Viết bài văn nghị luận văn học",teacher:"Phạm Hữu Cường"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/14/2025 19:15:00"),end_time:new Date("11/15/2025 1:00:00"),learn_number:11,lesson_name:"Luyện đề TSA26C - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/14/2025 19:15:00"),end_time:new Date("11/15/2025 1:00:00"),learn_number:10,lesson_name:"Luyện đề TSA26B - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetoantsatc12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/14/2025 19:15:00"),end_time:new Date("11/15/2025 1:00:00"),learn_number:11,lesson_name:"Luyện đề TSA26C - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonsinhhoc2026",subject:"[Tổng ôn] Sinh học",start_time:new Date("11/15/2025 19:15:00"),end_time:new Date("11/16/2025 1:00:00"),learn_number:10,lesson_name:"Kĩ năng xử lí dạng bài điền đáp án",teacher:"Phạm Ngọc Hà"},
{code:"tongonnguvan2026",subject:"[Tổng ôn] Ngữ văn",start_time:new Date("11/15/2025 19:15:00"),end_time:new Date("11/16/2025 1:00:00"),learn_number:10,lesson_name:"Ôn tập chuyên đề: Viết bài văn nghị luận văn học",teacher:"Phạm Hữu Cường"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/15/2025 20:45:00"),end_time:new Date("11/16/2025 2:30:00"),learn_number:11,lesson_name:"Luyện đề TSA26C - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonhoahoc2026",subject:"[Tổng ôn] Hóa học",start_time:new Date("11/15/2025 21:15:00"),end_time:new Date("11/16/2025 3:00:00"),learn_number:11,lesson_name:"Dạng bài tập Sơ đồ - biểu đồ hay lạ khó",teacher:"Vũ Tuấn Minh"},
{code:"tongontoan2026",subject:"[Tổng ôn] Toán",start_time:new Date("11/16/2025 19:15:00"),end_time:new Date("11/17/2025 1:00:00"),learn_number:10,lesson_name:"Ôn tập chủ đề Thống kê & Xác suất (P1)",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendementortsakg12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("11/16/2025 19:15:00"),end_time:new Date("11/17/2025 1:00:00"),learn_number:4,lesson_name:"Hướng dẫn đề luyện TSA26AB - Phần Tư duy Toán học",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendementortsatc12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("11/16/2025 19:15:00"),end_time:new Date("11/17/2025 1:00:00"),learn_number:4,lesson_name:"Hướng dẫn đề luyện TSA26AB - Phần Tư duy Toán học",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"tongonhoahoc2026",subject:"[Tổng ôn] Hóa học",start_time:new Date("11/17/2025 19:15:00"),end_time:new Date("11/18/2025 1:00:00"),learn_number:11,lesson_name:"Dạng bài tập Sơ đồ - biểu đồ hay lạ khó",teacher:"Vũ Tuấn Minh"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/17/2025 19:15:00"),end_time:new Date("11/18/2025 1:00:00"),learn_number:11,lesson_name:"Luyện đề TSA26C - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonsinhhoc2026",subject:"[Tổng ôn] Sinh học",start_time:new Date("11/17/2025 21:15:00"),end_time:new Date("11/18/2025 3:00:00"),learn_number:11,lesson_name:"Kĩ năng xử lí bài đọc",teacher:"Phạm Ngọc Hà"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/17/2025 21:15:00"),end_time:new Date("11/18/2025 3:00:00"),learn_number:12,lesson_name:"Luyện đề TSA26C - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahoctsatc12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/17/2025 21:15:00"),end_time:new Date("11/18/2025 3:00:00"),learn_number:12,lesson_name:"Luyện đề TSA26C - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"tongontoan2026",subject:"[Tổng ôn] Toán",start_time:new Date("11/18/2025 19:15:00"),end_time:new Date("11/19/2025 1:00:00"),learn_number:11,lesson_name:"Ôn tập chủ đề Thống kê & Xác suất (P2)",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonhoahoc2026",subject:"[Tổng ôn] Hóa học",start_time:new Date("11/18/2025 19:15:00"),end_time:new Date("11/19/2025 1:00:00"),learn_number:11,lesson_name:"Dạng bài tập Sơ đồ - biểu đồ hay lạ khó",teacher:"Vũ Tuấn Minh"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/18/2025 19:15:00"),end_time:new Date("11/19/2025 1:00:00"),learn_number:12,lesson_name:"Luyện đề TSA26C - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendedochieutsakg12026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("11/19/2025 21:15:00"),end_time:new Date("11/20/2025 3:00:00"),learn_number:13,lesson_name:"Luyện đề TSA26CD - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"luyendedochieutsatc12026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("11/19/2025 21:15:00"),end_time:new Date("11/20/2025 3:00:00"),learn_number:13,lesson_name:"Luyện đề TSA26CD - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"tongonsinhhoc2026",subject:"[Tổng ôn] Sinh học",start_time:new Date("11/20/2025 19:15:00"),end_time:new Date("11/21/2025 1:00:00"),learn_number:11,lesson_name:"Kĩ năng xử lí bài đọc",teacher:"Phạm Ngọc Hà"},
{code:"luyendedochieutsakg12026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("11/20/2025 19:15:00"),end_time:new Date("11/21/2025 1:00:00"),learn_number:13,lesson_name:"Luyện đề TSA26CD - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"tongontoan2026",subject:"[Tổng ôn] Toán",start_time:new Date("11/20/2025 20:45:00"),end_time:new Date("11/21/2025 2:30:00"),learn_number:11,lesson_name:"Ôn tập chủ đề Thống kê & Xác suất (P2)",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/21/2025 19:15:00"),end_time:new Date("11/22/2025 1:00:00"),learn_number:14,lesson_name:"Luyện đề TSA26D - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/21/2025 19:15:00"),end_time:new Date("11/22/2025 1:00:00"),learn_number:12,lesson_name:"Luyện đề TSA26C - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetoantsatc12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/21/2025 19:15:00"),end_time:new Date("11/22/2025 1:00:00"),learn_number:14,lesson_name:"Luyện đề TSA26D - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"tongonsinhhoc2026",subject:"[Tổng ôn] Sinh học",start_time:new Date("11/22/2025 19:15:00"),end_time:new Date("11/23/2025 1:00:00"),learn_number:11,lesson_name:"Kĩ năng xử lí bài đọc",teacher:"Phạm Ngọc Hà"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/22/2025 20:45:00"),end_time:new Date("11/23/2025 2:30:00"),learn_number:14,lesson_name:"Luyện đề TSA26D - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"tongontoan2026",subject:"[Tổng ôn] Toán",start_time:new Date("11/23/2025 19:15:00"),end_time:new Date("11/24/2025 1:00:00"),learn_number:11,lesson_name:"Ôn tập chủ đề Thống kê & Xác suất (P2)",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendedochieutsakg12026",subject:"[Luyện đề TSA] ĐH",start_time:new Date("11/23/2025 19:15:00"),end_time:new Date("11/24/2025 1:00:00"),learn_number:13,lesson_name:"Luyện đề TSA26CD - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/24/2025 19:15:00"),end_time:new Date("11/25/2025 1:00:00"),learn_number:14,lesson_name:"Luyện đề TSA26D - Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/24/2025 21:15:00"),end_time:new Date("11/25/2025 3:00:00"),learn_number:15,lesson_name:"Luyện đề TSA26D - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendekhoahoctsatc12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/24/2025 21:15:00"),end_time:new Date("11/25/2025 3:00:00"),learn_number:15,lesson_name:"Luyện đề TSA26D - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"tongontoan2026",subject:"[Tổng ôn] Toán",start_time:new Date("11/25/2025 19:15:00"),end_time:new Date("11/26/2025 1:00:00"),learn_number:12,lesson_name:"Ôn tập chủ đề Hình học giải tích trong không gian",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/25/2025 19:15:00"),end_time:new Date("11/26/2025 1:00:00"),learn_number:15,lesson_name:"Luyện đề TSA26D - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendementortsakg12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("11/26/2025 21:15:00"),end_time:new Date("11/27/2025 3:00:00"),learn_number:5,lesson_name:"Hướng dẫn đề luyện TSA26CD - Phần Tư duy Khoa học",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendementortsatc12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("11/26/2025 21:15:00"),end_time:new Date("11/27/2025 3:00:00"),learn_number:5,lesson_name:"Hướng dẫn đề luyện TSA26CD - Phần Tư duy Khoa học",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"tongontoan2026",subject:"[Tổng ôn] Toán",start_time:new Date("11/27/2025 20:45:00"),end_time:new Date("11/28/2025 2:30:00"),learn_number:12,lesson_name:"Ôn tập chủ đề Hình học giải tích trong không gian",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/28/2025 19:15:00"),end_time:new Date("11/29/2025 1:00:00"),learn_number:16,lesson_name:"Luyện đề TSA26E- Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendekhoahoctsakg12026",subject:"[Luyện đề TSA] KH",start_time:new Date("11/28/2025 19:15:00"),end_time:new Date("11/29/2025 1:00:00"),learn_number:15,lesson_name:"Luyện đề TSA26D - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
{code:"luyendetoantsatc12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/28/2025 19:15:00"),end_time:new Date("11/29/2025 1:00:00"),learn_number:16,lesson_name:"Luyện đề TSA26E- Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendetoantsakg12026",subject:"[Luyện đề TSA] Toán",start_time:new Date("11/29/2025 20:45:00"),end_time:new Date("11/30/2025 2:30:00"),learn_number:16,lesson_name:"Luyện đề TSA26E- Phần Tư duy Toán học",teacher:"Nguyễn Thanh Tùng"},
{code:"tongontoan2026",subject:"[Tổng ôn] Toán",start_time:new Date("11/30/2025 19:15:00"),end_time:new Date("12/1/2025 1:00:00"),learn_number:12,lesson_name:"Ôn tập chủ đề Hình học giải tích trong không gian",teacher:"Nguyễn Thanh Tùng"},
{code:"luyendementortsakg12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("11/30/2025 19:15:00"),end_time:new Date("12/1/2025 1:00:00"),learn_number:6,lesson_name:"Hướng dẫn đề luyện TSA26CD - Phần Tư duy Toán học",teacher:"Mentor_Nguyễn Đình Trung"},
{code:"luyendementortsatc12026",subject:"[Luyện đề TSA] Mentor_TSA",start_time:new Date("11/30/2025 19:15:00"),end_time:new Date("12/1/2025 1:00:00"),learn_number:6,lesson_name:"Hướng dẫn đề luyện TSA26CD - Phần Tư duy Toán học",teacher:"Mentor_Nguyễn Đình Trung"},
    
        {code:"demo",subject:"[Demo] Demo",start_time:new Date("5/22/2025 14:22:00"),end_time:new Date("5/22/2025 16:27:00"),learn_number:1,lesson_name:"Luyện đề Demo",teacher:"HOCMAI"}
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
        {code:"luyendementortsatc12026",boxid:"952000",boxtag:"3Ot9Nu",tkey:"d278bb49ac6ae9ac",tid:"55"},
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
