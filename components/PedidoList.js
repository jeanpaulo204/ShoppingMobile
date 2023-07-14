import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import PedidoItem from './PedidoItem';

function PedidoList({ data, onItemPress, onItemDelete }) {
  const renderItem = ({ item }) => (
    <PedidoItem item={item} onPress={onItemPress} onDelete={onItemDelete} />
  );

  const keyExtractor = (item, index) => `pedido-${item.id}-${index}`; // Chave única com prefixo

  return (
    <View style={styles.tableBorder}>
      <View style={styles.head}>
        <Text style={styles.headText}>ID Produto</Text>
        <Text style={styles.headText}>Qtd</Text>
        <Text style={styles.headTextStatus}>Status</Text>
      </View>

      <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
}

const styles = StyleSheet.create({
  tableBorder: {
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  head: {
    flexDirection: 'row',
    height: 35,
    backgroundColor: '#f1f8ff',
  },
  headText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    margin: 6,
    textAlign: 'center',
    color: '#000',
  },
  headTextStatus: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    margin: 6,
    textAlign: 'center',
    color: '#000',
  },
});

export default PedidoList;
