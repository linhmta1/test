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
