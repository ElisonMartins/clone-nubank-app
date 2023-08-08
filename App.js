import React from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'; // Importando ícones

const windowWidth = Dimensions.get('window').width;

export default function App() {
  const data = [
    { icon: 'heart', text: 'Área Pix' },
    { icon: 'attach-money', text: 'Pagar' },
    { icon: 'cart-outline', text: 'Pegar emprestado' },
    { icon: 'gift', text: 'Transferir' },
    { icon: 'star', text: 'Depositar' },
    { icon: 'heart', text: 'extrato' },
    { icon: 'attach-money', text: 'Novas funçoes' },
    
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="person" size={24} color="white" style={styles.headerIcon} />
        <View style={styles.otherIconsContainer}>
          <Ionicons name="ios-help-circle-outline" size={24} color="white" style={styles.headerIcon} />
          <Feather name="plus-circle" size={24} color="white" style={styles.headerIcon} />
          <AntDesign name="eyeo" size={24} color="white" style={styles.headerIcon} />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.greeting}>Olá, Elison</Text>
      </View>
      <View style={styles.whiteView}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Conta</Text>
          <Text style={styles.infoText}>R$ 3.156,94</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.circleContainer}>
              <View style={styles.circle}>
                <AntDesign name={item.icon} size={24} color="black" />
              </View>
              <Text style={styles.iconText}>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={styles.sliderContainer}
          snapToInterval={windowWidth * 0.3 + 20} // Largura do item + margem
          decelerationRate="fast"
          getItemLayout={(data, index) => (
            { length: windowWidth * 0.3 + 20, offset: (windowWidth * 0.3 + 20) * index, index }
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#830AD1',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: '10%',
  },
  otherIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginHorizontal: 5,
  },
  titleContainer: {
    alignItems: 'left',
    paddingHorizontal: 20,
  },
  greeting: {
    color: 'white',
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  whiteView: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  infoContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'left',
  },
  infoText: {
    color: '#000',
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  sliderContainer: {
    paddingBottom: 20,
  },
  circleContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  circle: {
    width: 70, // Tamanho maior
    height: 70, // Tamanho maior
    borderRadius: 40, // Metade do tamanho
    backgroundColor: '#F0F1F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    fontSize: 14, // Tamanho maior
  },
});
