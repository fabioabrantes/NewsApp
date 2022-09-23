import {
  View,
  Image,
  ViewProps
} from 'react-native';
import { DescriptionNews } from '../DescriptionNews';
import { Heading } from '../Heading';

import { styles } from './styles';

export interface INews{
  source:{
    id:string;
    name:string;
  };
  author:string;
  title:string;
  description:string;
  url:string;
  urlToImage:string;
  publishedAt:string;
  content:string;
}

interface INewsProps extends ViewProps{
  data:INews;
}

export function NewsCard({data,...rest}:INewsProps){
  return (
    <View style={styles.container} {...rest}>
      <Image 
        source={{uri:data.urlToImage? data.urlToImage : "https://image.shutterstock.com/image-vector/no-image-missing-photo-vector-260nw-2146264007.jpg"}}
        style={styles.cover}
        resizeMode="cover"
      />

      <Heading title={data.title} subtitle={data.publishedAt}/>
      
      <DescriptionNews
        value={data.description}
      />     
    </View>
  );
}