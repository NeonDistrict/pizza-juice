import React, { useRef, useCallback, useEffect } from 'react';
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
  confirmFunction: () => void;
  title: string;
  subtitle: string;
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

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
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
                buttonType="standard"
                label="Standard"
              />
              <Button
                onClick={() => setShowModal(state => !state)}
                label="Negative"
                buttonType="negative"
              />
            </Actions>
          </ModalContainer>
        </Background>
      ) : null}
    </>
  );
};
