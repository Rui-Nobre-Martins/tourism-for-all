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
            <h1 className="formTitle">Suggest a New Location 📍</h1>
            <div className="formContent">

                <form onSubmit={handleSubmit}>
                    <label>Country</label>
                    <input required type="text" name="country" placeholder="New Country"/>

                    <label>City</label>
                    <input required type="text" name="city" placeholder="Add new City"></input>

                    <label>From</label>
                    <input type="date" name="from"/>

                    <label>To</label>
                    <input type="date" name="to"/>

                    <label>Why this place?</label>
                    <textarea name="text"/>

                    <input className="btnSubmit" type="submit" value="Submit" />
                </form>
            </div>
        </div>

        <div className="mapLocation">
            <img className="mapLocationImage" src="/image/mapabgremove.jpeg" alt="Map illustration" />    
        </div> 
        <Footer/>        
        </>
    )
}

export default AddLocationView