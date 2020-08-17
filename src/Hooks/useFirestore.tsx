import {useState, useEffect} from 'react'
import {projectFirestore} from '../Firebase/config'

const useFirestore = (collection : any)=>{
    const [imgs , setImgs] : [any , any] = useState([]) 

    useEffect(()=>{
        const collections = projectFirestore.collection(collection)
        //.orderBy('createAt','desc')
        .onSnapshot((snap)=>{
            //console.log(snap)
            let images : any[] = [] 
            snap.forEach((img : any)=>{
                //console.log(img.id)
                images.push({
                    ...img.data(),
                    id : img.id
                })
            })

            setImgs(images)
        })

        return()=> collections() // after getting all images and invoke cleanup 
    }, [collection])

    return {imgs}
}

export default useFirestore