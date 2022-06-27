import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {TestService} from '../../http_service/test_service';

export const Demo = () => {
  const [dataMovie, setDataMovie] = useState<any[]>([]);
  const getData = useCallback(async () => {
    let result = await TestService.GetDataDemo();
    setDataMovie(result);
  }, []);
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
            setDataMovie([]);
          }}>
          <Text style={styles.buttonText}>{'Reset'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={dataMovie} renderItem={renderItem} />
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
