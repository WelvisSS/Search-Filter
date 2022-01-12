import React from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  StyleSheet,
  StatusBar
} from 'react-native';

import users from './src/users'

const App = () => {

  const [searchText, setSearchText] = React.useState('');
  const [list, setList] = React.useState(users);

  React.useEffect(() => {
    if (searchText === '') {
      setList(users)
    } else {
      setList(
        users.filter(
          (item) =>
            item.Nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      )
    }

  }, [searchText])


  const itemList = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}>{item.Nome}</Text>
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: '#3866C4', flex: 1 }}>
      <StatusBar backgroundColor="#3866C4" />

      <TextInput
        placeholder='Pesquisar'
        style={styles.input}
        value={searchText}
        onChangeText={(t) => setSearchText(t)}
      />

      <FlatList
        data={list}
        keyExtractor={list.Codigo}
        renderItem={itemList}
      />

    </View>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2F37',
    height: 50,
    marginHorizontal: 10,
    marginVertical: 2,
    borderRadius: 10,

  },
  textContainer: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 15
  },
  input: {
    textAlign: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
  }
});