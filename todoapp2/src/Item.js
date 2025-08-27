import React, { useState } from 'react'

const Item = ({ content }) => {
    const [isDone, setIsDone] = useState(false)
    return (
        <ls>
            <input type='checkbox' onChange={() => {
                setIsDone(!isDone)
            }} />
            <span style={
                { textDecoration: isDone ? 'line-through' : 'none' }
            }>{content}</span>
        </ls>
    )
}

export default Item