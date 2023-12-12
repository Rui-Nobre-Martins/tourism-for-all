
function SubscribeFrom() {
    return(
        <>
          <div className="formContainer">
            <div className="formTitle">
                <h3>Newsletter</h3>
                <p>Recebe info sobre trips(MUDAR O TEXTO)</p>
            </div>

            <form>
                <div className="formContent">
                    <input type="text" placeholder="Enter your Email" />
                </div>
                <div className="formButton">
                    <button type="submit">Subscribe</button>
                </div>

            </form>
          </div>
        </>
    )
}

export default SubscribeFrom