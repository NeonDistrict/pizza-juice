import React, { useRef, useCallback, useEffect } from 'react';
import { useLockBodyScroll } from 'react-use';
import { Button } from '../Button';
import {
  Actions,
  Background,
  CloseIcon,
  Content,
  Divider,
  Header,
  ModalContainer,
  Subtitle,
  Title
} from './styles';

export interface ModalProps {
  showModal: boolean;
  setShowModal;
  confirmFunction: (...args) => void;
  title: string;
  subtitle?: string;
  children: JSX.Element | JSX.Element[];
}

export const Modal = ({
  showModal,
  setShowModal,
  confirmFunction,
  title,
  subtitle,
  children
}: ModalProps) => {
  const modalRef = useRef();

  const closeModalClickingInBackground = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  useLockBodyScroll(showModal);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModalClickingInBackground} ref={modalRef}>
          <ModalContainer>
            <CloseIcon onClick={closeModal} />
            <Header>
              <Title>{title}</Title>
              <Divider />
              <Subtitle>{subtitle}</Subtitle>
            </Header>
            <Content>{children}</Content>
            <Actions>
              <Button
                onClick={confirmFunction}
                variant="standard"
                label="Standard"
              />
              <Button
                onClick={closeModal}
                label="Negative"
                variant="negative"
              />
            </Actions>
          </ModalContainer>
        </Background>
      ) : null}
    </>
  );
};
