import React from 'react';
import Resident from '../Components/Resident';
const Residents = props => {
    const residents = props.casts.filter(cast => cast.house === props.house).map((character, i) => <Resident key={i} character={character} updateHandler={props.updateHandler}/>);
    return (
        <ul>
            {residents}
        </ul>
    )
}
export default Residents;