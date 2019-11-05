$(document).ready(()=>{
    let list = [
        { name : "유경수" , account : "yoogomja" , url : "https://github.com/yoogomja" },
        { name : "배성현" , account : "baeseongh" , url : "https://github.com/baeseongh" },
<<<<<<< HEAD
        { name : "조병옥" , account : "byeongok2" , url : "https://github.com/Byeongok2" },
=======
        { name : "송다운" , account : "haryoung" , url : "https://github.com/HaRyoung" },
>>>>>>> 314596b75cadd0f9c6298980af21ac91f488065a
    ];
    list.map((item , idx) =>{
        let copied = $('.mockup').clone().removeClass('mockup');
        copied.find('.item-name').text(item.name);
        copied.find('.item-link').attr('href' , item.url);
        copied.find('.item-github-account').text("@" + item.account);
        $('.list-items').append(copied);
    });
});