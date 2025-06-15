'use client';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const zoomIn = keyframes`
  from { transform: scale(0.9); }
  to { transform: scale(1); }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  border-radius: 10px;
  width: 90%;
  max-width: 1100px;
  height: 90vh;
  box-shadow: 0 5px 20px rgba(0,0,0,0.3);
  animation: ${zoomIn} 0.3s ease-out;
  display: flex;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: #000;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  line-height: 1;
`;

const Modal = ({ onClose, children }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </Overlay>
  );
};

export default Modal;