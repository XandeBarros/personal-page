import styled from 'styled-components';

export const InfosIntro = styled.div`
  height: 25rem;
  width: 30%;

  padding: 1.5rem;

  border-radius: .5rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  h3 {
    margin-bottom: 2rem;
    color: ${({theme}) => theme.green};
  }

  p {
    margin-bottom: .75rem;
    color: ${({theme}) => theme.text};
    font-weight: 500;
    font-size: 1.25rem;
  }

  p:last-child {
    margin-bottom: 0;
  }

  @media(max-width: 768px) {
    width: 30rem;
  }

  @media(max-width: 425px) {
    width: 90%;
    height: auto;
  }
`;

export const InfosInfo = styled.div`
  height: 25rem;
  width: 30%;

  padding: 1.5rem;

  border-radius: .5rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  h3 {
    margin-bottom: 2rem;
    color: ${({theme}) => theme.green};
  }

  p {
    margin-bottom: .75rem;
    color: ${({theme}) => theme.text};
    font-weight: 500;
    font-size: 1.25rem;
  }

  p:last-child {
    margin-bottom: 0;
  }

  p span {
    color: ${({theme}) => theme.green};
  }

  @media(max-width: 768px) {
    width: 30rem;
  }

  @media(max-width: 425px) {
    width: 90%;
    height: auto;
  }
`;

export const InfosAbility = styled.div`
  height: 25rem;
  width: 30%;

  padding: 1.5rem;

  border-radius: .5rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  @media(max-width: 768px) {
    width: 30rem;
  }

  @media(max-width: 425px) {
    width: 90%;
    height: auto;
  }

  h3 {
    margin-bottom: 2rem;
    color: ${({theme}) => theme.green};
  }

  .skill-bars{
    padding: 25px 30px;
    width: 100%;
    background: ${({theme}) => theme.progressBar};
    box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
    border-radius: 10px;
  }
  .skill-bars .bar{
    margin: 20px 0;
  }
  .skill-bars .bar:first-child{
    margin-top: 0px;
  }
  .skill-bars .bar .info{
    margin-bottom: 5px;
  }
  .skill-bars .bar .info span{
    font-weight: 500;
    color: ${({ theme }) => theme.green};
    opacity: 0;
    animation: showText 0.5s 1s linear forwards;
  }
  @keyframes showText {
    100%{
      opacity: 1;
    }
  }
  .skill-bars .bar .progress-line{
    height: 10px;
    width: 100%;
    background: #f0f0f0;
    position: relative;
    transform: scaleX(0);
    transform-origin: left;
    border-radius: 10px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.05),
                0 1px rgba(255,255,255,0.8);
    animation: animate 1s cubic-bezier(1,0,0.5,1) forwards;
  }
  @keyframes animate {
    100%{
      transform: scaleX(1);
    }
  }
  .bar .progress-line span{
    height: 100%;
    position: absolute;
    border-radius: 10px;
    transform: scaleX(0);
    transform-origin: left;
    background: #6665ee;
    animation: animate 1s 1s cubic-bezier(1,0,0.5,1) forwards;
  }
  .bar .progress-line.front-end span{
    width: 75%;
  }
  .bar .progress-line.back-end span{
    width: 50%;
  }
  .bar .progress-line.fullstack span{
    width: 75%;
  }
  .bar .progress-line.english span{
    width: 80%;
  }
  .progress-line span::before{
    position: absolute;
    content: "";
    top: -10px;
    right: 0;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-bottom-width: 0px;
    border-right-width: 0px;
    border-top-color: #000;
    opacity: 0;
    animation: showText2 0.5s 1.5s linear forwards;
  }
  .progress-line span::after{
    position: absolute;
    top: -28px;
    right: 0;
    font-weight: 500;
    background: #000;
    color: #fff;
    padding: 1px 8px;
    font-size: 12px;
    border-radius: 3px;
    opacity: 0;
    animation: showText2 0.5s 1.5s linear forwards;
  }
  @keyframes showText2 {
    100%{
      opacity: 1;
    }
  }
  .progress-line.front-end span::after{
    content: "75%";
  }
  .progress-line.back-end span::after{
    content: "50%";
  }
  .progress-line.fullstack span::after{
    content: "75%";
  }
  .progress-line.english span::after{
    content: "80%";
  }
`;
