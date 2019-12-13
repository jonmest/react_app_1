import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
    const [text, setText] = useState('');

    const onChange = (event) => setText(event.target.value);
    
    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'light');
        } else {
            searchUsers(text);
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
                {showClear && 
                <button onClick={clearUsers} className="btn btn-light btn-block">Clear</button>
                }
                </div>
        )

}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search