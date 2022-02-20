import styled from 'styled-components';

export const Container = styled.section`
  width: 80%;
  height: calc(100vh - 6rem);

  margin: 0 auto;

  color: ${({ theme }) => theme.green};

  text-align: center;

  display: flex;
  align-items: center;

  h2 {
    margin-bottom: 1.5rem;
  }

  div {
    width: 25rem;
    height: 15rem;
    margin: 0 auto;
    
    background: ${({ theme }) => theme.lightGreen};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

    padding: 2rem;

    border-radius: .5rem;
  }

  div > p {
    color: #000;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  p {
    color: #000;
    font-weight: 500;
  }

  // tag a reset 

  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }

  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center; 
  }

  a > img {
    margin-right: .5rem;
  }
`;
