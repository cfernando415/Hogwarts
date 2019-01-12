import React from 'react';

const Nav = props => {
    return (
        <input name="q" type="text" placeholder="Search.." value={props.q} onChange={(e) => props.searchHandler(e.target.value)}></input>
    );
}

export default Nav;