import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* align-items: center;
  justify-content: center; */
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 30px;
    margin-left: 20px;
    color: ${props => props.theme.colors.text};
    border-bottom-width: 0.5px;
    border-bottom-color: ${props => props.theme.colors.text};
`;