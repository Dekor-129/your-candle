import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import MyForm from '../MyForm';

export default function MyModal({show, onHide, onClose, showSuccess}) {
  return (
    <>
      <Modal
        show = {show}
        onHide= {onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Заполните форму заказа
          </Modal.Title>
          <CloseButton onClick={()=> onClose(false)} />
        </Modal.Header>
        <Modal.Body>
          <MyForm onClose={onClose} showSuccess={showSuccess}/>
        </Modal.Body>
      </Modal>
    </>
  );
} 