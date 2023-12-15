
function SubscribeFrom() {
    return(
        <>
        <div className="formTipsContainer">
            <div className="formTipsTitle"><h1>Subscribe for more Trvl Tips</h1></div>
            <div className="formTipsContent">
                <form>
                    <label>Email</label>
                    <input type="email" placeholder="Email"/>

                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
        </>
    )
}

export default SubscribeFrom