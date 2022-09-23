import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons,Feather} from '@expo/vector-icons';

import { All } from '../screens/All';
import { Business } from '../screens/Business';
import { Health } from '../screens/Health';
import { Sports } from '../screens/Sports';
import { Tech } from '../screens/Tech';

const {Screen,Navigator} = createBottomTabNavigator();

export function AppRoutes(){

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'gray',
        tabBarLabelStyle:{
          fontSize:20
        },
        headerShown:false,     
    }}
    >
      <Screen 
        name='All'
        options={{
          tabBarIcon:({color,size})=>(
             <Feather name='home' color={color} size={size}/>
          )
         }}
        component={All}
      />

      <Screen 
        name='Business'
        options={{
          tabBarIcon:({color,size})=>(
             <Feather name='dollar-sign' color={color} size={size}/>
          )
         }}  
        component={Business}
      />

      <Screen 
        name='Health'
        options={{
          tabBarIcon:({color,size})=>(
             <Feather name='heart' color={color} size={size}/>
          )
         }} 
        component={Health}
      />

      <Screen 
        name='Sports'
        options={{
          tabBarIcon:({color,size})=>(
             <Ionicons name='tennisball-outline' color={color} size={size}/>
          )
         }}  
        component={Sports}
      />

      <Screen 
        name='Tech'
        options={{
          tabBarIcon:({color,size})=>(
             <Ionicons name='hardware-chip-outline' color={color} size={size}/>
          )
         }}  
        component={Tech}
      />
    </Navigator>
  );
}