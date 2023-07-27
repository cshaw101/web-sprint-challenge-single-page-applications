import React from "react";
import { useNavigate, Link } from "react-router-dom"; 
import styled from 'styled-components'; 

const PizzaImageURL = "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*";

const Container = styled.div`
  position: relative;
  height: 100vh;
`;

const BackgroundImage = styled.div`
  background-image: url(${PizzaImageURL});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
`;

const Title = styled.h1`
  font-size: 60px; 
  margin-bottom: 40px; 
`;

const Button = styled.button`
  padding: 16px 32px;
  background-color: red;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Nav = styled.nav`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const NavLink = styled(Link)`
  margin-right: 10px;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Homepage = () => {
  const navigate = useNavigate();

  const toOrder = () => {
    navigate('/pizza');
  };

  return (
    <Container>
      <BackgroundImage />
      <Content>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="pizza">Order</NavLink>
        </Nav>
        <Title>Bloomtech Eats</Title>
        <Button onClick={toOrder} id="order-pizza">Order Pizza</Button>
      </Content>
    </Container>
  );
};

export default Homepage;


