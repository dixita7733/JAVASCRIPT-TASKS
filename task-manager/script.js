
    class Task{
        // constructor(taskname, desc, due_date, status){
        //     this.taskname = taskname;
        //     this.desc = desc;
        //     this.due_date = due_date;
        //     this.status = status;
        // };
    
        add_a_new_task(task_name_value, task_description , priority, task_date){
 
        let table_body = document.getElementById("table_body");


            let row = document.createElement("tr");
            row.classList.add("rowww");

            let table_data_name = document.createElement("td");
            table_data_name.classList.add("py-2", "name");
            table_data_name.innerText = `${task_name_value}`;


            let descTd = document.createElement("td");
            descTd.classList.add("py-2");
            descTd.innerText = task_description;

        
            let dateTd = document.createElement("td");
            dateTd.classList.add("py-2");
            dateTd.innerText = task_date;

            let prioritytd = document.createElement("td");
            prioritytd.classList.add("py-2");
            prioritytd.innerText = priority;

            let statusTd = document.createElement("td"); 
            statusTd.classList.add("py-2");
            
            // Create a dropdown (select element)
            let statusDropdown = document.createElement("select");
            statusDropdown.classList.add("bg-[#2d2d2d]", "text-white", "p-2", "rounded", "border", "border-gray-700");
            
            // Define status options
            let statuses = ["Pending", "In Progress", "Completed"];
            statuses.forEach(status => {
                let option = document.createElement("option");
                option.value = status;
                option.innerText = status;
                statusDropdown.appendChild(option);
            });
            // console.log(status);


        //     <td class="py-2">
        //     <button class="bg-green-500 text-white px-2 py-1 rounded">Complete</button>
        //     <button class="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
        // </td>

        let btnstd = document.createElement("td");
        btnstd.classList.add("py-2");
        
        let btn_complete = document.createElement("button");
        btn_complete.classList.add("bg-green-500", "text-white", "px-2", "py-1", "rounded" , "completebtn");
        btn_complete.innerText = "Complete";
        
        let btn_delete = document.createElement("button");
        btn_delete.classList.add("bg-red-500", "text-white", "px-2", "py-1", "rounded", "ml-2", "deletebtn");
        btn_delete.setAttribute("id", "btndel")
        btn_delete.innerText = "Delete";
        
        btnstd.append(btn_complete, btn_delete);  
        statusTd.append(statusDropdown);
            


            // console.log(task_name_value);
            // // let name = document.getElementById("name").innerText = `${task_name_value}`;
            // console.log(name)
            // console.log(task_description);

            // console.log(task_date);
            
            table_body.append(row);

            row.append(table_data_name, descTd, statusTd, prioritytd, dateTd, btnstd);

            // console.log("Task Added:", task_name_value, task_description, task_date);

        };
   
    
        completed_task(){
              let cmbtn = document.querySelectorAll(".completebtn").forEach(button => {
              button.addEventListener("click", function(){
                // console.log(btn_complete);
                this.innerText = "Completed";
              });
            });
        };
    
        delete_task(){
            document.querySelectorAll(".deletebtn").forEach(button => {
                button.addEventListener("click", function(){
                    this.closest("tr").remove(); 
                });
            });
        };
        
    
        display_task(){
    
        };
    }

    let form = document.querySelector("#add-task").addEventListener("click", function(){


    let task_name = document.querySelector("#taskName").value
    let task_name_value = task_name;
    // console.log(task_name_value);

    let task_description = document.querySelector("#taskDesc").value
    let task_description_value = task_description;
    // console.log(task_description_value);

    let task_date = document.querySelector("#taskDate").value
    let task_date_value = task_date;

    let priority = document.querySelector("#priority").value
    let priority_value = priority;
    // console.log(task_date_value);
    
    let obj = new Task();
    obj.add_a_new_task(task_name_value , task_description_value ,  priority_value , task_date_value);
    obj.completed_task();
    obj.delete_task();
    obj.display_task();


})

