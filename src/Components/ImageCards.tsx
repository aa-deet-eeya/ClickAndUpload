import React from 'react'
import useFirestore from '../Hooks/useFirestore'

const ImageCards = ({setSelectedImage, setSelectedImageAlt} : any)=>{
    const {imgs} = useFirestore('images')
    //console.log(imgs) 
    return (
        <>
            <div className="img-card">
                { imgs && imgs.map((img : any)=>{
                    //console.log(img)
                    return (
                        <>
                            <div className="img-wrap" key={img.id} 
                            onClick={()=>{
                                setSelectedImage(img.url)
                                setSelectedImageAlt(img.name)
                            }}>
                                <img src={img.url} alt={img.name}/>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ImageCards