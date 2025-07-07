        // linhnv2 - tắt devtools 1
        /*
        let devToolsOpen = false;
        function detectDevTools() {
            try {
                if ((window.outerWidth - window.innerWidth > 200) || (window.outerHeight - window.innerHeight > 200)) {
                    devToolsOpen = true;
                }
            } catch (error) {
                // Handle errors (e.g., cross-origin restrictions)
                console.error("Error detecting DevTools:", error); 
                devToolsOpen = false; // Assume not open if there's an error
            }
        }

        //  Kiểm tra kích thước bất thường về kích thước
        setInterval(detectDevTools, 1000);
        */
        /*
        //  Sử dụng câu lệnh debugger
        const element = new Image();
        Object.defineProperty(element, 'id', {
            get: function() {
                devToolsOpen = true;
                window.location.href = "https://topuni.hocmai.vn/danhsachlophoc";
                //alert("DevTools đang mở. Vui lòng đóng nó và F5 để tiếp tục sử dụng trang này.");
            }
        });
        console.log(element);
        //  End sử dụng câu lệnh debugger

        //  Đo thời gian thực thi - phát hiện Devtools
        (function() {
            let start = new Date();
            //bật debugger
            debugger;
            let end = new Date();
            if (end - start > 100) {
                devToolsOpen = true;
                window.location.href = "https://topuni.hocmai.vn/danhsachlophoc";
                //alert('DevTools đang mở. Vui lòng đóng nó và F5 để tiếp tục sử dụng trang này.');
            }
        })();
        
        //  End Đo thời gian thực thi - phát hiện Devtools

        // Vô hiệu hóa các phím tắt DevTools
        document.addEventListener('keydown', function(event) {
            if (
                event.key === 'F12' ||
                (event.ctrlKey && event.shiftKey && event.key === 'I') ||
                (event.ctrlKey && event.shiftKey && event.key === 'J') ||
                (event.ctrlKey && event.shiftKey && event.key === 'C') ||
                (event.ctrlKey && event.key === 'U') ||
                (event.ctrlKey && event.shiftKey && event.key === 'K') ||
                (event.ctrlKey && event.shiftKey && event.key === 'S')
            ) {
                event.preventDefault();
               //alert("Các phím tắt DevTools đã bị vô hiệu hóa.");
            }
        });

        //  Vô hiệu hóa menu chuột phải
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            //alert("Chuột phải đã bị vô hiệu hóa.");
        });

        // Hiển thị cảnh báo nếu DevTools mở
        
        setInterval(function() {
            if (devToolsOpen) {
                document.body.innerHTML = '<h1>DevTools đang mở. Vui lòng đóng nó và F5 để tiếp tục sử dụng trang này.</h1>';
                window.location.href = "https://topuni.hocmai.vn/danhsachlophoc";
            }
        }, 1000);
        */

    class DevToolsChecker extends Error {
    toString() {
        return "DevToolsChecker Error";
    }

    get message() {
        onDevToolOpen();
        return "DevTools đang mở";
    }
}

function onDevToolOpen() {
    const currentDomain = window.location.hostname;
        if (currentDomain === "topuni.hocmai.vn") {
        window.location.href = "https://hocmai.vn";
        } else if (currentDomain === "topclass.hocmai.vn") {
        window.location.href = "https://hocmai.vn";
        }
}

console.log(new DevToolsChecker());
document.addEventListener('keydown', function(event) {
    if (
        event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && event.key === 'I') ||
        (event.ctrlKey && event.shiftKey && event.key === 'J') ||
        (event.ctrlKey && event.shiftKey && event.key === 'C') ||
        (event.ctrlKey && event.key === 'U')
    ) {
        event.preventDefault();
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

