const Modal = ({ showModal, handleModal, children }) => (
  <div
    className={showModal ? 'modalWrapper active' : 'modalWrapper'}
    onClick={handleModal}
  >
    <div className="modalWrapper-body" onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  </div>
);

export default Modal;
