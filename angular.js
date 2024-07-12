    // Lấy đối tượng input sử dụng querySelector
    var inputElement = document.querySelector('input[name="nme"]');
    
    // Lấy giá trị của input
    var value = inputElement.value;
    
    // In ra giá trị của input
    console.log("Giá trị của input là:", value);
    
    // Thực hiện các hành động khác với giá trị ở đây nếu cần
    
    // Ví dụ: Bắt sự kiện khi click vào nút "Lấy giá trị"
    document.getElementById("btnSubmit").addEventListener("click", function() {
        var value = inputElement.value;
        console.log("Giá trị của input là:", value);
        // Thực hiện các hành động khác với giá trị vừa lấy được ở đây
    });
