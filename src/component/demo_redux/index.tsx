import React, {useCallback} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store/hook';
import {fetchData, setState} from './index_redux';

export const DemoRedux = () => {
  const {data} = useAppSelector(reducer => {
    return reducer.demoReducer;
  });
  console.log(data);
  const dispatch = useAppDispatch();
  const getData = useCallback(async () => {
    dispatch(fetchData('hihi'));
  }, [dispatch]);
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{`${item.title}`}</Text>
        <Text>{`${item.releaseYear}`}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity style={styles.button} onPress={getData}>
          <Text style={styles.buttonText}>{'Get Data'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {marginLeft: 10}]}
          onPress={() => {
            dispatch(setState({data: []}));
          }}>
          <Text style={styles.buttonText}>{'Reset'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  itemContainer: {
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#f5e9e9',
    marginVertical: 5,
    padding: 5,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
