import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  contentList:{
    paddingTop:32,
    paddingBottom:64,
  },
  containerList:{
    width: '100%',
  },
  emptyListText:{
    color:'#D4D4D8',
    fontSize:14,
    fontWeight:'400',
  },
  emptyListContent:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});