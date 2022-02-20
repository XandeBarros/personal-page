import styled from 'styled-components';

export const Container = styled.section`
  width: 80%;
  height: calc(100vh - 6rem);

  margin: 0 auto;

  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-around;
`;

export const CardPort = styled.div`
  width: 30rem;
  height: 25rem;

  border-radius: .5rem;

  padding: 1.5rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  h3 {
    color: ${({ theme }) => theme.green};

    margin-bottom: .5rem;
  }

  img {
    width: 100%;

    margin-bottom: .5rem;
  }

  p {
    color: ${({ theme }) => theme.text};
    margin-top: auto;
  }

  // tag a reset 

  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }

  a {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;