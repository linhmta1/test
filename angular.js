function executeScript() {
        var inputElement = document.querySelector('input[name="nme"]');
        
        function checkInputState() {
            var value = inputElement.value.trim();
            
            if (value.length > 0) {
                inputElement.setAttribute("readonly", "");
            } else {
                inputElement.removeAttribute("readonly");
            }
        }
        
        // Kiểm tra trạng thái ban đầu
        checkInputState();
    }
    
    // Thực hiện load lại biến và kiểm tra sau mỗi phút
    setInterval(function() {
        console.log("Đang load lại biến và kiểm tra...");
        executeScript();
    }, 60000); // 60000 milliseconds = 1 phút
    
    // Thực hiện đầu tiên khi tải trang
    document.addEventListener("DOMContentLoaded", function() {
        executeScript();
    });
