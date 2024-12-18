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
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("11/30/2024 18:45:00"),end_time:new Date("11/30/2024 22:30:00"),learn_number:7,lesson_name:"Luyện đề TSA25E - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"toan",subject:"[TÔ] Toán",start_time:new Date("11/30/2024 20:15:00"),end_time:new Date("12/1/2024 0:00:00"),learn_number:24,lesson_name:"Các phương pháp, kĩ năng xử lí bài toán phương trình – bất phương trình mũ và logarit",teacher:"Nguyễn Đức Tài"},
    {code:"nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("11/30/2024 20:15:00"),end_time:new Date("12/1/2024 0:00:00"),learn_number:24,lesson_name:"Mô hình đoạn và cách xác định cấu trúc",teacher:"Vương Thúy Hằng"},
    {code:"2toan",subject:"[TÔ] Toán",start_time:new Date("11/30/2024 20:15:00"),end_time:new Date("12/1/2024 0:00:00"),learn_number:13,lesson_name:"Nguyên hàm - Tích phân một số hàm đặc biệt (P2)",teacher:"Nguyễn Đức Tài"},
    {code:"2nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("11/30/2024 20:15:00"),end_time:new Date("12/1/2024 0:00:00"),learn_number:13,lesson_name:"Truyện ngắn hiện đại và quy trình đọc văn bản",teacher:"Vương Thúy Hằng"},
    {code:"luyendetienganhhsa",subject:"[LĐ HSA] Tiếng Anh",start_time:new Date("11/30/2024 20:45:00"),end_time:new Date("12/1/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25B - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
    {code:"luyendevatlyhsa",subject:"[LĐ HSA] Vật lí",start_time:new Date("11/30/2024 20:45:00"),end_time:new Date("12/1/2024 0:30:00"),learn_number:1,lesson_name:"Luyện đề HSA25AB - Phần Khoa học Vật lí",teacher:"Nguyễn Thành Đạt"},
    {code:"luyendehoahochsa",subject:"[LĐ HSA] Hóa học",start_time:new Date("11/30/2024 20:45:00"),end_time:new Date("12/1/2024 0:30:00"),learn_number:1,lesson_name:"Luyện đề HSA25AB - Phần Khoa học Hóa học",teacher:"Vũ Khắc Ngọc"},
    {code:"tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("11/30/2024 21:15:00"),end_time:new Date("12/1/2024 1:00:00"),learn_number:23,lesson_name:"Tăng cường từ vựng theo chủ đề: Sports",teacher:"Nguyễn Trung Nguyên"},
    {code:"2dochieukhoahoc",subject:"[TÔ] ĐH-KH",start_time:new Date("11/30/2024 21:15:00"),end_time:new Date("12/1/2024 1:00:00"),learn_number:13,lesson_name:"Hệ thống kiến thức cốt lõi chủ đề Quang học và Vật lí hạt nhân",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendekhoahoctsa",subject:"[LĐ TSA] Khoa học",start_time:new Date("11/30/2024 21:15:00"),end_time:new Date("12/1/2024 1:00:00"),learn_number:9,lesson_name:"Luyện đề TSA25G - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
    {code:"mentorsayhi",subject:"Mentorsayhi",start_time:new Date("11/30/2024 21:15:00"),end_time:new Date("12/1/2024 1:00:00"),learn_number:5,lesson_name:"Hướng dẫn Đề A_HSA2025 - Phần Tư duy định lượng",teacher:"Nguyễn Hợp Huy"},
    {code:"hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/1/2024 11:45:00"),end_time:new Date("12/1/2024 15:30:00"),learn_number:24,lesson_name:"Tóm tắt lý thuyết trọng tâm và một số dạng bài thường gặp về Đại cương về hóa học hữu cơ và Hydrocarbon",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendedochieutsa",subject:"[LĐ TSA] Đọc hiểu",start_time:new Date("12/1/2024 18:45:00"),end_time:new Date("12/1/2024 22:30:00"),learn_number:4,lesson_name:"Luyện đề TSA25EF - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
    {code:"2hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/1/2024 20:45:00"),end_time:new Date("12/2/2024 0:30:00"),learn_number:13,lesson_name:"Các dạng bài tập về thế điện cực và nguồn điện hoá học, Điện phân",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendedinhluonghsa",subject:"[LĐ HSA] Định lượng",start_time:new Date("12/1/2024 20:45:00"),end_time:new Date("12/2/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25B - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
    {code:"luyendedialihsa",subject:"[LĐ HSA] Địa lí",start_time:new Date("12/1/2024 20:45:00"),end_time:new Date("12/2/2024 0:30:00"),learn_number:1,lesson_name:"Luyện đề HSA25AB - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
    {code:"nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/1/2024 21:15:00"),end_time:new Date("12/2/2024 1:00:00"),learn_number:24,lesson_name:"Mô hình đoạn và cách xác định cấu trúc",teacher:"Vương Thúy Hằng"},
    {code:"sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/1/2024 21:15:00"),end_time:new Date("12/2/2024 1:00:00"),learn_number:22,lesson_name:"Hệ sinh thái",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"2sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/1/2024 21:15:00"),end_time:new Date("12/2/2024 1:00:00"),learn_number:13,lesson_name:"Kĩ năng xử lí bài tập di truyền liên kết với giới tính",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"2dochieukhoahoc",subject:"[TÔ] ĐH-KH",start_time:new Date("12/1/2024 21:15:00"),end_time:new Date("12/2/2024 1:00:00"),learn_number:13,lesson_name:"Hệ thống kiến thức cốt lõi chủ đề Quang học và Vật lí hạt nhân",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("12/1/2024 21:15:00"),end_time:new Date("12/2/2024 1:00:00"),learn_number:7,lesson_name:"Luyện đề TSA25E - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"lichsu",subject:"[TÔ] Lịch sử",start_time:new Date("12/2/2024 20:15:00"),end_time:new Date("12/3/2024 0:00:00"),learn_number:24,lesson_name:"Hồ Chí Minh - Anh hùng giải phóng dân tộc",teacher:"Nguyễn Thị Hải Huế"},
    {code:"2lichsu",subject:"[TÔ] Lịch sử",start_time:new Date("12/2/2024 20:15:00"),end_time:new Date("12/3/2024 0:00:00"),learn_number:13,lesson_name:"Sự ra đời và phát triển của ASEAN",teacher:"Nguyễn Thị Hải Huế"},
    {code:"luyendelichsuhsa",subject:"[LĐ HSA] Lịch sử",start_time:new Date("12/2/2024 20:15:00"),end_time:new Date("12/3/2024 0:00:00"),learn_number:2,lesson_name:"Luyện đề HSA25CD - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
    {code:"vatli",subject:"[TÔ] Vật lí",start_time:new Date("12/2/2024 20:45:00"),end_time:new Date("12/3/2024 0:30:00"),learn_number:24,lesson_name:"Suất điện động cảm ứng. Dòng điện không đổi",teacher:"Nguyễn Ngọc Hải"},
    {code:"2vatly",subject:"[TÔ] Vật lí",start_time:new Date("12/2/2024 20:45:00"),end_time:new Date("12/3/2024 0:30:00"),learn_number:13,lesson_name:"Máy phát điện xoay chiều - Máy biến áp - Sóng điện từ",teacher:"Nguyễn Ngọc Hải"},
    {code:"luyendedinhtinhhsa",subject:"[LĐ HSA] Định tính",start_time:new Date("12/2/2024 20:45:00"),end_time:new Date("12/3/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25B - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
    {code:"luyendetienganhhsa",subject:"[LĐ HSA] Tiếng Anh",start_time:new Date("12/2/2024 20:45:00"),end_time:new Date("12/3/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25B - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
    {code:"toan",subject:"[TÔ] Toán",start_time:new Date("12/2/2024 21:15:00"),end_time:new Date("12/3/2024 1:00:00"),learn_number:24,lesson_name:"Các phương pháp, kĩ năng xử lí bài toán phương trình – bất phương trình mũ và logarit",teacher:"Nguyễn Đức Tài"},
    {code:"hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/2/2024 21:15:00"),end_time:new Date("12/3/2024 1:00:00"),learn_number:24,lesson_name:"Tóm tắt lý thuyết trọng tâm và một số dạng bài thường gặp về Đại cương về hóa học hữu cơ và Hydrocarbon",teacher:"Vũ Khắc Ngọc"},
    {code:"2toan",subject:"[TÔ] Toán",start_time:new Date("12/2/2024 21:15:00"),end_time:new Date("12/3/2024 1:00:00"),learn_number:13,lesson_name:"Nguyên hàm - Tích phân một số hàm đặc biệt (P2)",teacher:"Nguyễn Đức Tài"},
    {code:"luyendedochieutsa",subject:"[LĐ TSA] Đọc hiểu",start_time:new Date("12/2/2024 21:15:00"),end_time:new Date("12/3/2024 1:00:00"),learn_number:4,lesson_name:"Luyện đề TSA25EF - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
    {code:"toan",subject:"[TÔ] Toán",start_time:new Date("12/3/2024 20:15:00"),end_time:new Date("12/4/2024 0:00:00"),learn_number:24,lesson_name:"Các phương pháp, kĩ năng xử lí bài toán phương trình – bất phương trình mũ và logarit",teacher:"Nguyễn Đức Tài"},
    {code:"tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/3/2024 20:15:00"),end_time:new Date("12/4/2024 0:00:00"),learn_number:24,lesson_name:"Không còn nỗi sợ đọc hiểu (P1)",teacher:"Nguyễn Trung Nguyên"},
    {code:"diali",subject:"[TÔ] Địa lí",start_time:new Date("12/3/2024 20:15:00"),end_time:new Date("12/4/2024 0:00:00"),learn_number:24,lesson_name:"Đông Nam Bộ, Biển Đông và các đảo, quần đảo",teacher:"Lê Phượng Loan"},
    {code:"2tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/3/2024 20:15:00"),end_time:new Date("12/4/2024 0:00:00"),learn_number:13,lesson_name:"Từ vựng trong dạng bài hoàn thành câu: Word choice",teacher:"Nguyễn Trung Nguyên"},
    {code:"2diali",subject:"[TÔ] Địa lí",start_time:new Date("12/3/2024 20:15:00"),end_time:new Date("12/4/2024 0:00:00"),learn_number:13,lesson_name:"Sự phân hóa đa dạng của thiên nhiên, sử dụng hợp lí tài nguyên thiên nhiên và bảo vệ môi trường",teacher:"Lê Phượng Loan"},
    {code:"vatli",subject:"[TÔ] Vật lí",start_time:new Date("12/3/2024 20:45:00"),end_time:new Date("12/4/2024 0:30:00"),learn_number:24,lesson_name:"Suất điện động cảm ứng. Dòng điện không đổi",teacher:"Nguyễn Ngọc Hải"},
    {code:"2vatly",subject:"[TÔ] Vật lí",start_time:new Date("12/3/2024 20:45:00"),end_time:new Date("12/4/2024 0:30:00"),learn_number:13,lesson_name:"Máy phát điện xoay chiều - Máy biến áp - Sóng điện từ",teacher:"Nguyễn Ngọc Hải"},
    {code:"luyendelichsuhsa",subject:"[LĐ HSA] Lịch sử",start_time:new Date("12/3/2024 20:45:00"),end_time:new Date("12/4/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25CD - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
    {code:"luyendedinhtinhhsa",subject:"[LĐ HSA] Định tính",start_time:new Date("12/3/2024 20:45:00"),end_time:new Date("12/4/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25B - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
    {code:"2dochieukhoahoc",subject:"[TÔ] ĐH-KH",start_time:new Date("12/3/2024 21:15:00"),end_time:new Date("12/4/2024 1:00:00"),learn_number:13,lesson_name:"Hệ thống kiến thức cốt lõi chủ đề Quang học và Vật lí hạt nhân",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendekhoahoctsa",subject:"[LĐ TSA] Khoa học",start_time:new Date("12/3/2024 21:15:00"),end_time:new Date("12/4/2024 1:00:00"),learn_number:9,lesson_name:"Luyện đề TSA25G - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
    {code:"mentorsayhi",subject:"Mentorsayhi",start_time:new Date("12/3/2024 21:15:00"),end_time:new Date("12/4/2024 1:00:00"),learn_number:6,lesson_name:"Ôn tập Toán HK1 - Đề 01",teacher:"Nguyễn Hợp Huy"},
    {code:"nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/4/2024 20:15:00"),end_time:new Date("12/5/2024 0:00:00"),learn_number:25,lesson_name:"Các phép liên kết trong câu và đoạn văn",teacher:"Phạm Hữu Cường"},
    {code:"2nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/4/2024 20:15:00"),end_time:new Date("12/5/2024 0:00:00"),learn_number:14,lesson_name:"Đặc trưng văn học kháng chiến chống Pháp",teacher:"Phạm Hữu Cường"},
    {code:"luyendedinhluonghsa",subject:"[LĐ HSA] Định lượng",start_time:new Date("12/4/2024 20:45:00"),end_time:new Date("12/5/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25B - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
    {code:"tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/4/2024 21:15:00"),end_time:new Date("12/5/2024 1:00:00"),learn_number:24,lesson_name:"Không còn nỗi sợ đọc hiểu (P1)",teacher:"Nguyễn Trung Nguyên"},
    {code:"sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/4/2024 21:15:00"),end_time:new Date("12/5/2024 1:00:00"),learn_number:22,lesson_name:"Hệ sinh thái",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"2tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/4/2024 21:15:00"),end_time:new Date("12/5/2024 1:00:00"),learn_number:13,lesson_name:"Từ vựng trong dạng bài hoàn thành câu: Word choice",teacher:"Nguyễn Trung Nguyên"},
    {code:"2sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/4/2024 21:15:00"),end_time:new Date("12/5/2024 1:00:00"),learn_number:13,lesson_name:"Kĩ năng xử lí bài tập di truyền liên kết với giới tính",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("12/4/2024 21:15:00"),end_time:new Date("12/5/2024 1:00:00"),learn_number:8,lesson_name:"Luyện đề TSA25F - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"luyendesinhhochsa",subject:"[LĐ HSA] Sinh học",start_time:new Date("12/4/2024 21:15:00"),end_time:new Date("12/5/2024 1:00:00"),learn_number:2,lesson_name:"Luyện đề HSA25CD - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
    {code:"hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/5/2024 11:45:00"),end_time:new Date("12/5/2024 15:30:00"),learn_number:25,lesson_name:"Tóm tắt lý thuyết trọng tâm và một số dạng bài thường gặp về Dẫn xuất halogen - alcohol - phenol và Hợp chất carbonyl - carboxylic acid",teacher:"Vũ Khắc Ngọc"},
    {code:"vatli",subject:"[TÔ] Vật lí",start_time:new Date("12/5/2024 20:45:00"),end_time:new Date("12/6/2024 0:30:00"),learn_number:24,lesson_name:"Suất điện động cảm ứng. Dòng điện không đổi",teacher:"Nguyễn Ngọc Hải"},
    {code:"2vatly",subject:"[TÔ] Vật lí",start_time:new Date("12/5/2024 20:45:00"),end_time:new Date("12/6/2024 0:30:00"),learn_number:13,lesson_name:"Máy phát điện xoay chiều - Máy biến áp - Sóng điện từ",teacher:"Nguyễn Ngọc Hải"},
    {code:"2hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/5/2024 20:45:00"),end_time:new Date("12/6/2024 0:30:00"),learn_number:14,lesson_name:"Lý thuyết trọng tâm cô đọng về kim loại, sự ăn mòn kim loại, điều chế và tách kim loại",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendetienganhhsa",subject:"[LĐ HSA] Tiếng Anh",start_time:new Date("12/5/2024 20:45:00"),end_time:new Date("12/6/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25B - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
    {code:"luyendelichsuhsa",subject:"[LĐ HSA] Lịch sử",start_time:new Date("12/5/2024 20:45:00"),end_time:new Date("12/6/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25CD - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
    {code:"nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/5/2024 21:15:00"),end_time:new Date("12/6/2024 1:00:00"),learn_number:25,lesson_name:"Các phép liên kết trong câu và đoạn văn",teacher:"Phạm Hữu Cường"},
    {code:"lichsu",subject:"[TÔ] Lịch sử",start_time:new Date("12/5/2024 21:15:00"),end_time:new Date("12/6/2024 1:00:00"),learn_number:24,lesson_name:"Hồ Chí Minh - Anh hùng giải phóng dân tộc",teacher:"Nguyễn Thị Hải Huế"},
    {code:"2nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/5/2024 21:15:00"),end_time:new Date("12/6/2024 1:00:00"),learn_number:14,lesson_name:"Đặc trưng văn học kháng chiến chống Pháp",teacher:"Phạm Hữu Cường"},
    {code:"2lichsu",subject:"[TÔ] Lịch sử",start_time:new Date("12/5/2024 21:15:00"),end_time:new Date("12/6/2024 1:00:00"),learn_number:13,lesson_name:"Sự ra đời và phát triển của ASEAN",teacher:"Nguyễn Thị Hải Huế"},
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("12/5/2024 21:15:00"),end_time:new Date("12/6/2024 1:00:00"),learn_number:9,lesson_name:"Luyện đề TSA25G - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"luyendedinhluonghsa",subject:"[LĐ HSA] Định lượng",start_time:new Date("12/5/2024 21:15:00"),end_time:new Date("12/6/2024 1:00:00"),learn_number:3,lesson_name:"Luyện đề HSA25C - Phần Tư duy định lượng",teacher:"Nguyễn Đức Tài"},
    {code:"luyendekhoahoctsa",subject:"[LĐ TSA] Khoa học",start_time:new Date("12/6/2024 18:45:00"),end_time:new Date("12/6/2024 22:30:00"),learn_number:9,lesson_name:"Luyện đề TSA25G - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
    {code:"tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/6/2024 20:15:00"),end_time:new Date("12/7/2024 0:00:00"),learn_number:24,lesson_name:"Không còn nỗi sợ đọc hiểu (P1)",teacher:"Nguyễn Trung Nguyên"},
    {code:"2tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/6/2024 20:15:00"),end_time:new Date("12/7/2024 0:00:00"),learn_number:13,lesson_name:"Từ vựng trong dạng bài hoàn thành câu: Word choice",teacher:"Nguyễn Trung Nguyên"},
    {code:"luyendedinhtinhhsa",subject:"[LĐ HSA] Định tính",start_time:new Date("12/6/2024 20:30:00"),end_time:new Date("12/7/2024 0:15:00"),learn_number:3,lesson_name:"Luyện đề HSA25C - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
    {code:"vatli",subject:"[TÔ] Vật lí",start_time:new Date("12/6/2024 20:45:00"),end_time:new Date("12/7/2024 0:30:00"),learn_number:24,lesson_name:"Suất điện động cảm ứng. Dòng điện không đổi",teacher:"Nguyễn Ngọc Hải"},
    {code:"2hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/6/2024 20:45:00"),end_time:new Date("12/7/2024 0:30:00"),learn_number:14,lesson_name:"Lý thuyết trọng tâm cô đọng về kim loại, sự ăn mòn kim loại, điều chế và tách kim loại",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendesinhhochsa",subject:"[LĐ HSA] Sinh học",start_time:new Date("12/6/2024 20:45:00"),end_time:new Date("12/7/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25CD - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
    {code:"toan",subject:"[TÔ] Toán",start_time:new Date("12/6/2024 21:15:00"),end_time:new Date("12/7/2024 1:00:00"),learn_number:25,lesson_name:"Ứng dụng thực tế mũ - logarit",teacher:"Nguyễn Đức Tài"},
    {code:"hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/6/2024 21:15:00"),end_time:new Date("12/7/2024 1:00:00"),learn_number:25,lesson_name:"Tóm tắt lý thuyết trọng tâm và một số dạng bài thường gặp về Dẫn xuất halogen - alcohol - phenol và Hợp chất carbonyl - carboxylic acid",teacher:"Vũ Khắc Ngọc"},
    {code:"diali",subject:"[TÔ] Địa lí",start_time:new Date("12/6/2024 21:15:00"),end_time:new Date("12/7/2024 1:00:00"),learn_number:24,lesson_name:"Đông Nam Bộ, Biển Đông và các đảo, quần đảo",teacher:"Lê Phượng Loan"},
    {code:"2toan",subject:"[TÔ] Toán",start_time:new Date("12/6/2024 21:15:00"),end_time:new Date("12/7/2024 1:00:00"),learn_number:14,lesson_name:"Phương pháp, kĩ năng xử lí nhanh bài toán nguyên hàm - tích phân và những sai lầm cần tránh",teacher:"Nguyễn Đức Tài"},
    {code:"2diali",subject:"[TÔ] Địa lí",start_time:new Date("12/6/2024 21:15:00"),end_time:new Date("12/7/2024 1:00:00"),learn_number:13,lesson_name:"Sự phân hóa đa dạng của thiên nhiên, sử dụng hợp lí tài nguyên thiên nhiên và bảo vệ môi trường",teacher:"Lê Phượng Loan"},
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("12/7/2024 18:45:00"),end_time:new Date("12/7/2024 22:30:00"),learn_number:8,lesson_name:"Luyện đề TSA25F - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"toan",subject:"[TÔ] Toán",start_time:new Date("12/7/2024 20:15:00"),end_time:new Date("12/8/2024 0:00:00"),learn_number:25,lesson_name:"Ứng dụng thực tế mũ - logarit",teacher:"Nguyễn Đức Tài"},
    {code:"nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/7/2024 20:15:00"),end_time:new Date("12/8/2024 0:00:00"),learn_number:25,lesson_name:"Các phép liên kết trong câu và đoạn văn",teacher:"Phạm Hữu Cường"},
    {code:"2toan",subject:"[TÔ] Toán",start_time:new Date("12/7/2024 20:15:00"),end_time:new Date("12/8/2024 0:00:00"),learn_number:14,lesson_name:"Phương pháp, kĩ năng xử lí nhanh bài toán nguyên hàm - tích phân và những sai lầm cần tránh",teacher:"Nguyễn Đức Tài"},
    {code:"2nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/7/2024 20:15:00"),end_time:new Date("12/8/2024 0:00:00"),learn_number:14,lesson_name:"Đặc trưng văn học kháng chiến chống Pháp",teacher:"Phạm Hữu Cường"},
    {code:"luyendetienganhhsa",subject:"[LĐ HSA] Tiếng Anh",start_time:new Date("12/7/2024 20:45:00"),end_time:new Date("12/8/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25C - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
    {code:"luyendesinhhochsa",subject:"[LĐ HSA] Sinh học",start_time:new Date("12/7/2024 20:45:00"),end_time:new Date("12/8/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25CD - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
    {code:"tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/7/2024 21:15:00"),end_time:new Date("12/8/2024 1:00:00"),learn_number:24,lesson_name:"Không còn nỗi sợ đọc hiểu (P1)",teacher:"Nguyễn Trung Nguyên"},
    {code:"2dochieukhoahoc",subject:"[TÔ] ĐH-KH",start_time:new Date("12/7/2024 21:15:00"),end_time:new Date("12/8/2024 1:00:00"),learn_number:14,lesson_name:"Nhận diện các kiểu văn bản và kĩ năng xử lí phần thi Tư duy khoa học",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendekhoahoctsa",subject:"[LĐ TSA] Khoa học",start_time:new Date("12/7/2024 21:15:00"),end_time:new Date("12/8/2024 1:00:00"),learn_number:10,lesson_name:"Luyện đề TSA25H - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
    {code:"mentorsayhi",subject:"Mentorsayhi",start_time:new Date("12/7/2024 21:15:00"),end_time:new Date("12/8/2024 1:00:00"),learn_number:7,lesson_name:"Hướng dẫn Đề A_TSA2025 - Phần Tư duy toán học",teacher:"Nguyễn Hợp Huy"},
    {code:"hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/8/2024 11:45:00"),end_time:new Date("12/8/2024 15:30:00"),learn_number:25,lesson_name:"Tóm tắt lý thuyết trọng tâm và một số dạng bài thường gặp về Dẫn xuất halogen - alcohol - phenol và Hợp chất carbonyl - carboxylic acid",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("12/8/2024 18:45:00"),end_time:new Date("12/8/2024 22:30:00"),learn_number:9,lesson_name:"Luyện đề TSA25G - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"2hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/8/2024 20:45:00"),end_time:new Date("12/9/2024 0:30:00"),learn_number:14,lesson_name:"Lý thuyết trọng tâm cô đọng về kim loại, sự ăn mòn kim loại, điều chế và tách kim loại",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendedinhluonghsa",subject:"[LĐ HSA] Định lượng",start_time:new Date("12/8/2024 20:45:00"),end_time:new Date("12/9/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25C - Phần Tư duy định lượng",teacher:"Nguyễn Đức Tài"},
    {code:"nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/8/2024 21:15:00"),end_time:new Date("12/9/2024 1:00:00"),learn_number:25,lesson_name:"Các phép liên kết trong câu và đoạn văn",teacher:"Phạm Hữu Cường"},
    {code:"sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/8/2024 21:15:00"),end_time:new Date("12/9/2024 1:00:00"),learn_number:23,lesson_name:"Chuyển hóa vật chất và năng lượng ở thực vật",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"2sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/8/2024 21:15:00"),end_time:new Date("12/9/2024 1:00:00"),learn_number:14,lesson_name:"Kĩ năng xử lí bài tập di truyền ngoài nhân - di truyền người",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"2dochieukhoahoc",subject:"[TÔ] ĐH-KH",start_time:new Date("12/8/2024 21:15:00"),end_time:new Date("12/9/2024 1:00:00"),learn_number:14,lesson_name:"Nhận diện các kiểu văn bản và kĩ năng xử lí phần thi Tư duy khoa học",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendetoantsa1",subject:"[LĐ TSA] Toán",start_time:new Date("12/8/2024 21:15:00"),end_time:new Date("12/9/2024 1:00:00"),learn_number:8,lesson_name:"Luyện đề TSA25F - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"luyendevatlyhsa",subject:"[LĐ HSA] Vật lí",start_time:new Date("12/8/2024 21:15:00"),end_time:new Date("12/9/2024 1:00:00"),learn_number:2,lesson_name:"Luyện đề HSA25CD - Phần Khoa học Vật lí",teacher:"Nguyễn Thành Đạt"},
    {code:"lichsu",subject:"[TÔ] Lịch sử",start_time:new Date("12/9/2024 20:15:00"),end_time:new Date("12/10/2024 0:00:00"),learn_number:25,lesson_name:"Phương pháp kĩ năng ôn luyện và làm bài thi",teacher:"Nguyễn Thị Hải Huế"},
    {code:"2lichsu",subject:"[TÔ] Lịch sử",start_time:new Date("12/9/2024 20:15:00"),end_time:new Date("12/10/2024 0:00:00"),learn_number:14,lesson_name:"Cộng đồng ASEAN: từ ý tưởng đến hiện thực",teacher:"Nguyễn Thị Hải Huế"},
    {code:"vatli",subject:"[TÔ] Vật lí",start_time:new Date("12/9/2024 20:45:00"),end_time:new Date("12/10/2024 0:30:00"),learn_number:25,lesson_name:"Đại cương Vật lí hạt nhân",teacher:"Nguyễn Ngọc Hải"},
    {code:"2vatly",subject:"[TÔ] Vật lí",start_time:new Date("12/9/2024 20:45:00"),end_time:new Date("12/10/2024 0:30:00"),learn_number:14,lesson_name:"Suất điện động cảm ứng. Dòng điện không đổi",teacher:"Nguyễn Ngọc Hải"},
    {code:"luyendedinhtinhhsa",subject:"[LĐ HSA] Định tính",start_time:new Date("12/9/2024 20:45:00"),end_time:new Date("12/10/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25C - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
    {code:"luyendetienganhhsa",subject:"[LĐ HSA] Tiếng Anh",start_time:new Date("12/9/2024 20:45:00"),end_time:new Date("12/10/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25C - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
    {code:"toan",subject:"[TÔ] Toán",start_time:new Date("12/9/2024 21:15:00"),end_time:new Date("12/10/2024 1:00:00"),learn_number:25,lesson_name:"Ứng dụng thực tế mũ - logarit",teacher:"Nguyễn Đức Tài"},
    {code:"hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/9/2024 21:15:00"),end_time:new Date("12/10/2024 1:00:00"),learn_number:25,lesson_name:"Tóm tắt lý thuyết trọng tâm và một số dạng bài thường gặp về Dẫn xuất halogen - alcohol - phenol và Hợp chất carbonyl - carboxylic acid",teacher:"Vũ Khắc Ngọc"},
    {code:"2toan",subject:"[TÔ] Toán",start_time:new Date("12/9/2024 21:15:00"),end_time:new Date("12/10/2024 1:00:00"),learn_number:14,lesson_name:"Phương pháp, kĩ năng xử lí nhanh bài toán nguyên hàm - tích phân và những sai lầm cần tránh",teacher:"Nguyễn Đức Tài"},
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("12/9/2024 21:15:00"),end_time:new Date("12/10/2024 1:00:00"),learn_number:9,lesson_name:"Luyện đề TSA25G - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"luyendehoahochsa",subject:"[LĐ HSA] Hóa học",start_time:new Date("12/9/2024 21:15:00"),end_time:new Date("12/10/2024 1:00:00"),learn_number:2,lesson_name:"Luyện đề HSA25CD - Phần Khoa học Hóa học",teacher:"Vũ Khắc Ngọc"},
    {code:"toan",subject:"[TÔ] Toán",start_time:new Date("12/10/2024 20:15:00"),end_time:new Date("12/11/2024 0:00:00"),learn_number:25,lesson_name:"Ứng dụng thực tế mũ - logarit",teacher:"Nguyễn Đức Tài"},
    {code:"tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/10/2024 20:15:00"),end_time:new Date("12/11/2024 0:00:00"),learn_number:25,lesson_name:"Không còn nỗi sợ đọc hiểu (P2)",teacher:"Nguyễn Trung Nguyên"},
    {code:"diali",subject:"[TÔ] Địa lí",start_time:new Date("12/10/2024 20:15:00"),end_time:new Date("12/11/2024 0:00:00"),learn_number:25,lesson_name:"Thực hành kĩ năng địa lí: Địa lí các vùng kinh tế",teacher:"Lê Phượng Loan"},
    {code:"2tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/10/2024 20:15:00"),end_time:new Date("12/11/2024 0:00:00"),learn_number:14,lesson_name:"Tăng cường từ vựng theo chủ đề: Gender equality",teacher:"Nguyễn Trung Nguyên"},
    {code:"2diali",subject:"[TÔ] Địa lí",start_time:new Date("12/10/2024 20:15:00"),end_time:new Date("12/11/2024 0:00:00"),learn_number:14,lesson_name:"Thực hành kĩ năng địa lí: Địa lí tự nhiên",teacher:"Lê Phượng Loan"},
    {code:"vatli",subject:"[TÔ] Vật lí",start_time:new Date("12/10/2024 20:45:00"),end_time:new Date("12/11/2024 0:30:00"),learn_number:25,lesson_name:"Đại cương Vật lí hạt nhân",teacher:"Nguyễn Ngọc Hải"},
    {code:"2vatly",subject:"[TÔ] Vật lí",start_time:new Date("12/10/2024 20:45:00"),end_time:new Date("12/11/2024 0:30:00"),learn_number:14,lesson_name:"Suất điện động cảm ứng. Dòng điện không đổi",teacher:"Nguyễn Ngọc Hải"},
    {code:"luyendedinhtinhhsa",subject:"[LĐ HSA] Định tính",start_time:new Date("12/10/2024 20:45:00"),end_time:new Date("12/11/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25C - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
    {code:"2dochieukhoahoc",subject:"[TÔ] ĐH-KH",start_time:new Date("12/10/2024 21:15:00"),end_time:new Date("12/11/2024 1:00:00"),learn_number:14,lesson_name:"Nhận diện các kiểu văn bản và kĩ năng xử lí phần thi Tư duy khoa học",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendekhoahoctsa",subject:"[LĐ TSA] Khoa học",start_time:new Date("12/10/2024 21:15:00"),end_time:new Date("12/11/2024 1:00:00"),learn_number:10,lesson_name:"Luyện đề TSA25H - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
    {code:"mentorsayhi",subject:"Mentorsayhi",start_time:new Date("12/10/2024 21:15:00"),end_time:new Date("12/11/2024 1:00:00"),learn_number:8,lesson_name:"Hướng dẫn Đề B_HSA2025 - Phần Tư duy định lượng",teacher:"Nguyễn Hợp Huy"},
    {code:"nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/11/2024 20:15:00"),end_time:new Date("12/12/2024 0:00:00"),learn_number:26,lesson_name:"Quy trình viết bài văn NLXH và NLVH",teacher:"Vương Thúy Hằng"},
    {code:"2nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/11/2024 20:15:00"),end_time:new Date("12/12/2024 0:00:00"),learn_number:15,lesson_name:"Đặc trưng văn học kháng chiến chống Mỹ",teacher:"Phạm Hữu Cường"},
    {code:"luyendedialihsa",subject:"[LĐ HSA] Địa lí",start_time:new Date("12/11/2024 20:15:00"),end_time:new Date("12/12/2024 0:00:00"),learn_number:2,lesson_name:"Luyện đề HSA25CD - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
    {code:"luyendevatlyhsa",subject:"[LĐ HSA] Vật lí",start_time:new Date("12/11/2024 20:45:00"),end_time:new Date("12/12/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25CD - Phần Khoa học Vật lí",teacher:"Nguyễn Thành Đạt"},
    {code:"luyendehoahochsa",subject:"[LĐ HSA] Hóa học",start_time:new Date("12/11/2024 20:45:00"),end_time:new Date("12/12/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25CD - Phần Khoa học Hóa học",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendedinhluonghsa",subject:"[LĐ HSA] Định lượng",start_time:new Date("12/11/2024 20:45:00"),end_time:new Date("12/12/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25C - Phần Tư duy định lượng",teacher:"Nguyễn Đức Tài"},
    {code:"tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/11/2024 21:15:00"),end_time:new Date("12/12/2024 1:00:00"),learn_number:25,lesson_name:"Không còn nỗi sợ đọc hiểu (P2)",teacher:"Nguyễn Trung Nguyên"},
    {code:"sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/11/2024 21:15:00"),end_time:new Date("12/12/2024 1:00:00"),learn_number:23,lesson_name:"Chuyển hóa vật chất và năng lượng ở thực vật",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"2tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/11/2024 21:15:00"),end_time:new Date("12/12/2024 1:00:00"),learn_number:14,lesson_name:"Tăng cường từ vựng theo chủ đề: Gender equality",teacher:"Nguyễn Trung Nguyên"},
    {code:"2sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/11/2024 21:15:00"),end_time:new Date("12/12/2024 1:00:00"),learn_number:14,lesson_name:"Kĩ năng xử lí bài tập di truyền ngoài nhân - di truyền người",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("12/11/2024 21:15:00"),end_time:new Date("12/12/2024 1:00:00"),learn_number:10,lesson_name:"Luyện đề TSA25H - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/12/2024 11:45:00"),end_time:new Date("12/12/2024 15:30:00"),learn_number:26,lesson_name:"Phương pháp và kĩ năng thực hành hóa học và các bài toán liên quan đến thực tiễn đời sống",teacher:"Vũ Khắc Ngọc"},
    {code:"vatli",subject:"[TÔ] Vật lí",start_time:new Date("12/12/2024 20:45:00"),end_time:new Date("12/13/2024 0:30:00"),learn_number:25,lesson_name:"Đại cương Vật lí hạt nhân",teacher:"Nguyễn Ngọc Hải"},
    {code:"2vatly",subject:"[TÔ] Vật lí",start_time:new Date("12/12/2024 20:45:00"),end_time:new Date("12/13/2024 0:30:00"),learn_number:14,lesson_name:"Suất điện động cảm ứng. Dòng điện không đổi",teacher:"Nguyễn Ngọc Hải"},
    {code:"2hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/12/2024 20:45:00"),end_time:new Date("12/13/2024 0:30:00"),learn_number:15,lesson_name:"Một số dạng bài tập đặc trưng về kim loại, sự ăn mòn kim loại, điều chế và tách kim loại",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendedialihsa",subject:"[LĐ HSA] Địa lí",start_time:new Date("12/12/2024 20:45:00"),end_time:new Date("12/13/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25CD - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
    {code:"luyendetienganhhsa",subject:"[LĐ HSA] Tiếng Anh",start_time:new Date("12/12/2024 20:45:00"),end_time:new Date("12/13/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25C - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
    {code:"nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/12/2024 21:15:00"),end_time:new Date("12/13/2024 1:00:00"),learn_number:26,lesson_name:"Quy trình viết bài văn NLXH và NLVH",teacher:"Vương Thúy Hằng"},
    {code:"lichsu",subject:"[TÔ] Lịch sử",start_time:new Date("12/12/2024 21:15:00"),end_time:new Date("12/13/2024 1:00:00"),learn_number:25,lesson_name:"Phương pháp kĩ năng ôn luyện và làm bài thi",teacher:"Nguyễn Thị Hải Huế"},
    {code:"2nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/12/2024 21:15:00"),end_time:new Date("12/13/2024 1:00:00"),learn_number:15,lesson_name:"Đặc trưng văn học kháng chiến chống Mỹ",teacher:"Phạm Hữu Cường"},
    {code:"2lichsu",subject:"[TÔ] Lịch sử",start_time:new Date("12/12/2024 21:15:00"),end_time:new Date("12/13/2024 1:00:00"),learn_number:14,lesson_name:"Cộng đồng ASEAN: từ ý tưởng đến hiện thực",teacher:"Nguyễn Thị Hải Huế"},
    {code:"luyendedochieutsa",subject:"[LĐ TSA] Đọc hiểu",start_time:new Date("12/12/2024 21:15:00"),end_time:new Date("12/13/2024 1:00:00"),learn_number:5,lesson_name:"Luyện đề TSA25GH - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendedinhluonghsa",subject:"[LĐ HSA] Định lượng",start_time:new Date("12/12/2024 21:15:00"),end_time:new Date("12/13/2024 1:00:00"),learn_number:4,lesson_name:"Luyện đề HSA25D - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
    {code:"luyendekhoahoctsa",subject:"[LĐ TSA] Khoa học",start_time:new Date("12/13/2024 18:45:00"),end_time:new Date("12/13/2024 22:30:00"),learn_number:10,lesson_name:"Luyện đề TSA25H - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
    {code:"tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/13/2024 20:15:00"),end_time:new Date("12/14/2024 0:00:00"),learn_number:25,lesson_name:"Không còn nỗi sợ đọc hiểu (P2)",teacher:"Nguyễn Trung Nguyên"},
    {code:"2tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/13/2024 20:15:00"),end_time:new Date("12/14/2024 0:00:00"),learn_number:14,lesson_name:"Tăng cường từ vựng theo chủ đề: Gender equality",teacher:"Nguyễn Trung Nguyên"},
    {code:"luyendedinhtinhhsa",subject:"[LĐ HSA] Định tính",start_time:new Date("12/13/2024 20:30:00"),end_time:new Date("12/14/2024 0:15:00"),learn_number:4,lesson_name:"Luyện đề HSA25D - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
    {code:"vatli",subject:"[TÔ] Vật lí",start_time:new Date("12/13/2024 20:45:00"),end_time:new Date("12/14/2024 0:30:00"),learn_number:25,lesson_name:"Đại cương Vật lí hạt nhân",teacher:"Nguyễn Ngọc Hải"},
    {code:"2hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/13/2024 20:45:00"),end_time:new Date("12/14/2024 0:30:00"),learn_number:15,lesson_name:"Một số dạng bài tập đặc trưng về kim loại, sự ăn mòn kim loại, điều chế và tách kim loại",teacher:"Vũ Khắc Ngọc"},
    {code:"toan",subject:"[TÔ] Toán",start_time:new Date("12/13/2024 21:15:00"),end_time:new Date("12/14/2024 1:00:00"),learn_number:26,lesson_name:"Các phương pháp, kĩ năng xử lí bài toán lượng giác",teacher:"Nguyễn Đức Tài"},
    {code:"hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/13/2024 21:15:00"),end_time:new Date("12/14/2024 1:00:00"),learn_number:26,lesson_name:"Phương pháp và kĩ năng thực hành hóa học và các bài toán liên quan đến thực tiễn đời sống",teacher:"Vũ Khắc Ngọc"},
    {code:"diali",subject:"[TÔ] Địa lí",start_time:new Date("12/13/2024 21:15:00"),end_time:new Date("12/14/2024 1:00:00"),learn_number:25,lesson_name:"Thực hành kĩ năng địa lí: Địa lí các vùng kinh tế",teacher:"Lê Phượng Loan"},
    {code:"2toan",subject:"[TÔ] Toán",start_time:new Date("12/13/2024 21:15:00"),end_time:new Date("12/14/2024 1:00:00"),learn_number:15,lesson_name:"Ứng dụng tích phân trong các bài toán liên chuyên đề",teacher:"Nguyễn Đức Tài"},
    {code:"2diali",subject:"[TÔ] Địa lí",start_time:new Date("12/13/2024 21:15:00"),end_time:new Date("12/14/2024 1:00:00"),learn_number:14,lesson_name:"Thực hành kĩ năng địa lí: Địa lí tự nhiên",teacher:"Lê Phượng Loan"},
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("12/14/2024 18:45:00"),end_time:new Date("12/14/2024 22:30:00"),learn_number:10,lesson_name:"Luyện đề TSA25H - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"toan",subject:"[TÔ] Toán",start_time:new Date("12/14/2024 20:15:00"),end_time:new Date("12/15/2024 0:00:00"),learn_number:26,lesson_name:"Các phương pháp, kĩ năng xử lí bài toán lượng giác",teacher:"Nguyễn Đức Tài"},
    {code:"nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/14/2024 20:15:00"),end_time:new Date("12/15/2024 0:00:00"),learn_number:26,lesson_name:"Quy trình viết bài văn NLXH và NLVH",teacher:"Vương Thúy Hằng"},
    {code:"2toan",subject:"[TÔ] Toán",start_time:new Date("12/14/2024 20:15:00"),end_time:new Date("12/15/2024 0:00:00"),learn_number:15,lesson_name:"Ứng dụng tích phân trong các bài toán liên chuyên đề",teacher:"Nguyễn Đức Tài"},
    {code:"2nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/14/2024 20:15:00"),end_time:new Date("12/15/2024 0:00:00"),learn_number:15,lesson_name:"Đặc trưng văn học kháng chiến chống Mỹ",teacher:"Phạm Hữu Cường"},
    {code:"luyendetienganhhsa",subject:"[LĐ HSA] Tiếng Anh",start_time:new Date("12/14/2024 20:45:00"),end_time:new Date("12/15/2024 0:30:00"),learn_number:4,lesson_name:"Luyện đề HSA25D - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
    {code:"luyendevatlyhsa",subject:"[LĐ HSA] Vật lí",start_time:new Date("12/14/2024 20:45:00"),end_time:new Date("12/15/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25CD - Phần Khoa học Vật lí",teacher:"Nguyễn Thành Đạt"},
    {code:"luyendehoahochsa",subject:"[LĐ HSA] Hóa học",start_time:new Date("12/14/2024 20:45:00"),end_time:new Date("12/15/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25CD - Phần Khoa học Hóa học",teacher:"Vũ Khắc Ngọc"},
    {code:"tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/14/2024 21:15:00"),end_time:new Date("12/15/2024 1:00:00"),learn_number:25,lesson_name:"Không còn nỗi sợ đọc hiểu (P2)",teacher:"Nguyễn Trung Nguyên"},
    {code:"2dochieukhoahoc",subject:"[TÔ] ĐH-KH",start_time:new Date("12/14/2024 21:15:00"),end_time:new Date("12/15/2024 1:00:00"),learn_number:15,lesson_name:"Nhận diện các kiểu văn bản và kĩ năng xử lí phần thi Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendekhoahoctsa",subject:"[LĐ TSA] Khoa học",start_time:new Date("12/14/2024 21:15:00"),end_time:new Date("12/15/2024 1:00:00"),learn_number:11,lesson_name:"Luyện đề TSA25I - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
    {code:"mentorsayhi",subject:"Mentorsayhi",start_time:new Date("12/14/2024 21:15:00"),end_time:new Date("12/15/2024 1:00:00"),learn_number:9,lesson_name:"Ôn tập Toán HK1 - Đề 02",teacher:"Nguyễn Hợp Huy"},
    {code:"hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/15/2024 11:45:00"),end_time:new Date("12/15/2024 15:30:00"),learn_number:26,lesson_name:"Phương pháp và kĩ năng thực hành hóa học và các bài toán liên quan đến thực tiễn đời sống",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendedochieutsa",subject:"[LĐ TSA] Đọc hiểu",start_time:new Date("12/15/2024 18:45:00"),end_time:new Date("12/15/2024 22:30:00"),learn_number:5,lesson_name:"Luyện đề TSA25GH - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
    {code:"2hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/15/2024 20:45:00"),end_time:new Date("12/16/2024 0:30:00"),learn_number:15,lesson_name:"Một số dạng bài tập đặc trưng về kim loại, sự ăn mòn kim loại, điều chế và tách kim loại",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendedinhluonghsa",subject:"[LĐ HSA] Định lượng",start_time:new Date("12/15/2024 20:45:00"),end_time:new Date("12/16/2024 0:30:00"),learn_number:4,lesson_name:"Luyện đề HSA25D - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
    {code:"luyendedialihsa",subject:"[LĐ HSA] Địa lí",start_time:new Date("12/15/2024 20:45:00"),end_time:new Date("12/16/2024 0:30:00"),learn_number:2,lesson_name:"Luyện đề HSA25CD - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
    {code:"nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/15/2024 21:15:00"),end_time:new Date("12/16/2024 1:00:00"),learn_number:26,lesson_name:"Quy trình viết bài văn NLXH và NLVH",teacher:"Vương Thúy Hằng"},
    {code:"sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/15/2024 21:15:00"),end_time:new Date("12/16/2024 1:00:00"),learn_number:24,lesson_name:"Chuyển hóa vật chất và năng lượng ở động vật",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"2sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/15/2024 21:15:00"),end_time:new Date("12/16/2024 1:00:00"),learn_number:15,lesson_name:"Lí thuyết về di truyền quần thể - ứng dụng di truyền học",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"2dochieukhoahoc",subject:"[TÔ] ĐH-KH",start_time:new Date("12/15/2024 21:15:00"),end_time:new Date("12/16/2024 1:00:00"),learn_number:15,lesson_name:"Nhận diện các kiểu văn bản và kĩ năng xử lí phần thi Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("12/15/2024 21:15:00"),end_time:new Date("12/16/2024 1:00:00"),learn_number:10,lesson_name:"Luyện đề TSA25H - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"lichsu",subject:"[TÔ] Lịch sử",start_time:new Date("12/16/2024 20:15:00"),end_time:new Date("12/17/2024 0:00:00"),learn_number:26,lesson_name:"Tổng ôn",teacher:"Nguyễn Thị Hải Huế"},
    {code:"2lichsu",subject:"[TÔ] Lịch sử",start_time:new Date("12/16/2024 20:15:00"),end_time:new Date("12/17/2024 0:00:00"),learn_number:15,lesson_name:"Cách mạng tháng Tám năm 1945",teacher:"Nguyễn Thị Hải Huế"},
    {code:"luyendelichsuhsa",subject:"[LĐ HSA] Lịch sử",start_time:new Date("12/16/2024 20:15:00"),end_time:new Date("12/17/2024 0:00:00"),learn_number:3,lesson_name:"Luyện đề HSA25EF - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
    {code:"vatli",subject:"[TÔ] Vật lí",start_time:new Date("12/16/2024 20:45:00"),end_time:new Date("12/17/2024 0:30:00"),learn_number:26,lesson_name:"Phương trình phản ứng hạt nhân",teacher:"Nguyễn Ngọc Hải"},
    {code:"2vatly",subject:"[TÔ] Vật lí",start_time:new Date("12/16/2024 20:45:00"),end_time:new Date("12/17/2024 0:30:00"),learn_number:15,lesson_name:"Đại cương Vật lí hạt nhân",teacher:"Nguyễn Ngọc Hải"},
    {code:"luyendedinhtinhhsa",subject:"[LĐ HSA] Định tính",start_time:new Date("12/16/2024 20:45:00"),end_time:new Date("12/17/2024 0:30:00"),learn_number:4,lesson_name:"Luyện đề HSA25D - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
    {code:"luyendetienganhhsa",subject:"[LĐ HSA] Tiếng Anh",start_time:new Date("12/16/2024 20:45:00"),end_time:new Date("12/17/2024 0:30:00"),learn_number:4,lesson_name:"Luyện đề HSA25D - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
    {code:"toan",subject:"[TÔ] Toán",start_time:new Date("12/16/2024 21:15:00"),end_time:new Date("12/17/2024 1:00:00"),learn_number:26,lesson_name:"Các phương pháp, kĩ năng xử lí bài toán lượng giác",teacher:"Nguyễn Đức Tài"},
    {code:"hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/16/2024 21:15:00"),end_time:new Date("12/17/2024 1:00:00"),learn_number:26,lesson_name:"Phương pháp và kĩ năng thực hành hóa học và các bài toán liên quan đến thực tiễn đời sống",teacher:"Vũ Khắc Ngọc"},
    {code:"2toan",subject:"[TÔ] Toán",start_time:new Date("12/16/2024 21:15:00"),end_time:new Date("12/17/2024 1:00:00"),learn_number:15,lesson_name:"Ứng dụng tích phân trong các bài toán liên chuyên đề",teacher:"Nguyễn Đức Tài"},
    {code:"luyendedochieutsa",subject:"[LĐ TSA] Đọc hiểu",start_time:new Date("12/16/2024 21:15:00"),end_time:new Date("12/17/2024 1:00:00"),learn_number:5,lesson_name:"Luyện đề TSA25GH - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
    {code:"toan",subject:"[TÔ] Toán",start_time:new Date("12/17/2024 20:15:00"),end_time:new Date("12/18/2024 0:00:00"),learn_number:26,lesson_name:"Các phương pháp, kĩ năng xử lí bài toán lượng giác",teacher:"Nguyễn Đức Tài"},
    {code:"tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/17/2024 20:15:00"),end_time:new Date("12/18/2024 0:00:00"),learn_number:26,lesson_name:"Không còn nỗi sợ đọc hiểu (P3)",teacher:"Nguyễn Trung Nguyên"},
    {code:"diali",subject:"[TÔ] Địa lí",start_time:new Date("12/17/2024 20:15:00"),end_time:new Date("12/18/2024 0:00:00"),learn_number:26,lesson_name:"Tổng ôn",teacher:"Lê Phượng Loan"},
    {code:"2tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/17/2024 20:15:00"),end_time:new Date("12/18/2024 0:00:00"),learn_number:15,lesson_name:"Kỹ năng xử lý dạng bài điền từ vào thông báo/quảng cáo",teacher:"Nguyễn Trung Nguyên"},
    {code:"2diali",subject:"[TÔ] Địa lí",start_time:new Date("12/17/2024 20:15:00"),end_time:new Date("12/18/2024 0:00:00"),learn_number:15,lesson_name:"Dân số, lao động việc làm",teacher:"Lê Phượng Loan"},
    {code:"vatli",subject:"[TÔ] Vật lí",start_time:new Date("12/17/2024 20:45:00"),end_time:new Date("12/18/2024 0:30:00"),learn_number:26,lesson_name:"Phương trình phản ứng hạt nhân",teacher:"Nguyễn Ngọc Hải"},
    {code:"2vatly",subject:"[TÔ] Vật lí",start_time:new Date("12/17/2024 20:45:00"),end_time:new Date("12/18/2024 0:30:00"),learn_number:15,lesson_name:"Đại cương Vật lí hạt nhân",teacher:"Nguyễn Ngọc Hải"},
    {code:"luyendelichsuhsa",subject:"[LĐ HSA] Lịch sử",start_time:new Date("12/17/2024 20:45:00"),end_time:new Date("12/18/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25EF - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
    {code:"luyendedinhtinhhsa",subject:"[LĐ HSA] Định tính",start_time:new Date("12/17/2024 20:45:00"),end_time:new Date("12/18/2024 0:30:00"),learn_number:4,lesson_name:"Luyện đề HSA25D - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
    {code:"2dochieukhoahoc",subject:"[TÔ] ĐH-KH",start_time:new Date("12/17/2024 21:15:00"),end_time:new Date("12/18/2024 1:00:00"),learn_number:15,lesson_name:"Nhận diện các kiểu văn bản và kĩ năng xử lí phần thi Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendekhoahoctsa",subject:"[LĐ TSA] Khoa học",start_time:new Date("12/17/2024 21:15:00"),end_time:new Date("12/18/2024 1:00:00"),learn_number:11,lesson_name:"Luyện đề TSA25I - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
    {code:"mentorsayhi",subject:"Mentorsayhi",start_time:new Date("12/17/2024 21:15:00"),end_time:new Date("12/18/2024 1:00:00"),learn_number:10,lesson_name:"Ôn tập học kì 1 - Chủ đề Hàm số",teacher:"Nguyễn Hợp Huy"},
    {code:"mentorsayhi",subject:"Mentorsayhi",start_time:new Date("12/21/2024 21:15:00"),end_time:new Date("12/22/2024 1:00:00"),learn_number:11,lesson_name:"Chữa đề thi thử TSA đợt 1",teacher:"Nguyễn Hợp Huy"},
    {code:"2nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/18/2024 20:15:00"),end_time:new Date("12/19/2024 0:00:00"),learn_number:16,lesson_name:"Văn bản thông tin và quy trình đọc văn bản",teacher:"Phạm Hữu Cường"},
    {code:"luyendedinhluonghsa",subject:"[LĐ HSA] Định lượng",start_time:new Date("12/18/2024 20:45:00"),end_time:new Date("12/19/2024 0:30:00"),learn_number:4,lesson_name:"Luyện đề HSA25D - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
    {code:"tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/18/2024 21:15:00"),end_time:new Date("12/19/2024 1:00:00"),learn_number:26,lesson_name:"Không còn nỗi sợ đọc hiểu (P3)",teacher:"Nguyễn Trung Nguyên"},
    {code:"sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/18/2024 21:15:00"),end_time:new Date("12/19/2024 1:00:00"),learn_number:24,lesson_name:"Chuyển hóa vật chất và năng lượng ở động vật",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"2tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/18/2024 21:15:00"),end_time:new Date("12/19/2024 1:00:00"),learn_number:15,lesson_name:"Kỹ năng xử lý dạng bài điền từ vào thông báo/quảng cáo",teacher:"Nguyễn Trung Nguyên"},
    {code:"2sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/18/2024 21:15:00"),end_time:new Date("12/19/2024 1:00:00"),learn_number:15,lesson_name:"Lí thuyết về di truyền quần thể - ứng dụng di truyền học",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("12/18/2024 21:15:00"),end_time:new Date("12/19/2024 1:00:00"),learn_number:11,lesson_name:"Luyện đề TSA25I - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"luyendesinhhochsa",subject:"[LĐ HSA] Sinh học",start_time:new Date("12/18/2024 21:15:00"),end_time:new Date("12/19/2024 1:00:00"),learn_number:3,lesson_name:"Luyện đề HSA25EF - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
    {code:"vatli",subject:"[TÔ] Vật lí",start_time:new Date("12/19/2024 20:45:00"),end_time:new Date("12/20/2024 0:30:00"),learn_number:26,lesson_name:"Phương trình phản ứng hạt nhân",teacher:"Nguyễn Ngọc Hải"},
    {code:"2vatly",subject:"[TÔ] Vật lí",start_time:new Date("12/19/2024 20:45:00"),end_time:new Date("12/20/2024 0:30:00"),learn_number:15,lesson_name:"Đại cương Vật lí hạt nhân",teacher:"Nguyễn Ngọc Hải"},
    {code:"2hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/19/2024 20:45:00"),end_time:new Date("12/20/2024 0:30:00"),learn_number:16,lesson_name:"Lý thuyết trọng tâm cô đọng về kim loại kiềm, kiềm thổ và hợp chất của chúng",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendetienganhhsa",subject:"[LĐ HSA] Tiếng Anh",start_time:new Date("12/19/2024 20:45:00"),end_time:new Date("12/20/2024 0:30:00"),learn_number:4,lesson_name:"Luyện đề HSA25D - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
    {code:"luyendelichsuhsa",subject:"[LĐ HSA] Lịch sử",start_time:new Date("12/19/2024 20:45:00"),end_time:new Date("12/20/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25EF - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
    {code:"lichsu",subject:"[TÔ] Lịch sử",start_time:new Date("12/19/2024 21:15:00"),end_time:new Date("12/20/2024 1:00:00"),learn_number:26,lesson_name:"Tổng ôn",teacher:"Nguyễn Thị Hải Huế"},
    {code:"2nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/19/2024 21:15:00"),end_time:new Date("12/20/2024 1:00:00"),learn_number:16,lesson_name:"Văn bản thông tin và quy trình đọc văn bản",teacher:"Phạm Hữu Cường"},
    {code:"2lichsu",subject:"[TÔ] Lịch sử",start_time:new Date("12/19/2024 21:15:00"),end_time:new Date("12/20/2024 1:00:00"),learn_number:15,lesson_name:"Cách mạng tháng Tám năm 1945",teacher:"Nguyễn Thị Hải Huế"},
    {code:"luyendedochieutsa",subject:"[LĐ TSA] Đọc hiểu",start_time:new Date("12/19/2024 21:15:00"),end_time:new Date("12/20/2024 1:00:00"),learn_number:6,lesson_name:"Luyện đề TSA25IJ - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendedinhluonghsa",subject:"[LĐ HSA] Định lượng",start_time:new Date("12/19/2024 21:15:00"),end_time:new Date("12/20/2024 1:00:00"),learn_number:5,lesson_name:"Luyện đề HSA25E - Phần Tư duy định lượng",teacher:"Nguyễn Đức Tài"},
    {code:"luyendekhoahoctsa",subject:"[LĐ TSA] Khoa học",start_time:new Date("12/20/2024 18:45:00"),end_time:new Date("12/20/2024 22:30:00"),learn_number:11,lesson_name:"Luyện đề TSA25I - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
    {code:"tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/20/2024 20:15:00"),end_time:new Date("12/21/2024 0:00:00"),learn_number:26,lesson_name:"Không còn nỗi sợ đọc hiểu (P3)",teacher:"Nguyễn Trung Nguyên"},
    {code:"2tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/20/2024 20:15:00"),end_time:new Date("12/21/2024 0:00:00"),learn_number:15,lesson_name:"Kỹ năng xử lý dạng bài điền từ vào thông báo/quảng cáo",teacher:"Nguyễn Trung Nguyên"},
    {code:"luyendedinhtinhhsa",subject:"[LĐ HSA] Định tính",start_time:new Date("12/20/2024 20:30:00"),end_time:new Date("12/21/2024 0:15:00"),learn_number:5,lesson_name:"Luyện đề HSA25E - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
    {code:"vatli",subject:"[TÔ] Vật lí",start_time:new Date("12/20/2024 20:45:00"),end_time:new Date("12/21/2024 0:30:00"),learn_number:26,lesson_name:"Phương trình phản ứng hạt nhân",teacher:"Nguyễn Ngọc Hải"},
    {code:"2hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/20/2024 20:45:00"),end_time:new Date("12/21/2024 0:30:00"),learn_number:16,lesson_name:"Lý thuyết trọng tâm cô đọng về kim loại kiềm, kiềm thổ và hợp chất của chúng",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendesinhhochsa",subject:"[LĐ HSA] Sinh học",start_time:new Date("12/20/2024 20:45:00"),end_time:new Date("12/21/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25EF - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
    {code:"diali",subject:"[TÔ] Địa lí",start_time:new Date("12/20/2024 21:15:00"),end_time:new Date("12/21/2024 1:00:00"),learn_number:26,lesson_name:"Tổng ôn",teacher:"Lê Phượng Loan"},
    {code:"2toan",subject:"[TÔ] Toán",start_time:new Date("12/20/2024 21:15:00"),end_time:new Date("12/21/2024 1:00:00"),learn_number:16,lesson_name:"Một số bài toán xác suất trọng tâm (P1)",teacher:"Nguyễn Đức Tài"},
    {code:"2diali",subject:"[TÔ] Địa lí",start_time:new Date("12/20/2024 21:15:00"),end_time:new Date("12/21/2024 1:00:00"),learn_number:15,lesson_name:"Dân số, lao động việc làm",teacher:"Lê Phượng Loan"},
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("12/21/2024 18:45:00"),end_time:new Date("12/21/2024 22:30:00"),learn_number:11,lesson_name:"Luyện đề TSA25I - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"2toan",subject:"[TÔ] Toán",start_time:new Date("12/21/2024 20:15:00"),end_time:new Date("12/22/2024 0:00:00"),learn_number:16,lesson_name:"Một số bài toán xác suất trọng tâm (P1)",teacher:"Nguyễn Đức Tài"},
    {code:"2nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/21/2024 20:15:00"),end_time:new Date("12/22/2024 0:00:00"),learn_number:16,lesson_name:"Văn bản thông tin và quy trình đọc văn bản",teacher:"Phạm Hữu Cường"},
    {code:"luyendetienganhhsa",subject:"[LĐ HSA] Tiếng Anh",start_time:new Date("12/21/2024 20:45:00"),end_time:new Date("12/22/2024 0:30:00"),learn_number:5,lesson_name:"Luyện đề HSA25E - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
    {code:"luyendesinhhochsa",subject:"[LĐ HSA] Sinh học",start_time:new Date("12/21/2024 20:45:00"),end_time:new Date("12/22/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25EF - Phần Khoa học Sinh học",teacher:"Nguyễn Thành Công"},
    {code:"tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/21/2024 21:15:00"),end_time:new Date("12/22/2024 1:00:00"),learn_number:26,lesson_name:"Không còn nỗi sợ đọc hiểu (P3)",teacher:"Nguyễn Trung Nguyên"},
    {code:"luyendekhoahoctsa",subject:"[LĐ TSA] Khoa học",start_time:new Date("12/21/2024 21:15:00"),end_time:new Date("12/22/2024 1:00:00"),learn_number:12,lesson_name:"Luyện đề TSA25J - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendedochieutsa",subject:"[LĐ TSA] Đọc hiểu",start_time:new Date("12/22/2024 18:45:00"),end_time:new Date("12/22/2024 22:30:00"),learn_number:6,lesson_name:"Luyện đề TSA25IJ - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
    {code:"2hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/22/2024 20:45:00"),end_time:new Date("12/23/2024 0:30:00"),learn_number:16,lesson_name:"Lý thuyết trọng tâm cô đọng về kim loại kiềm, kiềm thổ và hợp chất của chúng",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendedinhluonghsa",subject:"[LĐ HSA] Định lượng",start_time:new Date("12/22/2024 20:45:00"),end_time:new Date("12/23/2024 0:30:00"),learn_number:5,lesson_name:"Luyện đề HSA25E - Phần Tư duy định lượng",teacher:"Nguyễn Đức Tài"},
    {code:"sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/22/2024 21:15:00"),end_time:new Date("12/23/2024 1:00:00"),learn_number:25,lesson_name:"Cảm ứng, sinh trưởng, phát triển và sinh sản ở thực vật",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"2sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/22/2024 21:15:00"),end_time:new Date("12/23/2024 1:00:00"),learn_number:16,lesson_name:"Kĩ năng xử lí bài tập di truyền quần thể",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("12/22/2024 21:15:00"),end_time:new Date("12/23/2024 1:00:00"),learn_number:11,lesson_name:"Luyện đề TSA25I - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"luyendevatlyhsa",subject:"[LĐ HSA] Vật lí",start_time:new Date("12/22/2024 21:15:00"),end_time:new Date("12/23/2024 1:00:00"),learn_number:3,lesson_name:"Luyện đề HSA25EF - Phần Khoa học Vật lí",teacher:"Nguyễn Thành Đạt"},
    {code:"2lichsu",subject:"[TÔ] Lịch sử",start_time:new Date("12/23/2024 20:15:00"),end_time:new Date("12/24/2024 0:00:00"),learn_number:16,lesson_name:"Cuộc kháng chiến chống Pháp (1945 - 1954)",teacher:"Nguyễn Thị Hải Huế"},
    {code:"2vatly",subject:"[TÔ] Vật lí",start_time:new Date("12/23/2024 20:45:00"),end_time:new Date("12/24/2024 0:30:00"),learn_number:16,lesson_name:"Phương trình phản ứng hạt nhân",teacher:"Nguyễn Ngọc Hải"},
    {code:"luyendedinhtinhhsa",subject:"[LĐ HSA] Định tính",start_time:new Date("12/23/2024 20:45:00"),end_time:new Date("12/24/2024 0:30:00"),learn_number:5,lesson_name:"Luyện đề HSA25E - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
    {code:"luyendetienganhhsa",subject:"[LĐ HSA] Tiếng Anh",start_time:new Date("12/23/2024 20:45:00"),end_time:new Date("12/24/2024 0:30:00"),learn_number:5,lesson_name:"Luyện đề HSA25E - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
    {code:"2toan",subject:"[TÔ] Toán",start_time:new Date("12/23/2024 21:15:00"),end_time:new Date("12/24/2024 1:00:00"),learn_number:16,lesson_name:"Một số bài toán xác suất trọng tâm (P1)",teacher:"Nguyễn Đức Tài"},
    {code:"luyendedochieutsa",subject:"[LĐ TSA] Đọc hiểu",start_time:new Date("12/23/2024 21:15:00"),end_time:new Date("12/24/2024 1:00:00"),learn_number:6,lesson_name:"Luyện đề TSA25IJ - Phần Tư duy Đọc hiểu",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendehoahochsa",subject:"[LĐ HSA] Hóa học",start_time:new Date("12/23/2024 21:15:00"),end_time:new Date("12/24/2024 1:00:00"),learn_number:3,lesson_name:"Luyện đề HSA25EF - Phần Khoa học Hóa học",teacher:"Vũ Khắc Ngọc"},
    {code:"2tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/24/2024 20:15:00"),end_time:new Date("12/25/2024 0:00:00"),learn_number:16,lesson_name:"Kỹ năng xử lý dạng bài sắp xếp thành đoạn văn/ bức thư hoàn chỉnh",teacher:"Nguyễn Trung Nguyên"},
    {code:"2diali",subject:"[TÔ] Địa lí",start_time:new Date("12/24/2024 20:15:00"),end_time:new Date("12/25/2024 0:00:00"),learn_number:16,lesson_name:"Đô thị hóa và các bài tập thực hành kĩ năng",teacher:"Lê Phượng Loan"},
    {code:"2vatly",subject:"[TÔ] Vật lí",start_time:new Date("12/24/2024 20:45:00"),end_time:new Date("12/25/2024 0:30:00"),learn_number:16,lesson_name:"Phương trình phản ứng hạt nhân",teacher:"Nguyễn Ngọc Hải"},
    {code:"luyendedinhtinhhsa",subject:"[LĐ HSA] Định tính",start_time:new Date("12/24/2024 20:45:00"),end_time:new Date("12/25/2024 0:30:00"),learn_number:5,lesson_name:"Luyện đề HSA25E - Phần Tư duy định tính",teacher:"Phạm Hữu Cường"},
    {code:"luyendekhoahoctsa",subject:"[LĐ TSA] Khoa học",start_time:new Date("12/24/2024 21:15:00"),end_time:new Date("12/25/2024 1:00:00"),learn_number:12,lesson_name:"Luyện đề TSA25J - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
    {code:"2nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/25/2024 20:15:00"),end_time:new Date("12/26/2024 0:00:00"),learn_number:17,lesson_name:"Văn bản nghị luận và quy trình đọc văn bản",teacher:"Vương Thúy Hằng"},
    {code:"luyendedialihsa",subject:"[LĐ HSA] Địa lí",start_time:new Date("12/25/2024 20:15:00"),end_time:new Date("12/26/2024 0:00:00"),learn_number:3,lesson_name:"Luyện đề HSA25EF - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
    {code:"luyendevatlyhsa",subject:"[LĐ HSA] Vật lí",start_time:new Date("12/25/2024 20:45:00"),end_time:new Date("12/26/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25EF - Phần Khoa học Vật lí",teacher:"Nguyễn Thành Đạt"},
    {code:"luyendehoahochsa",subject:"[LĐ HSA] Hóa học",start_time:new Date("12/25/2024 20:45:00"),end_time:new Date("12/26/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25EF - Phần Khoa học Hóa học",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendedinhluonghsa",subject:"[LĐ HSA] Định lượng",start_time:new Date("12/25/2024 20:45:00"),end_time:new Date("12/26/2024 0:30:00"),learn_number:5,lesson_name:"Luyện đề HSA25E - Phần Tư duy định lượng",teacher:"Nguyễn Đức Tài"},
    {code:"sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/25/2024 21:15:00"),end_time:new Date("12/26/2024 1:00:00"),learn_number:25,lesson_name:"Cảm ứng, sinh trưởng, phát triển và sinh sản ở thực vật",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"2tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/25/2024 21:15:00"),end_time:new Date("12/26/2024 1:00:00"),learn_number:16,lesson_name:"Kỹ năng xử lý dạng bài sắp xếp thành đoạn văn/ bức thư hoàn chỉnh",teacher:"Nguyễn Trung Nguyên"},
    {code:"2sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/25/2024 21:15:00"),end_time:new Date("12/26/2024 1:00:00"),learn_number:16,lesson_name:"Kĩ năng xử lí bài tập di truyền quần thể",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("12/25/2024 21:15:00"),end_time:new Date("12/26/2024 1:00:00"),learn_number:12,lesson_name:"Luyện đề TSA25J - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"2vatly",subject:"[TÔ] Vật lí",start_time:new Date("12/26/2024 20:45:00"),end_time:new Date("12/27/2024 0:30:00"),learn_number:16,lesson_name:"Phương trình phản ứng hạt nhân",teacher:"Nguyễn Ngọc Hải"},
    {code:"2hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/26/2024 20:45:00"),end_time:new Date("12/27/2024 0:30:00"),learn_number:17,lesson_name:"Phương pháp và phân loại các dạng bài tập về kim loại kiềm, kiềm thổ và hợp chất của chúng (Phần 1)",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendedialihsa",subject:"[LĐ HSA] Địa lí",start_time:new Date("12/26/2024 20:45:00"),end_time:new Date("12/27/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25EF - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
    {code:"luyendetienganhhsa",subject:"[LĐ HSA] Tiếng Anh",start_time:new Date("12/26/2024 20:45:00"),end_time:new Date("12/27/2024 0:30:00"),learn_number:5,lesson_name:"Luyện đề HSA25E - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
    {code:"2nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/26/2024 21:15:00"),end_time:new Date("12/27/2024 1:00:00"),learn_number:17,lesson_name:"Văn bản nghị luận và quy trình đọc văn bản",teacher:"Vương Thúy Hằng"},
    {code:"2lichsu",subject:"[TÔ] Lịch sử",start_time:new Date("12/26/2024 21:15:00"),end_time:new Date("12/27/2024 1:00:00"),learn_number:16,lesson_name:"Cuộc kháng chiến chống Pháp (1945 - 1954)",teacher:"Nguyễn Thị Hải Huế"},
    {code:"luyendedinhluonghsa",subject:"[LĐ HSA] Định lượng",start_time:new Date("12/26/2024 21:15:00"),end_time:new Date("12/27/2024 1:00:00"),learn_number:6,lesson_name:"Luyện đề HSA25F - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
    {code:"luyendekhoahoctsa",subject:"[LĐ TSA] Khoa học",start_time:new Date("12/27/2024 18:45:00"),end_time:new Date("12/27/2024 22:30:00"),learn_number:12,lesson_name:"Luyện đề TSA25J - Phần Tư duy Khoa học",teacher:"Vũ Khắc Ngọc"},
    {code:"2tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/27/2024 20:15:00"),end_time:new Date("12/28/2024 0:00:00"),learn_number:16,lesson_name:"Kỹ năng xử lý dạng bài sắp xếp thành đoạn văn/ bức thư hoàn chỉnh",teacher:"Nguyễn Trung Nguyên"},
    {code:"luyendedinhtinhhsa",subject:"[LĐ HSA] Định tính",start_time:new Date("12/27/2024 20:30:00"),end_time:new Date("12/28/2024 0:15:00"),learn_number:6,lesson_name:"Luyện đề HSA25F - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
    {code:"2hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/27/2024 20:45:00"),end_time:new Date("12/28/2024 0:30:00"),learn_number:17,lesson_name:"Phương pháp và phân loại các dạng bài tập về kim loại kiềm, kiềm thổ và hợp chất của chúng (Phần 1)",teacher:"Vũ Khắc Ngọc"},
    {code:"2toan",subject:"[TÔ] Toán",start_time:new Date("12/27/2024 21:15:00"),end_time:new Date("12/28/2024 1:00:00"),learn_number:17,lesson_name:"Một số bài toán xác suất trọng tâm (P1)",teacher:"Nguyễn Đức Tài"},
    {code:"2diali",subject:"[TÔ] Địa lí",start_time:new Date("12/27/2024 21:15:00"),end_time:new Date("12/28/2024 1:00:00"),learn_number:16,lesson_name:"Đô thị hóa và các bài tập thực hành kĩ năng",teacher:"Lê Phượng Loan"},
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("12/28/2024 18:45:00"),end_time:new Date("12/28/2024 22:30:00"),learn_number:12,lesson_name:"Luyện đề TSA25J - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"2toan",subject:"[TÔ] Toán",start_time:new Date("12/28/2024 20:15:00"),end_time:new Date("12/29/2024 0:00:00"),learn_number:17,lesson_name:"Một số bài toán xác suất trọng tâm (P1)",teacher:"Nguyễn Đức Tài"},
    {code:"2nguvan",subject:"[TÔ] Ngữ văn",start_time:new Date("12/28/2024 20:15:00"),end_time:new Date("12/29/2024 0:00:00"),learn_number:17,lesson_name:"Văn bản nghị luận và quy trình đọc văn bản",teacher:"Vương Thúy Hằng"},
    {code:"luyendetienganhhsa",subject:"[LĐ HSA] Tiếng Anh",start_time:new Date("12/28/2024 20:45:00"),end_time:new Date("12/29/2024 0:30:00"),learn_number:6,lesson_name:"Luyện đề HSA25F - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
    {code:"luyendevatlyhsa",subject:"[LĐ HSA] Vật lí",start_time:new Date("12/28/2024 20:45:00"),end_time:new Date("12/29/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25EF - Phần Khoa học Vật lí",teacher:"Nguyễn Thành Đạt"},
    {code:"luyendehoahochsa",subject:"[LĐ HSA] Hóa học",start_time:new Date("12/28/2024 20:45:00"),end_time:new Date("12/29/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25EF - Phần Khoa học Hóa học",teacher:"Vũ Khắc Ngọc"},
    {code:"2hoahoc",subject:"[TÔ] Hóa học",start_time:new Date("12/29/2024 20:45:00"),end_time:new Date("12/30/2024 0:30:00"),learn_number:17,lesson_name:"Phương pháp và phân loại các dạng bài tập về kim loại kiềm, kiềm thổ và hợp chất của chúng (Phần 1)",teacher:"Vũ Khắc Ngọc"},
    {code:"luyendedinhluonghsa",subject:"[LĐ HSA] Định lượng",start_time:new Date("12/29/2024 20:45:00"),end_time:new Date("12/30/2024 0:30:00"),learn_number:6,lesson_name:"Luyện đề HSA25F - Phần Tư duy định lượng",teacher:"Phạm Thái Sơn"},
    {code:"luyendedialihsa",subject:"[LĐ HSA] Địa lí",start_time:new Date("12/29/2024 20:45:00"),end_time:new Date("12/30/2024 0:30:00"),learn_number:3,lesson_name:"Luyện đề HSA25EF - Phần Khoa học Địa lí",teacher:"Nguyễn Văn Vinh"},
    {code:"sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/29/2024 21:15:00"),end_time:new Date("12/30/2024 1:00:00"),learn_number:26,lesson_name:"Cảm ứng, sinh trưởng, phát triển và sinh sản ở động vật",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"2sinhhoc",subject:"[TÔ] Sinh học",start_time:new Date("12/29/2024 21:15:00"),end_time:new Date("12/30/2024 1:00:00"),learn_number:17,lesson_name:"Bằng chứng tiến hóa",teacher:"Nguyễn Dương Ánh Hồng"},
    {code:"luyendetoantsa",subject:"[LĐ TSA] Toán",start_time:new Date("12/29/2024 21:15:00"),end_time:new Date("12/30/2024 1:00:00"),learn_number:12,lesson_name:"Luyện đề TSA25J - Phần Tư duy Toán học",teacher:"Nguyễn Minh Thắng"},
    {code:"2lichsu",subject:"[TÔ] Lịch sử",start_time:new Date("12/30/2024 20:15:00"),end_time:new Date("12/31/2024 0:00:00"),learn_number:17,lesson_name:"Cuộc kháng chiến chống Mĩ (1954 - 1975)",teacher:"Nguyễn Thị Hải Huế"},
    {code:"luyendelichsuhsa",subject:"[LĐ HSA] Lịch sử",start_time:new Date("12/30/2024 20:15:00"),end_time:new Date("12/31/2024 0:00:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
    {code:"2vatly",subject:"[TÔ] Vật lí",start_time:new Date("12/30/2024 20:45:00"),end_time:new Date("12/31/2024 0:30:00"),learn_number:17,lesson_name:"Hiện tượng phóng xạ (P1)",teacher:"Nguyễn Ngọc Hải"},
    {code:"luyendedinhtinhhsa",subject:"[LĐ HSA] Định tính",start_time:new Date("12/30/2024 20:45:00"),end_time:new Date("12/31/2024 0:30:00"),learn_number:6,lesson_name:"Luyện đề HSA25F - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
    {code:"luyendetienganhhsa",subject:"[LĐ HSA] Tiếng Anh",start_time:new Date("12/30/2024 20:45:00"),end_time:new Date("12/31/2024 0:30:00"),learn_number:6,lesson_name:"Luyện đề HSA25F - Phần Tiếng Anh",teacher:"Nguyễn Trung Nguyên"},
    {code:"2toan",subject:"[TÔ] Toán",start_time:new Date("12/30/2024 21:15:00"),end_time:new Date("12/31/2024 1:00:00"),learn_number:17,lesson_name:"Một số bài toán xác suất trọng tâm (P1)",teacher:"Nguyễn Đức Tài"},
    {code:"2tienganh",subject:"[TÔ] Tiếng Anh",start_time:new Date("12/31/2024 20:15:00"),end_time:new Date("1/1/2025 0:00:00"),learn_number:17,lesson_name:"Nâng cao khả năng làm dạng bài điền cụm từ/ mệnh đề vào đoạn văn (P1)",teacher:"Nguyễn Trung Nguyên"},
    {code:"2diali",subject:"[TÔ] Địa lí",start_time:new Date("12/31/2024 20:15:00"),end_time:new Date("1/1/2025 0:00:00"),learn_number:17,lesson_name:"Nông nghiệp, lâm nghiệp và thủy sản",teacher:"Lê Phượng Loan"},
    {code:"2vatly",subject:"[TÔ] Vật lí",start_time:new Date("12/31/2024 20:45:00"),end_time:new Date("1/1/2025 0:30:00"),learn_number:17,lesson_name:"Hiện tượng phóng xạ (P1)",teacher:"Nguyễn Ngọc Hải"},
    {code:"luyendelichsuhsa",subject:"[LĐ HSA] Lịch sử",start_time:new Date("12/31/2024 20:45:00"),end_time:new Date("1/1/2025 0:30:00"),learn_number:4,lesson_name:"Luyện đề HSA25GH - Phần Khoa học Lịch sử",teacher:"Dương Thị Huyền"},
    {code:"luyendedinhtinhhsa",subject:"[LĐ HSA] Định tính",start_time:new Date("12/31/2024 20:45:00"),end_time:new Date("1/1/2025 0:30:00"),learn_number:6,lesson_name:"Luyện đề HSA25F - Phần Tư duy định tính",teacher:"Vương Thúy Hằng"},
    {code:"luyendetiengvietvact",subject:"[LĐ V-ACT] Tiếng Việt",start_time:new Date("12/18/2024 20:15:00"),end_time:new Date("12/19/2024 0:00:00"),learn_number:100,lesson_name:"Sử dụng Ngôn ngữ - Tiếng Việt_Định hướng, kế hoạch ôn thi nước rút",teacher:"Vương Thúy Hằng"},
    {code:"luyendetienganhvact",subject:"[LĐ V-ACT] Tiếng Anh",start_time:new Date("12/22/2024 19:45:00"),end_time:new Date("12/22/2024 23:30:00"),learn_number:100,lesson_name:"Sử dụng Ngôn ngữ - Tiếng Anh_Định hướng, kế hoạch ôn thi nước rút",teacher:"Bùi Thế Phương"},
    {code:"luyendetoanvact",subject:"[LĐ V-ACT] Toán",start_time:new Date("12/23/2024 21:15:00"),end_time:new Date("12/24/2024 1:00:00"),learn_number:100,lesson_name:"Toán, Logic và phân tích số liệu_Định hướng, kế hoạch ôn thi nước rút",teacher:"Nguyễn Hoài Nam"},
    {code:"luyendeslkhvact",subject:"[LĐ V-ACT] Suy luận khoa học",start_time:new Date("12/30/2024 21:15:00"),end_time:new Date("12/31/2024 1:00:00"),learn_number:1,lesson_name:"Suy luận Khoa học_Phương pháp/Kĩ năng làm bài_Luyện đề 01",teacher:"Vũ Khắc Ngọc"},
    { code: "demo", subject: "Demo", start_time: new Date("10/29/2024 20:15:00"), end_time: new Date("11/30/2024 23:59:00"), learn_number: 1 }
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
    {code:"mentorsayhi",boxid:"952000",boxtag:"3Ot9Nu",tkey:"8e41bec4f7cad494",tid:"56"},
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
