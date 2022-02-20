import styled from 'styled-components';

export const Container = styled.section`
  width: 80%;
  height: calc(100vh - 6rem);
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;

  cursor:pointer;

  .active {
    box-shadow: ${({theme}) => theme.green} 0px 20px 30px -10px;
  }
`;

export const CardBox = styled.div`
  height: 70%;
  width: 40rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Card = styled.div`
  height: 8rem;
  width: 60%;

  border-radius: .5rem;

  background: ${({theme}) => theme.lightGreen};

  padding: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  div h3 {
    margin-bottom: 1rem;
  }

  div p {
    font-weight: 500;
  }
`;
