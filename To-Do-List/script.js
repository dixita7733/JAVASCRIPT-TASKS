   
let num = 0;
function mytodolist(){
    let smsg = document.querySelector(".success-msg")


    let additemsbox = document.getElementById("useritem").value;
    console.log(additemsbox)
  
    smsg.innerText = "Todo item updated Successfully!"

    let added_item_box = document.createElement("div");
    added_item_box.setAttribute("class", "added-item")
    // added_item_box.setAttribute("id", "added-all-item")

    let add_para = document.createElement("p");
    add_para.setAttribute("class", "item-define");
    add_para.innerText = additemsbox;
    let added_icon_box = document.createElement("div");
    added_icon_box.setAttribute("class", "features")

    let icon1 = document.createElement("i");
    icon1.setAttribute("class", "fa-solid fa-pen ed-icon");

    let icon2 = document.createElement("i");
    icon2.setAttribute("class", "fa-solid fa-trash ed-icon");

    let editbtn = document.createElement("button");
    editbtn.setAttribute("class", "editbtn");

    let deletebtn = document.createElement("button");
    deletebtn.setAttribute("class", "deletebtn");

    editbtn.append(icon1);
    deletebtn.append(icon2);

     added_icon_box.append(editbtn, deletebtn)
     let main_box = document.getElementById("allofitems")
     added_item_box.append(add_para, added_icon_box);
     main_box.appendChild(added_item_box)

     document.getElementById("useritem").value = "";
        
}

let usermsg = document.getElementById("useritem").addEventListener("click", function(e){
    e.preventDefault();
    let successmsg = document.querySelector(".success-msg")
    successmsg.innerText = ""

})