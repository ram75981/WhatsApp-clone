// for(i=0; i<=contactlist.length; i++){
//     contact = `<div class="chat1" id="">
//     <div class="chat1-in flex aitem-center">
//         <div class="chat1-profile">
//             <img src="${(contactlist[i]["image"])}" alt="">
//         </div>
//         <div class="chat1-msg">
//             <div class="chat1-msg-top flex jbetween aitem-center">
//                 <div class="chat1-msg-name">${(contactlist[i]["name"])}</div>
//                 <div class="chat1-msg-time">${(contactlist[i]["time"])}</div>
//             </div>
//             <div class="chat1-msg-btm flex aitem-center jbetween">
//                 <div class="chat1-msg-info flex aitem-center">
//                     <i class="fa-solid ${(contactlist[i]["tick"])}"></i>
//                     <p>${(contactlist[i]["message"])}</p>
//                 </div>
//                 <div class="chat1-msg-hov-icon flex">
//                     <i class="fa-solid ${(contactlist[i]["mute"])}"></i>
//                     <i class="fa-solid fa-chevron-down"></i>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>`;
// // var a = document.getElementById("chatlist");
//     $("#chatlist").append(contact);
//     console.log(contact);
// }

document.getElementById("user-details").addEventListener("click", function(){
    document.getElementById("user-prf-detail").style = "margin-left: -100%;";
    document.getElementById("my-prf").style = "width:200px; height:200px;";
})

document.getElementById("my-prf-hide").addEventListener("click", function(){
    document.getElementById("user-prf-detail").style = "margin-left: -200%;";
    document.getElementById("my-prf").style = "width:0px; height:0px;";
})

document.getElementById("contact-info-show").addEventListener("click", function(){
    document.getElementById("contact-togle").style = "margin-right: 0%"
    document.getElementById("contact-overflow").style = "margin-top: 0%"
    var userprf = document.getElementById("chat-body-profile").src;
    var user_name = document.getElementById("chat-body-username").innerHTML;
    document.getElementById("userset-prf").src = userprf;
    document.getElementById("userset-name").innerHTML = user_name;
})

document.getElementById("contact-info-close").addEventListener("click", function(){
    document.getElementById("contact-togle").style = "margin-right: -30%;"
    document.getElementById("contact-overflow").style = "margin-top: -100%"
})

document.getElementById("chatlist-head-menu").addEventListener("click", function(){     
    var tog_menuu = document.getElementById("chatlist-submenu");
    var tog_menu = document.getElementById("chatlist-head-menu");

    if(tog_menu.classList.contains("chatlist-head-icon4")){
        tog_menu.classList.remove("chatlist-head-icon4");
        tog_menu.classList.add("chatlist-head-icon4-hov");
    }
    else{
        tog_menu.classList.remove("chatlist-head-icon4-hov");
        tog_menu.classList.add("chatlist-head-icon4");
    }
    if(tog_menuu.style.display == "block"){
        tog_menuu.style.display = "none";
    }
    else{
        tog_menuu.style.display = "block";
    }
})

document.getElementById("contact-menu").addEventListener("click" , function(){
    var cnt_menu = document.getElementById("contact-menu");
    var cnt_submenu = document.getElementById("contact-submenu");
    if(cnt_menu.classList.contains("right-chat-menu-icon-in")){
        cnt_menu.classList.remove("right-chat-menu-icon-in");
        cnt_menu.classList.add("right-chat-menu-icon-in-hov");
    }
    else{
        cnt_menu.classList.remove("right-chat-menu-icon-in-hov");
        cnt_menu.classList.add("right-chat-menu-icon-in");
    }
    if(cnt_submenu.style.display == "block"){
        cnt_submenu.style.display = "none";
    }
    else{
        cnt_submenu.style.display = "block"
    }
})


document.getElementById("chat-srch").addEventListener("keyup", function(){
    var contactNames = document.querySelectorAll(".chat1 .chat1-msg-name");
    // console.log(contactNames);
    var userlist = document.querySelectorAll(".chat1");
    var getval = document.getElementById("chat-srch").value.toLowerCase();
    for(i=0; i<contactNames.length; i++){
        var outpt = contactNames[i].innerHTML.toLowerCase().includes(getval);
        if(!outpt){
            userlist[i].style.display = "none";
        }
        else{
            userlist[i].style.display = "block";
            // var newoutpt = contactNames[i].innerHTML.split("");
            // console.log(newoutpt);
        }
    }
})


// document.getElementById("send-msg").addEventListener("click", function(){
//     var Msg_getValue = document.getElementById("typing").value;
//     document.getElementById("chat-msg-body").append(`<div class="msg-set">\
//     <div class="msg-set-in">\
//         <div class="msg-in-set send">\
//             <div class="msg-in send-in send-frst-msg">\
//                 <span class="msg-in-msg">${Msg_getValue}</span>\
//                 <span class="msg-in-time">4.45 PM</span>\
//             </div>\
//         </div>\
//     </div>\
//     </div>`)
// })

document.getElementById("send-msg").addEventListener("click", function(){
    var Msg_getValue = document.getElementById("typing").value;
    var apnd_msg = '<div class="msg-set">\
    <div class="msg-set-in">\
        <div class="msg-in-set send">\
            <div class="msg-in send-in send-frst-msg">\
                <span class="msg-in-msg">'+Msg_getValue+'</span>\
                <span class="msg-in-time">4.45 PM</span>\
            </div>\
        </div>\
    </div>\
    </div>';
    console.log(Msg_getValue);
    $("#chat-msg-body").append(apnd_msg);
    document.getElementById("typing").value = "";
})

// document.body.addEventListener("click",function(){
//     var zz = document.getElementsByClassName("chat1 chat1-msg-name").innerHTML;
//     alert(zz)
// })

document.querySelectorAll('.chat1 .chat1-msg-name').forEach(occurence => {
    occurence.addEventListener('click', () => {
      console.log(occurence.innerHTML);
    });
});

var chat1 = document.querySelectorAll(".chat1");
for(i=0; i<chat1.length; i++){
    chat1[i].addEventListener("click", function(a){
    //     // var chatname = document.querySelectorAll(".chat1 .chat1-msg-name").innerHTML;
    //     var chatname = document.getElementsByClassName("chat1-msg-name");
    //     console.log(chatname[i].innerHTML);
        var chatname = a.currentTarget.querySelector('.chat1-msg-name').innerHTML;
        var chatprf = a.currentTarget.querySelector('.chat1-profile img').src;
        document.getElementById("chat-body-username").innerHTML = chatname;
        document.getElementById("chat-body-profile").src = chatprf;


        // console.log(chatprf);
        // console.log(typeof a);
    })

}


document.getElementById("chat-body-contextmenu").addEventListener("contextmenu", function(event){
    var abcd = document.getElementById("chat-body-contextmenu");
    width = abcd.offsetWidth;
    height = abcd.offsetHeight;
    x = event.offsetX;
    y = event.offsetY;
    console.log(width , height)
    event.preventDefault();
})