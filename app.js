let todo = ["Eat"];

function traversingTodo() {
    for (let i = 0; i < todo.length; i++) {
        console.log(todo[i]);
    }
}

alert("Welcome to the todo App");

let req = prompt(`Enter your request - "list", "add", "delete", "read", "edit": `);

while (true) {

    if (req == "quit") {                 // To Quit the Application
        alert("You requested to quit the application");
        break;
    }

    else if (req == "list") {           // Read Operation
        console.log(`************************************`);
        traversingTodo();
        console.log(`************************************`);
    }

    else if (req == "add") {            // Create Operation
        let newTask = prompt("Enter the task you wanna add: ");
        if (todo.includes(newTask)) {
            alert("This task already exist in the todo list");
        } else {
            todo.push(newTask);
        }
    }

    else if (req == "delete") {         //  Delete Operation
        let deleteTodo = prompt("Enter the task you wanna delete: ");
        if (todo.includes(deleteTodo)) {
            todo.splice(todo.indexOf(deleteTodo), 1);
        }
        else if (deleteTodo.trim().length == 0) {
            alert("Please at least enter something");
        }
        else {
            alert("This task doesn't exist in the todo list.");
        }
    }

    else if (req == "edit") {           // Update Operation
        let updateTask = prompt("Enter the task you want to update: ");
        if (todo.includes(updateTask)) {
            let modifiedTask = prompt("Update that task: ");
            while (modifiedTask.trim().length == 0) {
                modifiedTask = prompt("Please enter non empty tasks: ");
            }
            todo.splice(todo.indexOf(updateTask), 1, modifiedTask);
        }
        else {
            alert("Entered task doesn't exist in the todo list");
        }
    }

    else {
        req = prompt("Enter a valid request");
    }

    req = prompt("Enter request again: ");
}
