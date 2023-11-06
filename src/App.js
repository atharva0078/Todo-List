import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import UpdateTaskForm from './components/UpdateTaskForm';
import Todo from './components/Todo';

function App()
{
  const [todo, setTodo] = useState([
    // Do not use dbolue quotes in react
    // { "id": 1, "title": "Task 1", "status": false },
    // { "id": 2, "title": "Task 2", "status": false }
  ])

  //temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  //Add Task
  const addTask = () =>
  {
    if (newTask)
    {
      let num = todo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setTodo([...todo, newEntry])
      setNewTask('');
    }

  }
  //Delete Task
  const deleteTask = (id) =>
  {
    let newTasks = todo.filter(task => task.id !== id)
    setTodo(newTasks)
  }

  //Mark task as done or complted
  const markDone = (id) =>
  {
    let newTasks = todo.map(task =>
    {
      if (task.id === id)
      {
        return ({ ...task, status: !task.status })
      }
      return task
    })
    setTodo(newTasks)

  }

  //Cancel update
  const cancelUpdate = () =>
  {
    setUpdateData('');
  }

  //Change task for update
  const changeTask = (e) =>
  {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  //Update Task
  const updateTask = () =>
  {
    let filterRecords = [...todo].filter(task => task.id !== updateData.id)
    let updatedObject = [...filterRecords, updateData]
    setTodo(updatedObject);
    setUpdateData('');
  }
  return (

    <div className='container App'>
      <br /><br />
      <h2>Todo List App</h2>
      <br /><br />

      {/* Update Task */}
      {updateData && updateData ? (
        // <>
        //   < div className='row'>
        //     <div className='col'>
        //       <input
        //         value={updateData && updateData.title}
        //         onChange={(e) => changeTask(e)}
        //         className='form-control form-control-lg'
        //       />
        //     </div>
        //     <div className='col-auto'>
        //       <button
        //         onClick={updateTask}
        //         className='btn btn-lg btn-success mr-20'
        //       >Update</button>
        //       <button
        //         className='btn btn-lg btn-warning'
        //       >Cancel</button>
        //     </div>
        //   </div>
        //   <br />
        // </>
        <UpdateTaskForm
          updateData={updateData}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
          changeTask={changeTask}

        />
      ) : (
        // <>
        //   <div className='row'>
        //     <div className='col'>
        //       <input
        //         value={newTask}
        //         onChange={(e) => setNewTask(e.target.value)}
        //         className='form-control' form-control-lg
        //       />
        //     </div>
        //     <div className='col-auto'>
        //       <button
        //         onClick={addTask}
        //         className='btn btn-lg btn-success'>
        //         Add Task</button>
        //     </div>
        //   </div>

        // </>
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )
      }



      {/* < div className='row'>
                <div className='col'>
                    <input
                        value={updateData && updateData.title}
                        onChange={(e) => changeTask(e)}
                        className='form-control form-control-lg'
                    />
                </div>
                <div className='col-auto'>
                    <button
                        onClick={updateTask}
                        className='btn btn-lg btn-success mr-20'
                    >Update</button>
                    <button
                        className='btn btn-lg btn-warning'
                    >Cancel</button>
                </div>
                <br /> */}



      {/* Add Task
          <div className='row'>
            <div className='col'>
            <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className='form-control' form-control-lg
                />
                </div>
                <div className='col-auto'>
                <button
                onClick={addTask}
                className='btn btn-lg btn-success'>
                Add Task</button>
                </div>
          </div> */}

      {/* Display Todos */}
      {todo && todo.length ? '' : 'No Tasks'}
      {/* {
          todo && todo
            .sort((a, b) => a.id > b.id ? 1 : -1)
            .map((task, index) =>
            {
              return (
                <React.Fragment key={task.id}>
                  <div className='col taskBg'>
                    <div className={task.status ? 'done' : ''}>
                      <span className='taskNumber'>{index + 1}</span>
                      <span className='taskText'>{task.title}</span>
                    </div>
                    <div className='iconWrap'>
                      <span title='Completed / Not Completed'
                        onClick={(e) => markDone(task.id)}
                      >
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>

                      {task.status ? null : (
                        <span title='Edit'
                          onClick={() => setUpdateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false
                          })}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </span>
                      )}

                      <span title='Delete'
                        onClick={() => deleteTask(task.id)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>

                    </div>
                  </div>
                </React.Fragment>
              )
            })
          } */
        <Todo
          todo={todo}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}

        />

      }


    </div >
  )
}








export default App;