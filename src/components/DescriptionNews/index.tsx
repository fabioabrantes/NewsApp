import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import { styles } from './styles';

interface DuoInfoProps{
  value:string;
}

export function DescriptionNews({
  value,
}:DuoInfoProps){
  return (
    <View style={styles.container}>
      <Text 
        style={styles.value}
        numberOfLines={10}
      >
        {value? value : "notícia sem descrição"}
      </Text>
    </View>
  );
}