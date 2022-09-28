import { useNavigate } from 'react-router-dom'

function Form () {
    // Something something react's rule of hooks.
    const navigate = useNavigate();
    
    function handleSubmit () {
        // Potentially, code here for processing form data before POST to server/db.
        navigate("/confirmation");
    }

    return(
        <>
            <form onSubmit={handleSubmit} property="mainContentOfPage" class="container" resource="#wb-main" typeof="WebPageElement">
                <h1>Personal Information Form</h1>
                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                    <label class="control-label required" for="Fname">First Name</label>
                    <input type="text" class="form-control" id="Fname" size="40" placeholder="John"/>
                </div>
                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                    <label class="control-label required" for="Lname">Last Name</label>
                    <input type="text" class="form-control" id="Lname" size="40" placeholder="Doe"/>
                </div>
                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                    <label class="control-label required" for="Colour">Colour</label>
                    <input type="text" class="form-control" id="Colour" size="40" placeholder="Red"/>
                </div>
                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                    <label class="control-label required" for="Colour">Pet Preference</label>
                    <select class="form-control" id="Colour">
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Fish</option>
                    </select>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <label class="control-label" for="feedback">Nice Message</label>
                    <textarea class="form-control" rows={5} cols={50} id="feedback" placeholder="Add message for cookie."></textarea>
                    <br></br>
                    <button type="submit" class="btn btn-default">Submit</button>
                </div>
            </form>
            <br></br>
        </>
    )
}

export default Form;