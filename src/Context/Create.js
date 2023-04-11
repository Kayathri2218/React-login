import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './create.css'
import { stateContext } from './Data';

const array = [];
const Create = () => {
    const {state,dispatch} = useContext(stateContext);
    const [taskName, setTaskName] = useState(state.edit ? state.edit[0]?.name : "");
    const [taskDescri, setTaskDescri] = useState(state.edit ? state.edit[0]?.description : "");
    const [taskChecked, setTaskChecked] = useState(false);
    const [formSummited, displaySubmmited] = useState(false);
    console.log("state", state);

    const handleInputChange = (e) => {
        if (e.target.name === 'name') {
            setTaskName(e.target.value)
        } else {
            setTaskDescri(e.target.value)
        }
    }

    const checkedFunction = (e) => {
        setTaskChecked(true)
        if (e.target.checked) {
            setTaskChecked(true);
        } else {
            setTaskChecked(false);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        displaySubmmited(true)
        let empty = {
            name: taskName,
            description: taskDescri,
            checked: taskChecked
        };
        if(state.edit?.length>0) {
            array[state.edit[1]] = empty
            dispatch({type:"Edit", payload : []})
        }else {
            array.push(empty)
        }
        setTaskName("");
        setTaskDescri("");
        setTaskChecked("");
        displaySubmmited(false)
    }

    return (
        <>
            <h3><Link className='link' to={'/Home'}>GoTo Home Page</Link></h3>
            <h3><Link className='link' to={'/Login'}>GoTo Login Page</Link></h3>
            <div className='center'>
                <div className='style'>
                    <div className='f'>
                        <form className='d' onSubmit={submit}>
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
                            <button onClick={() => dispatch({type:"Form",payload:array})}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create