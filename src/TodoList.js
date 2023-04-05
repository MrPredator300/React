//This File does not work Properly rewatch the Lecture 
//Errors: checkedbox after clicking on it it does not strike the sentance
//When Updating the todo list it does not update properly

import React , {useState} from 'react'

const initialState = [
    {
        id:1,
        todoitem: "I have to attend HTML Training",                                 //Some static data at the initial time
        completed: false
    },
    {
        id: 2,
        todoitem: "I have to attend JavaScript Training",
        completed: false
//        completed: true
    },
    {
        id: 3,
        todoitem: "UI Demo @ 11AM Today",
//        completed: false
        completed: true
    }
];

const TodoList = () => {

    const[todos,setTodos] = useState(initialState)
    const[todoitem,setTodoitem] = useState('');

    const[EditId,setEditId] = useState('add');

    const handelInput =(event)=>{
        setTodoitem(event.target.value)
    }

    const deleteItem =(id)=>{
//        console.log(id)
        let remainingTodos = todos.filter((item)=> item.id !== id)
        setTodos(remainingTodos);

//        console.log(remainingTodos)
    }


    const handelSubmit =(event)=>{
        event.preventDefault();                                        //Stopping the page
        console.log(todoitem)

        if(EditId)
        {
            let updatedTodos = todos.map((item,index)=>{
                if(item.id == EditId)
                {
                    return {
                        ...item,
                        todoitem:todoitem                            //event.target.checked here "checked" is a pre-defined word
                    }
                }
                return item;
            });
            setTodoitem(updatedTodos);
            setEditId(null)
            setTodoitem('')
        }
        else
        {
            let addItem = {
                id: todos.length + 1,                                                     //Id has to be dynamic as we add items it will increase
                todoitem: todoitem,
                completed: false
            }
    
            let newTodos = [...todos, addItem];                                 //"...todos" it will help in taking the previous todos copy it into the new todos 
            setTodos(newTodos)
            setTodoitem('')
        }

    }

    const handelCheckBoxes =(event)=>{
        let updatedTodos = todos.map((item,index)=>{
            if(index == event.target.value)
            {
                return {
                    ...item,
                    completed:event.target.checked                              //event.target.checked here "checked" is a pre-defined word
                }
            }
            return item;
        })
//        console.log(updatedTodos)
        setTodos(updatedTodos)

    }

    const EditItem =(id,itemname)=>{
        setTodoitem(itemname);
        setEditId(id)

        console.log(itemname);
        console.log(todoitem);

        let updateTodos = todos.map((item,index)=>{
            if(index == id.target.event)
            {
                return {
                    ...item,
                    todoitem: itemname
                }
            }
            return item;
        })
        setTodos(updateTodos)
    }

    return (
        <div className='blocks'>
            <div className='blocks'>
{/*                <h1>{EditId ? "Update Todo" : "Add Todo"}</h1>           */}
                <h1>Add Todo</h1>
                <form onSubmit={handelSubmit}>
                    <div className='formgroup'>
                        <label>Add todo Item</label>                     
{/*                            <label>{EditId ? "Update Todo Item" : "Add Todo Item"}</label>   */}
                        <input type="text" name="todoitem" value={todoitem} onChange={handelInput} className='formcontrol' />
                    </div>
                    <div className='formgroup'>
                        <input type="submit" value={EditId ? "Update" : "Add"} className='btn' />
                    </div>
                </form>
            </div>
            <div className='block'>
                <h1>Todos List</h1>
                {
                    todos.length > 0 ? <div>
                        {
                            todos.map((item,index)=><p key={index}>
{/*                                <label><input type="checkbox" defaultChecked={item.completed} value={item.id} />{item.todoitem}</label>     {/* defaultChecked={item.completed} checks if the completed is "TRUE" ,if it is true then it is checked by default or else not  */}
                                <label><input onChange={handelCheckBoxes} type="checkbox" defaultChecked={item.completed} value={item.id} />
                                    {item.completed ? <del>{item.todoitem}</del> : item.todoitem}
                                </label> 
                                <button onClick={()=> EditItem(item.id,item.todoitem)}>Edit</button>
                                <button onClick={()=> deleteItem(item.id)}>Delete</button>                            
                           </p>)
                        }
                    </div>: <p>No Todo Items Found</p>                                  //if we remove the items from the static web page "const initialState() = [];" then it will print "No Todo Items Found" 
                }
            </div>
        </div>
    )
}

export default TodoList
