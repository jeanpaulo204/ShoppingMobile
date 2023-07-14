import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function PedidoItem({ item, onPress, onDelete }) {
  return (
    <TouchableOpacity style={styles.row} onPress={() => onPress(item)}>
      <Text style={styles.rowText}>{item.id}</Text>
      <Text style={styles.rowText}>{item.qtd}</Text>
      <TouchableOpacity style={styles.statusContainer} onPress={() => onPress(item)}>
        <Text style={styles.rowText}>{item.status}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  rowText: {
    flex: 1,
    fontSize: 14,
    margin: 6,
    textAlign: 'center',
    color: '#000',
  },
  statusContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#f00',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 8,
  },
  deleteButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PedidoItem;
