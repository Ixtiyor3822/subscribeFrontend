import React from 'react'

function Role({setMatn}) {

    const changeradio = (event) =>{
        setMatn(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div>
            <div className="container text-center my-5">
                <div className="form-check d-flex">
                    <input type="radio" name="radio" id="button1" value="create" className="form-check-input" onChange={changeradio} defaultChecked={true}/>
                    <label htmlFor="button1" className="form-check-label" >Create page</label>
                </div>
                <div className="form-check d-flex">
                    <input type="radio" name="radio" id="button2" value="delete" className="form-check-input" onChange={changeradio} />
                    <label htmlFor="button2" className="form-check-label" >Delete page</label>
                </div>
            </div>
        </div>
    )
}

export default Role
