import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;

  background-color: #36454f;
  border-bottom: 1px solid #faf9f6;

  button {
    width: 60px;
    height: 32px;
    border-radius: 4px;
    border: none;
    margin-right: 50px;

    cursor: pointer;

    background-color: #242424;
  }
`;

export const DivLogo = styled.div`
  margin-left: 50px;
`;
