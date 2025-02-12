   
let num = 0;
function mytodolist(){
    num++;
    console.log("num:" + num);
    let smsg = document.querySelector(".success-msg");


    let additemsbox = document.getElementById("useritem").value;
    console.log(additemsbox)
  
    smsg.innerText = "Todo item updated Successfully!"

    var added_item_box = document.createElement("div");
    added_item_box.setAttribute("class", "added-item")
    added_item_box.setAttribute("id", num)

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
    // deletebtn.setAttribute("onclick", "delfunc()")


    editbtn.append(icon1);
    deletebtn.append(icon2);

     added_icon_box.append(editbtn, deletebtn)
     let main_box = document.getElementById("allofitems")
     added_item_box.append(add_para, added_icon_box);
     main_box.appendChild(added_item_box)

     document.getElementById("useritem").value = "";

     deletebtn.addEventListener("click", function(e){
        added_item_box.remove();
     })

     editbtn.addEventListener("click", function(e){
        let new_para = prompt("Edit your item: ")
        add_para.innerText = new_para;
     })

        
}

// function delfunc(){
//     let deletebtnv = document.querySelector(".deletebtn");
//     let parentDiv = deletebtnv.parentNode; 

//     console.log(parentDiv);
//     let parentdivofdiv = parentDiv.closest("div").id;
//     console.log(parentdivofdiv);
    

// //    let del = document.querySelector(".added-item");
//    // del.style.display = "none";
// //    del.remove();

//     // let idp = deletebtnv.class;
//     // alert(idp);

// }

// function delfunc() {
//     let deletebtnv = document.getElementsByClassName("deletebtn")[0]; // Select the delete button by class name
//     let parentDiv = deletebtnv.parentNode; // Get the parent node of the delete button

//     console.log(parentDiv); // Log the parent node to console for verification

//     // Now you can perform actions on the parent node as needed, for example:
//     // parentDiv.style.display = "none"; // Hide the parent div
//     // parentDiv.remove(); // Remove the parent div from the DOM
// }


let usermsg = document.getElementById("useritem").addEventListener("click", function(e){
    e.preventDefault();
    let successmsg = document.querySelector(".success-msg")
    successmsg.innerText = ""

    // let edit = document.getElementsByClassName("editbtn")
    // edit.

});

// let delitem = document.getElementsByClassName("deletebtn")
// delitem.addEventListener("click", function(e){
//     e.preventDefault();
//     let del = document.getElementsByClassName("added-item");
//     console.log(del)
//     del.remove();

//     // let edit = document.getElementsByClassName("editbtn")
//     // edit.

// });

