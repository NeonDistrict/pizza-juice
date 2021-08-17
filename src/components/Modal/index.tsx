import React, { useState } from 'react';
import { Button } from '../Button';
import { StyledModal } from './styles';
import { Modal as SModal, Header as SHeader } from 'semantic-ui-react';

interface ModalProps {
  title: string;
  subtitle: string;
  description: string;
}

export const Modal = ({ title, subtitle, description }: ModalProps) => {
  const [open, setOpen] = useState(true);
  return (
    <StyledModal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button buttonType="primary" size="medium" label="Show modal" />}
    >
      <div className="modal-container">
        <div className="modal-close"></div>
        <SModal.Header>
          <SHeader className="modal-title">{title}</SHeader>
          <hr className="modal-divider" />
          <SHeader className="modal-subtitle">{subtitle}</SHeader>
        </SModal.Header>
        <SModal.Content>
          <SModal.Description>
            <SHeader class="modal-paragraph" as="p">
              {description}
            </SHeader>
          </SModal.Description>
        </SModal.Content>
        <SModal.Actions className="modal-actions">
          <Button
            size="medium"
            label="Yes, I'm sure"
            onClick={() => setOpen(false)}
            buttonType="standard"
            fullWidth
          />
          <Button
            size="medium"
            label="No, go back"
            fullWidth
            buttonType="negative"
            onClick={() => setOpen(false)}
          />
        </SModal.Actions>
      </div>
    </StyledModal>
  );
};
