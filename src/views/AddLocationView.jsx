import Footer from "../components/Footer"
import NavegationBar from "../components/NavegationBar"
import SubscribeFrom from "../components/SubscribeFrom"

function AddLocationView() {
    return(
        <>
        <NavegationBar/>
        
        <div className="formContainer">
            <div className="formTitle"><h1>Suggest a New Location 📍</h1></div>
            <div className="formContent">
                <form>
                    <label>Country</label>
                    <input type="text" placeholder="New Country"/>

                    <label>City</label>
                    <input type="text" placeholder="Add new City"></input>

                    <label>Check-in</label>
                    <input type="date" name="start" id="start" />

                    <label>Check-out</label>
                    <input type="date" name="start" id="start" />

                    <label>Why this place?</label>
                    <textarea/>

                    <input className="btnSubmit" type="submit" value="Submit" />
                </form>
            </div>
        </div>


        <Footer/>        
        </>
    )
}

export default AddLocationView