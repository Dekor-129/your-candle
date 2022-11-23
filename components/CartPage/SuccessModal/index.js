import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SuccessModal({ showSuccess }) {

  return (
    <>
      <Modal show={showSuccess.show} onHide={showSuccess.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Успешно</Modal.Title>
        </Modal.Header>
        <Modal.Body>Поздравляем Вас с успешным заказом! В ближайшее время с вами свяжется менеджер для его подтверждения</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=> showSuccess.handleClose(false)}>
            Продолжить покупки
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
