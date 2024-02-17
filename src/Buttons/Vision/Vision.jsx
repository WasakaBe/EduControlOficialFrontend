import React , { useState }from 'react'
import Modal from 'react-modal';
export default function Vision() {
  const playAudio = (text) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  const handleMouseOver = (text) => {
    playAudio(text);
  };

  const handleMouseOut = () => {
    window.speechSynthesis.cancel(); // Detiene la reproducción de audio cuando el mouse sale del elemento
  };
  const [isMisionModalOpen, setMisionModalOpen] = useState(false);
  const openMisionModal = () => {
        setMisionModalOpen(true);
      };
    
      const closeMisionModal = () => {
        setMisionModalOpen(false);
      };

  return (
    <div>
           <div className='btn'>
               <button onClick={openMisionModal}>Visión</button>
       </div>

       
       <Modal
     isOpen={isMisionModalOpen}
     onRequestClose={closeMisionModal}
     contentLabel="Visión Modal"
     style={{
         content: {
           width: '80%',
           height: '30%',
           margin: 'auto',
           border:'none',
           borderStyle:'solid',
           borderColor: 'green',
         }
       }}
   >
     <button onClick={closeMisionModal} className='modal-exit' onMouseOver={() => handleMouseOver('Cerrar')} onMouseOut={handleMouseOut}>X</button>
     <h2 className='modal-mision' onMouseOver={() => handleMouseOver('Mision')} onMouseOut={handleMouseOut}>Visión</h2>
     <p className='modal-texto-mision' onMouseOver={() => handleMouseOver('Ser una institución educativa plenamente consolidada que represente una de las mejores opciones de educación tecnológica del nivel medio superior, donde la calidad sea el eje sobre el cual gire nuestra casa de estudios.')} onMouseOut={handleMouseOut}>Ser una institución educativa plenamente consolidada que represente una de las mejores opciones de educación tecnológica del nivel medio superior, donde la calidad sea el eje sobre el cual gire nuestra casa de estudios.</p>
     
   </Modal>
    </div>
  )
}
