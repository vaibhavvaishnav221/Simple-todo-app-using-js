let todo = ["Eat"];

function traversingTodo() {
    for (let i = 0; i < todo.length; i++) {
        console.log(todo[i]);
    }
}

alert("Welcome to the todo App");

let req = prompt(`Enter your request - "list", "add", "delete", "read": `);

while (true) {

    if (req == "quit") {
        alert("You requested to quit the application");
        break;
    }

    else if (req == "list") {
        console.log(`************************************`);
        traversingTodo();
        console.log(`************************************`);
    }

    else if (req == "add") {
        let newTask = prompt("Enter the task you wanna add: ");
        if (todo.includes(newTask)) {
            alert("This task already exist in the todo list");
        } else {
            todo.push(newTask);
        }
    }

    else if (req == "delete") {
        let deleteTodo = prompt("Enter the task you wanna delete: ");
        if (todo.includes(deleteTodo)) {
            todo.splice(todo.indexOf(deleteTodo), 1);
        } else if (deleteTodo.trim().length == 0) {
            alert("Please enter at least something");
        }
        else {
            alert("This task doesn't exist in the todo list.");
        }
    }

    else {
        "Enter a valid request";
    }

    req = prompt("Enter request again: ");
}