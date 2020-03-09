import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    margin-left: 17px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    font-weight: bold;
    font-size: 15px;
    margin-left: 10px;
    color: ${props => props.theme.colors.primary}
`;