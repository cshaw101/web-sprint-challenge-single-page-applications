import React from "react";
import styled from "styled-components";
import Order from "./Order";

// Styled components for the layout
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px; /* Set the maximum width of the image */
`;

const Title = styled.h1`
  font-size: 36px;
  margin-top: 20px;
`;

const Confirmation = () => {
  return (
    <Container>
      <Image
        src="https://www.pizzaforguys.com/wp-content/uploads/2022/07/Dog-eating-pizza-350x500.jpg"
        alt="Dog eating pizza"
      />
      <Title>Confirmed! Pizza Is On Its Way! </Title>
    </Container>
  );
};

export default Confirmation;

