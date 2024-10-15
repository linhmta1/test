    
    const videoElement = document.getElementById('video');
    const startButton = document.getElementById('startButton');
    let status = 0;
    var data;
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
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("10/1/2024 21:15:00"),end_time:new Date("10/2/2024 0:00:00"),learn_number:13},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("10/1/2024 19:45:00"),end_time:new Date("10/1/2024 22:30:00"),learn_number:9},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("10/1/2024 17:45:00"),end_time:new Date("10/1/2024 20:30:00"),learn_number:25},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/1/2024 19:45:00"),end_time:new Date("10/1/2024 22:30:00"),learn_number:25},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/1/2024 19:45:00"),end_time:new Date("10/1/2024 22:30:00"),learn_number:26},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/1/2024 19:45:00"),end_time:new Date("10/1/2024 22:30:00"),learn_number:26},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/1/2024 19:45:00"),end_time:new Date("10/1/2024 22:30:00"),learn_number:26},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/1/2024 19:45:00"),end_time:new Date("10/1/2024 22:30:00"),learn_number:26},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/1/2024 17:45:00"),end_time:new Date("10/1/2024 20:30:00"),learn_number:18},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/1/2024 17:45:00"),end_time:new Date("10/1/2024 20:30:00"),learn_number:18},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/1/2024 19:45:00"),end_time:new Date("10/1/2024 22:30:00"),learn_number:18},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("10/2/2024 21:15:00"),end_time:new Date("10/3/2024 0:00:00"),learn_number:14},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("10/2/2024 21:15:00"),end_time:new Date("10/3/2024 0:00:00"),learn_number:10},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/2/2024 17:45:00"),end_time:new Date("10/2/2024 20:30:00"),learn_number:27},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/2/2024 17:45:00"),end_time:new Date("10/2/2024 20:30:00"),learn_number:27},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/2/2024 19:45:00"),end_time:new Date("10/2/2024 22:30:00"),learn_number:27},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/2/2024 19:45:00"),end_time:new Date("10/2/2024 22:30:00"),learn_number:27},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/2/2024 19:45:00"),end_time:new Date("10/2/2024 22:30:00"),learn_number:17},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/2/2024 19:45:00"),end_time:new Date("10/2/2024 22:30:00"),learn_number:17},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/2/2024 19:45:00"),end_time:new Date("10/2/2024 22:30:00"),learn_number:19},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/2/2024 19:45:00"),end_time:new Date("10/2/2024 22:30:00"),learn_number:25},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("10/3/2024 19:45:00"),end_time:new Date("10/3/2024 22:30:00"),learn_number:13},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("10/3/2024 20:45:00"),end_time:new Date("10/3/2024 23:30:00"),learn_number:10},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/3/2024 19:45:00"),end_time:new Date("10/3/2024 22:30:00"),learn_number:25},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/3/2024 19:45:00"),end_time:new Date("10/3/2024 22:30:00"),learn_number:25},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/3/2024 19:45:00"),end_time:new Date("10/3/2024 22:30:00"),learn_number:25},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/3/2024 19:45:00"),end_time:new Date("10/3/2024 22:30:00"),learn_number:26},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/3/2024 19:45:00"),end_time:new Date("10/3/2024 22:30:00"),learn_number:25},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("10/4/2024 21:15:00"),end_time:new Date("10/5/2024 0:00:00"),learn_number:13},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("10/4/2024 19:45:00"),end_time:new Date("10/4/2024 22:30:00"),learn_number:10},
        {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("10/4/2024 19:45:00"),end_time:new Date("10/4/2024 22:30:00"),learn_number:14},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/4/2024 19:45:00"),end_time:new Date("10/4/2024 22:30:00"),learn_number:27},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/4/2024 19:45:00"),end_time:new Date("10/4/2024 22:30:00"),learn_number:27},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/4/2024 17:45:00"),end_time:new Date("10/4/2024 20:30:00"),learn_number:26},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("10/5/2024 19:45:00"),end_time:new Date("10/5/2024 22:30:00"),learn_number:13},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("10/5/2024 19:45:00"),end_time:new Date("10/5/2024 22:30:00"),learn_number:11},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("10/5/2024 17:45:00"),end_time:new Date("10/5/2024 20:30:00"),learn_number:26},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/5/2024 19:45:00"),end_time:new Date("10/5/2024 22:30:00"),learn_number:113},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/5/2024 19:45:00"),end_time:new Date("10/5/2024 22:30:00"),learn_number:113},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/5/2024 19:45:00"),end_time:new Date("10/5/2024 22:30:00"),learn_number:18},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/5/2024 19:45:00"),end_time:new Date("10/5/2024 22:30:00"),learn_number:18},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/5/2024 19:45:00"),end_time:new Date("10/5/2024 22:30:00"),learn_number:24},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/5/2024 19:45:00"),end_time:new Date("10/5/2024 22:30:00"),learn_number:20},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("10/6/2024 19:45:00"),end_time:new Date("10/6/2024 22:30:00"),learn_number:13},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/6/2024 19:45:00"),end_time:new Date("10/6/2024 22:30:00"),learn_number:26},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/6/2024 17:45:00"),end_time:new Date("10/6/2024 20:30:00"),learn_number:113},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/6/2024 17:45:00"),end_time:new Date("10/6/2024 20:30:00"),learn_number:113},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/6/2024 19:45:00"),end_time:new Date("10/6/2024 22:30:00"),learn_number:26},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/6/2024 19:45:00"),end_time:new Date("10/6/2024 22:30:00"),learn_number:26},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/6/2024 19:45:00"),end_time:new Date("10/6/2024 22:30:00"),learn_number:109},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/6/2024 19:45:00"),end_time:new Date("10/6/2024 22:30:00"),learn_number:109},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/6/2024 19:45:00"),end_time:new Date("10/6/2024 22:30:00"),learn_number:19},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/6/2024 19:45:00"),end_time:new Date("10/6/2024 22:30:00"),learn_number:27},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/6/2024 19:45:00"),end_time:new Date("10/6/2024 22:30:00"),learn_number:27},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("10/7/2024 21:15:00"),end_time:new Date("10/8/2024 0:00:00"),learn_number:10},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/7/2024 19:45:00"),end_time:new Date("10/7/2024 22:30:00"),learn_number:26},
        {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("10/7/2024 19:45:00"),end_time:new Date("10/7/2024 22:30:00"),learn_number:14},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/7/2024 17:45:00"),end_time:new Date("10/7/2024 20:30:00"),learn_number:28},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/7/2024 17:45:00"),end_time:new Date("10/7/2024 20:30:00"),learn_number:28},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/7/2024 19:45:00"),end_time:new Date("10/7/2024 22:30:00"),learn_number:19},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/7/2024 19:45:00"),end_time:new Date("10/7/2024 22:30:00"),learn_number:19},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/7/2024 19:45:00"),end_time:new Date("10/7/2024 22:30:00"),learn_number:26},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("10/8/2024 21:15:00"),end_time:new Date("10/9/2024 0:00:00"),learn_number:14},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("10/8/2024 19:45:00"),end_time:new Date("10/8/2024 22:30:00"),learn_number:10},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("10/8/2024 17:45:00"),end_time:new Date("10/8/2024 20:30:00"),learn_number:27},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/8/2024 19:45:00"),end_time:new Date("10/8/2024 22:30:00"),learn_number:27},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/8/2024 19:45:00"),end_time:new Date("10/8/2024 22:30:00"),learn_number:28},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/8/2024 19:45:00"),end_time:new Date("10/8/2024 22:30:00"),learn_number:28},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/8/2024 19:45:00"),end_time:new Date("10/8/2024 22:30:00"),learn_number:28},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/8/2024 19:45:00"),end_time:new Date("10/8/2024 22:30:00"),learn_number:28},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/8/2024 17:45:00"),end_time:new Date("10/8/2024 20:30:00"),learn_number:20},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/8/2024 17:45:00"),end_time:new Date("10/8/2024 20:30:00"),learn_number:20},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/8/2024 19:45:00"),end_time:new Date("10/8/2024 22:30:00"),learn_number:20},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("10/9/2024 21:15:00"),end_time:new Date("10/10/2024 0:00:00"),learn_number:15},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("10/9/2024 21:15:00"),end_time:new Date("10/10/2024 0:00:00"),learn_number:11},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/9/2024 19:45:00"),end_time:new Date("10/9/2024 22:30:00"),learn_number:29},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/9/2024 19:45:00"),end_time:new Date("10/9/2024 22:30:00"),learn_number:29},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/9/2024 19:45:00"),end_time:new Date("10/9/2024 22:30:00"),learn_number:19},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/9/2024 19:45:00"),end_time:new Date("10/9/2024 22:30:00"),learn_number:19},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/9/2024 19:45:00"),end_time:new Date("10/9/2024 22:30:00"),learn_number:27},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("10/10/2024 19:45:00"),end_time:new Date("10/10/2024 22:30:00"),learn_number:14},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("10/10/2024 20:45:00"),end_time:new Date("10/10/2024 23:30:00"),learn_number:11},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/10/2024 19:45:00"),end_time:new Date("10/10/2024 22:30:00"),learn_number:27},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/10/2024 19:45:00"),end_time:new Date("10/10/2024 22:30:00"),learn_number:27},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/10/2024 19:45:00"),end_time:new Date("10/10/2024 22:30:00"),learn_number:27},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/10/2024 19:45:00"),end_time:new Date("10/10/2024 22:30:00"),learn_number:28},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/10/2024 19:45:00"),end_time:new Date("10/10/2024 22:30:00"),learn_number:27},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("10/11/2024 21:15:00"),end_time:new Date("10/12/2024 0:00:00"),learn_number:14},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("10/11/2024 19:45:00"),end_time:new Date("10/11/2024 22:30:00"),learn_number:11},
        {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("10/11/2024 19:45:00"),end_time:new Date("10/11/2024 22:30:00"),learn_number:15},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/11/2024 19:45:00"),end_time:new Date("10/11/2024 22:30:00"),learn_number:29},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/11/2024 19:45:00"),end_time:new Date("10/11/2024 22:30:00"),learn_number:29},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/11/2024 17:45:00"),end_time:new Date("10/11/2024 20:30:00"),learn_number:28},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("10/12/2024 19:45:00"),end_time:new Date("10/12/2024 22:30:00"),learn_number:14},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("10/12/2024 19:45:00"),end_time:new Date("10/12/2024 22:30:00"),learn_number:12},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("10/12/2024 17:45:00"),end_time:new Date("10/12/2024 20:30:00"),learn_number:28},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/12/2024 17:45:00"),end_time:new Date("10/12/2024 20:30:00"),learn_number:29},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/12/2024 17:45:00"),end_time:new Date("10/12/2024 20:30:00"),learn_number:29},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/12/2024 19:45:00"),end_time:new Date("10/12/2024 22:30:00"),learn_number:114},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/12/2024 19:45:00"),end_time:new Date("10/12/2024 22:30:00"),learn_number:114},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/12/2024 19:45:00"),end_time:new Date("10/12/2024 22:30:00"),learn_number:20},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/12/2024 19:45:00"),end_time:new Date("10/12/2024 22:30:00"),learn_number:20},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/12/2024 19:45:00"),end_time:new Date("10/12/2024 22:30:00"),learn_number:26},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/12/2024 19:45:00"),end_time:new Date("10/12/2024 22:30:00"),learn_number:22},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("10/13/2024 19:45:00"),end_time:new Date("10/13/2024 22:30:00"),learn_number:14},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/13/2024 19:45:00"),end_time:new Date("10/13/2024 22:30:00"),learn_number:28},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/13/2024 17:45:00"),end_time:new Date("10/13/2024 20:30:00"),learn_number:114},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/13/2024 17:45:00"),end_time:new Date("10/13/2024 20:30:00"),learn_number:114},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/13/2024 19:45:00"),end_time:new Date("10/13/2024 22:30:00"),learn_number:28},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/13/2024 19:45:00"),end_time:new Date("10/13/2024 22:30:00"),learn_number:28},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/13/2024 19:45:00"),end_time:new Date("10/13/2024 22:30:00"),learn_number:110},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/13/2024 19:45:00"),end_time:new Date("10/13/2024 22:30:00"),learn_number:110},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/13/2024 19:45:00"),end_time:new Date("10/13/2024 22:30:00"),learn_number:21},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/13/2024 19:45:00"),end_time:new Date("10/13/2024 22:30:00"),learn_number:29},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/13/2024 19:45:00"),end_time:new Date("10/13/2024 22:30:00"),learn_number:29},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("10/14/2024 21:15:00"),end_time:new Date("10/15/2024 0:00:00"),learn_number:11},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/14/2024 19:45:00"),end_time:new Date("10/14/2024 22:30:00"),learn_number:28},
        {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("10/14/2024 19:45:00"),end_time:new Date("10/14/2024 22:30:00"),learn_number:15},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/14/2024 17:45:00"),end_time:new Date("10/14/2024 20:30:00"),learn_number:30},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/14/2024 17:45:00"),end_time:new Date("10/14/2024 20:30:00"),learn_number:30},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/14/2024 19:45:00"),end_time:new Date("10/14/2024 22:30:00"),learn_number:21},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/14/2024 19:45:00"),end_time:new Date("10/14/2024 22:30:00"),learn_number:21},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/14/2024 19:45:00"),end_time:new Date("10/14/2024 22:30:00"),learn_number:28},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("10/15/2024 21:15:00"),end_time:new Date("10/16/2024 0:00:00"),learn_number:15},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("10/15/2024 19:45:00"),end_time:new Date("10/15/2024 22:30:00"),learn_number:11},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("10/15/2024 17:45:00"),end_time:new Date("10/15/2024 20:30:00"),learn_number:29},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/15/2024 19:45:00"),end_time:new Date("10/15/2024 22:30:00"),learn_number:30},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/15/2024 19:45:00"),end_time:new Date("10/15/2024 22:30:00"),learn_number:30},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/15/2024 19:45:00"),end_time:new Date("10/15/2024 22:30:00"),learn_number:30},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/15/2024 19:45:00"),end_time:new Date("10/15/2024 22:30:00"),learn_number:30},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/15/2024 17:45:00"),end_time:new Date("10/15/2024 20:30:00"),learn_number:22},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/15/2024 17:45:00"),end_time:new Date("10/15/2024 20:30:00"),learn_number:22},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/15/2024 19:45:00"),end_time:new Date("10/15/2024 22:30:00"),learn_number:22},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("10/16/2024 21:15:00"),end_time:new Date("10/17/2024 0:00:00"),learn_number:16},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("10/16/2024 21:15:00"),end_time:new Date("10/17/2024 0:00:00"),learn_number:12},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/16/2024 17:45:00"),end_time:new Date("10/16/2024 20:30:00"),learn_number:31},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/16/2024 17:45:00"),end_time:new Date("10/16/2024 20:30:00"),learn_number:31},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/16/2024 19:45:00"),end_time:new Date("10/16/2024 22:30:00"),learn_number:31},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/16/2024 19:45:00"),end_time:new Date("10/16/2024 22:30:00"),learn_number:31},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/16/2024 19:45:00"),end_time:new Date("10/16/2024 22:30:00"),learn_number:21},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/16/2024 19:45:00"),end_time:new Date("10/16/2024 22:30:00"),learn_number:21},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/16/2024 19:45:00"),end_time:new Date("10/16/2024 22:30:00"),learn_number:21},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/16/2024 19:45:00"),end_time:new Date("10/16/2024 22:30:00"),learn_number:29},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("10/17/2024 19:45:00"),end_time:new Date("10/17/2024 22:30:00"),learn_number:15},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("10/17/2024 20:45:00"),end_time:new Date("10/17/2024 23:30:00"),learn_number:12},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/17/2024 19:45:00"),end_time:new Date("10/17/2024 22:30:00"),learn_number:29},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/17/2024 19:45:00"),end_time:new Date("10/17/2024 22:30:00"),learn_number:29},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/17/2024 19:45:00"),end_time:new Date("10/17/2024 22:30:00"),learn_number:30},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/17/2024 19:45:00"),end_time:new Date("10/17/2024 22:30:00"),learn_number:29},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("10/18/2024 21:15:00"),end_time:new Date("10/19/2024 0:00:00"),learn_number:15},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("10/18/2024 19:45:00"),end_time:new Date("10/18/2024 22:30:00"),learn_number:12},
        {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("10/18/2024 19:45:00"),end_time:new Date("10/18/2024 22:30:00"),learn_number:16},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/18/2024 17:45:00"),end_time:new Date("10/18/2024 20:30:00"),learn_number:30},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("10/19/2024 19:45:00"),end_time:new Date("10/19/2024 22:30:00"),learn_number:15},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("10/19/2024 19:45:00"),end_time:new Date("10/19/2024 22:30:00"),learn_number:13},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("10/19/2024 17:45:00"),end_time:new Date("10/19/2024 20:30:00"),learn_number:30},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/19/2024 19:45:00"),end_time:new Date("10/19/2024 22:30:00"),learn_number:31},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/19/2024 19:45:00"),end_time:new Date("10/19/2024 22:30:00"),learn_number:31},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/19/2024 19:45:00"),end_time:new Date("10/19/2024 22:30:00"),learn_number:115},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/19/2024 19:45:00"),end_time:new Date("10/19/2024 22:30:00"),learn_number:115},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/19/2024 19:45:00"),end_time:new Date("10/19/2024 22:30:00"),learn_number:22},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/19/2024 19:45:00"),end_time:new Date("10/19/2024 22:30:00"),learn_number:22},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/19/2024 19:45:00"),end_time:new Date("10/19/2024 22:30:00"),learn_number:28},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/19/2024 19:45:00"),end_time:new Date("10/19/2024 22:30:00"),learn_number:24},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("10/20/2024 19:45:00"),end_time:new Date("10/20/2024 22:30:00"),learn_number:15},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/20/2024 19:45:00"),end_time:new Date("10/20/2024 22:30:00"),learn_number:30},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/20/2024 17:45:00"),end_time:new Date("10/20/2024 20:30:00"),learn_number:115},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/20/2024 17:45:00"),end_time:new Date("10/20/2024 20:30:00"),learn_number:115},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/20/2024 19:45:00"),end_time:new Date("10/20/2024 22:30:00"),learn_number:30},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/20/2024 19:45:00"),end_time:new Date("10/20/2024 22:30:00"),learn_number:30},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/20/2024 19:45:00"),end_time:new Date("10/20/2024 22:30:00"),learn_number:111},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/20/2024 19:45:00"),end_time:new Date("10/20/2024 22:30:00"),learn_number:111},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/20/2024 19:45:00"),end_time:new Date("10/20/2024 22:30:00"),learn_number:23},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/20/2024 19:45:00"),end_time:new Date("10/20/2024 22:30:00"),learn_number:31},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/20/2024 19:45:00"),end_time:new Date("10/20/2024 22:30:00"),learn_number:31},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("10/21/2024 21:15:00"),end_time:new Date("10/22/2024 0:00:00"),learn_number:12},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/21/2024 19:45:00"),end_time:new Date("10/21/2024 22:30:00"),learn_number:30},
        {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("10/21/2024 19:45:00"),end_time:new Date("10/21/2024 22:30:00"),learn_number:16},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/21/2024 17:45:00"),end_time:new Date("10/21/2024 20:30:00"),learn_number:32},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/21/2024 17:45:00"),end_time:new Date("10/21/2024 20:30:00"),learn_number:32},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/21/2024 19:45:00"),end_time:new Date("10/21/2024 22:30:00"),learn_number:23},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/21/2024 19:45:00"),end_time:new Date("10/21/2024 22:30:00"),learn_number:23},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/21/2024 19:45:00"),end_time:new Date("10/21/2024 22:30:00"),learn_number:30},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("10/22/2024 21:15:00"),end_time:new Date("10/23/2024 0:00:00"),learn_number:16},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("10/22/2024 19:45:00"),end_time:new Date("10/22/2024 22:30:00"),learn_number:12},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("10/22/2024 17:45:00"),end_time:new Date("10/22/2024 20:30:00"),learn_number:31},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/22/2024 19:45:00"),end_time:new Date("10/22/2024 22:30:00"),learn_number:29},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/22/2024 19:45:00"),end_time:new Date("10/22/2024 22:30:00"),learn_number:32},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/22/2024 19:45:00"),end_time:new Date("10/22/2024 22:30:00"),learn_number:32},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/22/2024 19:45:00"),end_time:new Date("10/22/2024 22:30:00"),learn_number:32},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/22/2024 19:45:00"),end_time:new Date("10/22/2024 22:30:00"),learn_number:32},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/22/2024 17:45:00"),end_time:new Date("10/22/2024 20:30:00"),learn_number:24},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/22/2024 17:45:00"),end_time:new Date("10/22/2024 20:30:00"),learn_number:24},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/22/2024 19:45:00"),end_time:new Date("10/22/2024 22:30:00"),learn_number:24},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("10/23/2024 21:15:00"),end_time:new Date("10/24/2024 0:00:00"),learn_number:17},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("10/23/2024 21:15:00"),end_time:new Date("10/24/2024 0:00:00"),learn_number:13},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/23/2024 17:45:00"),end_time:new Date("10/23/2024 20:30:00"),learn_number:33},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/23/2024 17:45:00"),end_time:new Date("10/23/2024 20:30:00"),learn_number:33},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/23/2024 19:45:00"),end_time:new Date("10/23/2024 22:30:00"),learn_number:33},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/23/2024 19:45:00"),end_time:new Date("10/23/2024 22:30:00"),learn_number:33},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/23/2024 19:45:00"),end_time:new Date("10/23/2024 22:30:00"),learn_number:23},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/23/2024 19:45:00"),end_time:new Date("10/23/2024 22:30:00"),learn_number:23},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/23/2024 19:45:00"),end_time:new Date("10/23/2024 22:30:00"),learn_number:25},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/23/2024 19:45:00"),end_time:new Date("10/23/2024 22:30:00"),learn_number:31},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("10/24/2024 19:45:00"),end_time:new Date("10/24/2024 22:30:00"),learn_number:16},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("10/24/2024 20:45:00"),end_time:new Date("10/24/2024 23:30:00"),learn_number:13},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/24/2024 19:45:00"),end_time:new Date("10/24/2024 22:30:00"),learn_number:29},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/24/2024 19:45:00"),end_time:new Date("10/24/2024 22:30:00"),learn_number:31},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/24/2024 19:45:00"),end_time:new Date("10/24/2024 22:30:00"),learn_number:31},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/24/2024 19:45:00"),end_time:new Date("10/24/2024 22:30:00"),learn_number:32},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/24/2024 19:45:00"),end_time:new Date("10/24/2024 22:30:00"),learn_number:31},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("10/25/2024 21:15:00"),end_time:new Date("10/26/2024 0:00:00"),learn_number:16},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("10/25/2024 19:45:00"),end_time:new Date("10/25/2024 22:30:00"),learn_number:13},
        {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("10/25/2024 19:45:00"),end_time:new Date("10/25/2024 22:30:00"),learn_number:17},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/25/2024 19:45:00"),end_time:new Date("10/25/2024 22:30:00"),learn_number:33},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/25/2024 19:45:00"),end_time:new Date("10/25/2024 22:30:00"),learn_number:33},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/25/2024 17:45:00"),end_time:new Date("10/25/2024 20:30:00"),learn_number:32},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("10/26/2024 19:45:00"),end_time:new Date("10/26/2024 22:30:00"),learn_number:16},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("10/26/2024 19:45:00"),end_time:new Date("10/26/2024 22:30:00"),learn_number:14},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("10/26/2024 17:45:00"),end_time:new Date("10/26/2024 20:30:00"),learn_number:32},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/26/2024 19:45:00"),end_time:new Date("10/26/2024 22:30:00"),learn_number:116},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/26/2024 19:45:00"),end_time:new Date("10/26/2024 22:30:00"),learn_number:116},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/26/2024 19:45:00"),end_time:new Date("10/26/2024 22:30:00"),learn_number:24},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/26/2024 19:45:00"),end_time:new Date("10/26/2024 22:30:00"),learn_number:24},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/26/2024 19:45:00"),end_time:new Date("10/26/2024 22:30:00"),learn_number:30},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/26/2024 19:45:00"),end_time:new Date("10/26/2024 22:30:00"),learn_number:26},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("10/27/2024 19:45:00"),end_time:new Date("10/27/2024 22:30:00"),learn_number:16},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/27/2024 19:45:00"),end_time:new Date("10/27/2024 22:30:00"),learn_number:32},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/27/2024 17:45:00"),end_time:new Date("10/27/2024 20:30:00"),learn_number:116},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/27/2024 17:45:00"),end_time:new Date("10/27/2024 20:30:00"),learn_number:116},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/27/2024 19:45:00"),end_time:new Date("10/27/2024 22:30:00"),learn_number:32},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/27/2024 19:45:00"),end_time:new Date("10/27/2024 22:30:00"),learn_number:32},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/27/2024 19:45:00"),end_time:new Date("10/27/2024 22:30:00"),learn_number:112},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/27/2024 19:45:00"),end_time:new Date("10/27/2024 22:30:00"),learn_number:112},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/27/2024 19:45:00"),end_time:new Date("10/27/2024 22:30:00"),learn_number:25},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/27/2024 19:45:00"),end_time:new Date("10/27/2024 22:30:00"),learn_number:33},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/27/2024 19:45:00"),end_time:new Date("10/27/2024 22:30:00"),learn_number:33},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("10/28/2024 21:15:00"),end_time:new Date("10/29/2024 0:00:00"),learn_number:13},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/28/2024 19:45:00"),end_time:new Date("10/28/2024 22:30:00"),learn_number:32},
        {code:"nguvan-9",subject:"Ngữ văn Lớp 09",start_time:new Date("10/28/2024 19:45:00"),end_time:new Date("10/28/2024 22:30:00"),learn_number:17},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/28/2024 17:45:00"),end_time:new Date("10/28/2024 20:30:00"),learn_number:34},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/28/2024 17:45:00"),end_time:new Date("10/28/2024 20:30:00"),learn_number:34},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/28/2024 19:45:00"),end_time:new Date("10/28/2024 22:30:00"),learn_number:25},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/28/2024 19:45:00"),end_time:new Date("10/28/2024 22:30:00"),learn_number:25},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/28/2024 19:45:00"),end_time:new Date("10/28/2024 22:30:00"),learn_number:32},
        {code:"hoahoc-11",subject:"Hóa học Lớp 11",start_time:new Date("10/29/2024 21:15:00"),end_time:new Date("10/30/2024 0:00:00"),learn_number:17},
        {code:"vatli-10",subject:"Vật lí Lớp 10",start_time:new Date("10/29/2024 19:45:00"),end_time:new Date("10/29/2024 22:30:00"),learn_number:13},
        {code:"toannangcao-9",subject:"Toán Nâng cao Lớp 09",start_time:new Date("10/29/2024 17:45:00"),end_time:new Date("10/29/2024 20:30:00"),learn_number:33},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/29/2024 19:45:00"),end_time:new Date("10/29/2024 22:30:00"),learn_number:31},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/29/2024 19:45:00"),end_time:new Date("10/29/2024 22:30:00"),learn_number:34},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/29/2024 19:45:00"),end_time:new Date("10/29/2024 22:30:00"),learn_number:34},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/29/2024 19:45:00"),end_time:new Date("10/29/2024 22:30:00"),learn_number:34},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/29/2024 19:45:00"),end_time:new Date("10/29/2024 22:30:00"),learn_number:34},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/29/2024 17:45:00"),end_time:new Date("10/29/2024 20:30:00"),learn_number:26},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/29/2024 17:45:00"),end_time:new Date("10/29/2024 20:30:00"),learn_number:26},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/29/2024 19:45:00"),end_time:new Date("10/29/2024 22:30:00"),learn_number:26},
        {code:"toan-11",subject:"Toán Lớp 11",start_time:new Date("10/30/2024 21:15:00"),end_time:new Date("10/31/2024 0:00:00"),learn_number:18},
        {code:"hoahoc-10",subject:"Hóa học Lớp 10",start_time:new Date("10/30/2024 21:15:00"),end_time:new Date("10/31/2024 0:00:00"),learn_number:14},
        {code:"toan-8",subject:"Toán Lớp 08",start_time:new Date("10/30/2024 17:45:00"),end_time:new Date("10/30/2024 20:30:00"),learn_number:35},
        {code:"toannangcao-8",subject:"Toán Nâng cao Lớp 08",start_time:new Date("10/30/2024 17:45:00"),end_time:new Date("10/30/2024 20:30:00"),learn_number:35},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/30/2024 19:45:00"),end_time:new Date("10/30/2024 22:30:00"),learn_number:35},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/30/2024 19:45:00"),end_time:new Date("10/30/2024 22:30:00"),learn_number:35},
        {code:"toannangcao-6",subject:"Toán Nâng cao Lớp 06",start_time:new Date("10/30/2024 19:45:00"),end_time:new Date("10/30/2024 22:30:00"),learn_number:25},
        {code:"toan-6",subject:"Toán Lớp 06",start_time:new Date("10/30/2024 19:45:00"),end_time:new Date("10/30/2024 22:30:00"),learn_number:25},
        {code:"nguvan-6",subject:"Ngữ văn Lớp 06",start_time:new Date("10/30/2024 19:45:00"),end_time:new Date("10/30/2024 22:30:00"),learn_number:27},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/30/2024 19:45:00"),end_time:new Date("10/30/2024 22:30:00"),learn_number:33},
        {code:"vatli-11",subject:"Vật lí Lớp 11",start_time:new Date("10/31/2024 19:45:00"),end_time:new Date("10/31/2024 22:30:00"),learn_number:17},
        {code:"toan-10",subject:"Toán Lớp 10",start_time:new Date("10/31/2024 20:45:00"),end_time:new Date("10/31/2024 23:30:00"),learn_number:14},
        {code:"toan-9",subject:"Toán Lớp 09",start_time:new Date("10/31/2024 19:45:00"),end_time:new Date("10/31/2024 22:30:00"),learn_number:31},
        {code:"toan-7",subject:"Toán Lớp 07",start_time:new Date("10/31/2024 19:45:00"),end_time:new Date("10/31/2024 22:30:00"),learn_number:33},
        {code:"toannangcao-7",subject:"Toán Nâng cao Lớp 07",start_time:new Date("10/31/2024 19:45:00"),end_time:new Date("10/31/2024 22:30:00"),learn_number:33},
        {code:"nguvan-7",subject:"Ngữ văn Lớp 07",start_time:new Date("10/31/2024 19:45:00"),end_time:new Date("10/31/2024 22:30:00"),learn_number:34},
        {code:"nguvan-8",subject:"Ngữ văn Lớp 08",start_time:new Date("10/31/2024 19:45:00"),end_time:new Date("10/31/2024 22:30:00"),learn_number:33},
        {code:"demo",subject:"Demo",start_time:new Date("6/30/2024 20:15:00"),end_time:new Date("10/30/2024 23:59:00"),learn_number:1}
    ]

    const boxList=[
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
        {code:"toan-9",boxid:"952000",boxtag:"3Ot9Nu",tkey:"adfc2dae88b289ba",tid:"13"},
        {code:"toannangcao-9",boxid:"952000",boxtag:"3Ot9Nu",tkey:"155135884332be2e",tid:"15"},
        {code:"nguvan-9",boxid:"952000",boxtag:"3Ot9Nu",tkey:"bda8bcabf01ed142",tid:"14"},
        {code:"toan-10",boxid:"952000",boxtag:"3Ot9Nu",tkey:"62a7f4c84da78cd8",tid:"16"},
        {code:"vatli-10",boxid:"952000",boxtag:"3Ot9Nu",tkey:"92cfe9cd0263baf9",tid:"17"},
        {code:"hoahoc-10",boxid:"952000",boxtag:"3Ot9Nu",tkey:"28cfea1a5b70f691",tid:"18"},
        {code:"toan-11",boxid:"952000",boxtag:"3Ot9Nu",tkey:"b1e6b67cdf7a36bf",tid:"19"},
        {code:"vatli-11",boxid:"952000",boxtag:"3Ot9Nu",tkey:"0f2d03f2707e49c6",tid:"20"},
        {code:"hoahoc-11",boxid:"952000",boxtag:"3Ot9Nu",tkey:"3210d81d3fc6be68",tid:"21"},
        {code:"demo",boxid:"952000",boxtag:"3Ot9Nu",tkey:"a2993d7b370255c2",tid:"4"}
    ]

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
/*    
function checkCurrentTimeInSchedule(code, learn_number) {
        const now = new Date();
        const result = lichhoc.find(item => item.code === code && item.learn_number === learn_number);
    
        if (result) {
            if (now >= result.start_time && now <= result.end_time) {
                //alert("ok");
            } else {
                clearInterval(checkSessionInterval);
                //gắn đoạn code logout bắt đăng nhập lại
                document.cookie = "_ladipage_unique_user_id=";
                window.location.href = "https://topclass.hocmai.vn/lophoc?subject="+code;
            }
        } else {
            alert("Không tìm thấy lịch học.");
        }
    }
*/
function checkCurrentTimeInSchedule(code, learn_number) {
        const now = new Date();
        const result = lichhoc.filter(item => item.code === code && item.learn_number === learn_number && now >= item.start_time && now <= item.end_time);
    
        if (result.length>0) {
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
            window.location.href = "https://topclass.hocmai.vn/lophoc?subject="+code;
        }
    }

    function checkClassAvailability(subjectCode) {
      // Find classes for the specified subject
      const subjectClasses = lichhoc.filter(item => item.code === subjectCode);
      // Check if any class is happening now
      const ongoingClass = subjectClasses.find(item => {
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

    function checkSessionStatus(user,code,learn_number) {
        console.log("check ip");
        // Tạo dữ liệu yêu cầu POST
        const requestData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 1233tOk3WKdw30w75eilg6It83r'
            },
            // Đặt body dữ liệu yêu cầu là một JSON với các thông tin cần gửi
            body: JSON.stringify({ user })
            // body: JSON.stringify({ action: 'check_session' })
        };

        // Gửi yêu cầu POST đến API
        fetch('https://api-stream.hocmai.net/check_session', requestData)
            .then(response => response.json())
            .then(result => {
                if (!result.success) {
                    clearInterval(checkSessionInterval);
                    //gắn đoạn code logout bắt đăng nhập lại
                    // document.cookie = "_ladipage_unique_user_id=";
                    // window.location.href = "https://topclass.hocmai.vn/lophoc?subject="+code+"&return=multi";
                    

                    //alert('You have been logged out due to a login from another IP.');
                }
            })
            .catch(error => console.error('Error:', error));
        
        checkCurrentTimeInSchedule(code, learn_number);
            
    }

    let global_check=false;
    function check_spam(){
        // URL của API Google Apps Script
        const c_id=atobUTF8(getCookie("_ladipage_unique_user_id"));
        var code = window.location.href.substring(33);
        const apiUrl = `https://script.google.com/macros/s/AKfycbz5Eo9LL7Ha7pP6v9qwn2mnz-se61o-golud4gH3ArhZbW-WJpQeH6FQhcEiPCmOCzANA/exec?action=checkSpam&username=${c_id}&code=${code}`;
        
        // Sử dụng fetch để gọi API
        fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Chuyển đổi dữ liệu trả về thành JSON
          })
          .then(data => {
            global_check = data.status;
            console.log('Response data:', data); // In ra dữ liệu trả về
            if(global_check){
                location.reload();
            }
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
    }
    function checkStatus() {
      if (!global_check) {
        check_spam(); // Call function a() if status is false
      }
    }

    // Thiết lập khoảng thời gian tối thiểu và tối đa (phút)
    var minMinutes = 10;
    var maxMinutes = 20;
    
    // Tính toán thời gian trễ ngẫu nhiên trong khoảng từ 10 đến 20 phút (đổi sang mili giây)
    var delay = (Math.random() * (maxMinutes - minMinutes) + minMinutes) * 60 * 1000;

    setInterval(checkStatus, delay); // Check every 10 minutes (600000 ms)

    function loading(){
        status=1;
        var c_user = getCookie("_ladipage_unique_user_id");
        var code = window.location.href.substring(33);
        
        const learn_number = checkClassAvailability(code);
        if(learn_number==0){
            window.location.href = "https://topclass.hocmai.vn/lophoc?subject="+code;
        }
        
        if(c_user!='')
        {
            //check lượt học
            check(c_user,code,learn_number);
        }else{
            window.location.href = "https://topclass.hocmai.vn/lophoc?subject="+code;
        }
        //boxchat start here
        const secret = "iYKMfS0z9kkYdD-Z";

        //const secret = "648214918886d99c";
        const name=atobUTF8(getCookie("_ladipage_unique_user_name"));
        var box=getBoxByCode(code);
        // Corrected: Use curly braces {} for object literals
        const params = {
            boxid: box.boxid,
            boxtag: box.boxtag,
            tkey:box.tkey,
            tid:box.tid,
            nme: name, // Replace with actual user name variable
            lnk: '',         // Replace with profile URL (optional)
            pic: ''          // Replace with avatar URL (optional)
        };
        
        const arr = [];
        
        // Corrected: for...of loop to iterate over object properties
        for (const [key, value] of Object.entries(params)) {
            if (value) {
                arr.push(`${key}=${encodeURIComponent(value)}`); 
            }
        }
        
        const path = '/box/?' + arr.join('&');
        
        // Cryptographic Hashing (Requires CryptoJS)
        const hash = CryptoJS.HmacSHA256(path, secret);
        const sig = encodeURIComponent(CryptoJS.enc.Base64.stringify(hash));
        
        const url = 'https://www5.cbox.ws' + path + '&sig=' + sig;
        
        // Create the iframe
        const iframe = document.createElement('iframe');
        iframe.width = '100%';
        iframe.height = '350';
        iframe.src = url;
        iframe.marginHeight = '0';
        iframe.marginWidth = '0';
        iframe.scrolling = 'no';
        iframe.allowTransparency = 'yes';
        iframe.frameBorder = '0';
        
        // Append the iframe to your desired container (e.g., <div id="cboxContainer"></div>)
        const c_id=atobUTF8(getCookie("_ladipage_unique_user_id"));
        // URL của API Google Apps Script
        const apiUrl = `https://script.google.com/macros/s/AKfycbz5Eo9LL7Ha7pP6v9qwn2mnz-se61o-golud4gH3ArhZbW-WJpQeH6FQhcEiPCmOCzANA/exec?action=checkSpam&username=${c_id}&code=${code}`;
        
        // Sử dụng fetch để gọi API
        fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Chuyển đổi dữ liệu trả về thành JSON
          })
          .then(data => {
            global_check = data.status;
            console.log('Response data:', data); // In ra dữ liệu trả về
            // load box chat
            if (global_check) {
               alert ('Bạn đã bị cấm chat'); 
            }
            else {
                let intervalId = setInterval(function() {
                    let element = document.getElementById('boxchat');
                    if (element) {
                        document.getElementById('boxchat').appendChild(iframe);
                        clearInterval(intervalId); // Dừng vòng lặp
                    }
                }, 500); // 1000 milliseconds = 1 second
            }
            // end load box chat
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          }); 
    }

    async function insertSignalDivIfNeeded(){
        
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
        const response = await fetch('https://api.ipify.org?format=json');
        const dataip = await response.json();
        const signal = document.getElementById('signal');

        document.getElementById('signal').innerHTML=encodeBase64(dataip.ip);    
    }

    function moveSignal() {
        const video = document.getElementById('my-video');
        insertSignalDivIfNeeded();
        const signal = document.getElementById('signal');


        const videoWidth = video.clientWidth;
        const videoHeight = video.clientHeight;
        const signalWidth = signal.clientWidth;
        const signalHeight = signal.clientHeight;

        const maxLeft = videoWidth - signalWidth;
        const maxTop = videoHeight - signalHeight;

        const randomLeft = Math.random() * maxLeft;
        const randomTop = Math.random() * maxTop;

        signal.style.left = randomLeft + 'px';
        signal.style.top = randomTop + 'px';
    }

    window.onload = async function () {
        loading();
        status=2;
        try{
            //moveSignal();
            //setInterval(moveSignal, 3000);
        }catch(error){

        }
    }
    //setInterval(loading, 500000);
    
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
        }
        return "";
    }

    async function check(c_user,code,learn_number) {
        //user, code, learn_number   
        var user = atobUTF8(c_user);
        
        if(code.length > 0 && user.length > 0){
            try {
              data = {
                user,
                code,
                learn_number,
                status
              };
              
                
              
                const response = await fetch('https://api-stream.hocmai.net/check_user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 1233tOk3WKdw30w75eilg6It83r'
                    },
                    body: JSON.stringify(data)
                });
            
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
            
                const result = await response.json();
                
                if (result.success) {
                    //alert(JSON.stringify(result));
                    checkSessionInterval = setInterval(() => {
                        checkSessionStatus(user,code,learn_number);
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
                    const log = await fetch('https://api-stream.hocmai.net/log_learning', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer 1233tOk3WKdw30w75eilg6It83r'
                        },
                        body: JSON.stringify(data)
                    });
                    
                    setInterval(async () => {
                        data.status=status;
                        const log = await fetch('https://api-stream.hocmai.net/log_learning', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer 1233tOk3WKdw30w75eilg6It83r'
                            },
                            body: JSON.stringify(data)
                        });
                    },300000);

                    document.cookie = "_ladipage_unique_user_id="+btoaUTF8(result.user.user);
                    document.cookie = "_ladipage_unique_user_name="+btoaUTF8(result.user.name);
                    //alert("ok học bình thường");
                    try {
                        if (navigator.maxTouchPoints > 0) {
                          //alert("Bạn đang sử dụng thiết bị di động!");
                        }
                        else{
                            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                            videoElement.srcObject = stream;
                        }

                        //alert("ok");
                    } catch (error) {
                        console.error('Lỗi khi truy cập camera:', error);
                        //alert('Không thể truy cập camera. Vui lòng kiểm tra quyền hoặc thử lại.');
                    }
                } else {
                    //clear cookie and redirect
                    document.cookie = "_ladipage_unique_user_id=";
                    window.location.href = "https://topclass.hocmai.vn/lophoc?subject="+code;
                }
            } catch (error) {
                console.error('Fetch error: ', error);
                console.log(error.message);
                alert('Hệ thống đang quá tải, vui lòng thử lại sau');
            }
        }
    }
