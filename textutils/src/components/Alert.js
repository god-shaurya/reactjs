import React from 'react'

function Alert(props) {
    return (
        <div className='container' style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong>: {props.alert.msg}
            
        </div>}
        
</div>
    )
}

export default Alert
