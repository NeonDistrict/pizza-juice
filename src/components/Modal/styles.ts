import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.04);
`;

export const ModalContainer = styled.div`
  width: 528px;
  height: 495px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 28.53px 23px;
  background-color: ${p => p.theme.black};
`;

export const ModalInsideContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  color: ${p => p.theme.lightRed};
`;

export const CloseHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  color: ${p => p.theme.white};
`;

export const Title = styled.h1`
  margin-bottom: 9px;
`;

export const Divider = styled.div`
  width: 100%;
  border: 2px solid ${p => p.theme.lightRed};
`;

export const Subtitle = styled.h2`
  margin-top: 8px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${p => p.theme.white};
  letter-spacing: 1.8px;
  font-size: 1.125rem;
  font-weight: 400;
  text-transform: uppercase;

  padding-left: 1rem;
  border-left: 2px solid ${p => p.theme.lightRed};
`;
export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseIcon = styled.div``;
