$(document).ready(()=>{
    let list = [
        { name : "유경수" , account : "yoogomja" , url : "https://github.com/yoogomja" },
        { name : "배성현" , account : "baeseongh" , url : "https://github.com/baeseongh" },
        { name : "박종완" , account : "Parkjoungwan" , url : "https://github.com/Parkjoungwan" },
        { name : "송다운" , account : "haryoung" , url : "https://github.com/HaRyoung" },
        { nm : "유경수" , user_nm : "yoogomja" , url : "https://github.com/yoogomja" },
        { nm : "배성현" , user_nm : "baeseongh" , url : "https://github.com/baeseongh" },
        { nm : "신세경" , user_nm : "신세경" , url : "https://github.com/baeseongh" },
        { nm : "송다운" , user_nm : "haryoung" , url : "https://github.com/HaRyoung" },
    ];
    list.map((item , idx) =>{
        let copied = $('.mockup').clone().removeClass('mockup');
        copied.find('.item-name').text(item.nm);
        copied.find('.item-link').attr('href' , item.url);
        copied.find('.item-github-account').text("@" + item.user_nm);
        $('.list-items').append(copied);
    });
});