import {
  View, 
  Text,
  ViewProps
} from 'react-native';
import moment from 'moment';

import { styles } from './styles';

interface HeadingProps extends ViewProps {
  title:string;
  subtitle:string;
}

export function Heading({title, subtitle, ...rest}:HeadingProps){
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {moment(subtitle).format("DD/MM/YYYY - HH:MM")}
      </Text>
    </View>
  );
}