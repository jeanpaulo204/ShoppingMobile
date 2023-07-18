import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Text, Avatar, Header } from 'react-native-elements';

function TabHeader() {
  return (
    <Header
      containerStyle={styles.container}
      leftComponent={
        <View style={styles.leftContainer}>
          <Avatar
            size={45}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          <Text style={styles.userName}>Carlos</Text>
        </View>
      }
      rightComponent={
        <Icon
          name="cog"
          type="font-awesome"
          color="#4287f5"
          size={28}
          onPress={() => console.log('Configurar pressionado')}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    marginBottom: 55,
    borderBottomColor: '#ccc',
    height: 100,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    marginLeft: 8,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default TabHeader;
