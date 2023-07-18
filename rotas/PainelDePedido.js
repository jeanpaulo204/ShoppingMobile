import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { Card, Button } from 'react-native-elements';
import SearchBar from '../components/SearchBar';
import PedidoList from '../components/PedidoList';
import PedidoModal from '../components/PedidoModal';
import NovoPedidoModal from '../components/NovoPedidoModal';
import HeaderCliente from '../components/HeaderCliente';
import DialogCadastroEstoque from '../components/DialogCadastroEstoque';

function PainelDePedido({ navigation }) {
  const [tableData, setTableData] = useState([
    { data: '12/07', hora: '15:30', id: '456', qtd: '2', status: 'Entregue', entregador: 'João' },
    { data: '13/07', hora: '10:45', id: '012', qtd: '1', status: 'Preparado', entregador: 'Maria' },
    { data: '14/07', hora: '18:20', id: '678', qtd: '3', status: 'Atrasado', entregador: 'Pedro' },
    { data: '14/07', hora: '12:45', id: '012', qtd: '4', status: 'Preparado', entregador: 'Pedro' },
    { data: '14/07', hora: '13:45', id: '311', qtd: '5', status: 'Preparado', entregador: 'Maria' },
  ]);

  const [selectedPedido, setSelectedPedido] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [isNovoPedidoModalVisible, setNovoPedidoModalVisible] = useState(false);
  const [isCadastroEstoqueDialogVisible, setCadastroEstoqueDialogVisible] = useState(false);

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
    setNovoPedidoModalVisible(true);
  };

  const handleNovoPedidoSubmit = (novoPedidoData) => {
    setTableData([...tableData, novoPedidoData]);
    setNovoPedidoModalVisible(false);
  };

  const handleNovoPedidoCancel = () => {
    setNovoPedidoModalVisible(false);
  };

  const handleDeletePedido = (pedido) => {
    const newData = tableData.filter((item) => item.id !== pedido.id);
    setTableData(newData);
    setSelectedPedido(null);
  };

  const handleAbrirCadastroEstoque = () => {
    setCadastroEstoqueDialogVisible(true);
  };

  const handleFecharCadastroEstoque = () => {
    setCadastroEstoqueDialogVisible(false);
  };

  return (
    <View style={styles.container}>
      <HeaderCliente/>
      <Card>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={setSearchText}
          onClearSearch={handleClearSearch}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.buttonSpacer} />
          <Button title="Novo Pedido" onPress={handleNovoPedido} />
          <View style={styles.buttonSpacer} />
          <Button title="Novo Estoque" onPress={handleAbrirCadastroEstoque} />
        </View>

        <PedidoList
          data={tableData}
          onItemPress={handleStatusPress}
          onItemDelete={handleDeletePedido}
        />

        <PedidoModal pedido={selectedPedido} onClose={() => setSelectedPedido(null)} onDelete={handleDeletePedido} />

        <NovoPedidoModal
          visible={isNovoPedidoModalVisible}
          onToggle={handleNovoPedidoCancel}
          onSubmit={handleNovoPedidoSubmit}
        />

        <DialogCadastroEstoque
          visible={isCadastroEstoqueDialogVisible}
          onClose={handleFecharCadastroEstoque}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonSpacer: {
    width: 8,
  },
});

export default PainelDePedido;
