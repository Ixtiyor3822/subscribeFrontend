import React from 'react'

function Component({ channelId, id, deleteChannel}) {


    return(
        <div className="col border p-3 m-3"> 
            <div class="g-ytsubscribe" data-channelid={channelId} data-layout="full" data-theme="dark"
                data-count="default">
            </div>
            <br />
            <button className="btn btn-danger my-2" onClick={() => deleteChannel(id)} >O`chirish</button>
        </div>
    )
}

export default Component
