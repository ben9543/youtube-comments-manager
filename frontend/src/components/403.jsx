import React from "react";
import { useLocation, Link } from "react-router-dom";

const Error403 = () => {
    let location = new URLSearchParams(useLocation().search);
    return(
        <div>
        <h1>403</h1>
        <h3>Unauthorized</h3>
        <p>Error: {location.get('error')}</p>
        <Link to="/">Back to home</Link>
        <br/>
        </div>
    )
}

export default Error403;