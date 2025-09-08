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
       {code:"toan-11",subject:"",start_time:new Date("7/25/2025 19:15:00"),end_time:new Date("7/25/2025 23:00:00"),learn_number:4,lesson_name:"Các dạng bài cốt lõi về hàm số lượng giác",teacher:"Nguyễn Đức Tài"},
    {code:"toan-61",subject:"Demo",start_time:new Date("9/8/2025 08:00:00"),end_time:new Date("9/8/2025 23:59:00"),learn_number:10,lesson_name:"Động lực học",teacher:"Thiều Thị Dung"},
      {code:"toan-71",subject:"toan-71",start_time:new Date("9/8/2025 08:00:00"),end_time:new Date("9/8/2025 23:59:00"),learn_number:1,lesson_name:"Động lực học",teacher:"Thiều Thị Dung",lesson_document:"https://w.ladicdn.com/5cff118624dbba3522f3cf7a/tong-on-anh-20250905113102-juvve.png"},
      {code:"nguvan-71",subject:"nguvan-71",start_time:new Date("9/8/2025 08:00:00"),end_time:new Date("9/8/2025 23:59:00"),learn_number:1,lesson_name:"Động lực học",teacher:"Thiều Thị Dung",lesson_document:"https://w.ladicdn.com/5cff118624dbba3522f3cf7a/tong-on-hoa-20250905113102-lwsfs.png"},
      {code:"vatli-71",subject:"vatli-71",start_time:new Date("9/8/2025 08:00:00"),end_time:new Date("9/8/2025 11:00:00"),learn_number:1,lesson_name:"Động lực học 1",teacher:"Thiều Thị Dung",lesson_document:"https://w.ladicdn.com/5cff118624dbba3522f3cf7a/tong-on-sinh-20250905113102-pezjg.png"},
      {code:"vatli-71",subject:"vatli-71",start_time:new Date("9/8/2025 11:55:00"),end_time:new Date("9/8/2025 23:59:00"),learn_number:2,lesson_name:"Động lực học 2 ",teacher:"Thiều Thị Dung",lesson_document:"https://w.ladicdn.com/5cff118624dbba3522f3cf7a/25toan8giangth-20250704103754-ukfek.jpg"},
{code:"vatli-71",subject:"vatli-71",start_time:new Date("9/8/2025 11:55:00"),end_time:new Date("9/8/2025 23:59:00"),learn_number:3,lesson_name:"Động lực học 3 ",teacher:"Thiều Thị Dung",lesson_document:"https://w.ladicdn.com/5cff118624dbba3522f3cf7a/tong-on-anh-20250905113102-juvve.png"},
    {code:"toan-8",subject:"",start_time:new Date("7/25/2025 18:00:00"),end_time:new Date("7/25/2025 21:45:00"),learn_number:7,lesson_name:"P2_Ôn tập biểu thức đại số và đa thức một biến",teacher:"Trần Hà Giang"},
{code:"toan-6",subject:"",start_time:new Date("7/25/2025 19:45:00"),end_time:new Date("7/25/2025 23:30:00"),learn_number:5,lesson_name:"Ôn tập hình học phẳng",teacher:"Trần Hà Giang"},
{code:"nguvan-7",subject:"",start_time:new Date("7/25/2025 19:45:00"),end_time:new Date("7/25/2025 23:30:00"),learn_number:6,lesson_name:"Kĩ năng đọc hiểu văn bản tiểu thuyết và truyện ngắn - Phần 1",teacher:"Vũ Hồng Ngọc"},
{code:"hoahoc-11",subject:"",start_time:new Date("7/26/2025 19:15:00"),end_time:new Date("7/26/2025 23:00:00"),learn_number:4,lesson_name:"Lý thuyết trọng tâm về Cân bằng hóa học và hằng số cân bằng",teacher:"Vũ Thị Thùy Dương"},
{code:"nguvan-6",subject:"",start_time:new Date("7/26/2025 19:45:00"),end_time:new Date("7/26/2025 23:30:00"),learn_number:6,lesson_name:"Thực hành đọc văn bản truyền thuyết và cổ tích",teacher:"Hoàng Thị Tuyết"},
{code:"toan-7",subject:"",start_time:new Date("7/27/2025 19:45:00"),end_time:new Date("7/27/2025 23:30:00"),learn_number:6,lesson_name:"Ôn tập góc và đường thẳng",teacher:"Chu Thị Lâm Oanh"},
{code:"nguvan-8",subject:"",start_time:new Date("7/27/2025 18:00:00"),end_time:new Date("7/27/2025 21:45:00"),learn_number:8,lesson_name:"Kĩ năng đọc hiểu văn bản truyện ngắn (P2)",teacher:"Nguyễn Thị Liệu"},
{code:"nguvan-6",subject:"",start_time:new Date("7/27/2025 19:45:00"),end_time:new Date("7/27/2025 23:30:00"),learn_number:5,lesson_name:"Thực hành đọc văn bản truyện đồng thoại",teacher:"Nguyễn Thị Liệu"},
{code:"vatli-11",subject:"",start_time:new Date("7/28/2025 20:45:00"),end_time:new Date("7/29/2025 0:30:00"),learn_number:5,lesson_name:"Phương trình dao động điều hòa. Pha và trạng thái dao động",teacher:"Thiều Thị Dung"},
{code:"toan-8",subject:"",start_time:new Date("7/28/2025 18:00:00"),end_time:new Date("7/28/2025 21:45:00"),learn_number:8,lesson_name:"Ôn tập quan hệ giữa các yếu tố trong tam giác",teacher:"Trần Hà Giang"},
{code:"toan-7",subject:"",start_time:new Date("7/28/2025 19:45:00"),end_time:new Date("7/28/2025 23:30:00"),learn_number:7,lesson_name:"Ôn tập xác suất - thống kê",teacher:"Tường Duy Chiến"},
{code:"toan-6",subject:"",start_time:new Date("7/28/2025 19:45:00"),end_time:new Date("7/28/2025 23:30:00"),learn_number:6,lesson_name:"Ôn tập giải toán",teacher:"Trần Hà Giang"},
{code:"nguvan-8",subject:"",start_time:new Date("7/28/2025 19:45:00"),end_time:new Date("7/28/2025 23:30:00"),learn_number:9,lesson_name:"Kĩ năng đọc hiểu văn bản truyện lịch sử (P2)",teacher:"Vũ Hồng Ngọc"},
{code:"nguvan-7",subject:"",start_time:new Date("7/28/2025 18:00:00"),end_time:new Date("7/28/2025 21:45:00"),learn_number:6,lesson_name:"Kĩ năng đọc hiểu văn bản tiểu thuyết và truyện ngắn - Phần 1",teacher:"Vũ Hồng Ngọc"},
{code:"hoahoc-11",subject:"",start_time:new Date("7/29/2025 19:15:00"),end_time:new Date("7/29/2025 23:00:00"),learn_number:5,lesson_name:"Các dạng bài tập về Cân bằng hóa học và hằng số cân bằng",teacher:"Vũ Thị Thùy Dương"},
{code:"toan-8",subject:"",start_time:new Date("7/29/2025 19:45:00"),end_time:new Date("7/29/2025 23:30:00"),learn_number:7,lesson_name:"P2_Ôn tập biểu thức đại số và đa thức một biến",teacher:"Dương Thùy Linh"},
{code:"toan-6",subject:"",start_time:new Date("7/29/2025 18:00:00"),end_time:new Date("7/29/2025 21:45:00"),learn_number:5,lesson_name:"Ôn tập hình học phẳng",teacher:"Dương Thùy Linh"},
{code:"nguvan-7",subject:"",start_time:new Date("7/29/2025 19:45:00"),end_time:new Date("7/29/2025 23:30:00"),learn_number:7,lesson_name:"Kĩ năng đọc hiểu văn bản truyện - Phần 1",teacher:"Hoàng Thị Tuyết"},
{code:"toan-11",subject:"",start_time:new Date("7/30/2025 20:45:00"),end_time:new Date("7/31/2025 0:30:00"),learn_number:5,lesson_name:"Các dạng phương trình lượng giác và phương pháp giải",teacher:"Nguyễn Đức Tài"},
{code:"toan-7",subject:"",start_time:new Date("7/30/2025 19:45:00"),end_time:new Date("7/30/2025 23:30:00"),learn_number:8,lesson_name:"Các dạng bài cơ bản về tập hợp số hữu tỉ",teacher:"Tường Duy Chiến"},
{code:"nguvan-8",subject:"",start_time:new Date("7/30/2025 19:45:00"),end_time:new Date("7/30/2025 23:30:00"),learn_number:8,lesson_name:"Kĩ năng đọc hiểu văn bản truyện ngắn (P2)",teacher:"Nguyễn Thị Liệu"},
{code:"nguvan-6",subject:"",start_time:new Date("7/30/2025 19:45:00"),end_time:new Date("7/30/2025 23:30:00"),learn_number:6,lesson_name:"Thực hành đọc văn bản truyền thuyết và cổ tích",teacher:"Hoàng Thị Tuyết"},
{code:"nguvan-7",subject:"",start_time:new Date("7/30/2025 18:00:00"),end_time:new Date("7/30/2025 21:45:00"),learn_number:7,lesson_name:"Kĩ năng đọc hiểu văn bản truyện - Phần 1",teacher:"Hoàng Thị Tuyết"},
{code:"vatli-11",subject:"",start_time:new Date("7/31/2025 20:45:00"),end_time:new Date("8/1/2025 0:30:00"),learn_number:5,lesson_name:"Phương trình dao động điều hòa. Pha và trạng thái dao động",teacher:"Thiều Thị Dung"},
{code:"toan-8",subject:"",start_time:new Date("7/31/2025 19:45:00"),end_time:new Date("7/31/2025 23:30:00"),learn_number:8,lesson_name:"Ôn tập quan hệ giữa các yếu tố trong tam giác",teacher:"Dương Thùy Linh"},
{code:"toan-7",subject:"",start_time:new Date("7/31/2025 19:45:00"),end_time:new Date("7/31/2025 23:30:00"),learn_number:7,lesson_name:"Ôn tập xác suất - thống kê",teacher:"Chu Thị Lâm Oanh"},
{code:"toan-6",subject:"",start_time:new Date("7/31/2025 18:00:00"),end_time:new Date("7/31/2025 21:45:00"),learn_number:6,lesson_name:"Ôn tập giải toán",teacher:"Dương Thùy Linh"},
{code:"nguvan-8",subject:"",start_time:new Date("7/31/2025 18:00:00"),end_time:new Date("7/31/2025 21:45:00"),learn_number:9,lesson_name:"Kĩ năng đọc hiểu văn bản truyện lịch sử (P2)",teacher:"Vũ Hồng Ngọc"},
{code:"nguvan-6",subject:"",start_time:new Date("7/31/2025 19:45:00"),end_time:new Date("7/31/2025 23:30:00"),learn_number:7,lesson_name:"Thực hành Tiếng Việt: Cấu tạo và nghĩa của từ",teacher:"Nguyễn Thị Liệu"},
{code:"toan-11",subject:"",start_time:new Date("8/1/2025 19:15:00"),end_time:new Date("8/1/2025 23:00:00"),learn_number:5,lesson_name:"Các dạng phương trình lượng giác và phương pháp giải",teacher:"Nguyễn Đức Tài"},
{code:"toan-8",subject:"",start_time:new Date("8/1/2025 18:00:00"),end_time:new Date("8/1/2025 21:45:00"),learn_number:9,lesson_name:"Ôn tập xác suất - thống kê",teacher:"Trần Hà Giang"},
{code:"toan-6",subject:"",start_time:new Date("8/1/2025 19:45:00"),end_time:new Date("8/1/2025 23:30:00"),learn_number:7,lesson_name:"Ôn tập một số hình khối trong thực tiễn",teacher:"Trần Hà Giang"},
{code:"nguvan-7",subject:"",start_time:new Date("8/1/2025 19:45:00"),end_time:new Date("8/1/2025 23:30:00"),learn_number:8,lesson_name:"Kĩ năng đọc hiểu văn bản tiểu thuyết và truyện ngắn - Phần 2",teacher:"Vũ Hồng Ngọc"},
{code:"hoahoc-11",subject:"",start_time:new Date("8/2/2025 19:15:00"),end_time:new Date("8/2/2025 23:00:00"),learn_number:5,lesson_name:"Các dạng bài tập về Cân bằng hóa học và hằng số cân bằng",teacher:"Vũ Thị Thùy Dương"},
{code:"vatli-10",subject:"",start_time:new Date("8/2/2025 19:15:00"),end_time:new Date("8/2/2025 23:00:00"),learn_number:1,lesson_name:"Sai số và biểu diễn kết quả phép đo đại lượng vật lí",teacher:"Thiều Thị Dung"},
{code:"nguvan-6",subject:"",start_time:new Date("8/2/2025 19:45:00"),end_time:new Date("8/2/2025 23:30:00"),learn_number:8,lesson_name:"Thực hành Tiếng Việt: Từ đơn, từ phức",teacher:"Hoàng Thị Tuyết"},
{code:"toan-7",subject:"",start_time:new Date("8/3/2025 19:45:00"),end_time:new Date("8/3/2025 23:30:00"),learn_number:8,lesson_name:"Các dạng bài cơ bản về tập hợp số hữu tỉ",teacher:"Chu Thị Lâm Oanh"},
{code:"nguvan-8",subject:"",start_time:new Date("8/3/2025 18:00:00"),end_time:new Date("8/3/2025 21:45:00"),learn_number:10,lesson_name:"Thực hành tiếng Việt: Trợ từ, thán từ",teacher:"Nguyễn Thị Liệu"},
{code:"nguvan-6",subject:"",start_time:new Date("8/3/2025 19:45:00"),end_time:new Date("8/3/2025 23:30:00"),learn_number:7,lesson_name:"Thực hành Tiếng Việt: Cấu tạo và nghĩa của từ",teacher:"Nguyễn Thị Liệu"},
{code:"vatli-11",subject:"",start_time:new Date("8/4/2025 20:45:00"),end_time:new Date("8/5/2025 0:30:00"),learn_number:6,lesson_name:"Sử dụng vòng tròn pha trong dao động điều hòa",teacher:"Thiều Thị Dung"},
{code:"toan-10",subject:"",start_time:new Date("8/4/2025 19:15:00"),end_time:new Date("8/4/2025 23:00:00"),learn_number:1,lesson_name:"Những kiến thức trọng tâm về mệnh đề",teacher:"Nguyễn Thị Khuyên"},
{code:"toan-8",subject:"",start_time:new Date("8/4/2025 18:00:00"),end_time:new Date("8/4/2025 21:45:00"),learn_number:10,lesson_name:"Các dạng bài trọng tâm về đơn thức nhiều biến. Đa thức nhiều biến",teacher:"Trần Hà Giang"},
{code:"toan-7",subject:"",start_time:new Date("8/4/2025 19:45:00"),end_time:new Date("8/4/2025 23:30:00"),learn_number:9,lesson_name:"P1_Các dạng bài trọng tâm về phép tính số hữu tỉ",teacher:"Tường Duy Chiến"},
{code:"toan-6",subject:"",start_time:new Date("8/4/2025 19:45:00"),end_time:new Date("8/4/2025 23:30:00"),learn_number:8,lesson_name:"Ôn tập xác suất thống kê",teacher:"Trần Hà Giang"},
{code:"nguvan-8",subject:"",start_time:new Date("8/4/2025 19:45:00"),end_time:new Date("8/4/2025 23:30:00"),learn_number:11,lesson_name:"Viết bài văn kể lại một chuyến đi (Tham quan di tích lịch sử văn hóa)",teacher:"Vũ Hồng Ngọc"},
{code:"nguvan-7",subject:"",start_time:new Date("8/4/2025 18:00:00"),end_time:new Date("8/4/2025 21:45:00"),learn_number:8,lesson_name:"Kĩ năng đọc hiểu văn bản tiểu thuyết và truyện ngắn - Phần 2",teacher:"Vũ Hồng Ngọc"},
{code:"hoahoc-11",subject:"",start_time:new Date("8/5/2025 19:15:00"),end_time:new Date("8/5/2025 23:00:00"),learn_number:6,lesson_name:"Lý thuyết trọng tâm và bài tập về Nguyên lý chuyển dịch cân bằng Le Chatelier",teacher:"Vũ Thị Thùy Dương"},
{code:"vatli-10",subject:"",start_time:new Date("8/5/2025 19:15:00"),end_time:new Date("8/5/2025 23:00:00"),learn_number:1,lesson_name:"Sai số và biểu diễn kết quả phép đo đại lượng vật lí",teacher:"Nguyễn Thị Hà Trang"},
{code:"toan-8",subject:"",start_time:new Date("8/5/2025 19:45:00"),end_time:new Date("8/5/2025 23:30:00"),learn_number:9,lesson_name:"Ôn tập xác suất - thống kê",teacher:"Dương Thùy Linh"},
{code:"toan-6",subject:"",start_time:new Date("8/5/2025 18:00:00"),end_time:new Date("8/5/2025 21:45:00"),learn_number:7,lesson_name:"Ôn tập một số hình khối trong thực tiễn",teacher:"Dương Thùy Linh"},
{code:"nguvan-7",subject:"",start_time:new Date("8/5/2025 19:45:00"),end_time:new Date("8/5/2025 23:30:00"),learn_number:9,lesson_name:"Kĩ năng đọc hiểu văn bản truyện - Phần 2",teacher:"Hoàng Thị Tuyết"},
{code:"toan-11",subject:"",start_time:new Date("8/6/2025 20:45:00"),end_time:new Date("8/7/2025 0:30:00"),learn_number:6,lesson_name:"Ứng dụng lượng giác trong các bài toán thực tế",teacher:"Nguyễn Đức Tài"},
{code:"hoahoc-10",subject:"",start_time:new Date("8/6/2025 19:15:00"),end_time:new Date("8/6/2025 23:00:00"),learn_number:1,lesson_name:"Ôn tập một số kiến thức nền tảng - Hoá học THCS",teacher:"Vũ Thị Thùy Dương"},
{code:"toan-7",subject:"",start_time:new Date("8/6/2025 19:45:00"),end_time:new Date("8/6/2025 23:30:00"),learn_number:10,lesson_name:"P2_Các dạng bài trọng tâm về phép tính số hữu tỉ",teacher:"Tường Duy Chiến"},
{code:"nguvan-8",subject:"",start_time:new Date("8/6/2025 19:45:00"),end_time:new Date("8/6/2025 23:30:00"),learn_number:10,lesson_name:"Thực hành tiếng Việt: Trợ từ, thán từ",teacher:"Nguyễn Thị Liệu"},
{code:"nguvan-6",subject:"",start_time:new Date("8/6/2025 19:45:00"),end_time:new Date("8/6/2025 23:30:00"),learn_number:8,lesson_name:"Thực hành Tiếng Việt: Từ đơn, từ phức",teacher:"Hoàng Thị Tuyết"},
{code:"nguvan-7",subject:"",start_time:new Date("8/6/2025 18:00:00"),end_time:new Date("8/6/2025 21:45:00"),learn_number:9,lesson_name:"Kĩ năng đọc hiểu văn bản truyện - Phần 2",teacher:"Hoàng Thị Tuyết"},
{code:"vatli-11",subject:"",start_time:new Date("8/7/2025 20:45:00"),end_time:new Date("8/8/2025 0:30:00"),learn_number:6,lesson_name:"Sử dụng vòng tròn pha trong dao động điều hòa",teacher:"Thiều Thị Dung"},
{code:"toan-10",subject:"",start_time:new Date("8/7/2025 20:45:00"),end_time:new Date("8/8/2025 0:30:00"),learn_number:1,lesson_name:"Những kiến thức trọng tâm về mệnh đề",teacher:"Nguyễn Thị Khuyên"},
{code:"toan-8",subject:"",start_time:new Date("8/7/2025 19:45:00"),end_time:new Date("8/7/2025 23:30:00"),learn_number:10,lesson_name:"Các dạng bài trọng tâm về đơn thức nhiều biến. Đa thức nhiều biến",teacher:"Dương Thùy Linh"},
{code:"toan-7",subject:"",start_time:new Date("8/7/2025 19:45:00"),end_time:new Date("8/7/2025 23:30:00"),learn_number:9,lesson_name:"P1_Các dạng bài trọng tâm về phép tính số hữu tỉ",teacher:"Chu Thị Lâm Oanh"},
{code:"toan-6",subject:"",start_time:new Date("8/7/2025 18:00:00"),end_time:new Date("8/7/2025 21:45:00"),learn_number:8,lesson_name:"Ôn tập xác suất thống kê",teacher:"Dương Thùy Linh"},
{code:"nguvan-8",subject:"",start_time:new Date("8/7/2025 18:00:00"),end_time:new Date("8/7/2025 21:45:00"),learn_number:11,lesson_name:"Viết bài văn kể lại một chuyến đi (Tham quan di tích lịch sử văn hóa)",teacher:"Vũ Hồng Ngọc"},
{code:"nguvan-6",subject:"",start_time:new Date("8/7/2025 19:45:00"),end_time:new Date("8/7/2025 23:30:00"),learn_number:9,lesson_name:"Kĩ năng viết bài văn kể lại một trải nghiệm của em",teacher:"Nguyễn Thị Liệu"},
{code:"toan-11",subject:"",start_time:new Date("8/8/2025 19:15:00"),end_time:new Date("8/8/2025 23:00:00"),learn_number:6,lesson_name:"Ứng dụng lượng giác trong các bài toán thực tế",teacher:"Nguyễn Đức Tài"},
{code:"hoahoc-10",subject:"",start_time:new Date("8/8/2025 19:15:00"),end_time:new Date("8/8/2025 23:00:00"),learn_number:1,lesson_name:"Ôn tập một số kiến thức nền tảng - Hoá học THCS",teacher:"Vũ Thị Thùy Dương"},
{code:"toan-8",subject:"",start_time:new Date("8/8/2025 18:00:00"),end_time:new Date("8/8/2025 21:45:00"),learn_number:11,lesson_name:"P1_Các bài toán thực tiễn thường gặp về hình chóp tam giác đều, chóp tứ giác đều",teacher:"Trần Hà Giang"},
{code:"toan-6",subject:"",start_time:new Date("8/8/2025 19:45:00"),end_time:new Date("8/8/2025 23:30:00"),learn_number:9,lesson_name:"Các dạng bài cơ bản về tập hợp số tự nhiên",teacher:"Trần Hà Giang"},
{code:"nguvan-7",subject:"",start_time:new Date("8/8/2025 19:45:00"),end_time:new Date("8/8/2025 23:30:00"),learn_number:10,lesson_name:"Thực hành tiếng Việt: Từ ngữ địa phương",teacher:"Vũ Hồng Ngọc"},
{code:"hoahoc-11",subject:"",start_time:new Date("8/9/2025 19:15:00"),end_time:new Date("8/9/2025 23:00:00"),learn_number:6,lesson_name:"Lý thuyết trọng tâm và bài tập về Nguyên lý chuyển dịch cân bằng Le Chatelier",teacher:"Vũ Thị Thùy Dương"},
{code:"vatli-10",subject:"",start_time:new Date("8/9/2025 19:15:00"),end_time:new Date("8/9/2025 23:00:00"),learn_number:2,lesson_name:"Độ dịch chuyển và quãng đường đi được",teacher:"Thiều Thị Dung"},
{code:"nguvan-6",subject:"",start_time:new Date("8/9/2025 19:45:00"),end_time:new Date("8/9/2025 23:30:00"),learn_number:10,lesson_name:"Kĩ năng viết bài văn kể lại truyện truyền thuyết hoặc cổ tích",teacher:"Hoàng Thị Tuyết"},
{code:"toan-7",subject:"",start_time:new Date("8/10/2025 19:45:00"),end_time:new Date("8/10/2025 23:30:00"),learn_number:10,lesson_name:"P2_Các dạng bài trọng tâm về phép tính số hữu tỉ",teacher:"Chu Thị Lâm Oanh"},
{code:"nguvan-8",subject:"",start_time:new Date("8/10/2025 18:00:00"),end_time:new Date("8/10/2025 21:45:00"),learn_number:12,lesson_name:"Kĩ năng viết bài văn kể một chuyến đi hoặc một hoạt động xã hội",teacher:"Nguyễn Thị Liệu"},
{code:"nguvan-6",subject:"",start_time:new Date("8/10/2025 19:45:00"),end_time:new Date("8/10/2025 23:30:00"),learn_number:9,lesson_name:"Kĩ năng viết bài văn kể lại một trải nghiệm của em",teacher:"Nguyễn Thị Liệu"},
{code:"vatli-11",subject:"",start_time:new Date("8/11/2025 20:45:00"),end_time:new Date("8/12/2025 0:30:00"),learn_number:7,lesson_name:"Vận tốc, gia tốc trong dao động điều hòa",teacher:"Thiều Thị Dung"},
{code:"toan-10",subject:"",start_time:new Date("8/11/2025 19:15:00"),end_time:new Date("8/11/2025 23:00:00"),learn_number:2,lesson_name:"P1_Phương pháp xử lí các bài toán về tập hợp và các phép toán trên tập hợp",teacher:"Nguyễn Thị Khuyên"},
{code:"toan-8",subject:"",start_time:new Date("8/11/2025 18:00:00"),end_time:new Date("8/11/2025 21:45:00"),learn_number:12,lesson_name:"P1_Phương pháp xử lí dạng bài trọng tâm về các phép tính với đa thức nhiều biến",teacher:"Trần Hà Giang"},
{code:"toan-7",subject:"",start_time:new Date("8/11/2025 19:45:00"),end_time:new Date("8/11/2025 23:30:00"),learn_number:11,lesson_name:"Các dạng bài trọng tâm về một số hình khối trong thực tiễn",teacher:"Tường Duy Chiến"},
{code:"toan-6",subject:"",start_time:new Date("8/11/2025 19:45:00"),end_time:new Date("8/11/2025 23:30:00"),learn_number:10,lesson_name:"P1_Các dạng bài trọng tâm về các phép tính số tự nhiên",teacher:"Trần Hà Giang"},
{code:"nguvan-8",subject:"",start_time:new Date("8/11/2025 19:45:00"),end_time:new Date("8/11/2025 23:30:00"),learn_number:13,lesson_name:"Luyện đề theo thể loại - Truyện lịch sử",teacher:"Vũ Hồng Ngọc"},
{code:"nguvan-7",subject:"",start_time:new Date("8/11/2025 18:00:00"),end_time:new Date("8/11/2025 21:45:00"),learn_number:10,lesson_name:"Thực hành tiếng Việt: Từ ngữ địa phương",teacher:"Vũ Hồng Ngọc"},
{code:"hoahoc-11",subject:"",start_time:new Date("8/12/2025 19:15:00"),end_time:new Date("8/12/2025 23:00:00"),learn_number:7,lesson_name:"Lý thuyết trọng tâm về Sự điện li, thuyết Bronsted - Lowry về acid-base",teacher:"Vũ Thị Thùy Dương"},
{code:"vatli-10",subject:"",start_time:new Date("8/12/2025 19:15:00"),end_time:new Date("8/12/2025 23:00:00"),learn_number:2,lesson_name:"Độ dịch chuyển và quãng đường đi được",teacher:"Nguyễn Thị Hà Trang"},
{code:"toan-8",subject:"",start_time:new Date("8/12/2025 19:45:00"),end_time:new Date("8/12/2025 23:30:00"),learn_number:11,lesson_name:"P1_Các bài toán thực tiễn thường gặp về hình chóp tam giác đều, chóp tứ giác đều",teacher:"Dương Thùy Linh"},
{code:"toan-6",subject:"",start_time:new Date("8/12/2025 18:00:00"),end_time:new Date("8/12/2025 21:45:00"),learn_number:9,lesson_name:"Các dạng bài cơ bản về tập hợp số tự nhiên",teacher:"Dương Thùy Linh"},
{code:"nguvan-7",subject:"",start_time:new Date("8/12/2025 19:45:00"),end_time:new Date("8/12/2025 23:30:00"),learn_number:11,lesson_name:"Kĩ năng viết tóm tắt văn bản theo những yêu cầu khác nhau về độ dài",teacher:"Hoàng Thị Tuyết"},
{code:"toan-11",subject:"",start_time:new Date("8/13/2025 20:45:00"),end_time:new Date("8/14/2025 0:30:00"),learn_number:7,lesson_name:"Các kiến thức nền tảng về đường thẳng và mặt phẳng, hai đường thẳng song song",teacher:"Nguyễn Đức Tài"},
{code:"hoahoc-10",subject:"",start_time:new Date("8/13/2025 19:15:00"),end_time:new Date("8/13/2025 23:00:00"),learn_number:2,lesson_name:"Lý thuyết trọng tâm về Các thành phần của nguyên tử",teacher:"Vũ Thị Thùy Dương"},
{code:"toan-7",subject:"",start_time:new Date("8/13/2025 19:45:00"),end_time:new Date("8/13/2025 23:30:00"),learn_number:12,lesson_name:"Các dạng bài thực tế thường gặp về một số hình khối trong thực tiễn",teacher:"Tường Duy Chiến"},
{code:"nguvan-8",subject:"",start_time:new Date("8/13/2025 19:45:00"),end_time:new Date("8/13/2025 23:30:00"),learn_number:12,lesson_name:"Kĩ năng viết bài văn kể một chuyến đi hoặc một hoạt động xã hội",teacher:"Nguyễn Thị Liệu"},
{code:"nguvan-6",subject:"",start_time:new Date("8/13/2025 19:45:00"),end_time:new Date("8/13/2025 23:30:00"),learn_number:10,lesson_name:"Kĩ năng viết bài văn kể lại truyện truyền thuyết hoặc cổ tích",teacher:"Hoàng Thị Tuyết"},
{code:"nguvan-7",subject:"",start_time:new Date("8/13/2025 18:00:00"),end_time:new Date("8/13/2025 21:45:00"),learn_number:11,lesson_name:"Kĩ năng viết tóm tắt văn bản theo những yêu cầu khác nhau về độ dài",teacher:"Hoàng Thị Tuyết"},
{code:"vatli-11",subject:"",start_time:new Date("8/14/2025 20:45:00"),end_time:new Date("8/15/2025 0:30:00"),learn_number:7,lesson_name:"Vận tốc, gia tốc trong dao động điều hòa",teacher:"Thiều Thị Dung"},
{code:"toan-10",subject:"",start_time:new Date("8/14/2025 20:45:00"),end_time:new Date("8/15/2025 0:30:00"),learn_number:2,lesson_name:"P1_Phương pháp xử lí các bài toán về tập hợp và các phép toán trên tập hợp",teacher:"Nguyễn Thị Khuyên"},
{code:"toan-8",subject:"",start_time:new Date("8/14/2025 19:45:00"),end_time:new Date("8/14/2025 23:30:00"),learn_number:12,lesson_name:"P1_Phương pháp xử lí dạng bài trọng tâm về các phép tính với đa thức nhiều biến",teacher:"Dương Thùy Linh"},
{code:"toan-7",subject:"",start_time:new Date("8/14/2025 19:45:00"),end_time:new Date("8/14/2025 23:30:00"),learn_number:11,lesson_name:"Các dạng bài trọng tâm về một số hình khối trong thực tiễn",teacher:"Chu Thị Lâm Oanh"},
{code:"toan-6",subject:"",start_time:new Date("8/14/2025 18:00:00"),end_time:new Date("8/14/2025 21:45:00"),learn_number:10,lesson_name:"P1_Các dạng bài trọng tâm về các phép tính số tự nhiên",teacher:"Dương Thùy Linh"},
{code:"nguvan-8",subject:"",start_time:new Date("8/14/2025 18:00:00"),end_time:new Date("8/14/2025 21:45:00"),learn_number:13,lesson_name:"Luyện đề theo thể loại - Truyện lịch sử",teacher:"Vũ Hồng Ngọc"},
{code:"nguvan-6",subject:"",start_time:new Date("8/14/2025 19:45:00"),end_time:new Date("8/14/2025 23:30:00"),learn_number:11,lesson_name:"Luyện đề theo thể loại - Truyện đồng thoại",teacher:"Nguyễn Thị Liệu"},
{code:"toan-11",subject:"",start_time:new Date("8/15/2025 19:15:00"),end_time:new Date("8/15/2025 23:00:00"),learn_number:7,lesson_name:"Các kiến thức nền tảng về đường thẳng và mặt phẳng, hai đường thẳng song song",teacher:"Nguyễn Đức Tài"},
{code:"hoahoc-10",subject:"",start_time:new Date("8/15/2025 19:15:00"),end_time:new Date("8/15/2025 23:00:00"),learn_number:2,lesson_name:"Lý thuyết trọng tâm về Các thành phần của nguyên tử",teacher:"Vũ Thị Thùy Dương"},
{code:"toan-8",subject:"",start_time:new Date("8/15/2025 18:00:00"),end_time:new Date("8/15/2025 21:45:00"),learn_number:13,lesson_name:"P2_Các bài toán thực tiễn thường gặp về hình chóp tam giác đều, chóp tứ giác đều",teacher:"Trần Hà Giang"},
{code:"toan-6",subject:"",start_time:new Date("8/15/2025 19:45:00"),end_time:new Date("8/15/2025 23:30:00"),learn_number:11,lesson_name:"P2_Các dạng bài trọng tâm về các phép tính số tự nhiên",teacher:"Trần Hà Giang"},
{code:"nguvan-7",subject:"",start_time:new Date("8/15/2025 19:45:00"),end_time:new Date("8/15/2025 23:30:00"),learn_number:12,lesson_name:"Kĩ năng viết bài văn kể về một sự việc có thật liên quan đến nhân vật hoặc sự kiện lịch sử",teacher:"Vũ Hồng Ngọc"},
{code:"hoahoc-11",subject:"",start_time:new Date("8/16/2025 19:15:00"),end_time:new Date("8/16/2025 23:00:00"),learn_number:7,lesson_name:"Lý thuyết trọng tâm về Sự điện li, thuyết Bronsted - Lowry về acid-base",teacher:"Vũ Thị Thùy Dương"},
{code:"vatli-10",subject:"",start_time:new Date("8/16/2025 19:15:00"),end_time:new Date("8/16/2025 23:00:00"),learn_number:3,lesson_name:"Tốc độ, vận tốc và vận tốc tổng hợp",teacher:"Thiều Thị Dung"},
{code:"nguvan-6",subject:"",start_time:new Date("8/16/2025 19:45:00"),end_time:new Date("8/16/2025 23:30:00"),learn_number:12,lesson_name:"Luyện đề theo thể loại - Truyện truyền thuyết, truyện cổ tích",teacher:"Hoàng Thị Tuyết"},
{code:"toan-7",subject:"",start_time:new Date("8/17/2025 19:45:00"),end_time:new Date("8/17/2025 23:30:00"),learn_number:12,lesson_name:"Các dạng bài thực tế thường gặp về một số hình khối trong thực tiễn",teacher:"Chu Thị Lâm Oanh"},
{code:"nguvan-8",subject:"",start_time:new Date("8/17/2025 18:00:00"),end_time:new Date("8/17/2025 21:45:00"),learn_number:14,lesson_name:"Luyện đề theo thể loại - Truyện ngắn",teacher:"Nguyễn Thị Liệu"},
{code:"nguvan-6",subject:"",start_time:new Date("8/17/2025 19:45:00"),end_time:new Date("8/17/2025 23:30:00"),learn_number:11,lesson_name:"Luyện đề theo thể loại - Truyện đồng thoại",teacher:"Nguyễn Thị Liệu"},
{code:"vatli-11",subject:"",start_time:new Date("8/18/2025 20:45:00"),end_time:new Date("8/19/2025 0:30:00"),learn_number:8,lesson_name:"Phương pháp đọc đồ thị dao động điều hòa",teacher:"Thiều Thị Dung"},
{code:"toan-10",subject:"",start_time:new Date("8/18/2025 19:15:00"),end_time:new Date("8/18/2025 23:00:00"),learn_number:3,lesson_name:"P2_Phương pháp xử lí các bài toán về tập hợp và các phép toán trên tập hợp",teacher:"Nguyễn Thị Khuyên"},
{code:"toan-8",subject:"",start_time:new Date("8/18/2025 18:00:00"),end_time:new Date("8/18/2025 21:45:00"),learn_number:14,lesson_name:"P2_Phương pháp xử lí dạng bài trọng tâm về các phép tính với đa thức nhiều biến",teacher:"Trần Hà Giang"},
{code:"toan-7",subject:"",start_time:new Date("8/18/2025 19:45:00"),end_time:new Date("8/18/2025 23:30:00"),learn_number:13,lesson_name:"P3_Các dạng bài trọng tâm về phép tính số hữu tỉ",teacher:"Tường Duy Chiến"},
{code:"toan-6",subject:"",start_time:new Date("8/18/2025 19:45:00"),end_time:new Date("8/18/2025 23:30:00"),learn_number:12,lesson_name:"P1_Các kiến thức nền tảng về hình học phẳng trong thực tiễn",teacher:"Trần Hà Giang"},
{code:"nguvan-8",subject:"",start_time:new Date("8/18/2025 19:45:00"),end_time:new Date("8/18/2025 23:30:00"),learn_number:15,lesson_name:"Kĩ năng đọc hiểu văn bản thơ thất ngôn bát cú hoặc tứ tuyệt (P1)",teacher:"Vũ Hồng Ngọc"},
{code:"nguvan-7",subject:"",start_time:new Date("8/18/2025 18:00:00"),end_time:new Date("8/18/2025 21:45:00"),learn_number:12,lesson_name:"Kĩ năng viết bài văn kể về một sự việc có thật liên quan đến nhân vật hoặc sự kiện lịch sử",teacher:"Vũ Hồng Ngọc"},
{code:"hoahoc-11",subject:"",start_time:new Date("8/19/2025 19:15:00"),end_time:new Date("8/19/2025 23:00:00"),learn_number:8,lesson_name:"Lý thuyết trọng tâm về pH dung dịch và chuẩn độ acid-base",teacher:"Vũ Thị Thùy Dương"},
{code:"vatli-10",subject:"",start_time:new Date("8/19/2025 19:15:00"),end_time:new Date("8/19/2025 23:00:00"),learn_number:3,lesson_name:"Tốc độ, vận tốc và vận tốc tổng hợp",teacher:"Nguyễn Thị Hà Trang"},
{code:"toan-8",subject:"",start_time:new Date("8/19/2025 19:45:00"),end_time:new Date("8/19/2025 23:30:00"),learn_number:13,lesson_name:"P2_Các bài toán thực tiễn thường gặp về hình chóp tam giác đều, chóp tứ giác đều",teacher:"Dương Thùy Linh"},
{code:"toan-6",subject:"",start_time:new Date("8/19/2025 18:00:00"),end_time:new Date("8/19/2025 21:45:00"),learn_number:11,lesson_name:"P2_Các dạng bài trọng tâm về các phép tính số tự nhiên",teacher:"Dương Thùy Linh"},
{code:"nguvan-7",subject:"",start_time:new Date("8/19/2025 19:45:00"),end_time:new Date("8/19/2025 23:30:00"),learn_number:13,lesson_name:"Kĩ năng đọc hiểu văn bản thơ - Phần 1",teacher:"Hoàng Thị Tuyết"},
{code:"toan-11",subject:"",start_time:new Date("8/20/2025 20:45:00"),end_time:new Date("8/21/2025 0:30:00"),learn_number:8,lesson_name:"P1_Phương pháp giải quyết các bài toán về dãy số",teacher:"Nguyễn Đức Tài"},
{code:"hoahoc-10",subject:"",start_time:new Date("8/20/2025 19:15:00"),end_time:new Date("8/20/2025 23:00:00"),learn_number:3,lesson_name:"Lý thuyết trọng tâm về Nguyên tố hóa học - Đồng vị",teacher:"Vũ Thị Thùy Dương"},
{code:"toan-7",subject:"",start_time:new Date("8/20/2025 19:45:00"),end_time:new Date("8/20/2025 23:30:00"),learn_number:14,lesson_name:"P4_Các dạng bài trọng tâm về phép tính số hữu tỉ",teacher:"Tường Duy Chiến"},
{code:"nguvan-8",subject:"",start_time:new Date("8/20/2025 19:45:00"),end_time:new Date("8/20/2025 23:30:00"),learn_number:14,lesson_name:"Luyện đề theo thể loại - Truyện ngắn",teacher:"Nguyễn Thị Liệu"},
{code:"nguvan-6",subject:"",start_time:new Date("8/20/2025 19:45:00"),end_time:new Date("8/20/2025 23:30:00"),learn_number:12,lesson_name:"Luyện đề theo thể loại - Truyện truyền thuyết, truyện cổ tích",teacher:"Hoàng Thị Tuyết"},
{code:"nguvan-7",subject:"",start_time:new Date("8/20/2025 18:00:00"),end_time:new Date("8/20/2025 21:45:00"),learn_number:13,lesson_name:"Kĩ năng đọc hiểu văn bản thơ - Phần 1",teacher:"Hoàng Thị Tuyết"},
{code:"vatli-11",subject:"",start_time:new Date("8/21/2025 20:45:00"),end_time:new Date("8/22/2025 0:30:00"),learn_number:8,lesson_name:"Phương pháp đọc đồ thị dao động điều hòa",teacher:"Thiều Thị Dung"},
{code:"toan-10",subject:"",start_time:new Date("8/21/2025 20:45:00"),end_time:new Date("8/22/2025 0:30:00"),learn_number:3,lesson_name:"P2_Phương pháp xử lí các bài toán về tập hợp và các phép toán trên tập hợp",teacher:"Nguyễn Thị Khuyên"},
{code:"toan-8",subject:"",start_time:new Date("8/21/2025 19:45:00"),end_time:new Date("8/21/2025 23:30:00"),learn_number:14,lesson_name:"P2_Phương pháp xử lí dạng bài trọng tâm về các phép tính với đa thức nhiều biến",teacher:"Dương Thùy Linh"},
{code:"toan-7",subject:"",start_time:new Date("8/21/2025 19:45:00"),end_time:new Date("8/21/2025 23:30:00"),learn_number:13,lesson_name:"P3_Các dạng bài trọng tâm về phép tính số hữu tỉ",teacher:"Chu Thị Lâm Oanh"},
{code:"toan-6",subject:"",start_time:new Date("8/21/2025 18:00:00"),end_time:new Date("8/21/2025 21:45:00"),learn_number:12,lesson_name:"P1_Các kiến thức nền tảng về hình học phẳng trong thực tiễn",teacher:"Dương Thùy Linh"},
{code:"nguvan-8",subject:"",start_time:new Date("8/21/2025 18:00:00"),end_time:new Date("8/21/2025 21:45:00"),learn_number:15,lesson_name:"Kĩ năng đọc hiểu văn bản thơ thất ngôn bát cú hoặc tứ tuyệt (P1)",teacher:"Vũ Hồng Ngọc"},
{code:"nguvan-6",subject:"",start_time:new Date("8/21/2025 19:45:00"),end_time:new Date("8/21/2025 23:30:00"),learn_number:13,lesson_name:"Hướng dẫn đọc hiểu văn bản thơ trữ tình",teacher:"Nguyễn Thị Liệu"},
{code:"toan-11",subject:"",start_time:new Date("8/22/2025 19:15:00"),end_time:new Date("8/22/2025 23:00:00"),learn_number:8,lesson_name:"P1_Phương pháp giải quyết các bài toán về dãy số",teacher:"Nguyễn Đức Tài"},
{code:"hoahoc-10",subject:"",start_time:new Date("8/22/2025 19:15:00"),end_time:new Date("8/22/2025 23:00:00"),learn_number:3,lesson_name:"Lý thuyết trọng tâm về Nguyên tố hóa học - Đồng vị",teacher:"Vũ Thị Thùy Dương"},
{code:"toan-8",subject:"",start_time:new Date("8/22/2025 18:00:00"),end_time:new Date("8/22/2025 21:45:00"),learn_number:15,lesson_name:"P1_Các dạng bài trọng tâm về hằng đẳng thức đáng nhớ",teacher:"Trần Hà Giang"},
{code:"toan-6",subject:"",start_time:new Date("8/22/2025 19:45:00"),end_time:new Date("8/22/2025 23:30:00"),learn_number:13,lesson_name:"P3_Các dạng bài trọng tâm về các phép tính số tự nhiên",teacher:"Trần Hà Giang"},
{code:"nguvan-7",subject:"",start_time:new Date("8/22/2025 19:45:00"),end_time:new Date("8/22/2025 23:30:00"),learn_number:14,lesson_name:"Kĩ năng đọc hiểu văn bản thơ bốn chữ, năm chữ - Phần 1",teacher:"Vũ Hồng Ngọc"},
{code:"hoahoc-11",subject:"",start_time:new Date("8/23/2025 19:15:00"),end_time:new Date("8/23/2025 23:00:00"),learn_number:8,lesson_name:"Lý thuyết trọng tâm về pH dung dịch và chuẩn độ acid-base",teacher:"Vũ Thị Thùy Dương"},
{code:"vatli-10",subject:"",start_time:new Date("8/23/2025 19:15:00"),end_time:new Date("8/23/2025 23:00:00"),learn_number:4,lesson_name:"Chuyển động thẳng đều",teacher:"Thiều Thị Dung"},
{code:"nguvan-6",subject:"",start_time:new Date("8/23/2025 19:45:00"),end_time:new Date("8/23/2025 23:30:00"),learn_number:14,lesson_name:"Hướng dẫn đọc hiểu văn bản thơ lục bát",teacher:"Hoàng Thị Tuyết"},
{code:"toan-7",subject:"",start_time:new Date("8/24/2025 19:45:00"),end_time:new Date("8/24/2025 23:30:00"),learn_number:14,lesson_name:"P4_Các dạng bài trọng tâm về phép tính số hữu tỉ",teacher:"Chu Thị Lâm Oanh"},
{code:"nguvan-8",subject:"",start_time:new Date("8/24/2025 18:00:00"),end_time:new Date("8/24/2025 21:45:00"),learn_number:16,lesson_name:"Ôn tập tổng hợp - Thực hành tiếng Việt và kĩ năng viết văn",teacher:"Nguyễn Thị Liệu"},
{code:"nguvan-6",subject:"",start_time:new Date("8/24/2025 19:45:00"),end_time:new Date("8/24/2025 23:30:00"),learn_number:13,lesson_name:"Hướng dẫn đọc hiểu văn bản thơ trữ tình",teacher:"Nguyễn Thị Liệu"},
{code:"vatli-11",subject:"",start_time:new Date("8/25/2025 20:45:00"),end_time:new Date("8/26/2025 0:30:00"),learn_number:9,lesson_name:"Con lắc lò xo và con lắc đơn",teacher:"Thiều Thị Dung"},
{code:"toan-10",subject:"",start_time:new Date("8/25/2025 19:15:00"),end_time:new Date("8/25/2025 23:00:00"),learn_number:4,lesson_name:"Các bài toán nền tảng về giá trị lượng giác của một góc",teacher:"Nguyễn Thị Khuyên"},
{code:"toan-8",subject:"",start_time:new Date("8/25/2025 18:00:00"),end_time:new Date("8/25/2025 21:45:00"),learn_number:16,lesson_name:"Phương pháp xử lí các dạng bài tập trọng tâm định lý Pythagore",teacher:"Trần Hà Giang"},
{code:"toan-7",subject:"",start_time:new Date("8/25/2025 19:45:00"),end_time:new Date("8/25/2025 23:30:00"),learn_number:15,lesson_name:"Góc ở vị trí đặc biệt",teacher:"Tường Duy Chiến"},
{code:"toan-6",subject:"",start_time:new Date("8/25/2025 19:45:00"),end_time:new Date("8/25/2025 23:30:00"),learn_number:14,lesson_name:"P4_Các dạng bài trọng tâm về các phép tính số tự nhiên",teacher:"Trần Hà Giang"},
{code:"nguvan-8",subject:"",start_time:new Date("8/25/2025 19:45:00"),end_time:new Date("8/25/2025 23:30:00"),learn_number:17,lesson_name:"Kĩ năng đọc hiểu văn bản thơ thất ngôn bát cú hoặc tứ tuyệt (P2)",teacher:"Vũ Hồng Ngọc"},
{code:"nguvan-7",subject:"",start_time:new Date("8/25/2025 18:00:00"),end_time:new Date("8/25/2025 21:45:00"),learn_number:14,lesson_name:"Kĩ năng đọc hiểu văn bản thơ bốn chữ, năm chữ - Phần 1",teacher:"Vũ Hồng Ngọc"},
{code:"hoahoc-11",subject:"",start_time:new Date("8/26/2025 19:15:00"),end_time:new Date("8/26/2025 23:00:00"),learn_number:9,lesson_name:"Các dạng bài tập về sự điện li, acid - base, pH, chuẩn độ",teacher:"Vũ Thị Thùy Dương"},
{code:"vatli-10",subject:"",start_time:new Date("8/26/2025 19:15:00"),end_time:new Date("8/26/2025 23:00:00"),learn_number:4,lesson_name:"Chuyển động thẳng đều",teacher:"Nguyễn Thị Hà Trang"},
{code:"toan-8",subject:"",start_time:new Date("8/26/2025 19:45:00"),end_time:new Date("8/26/2025 23:30:00"),learn_number:15,lesson_name:"P1_Các dạng bài trọng tâm về hằng đẳng thức đáng nhớ",teacher:"Dương Thùy Linh"},
{code:"toan-6",subject:"",start_time:new Date("8/26/2025 18:00:00"),end_time:new Date("8/26/2025 21:45:00"),learn_number:13,lesson_name:"P3_Các dạng bài trọng tâm về các phép tính số tự nhiên",teacher:"Dương Thùy Linh"},
{code:"nguvan-7",subject:"",start_time:new Date("8/26/2025 19:45:00"),end_time:new Date("8/26/2025 23:30:00"),learn_number:15,lesson_name:"Kĩ năng đọc hiểu văn bản thơ - Phần 2",teacher:"Hoàng Thị Tuyết"},
{code:"toan-11",subject:"",start_time:new Date("8/27/2025 20:45:00"),end_time:new Date("8/28/2025 0:30:00"),learn_number:9,lesson_name:"P2_Phương pháp giải quyết các bài toán về dãy số",teacher:"Nguyễn Đức Tài"},
{code:"hoahoc-10",subject:"",start_time:new Date("8/27/2025 19:15:00"),end_time:new Date("8/27/2025 23:00:00"),learn_number:4,lesson_name:"Các dạng bài về Nguyên tử - Nguyên tố hóa học - Đồng vị",teacher:"Vũ Thị Thùy Dương"},
{code:"toan-7",subject:"",start_time:new Date("8/27/2025 19:45:00"),end_time:new Date("8/27/2025 23:30:00"),learn_number:16,lesson_name:"Tia phân giác của một góc",teacher:"Tường Duy Chiến"},
{code:"nguvan-8",subject:"",start_time:new Date("8/27/2025 19:45:00"),end_time:new Date("8/27/2025 23:30:00"),learn_number:16,lesson_name:"Ôn tập tổng hợp - Thực hành tiếng Việt và kĩ năng viết văn",teacher:"Nguyễn Thị Liệu"},
{code:"nguvan-6",subject:"",start_time:new Date("8/27/2025 19:45:00"),end_time:new Date("8/27/2025 23:30:00"),learn_number:14,lesson_name:"Hướng dẫn đọc hiểu văn bản thơ lục bát",teacher:"Hoàng Thị Tuyết"},
{code:"nguvan-7",subject:"",start_time:new Date("8/27/2025 18:00:00"),end_time:new Date("8/27/2025 21:45:00"),learn_number:15,lesson_name:"Kĩ năng đọc hiểu văn bản thơ - Phần 2",teacher:"Hoàng Thị Tuyết"},
{code:"vatli-11",subject:"",start_time:new Date("8/28/2025 20:45:00"),end_time:new Date("8/29/2025 0:30:00"),learn_number:9,lesson_name:"Con lắc lò xo và con lắc đơn",teacher:"Thiều Thị Dung"},
{code:"toan-10",subject:"",start_time:new Date("8/28/2025 20:45:00"),end_time:new Date("8/29/2025 0:30:00"),learn_number:4,lesson_name:"Các bài toán nền tảng về giá trị lượng giác của một góc",teacher:"Nguyễn Thị Khuyên"},
{code:"toan-8",subject:"",start_time:new Date("8/28/2025 19:45:00"),end_time:new Date("8/28/2025 23:30:00"),learn_number:16,lesson_name:"Phương pháp xử lí các dạng bài tập trọng tâm định lý Pythagore",teacher:"Dương Thùy Linh"},
{code:"toan-7",subject:"",start_time:new Date("8/28/2025 19:45:00"),end_time:new Date("8/28/2025 23:30:00"),learn_number:15,lesson_name:"Góc ở vị trí đặc biệt",teacher:"Chu Thị Lâm Oanh"},
{code:"toan-6",subject:"",start_time:new Date("8/28/2025 18:00:00"),end_time:new Date("8/28/2025 21:45:00"),learn_number:14,lesson_name:"P4_Các dạng bài trọng tâm về các phép tính số tự nhiên",teacher:"Dương Thùy Linh"},
{code:"nguvan-8",subject:"",start_time:new Date("8/28/2025 18:00:00"),end_time:new Date("8/28/2025 21:45:00"),learn_number:17,lesson_name:"Kĩ năng đọc hiểu văn bản thơ thất ngôn bát cú hoặc tứ tuyệt (P2)",teacher:"Vũ Hồng Ngọc"},
{code:"nguvan-6",subject:"",start_time:new Date("8/28/2025 19:45:00"),end_time:new Date("8/28/2025 23:30:00"),learn_number:15,lesson_name:"Thực hành đọc hiểu văn bản thơ trữ tình",teacher:"Nguyễn Thị Liệu"},
{code:"toan-11",subject:"",start_time:new Date("8/29/2025 19:15:00"),end_time:new Date("8/29/2025 23:00:00"),learn_number:9,lesson_name:"P2_Phương pháp giải quyết các bài toán về dãy số",teacher:"Nguyễn Đức Tài"},
{code:"hoahoc-10",subject:"",start_time:new Date("8/29/2025 19:15:00"),end_time:new Date("8/29/2025 23:00:00"),learn_number:4,lesson_name:"Các dạng bài về Nguyên tử - Nguyên tố hóa học - Đồng vị",teacher:"Vũ Thị Thùy Dương"},
{code:"toan-8",subject:"",start_time:new Date("8/29/2025 18:00:00"),end_time:new Date("8/29/2025 21:45:00"),learn_number:17,lesson_name:"P2_Các dạng bài trọng tâm về hằng đẳng thức đáng nhớ",teacher:"Trần Hà Giang"},
{code:"toan-6",subject:"",start_time:new Date("8/29/2025 19:45:00"),end_time:new Date("8/29/2025 23:30:00"),learn_number:15,lesson_name:"P2_Các kiến thức nền tảng về hình học phẳng trong thực tiễn",teacher:"Trần Hà Giang"},
{code:"nguvan-7",subject:"",start_time:new Date("8/29/2025 19:45:00"),end_time:new Date("8/29/2025 23:30:00"),learn_number:16,lesson_name:"Kĩ năng đọc hiểu văn bản thơ bốn chữ, năm chữ - Phần 2",teacher:"Vũ Hồng Ngọc"},
{code:"hoahoc-11",subject:"",start_time:new Date("8/30/2025 19:15:00"),end_time:new Date("8/30/2025 23:00:00"),learn_number:9,lesson_name:"Các dạng bài tập về sự điện li, acid - base, pH, chuẩn độ",teacher:"Vũ Thị Thùy Dương"},
{code:"vatli-10",subject:"",start_time:new Date("8/30/2025 19:15:00"),end_time:new Date("8/30/2025 23:00:00"),learn_number:5,lesson_name:"P1_Chuyển động thẳng biến đổi đều",teacher:"Thiều Thị Dung"},
{code:"nguvan-6",subject:"",start_time:new Date("8/30/2025 19:45:00"),end_time:new Date("8/30/2025 23:30:00"),learn_number:16,lesson_name:"Thực hành đọc hiểu văn bản thơ lục bát",teacher:"Hoàng Thị Tuyết"},
{code:"toan-7",subject:"",start_time:new Date("8/31/2025 19:45:00"),end_time:new Date("8/31/2025 23:30:00"),learn_number:16,lesson_name:"Tia phân giác của một góc",teacher:"Chu Thị Lâm Oanh"},
{code:"nguvan-8",subject:"",start_time:new Date("8/31/2025 18:00:00"),end_time:new Date("8/31/2025 21:45:00"),learn_number:18,lesson_name:"Kĩ năng đọc hiểu văn bản thơ sáu chữ, bảy chữ (P1)",teacher:"Nguyễn Thị Liệu"},
{code:"nguvan-6",subject:"",start_time:new Date("8/31/2025 19:45:00"),end_time:new Date("8/31/2025 23:30:00"),learn_number:15,lesson_name:"Thực hành đọc hiểu văn bản thơ trữ tình",teacher:"Nguyễn Thị Liệu"},
        { code: "demotopclass", subject: "Demo", start_time: new Date("8/23/2025 16:45:00"), end_time: new Date("8/23/2025 19:55:00"), learn_number: 1, lesson_name:"Buổi Demo",teacher:"Vũ Linh"}
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
        {code:"hochetoanlop9",boxid:"952000",boxtag:"3Ot9Nu",tkey:"155135884332be2e",tid:"15"},
        {code:"hochelaygoctoanlop9",boxid:"952000",boxtag:"3Ot9Nu",tkey:"155135884332be2e",tid:"15"},

        {code:"toan-10",boxid:"952000",boxtag:"3Ot9Nu",tkey:"62a7f4c84da78cd8",tid:"16"},
        {code:"vatli-10",boxid:"952000",boxtag:"3Ot9Nu",tkey:"92cfe9cd0263baf9",tid:"17"},
        {code:"hoahoc-10",boxid:"952000",boxtag:"3Ot9Nu",tkey:"28cfea1a5b70f691",tid:"18"},
        {code:"toan-11",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b1e6b67cdf7a36bf",tid:"19"},
        {code:"vatli-11",boxid:"952000",boxtag:"3Ot9Nu",tkey:"0f2d03f2707e49c6",tid:"20"},
        {code:"hoahoc-11",boxid:"952000",boxtag:"3Ot9Nu",tkey:"3210d81d3fc6be68",tid:"21"},
        {code:"luyendetoan-9",boxid:"952000",boxtag:"3Ot9Nu",tkey:"1ac42789f9981f9b",tid:"92"},
        {code:"luyendenguvan-9",boxid:"952000",boxtag:"3Ot9Nu",tkey:"61ee4d14f5c296dc",tid:"93"},
        {code:"luyendetienganh-9",boxid:"952000",boxtag:"3Ot9Nu",tkey:"9ca8d0dff1cddd2d",tid:"102"},
        {code:"chuyendetoan-9",boxid:"952000",boxtag:"3Ot9Nu",tkey:"5a6016e64036a6eb",tid:"65"},
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
            window.location.href = "https://topclass.hocmai.vn/lichhoc2";
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
                    window.location.href = "https://topclass.hocmai.vn/lichhoc2"+"&return=multi";
    
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
        var code = window.location.href.substring(29);
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
    
    setInterval(checkStatus, 450000); // Check every 10 minutes (600000 ms)
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
        var code = window.location.href.substring(29);
    
        const learn_number = checkClassAvailability(code);
        if (learn_number == 0) {
            window.location.href = "https://topclass.hocmai.vn/lichhoc2";
        }
    
        if (c_user != "") {
            //check lượt học
            await check(c_user, code, learn_number);
        } else {
            window.location.href = "https://topclass.hocmai.vn/lichhoc2";
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
                    window.location.href = "https://topclass.hocmai.vn/lichhoc2";
                }
            } catch (error) {
                console.error("Fetch error: ", error);
                console.log(error.message);
                alert("Hệ thống đang quá tải, vui lòng thử lại sau");
            }
        }
    }
