import React from 'react'

function Signin() {
    return (
        <div>
            <form method='POST' action='/api/login'>
                <input type="text" placeholder='admin' />
                <input type="password" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Signin
