import { Animated } from 'react-native';

import styled from 'styled-components/native';

export const Switcher = styled.TouchableHighlight`
    position: relative;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    margin: 0px 0;

    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    align-content: center;

    background-color: #FFFFFF;
`;

export const Label = styled(Animated.View)`
    position: relative;
    width: 100px;
    height: 35px;
    border-radius: 25px;
    background-color: #1E1E1E;

    /* transition: 1s; */
    /* outline: none; */
    position: absolute;
    /* top: 50%; */
    /* transform: translateY(-50%); */
    left: 10px;
    top: 0;
    right: 0;
`;

export const Input = styled.TextInput`
    /* -webkit-transition: .25s -.1s; */
    transition: .25s -.1s;
    /* -webkit-appearance: none;
        -moz-appearance: none; */
    appearance: none;
    position: relative;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    background-color: #1E1E1E;
    outline: none;
    /* font-family: 'Oswald', sans-serif; */

    &&:before, &&:after {
        z-index: 2;
        position: absolute;
        top: 50%;
        /* -webkit-transform: translateY(-50%); */
                transform: translateY(-50%);
        color: #FFFFFF;
    }
    &&:before {
        content: 'ON';
        left: 20px;
    }
    &&:after {
        content: 'OFF';
        right: 20px;
    }

    &&:checked {
        background-color: #FFFFFF;
    }

    &&:checked:before {
        color: #FFFFFF;
        /* -webkit-transition: color .5s .2s; */
        transition: color .5s .2s;
    }
    &&:checked:after {
        color: #CCCCCC;
        /* -webkit-transition: color .5s; */
        transition: color .5s;
    }
`;