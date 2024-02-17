import React , { useState }from 'react'
import Modal from 'react-modal';
import './Mision.css'
export default function Mision() {
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
               <button onClick={openMisionModal}>Misión</button>
       </div>

       
       <Modal
     isOpen={isMisionModalOpen}
     onRequestClose={closeMisionModal}
     contentLabel="Misión Modal"
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
     <h2 className='modal-mision' onMouseOver={() => handleMouseOver('Mision')} onMouseOut={handleMouseOut}>Misión</h2>
     <p className='modal-texto-mision' onMouseOver={() => handleMouseOver('Contribuir en la formación integral de individuos dotados de valores, conocimientos, habilidades y destrezas en el ámbito tecnológico y en el nivel bachillerato, que le permite incorporarse al trabajo productivo basado en competencias laborales como agente de cambio y /o continuar sus estudios en el nivel superior')} onMouseOut={handleMouseOut}>Contribuir en la formación integral de individuos dotados de valores, conocimientos, habilidades y destrezas en el ámbito tecnológico y en el nivel bachillerato, que le permite incorporarse al trabajo productivo basado en competencias laborales como agente de cambio y /o continuar sus estudios en el nivel superior.</p>
     
   </Modal>
    </div>
  )
}
