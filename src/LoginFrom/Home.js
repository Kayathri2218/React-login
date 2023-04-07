import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  const item = JSON.parse(localStorage.getItem('items'));
  const [items, setItems] = useState(item);

  const deletePerson = (del) => {
    let person = [...items];
    person.splice(del, 1);
    setItems(person);
    localStorage.setItem('items', JSON.stringify(person))
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
          {items.map((task, index) => {
            return (<tr key={index}>
              <td>{index + 1}</td>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.checked ? "true" : "false"}</td>
              <td>
                <button>
                  <Link 
                  to='/Create' 
                  state={[{ name: task.name, description: task.description, checked: task.checked }, index]}>
                    Edit
                  </Link>
                </button>
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