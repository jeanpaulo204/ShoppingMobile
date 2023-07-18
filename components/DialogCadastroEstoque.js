import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Modal, Text, TouchableOpacity } from 'react-native';

const DialogCadastroEstoque = ({ visible, onClose, onSalvar }) => {
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');
  const [id, setId] = useState('');

  const handleSalvar = () => {
    if (produto.trim() === '' || valor.trim() === '' || id.trim() === '') {
      // Verifica se os campos estão vazios e não permite salvar
      return;
    }

    const novoEstoque = { produto, valor, id };
    onSalvar(novoEstoque);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Cadastro de Estoque</Text>
          <TextInput
            style={styles.input}
            placeholder="Produto"
            value={produto}
            onChangeText={setProduto}
          />
          <TextInput
            style={styles.input}
            placeholder="Valor"
            value={valor}
            onChangeText={setValor}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="ID"
            value={id}
            onChangeText={setId}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSalvar} style={styles.buttonSalvar}>
              <Text style={styles.textButton}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.buttonFechar}>
              <Text style={styles.textButton}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  buttonSalvar: {
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginLeft: 8,
  },
  buttonFechar: {
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginLeft: 8,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DialogCadastroEstoque;
