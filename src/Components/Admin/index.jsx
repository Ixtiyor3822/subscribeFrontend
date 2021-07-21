import React from 'react'

function Admin() {

    const [user, setUser] = React.useState({
        login: "",
        parol: ""
    })

    const changeHandler = (event) =>{
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
    }


    const submitHandler = () =>{
        if(user.login==="root" && user.parol ==="root"){
            localStorage.setItem("root", "Foydalanuvchi")
        }
    }

    setTimeout(() => {
        localStorage.removeItem("root")
    }, 1000*60*1);

    return (
        <div className="container py-5">
            <div className="container my-5 p-5">
                <div className="mb-3">
                    <input type="text" className="form-control" name="login" placeholder="Loginni kiriting" onChange={changeHandler} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" name="parol" placeholder="Parolni kiriting" onChange={changeHandler} />
                </div>
                <div className="mb-3 text-center" >
                    <a href="/create" className="btn btn-outline-success px-5" onClick={submitHandler} type="submit" > Submit </a>
                </div>
            </div>
        </div>
    )
}

export default Admin
