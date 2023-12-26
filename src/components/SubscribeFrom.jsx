
function SubscribeFrom() {

    const handleSubmit = (e) =>{
        e.preventDefault();
        const inputEmail = e.target.email.value;
        console.log(inputEmail)
    }
            
    return(
        <>
        <div className="formTipsContainer">
            <div className="formTipsTitle"><h1>Subscribe for more Trvl Tips</h1></div>
            <div className="formTipsContent">

                <form onSubmit={handleSubmit}>
                    <input className="formTipsInput" type="email" id="email" name="email" placeholder="Email"/>
                    <input className="btnSubmit" type="submit" value="Send" />
                </form>
            </div>
        </div>
        </>
    )
}

export default SubscribeFrom