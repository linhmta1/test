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
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("12/2/2024 21:15:00"),end_time:new Date("12/3/2024 0:00:00"),learn_number:18,lesson_name:"Ôn tập và kiểm tra học kì I (P1)",teacher:"Nguyễn Thành Đạt"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/2/2024 19:45:00"),end_time:new Date("12/2/2024 22:30:00"),learn_number:42,lesson_name:"Ứng dụng định lý Viète (P2)",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("12/2/2024 19:45:00"),end_time:new Date("12/2/2024 22:30:00"),learn_number:22,lesson_name:"Văn bản nghị luận xã hội - Phần 3",teacher:"Nguyễn Phi Hùng"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/2/2024 17:45:00"),end_time:new Date("12/2/2024 20:30:00"),learn_number:44,lesson_name:"Mô tả và biểu diễn dữ liệu trên các bảng, biểu đồ (P1)",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/2/2024 17:45:00"),end_time:new Date("12/2/2024 20:30:00"),learn_number:44,lesson_name:"Mô tả và biểu diễn dữ liệu trên các bảng, biểu đồ (P1)",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/2/2024 19:45:00"),end_time:new Date("12/2/2024 22:30:00"),learn_number:35,lesson_name:"Các dạng bài thường gặp về biểu đồ tranh",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/2/2024 19:45:00"),end_time:new Date("12/2/2024 22:30:00"),learn_number:35,lesson_name:"Các dạng bài thường gặp về biểu đồ tranh",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/2/2024 19:45:00"),end_time:new Date("12/2/2024 22:30:00"),learn_number:42,lesson_name:"Viết bài văn nghị luận về một vấn đề đời sống (một thói xấu của con người trong xã hội hiện đại)",teacher:"Vũ Hồng Ngọc"},
    {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("12/3/2024 21:15:00"),end_time:new Date("12/4/2024 0:00:00"),learn_number:22,lesson_name:"Lý thuyết trọng tâm cô đọng về Alkene - anken",teacher:"Đinh Thị Oanh"},
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("12/3/2024 19:45:00"),end_time:new Date("12/3/2024 22:30:00"),learn_number:18,lesson_name:"Ôn tập và kiểm tra học kì I (P1)",teacher:"Thiều Thị Dung"},
    {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("12/3/2024 17:45:00"),end_time:new Date("12/3/2024 20:30:00"),learn_number:43,lesson_name:"CĐ. Chứng minh trung điểm - P1",teacher:"Trần Ngọc Hà"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/3/2024 19:45:00"),end_time:new Date("12/3/2024 22:30:00"),learn_number:41,lesson_name:"Ứng dụng đường tròn ngoại tiếp, nội tiếp tam giác trong thực tế",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/3/2024 19:45:00"),end_time:new Date("12/3/2024 22:30:00"),learn_number:44,lesson_name:"Mô tả và biểu diễn dữ liệu trên các bảng, biểu đồ (P1)",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/3/2024 19:45:00"),end_time:new Date("12/3/2024 22:30:00"),learn_number:44,lesson_name:"Mô tả và biểu diễn dữ liệu trên các bảng, biểu đồ (P1)",teacher:"Chu Thị Lâm Oanh"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/3/2024 19:45:00"),end_time:new Date("12/3/2024 22:30:00"),learn_number:44,lesson_name:"Các bài toán trọng tâm về hai tam giác bằng nhau và các trường hợp bằng nhau của hai tam giác (P5)",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/3/2024 19:45:00"),end_time:new Date("12/3/2024 22:30:00"),learn_number:44,lesson_name:"Các bài toán trọng tâm về hai tam giác bằng nhau và các trường hợp bằng nhau của hai tam giác (P5)",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/3/2024 17:45:00"),end_time:new Date("12/3/2024 20:30:00"),learn_number:36,lesson_name:"Các dạng bài thường gặp về biểu đồ cột - cột kép",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/3/2024 17:45:00"),end_time:new Date("12/3/2024 20:30:00"),learn_number:36,lesson_name:"Các dạng bài thường gặp về biểu đồ cột - cột kép",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("12/3/2024 19:45:00"),end_time:new Date("12/3/2024 22:30:00"),learn_number:36,lesson_name:"Kĩ năng đọc hiểu văn bản thông tin và thực hành Tiếng Việt",teacher:"Nguyễn Thị Liệu"},
    {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("12/4/2024 21:15:00"),end_time:new Date("12/5/2024 0:00:00"),learn_number:23,lesson_name:"Các kiến thức nền tảng về lũy thừa - mũ - logarit",teacher:"Nguyễn Đức Tài"},
    {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("12/4/2024 21:15:00"),end_time:new Date("12/5/2024 0:00:00"),learn_number:19,lesson_name:"Phương pháp và phân loại các dạng bài tập về Phản ứng oxi hóa - khử (Phần 1)",teacher:"Đinh Thị Oanh"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/4/2024 17:45:00"),end_time:new Date("12/4/2024 20:30:00"),learn_number:45,lesson_name:"Mô tả và biểu diễn dữ liệu trên các bảng, biểu đồ (P2)",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/4/2024 17:45:00"),end_time:new Date("12/4/2024 20:30:00"),learn_number:45,lesson_name:"Mô tả và biểu diễn dữ liệu trên các bảng, biểu đồ (P2)",teacher:"Lê Ngọc Diên"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/4/2024 19:45:00"),end_time:new Date("12/4/2024 22:30:00"),learn_number:45,lesson_name:"Các dạng bài trọng tâm về yếu tố thống kê (P1)",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/4/2024 19:45:00"),end_time:new Date("12/4/2024 22:30:00"),learn_number:45,lesson_name:"Các dạng bài trọng tâm về yếu tố thống kê (P1)",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/4/2024 19:45:00"),end_time:new Date("12/4/2024 22:30:00"),learn_number:35,lesson_name:"Các dạng bài thường gặp về biểu đồ tranh",teacher:"Nguyễn Thị Nhung"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/4/2024 19:45:00"),end_time:new Date("12/4/2024 22:30:00"),learn_number:35,lesson_name:"Các dạng bài thường gặp về biểu đồ tranh",teacher:"Nguyễn Thị Nhung"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("12/4/2024 19:45:00"),end_time:new Date("12/4/2024 22:30:00"),learn_number:37,lesson_name:"Thực hành Tiếng Việt",teacher:"Hương Giang"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/4/2024 19:45:00"),end_time:new Date("12/4/2024 22:30:00"),learn_number:43,lesson_name:"Kĩ năng đọc hiểu văn bản thông tin và thực hành Tiếng Việt",teacher:"Hoàng Thị Tuyết"},
    {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("12/5/2024 19:45:00"),end_time:new Date("12/5/2024 22:30:00"),learn_number:22,lesson_name:"Điện tích. Lực tương tác giữa hai điện tích",teacher:"Thiều Thị Dung"},
    {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("12/5/2024 20:45:00"),end_time:new Date("12/5/2024 23:30:00"),learn_number:19,lesson_name:"Vecto và các phép toán vecto",teacher:"Nguyễn Thị Khuyên"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/5/2024 19:45:00"),end_time:new Date("12/5/2024 22:30:00"),learn_number:41,lesson_name:"Ứng dụng đường tròn ngoại tiếp, nội tiếp tam giác trong thực tế",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/5/2024 19:45:00"),end_time:new Date("12/5/2024 22:30:00"),learn_number:43,lesson_name:"Các bài toán trọng tâm về hai tam giác bằng nhau và các trường hợp bằng nhau của hai tam giác (P4)",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/5/2024 19:45:00"),end_time:new Date("12/5/2024 22:30:00"),learn_number:43,lesson_name:"Các bài toán trọng tâm về hai tam giác bằng nhau và các trường hợp bằng nhau của hai tam giác (P4)",teacher:"Chu Thị Lâm Oanh"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/5/2024 19:45:00"),end_time:new Date("12/5/2024 22:30:00"),learn_number:44,lesson_name:"Ôn tập học kì I - Phần 1",teacher:"Nguyễn Hải Quỳnh"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/5/2024 19:45:00"),end_time:new Date("12/5/2024 22:30:00"),learn_number:43,lesson_name:"Kỹ năng viết bài văn nghị luận về một vấn đề của đời sống",teacher:"Vũ Hồng Ngọc"},
    {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("12/6/2024 21:15:00"),end_time:new Date("12/7/2024 0:00:00"),learn_number:22,lesson_name:"Điện tích. Lực tương tác giữa hai điện tích",teacher:"Nguyễn Thành Đạt"},
    {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("12/6/2024 19:45:00"),end_time:new Date("12/6/2024 22:30:00"),learn_number:19,lesson_name:"Phương pháp và phân loại các dạng bài tập về Phản ứng oxi hóa - khử (Phần 1)",teacher:"Vũ Thị Thùy Dương"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("12/6/2024 19:45:00"),end_time:new Date("12/6/2024 22:30:00"),learn_number:23,lesson_name:"Truyện trinh thám - Phần 1",teacher:"Nguyễn Phi Hùng"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/6/2024 19:45:00"),end_time:new Date("12/6/2024 22:30:00"),learn_number:45,lesson_name:"Mô tả và biểu diễn dữ liệu trên các bảng, biểu đồ (P2)",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/6/2024 19:45:00"),end_time:new Date("12/6/2024 22:30:00"),learn_number:45,lesson_name:"Mô tả và biểu diễn dữ liệu trên các bảng, biểu đồ (P2)",teacher:"Chu Thị Lâm Oanh"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/6/2024 17:45:00"),end_time:new Date("12/6/2024 20:30:00"),learn_number:44,lesson_name:"Ôn tập học kì I_Phần 1",teacher:"Nguyễn Phi Hùng"},
    {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("12/7/2024 19:45:00"),end_time:new Date("12/7/2024 22:30:00"),learn_number:22,lesson_name:"Lý thuyết trọng tâm cô đọng về Alkene - anken",teacher:"Vũ Thị Thùy Dương"},
    {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("12/7/2024 19:45:00"),end_time:new Date("12/7/2024 22:30:00"),learn_number:20,lesson_name:"Tích vô hướng của hai vecto",teacher:"Phạm Thái Sơn"},
    {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("12/7/2024 17:45:00"),end_time:new Date("12/7/2024 20:30:00"),learn_number:44,lesson_name:"CĐ. Tương giao giữa đường thẳng và parabol - P2",teacher:"Trần Ngọc Hà"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/7/2024 19:45:00"),end_time:new Date("12/7/2024 22:30:00"),learn_number:122,lesson_name:"CĐ. Chứng minh 3 điểm thẳng hàng",teacher:"Trần Ngọc Hà"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/7/2024 19:45:00"),end_time:new Date("12/7/2024 22:30:00"),learn_number:122,lesson_name:"CĐ. Chứng minh 3 điểm thẳng hàng",teacher:"Trần Ngọc Hà"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/7/2024 19:45:00"),end_time:new Date("12/7/2024 22:30:00"),learn_number:36,lesson_name:"Các dạng bài thường gặp về biểu đồ cột - cột kép",teacher:"Nguyễn Thị Nhung"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/7/2024 19:45:00"),end_time:new Date("12/7/2024 22:30:00"),learn_number:36,lesson_name:"Các dạng bài thường gặp về biểu đồ cột - cột kép",teacher:"Nguyễn Thị Nhung"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/7/2024 19:45:00"),end_time:new Date("12/7/2024 22:30:00"),learn_number:42,lesson_name:"Kĩ năng đọc hiểu tùy bút - tản văn - Phần 3",teacher:"Hoàng Thị Tuyết"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("12/7/2024 19:45:00"),end_time:new Date("12/7/2024 22:30:00"),learn_number:38,lesson_name:"Kĩ năng viết bài văn thuyết minh thuật lại một sự kiện",teacher:"Trần Thị Thanh Xuân"},
    {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("12/8/2024 19:45:00"),end_time:new Date("12/8/2024 22:30:00"),learn_number:22,lesson_name:"Hàm số liên tục",teacher:"Nguyễn Thị Khuyên"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/8/2024 19:45:00"),end_time:new Date("12/8/2024 22:30:00"),learn_number:44,lesson_name:"Giải bài toán bằng cách lập phương trình",teacher:"Lê Ngọc Diên"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/8/2024 17:45:00"),end_time:new Date("12/8/2024 20:30:00"),learn_number:122,lesson_name:"CĐ. Rút gọn phân thức và bài toán so sánh",teacher:"Trần Ngọc Hà"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/8/2024 17:45:00"),end_time:new Date("12/8/2024 20:30:00"),learn_number:122,lesson_name:"CĐ. Rút gọn phân thức và bài toán so sánh",teacher:"Trần Ngọc Hà"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/8/2024 19:45:00"),end_time:new Date("12/8/2024 22:30:00"),learn_number:44,lesson_name:"Các bài toán trọng tâm về hai tam giác bằng nhau và các trường hợp bằng nhau của hai tam giác (P5)",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/8/2024 19:45:00"),end_time:new Date("12/8/2024 22:30:00"),learn_number:44,lesson_name:"Các bài toán trọng tâm về hai tam giác bằng nhau và các trường hợp bằng nhau của hai tam giác (P5)",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/8/2024 19:45:00"),end_time:new Date("12/8/2024 22:30:00"),learn_number:118,lesson_name:"CĐ. Tìm x trong biểu thức chứa lũy thừa",teacher:"Trần Ngọc Hà"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/8/2024 19:45:00"),end_time:new Date("12/8/2024 22:30:00"),learn_number:118,lesson_name:"CĐ. Tìm x trong biểu thức chứa lũy thừa",teacher:"Trần Ngọc Hà"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("12/8/2024 19:45:00"),end_time:new Date("12/8/2024 22:30:00"),learn_number:37,lesson_name:"Thực hành Tiếng Việt",teacher:"Nguyễn Thị Liệu"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/8/2024 19:45:00"),end_time:new Date("12/8/2024 22:30:00"),learn_number:45,lesson_name:"Kĩ năng đọc hiểu văn bản nghị luận xã hội",teacher:"Nguyễn Thị Thanh Phương"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/8/2024 19:45:00"),end_time:new Date("12/8/2024 22:30:00"),learn_number:45,lesson_name:"Kĩ năng viết bài văn văn thuyết minh về quy tắc, luật lệ trong một hoạt động hay trò chơi",teacher:"Trần Thị Thanh Xuân"},
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("12/9/2024 21:15:00"),end_time:new Date("12/10/2024 0:00:00"),learn_number:19,lesson_name:"Ôn tập và kiểm tra học kì I (P2)",teacher:"Nguyễn Thành Đạt"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/9/2024 19:45:00"),end_time:new Date("12/9/2024 22:30:00"),learn_number:44,lesson_name:"Giải bài toán bằng cách lập phương trình",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("12/9/2024 19:45:00"),end_time:new Date("12/9/2024 22:30:00"),learn_number:23,lesson_name:"Truyện trinh thám - Phần 1",teacher:"Nguyễn Phi Hùng"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/9/2024 17:45:00"),end_time:new Date("12/9/2024 20:30:00"),learn_number:46,lesson_name:"Phân tích và xử lí dữ liệu thu được ở dạng bảng, biểu đồ (P1)",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/9/2024 17:45:00"),end_time:new Date("12/9/2024 20:30:00"),learn_number:46,lesson_name:"Phân tích và xử lí dữ liệu thu được ở dạng bảng, biểu đồ (P1)",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/9/2024 19:45:00"),end_time:new Date("12/9/2024 22:30:00"),learn_number:37,lesson_name:"Hệ thống kiến thức theo chủ đề (P1)",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/9/2024 19:45:00"),end_time:new Date("12/9/2024 22:30:00"),learn_number:37,lesson_name:"Hệ thống kiến thức theo chủ đề (P1)",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/9/2024 19:45:00"),end_time:new Date("12/9/2024 22:30:00"),learn_number:44,lesson_name:"Ôn tập học kì I_Phần 1",teacher:"Vũ Hồng Ngọc"},
    {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("12/10/2024 21:15:00"),end_time:new Date("12/11/2024 0:00:00"),learn_number:23,lesson_name:"P1 - Phương pháp và phân loại các dạng bài tập về Alkene - anken",teacher:"Đinh Thị Oanh"},
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("12/10/2024 19:45:00"),end_time:new Date("12/10/2024 22:30:00"),learn_number:19,lesson_name:"Ôn tập và kiểm tra học kì I (P2)",teacher:"Thiều Thị Dung"},
    {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("12/10/2024 17:45:00"),end_time:new Date("12/10/2024 20:30:00"),learn_number:45,lesson_name:"CĐ. Chứng minh trung điểm - P2",teacher:"Trần Ngọc Hà"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/10/2024 19:45:00"),end_time:new Date("12/10/2024 22:30:00"),learn_number:43,lesson_name:"Xác định tứ giác nội tiếp đường tròn",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/10/2024 19:45:00"),end_time:new Date("12/10/2024 22:30:00"),learn_number:46,lesson_name:"Phân tích và xử lí dữ liệu thu được ở dạng bảng, biểu đồ (P1)",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/10/2024 19:45:00"),end_time:new Date("12/10/2024 22:30:00"),learn_number:46,lesson_name:"Phân tích và xử lí dữ liệu thu được ở dạng bảng, biểu đồ (P1)",teacher:"Chu Thị Lâm Oanh"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/10/2024 19:45:00"),end_time:new Date("12/10/2024 22:30:00"),learn_number:46,lesson_name:"Các dạng bài trọng tâm về yếu tố thống kê (P2)",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/10/2024 19:45:00"),end_time:new Date("12/10/2024 22:30:00"),learn_number:46,lesson_name:"Các dạng bài trọng tâm về yếu tố thống kê (P2)",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/10/2024 17:45:00"),end_time:new Date("12/10/2024 20:30:00"),learn_number:38,lesson_name:"Hệ thống kiến thức theo chủ đề (P2)",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/10/2024 17:45:00"),end_time:new Date("12/10/2024 20:30:00"),learn_number:38,lesson_name:"Hệ thống kiến thức theo chủ đề (P2)",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("12/10/2024 19:45:00"),end_time:new Date("12/10/2024 22:30:00"),learn_number:38,lesson_name:"Kĩ năng viết bài văn thuyết minh thuật lại một sự kiện",teacher:"Nguyễn Thị Liệu"},
    {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("12/11/2024 21:15:00"),end_time:new Date("12/12/2024 0:00:00"),learn_number:24,lesson_name:"Phương pháp xử lí các bài toán về hàm số mũ - logarit",teacher:"Nguyễn Đức Tài"},
    {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("12/11/2024 21:15:00"),end_time:new Date("12/12/2024 0:00:00"),learn_number:20,lesson_name:"Phương pháp và phân loại các dạng bài tập về Phản ứng oxi hóa - khử (Phần 2)",teacher:"Đinh Thị Oanh"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/11/2024 17:45:00"),end_time:new Date("12/11/2024 20:30:00"),learn_number:47,lesson_name:"Phân tích và xử lí dữ liệu thu được ở dạng bảng, biểu đồ (P2)",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/11/2024 17:45:00"),end_time:new Date("12/11/2024 20:30:00"),learn_number:47,lesson_name:"Phân tích và xử lí dữ liệu thu được ở dạng bảng, biểu đồ (P2)",teacher:"Lê Ngọc Diên"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/11/2024 19:45:00"),end_time:new Date("12/11/2024 22:30:00"),learn_number:47,lesson_name:"Ôn tập học kì I Đề số 01",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/11/2024 19:45:00"),end_time:new Date("12/11/2024 22:30:00"),learn_number:47,lesson_name:"Ôn tập học kì I Đề số 01",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/11/2024 19:45:00"),end_time:new Date("12/11/2024 22:30:00"),learn_number:37,lesson_name:"Hệ thống kiến thức theo chủ đề (P1)",teacher:"Nguyễn Thị Nhung"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/11/2024 19:45:00"),end_time:new Date("12/11/2024 22:30:00"),learn_number:37,lesson_name:"Hệ thống kiến thức theo chủ đề (P1)",teacher:"Nguyễn Thị Nhung"},
    {code:""nguvan-6"",subject:""Ngữ văn Lớp 06"",start_time:new Date(""12/11/2024 19:45:00""),end_time:new Date(""12/11/2024 22:30:00""),learn_number:39,lesson_name:""Kĩ năng viết: Tập làm một bài thơ lục bát
    Viết đoạn văn thể hiện cảm xúc về một bài thơ lục bát"",teacher:""Hương Giang""},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/11/2024 19:45:00"),end_time:new Date("12/11/2024 22:30:00"),learn_number:45,lesson_name:"Kĩ năng viết bài văn văn thuyết minh về quy tắc, luận lệ trong một hoạt động hay trò chơi",teacher:"Hoàng Thị Tuyết"},
    {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("12/12/2024 19:45:00"),end_time:new Date("12/12/2024 22:30:00"),learn_number:23,lesson_name:"Bài toán tương tác của hệ nhiều điện tích",teacher:"Thiều Thị Dung"},
    {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("12/12/2024 20:45:00"),end_time:new Date("12/12/2024 23:30:00"),learn_number:20,lesson_name:"Tích vô hướng của hai vecto",teacher:"Nguyễn Thị Khuyên"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/12/2024 19:45:00"),end_time:new Date("12/12/2024 22:30:00"),learn_number:43,lesson_name:"Xác định tứ giác nội tiếp đường tròn",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/12/2024 19:45:00"),end_time:new Date("12/12/2024 22:30:00"),learn_number:45,lesson_name:"Các dạng bài trọng tâm về yếu tố thống kê (P1)",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/12/2024 19:45:00"),end_time:new Date("12/12/2024 22:30:00"),learn_number:45,lesson_name:"Các dạng bài trọng tâm về yếu tố thống kê (P1)",teacher:"Chu Thị Lâm Oanh"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/12/2024 19:45:00"),end_time:new Date("12/12/2024 22:30:00"),learn_number:46,lesson_name:"Ôn tập học kì I - Phần 2",teacher:"Nguyễn Hải Quỳnh"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/12/2024 19:45:00"),end_time:new Date("12/12/2024 22:30:00"),learn_number:45,lesson_name:"Kĩ năng đọc hiểu văn bản nghị luận xã hội",teacher:"Vũ Hồng Ngọc"},
    {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("12/13/2024 21:15:00"),end_time:new Date("12/14/2024 0:00:00"),learn_number:23,lesson_name:"Bài toán tương tác của hệ nhiều điện tích",teacher:"Nguyễn Thành Đạt"},
    {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("12/13/2024 19:45:00"),end_time:new Date("12/13/2024 22:30:00"),learn_number:20,lesson_name:"Phương pháp và phân loại các dạng bài tập về Phản ứng oxi hóa - khử (Phần 2)",teacher:"Vũ Thị Thùy Dương"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("12/13/2024 19:45:00"),end_time:new Date("12/13/2024 22:30:00"),learn_number:24,lesson_name:"Truyện trinh thám - Phần 2",teacher:"Nguyễn Phi Hùng"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/13/2024 19:45:00"),end_time:new Date("12/13/2024 22:30:00"),learn_number:47,lesson_name:"Phân tích và xử lí dữ liệu thu được ở dạng bảng, biểu đồ (P2)",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/13/2024 19:45:00"),end_time:new Date("12/13/2024 22:30:00"),learn_number:47,lesson_name:"Phân tích và xử lí dữ liệu thu được ở dạng bảng, biểu đồ (P2)",teacher:"Chu Thị Lâm Oanh"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/13/2024 17:45:00"),end_time:new Date("12/13/2024 20:30:00"),learn_number:46,lesson_name:"Ôn tập học kì I_Phần 2",teacher:"Nguyễn Phi Hùng"},
    {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("12/14/2024 19:45:00"),end_time:new Date("12/14/2024 22:30:00"),learn_number:23,lesson_name:"P1 - Phương pháp và phân loại các dạng bài tập về Alkene - anken",teacher:"Vũ Thị Thùy Dương"},
    {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("12/14/2024 19:45:00"),end_time:new Date("12/14/2024 22:30:00"),learn_number:21,lesson_name:"Phương pháp xử lí các bài toán khó về vecto",teacher:"Phạm Thái Sơn"},
    {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("12/14/2024 17:45:00"),end_time:new Date("12/14/2024 20:30:00"),learn_number:46,lesson_name:"CĐ. Giải phương trình vô tỉ - PP nâng lũy thừa",teacher:"Trần Ngọc Hà"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/14/2024 19:45:00"),end_time:new Date("12/14/2024 22:30:00"),learn_number:123,lesson_name:"CĐ. Chứng minh dãy tỉ số bằng nhau",teacher:"Trần Ngọc Hà"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/14/2024 19:45:00"),end_time:new Date("12/14/2024 22:30:00"),learn_number:123,lesson_name:"CĐ. Chứng minh dãy tỉ số bằng nhau",teacher:"Trần Ngọc Hà"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/14/2024 19:45:00"),end_time:new Date("12/14/2024 22:30:00"),learn_number:38,lesson_name:"Hệ thống kiến thức theo chủ đề (P2)",teacher:"Nguyễn Thị Nhung"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/14/2024 19:45:00"),end_time:new Date("12/14/2024 22:30:00"),learn_number:38,lesson_name:"Hệ thống kiến thức theo chủ đề (P2)",teacher:"Nguyễn Thị Nhung"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/14/2024 19:45:00"),end_time:new Date("12/14/2024 22:30:00"),learn_number:44,lesson_name:"Ôn tập học kì I (P1)",teacher:"Nguyễn Thị Liệu"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("12/14/2024 19:45:00"),end_time:new Date("12/14/2024 22:30:00"),learn_number:40,lesson_name:"Ôn tập học kì I (P1)",teacher:"Trần Thị Thanh Xuân"},
    {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("12/15/2024 19:45:00"),end_time:new Date("12/15/2024 22:30:00"),learn_number:23,lesson_name:"Các kiến thức nền tảng về lũy thừa - mũ - logarit",teacher:"Nguyễn Thị Khuyên"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/15/2024 19:45:00"),end_time:new Date("12/15/2024 22:30:00"),learn_number:46,lesson_name:"Ôn tập Chuyên đề Hàm số y = ax^2 (a khác 0). Phương trình bậc hai một ẩn",teacher:"Lê Ngọc Diên"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/15/2024 17:45:00"),end_time:new Date("12/15/2024 20:30:00"),learn_number:123,lesson_name:"Tính chất đường phân giác trong tam giác",teacher:"Trần Ngọc Hà"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/15/2024 17:45:00"),end_time:new Date("12/15/2024 20:30:00"),learn_number:123,lesson_name:"Tính chất đường phân giác trong tam giác",teacher:"Trần Ngọc Hà"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/15/2024 19:45:00"),end_time:new Date("12/15/2024 22:30:00"),learn_number:46,lesson_name:"Các dạng bài trọng tâm về yếu tố thống kê (P2)",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/15/2024 19:45:00"),end_time:new Date("12/15/2024 22:30:00"),learn_number:46,lesson_name:"Các dạng bài trọng tâm về yếu tố thống kê (P2)",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/15/2024 19:45:00"),end_time:new Date("12/15/2024 22:30:00"),learn_number:119,lesson_name:"CĐ. Rút gọn tổng dãy lũy thừa cùng cơ số",teacher:"Trần Ngọc Hà"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/15/2024 19:45:00"),end_time:new Date("12/15/2024 22:30:00"),learn_number:119,lesson_name:"CĐ. Rút gọn tổng dãy lũy thừa cùng cơ số",teacher:"Trần Ngọc Hà"},
    {code:""nguvan-6"",subject:""Ngữ văn Lớp 06"",start_time:new Date(""12/15/2024 19:45:00""),end_time:new Date(""12/15/2024 22:30:00""),learn_number:39,lesson_name:""Kĩ năng viết: Tập làm một bài thơ lục bát
    Viết đoạn văn thể hiện cảm xúc về một bài thơ lục bát"",teacher:""Nguyễn Thị Liệu""},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/15/2024 19:45:00"),end_time:new Date("12/15/2024 22:30:00"),learn_number:47,lesson_name:"Thực hành tiếng Việt: Ôn tập từ Hán Việt, thành ngữ, tục ngữ",teacher:"Nguyễn Thị Thanh Phương"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/15/2024 19:45:00"),end_time:new Date("12/15/2024 22:30:00"),learn_number:47,lesson_name:"Ôn tập học kì I (P1)",teacher:"Trần Thị Thanh Xuân"},
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("12/16/2024 21:15:00"),end_time:new Date("12/17/2024 0:00:00"),learn_number:20,lesson_name:"Moment lực và cân bằng moment lực",teacher:"Nguyễn Thành Đạt"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/16/2024 19:45:00"),end_time:new Date("12/16/2024 22:30:00"),learn_number:46,lesson_name:"Ôn tập Chuyên đề Hàm số y = ax^2 (a khác 0). Phương trình bậc hai một ẩn",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("12/16/2024 19:45:00"),end_time:new Date("12/16/2024 22:30:00"),learn_number:24,lesson_name:"Truyện trinh thám - Phần 2",teacher:"Nguyễn Phi Hùng"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/16/2024 17:45:00"),end_time:new Date("12/16/2024 20:30:00"),learn_number:48,lesson_name:"Ôn tập học kì I Đề số 01",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/16/2024 17:45:00"),end_time:new Date("12/16/2024 20:30:00"),learn_number:48,lesson_name:"Ôn tập học kì I Đề số 01",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/16/2024 19:45:00"),end_time:new Date("12/16/2024 22:30:00"),learn_number:39,lesson_name:"Hệ thống kiến thức theo chủ đề (P3)",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/16/2024 19:45:00"),end_time:new Date("12/16/2024 22:30:00"),learn_number:39,lesson_name:"Hệ thống kiến thức theo chủ đề (P3)",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/16/2024 19:45:00"),end_time:new Date("12/16/2024 22:30:00"),learn_number:46,lesson_name:"Ôn tập học kì I_Phần 2",teacher:"Vũ Hồng Ngọc"},
    {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("12/17/2024 21:15:00"),end_time:new Date("12/18/2024 0:00:00"),learn_number:24,lesson_name:"P2 - Phương pháp và phân loại các dạng bài tập về Alkene - anken",teacher:"Đinh Thị Oanh"},
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("12/17/2024 19:45:00"),end_time:new Date("12/17/2024 22:30:00"),learn_number:20,lesson_name:"Moment lực và cân bằng moment lực",teacher:"Thiều Thị Dung"},
    {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("12/17/2024 17:45:00"),end_time:new Date("12/17/2024 20:30:00"),learn_number:47,lesson_name:"CĐ. Chứng minh song song, vuông góc - P1",teacher:"Trần Ngọc Hà"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/17/2024 19:45:00"),end_time:new Date("12/17/2024 22:30:00"),learn_number:45,lesson_name:"Ứng dụng của tứ giác nội tiếp",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/17/2024 19:45:00"),end_time:new Date("12/17/2024 22:30:00"),learn_number:48,lesson_name:"Ôn tập học kì I Đề số 01",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/17/2024 19:45:00"),end_time:new Date("12/17/2024 22:30:00"),learn_number:48,lesson_name:"Ôn tập học kì I Đề số 01",teacher:"Chu Thị Lâm Oanh"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/17/2024 19:45:00"),end_time:new Date("12/17/2024 22:30:00"),learn_number:48,lesson_name:"Ôn tập học kì I Đề số 02",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/17/2024 19:45:00"),end_time:new Date("12/17/2024 22:30:00"),learn_number:48,lesson_name:"Ôn tập học kì I Đề số 02",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/17/2024 17:45:00"),end_time:new Date("12/17/2024 20:30:00"),learn_number:40,lesson_name:"Hệ thống kiến thức theo chủ đề (P4)",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/17/2024 17:45:00"),end_time:new Date("12/17/2024 20:30:00"),learn_number:40,lesson_name:"Hệ thống kiến thức theo chủ đề (P4)",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("12/17/2024 19:45:00"),end_time:new Date("12/17/2024 22:30:00"),learn_number:40,lesson_name:"Ôn tập học kì I (P1)",teacher:"Nguyễn Thị Liệu"},
    {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("12/18/2024 21:15:00"),end_time:new Date("12/19/2024 0:00:00"),learn_number:25,lesson_name:"Giải quyết nhanh bài toán phương trình - bất phương trình mũ - logarit (P1)",teacher:"Nguyễn Đức Tài"},
    {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("12/18/2024 21:15:00"),end_time:new Date("12/19/2024 0:00:00"),learn_number:21,lesson_name:"Ôn tập chủ đề Phản ứng oxi hóa - khử",teacher:"Đinh Thị Oanh"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/18/2024 17:45:00"),end_time:new Date("12/18/2024 20:30:00"),learn_number:49,lesson_name:"Ôn tập học kì I Đề số 02",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/18/2024 17:45:00"),end_time:new Date("12/18/2024 20:30:00"),learn_number:49,lesson_name:"Ôn tập học kì I Đề số 02",teacher:"Lê Ngọc Diên"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/18/2024 19:45:00"),end_time:new Date("12/18/2024 22:30:00"),learn_number:49,lesson_name:"Ôn tập học kì I Đề số 03",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/18/2024 19:45:00"),end_time:new Date("12/18/2024 22:30:00"),learn_number:49,lesson_name:"Ôn tập học kì I Đề số 03",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/18/2024 19:45:00"),end_time:new Date("12/18/2024 22:30:00"),learn_number:39,lesson_name:"Hệ thống kiến thức theo chủ đề (P3)",teacher:"Nguyễn Thị Nhung"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/18/2024 19:45:00"),end_time:new Date("12/18/2024 22:30:00"),learn_number:39,lesson_name:"Hệ thống kiến thức theo chủ đề (P3)",teacher:"Nguyễn Thị Nhung"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("12/18/2024 19:45:00"),end_time:new Date("12/18/2024 22:30:00"),learn_number:41,lesson_name:"Ôn tập học kì I (P1)",teacher:"Hương Giang"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/18/2024 19:45:00"),end_time:new Date("12/18/2024 22:30:00"),learn_number:47,lesson_name:"Ôn tập học kì I - Phần 1",teacher:"Hoàng Thị Tuyết"},
    {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("12/19/2024 19:45:00"),end_time:new Date("12/19/2024 22:30:00"),learn_number:24,lesson_name:"Cân bằng của hệ điện tích",teacher:"Thiều Thị Dung"},
    {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("12/19/2024 20:45:00"),end_time:new Date("12/19/2024 23:30:00"),learn_number:21,lesson_name:"Phương pháp xử lí các bài toán khó về vecto",teacher:"Nguyễn Thị Khuyên"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/19/2024 19:45:00"),end_time:new Date("12/19/2024 22:30:00"),learn_number:45,lesson_name:"Ứng dụng của tứ giác nội tiếp",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/19/2024 19:45:00"),end_time:new Date("12/19/2024 22:30:00"),learn_number:47,lesson_name:"Ôn tập học kì I Đề số 01",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/19/2024 19:45:00"),end_time:new Date("12/19/2024 22:30:00"),learn_number:47,lesson_name:"Ôn tập học kì I Đề số 01",teacher:"Chu Thị Lâm Oanh"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/19/2024 19:45:00"),end_time:new Date("12/19/2024 22:30:00"),learn_number:48,lesson_name:"Kĩ năng đọc hiểu truyện ngụ ngôn - tục ngữ (P1)",teacher:"Nguyễn Hải Quỳnh"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/19/2024 19:45:00"),end_time:new Date("12/19/2024 22:30:00"),learn_number:47,lesson_name:"Thực hành tiếng Việt: Ôn tập từ Hán Việt, thành ngữ, tục ngữ",teacher:"Vũ Hồng Ngọc"},
    {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("12/20/2024 21:15:00"),end_time:new Date("12/21/2024 0:00:00"),learn_number:24,lesson_name:"Cân bằng của hệ điện tích",teacher:"Nguyễn Thành Đạt"},
    {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("12/20/2024 19:45:00"),end_time:new Date("12/20/2024 22:30:00"),learn_number:21,lesson_name:"Ôn tập chủ đề Phản ứng oxi hóa - khử",teacher:"Vũ Thị Thùy Dương"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("12/20/2024 19:45:00"),end_time:new Date("12/20/2024 22:30:00"),learn_number:25,lesson_name:"Truyện trinh thám - Phần 3",teacher:"Nguyễn Phi Hùng"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/20/2024 19:45:00"),end_time:new Date("12/20/2024 22:30:00"),learn_number:49,lesson_name:"Ôn tập học kì I Đề số 02",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/20/2024 19:45:00"),end_time:new Date("12/20/2024 22:30:00"),learn_number:49,lesson_name:"Ôn tập học kì I Đề số 02",teacher:"Chu Thị Lâm Oanh"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/20/2024 17:45:00"),end_time:new Date("12/20/2024 20:30:00"),learn_number:48,lesson_name:"Kĩ năng đọc hiểu văn bản truyện (P1)",teacher:"Nguyễn Phi Hùng"},
    {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("12/21/2024 19:45:00"),end_time:new Date("12/21/2024 22:30:00"),learn_number:24,lesson_name:"P2 - Phương pháp và phân loại các dạng bài tập về Alkene - anken",teacher:"Vũ Thị Thùy Dương"},
    {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("12/21/2024 19:45:00"),end_time:new Date("12/21/2024 22:30:00"),learn_number:22,lesson_name:"Ôn tập và kiểm tra học kì 1",teacher:"Phạm Thái Sơn"},
    {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("12/21/2024 17:45:00"),end_time:new Date("12/21/2024 20:30:00"),learn_number:48,lesson_name:"CĐ. Giải phương trình vô tỉ - PP nhẩm nghiệm",teacher:"Trần Ngọc Hà"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/21/2024 19:45:00"),end_time:new Date("12/21/2024 22:30:00"),learn_number:124,lesson_name:"Bất đẳng thức tam giác, mối liên hệ cạnh và góc",teacher:"Trần Ngọc Hà"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/21/2024 19:45:00"),end_time:new Date("12/21/2024 22:30:00"),learn_number:124,lesson_name:"Bất đẳng thức tam giác, mối liên hệ cạnh và góc",teacher:"Trần Ngọc Hà"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/21/2024 19:45:00"),end_time:new Date("12/21/2024 22:30:00"),learn_number:40,lesson_name:"Hệ thống kiến thức theo chủ đề (P4)",teacher:"Nguyễn Thị Nhung"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/21/2024 19:45:00"),end_time:new Date("12/21/2024 22:30:00"),learn_number:40,lesson_name:"Hệ thống kiến thức theo chủ đề (P4)",teacher:"Nguyễn Thị Nhung"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/21/2024 19:45:00"),end_time:new Date("12/21/2024 22:30:00"),learn_number:46,lesson_name:"Ôn tập học kì I (P2)",teacher:"Hoàng Thị Tuyết"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("12/21/2024 19:45:00"),end_time:new Date("12/21/2024 22:30:00"),learn_number:42,lesson_name:"Ôn tập học kì I (P2)",teacher:"Trần Thị Thanh Xuân"},
    {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("12/22/2024 19:45:00"),end_time:new Date("12/22/2024 22:30:00"),learn_number:24,lesson_name:"Phương pháp xử lí các bài toán về hàm số mũ - logarit",teacher:"Nguyễn Thị Khuyên"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/22/2024 19:45:00"),end_time:new Date("12/22/2024 22:30:00"),learn_number:47,lesson_name:"Kỹ năng xử lý bài toán tính toán trong hình học",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/22/2024 17:45:00"),end_time:new Date("12/22/2024 20:30:00"),learn_number:124,lesson_name:"CĐ. Rút gọn phân thức và bài toán nguyên",teacher:"Trần Ngọc Hà"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/22/2024 17:45:00"),end_time:new Date("12/22/2024 20:30:00"),learn_number:124,lesson_name:"CĐ. Rút gọn phân thức và bài toán nguyên",teacher:"Trần Ngọc Hà"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/22/2024 19:45:00"),end_time:new Date("12/22/2024 22:30:00"),learn_number:48,lesson_name:"Ôn tập học kì I Đề số 02",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/22/2024 19:45:00"),end_time:new Date("12/22/2024 22:30:00"),learn_number:48,lesson_name:"Ôn tập học kì I Đề số 02",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/22/2024 19:45:00"),end_time:new Date("12/22/2024 22:30:00"),learn_number:120,lesson_name:"CĐ. Chứng minh tổng lũy thừa chia hết cho 1 số",teacher:"Trần Ngọc Hà"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/22/2024 19:45:00"),end_time:new Date("12/22/2024 22:30:00"),learn_number:120,lesson_name:"CĐ. Chứng minh tổng lũy thừa chia hết cho 1 số",teacher:"Trần Ngọc Hà"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("12/22/2024 19:45:00"),end_time:new Date("12/22/2024 22:30:00"),learn_number:41,lesson_name:"Ôn tập học kì I (P1)",teacher:"Nguyễn Thị Liệu"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/22/2024 19:45:00"),end_time:new Date("12/22/2024 22:30:00"),learn_number:49,lesson_name:"Kỹ năng viết bài văn nghị luận về một vấn đề xã hội được đặt ra trong tác phẩm văn học",teacher:"Nguyễn Thị Thanh Phương"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/22/2024 19:45:00"),end_time:new Date("12/22/2024 22:30:00"),learn_number:49,lesson_name:"Ôn tập học kì I (P2)",teacher:"Trần Thị Thanh Xuân"},
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("12/23/2024 21:15:00"),end_time:new Date("12/24/2024 0:00:00"),learn_number:21,lesson_name:"Công cơ học",teacher:"Nguyễn Thành Đạt"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/23/2024 19:45:00"),end_time:new Date("12/23/2024 22:30:00"),learn_number:47,lesson_name:"Kỹ năng xử lý bài toán tính toán trong hình học",teacher:"Nguyễn Mạnh Cường"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("12/23/2024 19:45:00"),end_time:new Date("12/23/2024 22:30:00"),learn_number:25,lesson_name:"Truyện trinh thám - Phần 3",teacher:"Nguyễn Phi Hùng"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/23/2024 17:45:00"),end_time:new Date("12/23/2024 20:30:00"),learn_number:50,lesson_name:"Ôn tập học kì I Đề số 03",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/23/2024 17:45:00"),end_time:new Date("12/23/2024 20:30:00"),learn_number:50,lesson_name:"Ôn tập học kì I Đề số 03",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/23/2024 19:45:00"),end_time:new Date("12/23/2024 22:30:00"),learn_number:41,lesson_name:"Ôn tập học kì I Đề số 01",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/23/2024 19:45:00"),end_time:new Date("12/23/2024 22:30:00"),learn_number:41,lesson_name:"Ôn tập học kì I Đề số 01",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/23/2024 19:45:00"),end_time:new Date("12/23/2024 22:30:00"),learn_number:48,lesson_name:"Kĩ năng đọc hiểu văn bản truyện (P1)",teacher:"Vũ Hồng Ngọc"},
    {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("12/24/2024 21:15:00"),end_time:new Date("12/25/2024 0:00:00"),learn_number:25,lesson_name:"Ôn tập và kiểm tra cuối học kì I",teacher:"Đinh Thị Oanh"},
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("12/24/2024 19:45:00"),end_time:new Date("12/24/2024 22:30:00"),learn_number:21,lesson_name:"Công cơ học",teacher:"Thiều Thị Dung"},
    {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("12/24/2024 17:45:00"),end_time:new Date("12/24/2024 20:30:00"),learn_number:49,lesson_name:"CĐ. Chứng minh song song, vuông góc - P2",teacher:"Trần Ngọc Hà"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/24/2024 19:45:00"),end_time:new Date("12/24/2024 22:30:00"),learn_number:48,lesson_name:"Kỹ năng xử lý bài toán tính toán trong hình học",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/24/2024 19:45:00"),end_time:new Date("12/24/2024 22:30:00"),learn_number:50,lesson_name:"Ôn tập học kì I Đề số 03",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/24/2024 19:45:00"),end_time:new Date("12/24/2024 22:30:00"),learn_number:50,lesson_name:"Ôn tập học kì I Đề số 03",teacher:"Chu Thị Lâm Oanh"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/24/2024 19:45:00"),end_time:new Date("12/24/2024 22:30:00"),learn_number:50,lesson_name:"Phương pháp xử lí một số bài tập trọng tâm về quan hệ giữa góc và cạnh đối diện trong tam giác. Bất đẳng thức tam giác",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/24/2024 19:45:00"),end_time:new Date("12/24/2024 22:30:00"),learn_number:50,lesson_name:"Phương pháp xử lí một số bài tập trọng tâm về quan hệ giữa góc và cạnh đối diện trong tam giác. Bất đẳng thức tam giác",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/24/2024 17:45:00"),end_time:new Date("12/24/2024 20:30:00"),learn_number:42,lesson_name:"Ôn tập học kì I Đề số 02",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/24/2024 17:45:00"),end_time:new Date("12/24/2024 20:30:00"),learn_number:42,lesson_name:"Ôn tập học kì I Đề số 02",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("12/24/2024 19:45:00"),end_time:new Date("12/24/2024 22:30:00"),learn_number:42,lesson_name:"Ôn tập học kì I (P2)",teacher:"Nguyễn Thị Liệu"},
    {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("12/25/2024 21:15:00"),end_time:new Date("12/26/2024 0:00:00"),learn_number:26,lesson_name:"Giải quyết nhanh bài toán phương trình - bất phương trình mũ - logarit (P2)",teacher:"Nguyễn Đức Tài"},
    {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("12/25/2024 21:15:00"),end_time:new Date("12/26/2024 0:00:00"),learn_number:22,lesson_name:"Ôn tập và kiểm tra cuối học kì I",teacher:"Đinh Thị Oanh"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/25/2024 17:45:00"),end_time:new Date("12/25/2024 20:30:00"),learn_number:51,lesson_name:"Phương pháp xử lí dạng bài trọng tâm về định lí Thalès trong tam giác",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/25/2024 17:45:00"),end_time:new Date("12/25/2024 20:30:00"),learn_number:51,lesson_name:"Phương pháp xử lí dạng bài trọng tâm về định lí Thalès trong tam giác",teacher:"Lê Ngọc Diên"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/25/2024 19:45:00"),end_time:new Date("12/25/2024 22:30:00"),learn_number:51,lesson_name:"Đường trung trực của đoạn thẳng, đường vuông góc và đường xiên",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/25/2024 19:45:00"),end_time:new Date("12/25/2024 22:30:00"),learn_number:51,lesson_name:"Đường trung trực của đoạn thẳng, đường vuông góc và đường xiên",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/25/2024 19:45:00"),end_time:new Date("12/25/2024 22:30:00"),learn_number:41,lesson_name:"Ôn tập học kì I Đề số 01",teacher:"Nguyễn Thị Nhung"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/25/2024 19:45:00"),end_time:new Date("12/25/2024 22:30:00"),learn_number:41,lesson_name:"Ôn tập học kì I Đề số 01",teacher:"Nguyễn Thị Nhung"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("12/25/2024 19:45:00"),end_time:new Date("12/25/2024 22:30:00"),learn_number:43,lesson_name:"Ôn tập học kì I (P2)",teacher:"Hương Giang"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/25/2024 19:45:00"),end_time:new Date("12/25/2024 22:30:00"),learn_number:49,lesson_name:"Ôn tập học kì I - Phần 2",teacher:"Hoàng Thị Tuyết"},
    {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("12/26/2024 19:45:00"),end_time:new Date("12/26/2024 22:30:00"),learn_number:25,lesson_name:"Điện trường. Cường độ điện trường",teacher:"Thiều Thị Dung"},
    {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("12/26/2024 20:45:00"),end_time:new Date("12/26/2024 23:30:00"),learn_number:22,lesson_name:"Ôn tập và kiểm tra học kì 1",teacher:"Nguyễn Thị Khuyên"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/26/2024 19:45:00"),end_time:new Date("12/26/2024 22:30:00"),learn_number:48,lesson_name:"Kỹ năng xử lý bài toán tính toán trong hình học",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/26/2024 19:45:00"),end_time:new Date("12/26/2024 22:30:00"),learn_number:49,lesson_name:"Ôn tập học kì I Đề số 03",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/26/2024 19:45:00"),end_time:new Date("12/26/2024 22:30:00"),learn_number:49,lesson_name:"Ôn tập học kì I Đề số 03",teacher:"Chu Thị Lâm Oanh"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/26/2024 19:45:00"),end_time:new Date("12/26/2024 22:30:00"),learn_number:50,lesson_name:"Kĩ năng đọc hiểu truyện ngụ ngôn - tục ngữ (P2)",teacher:"Nguyễn Hải Quỳnh"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/26/2024 19:45:00"),end_time:new Date("12/26/2024 22:30:00"),learn_number:49,lesson_name:"Kỹ năng viết bài văn nghị luận về một vấn đề xã hội được đặt ra trong tác phẩm văn học",teacher:"Vũ Hồng Ngọc"},
    {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("12/27/2024 21:15:00"),end_time:new Date("12/28/2024 0:00:00"),learn_number:25,lesson_name:"Điện trường. Cường độ điện trường",teacher:"Nguyễn Thành Đạt"},
    {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("12/27/2024 19:45:00"),end_time:new Date("12/27/2024 22:30:00"),learn_number:22,lesson_name:"Ôn tập và kiểm tra cuối học kì I",teacher:"Vũ Thị Thùy Dương"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("12/27/2024 19:45:00"),end_time:new Date("12/27/2024 22:30:00"),learn_number:26,lesson_name:"Thơ bảy chữ, tám chữ, thơ tự do - Phần 1",teacher:"Nguyễn Phi Hùng"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/27/2024 19:45:00"),end_time:new Date("12/27/2024 22:30:00"),learn_number:51,lesson_name:"Phương pháp xử lí dạng bài trọng tâm về định lí Thalès trong tam giác",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/27/2024 19:45:00"),end_time:new Date("12/27/2024 22:30:00"),learn_number:51,lesson_name:"Phương pháp xử lí dạng bài trọng tâm về định lí Thalès trong tam giác",teacher:"Chu Thị Lâm Oanh"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/27/2024 17:45:00"),end_time:new Date("12/27/2024 20:30:00"),learn_number:50,lesson_name:"Kĩ năng đọc hiểu văn bản truyện (P2)",teacher:"Nguyễn Phi Hùng"},
    {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("12/28/2024 19:45:00"),end_time:new Date("12/28/2024 22:30:00"),learn_number:25,lesson_name:"Ôn tập và kiểm tra cuối học kì I",teacher:"Vũ Thị Thùy Dương"},
    {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("12/28/2024 19:45:00"),end_time:new Date("12/28/2024 22:30:00"),learn_number:23,lesson_name:"Các dạng toán về sai số và số gần đúng",teacher:"Phạm Thái Sơn"},
    {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("12/28/2024 17:45:00"),end_time:new Date("12/28/2024 20:30:00"),learn_number:50,lesson_name:"CĐ. Giải hệ phương trình đối xứng loại 1",teacher:"Trần Ngọc Hà"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/28/2024 19:45:00"),end_time:new Date("12/28/2024 22:30:00"),learn_number:125,lesson_name:"CĐ. Tính giá trị biểu thức",teacher:"Trần Ngọc Hà"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/28/2024 19:45:00"),end_time:new Date("12/28/2024 22:30:00"),learn_number:125,lesson_name:"CĐ. Tính giá trị biểu thức",teacher:"Trần Ngọc Hà"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/28/2024 19:45:00"),end_time:new Date("12/28/2024 22:30:00"),learn_number:42,lesson_name:"Ôn tập học kì I Đề số 02",teacher:"Nguyễn Thị Nhung"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/28/2024 19:45:00"),end_time:new Date("12/28/2024 22:30:00"),learn_number:42,lesson_name:"Ôn tập học kì I Đề số 02",teacher:"Nguyễn Thị Nhung"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/28/2024 19:45:00"),end_time:new Date("12/28/2024 22:30:00"),learn_number:48,lesson_name:"Kĩ năng đọc hiểu truyện ngụ ngôn - tục ngữ (P1)",teacher:"Hoàng Thị Tuyết"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("12/28/2024 19:45:00"),end_time:new Date("12/28/2024 22:30:00"),learn_number:44,lesson_name:"Kĩ năng đọc hiểu văn bản truyện (đồng thoại)",teacher:"Trần Thị Thanh Xuân"},
    {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("12/29/2024 19:45:00"),end_time:new Date("12/29/2024 22:30:00"),learn_number:25,lesson_name:"Giải quyết nhanh bài toán phương trình - bất phương trình mũ - logarit (P1)",teacher:"Nguyễn Thị Khuyên"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/29/2024 19:45:00"),end_time:new Date("12/29/2024 22:30:00"),learn_number:49,lesson_name:"Kỹ năng xử lý bài toán thẳng hàng, đồng quy",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/29/2024 17:45:00"),end_time:new Date("12/29/2024 20:30:00"),learn_number:125,lesson_name:"Ôn thi HK1 - P1",teacher:"Trần Ngọc Hà"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/29/2024 17:45:00"),end_time:new Date("12/29/2024 20:30:00"),learn_number:125,lesson_name:"Ôn thi HK1 - P1",teacher:"Trần Ngọc Hà"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/29/2024 19:45:00"),end_time:new Date("12/29/2024 22:30:00"),learn_number:50,lesson_name:"Phương pháp xử lí một số bài tập trọng tâm về quan hệ giữa góc và cạnh đối diện trong tam giác. Bất đẳng thức tam giác",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/29/2024 19:45:00"),end_time:new Date("12/29/2024 22:30:00"),learn_number:50,lesson_name:"Phương pháp xử lí một số bài tập trọng tâm về quan hệ giữa góc và cạnh đối diện trong tam giác. Bất đẳng thức tam giác",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/29/2024 19:45:00"),end_time:new Date("12/29/2024 22:30:00"),learn_number:121,lesson_name:"Ôn thi HK1",teacher:"Trần Ngọc Hà"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/29/2024 19:45:00"),end_time:new Date("12/29/2024 22:30:00"),learn_number:121,lesson_name:"Ôn thi HK1",teacher:"Trần Ngọc Hà"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("12/29/2024 19:45:00"),end_time:new Date("12/29/2024 22:30:00"),learn_number:43,lesson_name:"Ôn tập học kì I (P2)",teacher:"Nguyễn Thị Liệu"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/29/2024 19:45:00"),end_time:new Date("12/29/2024 22:30:00"),learn_number:51,lesson_name:"Ôn tập học kì I",teacher:"Nguyễn Thị Thanh Phương"},
    {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("12/29/2024 19:45:00"),end_time:new Date("12/29/2024 22:30:00"),learn_number:51,lesson_name:"Kĩ năng đọc hiểu văn bản truyện ngụ ngôn và tục ngữ",teacher:"Trần Thị Thanh Xuân"},
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("12/30/2024 21:15:00"),end_time:new Date("12/31/2024 0:00:00"),learn_number:22,lesson_name:"Công suất",teacher:"Nguyễn Thành Đạt"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/30/2024 19:45:00"),end_time:new Date("12/30/2024 22:30:00"),learn_number:49,lesson_name:"Kỹ năng xử lý bài toán thẳng hàng, đồng quy",teacher:"Nguyễn Mạnh Cường"},
    {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("12/30/2024 19:45:00"),end_time:new Date("12/30/2024 22:30:00"),learn_number:26,lesson_name:"Thơ bảy chữ, tám chữ, thơ tự do - Phần 1",teacher:"Nguyễn Phi Hùng"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/30/2024 17:45:00"),end_time:new Date("12/30/2024 20:30:00"),learn_number:52,lesson_name:"Một số ứng dụng quan trọng của định lí Thalès trong tam giác",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/30/2024 17:45:00"),end_time:new Date("12/30/2024 20:30:00"),learn_number:52,lesson_name:"Một số ứng dụng quan trọng của định lí Thalès trong tam giác",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/30/2024 19:45:00"),end_time:new Date("12/30/2024 22:30:00"),learn_number:43,lesson_name:"Các dạng bài trọng tâm về các phép phân số - số thập phân (P1)",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/30/2024 19:45:00"),end_time:new Date("12/30/2024 22:30:00"),learn_number:43,lesson_name:"Các dạng bài trọng tâm về các phép phân số - số thập phân (P1)",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("12/30/2024 19:45:00"),end_time:new Date("12/30/2024 22:30:00"),learn_number:50,lesson_name:"Kĩ năng đọc hiểu văn bản truyện (P2)",teacher:"Vũ Hồng Ngọc"},
    {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("12/31/2024 21:15:00"),end_time:new Date("1/1/2025 0:00:00"),learn_number:26,lesson_name:"Lý thuyết trọng tâm cô đọng về Alkyne - ankin",teacher:"Đinh Thị Oanh"},
    {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("12/31/2024 19:45:00"),end_time:new Date("12/31/2024 22:30:00"),learn_number:22,lesson_name:"Công suất",teacher:"Thiều Thị Dung"},
    {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("12/31/2024 17:45:00"),end_time:new Date("12/31/2024 20:30:00"),learn_number:51,lesson_name:"CĐ. Chứng minh đi qua điểm cố định - P1",teacher:"Trần Ngọc Hà"},
    {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("12/31/2024 19:45:00"),end_time:new Date("12/31/2024 22:30:00"),learn_number:50,lesson_name:"Kỹ năng xử lý các dạng toán khác trong hình học",teacher:"Nguyễn Mạnh Cường"},
    {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("12/31/2024 19:45:00"),end_time:new Date("12/31/2024 22:30:00"),learn_number:52,lesson_name:"Một số ứng dụng quan trọng của định lí Thalès trong tam giác",teacher:"Chu Thị Lâm Oanh"},
    {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("12/31/2024 19:45:00"),end_time:new Date("12/31/2024 22:30:00"),learn_number:52,lesson_name:"Một số ứng dụng quan trọng của định lí Thalès trong tam giác",teacher:"Chu Thị Lâm Oanh"},
    {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("12/31/2024 19:45:00"),end_time:new Date("12/31/2024 22:30:00"),learn_number:52,lesson_name:"Các dạng bài thường gặp trong biểu đồ đoạn thẳng",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("12/31/2024 19:45:00"),end_time:new Date("12/31/2024 22:30:00"),learn_number:52,lesson_name:"Các dạng bài thường gặp trong biểu đồ đoạn thẳng",teacher:"Lê Ngọc Diên"},
    {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("12/31/2024 17:45:00"),end_time:new Date("12/31/2024 20:30:00"),learn_number:44,lesson_name:"Các dạng bài trọng tâm về các phép phân số - số thập phân (P2)",teacher:"Lê Ngọc Diên"},
    {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("12/31/2024 17:45:00"),end_time:new Date("12/31/2024 20:30:00"),learn_number:44,lesson_name:"Các dạng bài trọng tâm về các phép phân số - số thập phân (P2)",teacher:"Lê Ngọc Diên"},
    {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("12/31/2024 19:45:00"),end_time:new Date("12/31/2024 22:30:00"),learn_number:44,lesson_name:"Kĩ năng đọc hiểu văn bản truyện (đồng thoại)",teacher:"Nguyễn Thị Liệu"},
    { code: "demo", subject: "Demo", start_time: new Date("10/29/2024 20:15:00"), end_time: new Date("11/30/2024 23:59:00"), learn_number: 1 }
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
    var code = window.location.href.substring(28);

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
