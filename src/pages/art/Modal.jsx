import './Modal.css'

function Modal({ isOpen, onClose, image, onNext, onPrevious }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {/* <button className="close-button" onClick={onClose}>×</button> */}
        <button className="nav-button prev" onClick={onPrevious}></button>
        <div className="image-wrapper" onClick={onNext}>  {/* Agregamos el wrapper aquí */}
          <img src={image.src} alt={image.alt} />
        </div>
        <button className="nav-button next" onClick={onNext}></button>
      </div>
    </div>
  );
}

export default Modal;