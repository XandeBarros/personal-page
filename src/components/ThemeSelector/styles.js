import styled from 'styled-components';

export const Content = styled.div`
  position: fixed;
  top: 10rem;
  right: 1rem;

  width: 4rem;
  height: 4rem;

  background: rgba(122, 220, 124, 0.33);
  border-radius: 50%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.2px);
  -webkit-backdrop-filter: blur(9.2px);
  border: 1px solid rgba(122, 220, 124, 0.36);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  img {
    width: 2.5rem;
    align-self: center;
  }

  @media(max-width: 425px) {
    top: 90%;
    right: 80%;
  }
`;
