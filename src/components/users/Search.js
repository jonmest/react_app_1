import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = ({ showClear, clearUsers }) => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState('');

    const onChange = (event) => setText(event.target.value);
    
    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter something', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }
    return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" value={text} name="text" placeholder="Search users" onChange={onChange}/>
                    <input
                    type="submit"
                    value="Search now"
                    className="btn btn-dark btn-block"
                    ></input>
                </form>
                {githubContext.users.length > 0 && 
                <button onClick={githubContext.clearUsers} className="btn btn-light btn-block">Clear</button>
                }
                </div>
        )

}

export default Search
