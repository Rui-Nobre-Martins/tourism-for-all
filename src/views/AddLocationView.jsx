import Footer from "../components/Footer"
import NavegationBar from "../components/NavegationBar"


function AddLocationView() {

    const handleSubmit = (e) =>{
        e.preventDefault();
        const inputCountry = e.target.country.value;
        const inputCity = e.target.city.value;
        const inputFrom = e.target.from.value;
        const inputTo = e.target.to.value;
        const textarea = e.target.text.value;
        console.log(" Country: " + inputCountry,"\n","City: " + inputCity,"\n", "From: " + inputFrom,"\n", "to: " + inputTo,"\n", "Why this place? " + textarea);
    }

    return(
        <>
        <NavegationBar/>
        
        <div className="formContainer">
            <div className="formTitle"><h1>Suggest a New Location 📍</h1></div>
            <div className="formContent">

                <form onSubmit={handleSubmit}>
                    <label>Country</label>
                    <input type="text" name="country" placeholder="New Country"/>

                    <label>City</label>
                    <input type="text" name="city" placeholder="Add new City"></input>

                    <label>From</label>
                    <input type="date" name="from" id="start" />

                    <label>To</label>
                    <input type="date" name="to" id="start" />

                    <label>Why this place?</label>
                    <textarea name="text"/>

                    <input className="btnSubmit" type="submit" value="Submit" />
                </form>
            </div>
        </div>


        <Footer/>        
        </>
    )
}

export default AddLocationView