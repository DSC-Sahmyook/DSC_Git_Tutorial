$(document).ready(()=>{
    let list = [
        { name : "유경수" , account : "yoogomja" , url : "https://github.com/yoogomja" },
        { name : "배성현" , account : "baeseongh" , url : "https://github.com/baeseongh" },
    ];
    list.map((item , idx) =>{
        let copied = $('.mockup').clone().removeClass('mockup');
        copied.find('.item-name').text(item.name);
        copied.find('.item-link').attr('href' , item.url);
        copied.find('.item-github-account').text("@" + item.account);
        $('.list-items').append(copied);
    });
});