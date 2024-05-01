
function Contact(){
    return(
        <div className ="form">
            <div className = "form-title">
              <h1 >Drop Me A Message</h1>
            </div>
            <form>
              <div className = "label-container">
                  <label> 
                    <input className = "name-input" type="text" name = "name" placeholder = "Name"></input>
                    </label> 

                  <label >
                    <input className = "email-input" type="text" name = "email" placeholder="Email"></input>  
                  </label>

                  <label >
                    <input className = "message-input" type="text" name = "message" placeholder="Message"></input>  
                  </label>

                  <button className = "submit-btn"> Submit </button>
                </div>
            </form>
        </div>
    )
}

export default Contact;