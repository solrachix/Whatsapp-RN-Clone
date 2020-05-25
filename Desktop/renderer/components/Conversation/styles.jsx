import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  width: 86%;
  /* height: 100px; */
  padding: 20px;
  
  background: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0px 0px 10px 5px ${({ theme }) => rgba(theme.colors.quarterly, 0.8)};
  /* box-shadow: 0px 0px 10px 10px ${({ theme }) => 
    rgba(
        lighten(0.2, theme.colors.tertiary),
    0.8)}; */
  border-radius: 4px;

  &:hover{
    border-left-color: ${({ theme }) => theme.colors.primary};
    border-left-style: solid;
    border-left-width: 4px;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Row = styled.div`
  width: ${({ width="100%" }) => width};
  height: 100%;

  display: flex;
  flex-direction: ${({ column=false }) => column ? 'column' : 'row'};
  justify-content: space-between;
  align-items: space-between;
`;