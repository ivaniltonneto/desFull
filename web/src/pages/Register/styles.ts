import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-top: 60px;

  width: 320px;
  height: 530px;
  border: 1px solid #faf9f6;
  border-radius: 4px;


  button {
    width: 200px;
    height: 35px;
    font-weight: 700;
    border-radius: 4px;
    font-family: "Source Sans Pro";
    background-color: #6f8faf;
    cursor: pointer;
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
  font-family: "Source Sans Pro";
  background-color: #868e96;
  margin-top: 25px;

  text-decoration: none;

  color: #f8f9fa;
`;
