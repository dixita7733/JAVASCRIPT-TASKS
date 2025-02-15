// console.log(task_name);

    class Task{
        constructor(taskname, desc, due_date, status){
            this.taskname = taskname;
            this.desc = desc;
            this.due_date = due_date;
            this.status = status;
        };
    
        add_a_new_task(task_name_value, task_description , task_date){
            // <td class="py-2" id="name">Alana Zielinski</td>
            //                 <td class="py-2" id="task">Landing Page Design</td>
            //                 <td class="py-2 text-green-400" id="status">Done</td>
            //                 <td class="py-2 text-red-400" id="priority">High</td>
            //                 <td class="py-2" id="duedate">Yesterday</td>
            //                 <td class="py-2">
            //                     <button class="bg-green-500 text-white px-2 py-1 rounded">Complete</button>
            //                     <button class="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
            //                 </td>
            // let table_body = document.getElementById("table_body");
            // console.log(table_body);
            

        let table_body = document.getElementById("table_body");

        if (!table_body) {
            console.error("Element with ID 'table_body' not found!");
            return;
        }

            let row = document.createElement("tr");

            let table_data_name = document.createElement("td");
            table_data_name.classList.add("py-2", "name");
            table_data_name.innerText = `${task_name_value}`;


            let descTd = document.createElement("td");
            descTd.classList.add("py-2");
            descTd.innerText = task_description;
        
            let dateTd = document.createElement("td");
            dateTd.classList.add("py-2");
            dateTd.innerText = task_date;


            console.log(task_name_value);
            // let name = document.getElementById("name").innerText = `${task_name_value}`;
            console.log(name)
            console.log(task_description);

            console.log(task_date);
            
            table_body.appendChild(row);
            row.appendChild(table_data_name);
            row.appendChild(descTd);
            row.appendChild(dateTd);
                        console.log("Task Added:", task_name_value, task_description, task_date);

        };
   
    
        completed_task(){
            
        };
    
        delete_task(){
    
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
    
    let obj = new Task(task_name_value, task_description_value,  task_date_value);
    obj.add_a_new_task(task_name_value , task_description_value , task_date_value);
    obj.completed_task();
    obj.delete_task();
    obj.display_task();


})

