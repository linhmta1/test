
    document.addEventListener("DOMContentLoaded", function() {
        var inputElement = document.querySelector('input[name="nme"]');
        var buttonElement = document.getElementById("btnSubmit");
        
        console.log("inputElement:", inputElement);
        console.log("buttonElement:", buttonElement);
        
        function checkInputState() {
            var value = inputElement.value.trim();
            console.log("Giá trị hiện tại của input là:", value);
            
            if (value.length > 1) {
                console.log("Đang thêm thuộc tính readonly và hidden...");
                inputElement.setAttribute("readonly", "");
                inputElement.setAttribute("hidden", "");
            } else {
                console.log("Đang loại bỏ thuộc tính readonly và hidden...");
                inputElement.removeAttribute("readonly");
                inputElement.removeAttribute("hidden");
            }
        }
        
        checkInputState();
        
        if (buttonElement) {
            console.log("Đã tìm thấy buttonElement, bắt đầu đăng ký sự kiện click...");
            
            buttonElement.addEventListener("click", function() {
                console.log("Đã click vào nút Submit, kiểm tra lại trạng thái input...");
                checkInputState();
            });
        } else {
            console.error("Không tìm thấy phần tử có id là 'btnSubmit'");
        }
    });

