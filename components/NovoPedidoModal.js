import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const NovoPedidoModal = ({ visible, onToggle, onSubmit }) => {
  const [novoPedidoData, setNovoPedidoData] = useState({
    data: '',
    hora: '',
    id: '',
    qtd: '',
    status: '',
    entregador: '',
  });

  const handleDialogSubmit = () => {
    if (
      novoPedidoData.id &&
      novoPedidoData.qtd &&
      novoPedidoData.status &&
      novoPedidoData.entregador
    ) {
      onSubmit(novoPedidoData);
      setNovoPedidoData({
        data: '',
        hora: '',
        id: '',
        qtd: '',
        status: '',
        entregador: '',
      });
    }
  };

  const handleDialogCancel = () => {
    setNovoPedidoData({
      data: '',
      hora: '',
      id: '',
      qtd: '',
      status: '',
      entregador: '',
    });
    onToggle();
  };

  return (
    <Modal visible={visible} transparent={true} onRequestClose={handleDialogCancel}>
      <View style={styles.dialogContainer}>
        <View style={styles.dialogContent}>
          <Text style={styles.dialogTitle}>Cadastrar</Text>
          <TextInput
            style={styles.dialogInput}
            placeholder="Data"
            value={novoPedidoData.data}
            onChangeText={(text) => setNovoPedidoData({ ...novoPedidoData, data: text })}
          />
          <TextInput
            style={styles.dialogInput}
            placeholder="Hora"
            value={novoPedidoData.hora}
            onChangeText={(text) => setNovoPedidoData({ ...novoPedidoData, hora: text })}
          />
          <TextInput
            style={styles.dialogInput}
            placeholder="ID Produto"
            value={novoPedidoData.id}
            onChangeText={(text) => setNovoPedidoData({ ...novoPedidoData, id: text })}
          />
          <TextInput
            style={styles.dialogInput}
            placeholder="Quantidade"
            value={novoPedidoData.qtd}
            onChangeText={(text) => setNovoPedidoData({ ...novoPedidoData, qtd: text })}
          />
          <TextInput
            style={styles.dialogInput}
            placeholder="Status"
            value={novoPedidoData.status}
            onChangeText={(text) => setNovoPedidoData({ ...novoPedidoData, status: text })}
          />
          <TextInput
            style={styles.dialogInput}
            placeholder="Entregador"
            value={novoPedidoData.entregador}
            onChangeText={(text) => setNovoPedidoData({ ...novoPedidoData, entregador: text })}
          />
          <View style={styles.dialogButtonContainer}>
            <Button title="Cancelar" onPress={handleDialogCancel} />
            <Button title="Salvar" onPress={handleDialogSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    width: '80%',
  },
  dialogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  dialogInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  dialogButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default NovoPedidoModal;
