import React, { useState } from 'react';
import Header from './Components/Header'
import Upload from './Components/Upload'
import ImageCards from './Components/ImageCards';
import Modal from './Components/Modal';

function App() {
  const [selectedImage, setSelectedImage] : [any, any] = useState(null) ;
  const [selectedImageAlt, setSelectedImageAlt] : [any, any] = useState<string>('') ;

  return <>
      <div className="App">
        <Header />
        <Upload />
        <ImageCards setSelectedImage={setSelectedImage} setSelectedImageAlt={setSelectedImageAlt} />
        { selectedImage && <Modal selectedImage={selectedImage} selectedImageAlt={selectedImageAlt} setSelectedImage={setSelectedImage} />}
      </div>
    </>
}


export default App 