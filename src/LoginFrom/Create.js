import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './create.css'

let array = [];
const Create = () => {
    const location = useLocation();
    const geting = location.state;
    const [getPass, setgetPass] = useState(geting);
    const [taskName, setTaskName] = useState(getPass ? getPass[0].name : "");
    const [taskDescri, setTaskDescri] = useState(getPass ? getPass[0].description : "");
    const [taskChecked, setTaskChecked] = useState('');
    const [formSummited, displaySubmmited] = useState(false);

    const handleInputChange = (e) => {
        localStorage.setItem('items', JSON.stringify([]))
        if (e.target.name === 'name') {
            setTaskName(e.target.value)
        } else {
            setTaskDescri(e.target.value)
        }
    }

    const checkedFunction = (e) => {
        if (e.target.checked) {
            setTaskChecked(true);
        } else {
            setTaskChecked(false);
        }
    };

    const submit = () => {
        localStorage.clear();
        displaySubmmited(true)
        if (taskName === "" || taskDescri === "")
            return
        console.log(taskName, taskDescri, taskChecked);

        let empty = {
            name: taskName,
            description: taskDescri,
            checked: taskChecked
        };
        if (getPass != null) {
            array[getPass[1]] = empty;
        } else {
            array.push(empty);
        }
        localStorage.setItem('items', JSON.stringify(array))
        setTaskName("");
        setTaskDescri("");
        setTaskChecked("");
    }

    return (
        <>
            <h3><Link className='link' to={'/Home'}>GoTo Home Page</Link></h3>
            <h3><Link className='link' to={'/Login'}>GoTo Login Page</Link></h3>
            <div className='center'>
                <div className='style'>
                    <div className='f'>
                        <form className='d'>
                            <input
                                name='name'
                                value={taskName}
                                onChange={handleInputChange}
                                placeholder="Task Name"
                            />
                            {taskName === "" && formSummited && <div className='name'>Task name is required</div>}
                            <input
                                name='descri'
                                value={taskDescri}
                                onChange={handleInputChange}
                                placeholder="Task Description"
                            />
                            {taskDescri === "" && formSummited && <div className='name'>Task description is required</div>}
                            <input
                                type={'checkbox'}
                                value={taskChecked}
                                id="checked"
                                onChange={checkedFunction}
                            />
                        </form>
                    </div>
                    <div className='btn'>
                        <button onClick={() => submit()}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create