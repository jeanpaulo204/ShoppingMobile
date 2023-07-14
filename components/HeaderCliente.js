import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { Avatar } from '@rneui/themed';

function TabHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Avatar
          size={45}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        />
        <Text style={styles.userName}>Carlos </Text>
      </View>
      <Icon
        name="cog"
        type="font-awesome"
        color="#4287f5"
        size={54}
        marginBottom={25}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 80,
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
