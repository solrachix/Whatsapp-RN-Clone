import styled from 'styled-components/native';

export const Container = styled.View`
    width: 200px;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 20px;
    /* margin-left: 20px; */
    color: ${props => props.theme.colors.text}
`;