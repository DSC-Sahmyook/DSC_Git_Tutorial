$(document).ready(()=>{
    let list = [
<<<<<<< HEAD
        { nm : "김홍욱" , user_nm : "ghddnr13" , url : "https://github.com/ghddnr13" },
=======
        { nm : "조병옥" , user_nm : "byeongok2" , url : "https://github.com/Byeongok2" },
>>>>>>> 402f4c7f4772e7cbc78abdd1e9b94b1afd88e9cc
        { nm : "유경수" , user_nm : "yoogomja" , url : "https://github.com/yoogomja" },
        { nm : "배성현" , user_nm : "baeseongh" , url : "https://github.com/baeseongh" },
        { nm : "신세경" , user_nm : "신세경" , url : "https://github.com/baeseongh" },
        { nm : "송다운" , user_nm : "haryoung" , url : "https://github.com/HaRyoung" },
        { nm : "김현균" , user_nm : "Ksanbal" , url : "https://github.com/Ksanbal" },
        { nm : "박종완" , user_nm : "Parkjoungwan" , url : "https://github.com/Parkjoungwan" },
    ];
    list.map((item , idx) =>{
        let copied = $('.mockup').clone().removeClass('mockup');
        copied.find('.item-name').text(item.nm);
        copied.find('.item-link').attr('href' , item.url);
        copied.find('.item-github-account').text("@" + item.user_nm);
        $('.list-items').append(copied);
    });
});