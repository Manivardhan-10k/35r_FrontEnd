let main_list = document.getElementById("list");

const handleAddTodo = () => {
  let input = prompt("enter the todo: ");
  input = input.trim(); //to remove the unnecessary spaces
  if (input !== "") {
    let list_item = document.createElement("li");

    list_item.innerText = input;

    let edit_btn = document.createElement("button");
    edit_btn.innerText = "edit todo";
    edit_btn.addEventListener("click", () => {
      handleEdit(list_item); ////
    });

    let del_btn = document.createElement("button");
    del_btn.innerText = "DELETE";
    del_btn.addEventListener("click", () => {
      handleDelete(list_item, edit_btn, del_btn);
    });
    
    main_list.append(list_item, edit_btn, del_btn);
  }
};
function handleEdit(todo) {
  let edit_val = prompt("enter the edit todo: ", todo.innerText);
  todo.innerText = edit_val;
}

function handleDelete(todo, edit, del) {
  todo.remove();
  edit.remove();
  del.remove();
}

// =   assignment
// ==  loosely equal      values
// === strict equal to    values + datatype
