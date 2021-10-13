export default function(){
    return (
        <>
            <h3>Please fulfill your delivery data</h3>
            <form>
                <div className="form-group">
                    <div className="row">  
                      <div className="col-3">
                        <label>First name:</label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="firstName"/>
                      </div>
                      <div className="col-3">
                        <label>Last name:</label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="lastName"/>
                      </div>
                    </div>  
                </div>  
                <div className="form-group">
                    <div className="row">  
                      <div className="col-3">
                        <label>Street:</label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="street"/>
                      </div>
                      <div className="col-3">
                        <label>Number:</label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="number"/>
                      </div>
                    </div>  
                </div>  
                <div className="form-group">
                    <div className="row">  
                      <div className="col-3">
                        <label>Postal code:</label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="postalCode"/>
                      </div>
                      <div className="col-3">
                        <label>City:</label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="city"/>
                      </div>
                    </div>  
                </div>  
                <div className="form-group">
                    <div className="row">  
                      <div className="col-3">
                        <label>Telephone:</label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="telephone"/>
                      </div>
                      <div className="col-3">
                        <label>E-mail:</label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="email"/>
                      </div>
                    </div>  
                </div>  
            </form>
        </>
    )
}

