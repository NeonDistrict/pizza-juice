import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div<{
  ref: any;
}>`
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 50px 100px 80px 100px;
  background-color: ${p => p.theme.black};
`;

export const CloseIcon = styled(MdClose)`
  position: absolute;
  top: 28px;
  right: 23px;
  color: ${p => p.theme.white};
  font-size: 24px;
  cursor: pointer;
`;

export const ModalInsideContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 600;

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
  font-size: 2rem;
  letter-spacing: 3px;
  line-height: 30px;
`;

export const Divider = styled.hr`
  width: 100%;
  height: 2px;
  border: none;
  background-color: ${p => p.theme.lightRed};
`;

export const Subtitle = styled.h2`
  margin-top: 8px;
  font-size: 1.375rem;
  letter-spacing: 2px;
  line-height: 33px;
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

  padding: 0 1.2rem;
  border-left: 2px solid ${p => p.theme.lightRed};
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
