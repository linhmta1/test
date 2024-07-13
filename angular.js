function executeScript() {
        try {
            console.log(localStorage);
        } catch (e) {
            console.error("Lỗi khi truy cập localStorage:", e);
        }
    }
    
    // Thực hiện load lại biến và kiểm tra sau mỗi phút
    setInterval(function() {
        console.log("Đang load lại biến và kiểm tra...");
        executeScript();
    }, 10000); // 60000 milliseconds = 1 phút
    
    // Thực hiện đầu tiên khi tải trang
    document.addEventListener("DOMContentLoaded", function() {
        executeScript();
    });
