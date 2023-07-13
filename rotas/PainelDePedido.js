import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function PainelDePedido() {
  const [tableData, setTableData] = useState([
    { data: '12/07', hora: '15:30', id: '456', qtd: '2', status: 'Entregue', entregador: 'João' },
    { data: '13/07', hora: '10:45', id: '012', qtd: '1', status: 'Preparado', entregador: 'Maria' },
    { data: '14/07', hora: '18:20', id: '678', qtd: '3', status: 'Atrasado', entregador: 'Pedro' },
    { data: '14/07', hora: '12:45', id: '012', qtd: '4', status: 'Preparado', entregador: 'Pedro' },
    { data: '14/07', hora: '13:45', id: '311', qtd: '5', status: 'Preparado', entregador: 'Maria' },
  ]);

  const [selectedPedido, setSelectedPedido] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const [novoPedidoData, setNovoPedidoData] = useState({ data: '', hora: '', id: '', qtd: '', status: '', entregador: '' });
  const [novoEstoqueData, setNovoEstoqueData] = useState({ data: '', hora: '', id: '', qtd: '', status: '', entregador: '' });
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);
  const [pedidoToDelete, setPedidoToDelete] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => handleStatusPress(item)}
    >
      <Text style={styles.rowText}>{item.id}</Text>
      <Text style={styles.rowText}>{item.qtd}</Text>
      <TouchableOpacity
        style={styles.statusContainer}
        onPress={() => handleStatusPress(item)}
      >
        <Text style={styles.rowText}>{item.status}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteConfirmation(item)}
      >
        <Icon name="trash" size={20} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const handleStatusPress = (pedido) => {
    setSelectedPedido(pedido);
  };

  const handleSearch = () => {
    const filteredData = tableData.filter((item) => item.id.includes(searchText));
    setTableData(filteredData);
  };

  const handleClearSearch = () => {
    setSearchText('');
    setTableData([
      { data: '12/07', hora: '15:30', id: '456', qtd: '2', status: 'Entregue', entregador: 'João' },
      { data: '13/07', hora: '10:45', id: '012', qtd: '1', status: 'Preparado', entregador: 'Maria' },
      { data: '14/07', hora: '18:20', id: '678', qtd: '3', status: 'Atrasado', entregador: 'Pedro' },
      { data: '14/07', hora: '12:45', id: '012', qtd: '4', status: 'Preparado', entregador: 'Pedro' },
      { data: '14/07', hora: '13:45', id: '311', qtd: '5', status: 'Preparado', entregador: 'Maria' },
    ]);
  };

  const handleNovoPedido = () => {
    setDialogVisible(true);
  };

  const handleNovoEstoque = () => {
    setDialogVisible(true);
  };

  const handleDialogSubmit = () => {
    if (novoPedidoData.id && novoPedidoData.qtd && novoPedidoData.status && novoPedidoData.entregador) {
      setTableData([...tableData, novoPedidoData]);
      setDialogVisible(false);
      setNovoPedidoData({ data: '', hora: '', id: '', qtd: '', status: '', entregador: '' });
    }
    if (novoEstoqueData.id && novoEstoqueData.qtd && novoEstoqueData.status && novoEstoqueData.entregador) {
      setTableData([...tableData, novoEstoqueData]);
      setDialogVisible(false);
      setNovoEstoqueData({ data: '', hora: '', id: '', qtd: '', status: '', entregador: '' });
    }
  };

  const handleDialogCancel = () => {
    setDialogVisible(false);
    setNovoPedidoData({ data: '', hora: '', id: '', qtd: '', status: '', entregador: '' });
    setNovoEstoqueData({ data: '', hora: '', id: '', qtd: '', status: '', entregador: '' });
  };

  const handleDeleteConfirmation = (pedido) => {
    setPedidoToDelete(pedido);
    setDeleteConfirmationVisible(true);
  };

  const handleDeletePedido = () => {
    const newData = tableData.filter((item) => item.id !== pedidoToDelete.id);
    setTableData(newData);
    setDeleteConfirmationVisible(false);
    setPedidoToDelete(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por ID"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onEndEditing={handleSearch}
        />
        {searchText.length > 0 && (
          <TouchableOpacity style={styles.clearButton} onPress={handleClearSearch}>
            <Text style={styles.clearButtonText}>Limpar</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonSpacer} />
        <Button title="Novo Pedido" onPress={handleNovoPedido} />
        <View style={styles.buttonSpacer} />
        <Button title="Novo Estoque" onPress={handleNovoEstoque} />
      </View>

      <View style={styles.tableBorder}>
        <View style={styles.head}>
          <Text style={styles.headText}>ID Produto</Text>
          <Text style={styles.headText}>Qtd</Text>
          <Text style={styles.headTextStatus}>Status</Text>
        </View>

        <FlatList
          data={tableData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Modal
        visible={selectedPedido !== null}
        transparent={true}
        onRequestClose={() => setSelectedPedido(null)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Informações do Pedido</Text>
            <Text style={styles.modalText}>Data: {selectedPedido?.data}</Text>
            <Text style={styles.modalText}>Hora: {selectedPedido?.hora}</Text>
            <Text style={styles.modalText}>Pedido: {selectedPedido?.id}</Text>
            <Text style={styles.modalText}>Entregador: {selectedPedido?.entregador}</Text>
            <Text style={styles.modalText}>Status: {selectedPedido?.status}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setSelectedPedido(null)}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={dialogVisible}
        transparent={true}
        onRequestClose={handleDialogCancel}
      >
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

      <Modal
        visible={deleteConfirmationVisible}
        transparent={true}
        onRequestClose={() => setDeleteConfirmationVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Excluir Pedido</Text>
            <Text style={styles.modalText}>Deseja realmente excluir o pedido {pedidoToDelete?.id}?</Text>
            <View style={styles.modalButtonContainer}>
              <Button title="Cancelar" onPress={() => setDeleteConfirmationVisible(false)} />
              <Button title="Excluir" onPress={handleDeletePedido} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginRight: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  clearButton: {
    backgroundColor: '#ccc',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  clearButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSpacer: {
    width: 8,
  },
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
    marginRight: 55,
    textAlign: 'center',
    color: '#000',
  },


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

export default PainelDePedido;
