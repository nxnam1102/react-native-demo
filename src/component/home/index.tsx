import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export const Home = (props: any) => {
  const navigation = props.navigation;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 5,
          paddingVertical: 5,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
        onPress={() => {
          navigation.navigate('Demo');
        }}>
        <Text>{`Demo`}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DemoRedux');
        }}
        style={{
          borderWidth: 1,
          borderRadius: 5,
          paddingVertical: 5,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}>
        <Text>{`Demo Redux`}</Text>
      </TouchableOpacity>
    </View>
  );
};
