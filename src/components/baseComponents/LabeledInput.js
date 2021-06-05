import React from 'react'
import '../style/LabeledInput.scss'


function LabeledInput(props) {
    return (<div id={props.id} className={props.cssStyle == null ? 'LabeledInput' : props.cssStyle}>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} name={props.name} type={props.type} onChange={props.onChangeHandler}/>
        </div>);
}

export default LabeledInput;