import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 4;
  height: 6rem;

  width: 100%;

  #header {
    width: 100%;
    height: 100%;
  }

  #content {
    width: 80%;
    margin: 0 auto;

    height: 6rem;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    height: 4rem;
  }

  nav {
    width: 30rem;
    display: flex;
    align-self: center;
    justify-content: space-between;
  }

  // tag a reset 

  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }

  nav a {
    font-weight: 700;
    color: ${({theme}) => theme.text};

    &:hover {
      color: ${({theme}) => theme.green};
    }
  }

  .bg-scrolling {
    background: rgba(35, 32, 32, 0.24);
    backdrop-filter: blur(9.8px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
`;