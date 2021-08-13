
const Modal = ({ showModal, handleModal, children }) => {
    return (
        <div 
            className={showModal ? 'modalWrapper active' : 'modalWrapper'} 
            onClick={handleModal}
        >
           <div className='modalWrapper-body' onClick={(e) => e.stopPropagation()}>
            {children}
           </div>
        </div>
    )
}

export default Modal
