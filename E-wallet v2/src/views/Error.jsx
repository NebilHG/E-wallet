import { useNavigate } from "react-router-dom";


function Error(){
const navigate = useNavigate();

function navHome(){
    navigate('/');
}

    return(
        <><h1>404</h1>
        <h2>Not all who wonder are lost</h2>
        <button onClick={navHome}> Get back home</button>
        </>
    )
}

export default Error;