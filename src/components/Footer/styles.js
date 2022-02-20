import styled from 'styled-components';

export const Container = styled.footer`
  width: 80%;
  height: auto;
  margin: 0 auto;

  padding: 1rem;

  text-align: center;
  color: ${({ theme }) => theme.green};
  font-weight: 700;
`;