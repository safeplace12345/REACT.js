import React from 'react';
const Description = (props) => {
    return <textarea type="text" defaultValue={props.val} onChange={props.onEdit} />;
}
 
export default Description;