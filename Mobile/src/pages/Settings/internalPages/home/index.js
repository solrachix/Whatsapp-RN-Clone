import React from 'react';

import IconFa from '@expo/vector-icons/FontAwesome';
import IconMa from '@expo/vector-icons/MaterialIcons';
import IconEn from '@expo/vector-icons/Entypo';

import Item from '$root/componentes/Item';

import { Container, Ul, Li, Text } from './styles';

export default function Home({ navigation }) {
    const styleIcon = {
        padding: 5,
        borderRadius: 8
    }

  return (
    <Container>
        <Ul>
            <Item
                avatar={'https://avatars1.githubusercontent.com/u/57706806?s=60&v=4'}
                titleContainer={{
                    firstTitle: 'Carlos',
                    secundTitle: null
                }}
                // spotlight={}
            />
        </Ul>
        <Ul>
            <Li onPress={()=> navigation.navigate('Teste')}>
                <IconFa name="star" size={20} 
                    color="#fff"
                    style={[styleIcon, {backgroundColor: "#ee0"}]}
                />
                <Text>
                    Mensagens favoritas
                </Text>
            </Li>
            <Li>
                <IconMa name="computer" size={20} 
                    color="#fff"
                    style={[styleIcon, {backgroundColor: "#25BDB1"}]}
                />
                <Text>Whatsapp Web/Computador</Text>
            </Li>
        </Ul>
        <Ul>
            <Li>
                <IconEn name="key" size={20} 
                    color="#fff"
                    style={[styleIcon, {backgroundColor: "#00A6CE"}]}
                />
                <Text>Conta</Text>
            </Li>
            <Li>
                <IconFa name="whatsapp" size={20} 
                    color="#fff"
                    style={[styleIcon, {backgroundColor: "#25D366"}]}
                />
                <Text>Conversas</Text>
            </Li>
            <Li>
                <IconEn name="notification" size={20} 
                    color="#fff"
                    style={[styleIcon, {backgroundColor: "#FF1233"}]}
                />
                <Text>Notificações</Text>
            </Li>
            <Li>
                <Text>Uso de dados e armazenamento</Text>
            </Li>
        </Ul>
        <Ul>
            <Li>
                <IconFa name="info" size={20} 
                    color="#fff"
                    style={[styleIcon, {backgroundColor: "#00A6Df"}]}
                />
                <Text>Ajuda</Text>
            </Li>
            <Li>
                <IconMa name="favorite-border" size={20} 
                    color="#fff"
                    style={[styleIcon, {backgroundColor: "#FF3377"}]}
                />
                <Text>Convidar um amigo</Text>
            </Li>
        </Ul>
    </Container>
  );
}
