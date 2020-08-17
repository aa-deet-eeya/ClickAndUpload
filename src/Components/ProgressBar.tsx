import React, { useEffect } from 'react'
import useStorage from '../Hooks/useStorage'

const ProgressBar = ({file, setFile} : {file : any, setFile : any})=>{
    const {url , progress} = useStorage(file)
    console.log({url,progress})
    useEffect(() => {
        if(url){
            setFile(null)
        }
    }, [url, setFile])

    return (
        <>
            <div className="progress-bar" style={{ width: progress + '%'}} ></div>
        </>
    )

}

export default ProgressBar