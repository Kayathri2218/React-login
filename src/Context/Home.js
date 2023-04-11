import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './home.css'
import { stateContext } from './Data';

const Home = () => {
  const {state:{forms},dispatch} = useContext(stateContext);

  const Navigate = useNavigate();
  const edit = (task,index) => {
    Navigate('/Create');
    dispatch({type: "Edit", payload:[task,index]})
  }

  const deletePerson = (del) => {
    let person = [...forms];
    person.splice(del, 1);
    dispatch({
      type: "Form",
      payload : person
    });
  }

  return (
    <div>
      <h3><Link className='link' to={'/Login'}>GoTo Login Page</Link></h3>
      <h3><Link className='link' to={'/Create'}>GoTo Create Page</Link></h3>
      <div className='table'>
        <table>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Complete</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {forms.map((task, index) => {
            return (<tr key={index}>
              <td>{index + 1}</td>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.checked ? "true" : "false"}</td>
              <td>
                <button onClick={() => edit(task,index)}>edit</button>
              </td>
              <td><button onClick={() => deletePerson(index)}>Delete</button></td>
            </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default Home