import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PedidoModal = ({ pedido, onClose, onDelete }) => {
  return (
    <Modal visible={pedido !== null} transparent={true} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Informações do Pedido</Text>
          <Text style={styles.modalText}>Data: {pedido?.data}</Text>
          <Text style={styles.modalText}>Hora: {pedido?.hora}</Text>
          <Text style={styles.modalText}>Pedido: {pedido?.id}</Text>
          <Text style={styles.modalText}>Entregador: {pedido?.entregador}</Text>
          <Text style={styles.modalText}>Status: {pedido?.status}</Text>
          <TouchableOpacity style={styles.modalButton} onPress={onClose}>
            <Text style={styles.modalButtonText}>Fechar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={() => onDelete(pedido)}>
            <Text style={styles.modalButtonText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#ccc',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 16,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PedidoModal;
