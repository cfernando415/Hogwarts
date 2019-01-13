import React from 'react';

const Nav = props => {
    return (
        <div className="topNav">
            <label>Woogle: </label><input name="q" type="text" placeholder="Search.." value={props.q} onChange={(e) => props.searchHandler(e.target.value)}></input>
        </div>
    );
}

export default Nav;