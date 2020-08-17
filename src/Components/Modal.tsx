import React from 'react'

const Modal = ({selectedImage, selectedImageAlt, setSelectedImage} : any)=>{
    const handleClick = (e : any)=>{
        if(e.target.classList.contains('backdrop')){
            setSelectedImage(null)
        }
    }
    
    return (
         <>
            <div className="backdrop" onClick={handleClick}>
                <img src={selectedImage} alt={selectedImageAlt} />
            </div>
         </>
     )
}

export default Modal