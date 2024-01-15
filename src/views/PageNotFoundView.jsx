
import NavegationBar from "../components/NavegationBar"

function PageNotFoundView () {
    
    return (
        <>
        <NavegationBar/>
        <div className="page404Container">
            <h1>Error</h1>
            <h2>404 Page Not Found</h2>
            <p>Travel to our navigation bar and fly to our website!</p>   
    
            <div className="imgPagenotFoundContainer">
                <img className="imgPageNotFound" src="/image/pagenotfound.gif" alt="Page Not Found Image" />
            </div>
        </div>        
        </>
    )
}

export default PageNotFoundView;