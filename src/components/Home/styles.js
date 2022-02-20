import styled from 'styled-components';

import bg from '../../assets/images/wallpaper/wallpaper-home.png';

export const Background = styled.main`
  width: 100%;
  height: calc(100vh - 6rem);
  margin: 0 auto;

  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  width: 80%;
  height: calc(100vh - 6rem);
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div:first-child {
    width: 6rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div svg {
    height: 2rem;
    fill: #408A43;
  }

  div svg:first-child {
    margin-bottom: 2rem;
  }
`;

export const Description = styled.div`
  margin: auto 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 25rem;
  width: 24rem;

  padding: 1.5rem;

  border-radius: .5rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  h1 {
    font-size: 2.5rem;
    color: ${({theme}) => theme.text};
  }

  h2 span {
    font-size: 2rem;
    color: ${({theme}) => theme.green};

    border-right: 0.2rem solid ${({theme}) => theme.green};
  }

  p {
    color: ${({theme}) => theme.chocolate};
    font-weight: 700;
    font-size: 1.25rem;
  }
`;

export const Parallax = styled.div`
  height: 35rem;
  width: 45rem;

  padding: 10rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  img {
    position: relative;
    width: 8rem;
  }
`;