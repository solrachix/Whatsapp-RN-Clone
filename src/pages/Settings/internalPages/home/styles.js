import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/FontAwesome';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.colors.tertiary};
`;

export const Ul = styled.View`
    width: 100%;

    flex-direction: column;

    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 0px;

    border-top-color: ${props => props.theme.colors.quarterly};
    border-top-width: 0.5px;
    border-bottom-color: ${props => props.theme.colors.quarterly};
    border-bottom-width: 0.5px;

    background-color: ${props => props.theme.colors.secundary};
`;

export const Li = styled.TouchableOpacity`
    width: 100%;
    height: 45px;

    /* justify-content: center; */
    align-items: center;
    flex-direction: row;

    margin-left: 25px;

    border-top-color: ${props => props.theme.colors.quarterly};
    border-top-width: 0.5px;
`;

export const Text = styled.Text`
    color: ${props => props.theme.colors.text};
    font-size: 15px;

    margin-left: 5px;
`;