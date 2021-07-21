import React from 'react'
import fetch_axios from '../../helper/axios'
import Component from './Component'


function DeletePage() {

    const [loading, setLoading] = React.useState(false)

    React.useEffect(()=>{
        fetch_axios.get("/channels")
        .then(res =>{
            console.log('res :>> ', res);
        })
        .catch(err =>{
            console.log('err :>> ', err);
        })
    })



    return (
        <div className="container my-5">
            <a href="/create" className="nav-link">Kanalni yaratish oynasiga o`tish</a>
            <Component />
        </div>
    )
}

export default DeletePage
