import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const Upload = ()=>{
    const [file, setFile] : [any, any] = useState(null)
    const [error, setError] : [any, any] = useState(null)

    const changeHandler = (evnt: any)=>{
        let selected  = evnt.target.files[0] 
        if(selected && (selected.type === 'image/png' || selected.type === 'image/jpeg')) {
            setFile(selected)
            setError(null)
            console.log(selected)
        } else {
            setFile(null)
            setError('Wrong File type, select image file (png or jpeg)')
        }
    }
    return (
        <>
            <form>
                <input type="file" onChange={changeHandler} />
                <div className='output'>
                    {error && <div className="error">{error}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
            </form>
        </>
    )
}


export default Upload