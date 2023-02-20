import {NavLink} from 'react-router-dom'

function ErrorPage(){
    return (
        <div>
            <h1>Error page!</h1>
            <p>Return to <NavLink to="/">Homepage</NavLink></p>
        </div>
    )
}
export default ErrorPage