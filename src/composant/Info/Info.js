import React from 'react'

const Info = ({match}) => {
    
    return (
        <div>
            <h1>
                 Mon nom est:{match.params.OneContact} 
            </h1>
        </div>
    )
}

export default Info
