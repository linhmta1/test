//copy all >> file js github
const videoElement = document.getElementById('video');
const startButton = document.getElementById('startButton');
    
    if(startButton!=null){
        startButton.addEventListener('click', async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoElement.srcObject = stream;
            } catch (error) {
                console.error('Lỗi khi truy cập camera:', error);
                alert('Không thể truy cập camera. Vui lòng kiểm tra quyền hoặc thử lại.');
            }
        });
    }

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
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/1/2025 19:45:00"),end_time:new Date("3/1/2025 23:30:00"),learn_number:6,lesson_name:"HM10_Ngữ văn_Tổng kết 1",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/1/2025 19:45:00"),end_time:new Date("3/1/2025 23:30:00"),learn_number:4,lesson_name:"Luyện đề HM10_Toán số 03",teacher:"Nguyễn Mạnh Cường"},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("3/1/2025 19:45:00"),end_time:new Date("3/1/2025 23:30:00"),learn_number:32,lesson_name:"Lý thuyết trọng tâm cô đọng về Alcohol",teacher:"Vũ Thị Thùy Dương"},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("3/1/2025 19:45:00"),end_time:new Date("3/1/2025 23:30:00"),learn_number:30,lesson_name:"P2_Các bài toán đếm trọng tâm",teacher:"Phạm Thái Sơn"},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("3/1/2025 17:45:00"),end_time:new Date("3/1/2025 21:30:00"),learn_number:64,lesson_name:"CĐ. Bất đẳng thức Cô si - Hai, ba biến đối xứng - P2",teacher:"Trần Ngọc Hà"},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("3/1/2025 19:45:00"),end_time:new Date("3/1/2025 23:30:00"),learn_number:132,lesson_name:"Tính chất ba đường phân giác trong tam giác",teacher:"Trần Ngọc Hà"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/1/2025 19:45:00"),end_time:new Date("3/1/2025 23:30:00"),learn_number:58,lesson_name:"P2_Các dạng bài trọng tâm về góc và số đo góc",teacher:"Nguyễn Thị Nhung"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/1/2025 19:45:00"),end_time:new Date("3/1/2025 23:30:00"),learn_number:62,lesson_name:"Ôn tập giữa kì II (P2)",teacher:"Vũ Hồng Ngọc"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/1/2025 19:45:00"),end_time:new Date("3/1/2025 23:30:00"),learn_number:60,lesson_name:"Thực hành Tiếng Việt: Từ Hán Việt, văn bản và đoạn văn",teacher:"Trần Thị Thanh Xuân"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/2/2025 20:45:00"),end_time:new Date("3/3/2025 0:30:00"),learn_number:6,lesson_name:"Luyện đề HM10_Toán số 05",teacher:"Nguyễn Mạnh Cường"},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("3/2/2025 19:45:00"),end_time:new Date("3/2/2025 23:30:00"),learn_number:32,lesson_name:"P1_Cách tiếp cận bài toán góc",teacher:"Nguyễn Thị Khuyên"},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("3/2/2025 17:45:00"),end_time:new Date("3/2/2025 21:30:00"),learn_number:132,lesson_name:"Ôn thi giữa HK II - Câu điểm 10 và Hình học",teacher:"Trần Ngọc Hà"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/2/2025 19:45:00"),end_time:new Date("3/2/2025 23:30:00"),learn_number:65,lesson_name:"Ôn tập giữa học kì II Đề số 02",teacher:"Chu Thị Lâm Oanh"},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("3/2/2025 19:45:00"),end_time:new Date("3/2/2025 23:30:00"),learn_number:128,lesson_name:"Ôn thi giữa HK II - Câu điểm 10",teacher:"Trần Ngọc Hà"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/2/2025 19:45:00"),end_time:new Date("3/2/2025 23:30:00"),learn_number:57,lesson_name:"Thực hành Tiếng Việt",teacher:"Nguyễn Thị Liệu"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/2/2025 19:45:00"),end_time:new Date("3/2/2025 23:30:00"),learn_number:65,lesson_name:"Ôn tập giữa kì II ",teacher:"Nguyễn Thị Thanh Phương"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/2/2025 19:45:00"),end_time:new Date("3/2/2025 23:30:00"),learn_number:65,lesson_name:"Thực hành Tiếng Việt: Liên kết và mạch cảm xúc trong văn bản",teacher:"Trần Thị Thanh Xuân"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/3/2025 19:45:00"),end_time:new Date("3/3/2025 23:30:00"),learn_number:5,lesson_name:"HM10_Ngữ văn_Đề số 5",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/3/2025 19:45:00"),end_time:new Date("3/3/2025 23:30:00"),learn_number:6,lesson_name:"Luyện đề HM10_Toán số 05",teacher:"Nguyễn Mạnh Cường"},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("3/3/2025 21:15:00"),end_time:new Date("3/4/2025 1:00:00"),learn_number:30,lesson_name:"Bài toán va chạm đàn hồi trực diện",teacher:"Nguyễn Thành Đạt"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/3/2025 17:45:00"),end_time:new Date("3/3/2025 21:30:00"),learn_number:67,lesson_name:"P2_Các dạng bài thường gặp về phương trình bậc nhất một ẩn",teacher:"Lê Ngọc Diên"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/3/2025 19:45:00"),end_time:new Date("3/3/2025 23:30:00"),learn_number:59,lesson_name:"Các dạng bài hay gặp về làm tròn và ước lượng",teacher:"Lê Ngọc Diên"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/3/2025 19:45:00"),end_time:new Date("3/3/2025 23:30:00"),learn_number:66,lesson_name:"Kĩ năng đọc hiểu văn bản nghị luận văn học (P2)",teacher:"Vũ Hồng Ngọc"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/4/2025 19:45:00"),end_time:new Date("3/4/2025 23:30:00"),learn_number:7,lesson_name:"P2_Chiến lược làm bài và kĩ năng xử lí các dạng câu hỏi học sinh thường mắc sai lầm",teacher:"Nguyễn Mạnh Cường"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/4/2025 19:45:00"),end_time:new Date("3/4/2025 23:30:00"),learn_number:5,lesson_name:"HM10_Ngữ văn_Đề số 5",teacher:"Nguyễn Phi Hùng"},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("3/4/2025 21:15:00"),end_time:new Date("3/5/2025 1:00:00"),learn_number:34,lesson_name:"P2 - Phương pháp và phân loại các dạng bài tập về Alcohol",teacher:"Đinh Thị Oanh"},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("3/4/2025 19:45:00"),end_time:new Date("3/4/2025 23:30:00"),learn_number:30,lesson_name:"Bài toán va chạm đàn hồi trực diện",teacher:"Thiều Thị Dung"},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("3/4/2025 17:45:00"),end_time:new Date("3/4/2025 21:30:00"),learn_number:65,lesson_name:"CĐ. Hình không gian và toán thực tế",teacher:"Trần Ngọc Hà"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/4/2025 19:45:00"),end_time:new Date("3/4/2025 23:30:00"),learn_number:67,lesson_name:"P2_Các dạng bài thường gặp về phương trình bậc nhất một ẩn",teacher:"Chu Thị Lâm Oanh"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/4/2025 19:45:00"),end_time:new Date("3/4/2025 23:30:00"),learn_number:67,lesson_name:"Một số bài toán nâng cao về phép chia đa thức ",teacher:"Lê Ngọc Diên"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/4/2025 17:45:00"),end_time:new Date("3/4/2025 21:30:00"),learn_number:60,lesson_name:"Luyện tập về xác suất thực nghiệm và các sai lầm cần tránh",teacher:"Lê Ngọc Diên"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/4/2025 19:45:00"),end_time:new Date("3/4/2025 23:30:00"),learn_number:60,lesson_name:"Thực hành Tiếng Việt: Từ Hán Việt, văn bản và đoạn văn",teacher:"Nguyễn Thị Liệu"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/5/2025 19:45:00"),end_time:new Date("3/5/2025 23:30:00"),learn_number:6,lesson_name:"HM10_Ngữ văn_Tổng kết 1",teacher:"Nguyễn Phi Hùng"},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("3/5/2025 21:15:00"),end_time:new Date("3/6/2025 1:00:00"),learn_number:34,lesson_name:"P1_Các quy tắc tính xác suất",teacher:"Nguyễn Đức Tài"},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("3/5/2025 21:15:00"),end_time:new Date("3/6/2025 1:00:00"),learn_number:30,lesson_name:"Ôn tập chủ đề Tốc độ phản ứng hóa học",teacher:"Đinh Thị Oanh"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/5/2025 17:45:00"),end_time:new Date("3/5/2025 21:30:00"),learn_number:68,lesson_name:"P3_Các dạng bài thường gặp về phương trình bậc nhất một ẩn",teacher:"Lê Ngọc Diên"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/5/2025 19:45:00"),end_time:new Date("3/5/2025 23:30:00"),learn_number:68,lesson_name:"P1_Ôn tập chuyên đề Biểu thức đại số và đa thức một biến",teacher:"Lê Ngọc Diên"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/5/2025 19:45:00"),end_time:new Date("3/5/2025 23:30:00"),learn_number:59,lesson_name:"Các dạng bài hay gặp về làm tròn và ước lượng",teacher:"Nguyễn Thị Nhung"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/5/2025 19:45:00"),end_time:new Date("3/5/2025 23:30:00"),learn_number:61,lesson_name:"Ôn tập giữa học kì II ",teacher:"Hương Giang"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/5/2025 19:45:00"),end_time:new Date("3/5/2025 23:30:00"),learn_number:65,lesson_name:"Thực hành Tiếng Việt: Liên kết và mạch cảm xúc trong văn bản",teacher:"Hoàng Thị Tuyết"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/6/2025 19:45:00"),end_time:new Date("3/6/2025 23:30:00"),learn_number:7,lesson_name:"P2_Chiến lược làm bài và kĩ năng xử lí các dạng câu hỏi học sinh thường mắc sai lầm",teacher:"Nguyễn Mạnh Cường"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/6/2025 19:45:00"),end_time:new Date("3/6/2025 23:30:00"),learn_number:6,lesson_name:"HM10_Ngữ văn_Tổng kết 1",teacher:"Nguyễn Phi Hùng"},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("3/6/2025 19:45:00"),end_time:new Date("3/6/2025 23:30:00"),learn_number:34,lesson_name:"Dòng điện. Cường độ dòng điện",teacher:"Thiều Thị Dung"},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("3/6/2025 20:45:00"),end_time:new Date("3/7/2025 0:30:00"),learn_number:31,lesson_name:"Các bài toán nền tảng trong hệ tọa độ",teacher:"Nguyễn Thị Khuyên"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/6/2025 19:45:00"),end_time:new Date("3/6/2025 23:30:00"),learn_number:66,lesson_name:"Ôn tập giữa học kì II Đề số 03",teacher:"Chu Thị Lâm Oanh"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/6/2025 19:45:00"),end_time:new Date("3/6/2025 23:30:00"),learn_number:66,lesson_name:"Kĩ năng đọc hiểu kiểu văn bản nghị luận xã hội (P2)",teacher:"Nguyễn Hải Quỳnh"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/6/2025 19:45:00"),end_time:new Date("3/6/2025 23:30:00"),learn_number:65,lesson_name:"Ôn tập giữa kì II",teacher:"Vũ Hồng Ngọc"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/7/2025 19:45:00"),end_time:new Date("3/7/2025 23:30:00"),learn_number:7,lesson_name:"HM10_Ngữ văn_Đề số 6",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/7/2025 19:45:00"),end_time:new Date("3/7/2025 23:30:00"),learn_number:7,lesson_name:"P2_Chiến lược làm bài và kĩ năng xử lí các dạng câu hỏi học sinh thường mắc sai lầm",teacher:"Nguyễn Mạnh Cường"},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("3/7/2025 21:15:00"),end_time:new Date("3/8/2025 1:00:00"),learn_number:34,lesson_name:"Dòng điện. Cường độ dòng điện",teacher:"Nguyễn Thành Đạt"},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("3/7/2025 19:45:00"),end_time:new Date("3/7/2025 23:30:00"),learn_number:31,lesson_name:"Ôn tập và kiểm tra giữa học kì II",teacher:"Vũ Thị Thùy Dương"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/7/2025 19:45:00"),end_time:new Date("3/7/2025 23:30:00"),learn_number:68,lesson_name:"P3_Các dạng bài thường gặp về phương trình bậc nhất một ẩn",teacher:"Chu Thị Lâm Oanh"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/7/2025 17:45:00"),end_time:new Date("3/7/2025 21:30:00"),learn_number:66,lesson_name:"Kĩ năng đọc hiểu văn bản nghị luận văn học (P2)",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/8/2025 19:45:00"),end_time:new Date("3/8/2025 23:30:00"),learn_number:8,lesson_name:"HM10_Ngữ văn_Đề số 7",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/8/2025 19:45:00"),end_time:new Date("3/8/2025 23:30:00"),learn_number:6,lesson_name:"Luyện đề HM10_Toán số 05",teacher:"Nguyễn Mạnh Cường"},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("3/8/2025 19:45:00"),end_time:new Date("3/8/2025 23:30:00"),learn_number:33,lesson_name:"P1 - Phương pháp và phân loại các dạng bài tập về Alcohol",teacher:"Vũ Thị Thùy Dương"},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("3/8/2025 19:45:00"),end_time:new Date("3/8/2025 23:30:00"),learn_number:31,lesson_name:"Các bài toán nền tảng trong hệ tọa độ",teacher:"Nguyễn Thị Khuyên"},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("3/8/2025 17:45:00"),end_time:new Date("3/8/2025 21:30:00"),learn_number:66,lesson_name:"CĐ. Xác suất",teacher:"Trần Ngọc Hà"},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("3/8/2025 19:45:00"),end_time:new Date("3/8/2025 23:30:00"),learn_number:133,lesson_name:"CĐ. Nghiệm của đa thức 1 biến",teacher:"Trần Ngọc Hà"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/8/2025 19:45:00"),end_time:new Date("3/8/2025 23:30:00"),learn_number:60,lesson_name:"Luyện tập về xác suất thực nghiệm và các sai lầm cần tránh",teacher:"Nguyễn Thị Nhung"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/8/2025 19:45:00"),end_time:new Date("3/8/2025 23:30:00"),learn_number:64,lesson_name:"Kĩ năng đọc hiểu kiểu văn bản nghị luận xã hội (P1)",teacher:"Hoàng Thị Tuyết"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/8/2025 19:45:00"),end_time:new Date("3/8/2025 23:30:00"),learn_number:62,lesson_name:"Kĩ năng viết bài văn trình bày ý kiến về một hiện tượng đời sống ",teacher:"Trần Thị Thanh Xuân"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/9/2025 20:45:00"),end_time:new Date("3/10/2025 0:30:00"),learn_number:8,lesson_name:"Luyện đề HM10_Toán số 06",teacher:"Nguyễn Mạnh Cường"},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("3/9/2025 19:45:00"),end_time:new Date("3/9/2025 23:30:00"),learn_number:33,lesson_name:"P2_Cách tiếp cận bài toán góc",teacher:"Nguyễn Thị Khuyên"},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("3/9/2025 17:45:00"),end_time:new Date("3/9/2025 21:30:00"),learn_number:133,lesson_name:"Tam giác đồng dạng-3",teacher:"Trần Ngọc Hà"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/9/2025 19:45:00"),end_time:new Date("3/9/2025 23:30:00"),learn_number:67,lesson_name:"Một số bài toán nâng cao về phép chia đa thức ",teacher:"Chu Thị Lâm Oanh"},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("3/9/2025 19:45:00"),end_time:new Date("3/9/2025 23:30:00"),learn_number:129,lesson_name:"Ôn thi giữa HK II",teacher:"Trần Ngọc Hà"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/9/2025 19:45:00"),end_time:new Date("3/9/2025 23:30:00"),learn_number:59,lesson_name:"Kĩ năng viết bài văn đóng vai nhân vật kể lại một truyện cổ tích ",teacher:"Nguyễn Thị Liệu"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/9/2025 19:45:00"),end_time:new Date("3/9/2025 23:30:00"),learn_number:67,lesson_name:"Kĩ năng đọc hiểu văn bản truyện lịch sử, tiểu thuyết",teacher:"Nguyễn Thị Thanh Phương"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/9/2025 19:45:00"),end_time:new Date("3/9/2025 23:30:00"),learn_number:67,lesson_name:"Kĩ năng viết đoạn văn nghị luận về một vấn đề trong đời sống",teacher:"Trần Thị Thanh Xuân"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/10/2025 19:45:00"),end_time:new Date("3/10/2025 23:30:00"),learn_number:7,lesson_name:"HM10_Ngữ văn_Đề số 6",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/10/2025 19:45:00"),end_time:new Date("3/10/2025 23:30:00"),learn_number:8,lesson_name:"Luyện đề HM10_Toán số 06",teacher:"Nguyễn Mạnh Cường"},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("3/10/2025 21:15:00"),end_time:new Date("3/11/2025 1:00:00"),learn_number:31,lesson_name:"Bài toán đạn nổ",teacher:"Nguyễn Thành Đạt"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/10/2025 17:45:00"),end_time:new Date("3/10/2025 21:30:00"),learn_number:69,lesson_name:"P1_Ứng dụng của phương trình bậc nhất một ẩn để giải quyết một số bài toán thực tế",teacher:"Lê Ngọc Diên"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/10/2025 19:45:00"),end_time:new Date("3/10/2025 23:30:00"),learn_number:61,lesson_name:"P1_Bài toán về dãy số",teacher:"Lê Ngọc Diên"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/10/2025 19:45:00"),end_time:new Date("3/10/2025 23:30:00"),learn_number:68,lesson_name:"Viết bài văn phân tích một tác phẩm (truyện) ",teacher:"Vũ Hồng Ngọc"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/11/2025 19:45:00"),end_time:new Date("3/11/2025 23:30:00"),learn_number:9,lesson_name:"Luyện đề HM10_Toán số 07",teacher:"Nguyễn Mạnh Cường"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/11/2025 19:45:00"),end_time:new Date("3/11/2025 23:30:00"),learn_number:7,lesson_name:"HM10_Ngữ văn_Đề số 6",teacher:"Nguyễn Phi Hùng"},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("3/11/2025 21:15:00"),end_time:new Date("3/12/2025 1:00:00"),learn_number:35,lesson_name:"Lý thuyết trọng tâm cô đọng và các dạng bài tập về Phenol",teacher:"Đinh Thị Oanh"},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("3/11/2025 19:45:00"),end_time:new Date("3/11/2025 23:30:00"),learn_number:31,lesson_name:"Bài toán đạn nổ",teacher:"Thiều Thị Dung"},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("3/11/2025 17:45:00"),end_time:new Date("3/11/2025 21:30:00"),learn_number:67,lesson_name:"CĐ. Bất đẳng thức Cô si- Hai biến có điều kiện - P1",teacher:"Trần Ngọc Hà"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/11/2025 19:45:00"),end_time:new Date("3/11/2025 23:30:00"),learn_number:69,lesson_name:"P1_Ứng dụng của phương trình bậc nhất một ẩn để giải quyết một số bài toán thực tế",teacher:"Chu Thị Lâm Oanh"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/11/2025 19:45:00"),end_time:new Date("3/11/2025 23:30:00"),learn_number:69,lesson_name:"P2_Ôn tập chuyên đề Biểu thức đại số và đa thức một biến",teacher:"Lê Ngọc Diên"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/11/2025 17:45:00"),end_time:new Date("3/11/2025 21:30:00"),learn_number:62,lesson_name:"P2_Bài toán về dãy số",teacher:"Lê Ngọc Diên"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/11/2025 19:45:00"),end_time:new Date("3/11/2025 23:30:00"),learn_number:62,lesson_name:"Kĩ năng viết bài văn trình bày ý kiến về một hiện tượng đời sống ",teacher:"Nguyễn Thị Liệu"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/12/2025 20:15:00"),end_time:new Date("3/13/2025 0:00:00"),learn_number:1,lesson_name:"HM10_Tiếng anh_Đề số 1",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/12/2025 19:45:00"),end_time:new Date("3/12/2025 23:30:00"),learn_number:8,lesson_name:"HM10_Ngữ văn_Đề số 7",teacher:"Nguyễn Phi Hùng"},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("3/12/2025 21:15:00"),end_time:new Date("3/13/2025 1:00:00"),learn_number:35,lesson_name:"P2_Các quy tắc tính xác suất",teacher:"Nguyễn Đức Tài"},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("3/12/2025 21:15:00"),end_time:new Date("3/13/2025 1:00:00"),learn_number:31,lesson_name:"Ôn tập và kiểm tra giữa học kì II",teacher:"Đinh Thị Oanh"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/12/2025 17:45:00"),end_time:new Date("3/12/2025 21:30:00"),learn_number:70,lesson_name:"P2_Ứng dụng của phương trình bậc nhất một ẩn để giải quyết một số bài toán thực tế",teacher:"Lê Ngọc Diên"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/12/2025 19:45:00"),end_time:new Date("3/12/2025 23:30:00"),learn_number:70,lesson_name:"Các kiến thức nền tảng về tính chất các đường trong tam giác",teacher:"Lê Ngọc Diên"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/12/2025 19:45:00"),end_time:new Date("3/12/2025 23:30:00"),learn_number:61,lesson_name:"P1_Bài toán về dãy số",teacher:"Nguyễn Thị Nhung"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/12/2025 19:45:00"),end_time:new Date("3/12/2025 23:30:00"),learn_number:63,lesson_name:"Kĩ năng đọc hiểu văn bản ",teacher:"Hương Giang"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/12/2025 19:45:00"),end_time:new Date("3/12/2025 23:30:00"),learn_number:67,lesson_name:"Kĩ năng viết đoạn văn nghị luận về một vấn đề trong đời sống",teacher:"Hoàng Thị Tuyết"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/13/2025 20:15:00"),end_time:new Date("3/14/2025 0:00:00"),learn_number:2,lesson_name:"HM10_Tiếng anh_Đề số 2",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/13/2025 19:45:00"),end_time:new Date("3/13/2025 23:30:00"),learn_number:9,lesson_name:"Luyện đề HM10_Toán số 07",teacher:"Nguyễn Mạnh Cường"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/13/2025 19:45:00"),end_time:new Date("3/13/2025 23:30:00"),learn_number:8,lesson_name:"HM10_Ngữ văn_Đề số 7",teacher:"Nguyễn Phi Hùng"},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("3/13/2025 19:45:00"),end_time:new Date("3/13/2025 23:30:00"),learn_number:35,lesson_name:"Điện trở. Định luật Ohm đối với vật dẫn kim loại",teacher:"Thiều Thị Dung"},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("3/13/2025 20:45:00"),end_time:new Date("3/14/2025 0:30:00"),learn_number:32,lesson_name:"P1_Các dạng bài cốt lõi về phương trình đường thẳng - đường tròn",teacher:"Nguyễn Thị Khuyên"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/13/2025 19:45:00"),end_time:new Date("3/13/2025 23:30:00"),learn_number:68,lesson_name:"P1_Ôn tập chuyên đề Biểu thức đại số và đa thức một biến",teacher:"Chu Thị Lâm Oanh"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/13/2025 19:45:00"),end_time:new Date("3/13/2025 23:30:00"),learn_number:68,lesson_name:"Kĩ năng đọc hiểu kiểu văn bản nghị luận xã hội (P3)",teacher:"Nguyễn Hải Quỳnh"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/13/2025 19:45:00"),end_time:new Date("3/13/2025 23:30:00"),learn_number:67,lesson_name:"Kĩ năng đọc hiểu văn bản truyện lịch sử, tiểu thuyết",teacher:"Vũ Hồng Ngọc"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/14/2025 19:45:00"),end_time:new Date("3/14/2025 23:30:00"),learn_number:9,lesson_name:"HM10_Ngữ văn_Đề số 8",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/14/2025 19:45:00"),end_time:new Date("3/14/2025 23:30:00"),learn_number:1,lesson_name:"HM10_Tiếng anh_Đề số 1",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/14/2025 19:45:00"),end_time:new Date("3/14/2025 23:30:00"),learn_number:9,lesson_name:"Luyện đề HM10_Toán số 07",teacher:"Nguyễn Mạnh Cường"},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("3/14/2025 21:15:00"),end_time:new Date("3/15/2025 1:00:00"),learn_number:35,lesson_name:"Điện trở. Định luật Ohm đối với vật dẫn kim loại",teacher:"Nguyễn Thành Đạt"},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("3/14/2025 19:45:00"),end_time:new Date("3/14/2025 23:30:00"),learn_number:32,lesson_name:"Lý thuyết trọng tâm cô đọng về Đơn chất của Halogen",teacher:"Vũ Thị Thùy Dương"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/14/2025 19:45:00"),end_time:new Date("3/14/2025 23:30:00"),learn_number:70,lesson_name:"P2_Ứng dụng của phương trình bậc nhất một ẩn để giải quyết một số bài toán thực tế",teacher:"Chu Thị Lâm Oanh"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/14/2025 17:45:00"),end_time:new Date("3/14/2025 21:30:00"),learn_number:68,lesson_name:"Viết bài văn phân tích một tác phẩm (truyện) ",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/15/2025 19:45:00"),end_time:new Date("3/15/2025 23:30:00"),learn_number:10,lesson_name:"HM10_Ngữ văn_Đề số 9",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/15/2025 19:45:00"),end_time:new Date("3/15/2025 23:30:00"),learn_number:8,lesson_name:"Luyện đề HM10_Toán số 06",teacher:"Nguyễn Mạnh Cường"},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("3/15/2025 19:45:00"),end_time:new Date("3/15/2025 23:30:00"),learn_number:34,lesson_name:"P2 - Phương pháp và phân loại các dạng bài tập về Alcohol",teacher:"Vũ Thị Thùy Dương"},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("3/15/2025 19:45:00"),end_time:new Date("3/15/2025 23:30:00"),learn_number:32,lesson_name:"P1_Các dạng bài cốt lõi về phương trình đường thẳng - đường tròn",teacher:"Phạm Thái Sơn"},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("3/15/2025 17:45:00"),end_time:new Date("3/15/2025 21:30:00"),learn_number:68,lesson_name:"CĐ. Nghiệm nguyên - P1",teacher:"Trần Ngọc Hà"},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("3/15/2025 19:45:00"),end_time:new Date("3/15/2025 23:30:00"),learn_number:134,lesson_name:"Tính chất đường trung trực trong tam giác",teacher:"Trần Ngọc Hà"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/15/2025 19:45:00"),end_time:new Date("3/15/2025 23:30:00"),learn_number:62,lesson_name:"P2_Bài toán về dãy số",teacher:"Nguyễn Thị Nhung"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/15/2025 19:45:00"),end_time:new Date("3/15/2025 23:30:00"),learn_number:66,lesson_name:"Kĩ năng đọc hiểu kiểu văn bản nghị luận xã hội (P2)",teacher:"Hoàng Thị Tuyết"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/15/2025 19:45:00"),end_time:new Date("3/15/2025 23:30:00"),learn_number:64,lesson_name:"Ôn tập giữa học kì II (P1)",teacher:"Trần Thị Thanh Xuân"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/16/2025 20:45:00"),end_time:new Date("3/17/2025 0:30:00"),learn_number:10,lesson_name:"Luyện đề HM10_Toán số 08",teacher:"Nguyễn Mạnh Cường"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/16/2025 19:45:00"),end_time:new Date("3/16/2025 23:30:00"),learn_number:1,lesson_name:"HM10_Tiếng anh_Đề số 1",teacher:"Nguyễn Trung Nguyên"},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("3/16/2025 19:45:00"),end_time:new Date("3/16/2025 23:30:00"),learn_number:34,lesson_name:"P1_Các quy tắc tính xác suất",teacher:"Nguyễn Thị Khuyên"},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("3/16/2025 17:45:00"),end_time:new Date("3/16/2025 21:30:00"),learn_number:134,lesson_name:"Ôn thi giữa HK2",teacher:"Trần Ngọc Hà"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/16/2025 19:45:00"),end_time:new Date("3/16/2025 23:30:00"),learn_number:69,lesson_name:"P2_Ôn tập chuyên đề Biểu thức đại số và đa thức một biến",teacher:"Chu Thị Lâm Oanh"},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("3/16/2025 19:45:00"),end_time:new Date("3/16/2025 23:30:00"),learn_number:130,lesson_name:"Ôn thi giữa HK II",teacher:"Trần Ngọc Hà"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/16/2025 19:45:00"),end_time:new Date("3/16/2025 23:30:00"),learn_number:61,lesson_name:"Ôn tập giữa học kì II ",teacher:"Nguyễn Thị Liệu"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/16/2025 19:45:00"),end_time:new Date("3/16/2025 23:30:00"),learn_number:69,lesson_name:"Thực hành tiếng Việt: Câu khẳng định, câu phủ định",teacher:"Nguyễn Thị Thanh Phương"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/16/2025 19:45:00"),end_time:new Date("3/16/2025 23:30:00"),learn_number:69,lesson_name:"Ôn tập giữa kì II (P1)",teacher:"Trần Thị Thanh Xuân"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/17/2025 19:45:00"),end_time:new Date("3/17/2025 23:30:00"),learn_number:2,lesson_name:"HM10_Tiếng anh_Đề số 2",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/17/2025 19:45:00"),end_time:new Date("3/17/2025 23:30:00"),learn_number:9,lesson_name:"HM10_Ngữ văn_Đề số 8",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/17/2025 19:45:00"),end_time:new Date("3/17/2025 23:30:00"),learn_number:10,lesson_name:"Luyện đề HM10_Toán số 08",teacher:"Nguyễn Mạnh Cường"},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("3/17/2025 21:15:00"),end_time:new Date("3/18/2025 1:00:00"),learn_number:32,lesson_name:"Các đại lượng đặc trưng của chuyển động tròn đều",teacher:"Nguyễn Thành Đạt"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/17/2025 17:45:00"),end_time:new Date("3/17/2025 21:30:00"),learn_number:71,lesson_name:"P3_Ứng dụng của phương trình bậc nhất một ẩn để giải quyết một số bài toán thực tế",teacher:"Lê Ngọc Diên"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/17/2025 19:45:00"),end_time:new Date("3/17/2025 23:30:00"),learn_number:63,lesson_name:"P1_Ôn tập chuyên đề Hình học phẳng",teacher:"Lê Ngọc Diên"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/17/2025 19:45:00"),end_time:new Date("3/17/2025 23:30:00"),learn_number:70,lesson_name:"Kĩ năng đọc hiểu văn bản thông tin (P1)",teacher:"Vũ Hồng Ngọc"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/18/2025 19:45:00"),end_time:new Date("3/18/2025 23:30:00"),learn_number:11,lesson_name:"Luyện đề HM10_Toán số 09",teacher:"Nguyễn Mạnh Cường"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/18/2025 19:45:00"),end_time:new Date("3/18/2025 23:30:00"),learn_number:2,lesson_name:"HM10_Tiếng anh_Đề số 2",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/18/2025 19:45:00"),end_time:new Date("3/18/2025 23:30:00"),learn_number:9,lesson_name:"HM10_Ngữ văn_Đề số 8",teacher:"Nguyễn Phi Hùng"},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("3/18/2025 21:15:00"),end_time:new Date("3/19/2025 1:00:00"),learn_number:36,lesson_name:"Ôn tập và kiểm tra giữa học kì II",teacher:"Đinh Thị Oanh"},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("3/18/2025 19:45:00"),end_time:new Date("3/18/2025 23:30:00"),learn_number:32,lesson_name:"Các đại lượng đặc trưng của chuyển động tròn đều",teacher:"Thiều Thị Dung"},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("3/18/2025 17:45:00"),end_time:new Date("3/18/2025 21:30:00"),learn_number:69,lesson_name:"CĐ. Bất đẳng thức Cô si- Hai biến có điều kiện - P2",teacher:"Trần Ngọc Hà"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/18/2025 19:45:00"),end_time:new Date("3/18/2025 23:30:00"),learn_number:71,lesson_name:"P3_Ứng dụng của phương trình bậc nhất một ẩn để giải quyết một số bài toán thực tế",teacher:"Chu Thị Lâm Oanh"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/18/2025 19:45:00"),end_time:new Date("3/18/2025 23:30:00"),learn_number:71,lesson_name:"P1_Các dạng bài trọng tâm về tính chất các đường trong tam giác",teacher:"Lê Ngọc Diên"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/18/2025 17:45:00"),end_time:new Date("3/18/2025 21:30:00"),learn_number:64,lesson_name:"P2_Ôn tập chuyên đề Hình học phẳng",teacher:"Lê Ngọc Diên"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/18/2025 19:45:00"),end_time:new Date("3/18/2025 23:30:00"),learn_number:64,lesson_name:"Ôn tập giữa học kì II (P1)",teacher:"Nguyễn Thị Liệu"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/19/2025 20:15:00"),end_time:new Date("3/20/2025 0:00:00"),learn_number:3,lesson_name:"HM10_Tiếng anh_Đề số 3",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/19/2025 19:45:00"),end_time:new Date("3/19/2025 23:30:00"),learn_number:10,lesson_name:"HM10_Ngữ văn_Đề số 9",teacher:"Nguyễn Phi Hùng"},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("3/19/2025 21:15:00"),end_time:new Date("3/20/2025 1:00:00"),learn_number:36,lesson_name:"P1_Giải quyết nhanh bài toán khoảng cách qua các mô hình",teacher:"Nguyễn Đức Tài"},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("3/19/2025 21:15:00"),end_time:new Date("3/20/2025 1:00:00"),learn_number:32,lesson_name:"Lý thuyết trọng tâm cô đọng về Đơn chất của Halogen",teacher:"Đinh Thị Oanh"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/19/2025 17:45:00"),end_time:new Date("3/19/2025 21:30:00"),learn_number:72,lesson_name:"P1_Luyện tập Hai tam giác đồng dạng",teacher:"Lê Ngọc Diên"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/19/2025 19:45:00"),end_time:new Date("3/19/2025 23:30:00"),learn_number:72,lesson_name:"P2_Các dạng bài trọng tâm về tính chất các đường trong tam giác",teacher:"Lê Ngọc Diên"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/19/2025 19:45:00"),end_time:new Date("3/19/2025 23:30:00"),learn_number:63,lesson_name:"P1_Ôn tập chuyên đề Hình học phẳng",teacher:"Nguyễn Thị Nhung"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/19/2025 19:45:00"),end_time:new Date("3/19/2025 23:30:00"),learn_number:65,lesson_name:"Thực hành Tiếng Việt",teacher:"Hương Giang"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/19/2025 19:45:00"),end_time:new Date("3/19/2025 23:30:00"),learn_number:69,lesson_name:"Ôn tập giữa kì II- Phần 1",teacher:"Hoàng Thị Tuyết"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/20/2025 20:15:00"),end_time:new Date("3/21/2025 0:00:00"),learn_number:4,lesson_name:"HM10_Tiếng anh_Đề số 4",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/20/2025 19:45:00"),end_time:new Date("3/20/2025 23:30:00"),learn_number:11,lesson_name:"Luyện đề HM10_Toán số 09",teacher:"Nguyễn Mạnh Cường"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/20/2025 19:45:00"),end_time:new Date("3/20/2025 23:30:00"),learn_number:10,lesson_name:"HM10_Ngữ văn_Đề số 9",teacher:"Nguyễn Phi Hùng"},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("3/20/2025 19:45:00"),end_time:new Date("3/20/2025 23:30:00"),learn_number:36,lesson_name:"Định luật Ohm đối với đoạn mạch chứa điện trở",teacher:"Thiều Thị Dung"},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("3/20/2025 20:45:00"),end_time:new Date("3/21/2025 0:30:00"),learn_number:33,lesson_name:"Phương pháp quy nạp toán học",teacher:"Nguyễn Thị Khuyên"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/20/2025 19:45:00"),end_time:new Date("3/20/2025 23:30:00"),learn_number:70,lesson_name:"Các kiến thức nền tảng về tính chất các đường trong tam giác",teacher:"Chu Thị Lâm Oanh"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/20/2025 19:45:00"),end_time:new Date("3/20/2025 23:30:00"),learn_number:70,lesson_name:"Kĩ năng đọc hiểu văn bản thông tin (P1)",teacher:"Nguyễn Hải Quỳnh"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/20/2025 19:45:00"),end_time:new Date("3/20/2025 23:30:00"),learn_number:69,lesson_name:"Thực hành tiếng Việt: Câu khẳng định, câu phủ định",teacher:"Vũ Hồng Ngọc"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/21/2025 19:45:00"),end_time:new Date("3/21/2025 23:30:00"),learn_number:11,lesson_name:"HM10_Ngữ văn_Đề số 10",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/21/2025 19:45:00"),end_time:new Date("3/21/2025 23:30:00"),learn_number:3,lesson_name:"HM10_Tiếng anh_Đề số 3",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/21/2025 19:45:00"),end_time:new Date("3/21/2025 23:30:00"),learn_number:11,lesson_name:"Luyện đề HM10_Toán số 09",teacher:"Nguyễn Mạnh Cường"},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("3/21/2025 21:15:00"),end_time:new Date("3/22/2025 1:00:00"),learn_number:36,lesson_name:"Định luật Ohm đối với đoạn mạch chứa điện trở",teacher:"Nguyễn Thành Đạt"},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("3/21/2025 19:45:00"),end_time:new Date("3/21/2025 23:30:00"),learn_number:33,lesson_name:"Phương pháp và phân loại các dạng bài tập về Đơn chất của Halogen",teacher:"Vũ Thị Thùy Dương"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/21/2025 19:45:00"),end_time:new Date("3/21/2025 23:30:00"),learn_number:72,lesson_name:"P1_Luyện tập Hai tam giác đồng dạng",teacher:"Chu Thị Lâm Oanh"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/21/2025 17:45:00"),end_time:new Date("3/21/2025 21:30:00"),learn_number:70,lesson_name:"Kĩ năng đọc hiểu văn bản thông tin (P1)",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/22/2025 19:45:00"),end_time:new Date("3/22/2025 23:30:00"),learn_number:12,lesson_name:"HM10_Ngữ văn_Tổng kết 2",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/22/2025 19:45:00"),end_time:new Date("3/22/2025 23:30:00"),learn_number:10,lesson_name:"Luyện đề HM10_Toán số 08",teacher:"Nguyễn Mạnh Cường"},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("3/22/2025 19:45:00"),end_time:new Date("3/22/2025 23:30:00"),learn_number:35,lesson_name:"Lý thuyết trọng tâm cô đọng và các dạng bài tập về Phenol",teacher:"Vũ Thị Thùy Dương"},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("3/22/2025 19:45:00"),end_time:new Date("3/22/2025 23:30:00"),learn_number:33,lesson_name:"Phương pháp quy nạp toán học",teacher:"Phạm Thái Sơn"},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("3/22/2025 17:45:00"),end_time:new Date("3/22/2025 21:30:00"),learn_number:70,lesson_name:"CĐ. Nghiệm nguyên - P2",teacher:"Trần Ngọc Hà"},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("3/22/2025 19:45:00"),end_time:new Date("3/22/2025 23:30:00"),learn_number:135,lesson_name:"Ôn thi giữa HK2 - P1",teacher:"Trần Ngọc Hà"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/22/2025 19:45:00"),end_time:new Date("3/22/2025 23:30:00"),learn_number:64,lesson_name:"P2_Ôn tập chuyên đề Hình học phẳng",teacher:"Nguyễn Thị Nhung"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/22/2025 19:45:00"),end_time:new Date("3/22/2025 23:30:00"),learn_number:68,lesson_name:"Kĩ năng đọc hiểu kiểu văn bản nghị luận xã hội (P3)",teacher:"Hoàng Thị Tuyết"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/22/2025 19:45:00"),end_time:new Date("3/22/2025 23:30:00"),learn_number:66,lesson_name:"Ôn tập giữa học kì II (P2)",teacher:"Trần Thị Thanh Xuân"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/23/2025 20:45:00"),end_time:new Date("3/24/2025 0:30:00"),learn_number:12,lesson_name:"Luyện đề HM10_Toán số 10",teacher:"Nguyễn Mạnh Cường"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/23/2025 19:45:00"),end_time:new Date("3/23/2025 23:30:00"),learn_number:3,lesson_name:"HM10_Tiếng anh_Đề số 3",teacher:"Nguyễn Trung Nguyên"},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("3/23/2025 19:45:00"),end_time:new Date("3/23/2025 23:30:00"),learn_number:35,lesson_name:"P2_Các quy tắc tính xác suất",teacher:"Nguyễn Thị Khuyên"},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("3/23/2025 17:45:00"),end_time:new Date("3/23/2025 21:30:00"),learn_number:135,lesson_name:"CĐ. Giải toán bằng cách lập phương trình-bài toán công việc,...",teacher:"Trần Ngọc Hà"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/23/2025 19:45:00"),end_time:new Date("3/23/2025 23:30:00"),learn_number:71,lesson_name:"P1_Các dạng bài trọng tâm về tính chất các đường trong tam giác",teacher:"Chu Thị Lâm Oanh"},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("3/23/2025 19:45:00"),end_time:new Date("3/23/2025 23:30:00"),learn_number:131,lesson_name:"CĐ. Các bài toán đếm số điểm, đường thẳng, đoạn thẳng, tia, góc",teacher:"Trần Ngọc Hà"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/23/2025 19:45:00"),end_time:new Date("3/23/2025 23:30:00"),learn_number:63,lesson_name:"Kĩ năng đọc hiểu văn bản ",teacher:"Nguyễn Thị Liệu"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/23/2025 19:45:00"),end_time:new Date("3/23/2025 23:30:00"),learn_number:71,lesson_name:"Kỹ năng viết bài văn nghị luận về một vấn đề của đời sống",teacher:"Nguyễn Thị Thanh Phương"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/23/2025 19:45:00"),end_time:new Date("3/23/2025 23:30:00"),learn_number:71,lesson_name:"Ôn tập giữa kì II (P2)",teacher:"Trần Thị Thanh Xuân"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/24/2025 19:45:00"),end_time:new Date("3/24/2025 23:30:00"),learn_number:4,lesson_name:"HM10_Tiếng anh_Đề số 4",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/24/2025 19:45:00"),end_time:new Date("3/24/2025 23:30:00"),learn_number:11,lesson_name:"HM10_Ngữ văn_Đề số 10",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/24/2025 19:45:00"),end_time:new Date("3/24/2025 23:30:00"),learn_number:12,lesson_name:"Luyện đề HM10_Toán số 10",teacher:"Nguyễn Mạnh Cường"},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("3/24/2025 21:15:00"),end_time:new Date("3/25/2025 1:00:00"),learn_number:33,lesson_name:"Bài toán chu kì, tần số trong chuyển động tròn đều",teacher:"Nguyễn Thành Đạt"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/24/2025 17:45:00"),end_time:new Date("3/24/2025 21:30:00"),learn_number:73,lesson_name:"P2_Luyện tập Hai tam giác đồng dạng",teacher:"Lê Ngọc Diên"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/24/2025 19:45:00"),end_time:new Date("3/24/2025 23:30:00"),learn_number:65,lesson_name:"Ôn tập chuyên đề Thống kê số liệu - biểu đồ",teacher:"Lê Ngọc Diên"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/24/2025 19:45:00"),end_time:new Date("3/24/2025 23:30:00"),learn_number:72,lesson_name:"Kĩ năng đọc hiểu văn bản thông tin (P2)",teacher:"Vũ Hồng Ngọc"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/25/2025 19:45:00"),end_time:new Date("3/25/2025 23:30:00"),learn_number:13,lesson_name:"P3_Chiến lược làm bài và kĩ năng xử lí các dạng câu hỏi học sinh thường mắc sai lầm",teacher:"Nguyễn Mạnh Cường"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/25/2025 19:45:00"),end_time:new Date("3/25/2025 23:30:00"),learn_number:4,lesson_name:"HM10_Tiếng anh_Đề số 4",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/25/2025 19:45:00"),end_time:new Date("3/25/2025 23:30:00"),learn_number:11,lesson_name:"HM10_Ngữ văn_Đề số 10",teacher:"Nguyễn Phi Hùng"},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("3/25/2025 21:15:00"),end_time:new Date("3/26/2025 1:00:00"),learn_number:37,lesson_name:"Lý thuyết trọng tâm cô đọng về Hợp chất carbonyl",teacher:"Đinh Thị Oanh"},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("3/25/2025 19:45:00"),end_time:new Date("3/25/2025 23:30:00"),learn_number:33,lesson_name:"Bài toán chu kì, tần số trong chuyển động tròn đều",teacher:"Thiều Thị Dung"},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("3/25/2025 17:45:00"),end_time:new Date("3/25/2025 21:30:00"),learn_number:71,lesson_name:"CĐ. Bất đẳng thức Cộng mẫu",teacher:"Trần Ngọc Hà"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/25/2025 19:45:00"),end_time:new Date("3/25/2025 23:30:00"),learn_number:73,lesson_name:"P2_Luyện tập Hai tam giác đồng dạng",teacher:"Chu Thị Lâm Oanh"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/25/2025 19:45:00"),end_time:new Date("3/25/2025 23:30:00"),learn_number:73,lesson_name:"P3_Các dạng bài trọng tâm về tính chất các đường trong tam giác",teacher:"Lê Ngọc Diên"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/25/2025 17:45:00"),end_time:new Date("3/25/2025 21:30:00"),learn_number:66,lesson_name:"Ôn tập chuyên đề Xác suất",teacher:"Lê Ngọc Diên"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/25/2025 19:45:00"),end_time:new Date("3/25/2025 23:30:00"),learn_number:66,lesson_name:"Ôn tập giữa học kì II (P2)",teacher:"Nguyễn Thị Liệu"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/26/2025 20:15:00"),end_time:new Date("3/27/2025 0:00:00"),learn_number:5,lesson_name:"HM10_Tiếng anh_Đề số 5",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/26/2025 19:45:00"),end_time:new Date("3/26/2025 23:30:00"),learn_number:12,lesson_name:"HM10_Ngữ văn_Tổng kết 2",teacher:"Nguyễn Phi Hùng"},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("3/26/2025 21:15:00"),end_time:new Date("3/27/2025 1:00:00"),learn_number:37,lesson_name:"P2_Giải quyết nhanh bài toán khoảng cách qua các mô hình",teacher:"Nguyễn Đức Tài"},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("3/26/2025 21:15:00"),end_time:new Date("3/27/2025 1:00:00"),learn_number:33,lesson_name:"Phương pháp và phân loại các dạng bài tập về Đơn chất của Halogen",teacher:"Đinh Thị Oanh"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/26/2025 17:45:00"),end_time:new Date("3/26/2025 21:30:00"),learn_number:74,lesson_name:"Ôn tập theo chủ đề (P1)",teacher:"Lê Ngọc Diên"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/26/2025 19:45:00"),end_time:new Date("3/26/2025 23:30:00"),learn_number:74,lesson_name:"P4_Các dạng bài trọng tâm về tính chất các đường trong tam giác",teacher:"Lê Ngọc Diên"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/26/2025 19:45:00"),end_time:new Date("3/26/2025 23:30:00"),learn_number:65,lesson_name:"Ôn tập chuyên đề Thống kê số liệu - biểu đồ",teacher:"Nguyễn Thị Nhung"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/26/2025 19:45:00"),end_time:new Date("3/26/2025 23:30:00"),learn_number:67,lesson_name:"Kĩ năng viết bài văn trình bày ý kiến về một hiện tượng (vấn đề) mà em quan tâm",teacher:"Hương Giang"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/26/2025 19:45:00"),end_time:new Date("3/26/2025 23:30:00"),learn_number:71,lesson_name:"Ôn tập giữa kì II- Phần 2",teacher:"Hoàng Thị Tuyết"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/27/2025 20:15:00"),end_time:new Date("3/28/2025 0:00:00"),learn_number:6,lesson_name:"HM10_Tiếng anh_Đề số 6",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/27/2025 19:45:00"),end_time:new Date("3/27/2025 23:30:00"),learn_number:13,lesson_name:"P3_Chiến lược làm bài và kĩ năng xử lí các dạng câu hỏi học sinh thường mắc sai lầm",teacher:"Nguyễn Mạnh Cường"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/27/2025 19:45:00"),end_time:new Date("3/27/2025 23:30:00"),learn_number:12,lesson_name:"HM10_Ngữ văn_Tổng kết 2",teacher:"Nguyễn Phi Hùng"},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("3/27/2025 19:45:00"),end_time:new Date("3/27/2025 23:30:00"),learn_number:37,lesson_name:"Nguồn điện. Định luật Ohm đối với mạch chứa điện trở và nguồn",teacher:"Thiều Thị Dung"},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("3/27/2025 20:45:00"),end_time:new Date("3/28/2025 0:30:00"),learn_number:34,lesson_name:"Nhị thức Newton và các dạng bài trọng tâm",teacher:"Nguyễn Thị Khuyên"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/27/2025 19:45:00"),end_time:new Date("3/27/2025 23:30:00"),learn_number:72,lesson_name:"P2_Các dạng bài trọng tâm về tính chất các đường trong tam giác",teacher:"Chu Thị Lâm Oanh"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/27/2025 19:45:00"),end_time:new Date("3/27/2025 23:30:00"),learn_number:72,lesson_name:"Kĩ năng đọc hiểu văn bản thông tin (P2)",teacher:"Nguyễn Hải Quỳnh"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/27/2025 19:45:00"),end_time:new Date("3/27/2025 23:30:00"),learn_number:71,lesson_name:"Kỹ năng viết bài văn nghị luận về một vấn đề của đời sống",teacher:"Vũ Hồng Ngọc"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/28/2025 19:45:00"),end_time:new Date("3/28/2025 23:30:00"),learn_number:13,lesson_name:"HM10_Ngữ văn_Đề số 11",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/28/2025 19:45:00"),end_time:new Date("3/28/2025 23:30:00"),learn_number:5,lesson_name:"HM10_Tiếng anh_Đề số 5",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/28/2025 19:45:00"),end_time:new Date("3/28/2025 23:30:00"),learn_number:13,lesson_name:"P3_Chiến lược làm bài và kĩ năng xử lí các dạng câu hỏi học sinh thường mắc sai lầm",teacher:"Nguyễn Mạnh Cường"},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("3/28/2025 21:15:00"),end_time:new Date("3/29/2025 1:00:00"),learn_number:37,lesson_name:"Nguồn điện. Định luật Ohm đối với mạch chứa điện trở và nguồn",teacher:"Nguyễn Thành Đạt"},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("3/28/2025 19:45:00"),end_time:new Date("3/28/2025 23:30:00"),learn_number:34,lesson_name:"Lý thuyết trọng tâm cô đọng về Hydrogen halide và muối halide",teacher:"Vũ Thị Thùy Dương"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/28/2025 19:45:00"),end_time:new Date("3/28/2025 23:30:00"),learn_number:74,lesson_name:"Ôn tập theo chủ đề (P1)",teacher:"Chu Thị Lâm Oanh"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/28/2025 17:45:00"),end_time:new Date("3/28/2025 21:30:00"),learn_number:72,lesson_name:"Kĩ năng đọc hiểu văn bản thông tin (P2)",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/29/2025 19:45:00"),end_time:new Date("3/29/2025 23:30:00"),learn_number:14,lesson_name:"HM10_Ngữ văn_Đề số 12",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/29/2025 19:45:00"),end_time:new Date("3/29/2025 23:30:00"),learn_number:12,lesson_name:"Luyện đề HM10_Toán số 10",teacher:"Nguyễn Mạnh Cường"},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("3/29/2025 19:45:00"),end_time:new Date("3/29/2025 23:30:00"),learn_number:36,lesson_name:"Ôn tập và kiểm tra giữa học kì II",teacher:"Vũ Thị Thùy Dương"},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("3/29/2025 19:45:00"),end_time:new Date("3/29/2025 23:30:00"),learn_number:34,lesson_name:"Nhị thức Newton và các dạng bài trọng tâm",teacher:"Phạm Thái Sơn"},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("3/29/2025 17:45:00"),end_time:new Date("3/29/2025 21:30:00"),learn_number:72,lesson_name:"CĐ. Số nguyên tố - P1",teacher:"Trần Ngọc Hà"},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("3/29/2025 19:45:00"),end_time:new Date("3/29/2025 23:30:00"),learn_number:136,lesson_name:"Ôn thi giữa HK2 - P2",teacher:"Trần Ngọc Hà"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/29/2025 19:45:00"),end_time:new Date("3/29/2025 23:30:00"),learn_number:66,lesson_name:"Ôn tập chuyên đề Xác suất",teacher:"Nguyễn Thị Nhung"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/29/2025 19:45:00"),end_time:new Date("3/29/2025 23:30:00"),learn_number:70,lesson_name:"Kĩ năng đọc hiểu văn bản thông tin (P1)",teacher:"Hoàng Thị Tuyết"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/29/2025 19:45:00"),end_time:new Date("3/29/2025 23:30:00"),learn_number:68,lesson_name:"Kĩ năng thực hành đọc hiểu văn bản truyện (truyện ngắn)",teacher:"Trần Thị Thanh Xuân"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/30/2025 20:45:00"),end_time:new Date("3/31/2025 0:30:00"),learn_number:14,lesson_name:"Luyện đề HM10_Toán số 11",teacher:"Nguyễn Mạnh Cường"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/30/2025 19:45:00"),end_time:new Date("3/30/2025 23:30:00"),learn_number:5,lesson_name:"HM10_Tiếng anh_Đề số 5",teacher:"Nguyễn Trung Nguyên"},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("3/30/2025 19:45:00"),end_time:new Date("3/30/2025 23:30:00"),learn_number:36,lesson_name:"P1_Giải quyết nhanh bài toán khoảng cách qua các mô hình",teacher:"Nguyễn Thị Khuyên"},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("3/30/2025 17:45:00"),end_time:new Date("3/30/2025 21:30:00"),learn_number:136,lesson_name:"CĐ. Các bài toán về trực tâm",teacher:"Trần Ngọc Hà"},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("3/30/2025 19:45:00"),end_time:new Date("3/30/2025 23:30:00"),learn_number:73,lesson_name:"P3_Các dạng bài trọng tâm về tính chất các đường trong tam giác",teacher:"Chu Thị Lâm Oanh"},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("3/30/2025 19:45:00"),end_time:new Date("3/30/2025 23:30:00"),learn_number:132,lesson_name:"CĐ. GTNN, GTLN",teacher:"Trần Ngọc Hà"},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("3/30/2025 19:45:00"),end_time:new Date("3/30/2025 23:30:00"),learn_number:65,lesson_name:"Thực hành Tiếng Việt",teacher:"Nguyễn Thị Liệu"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/30/2025 19:45:00"),end_time:new Date("3/30/2025 23:30:00"),learn_number:73,lesson_name:"Kĩ năng đọc hiểu văn bản nghị luận văn học",teacher:"Nguyễn Thị Thanh Phương"},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("3/30/2025 19:45:00"),end_time:new Date("3/30/2025 23:30:00"),learn_number:73,lesson_name:"Kĩ năng đọc hiểu văn bản tùy bút, tản văn",teacher:"Trần Thị Thanh Xuân"},
        {code:"luyendetienganh-9",subject:"Tiếng Anh Lớp 9",start_time:new Date("3/31/2025 19:45:00"),end_time:new Date("3/31/2025 23:30:00"),learn_number:6,lesson_name:"HM10_Tiếng anh_Đề số 6",teacher:"Nguyễn Trung Nguyên"},
        {code:"luyendenguvan-9",subject:"Ngữ văn Lớp 9",start_time:new Date("3/31/2025 19:45:00"),end_time:new Date("3/31/2025 23:30:00"),learn_number:13,lesson_name:"HM10_Ngữ văn_Đề số 11",teacher:"Nguyễn Phi Hùng"},
        {code:"luyendetoan-9",subject:"Toán Lớp 9",start_time:new Date("3/31/2025 19:45:00"),end_time:new Date("3/31/2025 23:30:00"),learn_number:14,lesson_name:"Luyện đề HM10_Toán số 11",teacher:"Nguyễn Mạnh Cường"},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("3/31/2025 21:15:00"),end_time:new Date("4/1/2025 1:00:00"),learn_number:34,lesson_name:"Lực hướng tâm và gia tốc hướng tâm",teacher:"Nguyễn Thành Đạt"},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("3/31/2025 17:45:00"),end_time:new Date("3/31/2025 21:30:00"),learn_number:75,lesson_name:"Ôn tập theo chủ đề (P2)",teacher:"Lê Ngọc Diên"},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("3/31/2025 19:45:00"),end_time:new Date("3/31/2025 23:30:00"),learn_number:67,lesson_name:"P1_Ôn tập chuyên đề Phân số - số thập phần",teacher:"Lê Ngọc Diên"},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("3/31/2025 19:45:00"),end_time:new Date("3/31/2025 23:30:00"),learn_number:74,lesson_name:"Viết văn bản thuyết minh giải thích một hiện tượng tự nhiên - Viết văn bản kiến nghị về một vấn đề của đời sống",teacher:"Vũ Hồng Ngọc"},
        { code: "demotopclass", subject: "Demo", start_time: new Date("2/6/2025 13:45:00"), end_time: new Date("2/6/2025 16:05:00"), learn_number: 1, lesson_name:"Buổi Demo",teacher:"Vũ Linh"}
    ];
    
    const boxList = [
        {code:"toan-6",boxid:"952000",boxtag:"3Ot9Nu",tkey:"a2993d7b370255c2",tid:"4"},
        {code:"toannangcao-6",boxid:"952000",boxtag:"3Ot9Nu",tkey:"a2993d7b370255c2",tid:"4"},
        {code:"butoan-6",boxid:"952000",boxtag:"3Ot9Nu",tkey:"38727f2a2cd6fcd9",tid:"6"},
        {code:"nguvan-6",boxid:"952000",boxtag:"3Ot9Nu",tkey:"af25514704e26d88",tid:"5"},
        {code:"toan-7",boxid:"952000",boxtag:"3Ot9Nu",tkey:"c4aecd01f8562923",tid:"7"},
        {code:"toannangcao-7",boxid:"952000",boxtag:"3Ot9Nu",tkey:"c4aecd01f8562923",tid:"7"},
        {code:"nguvan-7",boxid:"952000",boxtag:"3Ot9Nu",tkey:"58890d26d23811e7",tid:"8"},
        {code:"toan-8",boxid:"952000",boxtag:"3Ot9Nu",tkey:"5136dc4e404befa6",tid:"10"},
        {code:"toannangcao-8",boxid:"952000",boxtag:"3Ot9Nu",tkey:"5136dc4e404befa6",tid:"10"},
        {code:"nguvan-8",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b9ab480b2d65f620",tid:"11"},
        {code:"toannangcao-9",boxid:"952000",boxtag:"3Ot9Nu",tkey:"155135884332be2e",tid:"15"},
        {code:"toan-10",boxid:"952000",boxtag:"3Ot9Nu",tkey:"62a7f4c84da78cd8",tid:"16"},
        {code:"vatli-10",boxid:"952000",boxtag:"3Ot9Nu",tkey:"92cfe9cd0263baf9",tid:"17"},
        {code:"hoahoc-10",boxid:"952000",boxtag:"3Ot9Nu",tkey:"28cfea1a5b70f691",tid:"18"},
        {code:"toan-11",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b1e6b67cdf7a36bf",tid:"19"},
        {code:"vatli-11",boxid:"952000",boxtag:"3Ot9Nu",tkey:"0f2d03f2707e49c6",tid:"20"},
        {code:"hoahoc-11",boxid:"952000",boxtag:"3Ot9Nu",tkey:"3210d81d3fc6be68",tid:"21"},
        {code:"luyendetoan-9",boxid:"952000",boxtag:"3Ot9Nu",tkey:"1ac42789f9981f9b",tid:"92"},
        {code:"luyendenguvan-9",boxid:"952000",boxtag:"3Ot9Nu",tkey:"61ee4d14f5c296dc",tid:"93"},
        { code: "demotopclass", boxid: "952000", boxtag: "3Ot9Nu", tkey: "5cec50d8a8e9397e", tid: "3" }
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
            window.location.href = "https://topclass.hocmai.vn/lichhoc";
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
                    window.location.href = "https://topclass.hocmai.vn/lichhoc"+"&return=multi";
    
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
        var code = window.location.href.substring(30);
    
        const learn_number = checkClassAvailability(code);
        if (learn_number == 0) {
            window.location.href = "https://topclass.hocmai.vn/lichhoc";
        }
    
        if (c_user != "") {
            //check lượt học
            await check(c_user, code, learn_number);
        } else {
            window.location.href = "https://topclass.hocmai.vn/lichhoc";
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
                    window.location.href = "https://topclass.hocmai.vn/lichhoc";
                }
            } catch (error) {
                console.error("Fetch error: ", error);
                console.log(error.message);
                alert("Hệ thống đang quá tải, vui lòng thử lại sau");
            }
        }
    }
