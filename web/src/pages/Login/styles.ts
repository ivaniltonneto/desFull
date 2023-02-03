import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-top: 60px;

  width: 520px;
  height: 450px;
  border: 1px solid #faf9f6;
  border-radius: 4px;

  form {
    margin-top: 20px;
  }

  button {
    width: 200px;
    height: 35px;
    font-weight: 700;
    border-radius: 4px;
    font-family: 'Source Sans Pro';
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(82, 98, 167, 0.274);
    color: #fff;
  }

  p {
    color: #814141;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 35px;
  font-weight: 700;
  border-radius: 4px;
  font-family: 'Source Sans Pro';
  background-color: #868e96;

  text-decoration: none;

  color: #f8f9fa;
`;

export const DivEye = styled.div`
  background-color: transparent;
  position: relative;

  div {
    width: 40px;
    height: 40px;
    bottom: 20px;
    left: 170px;
    border-radius: 50%;
    position: absolute;
    background: transparent;
    cursor: pointer;
  }
`;
