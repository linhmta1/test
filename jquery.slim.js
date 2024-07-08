<script>
    // Vô hiệu hóa chuột phải
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, false);

    document.addEventListener('mousedown', function(e) {
        if (e.button === 2 || e.button === 3) { // Chuột phải hoặc chuột giữa
            e.preventDefault();
        }
    }, false);

    // Vô hiệu hóa các phím tắt mở DevTools
    document.addEventListener('keydown', function(e) {
        if (
            e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') || 
            (e.ctrlKey && e.shiftKey && e.key === 'J') || 
            (e.ctrlKey && e.key === 'U') ||
            (e.ctrlKey && e.shiftKey && e.key === 'C') || // Ctrl+Shift+C for Firefox
            (e.ctrlKey && e.shiftKey && e.key === 'K')    // Ctrl+Shift+K for Firefox
        ) {
            e.preventDefault();
        }
    }, false);
</script>
