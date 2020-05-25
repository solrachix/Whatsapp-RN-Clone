import styled from 'styled-components/native';

export const Container = styled.View`
    width: 91%;
    height: 35px;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;

    align-items: baseline;
    justify-content: space-between;
    flex-flow: column wrap;
    align-content: space-between;
`;
export const TouchableOpacity = styled.TouchableOpacity`
    flex-direction: row;
    /* margin-top: 20px; */
    margin-left: 10px;
`;

export const Text = styled.Text`
    font-size: 18px;
    color: ${props => props.theme.colors.primary};
`;