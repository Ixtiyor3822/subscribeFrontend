import React from 'react'

function FormPage() {
    return (
        <div className="container my-5">
            <a href="/delete" className="nav-link">Kanalni o`chirish oynasiga o`tish</a>

            <div className="mb-3 container ">
                <label htmlFor="ssilka" className="form-label">Youtube kanal ssilkasini kiriting</label>
                <input type="text" className="form-control" id="ssilka" placeholder="Youtube kanal ssilkasini kiriting" />
                <button className="btn btn-outline-primary my-3 text-center">Yaratish</button>
            </div>
        </div>
    )
}

export default FormPage
