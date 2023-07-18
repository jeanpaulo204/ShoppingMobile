import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Overlay } from 'react-native-elements';

function Footer() {
  const [isDialogVisible, setDialogVisible] = useState(false);

  const handleFooterPress = () => {
    setDialogVisible(true);
  };

  const handleDialogClose = () => {
    setDialogVisible(false);
  };

  return (
    <>
      <TouchableOpacity onPress={handleFooterPress} style={styles.container}>
        <Text style={styles.footerText}>Termos do App</Text>
      </TouchableOpacity>
      <Overlay isVisible={isDialogVisible} onBackdropPress={handleDialogClose}>
        <View style={styles.dialogContainer}>
          <Text h4>Termos do App</Text>
          <Text style={styles.dialogText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat bibendum
            nisi sit amet placerat. Nullam nec magna urna. Sed nec odio a metus pellentesque
            vestibulum. Sed ut leo et sapien facilisis viverra vitae ut odio.
          </Text>
        </View>
      </Overlay>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A659BF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  dialogContainer: {
    padding: 16,
  },
  dialogText: {
    fontSize: 14,
    marginTop: 16,
  },
});

export default Footer;
