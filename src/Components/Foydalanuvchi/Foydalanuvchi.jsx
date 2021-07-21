import React from 'react';
import Kalonkalar from '..';
import Loading from '../Loader/Loading';

function Foydalanuvchi() {

    const [loading, setLoading] = React.useState(false)

    React.useEffect(() =>{
        setLoading(true)
        
    },[])


    if(loading){
        return <Loading />
    } else{
        return (
            <div className="container">
              <h1 className="h2 text-center m-3">Kanallarimizga obuna bo`ling</h1>
              <Kalonkalar />
            </div>
          );
    }
}

export default Foydalanuvchi;