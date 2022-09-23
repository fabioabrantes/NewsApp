import {useState, useEffect} from 'react';
import { Text, FlatList } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import { Background } from '../../components/Background';
import { Loading } from '../../components/Loading';
import { NewsCard,INews } from '../../components/NewsCard';

import {services} from '../../services';

import { styles } from './styles';


export function All() {
  const [newsData, setNewsData] = useState<INews[]>([]);

  useEffect(() => {
    services('general')
    .then(data => {setNewsData(data)})
    .catch(error =>{alert(error)})
  },[]);

  return (
    <Background >
      <SafeAreaView style={styles.container}>
        {newsData.length > 0 ?
          (
            <FlatList
              data={newsData}
              keyExtractor={item=>item.publishedAt}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={[newsData.length > 0 ? styles.contentList : styles.emptyListContent]}
              style={styles.containerList}
              renderItem={({item})=>(
                <NewsCard
                  data={item}
                />
              )}
              ListEmptyComponent={()=>(
                <Text style={styles.emptyListText}>
                  Não há anúncios publicados
                </Text>
              )}
            />
          )
          :
          (
            <Loading />
          )
        } 
      </SafeAreaView>
    </Background>
  );
}