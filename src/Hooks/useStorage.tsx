import {useState, useEffect} from 'react'
import {projectStorage, projectFirestore, timestamp} from '../Firebase/config'


const useStorage= (file : any)=>{
    const [progress, setProgress] : [any, any]= useState(0) 
    const [error, setError] : [any , any] = useState(null) 
    const [url, setUrl]= useState(null)

    useEffect(()=>{
        //References
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images')

        storageRef.put(file).on('state_changed', (snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes)*100
            setProgress(percentage)
        }, err=>{
            setError(err)
        }, async()=>{
            const url = await storageRef.getDownloadURL()
            const createdAt = timestamp()
            collectionRef.add({
                url,
                createdAt ,
                name : file.name
            })
            setUrl(url)
        })
    },[file])


    return {progress, url, error}
}

export default useStorage