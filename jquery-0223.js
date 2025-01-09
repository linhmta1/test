//copy all >> file js github
const videoElement = document.getElementById('video');
    const startButton = document.getElementById('startButton');
    let status = 0;
    var data;
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
    {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("1/3/2025 21:15:00"),end_time:new Date("1/3/2025 23:30:00"),learn_number:26,lesson_name:"Cường độ điện trường do hệ điện tích gây ra",teacher:"Nguyễn Thành Đạt"},
    {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("1/3/2025 19:45:00"),end_time:new Date("1/3/2025 22:00:00"),learn_number:23,lesson_name:"Lý thuyết trọng tâm cô đọng về Enthalpy và biến thiên enthalpy của phản ứng hóa học",teacher:"Vũ Thị Thùy Dương"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("1/3/2025 19:45:00"),end_time:new Date("1/3/2025 22:00:00"),learn_number:27,lesson_name:"Thơ bảy chữ, tám chữ, thơ tự do - Phần 2",teacher:"Nguyễn Phi Hùng"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("1/3/2025 17:45:00"),end_time:new Date("1/3/2025 20:00:00"),learn_number:52,lesson_name:"Viết bài văn phân tích một tác phẩm (truyện)",teacher:"Nguyễn Phi Hùng"},
    {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("1/4/2025 19:45:00"),end_time:new Date("1/4/2025 22:00:00"),learn_number:26,lesson_name:"Lý thuyết trọng tâm cô đọng về Alkyne - ankin",teacher:"Vũ Thị Thùy Dương"},
    {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("1/4/2025 19:45:00"),end_time:new Date("1/4/2025 22:00:00"),learn_number:24,lesson_name:"Các công thức và kĩ năng xử lí mẫu số liệu không ghép nhóm",teacher:"Phạm Thái Sơn"},
    {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("1/4/2025 17:45:00"),end_time:new Date("1/4/2025 20:00:00"),learn_number:52,lesson_name:"CĐ. Giải hệ phương trình đối xứng loại 1",teacher:"Trần Ngọc Hà"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("1/4/2025 19:45:00"),end_time:new Date("1/4/2025 22:00:00"),learn_number:126,lesson_name:"Bất đẳng thức về cạnh trong tam giác",teacher:"Trần Ngọc Hà"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("1/4/2025 19:45:00"),end_time:new Date("1/4/2025 22:00:00"),learn_number:44,lesson_name:"P1,2_Các dạng bài trọng tâm về các phép phân số - số thập phân",teacher:"Nguyễn Thị Nhung"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("1/4/2025 19:45:00"),end_time:new Date("1/4/2025 22:00:00"),learn_number:50,lesson_name:"Kĩ năng đọc hiểu truyện ngụ ngôn - tục ngữ (P2)",teacher:"Hoàng Thị Tuyết"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("1/4/2025 19:45:00"),end_time:new Date("1/4/2025 22:00:00"),learn_number:46,lesson_name:"Thực hành Tiếng Việt: Mở rộng chủ ngữ",teacher:"Trần Thị Thanh Xuân"},
    {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("1/5/2025 19:45:00"),end_time:new Date("1/5/2025 22:00:00"),learn_number:26,lesson_name:"Giải quyết nhanh bài toán phương trình - bất phương trình mũ - logarit (P2)",teacher:"Nguyễn Thị Khuyên"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("1/5/2025 20:45:00"),end_time:new Date("1/5/2025 23:00:00"),learn_number:51,lesson_name:"Kỹ năng xử lý bài toán giá trị lớn nhất, giá trị nhỏ nhất trong hình học",teacher:"Nguyễn Mạnh Cường"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("1/5/2025 17:45:00"),end_time:new Date("1/5/2025 20:00:00"),learn_number:126,lesson_name:"CĐ. Rút gọn phân thức và bài toàn nguyên",teacher:"Trần Ngọc Hà"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("1/5/2025 19:45:00"),end_time:new Date("1/5/2025 22:00:00"),learn_number:52,lesson_name:"Các dạng bài thường gặp trong biểu đồ đoạn thẳng",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("1/5/2025 19:45:00"),end_time:new Date("1/5/2025 22:00:00"),learn_number:122,lesson_name:"Phân số (Phần 1)",teacher:"Trần Ngọc Hà"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("1/5/2025 19:45:00"),end_time:new Date("1/5/2025 22:00:00"),learn_number:45,lesson_name:"Kĩ năng đọc hiểu văn bản và thực hành Tiếng Việt",teacher:"Hương Giang"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("1/5/2025 19:45:00"),end_time:new Date("1/5/2025 22:00:00"),learn_number:53,lesson_name:"Kĩ năng đọc hiểu văn bản truyện",teacher:"Nguyễn Thị Thanh Phương"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("1/5/2025 19:45:00"),end_time:new Date("1/5/2025 22:00:00"),learn_number:53,lesson_name:"Thực hành Tiếng Việt: Nói quá, nói giảm, nói tránh",teacher:"Trần Thị Thanh Xuân"},
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("1/6/2025 21:15:00"),end_time:new Date("1/6/2025 23:30:00"),learn_number:23,lesson_name:"Động năng. Thế năng trọng trường",teacher:"Nguyễn Thành Đạt"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("1/6/2025 19:45:00"),end_time:new Date("1/6/2025 22:00:00"),learn_number:51,lesson_name:"Kỹ năng xử lý bài toán giá trị lớn nhất, giá trị nhỏ nhất trong hình học",teacher:"Nguyễn Mạnh Cường"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("1/6/2025 19:45:00"),end_time:new Date("1/6/2025 22:00:00"),learn_number:27,lesson_name:"Thơ bảy chữ, tám chữ, thơ tự do - Phần 2",teacher:"Nguyễn Phi Hùng"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("1/6/2025 17:45:00"),end_time:new Date("1/6/2025 20:00:00"),learn_number:53,lesson_name:"Các dạng bài trọng tâm về đường trung bình của tam giác",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("1/6/2025 19:45:00"),end_time:new Date("1/6/2025 22:00:00"),learn_number:45,lesson_name:"P3_Các dạng bài trọng tâm về các phép phân số - số thập phân",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("1/6/2025 19:45:00"),end_time:new Date("1/6/2025 22:00:00"),learn_number:52,lesson_name:"Viết bài văn phân tích một tác phẩm (truyện)",teacher:"Vũ Hồng Ngọc"},
    {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("1/7/2025 21:15:00"),end_time:new Date("1/7/2025 23:30:00"),learn_number:27,lesson_name:"Phương pháp và phân loại các dạng bài tập về Alkyne - ankin",teacher:"Đinh Thị Oanh"},
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("1/7/2025 19:45:00"),end_time:new Date("1/7/2025 22:00:00"),learn_number:23,lesson_name:"Động năng. Thế năng trọng trường",teacher:"Thiều Thị Dung"},
    {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("1/7/2025 17:45:00"),end_time:new Date("1/7/2025 20:00:00"),learn_number:53,lesson_name:"CĐ. Chứng minh đi qua điểm cố định - P2",teacher:"Trần Ngọc Hà"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("1/7/2025 19:45:00"),end_time:new Date("1/7/2025 22:00:00"),learn_number:52,lesson_name:"Kỹ năng xử lý các dạng toán khác trong hình học",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("1/7/2025 19:45:00"),end_time:new Date("1/7/2025 22:00:00"),learn_number:53,lesson_name:"Các dạng bài trọng tâm về đường trung bình của tam giác",teacher:"Chu Thị Lâm Oanh"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("1/7/2025 19:45:00"),end_time:new Date("1/7/2025 22:00:00"),learn_number:53,lesson_name:"Các dạng bài thường gặp trong biểu đồ quạt tròn",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("1/7/2025 17:45:00"),end_time:new Date("1/7/2025 20:00:00"),learn_number:46,lesson_name:"Một số bài tập thường gặp liên quan đến điểm và đường thẳng ",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("1/7/2025 19:45:00"),end_time:new Date("1/7/2025 22:00:00"),learn_number:46,lesson_name:"Thực hành Tiếng Việt: Mở rộng chủ ngữ",teacher:"Nguyễn Thị Liệu"},
    {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("1/8/2025 21:15:00"),end_time:new Date("1/8/2025 23:30:00"),learn_number:27,lesson_name:"Ôn tập và kiểm tra học kì 1",teacher:"Nguyễn Đức Tài"},
    {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("1/8/2025 21:15:00"),end_time:new Date("1/8/2025 23:30:00"),learn_number:23,lesson_name:"Lý thuyết trọng tâm cô đọng về Enthalpy và biến thiên enthalpy của phản ứng hóa học",teacher:"Đinh Thị Oanh"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("1/8/2025 17:45:00"),end_time:new Date("1/8/2025 20:00:00"),learn_number:54,lesson_name:"Phương pháp xử lí dạng bài trọng tâm về tính chất đường phân giác của tam giác",teacher:"Lê Ngọc Diên"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("1/8/2025 19:45:00"),end_time:new Date("1/8/2025 22:00:00"),learn_number:54,lesson_name:"P1_Các dạng bài thường gặp về biểu thức đại số, đơn thức, đa thức một biến",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("1/8/2025 19:45:00"),end_time:new Date("1/8/2025 22:00:00"),learn_number:45,lesson_name:"P3_Các dạng bài trọng tâm về các phép phân số - số thập phân",teacher:"Nguyễn Thị Nhung"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("1/8/2025 19:45:00"),end_time:new Date("1/8/2025 22:00:00"),learn_number:47,lesson_name:"Kĩ năng viết bài văn tả cảnh sinh hoạt ",teacher:"Hương Giang"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("1/8/2025 19:45:00"),end_time:new Date("1/8/2025 22:00:00"),learn_number:51,lesson_name:"Kĩ năng đọc hiểu văn bản truyện ngụ ngôn và tục ngữ",teacher:"Hoàng Thị Tuyết"},
    {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("1/9/2025 19:45:00"),end_time:new Date("1/9/2025 22:00:00"),learn_number:27,lesson_name:"Điện trường triệt tiêu",teacher:"Thiều Thị Dung"},
    {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("1/9/2025 20:45:00"),end_time:new Date("1/9/2025 23:00:00"),learn_number:24,lesson_name:"Các công thức và kĩ năng xử lí mẫu số liệu không ghép nhóm",teacher:"Nguyễn Thị Khuyên"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("1/9/2025 19:45:00"),end_time:new Date("1/9/2025 22:00:00"),learn_number:52,lesson_name:"Kỹ năng xử lý các dạng toán khác trong hình học",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("1/9/2025 19:45:00"),end_time:new Date("1/9/2025 22:00:00"),learn_number:53,lesson_name:"Các dạng bài thường gặp trong biểu đồ quạt tròn",teacher:"Chu Thị Lâm Oanh"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("1/9/2025 19:45:00"),end_time:new Date("1/9/2025 22:00:00"),learn_number:54,lesson_name:"Kĩ năng đọc hiểu truyện khoa học viễn tưởng (P1)",teacher:"Nguyễn Hải Quỳnh"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("1/9/2025 19:45:00"),end_time:new Date("1/9/2025 22:00:00"),learn_number:53,lesson_name:"Kĩ năng đọc hiểu văn bản truyện",teacher:"Vũ Hồng Ngọc"},
    {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("1/10/2025 21:15:00"),end_time:new Date("1/10/2025 23:30:00"),learn_number:27,lesson_name:"Điện trường triệt tiêu",teacher:"Nguyễn Thành Đạt"},
    {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("1/10/2025 19:45:00"),end_time:new Date("1/10/2025 22:00:00"),learn_number:24,lesson_name:"P1 - Phương pháp và phân loại các dạng bài tập về Năng lượng hóa học",teacher:"Vũ Thị Thùy Dương"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("1/10/2025 19:45:00"),end_time:new Date("1/10/2025 22:00:00"),learn_number:28,lesson_name:"Thơ bảy chữ, tám chữ, thơ tự do - Phần 3",teacher:"Nguyễn Phi Hùng"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("1/10/2025 19:45:00"),end_time:new Date("1/10/2025 22:00:00"),learn_number:54,lesson_name:"Phương pháp xử lí dạng bài trọng tâm về tính chất đường phân giác của tam giác",teacher:"Chu Thị Lâm Oanh"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("1/10/2025 17:45:00"),end_time:new Date("1/10/2025 20:00:00"),learn_number:54,lesson_name:"Kĩ năng đọc hiểu văn bản thơ tự do (P1)",teacher:"Nguyễn Phi Hùng"},
    {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("1/11/2025 19:45:00"),end_time:new Date("1/11/2025 22:00:00"),learn_number:27,lesson_name:"Phương pháp và phân loại các dạng bài tập về Alkyne - ankin",teacher:"Vũ Thị Thùy Dương"},
    {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("1/11/2025 19:45:00"),end_time:new Date("1/11/2025 22:00:00"),learn_number:25,lesson_name:"Hai quy tắc đếm và sơ đồ hình cây",teacher:"Phạm Thái Sơn"},
    {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("1/11/2025 17:45:00"),end_time:new Date("1/11/2025 20:00:00"),learn_number:54,lesson_name:"CĐ. Giải hệ phương trình đẳng cấp",teacher:"Trần Ngọc Hà"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("1/11/2025 19:45:00"),end_time:new Date("1/11/2025 22:00:00"),learn_number:127,lesson_name:"Ôn thi HK1 - P2",teacher:"Trần Ngọc Hà"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("1/11/2025 19:45:00"),end_time:new Date("1/11/2025 22:00:00"),learn_number:46,lesson_name:"Một số bài tập thường gặp liên quan đến điểm và đường thẳng ",teacher:"Nguyễn Thị Nhung"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("1/11/2025 19:45:00"),end_time:new Date("1/11/2025 22:00:00"),learn_number:52,lesson_name:"Kĩ năng đọc hiểu truyện ngụ ngôn - tục ngữ (P3)",teacher:"Hoàng Thị Tuyết"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("1/11/2025 19:45:00"),end_time:new Date("1/11/2025 22:00:00"),learn_number:48,lesson_name:"Kĩ năng viết bài văn kể lại một trải nghiệm đáng nhớ ",teacher:"Trần Thị Thanh Xuân"},
    {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("1/12/2025 19:45:00"),end_time:new Date("1/12/2025 22:00:00"),learn_number:27,lesson_name:"Ôn tập và kiểm tra học kì 1",teacher:"Nguyễn Thị Khuyên"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("1/12/2025 20:45:00"),end_time:new Date("1/12/2025 23:00:00"),learn_number:53,lesson_name:"Ôn tập Chuyên đề Đường tròn ngoại tiếp, nội tiếp tam giác. Tứ giác nội tiếp",teacher:"Nguyễn Mạnh Cường"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("1/12/2025 17:45:00"),end_time:new Date("1/12/2025 20:00:00"),learn_number:127,lesson_name:"Tính chất đường phân giác của tam giác",teacher:"Trần Ngọc Hà"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("1/12/2025 19:45:00"),end_time:new Date("1/12/2025 22:00:00"),learn_number:54,lesson_name:"P1_Các dạng bài thường gặp về biểu thức đại số, đơn thức, đa thức một biến",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("1/12/2025 19:45:00"),end_time:new Date("1/12/2025 22:00:00"),learn_number:123,lesson_name:"Điểm, đoạn thẳng",teacher:"Trần Ngọc Hà"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("1/12/2025 19:45:00"),end_time:new Date("1/12/2025 22:00:00"),learn_number:47,lesson_name:"Kĩ năng viết bài văn tả cảnh sinh hoạt ",teacher:"Nguyễn Thị Liệu"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("1/12/2025 19:45:00"),end_time:new Date("1/12/2025 22:00:00"),learn_number:55,lesson_name:"Thực hành tiếng Việt: Từ ngữ toàn dân, địa phương, biệt ngữ xã hội",teacher:"Nguyễn Thị Thanh Phương"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("1/12/2025 19:45:00"),end_time:new Date("1/12/2025 22:00:00"),learn_number:55,lesson_name:"Kĩ năng viết bài văn phân tích đặc điểm nhân vật",teacher:"Trần Thị Thanh Xuân"},
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("1/13/2025 21:15:00"),end_time:new Date("1/13/2025 23:30:00"),learn_number:24,lesson_name:"Cơ năng trong trọng trường. Bảo toàn cơ năng",teacher:"Nguyễn Thành Đạt"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("1/13/2025 19:45:00"),end_time:new Date("1/13/2025 22:00:00"),learn_number:53,lesson_name:"Ôn tập Chuyên đề Đường tròn ngoại tiếp, nội tiếp tam giác. Tứ giác nội tiếp",teacher:"Nguyễn Mạnh Cường"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("1/13/2025 19:45:00"),end_time:new Date("1/13/2025 22:00:00"),learn_number:28,lesson_name:"Thơ bảy chữ, tám chữ, thơ tự do - Phần 3",teacher:"Nguyễn Phi Hùng"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("1/13/2025 17:45:00"),end_time:new Date("1/13/2025 20:00:00"),learn_number:55,lesson_name:"Xác suất của biến cố ngẫu nhiên trong một số trò chơi đơn giản",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("1/13/2025 19:45:00"),end_time:new Date("1/13/2025 22:00:00"),learn_number:47,lesson_name:"Một số bài tập thường gặp liên quan đến đoạn thẳng",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("1/13/2025 19:45:00"),end_time:new Date("1/13/2025 22:00:00"),learn_number:54,lesson_name:"Kĩ năng đọc hiểu văn bản thơ tự do (P1)",teacher:"Vũ Hồng Ngọc"},
    {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("1/14/2025 21:15:00"),end_time:new Date("1/14/2025 23:30:00"),learn_number:28,lesson_name:"Lý thuyết trọng tâm cô đọng về Arene - Hydrocarbon thơm ",teacher:"Đinh Thị Oanh"},
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("1/14/2025 19:45:00"),end_time:new Date("1/14/2025 22:00:00"),learn_number:24,lesson_name:"Cơ năng trong trọng trường. Bảo toàn cơ năng",teacher:"Thiều Thị Dung"},
    {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("1/14/2025 17:45:00"),end_time:new Date("1/14/2025 20:00:00"),learn_number:55,lesson_name:"CĐ. Chứng minh 3 điểm thẳng hàng, 3 đường đồng quy - P1",teacher:"Trần Ngọc Hà"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("1/14/2025 19:45:00"),end_time:new Date("1/14/2025 22:00:00"),learn_number:54,lesson_name:"Các dạng bài về đa giác đều",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("1/14/2025 19:45:00"),end_time:new Date("1/14/2025 22:00:00"),learn_number:55,lesson_name:"Xác suất của biến cố ngẫu nhiên trong một số trò chơi đơn giản",teacher:"Chu Thị Lâm Oanh"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("1/14/2025 19:45:00"),end_time:new Date("1/14/2025 22:00:00"),learn_number:55,lesson_name:"P2_Các dạng bài thường gặp về biểu thức đại số, đơn thức, đa thức một biến",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("1/14/2025 17:45:00"),end_time:new Date("1/14/2025 20:00:00"),learn_number:48,lesson_name:"Các dạng bài trọng tâm của xác xuất thực nghiệm",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("1/14/2025 19:45:00"),end_time:new Date("1/14/2025 22:00:00"),learn_number:48,lesson_name:"Kĩ năng viết bài văn kể lại một trải nghiệm đáng nhớ ",teacher:"Nguyễn Thị Liệu"},
    {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("1/15/2025 21:15:00"),end_time:new Date("1/15/2025 23:30:00"),learn_number:28,lesson_name:"P1_Cách tiếp cận và xử lí bài toán min - max mũ - logarit",teacher:"Nguyễn Đức Tài"},
    {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("1/15/2025 21:15:00"),end_time:new Date("1/15/2025 23:30:00"),learn_number:24,lesson_name:"P1 - Phương pháp và phân loại các dạng bài tập về Năng lượng hóa học",teacher:"Đinh Thị Oanh"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("1/15/2025 17:45:00"),end_time:new Date("1/15/2025 20:00:00"),learn_number:56,lesson_name:"Xác suất thực nghiệm của một biến cố trong một số trò chơi đơn giản",teacher:"Lê Ngọc Diên"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("1/15/2025 19:45:00"),end_time:new Date("1/15/2025 22:00:00"),learn_number:56,lesson_name:"P1_Phương pháp xử lí các dạng bài trọng tâm về các phép tính với đa thức một biến",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("1/15/2025 19:45:00"),end_time:new Date("1/15/2025 22:00:00"),learn_number:47,lesson_name:"Một số bài tập thường gặp liên quan đến đoạn thẳng",teacher:"Nguyễn Thị Nhung"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("1/15/2025 19:45:00"),end_time:new Date("1/15/2025 22:00:00"),learn_number:49,lesson_name:"Kĩ năng đọc hiểu văn bản ",teacher:"Hương Giang"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("1/15/2025 19:45:00"),end_time:new Date("1/15/2025 22:00:00"),learn_number:53,lesson_name:"Thực hành Tiếng Việt: Nói quá, nói giảm, nói tránh",teacher:"Hoàng Thị Tuyết"},
    {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("1/16/2025 19:45:00"),end_time:new Date("1/16/2025 22:00:00"),learn_number:28,lesson_name:"Điện trường đều. Chuyển động của hạt điện tích trong điện trường đều",teacher:"Thiều Thị Dung"},
    {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("1/16/2025 20:45:00"),end_time:new Date("1/16/2025 23:00:00"),learn_number:25,lesson_name:"Hai quy tắc đếm và sơ đồ hình cây",teacher:"Nguyễn Thị Khuyên"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("1/16/2025 19:45:00"),end_time:new Date("1/16/2025 22:00:00"),learn_number:54,lesson_name:"Các dạng bài về đa giác đều",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("1/16/2025 19:45:00"),end_time:new Date("1/16/2025 22:00:00"),learn_number:55,lesson_name:"P2_Các dạng bài thường gặp về biểu thức đại số, đơn thức, đa thức một biến",teacher:"Chu Thị Lâm Oanh"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("1/16/2025 19:45:00"),end_time:new Date("1/16/2025 22:00:00"),learn_number:56,lesson_name:"Kĩ năng đọc hiểu truyện khoa học viễn tưởng (P2)",teacher:"Nguyễn Hải Quỳnh"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("1/16/2025 19:45:00"),end_time:new Date("1/16/2025 22:00:00"),learn_number:55,lesson_name:"Thực hành tiếng Việt: Từ ngữ toàn dân, địa phương, biệt ngữ xã hội",teacher:"Vũ Hồng Ngọc"},
    {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("1/17/2025 21:15:00"),end_time:new Date("1/17/2025 23:30:00"),learn_number:28,lesson_name:"Điện trường đều. Chuyển động của hạt điện tích trong điện trường đều",teacher:"Nguyễn Thành Đạt"},
    {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("1/17/2025 19:45:00"),end_time:new Date("1/17/2025 22:00:00"),learn_number:25,lesson_name:"P2 - Phương pháp và phân loại các dạng bài tập về Năng lượng hóa học",teacher:"Vũ Thị Thùy Dương"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("1/17/2025 19:45:00"),end_time:new Date("1/17/2025 22:00:00"),learn_number:29,lesson_name:"Ôn luyện tổng hợp - Phần 1",teacher:"Nguyễn Phi Hùng"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("1/17/2025 19:45:00"),end_time:new Date("1/17/2025 22:00:00"),learn_number:56,lesson_name:"Xác suất thực nghiệm của một biến cố trong một số trò chơi đơn giản",teacher:"Chu Thị Lâm Oanh"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("1/17/2025 17:45:00"),end_time:new Date("1/17/2025 20:00:00"),learn_number:56,lesson_name:"Kĩ năng đọc hiểu văn bản thơ tự do (P2)",teacher:"Nguyễn Phi Hùng"},
    {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("1/18/2025 19:45:00"),end_time:new Date("1/18/2025 22:00:00"),learn_number:28,lesson_name:"Lý thuyết trọng tâm cô đọng về Arene - Hydrocarbon thơm ",teacher:"Vũ Thị Thùy Dương"},
    {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("1/18/2025 19:45:00"),end_time:new Date("1/18/2025 22:00:00"),learn_number:26,lesson_name:"Phương pháp ghi nhớ kiến thức cốt lõi về hoán vị, chỉnh hợp, tổ hợp",teacher:"Phạm Thái Sơn"},
    {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("1/18/2025 17:45:00"),end_time:new Date("1/18/2025 20:00:00"),learn_number:56,lesson_name:"CĐ. Giải hệ phương trình- PP đánh giá",teacher:"Trần Ngọc Hà"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("1/18/2025 19:45:00"),end_time:new Date("1/18/2025 22:00:00"),learn_number:128,lesson_name:"CĐ. Tam giác cân, tam giác đều",teacher:"Trần Ngọc Hà"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("1/18/2025 19:45:00"),end_time:new Date("1/18/2025 22:00:00"),learn_number:48,lesson_name:"Các dạng bài trọng tâm của xác xuất thực nghiệm",teacher:"Nguyễn Thị Nhung"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("1/18/2025 19:45:00"),end_time:new Date("1/18/2025 22:00:00"),learn_number:54,lesson_name:"Kĩ năng đọc hiểu truyện khoa học viễn tưởng (P1)",teacher:"Hoàng Thị Tuyết"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("1/18/2025 19:45:00"),end_time:new Date("1/18/2025 22:00:00"),learn_number:50,lesson_name:"Kĩ năng đọc hiểu văn bản thơ (có yếu tố tự sự, miêu tả)",teacher:"Trần Thị Thanh Xuân"},
    {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("1/19/2025 19:45:00"),end_time:new Date("1/19/2025 22:00:00"),learn_number:28,lesson_name:"P1_Cách tiếp cận và xử lí bài toán min - max mũ - logarit",teacher:"Nguyễn Thị Khuyên"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("1/19/2025 20:45:00"),end_time:new Date("1/19/2025 23:00:00"),learn_number:55,lesson_name:"Các dạng bài về hình trụ, hình nón, hình cầu",teacher:"Nguyễn Mạnh Cường"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("1/19/2025 17:45:00"),end_time:new Date("1/19/2025 20:00:00"),learn_number:128,lesson_name:"Đồ thị hàm bậc nhất và bài toán liên quan",teacher:"Trần Ngọc Hà"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("1/19/2025 19:45:00"),end_time:new Date("1/19/2025 22:00:00"),learn_number:56,lesson_name:"P1,2_Phương pháp xử lí các dạng bài trọng tâm về các phép tính với đa thức một biến",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("1/19/2025 19:45:00"),end_time:new Date("1/19/2025 22:00:00"),learn_number:124,lesson_name:"Phân số (Phần 2)",teacher:"Trần Ngọc Hà"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("1/19/2025 19:45:00"),end_time:new Date("1/19/2025 22:00:00"),learn_number:49,lesson_name:"Kĩ năng đọc hiểu văn bản ",teacher:"Nguyễn Thị Liệu"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("1/19/2025 19:45:00"),end_time:new Date("1/19/2025 22:00:00"),learn_number:57,lesson_name:"Kỹ năng phân tích một tác phẩm truyện",teacher:"Nguyễn Thị Thanh Phương"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("1/19/2025 19:45:00"),end_time:new Date("1/19/2025 22:00:00"),learn_number:57,lesson_name:"Kĩ năng đọc hiểu văn bản thơ",teacher:"Trần Thị Thanh Xuân"},
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("1/20/2025 21:15:00"),end_time:new Date("1/20/2025 23:30:00"),learn_number:25,lesson_name:"Chuyển hóa năng lượng. Hiệu suất chuyển hóa năng lượng",teacher:"Nguyễn Thành Đạt"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("1/20/2025 19:45:00"),end_time:new Date("1/20/2025 22:00:00"),learn_number:55,lesson_name:"Các dạng bài về hình trụ, hình nón, hình cầu",teacher:"Nguyễn Mạnh Cường"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("1/20/2025 19:45:00"),end_time:new Date("1/20/2025 22:00:00"),learn_number:29,lesson_name:"Ôn luyện tổng hợp - Phần 1",teacher:"Nguyễn Phi Hùng"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("1/20/2025 17:45:00"),end_time:new Date("1/20/2025 20:00:00"),learn_number:57,lesson_name:"Kiến thức nền tảng về hai tam giác đồng dạng và các trường hợp đồng dạng của hai tam giác",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("1/20/2025 19:45:00"),end_time:new Date("1/20/2025 22:00:00"),learn_number:49,lesson_name:"P1_Phương pháp xử lí một số bài tập trọng tâm về tỉ số phần trăm",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("1/20/2025 19:45:00"),end_time:new Date("1/20/2025 22:00:00"),learn_number:56,lesson_name:"Kĩ năng đọc hiểu văn bản thơ tự do (P2)",teacher:"Vũ Hồng Ngọc"},
    {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("1/21/2025 21:15:00"),end_time:new Date("1/21/2025 23:30:00"),learn_number:29,lesson_name:"Phương pháp và phân loại các dạng bài tập về Arene - Hydrocarbon thơm ",teacher:"Đinh Thị Oanh"},
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("1/21/2025 19:45:00"),end_time:new Date("1/21/2025 22:00:00"),learn_number:25,lesson_name:"Chuyển hóa năng lượng. Hiệu suất chuyển hóa năng lượng",teacher:"Thiều Thị Dung"},
    {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("1/21/2025 17:45:00"),end_time:new Date("1/21/2025 20:00:00"),learn_number:57,lesson_name:"CĐ. Chứng minh 3 điểm thẳng hàng, 3 đường đồng quy - P2",teacher:"Trần Ngọc Hà"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("1/21/2025 19:45:00"),end_time:new Date("1/21/2025 22:00:00"),learn_number:56,lesson_name:"Ôn tập Chuyên đề Đa giác đều. Hình học trực quan",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("1/21/2025 19:45:00"),end_time:new Date("1/21/2025 22:00:00"),learn_number:57,lesson_name:"Kiến thức nền tảng về hai tam giác đồng dạng và các trường hợp đồng dạng của hai tam giác",teacher:"Chu Thị Lâm Oanh"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("1/21/2025 19:45:00"),end_time:new Date("1/21/2025 22:00:00"),learn_number:57,lesson_name:"P2_Phương pháp xử lí các dạng bài trọng tâm về các phép tính với đa thức một biến",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("1/21/2025 17:45:00"),end_time:new Date("1/21/2025 20:00:00"),learn_number:50,lesson_name:"P2_Phương pháp xử lí một số bài tập trọng tâm về tỉ số phần trăm",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("1/21/2025 19:45:00"),end_time:new Date("1/21/2025 22:00:00"),learn_number:50,lesson_name:"Kĩ năng đọc hiểu văn bản thơ (có yếu tố tự sự, miêu tả)",teacher:"Nguyễn Thị Liệu"},
    {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("1/22/2025 21:15:00"),end_time:new Date("1/22/2025 23:30:00"),learn_number:29,lesson_name:"P2_Cách tiếp cận và xử lí bài toán min - max mũ - logarit",teacher:"Nguyễn Đức Tài"},
    {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("1/22/2025 21:15:00"),end_time:new Date("1/22/2025 23:30:00"),learn_number:25,lesson_name:"P2 - Phương pháp và phân loại các dạng bài tập về Năng lượng hóa học",teacher:"Đinh Thị Oanh"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("1/22/2025 17:45:00"),end_time:new Date("1/22/2025 20:00:00"),learn_number:58,lesson_name:"P1_Các bài toán trọng tâm về hai tam giác đồng dạng và các trường hợp đồng dạng của hai tam giác",teacher:"Lê Ngọc Diên"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("1/22/2025 19:45:00"),end_time:new Date("1/22/2025 22:00:00"),learn_number:58,lesson_name:"P3_Phương pháp xử lí các dạng bài trọng tâm về các phép tính với đa thức một biến",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("1/22/2025 19:45:00"),end_time:new Date("1/22/2025 22:00:00"),learn_number:49,lesson_name:"Phương pháp xử lí một số bài tập trọng tâm về tỉ số phần trăm",teacher:"Nguyễn Thị Nhung"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("1/22/2025 19:45:00"),end_time:new Date("1/22/2025 22:00:00"),learn_number:51,lesson_name:"Thực hành Tiếng Việt",teacher:"Hương Giang"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("1/22/2025 19:45:00"),end_time:new Date("1/22/2025 22:00:00"),learn_number:55,lesson_name:"Kĩ năng viết bài văn phân tích đặc điểm nhân vật",teacher:"Hoàng Thị Tuyết"},
    {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("1/23/2025 19:45:00"),end_time:new Date("1/23/2025 22:00:00"),learn_number:29,lesson_name:"Công của lực điện. Thế năng điện",teacher:"Thiều Thị Dung"},
    {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("1/23/2025 20:45:00"),end_time:new Date("1/23/2025 23:00:00"),learn_number:26,lesson_name:"Phương pháp ghi nhớ kiến thức cốt lõi về hoán vị, chỉnh hợp, tổ hợp",teacher:"Nguyễn Thị Khuyên"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("1/23/2025 19:45:00"),end_time:new Date("1/23/2025 22:00:00"),learn_number:56,lesson_name:"Ôn tập Chuyên đề Đa giác đều. Hình học trực quan",teacher:"Nguyễn Mạnh Cường"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("1/23/2025 19:45:00"),end_time:new Date("1/23/2025 22:00:00"),learn_number:58,lesson_name:"Kĩ năng đọc hiểu truyện khoa học viễn tưởng (P3)",teacher:"Nguyễn Hải Quỳnh"},
    {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("1/24/2025 21:15:00"),end_time:new Date("1/24/2025 23:30:00"),learn_number:29,lesson_name:"Công của lực điện. Thế năng điện",teacher:"Nguyễn Thành Đạt"},
    {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("1/24/2025 19:45:00"),end_time:new Date("1/24/2025 22:00:00"),learn_number:26,lesson_name:"Ôn tập chủ đề Năng lượng hóa học",teacher:"Vũ Thị Thùy Dương"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("1/24/2025 19:45:00"),end_time:new Date("1/24/2025 22:00:00"),learn_number:30,lesson_name:"Ôn luyện tổng hợp - Phần 2",teacher:"Nguyễn Phi Hùng"},
    { code: "demotopclass", subject: "Demo", start_time: new Date("1/9/2025 14:11:00"), end_time: new Date("1/9/2025 14:35:00"), learn_number: 1, lesson_name:"Ôn luyện tổng hợp - Phần 2",teacher:"Nguyễn Phi Hùng"}
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
    {code:"toan-9",boxid:"952000",boxtag:"3Ot9Nu",tkey:"adfc2dae88b289ba",tid:"13"},
    {code:"toannangcao-9",boxid:"952000",boxtag:"3Ot9Nu",tkey:"155135884332be2e",tid:"15"},
    {code:"nguvan-9",boxid:"952000",boxtag:"3Ot9Nu",tkey:"bda8bcabf01ed142",tid:"14"},
    {code:"toan-10",boxid:"952000",boxtag:"3Ot9Nu",tkey:"62a7f4c84da78cd8",tid:"16"},
    {code:"vatli-10",boxid:"952000",boxtag:"3Ot9Nu",tkey:"92cfe9cd0263baf9",tid:"17"},
    {code:"hoahoc-10",boxid:"952000",boxtag:"3Ot9Nu",tkey:"28cfea1a5b70f691",tid:"18"},
    {code:"toan-11",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b1e6b67cdf7a36bf",tid:"19"},
    {code:"vatli-11",boxid:"952000",boxtag:"3Ot9Nu",tkey:"0f2d03f2707e49c6",tid:"20"},
    {code:"hoahoc-11",boxid:"952000",boxtag:"3Ot9Nu",tkey:"3210d81d3fc6be68",tid:"21"},
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
