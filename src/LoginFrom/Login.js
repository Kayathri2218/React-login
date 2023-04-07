import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
  const [userNAME, setName] = useState("");
  const [userPASS, setPass] = useState("");
  const [login, setLogin] = useState(false);

  const userDetails = [
    {
      userName: 'AAAAA',
      userPassword: '11111'
    },
    {
      userName: 'BBBBB',
      userPassword: '22222'
    },
    {
      userName: 'CCCCC',
      userPassword: '33333'
    },
    {
      userName: 'DDDDD',
      userPassword: '44444'
    },
    {
      userName: 'EEEEE',
      userPassword: '55555'
    },
  ]

  const Navigate = useNavigate()

  const submit = () => {
    const valueU = userDetails.find((value) => value.userName == userNAME && value.userPassword == userPASS)
    if (valueU) {
      Navigate("/Home");
    } else {
      alert("Error")
    }
  }

  const inputHandle = (e) => {
    console.log(userNAME, userPASS);
    if (e.target.name === 'name') {
      setName(e.target.value)
    } else {
      setPass(e.target.value)
    }
  }

  return (
    <>
      <div>
        <h3><Link className='link' to={'/Home'}>Home</Link></h3>
        <h3><Link className='link' to={'/Create'}>Create</Link></h3>
      </div>
      <div className='FN'>
        <div className='FN-Div'>
          <div className='f'>
            <from className='from'>
              <input
                name='name'
                value={userNAME}
                onChange={inputHandle}
                placeholder="User Name"
              />
              {userNAME === "" && login && <div className='name'>Name is required</div>}
              <input
                name='Password'
                type={'password'}
                value={userPASS}
                onChange={inputHandle}
                placeholder="Password"
              />
              {userPASS === "" && login && <div className='name'>Password is required</div>}
            </from>
          </div>
          <div className='btn'>
            <button onClick={() => submit()}>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login