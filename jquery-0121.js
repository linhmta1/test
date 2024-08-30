//copy all >> file js github
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
        {code:"nguvan",subject:"Ngữ văn",start_time:new Date("7/31/2024 20:15:00"),end_time:new Date("7/31/2024 23:00:00"),learn_number:7},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("7/31/2024 21:15:00"),end_time:new Date("8/1/2024 0:00:00"),learn_number:7},
{code:"sinhhoc",subject:"Sinh học",start_time:new Date("7/31/2024 21:15:00"),end_time:new Date("8/1/2024 0:00:00"),learn_number:6},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("7/31/2024 20:15:00"),end_time:new Date("7/31/2024 23:00:00"),learn_number:6},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/1/2024 21:15:00"),end_time:new Date("8/2/2024 0:00:00"),learn_number:7},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/1/2024 20:45:00"),end_time:new Date("8/1/2024 23:30:00"),learn_number:7},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/1/2024 11:45:00"),end_time:new Date("8/1/2024 14:30:00"),learn_number:7},
{code:"lichsu",subject:"Lịch sử",start_time:new Date("8/1/2024 21:15:00"),end_time:new Date("8/2/2024 0:00:00"),learn_number:7},
{code:"toan",subject:"Toán",start_time:new Date("8/2/2024 21:15:00"),end_time:new Date("8/3/2024 0:00:00"),learn_number:7},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/2/2024 20:15:00"),end_time:new Date("8/2/2024 23:00:00"),learn_number:7},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/2/2024 20:45:00"),end_time:new Date("8/2/2024 23:30:00"),learn_number:7},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/2/2024 21:15:00"),end_time:new Date("8/3/2024 0:00:00"),learn_number:7},
{code:"diali",subject:"Địa lí",start_time:new Date("8/2/2024 21:15:00"),end_time:new Date("8/3/2024 0:00:00"),learn_number:7},
{code:"toan",subject:"Toán",start_time:new Date("8/3/2024 20:15:00"),end_time:new Date("8/3/2024 23:00:00"),learn_number:7},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/3/2024 20:15:00"),end_time:new Date("8/3/2024 23:00:00"),learn_number:7},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/3/2024 21:15:00"),end_time:new Date("8/4/2024 0:00:00"),learn_number:7},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/3/2024 21:15:00"),end_time:new Date("8/4/2024 0:00:00"),learn_number:7},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/4/2024 21:15:00"),end_time:new Date("8/5/2024 0:00:00"),learn_number:7},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/4/2024 11:45:00"),end_time:new Date("8/4/2024 14:30:00"),learn_number:7},
{code:"sinhhoc",subject:"Sinh học",start_time:new Date("8/4/2024 21:15:00"),end_time:new Date("8/5/2024 0:00:00"),learn_number:7},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/4/2024 20:15:00"),end_time:new Date("8/4/2024 23:59:00"),learn_number:7},
{code:"toan",subject:"Toán",start_time:new Date("8/5/2024 21:15:00"),end_time:new Date("8/6/2024 0:00:00"),learn_number:7},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/5/2024 20:45:00"),end_time:new Date("8/5/2024 23:30:00"),learn_number:8},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/5/2024 21:15:00"),end_time:new Date("8/6/2024 0:00:00"),learn_number:7},
{code:"lichsu",subject:"Lịch sử",start_time:new Date("8/5/2024 20:15:00"),end_time:new Date("8/5/2024 23:00:00"),learn_number:8},
{code:"toan",subject:"Toán",start_time:new Date("8/6/2024 20:15:00"),end_time:new Date("8/6/2024 23:00:00"),learn_number:7},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/6/2024 20:15:00"),end_time:new Date("8/6/2024 23:00:00"),learn_number:8},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/6/2024 20:45:00"),end_time:new Date("8/6/2024 23:30:00"),learn_number:8},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/6/2024 21:15:00"),end_time:new Date("8/7/2024 0:00:00"),learn_number:7},
{code:"diali",subject:"Địa lí",start_time:new Date("8/6/2024 20:15:00"),end_time:new Date("8/6/2024 23:00:00"),learn_number:8},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/7/2024 20:15:00"),end_time:new Date("8/7/2024 23:00:00"),learn_number:8},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/7/2024 21:15:00"),end_time:new Date("8/8/2024 0:00:00"),learn_number:8},
{code:"sinhhoc",subject:"Sinh học",start_time:new Date("8/7/2024 21:15:00"),end_time:new Date("8/8/2024 0:00:00"),learn_number:7},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/7/2024 20:15:00"),end_time:new Date("8/7/2024 23:00:00"),learn_number:7},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/8/2024 21:15:00"),end_time:new Date("8/9/2024 0:00:00"),learn_number:8},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/8/2024 20:45:00"),end_time:new Date("8/8/2024 23:30:00"),learn_number:8},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/8/2024 11:45:00"),end_time:new Date("8/8/2024 14:30:00"),learn_number:8},
{code:"lichsu",subject:"Lịch sử",start_time:new Date("8/8/2024 21:15:00"),end_time:new Date("8/9/2024 0:00:00"),learn_number:8},
{code:"toan",subject:"Toán",start_time:new Date("8/9/2024 21:15:00"),end_time:new Date("8/10/2024 0:00:00"),learn_number:8},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/9/2024 20:15:00"),end_time:new Date("8/9/2024 23:00:00"),learn_number:8},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/9/2024 20:45:00"),end_time:new Date("8/9/2024 23:30:00"),learn_number:8},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/9/2024 21:15:00"),end_time:new Date("8/10/2024 0:00:00"),learn_number:8},
{code:"diali",subject:"Địa lí",start_time:new Date("8/9/2024 21:15:00"),end_time:new Date("8/10/2024 0:00:00"),learn_number:8},
{code:"toan",subject:"Toán",start_time:new Date("8/10/2024 20:15:00"),end_time:new Date("8/10/2024 23:00:00"),learn_number:8},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/10/2024 20:15:00"),end_time:new Date("8/10/2024 23:00:00"),learn_number:8},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/10/2024 21:15:00"),end_time:new Date("8/11/2024 0:00:00"),learn_number:8},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/10/2024 21:15:00"),end_time:new Date("8/11/2024 0:00:00"),learn_number:8},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/11/2024 21:15:00"),end_time:new Date("8/12/2024 0:00:00"),learn_number:8},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/11/2024 11:45:00"),end_time:new Date("8/11/2024 14:30:00"),learn_number:8},
{code:"sinhhoc",subject:"Sinh học",start_time:new Date("8/11/2024 21:15:00"),end_time:new Date("8/12/2024 0:00:00"),learn_number:8},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/11/2024 20:15:00"),end_time:new Date("8/11/2024 23:00:00"),learn_number:8},
{code:"toan",subject:"Toán",start_time:new Date("8/12/2024 21:15:00"),end_time:new Date("8/13/2024 0:20:00"),learn_number:8},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/12/2024 20:45:00"),end_time:new Date("8/12/2024 23:30:00"),learn_number:9},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/12/2024 21:15:00"),end_time:new Date("8/13/2024 0:20:00"),learn_number:8},
{code:"lichsu",subject:"Lịch sử",start_time:new Date("8/12/2024 20:15:00"),end_time:new Date("8/12/2024 23:00:00"),learn_number:9},
{code:"toan",subject:"Toán",start_time:new Date("8/13/2024 20:15:00"),end_time:new Date("8/13/2024 23:00:00"),learn_number:8},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/13/2024 20:15:00"),end_time:new Date("8/13/2024 23:00:00"),learn_number:9},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/13/2024 20:45:00"),end_time:new Date("8/13/2024 23:30:00"),learn_number:9},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/13/2024 21:15:00"),end_time:new Date("8/14/2024 0:00:00"),learn_number:8},
{code:"diali",subject:"Địa lí",start_time:new Date("8/13/2024 20:15:00"),end_time:new Date("8/13/2024 23:00:00"),learn_number:9},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/14/2024 20:15:00"),end_time:new Date("8/14/2024 23:00:00"),learn_number:9},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/14/2024 21:15:00"),end_time:new Date("8/15/2024 0:00:00"),learn_number:9},
{code:"sinhhoc",subject:"Sinh học",start_time:new Date("8/14/2024 21:15:00"),end_time:new Date("8/15/2024 0:00:00"),learn_number:8},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/14/2024 20:15:00"),end_time:new Date("8/14/2024 23:00:00"),learn_number:8},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/15/2024 21:15:00"),end_time:new Date("8/16/2024 0:00:00"),learn_number:9},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/15/2024 20:45:00"),end_time:new Date("8/15/2024 23:30:00"),learn_number:9},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/15/2024 11:45:00"),end_time:new Date("8/15/2024 14:30:00"),learn_number:9},
{code:"lichsu",subject:"Lịch sử",start_time:new Date("8/15/2024 21:15:00"),end_time:new Date("8/16/2024 0:00:00"),learn_number:9},
{code:"toan",subject:"Toán",start_time:new Date("8/16/2024 21:15:00"),end_time:new Date("8/17/2024 0:00:00"),learn_number:9},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/16/2024 20:15:00"),end_time:new Date("8/16/2024 23:00:00"),learn_number:9},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/16/2024 20:45:00"),end_time:new Date("8/16/2024 23:30:00"),learn_number:9},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/16/2024 21:15:00"),end_time:new Date("8/17/2024 0:00:00"),learn_number:9},
{code:"diali",subject:"Địa lí",start_time:new Date("8/16/2024 21:15:00"),end_time:new Date("8/17/2024 0:00:00"),learn_number:9},
{code:"toan",subject:"Toán",start_time:new Date("8/17/2024 20:15:00"),end_time:new Date("8/17/2024 23:00:00"),learn_number:9},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/17/2024 20:15:00"),end_time:new Date("8/17/2024 23:00:00"),learn_number:9},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/17/2024 21:15:00"),end_time:new Date("8/18/2024 0:00:00"),learn_number:9},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/17/2024 21:15:00"),end_time:new Date("8/18/2024 0:00:00"),learn_number:9},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/18/2024 21:15:00"),end_time:new Date("8/19/2024 0:00:00"),learn_number:9},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/18/2024 11:45:00"),end_time:new Date("8/18/2024 14:30:00"),learn_number:9},
{code:"sinhhoc",subject:"Sinh học",start_time:new Date("8/18/2024 21:15:00"),end_time:new Date("8/19/2024 0:00:00"),learn_number:8},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/18/2024 20:15:00"),end_time:new Date("8/18/2024 23:00:00"),learn_number:9},
{code:"toan",subject:"Toán",start_time:new Date("8/19/2024 21:15:00"),end_time:new Date("8/20/2024 0:00:00"),learn_number:9},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/19/2024 20:45:00"),end_time:new Date("8/19/2024 23:30:00"),learn_number:10},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/19/2024 21:15:00"),end_time:new Date("8/20/2024 0:00:00"),learn_number:9},
{code:"lichsu",subject:"Lịch sử",start_time:new Date("8/19/2024 20:15:00"),end_time:new Date("8/19/2024 23:00:00"),learn_number:10},
{code:"toan",subject:"Toán",start_time:new Date("8/20/2024 20:15:00"),end_time:new Date("8/20/2024 23:00:00"),learn_number:9},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/20/2024 20:15:00"),end_time:new Date("8/20/2024 23:00:00"),learn_number:10},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/20/2024 20:45:00"),end_time:new Date("8/20/2024 23:30:00"),learn_number:10},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/20/2024 21:15:00"),end_time:new Date("8/21/2024 0:00:00"),learn_number:9},
{code:"diali",subject:"Địa lí",start_time:new Date("8/20/2024 20:15:00"),end_time:new Date("8/20/2024 23:00:00"),learn_number:10},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/21/2024 20:15:00"),end_time:new Date("8/21/2024 23:00:00"),learn_number:10},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/21/2024 21:15:00"),end_time:new Date("8/22/2024 0:00:00"),learn_number:10},
{code:"sinhhoc",subject:"Sinh học",start_time:new Date("8/21/2024 21:15:00"),end_time:new Date("8/22/2024 0:00:00"),learn_number:8},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/21/2024 20:15:00"),end_time:new Date("8/21/2024 23:00:00"),learn_number:9},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/22/2024 21:15:00"),end_time:new Date("8/23/2024 0:00:00"),learn_number:10},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/22/2024 20:45:00"),end_time:new Date("8/22/2024 23:30:00"),learn_number:10},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/22/2024 11:45:00"),end_time:new Date("8/22/2024 14:30:00"),learn_number:10},
{code:"lichsu",subject:"Lịch sử",start_time:new Date("8/22/2024 21:15:00"),end_time:new Date("8/23/2024 0:00:00"),learn_number:10},
{code:"toan",subject:"Toán",start_time:new Date("8/23/2024 21:15:00"),end_time:new Date("8/24/2024 0:00:00"),learn_number:10},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/23/2024 20:15:00"),end_time:new Date("8/23/2024 23:00:00"),learn_number:10},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/23/2024 20:45:00"),end_time:new Date("8/23/2024 23:30:00"),learn_number:10},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/23/2024 21:15:00"),end_time:new Date("8/24/2024 0:00:00"),learn_number:10},
{code:"diali",subject:"Địa lí",start_time:new Date("8/23/2024 21:15:00"),end_time:new Date("8/24/2024 0:00:00"),learn_number:10},
{code:"toan",subject:"Toán",start_time:new Date("8/24/2024 20:15:00"),end_time:new Date("8/24/2024 23:00:00"),learn_number:10},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/24/2024 20:15:00"),end_time:new Date("8/24/2024 23:00:00"),learn_number:10},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/24/2024 21:15:00"),end_time:new Date("8/25/2024 0:00:00"),learn_number:10},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/24/2024 21:15:00"),end_time:new Date("8/25/2024 0:00:00"),learn_number:10},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/25/2024 21:15:00"),end_time:new Date("8/26/2024 0:00:00"),learn_number:10},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/25/2024 11:45:00"),end_time:new Date("8/25/2024 14:30:00"),learn_number:10},
{code:"sinhhoc",subject:"Sinh học",start_time:new Date("8/25/2024 21:15:00"),end_time:new Date("8/26/2024 0:00:00"),learn_number:9},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/25/2024 20:15:00"),end_time:new Date("8/25/2024 23:00:00"),learn_number:10},
{code:"toan",subject:"Toán",start_time:new Date("8/26/2024 21:15:00"),end_time:new Date("8/27/2024 0:00:00"),learn_number:10},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/26/2024 20:45:00"),end_time:new Date("8/26/2024 23:30:00"),learn_number:11},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/26/2024 21:15:00"),end_time:new Date("8/27/2024 0:00:00"),learn_number:10},
{code:"lichsu",subject:"Lịch sử",start_time:new Date("8/26/2024 20:15:00"),end_time:new Date("8/26/2024 23:00:00"),learn_number:11},
{code:"toan",subject:"Toán",start_time:new Date("8/27/2024 20:15:00"),end_time:new Date("8/27/2024 23:00:00"),learn_number:10},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/27/2024 20:15:00"),end_time:new Date("8/27/2024 23:00:00"),learn_number:11},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/27/2024 20:45:00"),end_time:new Date("8/27/2024 23:30:00"),learn_number:11},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/27/2024 21:15:00"),end_time:new Date("8/28/2024 0:00:00"),learn_number:10},
{code:"diali",subject:"Địa lí",start_time:new Date("8/27/2024 20:15:00"),end_time:new Date("8/27/2024 23:00:00"),learn_number:11},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/28/2024 20:15:00"),end_time:new Date("8/28/2024 23:00:00"),learn_number:11},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/28/2024 21:15:00"),end_time:new Date("8/29/2024 0:00:00"),learn_number:11},
{code:"sinhhoc",subject:"Sinh học",start_time:new Date("8/28/2024 21:15:00"),end_time:new Date("8/29/2024 0:00:00"),learn_number:9},
{code:"dochieukhoahoc",subject:"ĐH-KH",start_time:new Date("8/28/2024 20:15:00"),end_time:new Date("8/28/2024 23:00:00"),learn_number:10},
{code:"nguvan",subject:"Ngữ văn",start_time:new Date("8/29/2024 21:15:00"),end_time:new Date("8/30/2024 0:00:00"),learn_number:11},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/29/2024 20:45:00"),end_time:new Date("8/29/2024 23:30:00"),learn_number:11},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/29/2024 11:45:00"),end_time:new Date("8/29/2024 14:30:00"),learn_number:11},
{code:"lichsu",subject:"Lịch sử",start_time:new Date("8/29/2024 21:15:00"),end_time:new Date("8/30/2024 0:00:00"),learn_number:11},
{code:"toan",subject:"Toán",start_time:new Date("8/30/2024 21:15:00"),end_time:new Date("8/31/2024 0:55:00"),learn_number:11},
{code:"tienganh",subject:"Tiếng Anh",start_time:new Date("8/30/2024 20:15:00"),end_time:new Date("8/30/2024 23:00:00"),learn_number:11},
{code:"vatli",subject:"Vật lí",start_time:new Date("8/30/2024 20:45:00"),end_time:new Date("8/30/2024 23:30:00"),learn_number:11},
{code:"hoahoc",subject:"Hóa học",start_time:new Date("8/30/2024 21:15:00"),end_time:new Date("8/31/2024 0:00:00"),learn_number:11},
{code:"diali",subject:"Địa lí",start_time:new Date("8/30/2024 21:15:00"),end_time:new Date("8/31/2024 0:00:00"),learn_number:11},
        {code:"demo",subject:"Demo",start_time:new Date("6/30/2024 20:15:00"),end_time:new Date("8/31/2024 23:59:00"),learn_number:1}
    ]

    const boxList=[
        {code:"toan-6",boxid:"952000",boxtag:"3Ot9Nu",tkey:"a2993d7b370255c2",tid:"4"},
        {code:"toannangcao-6",boxid:"952000",boxtag:"3Ot9Nu",tkey:"38727f2a2cd6fcd9",tid:"6"},
        {code:"nguvan-6",boxid:"952000",boxtag:"3Ot9Nu",tkey:"af25514704e26d88",tid:"5"},
        {code:"toan-7",boxid:"952000",boxtag:"3Ot9Nu",tkey:"c4aecd01f8562923",tid:"7"},
        {code:"toannangcao-7",boxid:"952000",boxtag:"3Ot9Nu",tkey:"5b3e3087838d2dc0",tid:"9"},
        {code:"nguvan-7",boxid:"952000",boxtag:"3Ot9Nu",tkey:"58890d26d23811e7",tid:"8"},
        {code:"toan-8",boxid:"952000",boxtag:"3Ot9Nu",tkey:"5136dc4e404befa6",tid:"10"},
        {code:"toannangcao-8",boxid:"952000",boxtag:"3Ot9Nu",tkey:"bcb9d0b46f943667",tid:"12"},
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
        {code:"toan",boxid:"952000",boxtag:"3Ot9Nu",tkey:"715016736bed7c2c",tid:"33"},
        {code:"vatli",boxid:"952000",boxtag:"3Ot9Nu",tkey:"76b5c3918fdfcc8e",tid:"34"},
        {code:"hoahoc",boxid:"952000",boxtag:"3Ot9Nu",tkey:"4a46e690b7bfeea8",tid:"35"},
        {code:"tienganh",boxid:"952000",boxtag:"3Ot9Nu",tkey:"0704f4245822300e",tid:"36"},
        {code:"sinhhoc",boxid:"952000",boxtag:"3Ot9Nu",tkey:"f66f70066c946ce7",tid:"37"},
        {code:"nguvan",boxid:"952000",boxtag:"3Ot9Nu",tkey:"0ce8bcdfb8ff943d",tid:"38"},
        {code:"lichsu",boxid:"952000",boxtag:"3Ot9Nu",tkey:"357f39a45ebe341e",tid:"39"},
        {code:"diali",boxid:"952000",boxtag:"3Ot9Nu",tkey:"117f2e42c22c4396",tid:"40"},
        {code:"dochieukhoahoc",boxid:"952000",boxtag:"3Ot9Nu",tkey:"ad8ad9b389b07034",tid:"41"},
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
                window.location.href = "https://topuni.hocmai.vn/lophoc?subject="+code;
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
            window.location.href = "https://topuni.hocmai.vn/lophoc?subject="+code;
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
                    // window.location.href = "https://topuni.hocmai.vn/lophoc?subject="+code+"&return=multi";
                    

                    //alert('You have been logged out due to a login from another IP.');
                }
            })
            .catch(error => console.error('Error:', error));
        
        checkCurrentTimeInSchedule(code, learn_number);
            
    }

    function loading(){
        status=1;
        var c_user = getCookie("_ladipage_unique_user_id");
        var code = window.location.href.substring(31);
        
        const learn_number = checkClassAvailability(code);
        if(learn_number==0){
            window.location.href = "https://topuni.hocmai.vn/lophoc?subject="+code;
        }
        
        if(c_user!='')
        {
            //check lượt học
            check(c_user,code,learn_number);
        }else{
            window.location.href = "https://topuni.hocmai.vn/lophoc?subject="+code;
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
        iframe.height = '445';
        iframe.src = url;
        iframe.marginHeight = '0';
        iframe.marginWidth = '0';
        iframe.scrolling = 'no';
        iframe.allowTransparency = 'yes';
        iframe.frameBorder = '0';
        
        // Append the iframe to your desired container (e.g., <div id="cboxContainer"></div>)

        let intervalId = setInterval(function() {
            let element = document.getElementById('boxchat');
            if (element) {
                document.getElementById('boxchat').appendChild(iframe);
                clearInterval(intervalId); // Dừng vòng lặp
            }
        }, 500); // 1000 milliseconds = 1 second
        
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
                    
                } else {
                    //clear cookie and redirect
                    document.cookie = "_ladipage_unique_user_id=";
                    window.location.href = "https://topuni.hocmai.vn/lophoc?subject="+code;
                }
            } catch (error) {
                console.error('Fetch error: ', error);
                console.log(error.message);
                alert('Hệ thống đang quá tải, vui lòng thử lại sau');
            }
        }
    }
