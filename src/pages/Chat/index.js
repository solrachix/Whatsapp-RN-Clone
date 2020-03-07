import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';

import temporaryDataa from './temporaryData';
import HeaderItems from './internalComponents/Header';
import Item from '$root/componentes/Item';
import { Container, Title } from './styles';
import Search from '$root/componentes/Search';

const ContainerAnimated = Animated.createAnimatedComponent(Container);

export default function Status() {
    const [marginHeader] = useState(new Animated.Value(0)); 
    const [showText,setShowtext] = useState(true);
    const [friends, setFriends] = useState(temporaryDataa);

    function handleSubmit(value){
        console.log(value)
    }
    return (      
        <ContainerAnimated style={
            {
                transform:[
                    { translateY: marginHeader  }
                ]
            }
        }>
            {/* <View style={{flexDirection:'row',marginHorizontal:20,marginVertical:10}}>
                <Button>
                <Text style={{color:'#6A9697',fontSize:18}}>{showText?"Privacidade":null}</Text>
                </Button>
            </View> */}

            <Title>{showText?"Chat":null}</Title>
            <Search onPress={handleSubmit}/>

            <FlatList 
                data={friends}
                renderItem={({item}) => (
                    <Item key={item.id}
                        avatar={item.image}
                        titleContainer={{
                            firstTitle: item.name,
                            secundTitle: item.lastMessageTime
                        }}
                        spotlight={item.message}
                    />
                )}
                ListHeaderComponent={<HeaderItems/>}
            />
        </ContainerAnimated>
    );
}