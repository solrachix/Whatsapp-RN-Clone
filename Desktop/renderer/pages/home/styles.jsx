import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;

  background: ${({ theme }) => theme.colors.secondary};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;