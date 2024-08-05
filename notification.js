 
/*
var user = [

     {id:1, name:"ByNcode", 
     notification:"You are not authorized / registered"},

     {id:2, name:"Nodo", 
     notification:"You have successfully logged in to our site"},

     {id:3, name:"Shanidze", 
     notification:"You have successfully ordered the product"},
]

*/
 
var notification_box = document.getElementById("notification_container");
notification_box.style.display='none';

 
var drop_menu = document.getElementById("drop_menu");
drop_menu.style.display='none';

 
 function toggle_drop_menu() {

     if(drop_menu.style.display=='none' && notification_box.style.display=='none')
     {
        drop_menu.style.display='block';
     } 
     else 
     {
        drop_menu.style.display='none';
     }
 }

function show_user_notification(user_id) {


 if(notification_box.style.display=='none' && drop_menu.style.display=='none' )
 {
    notification_box.style.display='block';
 } 
 else 
 {
    notification_box.style.display='none';
 }
  
 //var item = user.find(item => item.id === user_id);
// console.log(item.notification);

 

}