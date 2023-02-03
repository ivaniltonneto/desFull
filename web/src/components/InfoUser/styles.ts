import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  inset: 0;
`;

export const ModalTech = styled.div`
  width: 20rem;
  height: 28rem;
  background-color: #36454f;
  border-radius: 4px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px;

  margin-bottom: 2px;

  background-color: #343b41;
  border-radius: 4px 4px 0px 0px;

  h3 {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #f8f9fa;
  }

  button {
    background-color: transparent;
    border: none;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    color: white;
    cursor: pointer;
  }

  button:hover {
    color: red;
    cursor: pointer;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;

  p {
    width: 200px;
    height: 35px;
    border-radius: 4px;
    border: 1px solid #dde6e9;
    font-family: 'Source Sans Pro';
  }

  button {
    width: 200px;
    height: 35px;
    font-weight: 700;
    border-radius: 4px;
    font-family: 'Source Sans Pro';
    background-color: #6f8faf;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .delete_button {
    width: 200px;
    height: 35px;
    font-weight: 700;
    border-radius: 4px;
    font-family: 'Source Sans Pro';
    background-color: #6e260e;
    cursor: pointer;
  }
`;
