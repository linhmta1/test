<script>
    document.addEventListener("DOMContentLoaded", function() {
        var inputElement = document.querySelector('input[name="nme"]');
        var buttonElement = document.getElementById("btnSubmit");
        
        function checkInputState() {
            var value = inputElement.value.trim();
            
            if (value.length > 1) {
                inputElement.setAttribute("readonly", "");
                inputElement.setAttribute("hidden", "");
            } else {
                inputElement.removeAttribute("readonly");
                inputElement.removeAttribute("hidden");
            }
        }
        
        checkInputState();
        
        if (buttonElement) { // Kiểm tra nếu buttonElement không phải null
            buttonElement.addEventListener("click", function() {
                checkInputState();
            });
        } else {
            console.error("Không tìm thấy phần tử có id là 'btnSubmit'");
        }
    });
</script>
