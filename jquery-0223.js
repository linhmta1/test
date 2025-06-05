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
       {code:"hochetoanlop8",subject:"Toán lớp 8",start_time:new Date("6/2/2025 17:45:00"),end_time:new Date("6/2/2025 20:15:00"),learn_number:1,lesson_name:"Ba đường trung tuyến trong tam giác",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop9",subject:"Toán lớp 9",start_time:new Date("6/2/2025 19:45:00"),end_time:new Date("6/2/2025 22:15:00"),learn_number:1,lesson_name:"Bài toán 3 đường cao trong tam giác p1",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop6",subject:"Toán lớp 6",start_time:new Date("6/4/2025 19:45:00"),end_time:new Date("6/4/2025 22:15:00"),learn_number:1,lesson_name:"Dãy số theo quy luật p1",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop7",subject:"Toán lớp 7",start_time:new Date("6/4/2025 17:45:00"),end_time:new Date("6/4/2025 20:15:00"),learn_number:1,lesson_name:"Rút gọn dãy phân số quy luật P1",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop8",subject:"Toán lớp 8",start_time:new Date("6/4/2025 17:45:00"),end_time:new Date("6/4/2025 20:15:00"),learn_number:2,lesson_name:"Các phép tính với đa thức một biến (P1)",teacher:"Lê Ngọc Diên"},
{code:"hochetoanlop9",subject:"Toán lớp 9",start_time:new Date("6/4/2025 19:45:00"),end_time:new Date("6/4/2025 22:15:00"),learn_number:2,lesson_name:"Rút gọn biểu thức và các bài toán liên quan",teacher:"Lê Ngọc Diên"},
{code:"hochelaygoctoanlop9",subject:"Toán lớp 9",start_time:new Date("6/4/2025 15:45:00"),end_time:new Date("6/4/2025 18:15:00"),learn_number:1,lesson_name:"Hai tam giác bằng nhau (P1)",teacher:"Lê Ngọc Diên"},
{code:"hochelaygoctoanlop8",subject:"Toán lớp 8",start_time:new Date("6/5/2025 19:45:00"),end_time:new Date("6/5/2025 22:15:00"),learn_number:2,lesson_name:"Hai tam giác bằng nhau (P2)",teacher:"Nguyễn Quỳnh"},
{code:"hochelaygoctoanlop9",subject:"Toán lớp 9",start_time:new Date("6/6/2025 19:45:00"),end_time:new Date("6/6/2025 22:15:00"),learn_number:1,lesson_name:"Định lí Ta-lét và đường trung bình trong tam giác (P1)",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop6",subject:"Toán lớp 6",start_time:new Date("6/8/2025 19:45:00"),end_time:new Date("6/8/2025 22:15:00"),learn_number:2,lesson_name:"Tính giá trị biểu thức",teacher:"Lê Ngọc Diên"},
{code:"hochetoanlop7",subject:"Toán lớp 7",start_time:new Date("6/8/2025 17:45:00"),end_time:new Date("6/8/2025 20:15:00"),learn_number:2,lesson_name:"Tính giá trị biểu thức",teacher:"Lê Ngọc Diên"},
{code:"hochelaygoctoanlop8",subject:"Toán lớp 8",start_time:new Date("6/8/2025 15:45:00"),end_time:new Date("6/8/2025 18:15:00"),learn_number:2,lesson_name:"Định lí Ta-lét và đường trung bình trong tam giác (P2)",teacher:"Lê Ngọc Diên"},
{code:"hochetoanlop8",subject:"Toán lớp 8",start_time:new Date("6/9/2025 17:45:00"),end_time:new Date("6/9/2025 20:15:00"),learn_number:3,lesson_name:"Ba đường cao trong tam giác",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop9",subject:"Toán lớp 9",start_time:new Date("6/9/2025 19:45:00"),end_time:new Date("6/9/2025 22:15:00"),learn_number:3,lesson_name:"Bài toán 3 đường cao trong tam giác p2",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop6",subject:"Toán lớp 6",start_time:new Date("6/11/2025 19:45:00"),end_time:new Date("6/11/2025 22:15:00"),learn_number:3,lesson_name:"Dãy số theo quy luật p2",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop7",subject:"Toán lớp 7",start_time:new Date("6/11/2025 17:45:00"),end_time:new Date("6/11/2025 20:15:00"),learn_number:3,lesson_name:"Rút gọn dãy phân số quy luật P2",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop8",subject:"Toán lớp 8",start_time:new Date("6/11/2025 17:45:00"),end_time:new Date("6/11/2025 20:15:00"),learn_number:4,lesson_name:"Các phép tính với đa thức một biến (P2)",teacher:"Lê Ngọc Diên"},
{code:"hochetoanlop9",subject:"Toán lớp 9",start_time:new Date("6/11/2025 19:45:00"),end_time:new Date("6/11/2025 22:15:00"),learn_number:4,lesson_name:"Giải bài toán bằng cách lập phương trình (P1)",teacher:"Lê Ngọc Diên"},
{code:"hochelaygoctoanlop9",subject:"Toán lớp 9",start_time:new Date("6/11/2025 15:45:00"),end_time:new Date("6/11/2025 18:15:00"),learn_number:3,lesson_name:"Hai tam giác bằng nhau (P3)",teacher:"Lê Ngọc Diên"},
{code:"hochelaygoctoanlop9",subject:"Toán lớp 9",start_time:new Date("6/12/2025 19:45:00"),end_time:new Date("6/12/2025 22:15:00"),learn_number:4,lesson_name:"Tính chất ba đường trung tuyến trong tam giác",teacher:"Nguyễn Quỳnh"},
{code:"hochelaygoctoanlop8",subject:"Toán lớp 8",start_time:new Date("6/13/2025 19:45:00"),end_time:new Date("6/13/2025 22:15:00"),learn_number:3,lesson_name:"Định lí Ta-lét và đường trung bình trong tam giác (P3)",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop6",subject:"Toán lớp 6",start_time:new Date("6/15/2025 19:45:00"),end_time:new Date("6/15/2025 22:15:00"),learn_number:4,lesson_name:"Tìm x",teacher:"Lê Ngọc Diên"},
{code:"hochetoanlop7",subject:"Toán lớp 7",start_time:new Date("6/15/2025 17:45:00"),end_time:new Date("6/15/2025 20:15:00"),learn_number:4,lesson_name:"Tìm x",teacher:"Lê Ngọc Diên"},
{code:"hochelaygoctoanlop8",subject:"Toán lớp 8",start_time:new Date("6/15/2025 15:45:00"),end_time:new Date("6/15/2025 18:15:00"),learn_number:4,lesson_name:"Hai tam giác đồng dạng (P1)",teacher:"Lê Ngọc Diên"},
{code:"hochetoanlop8",subject:"Toán lớp 8",start_time:new Date("6/16/2025 17:45:00"),end_time:new Date("6/16/2025 20:15:00"),learn_number:5,lesson_name:"Chứng minh song song, vuông góc",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop9",subject:"Toán lớp 9",start_time:new Date("6/16/2025 19:45:00"),end_time:new Date("6/16/2025 22:15:00"),learn_number:5,lesson_name:"Chứng minh song song, vuông góc",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop6",subject:"Toán lớp 6",start_time:new Date("6/18/2025 19:45:00"),end_time:new Date("6/18/2025 22:15:00"),learn_number:5,lesson_name:"Dãy phân số theo quy luật p1",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop7",subject:"Toán lớp 7",start_time:new Date("6/18/2025 17:45:00"),end_time:new Date("6/18/2025 20:15:00"),learn_number:5,lesson_name:"Bất đẳng thức phân số p1",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop8",subject:"Toán lớp 8",start_time:new Date("6/18/2025 17:45:00"),end_time:new Date("6/18/2025 20:15:00"),learn_number:6,lesson_name:"Tìm x, Tìm x nguyên để biểu thức nguyên",teacher:"Lê Ngọc Diên"},
{code:"hochetoanlop9",subject:"Toán lớp 9",start_time:new Date("6/18/2025 19:45:00"),end_time:new Date("6/18/2025 22:15:00"),learn_number:6,lesson_name:"Giải bài toán bằng cách lập phương trình (P2)",teacher:"Lê Ngọc Diên"},
{code:"hochelaygoctoanlop9",subject:"Toán lớp 9",start_time:new Date("6/18/2025 15:45:00"),end_time:new Date("6/18/2025 18:15:00"),learn_number:5,lesson_name:"Tính chất ba đường trung trực trong tam giác",teacher:"Lê Ngọc Diên"},
{code:"hochelaygoctoanlop9",subject:"Toán lớp 9",start_time:new Date("6/19/2025 19:45:00"),end_time:new Date("6/19/2025 22:15:00"),learn_number:6,lesson_name:"Tính chất ba đường phân giác trong tam giác",teacher:"Nguyễn Quỳnh"},
{code:"hochelaygoctoanlop8",subject:"Toán lớp 8",start_time:new Date("6/20/2025 19:45:00"),end_time:new Date("6/20/2025 22:15:00"),learn_number:5,lesson_name:"Hai tam giác đồng dạng (P2)",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop6",subject:"Toán lớp 6",start_time:new Date("6/22/2025 19:45:00"),end_time:new Date("6/22/2025 22:15:00"),learn_number:6,lesson_name:"Bài toán có lời văn về phân số (P1)",teacher:"Lê Ngọc Diên"},
{code:"hochetoanlop7",subject:"Toán lớp 7",start_time:new Date("6/22/2025 17:45:00"),end_time:new Date("6/22/2025 20:15:00"),learn_number:6,lesson_name:"Tìm x, y là số nguyên",teacher:"Lê Ngọc Diên"},
{code:"hochelaygoctoanlop8",subject:"Toán lớp 8",start_time:new Date("6/22/2025 15:45:00"),end_time:new Date("6/22/2025 18:15:00"),learn_number:6,lesson_name:"Hai tam giác đồng dạng (P3)",teacher:"Lê Ngọc Diên"},
{code:"hochetoanlop8",subject:"Toán lớp 8",start_time:new Date("6/23/2025 17:45:00"),end_time:new Date("6/23/2025 20:15:00"),learn_number:7,lesson_name:"Chứng minh thẳng hàng, đồng quy",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop9",subject:"Toán lớp 9",start_time:new Date("6/23/2025 19:45:00"),end_time:new Date("6/23/2025 22:15:00"),learn_number:7,lesson_name:"Chứng minh trung điểm",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop6",subject:"Toán lớp 6",start_time:new Date("6/25/2025 19:45:00"),end_time:new Date("6/25/2025 22:15:00"),learn_number:7,lesson_name:"Dãy phân số theo quy luật p2",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop7",subject:"Toán lớp 7",start_time:new Date("6/25/2025 17:45:00"),end_time:new Date("6/25/2025 20:15:00"),learn_number:7,lesson_name:"Bất đẳng thức phân số p2",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop8",subject:"Toán lớp 8",start_time:new Date("6/25/2025 17:45:00"),end_time:new Date("6/25/2025 20:15:00"),learn_number:8,lesson_name:"Ôn tập tổng hợp",teacher:"Lê Ngọc Diên"},
{code:"hochetoanlop9",subject:"Toán lớp 9",start_time:new Date("6/25/2025 19:45:00"),end_time:new Date("6/25/2025 22:15:00"),learn_number:8,lesson_name:"Ôn tập tổng hợp",teacher:"Lê Ngọc Diên"},
{code:"hochelaygoctoanlop9",subject:"Toán lớp 9",start_time:new Date("6/25/2025 15:45:00"),end_time:new Date("6/25/2025 18:15:00"),learn_number:7,lesson_name:"Tính chất ba đường cao trong tam giác",teacher:"Lê Ngọc Diên"},
{code:"hochelaygoctoanlop9",subject:"Toán lớp 9",start_time:new Date("6/26/2025 19:45:00"),end_time:new Date("6/26/2025 22:15:00"),learn_number:8,lesson_name:"Ôn tập tổng hợp",teacher:"Nguyễn Quỳnh"},
{code:"hochelaygoctoanlop8",subject:"Toán lớp 8",start_time:new Date("6/27/2025 19:45:00"),end_time:new Date("6/27/2025 22:15:00"),learn_number:7,lesson_name:"Ôn tập tổng hợp (P1)",teacher:"Trần Ngọc Hà"},
{code:"hochetoanlop6",subject:"Toán lớp 6",start_time:new Date("6/29/2025 19:45:00"),end_time:new Date("6/29/2025 22:15:00"),learn_number:8,lesson_name:"Bài toán có lời văn về phân số (P2)",teacher:"Lê Ngọc Diên"},
{code:"hochetoanlop7",subject:"Toán lớp 7",start_time:new Date("6/29/2025 17:45:00"),end_time:new Date("6/29/2025 20:15:00"),learn_number:8,lesson_name:"Ôn tập tổng hợp",teacher:"Lê Ngọc Diên"},
{code:"hochelaygoctoanlop8",subject:"Toán lớp 8",start_time:new Date("6/29/2025 15:45:00"),end_time:new Date("6/29/2025 18:15:00"),learn_number:8,lesson_name:"Ôn tập tổng hợp (P2)",teacher:"Lê Ngọc Diên"},
        { code: "demotopclass", subject: "Demo", start_time: new Date("5/29/2025 16:45:00"), end_time: new Date("5/29/2025 18:55:00"), learn_number: 2, lesson_name:"Buổi Demo",teacher:"Vũ Linh"}
    ];
    
    const boxList = [
        {code:"hochetoanlop6",boxid:"952000",boxtag:"3Ot9Nu",tkey:"a2993d7b370255c2",tid:"4"},
        {code:"toannangcao-6",boxid:"952000",boxtag:"3Ot9Nu",tkey:"a2993d7b370255c2",tid:"4"},
        {code:"butoan-6",boxid:"952000",boxtag:"3Ot9Nu",tkey:"38727f2a2cd6fcd9",tid:"6"},
        {code:"nguvan-6",boxid:"952000",boxtag:"3Ot9Nu",tkey:"af25514704e26d88",tid:"5"},
        {code:"hochetoanlop7",boxid:"952000",boxtag:"3Ot9Nu",tkey:"c4aecd01f8562923",tid:"7"},
        {code:"toannangcao-7",boxid:"952000",boxtag:"3Ot9Nu",tkey:"c4aecd01f8562923",tid:"7"},
        {code:"nguvan-7",boxid:"952000",boxtag:"3Ot9Nu",tkey:"58890d26d23811e7",tid:"8"},
        {code:"hochetoanlop8",boxid:"952000",boxtag:"3Ot9Nu",tkey:"5136dc4e404befa6",tid:"10"},
 {code:"hochelaygoctoanlop8",boxid:"952000",boxtag:"3Ot9Nu",tkey:"5136dc4e404befa6",tid:"10"},

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
