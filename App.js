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
      <View style={styles.emprestimoContainer}>
        <View style={styles.emprestimoTextContainer}>
          <Text style={styles.emprestimoTitle}>Empréstimo</Text>
          <View style={styles.emprestimoLine}></View>
          <Text style={styles.emprestimoSubtitle}>Valor disponível de até</Text>
          <Text style={styles.emprestimoValue}>R$ 25.000,00</Text>
        </View>
        <View style={styles.emprestimoIcon}>
          <AntDesign name="right" size={24} color="#000" />
        </View>
      </View>

      <View style={styles.investimentosContainer}>
        <View style={styles.investimentosTextContainer}>
          <Text style={styles.investimentosTitle}>Investimentos</Text>
          <View style={styles.investimentosLine}></View>
          <Text style={styles.investimentosSubtitle}>O jeito Nu de investir:</Text>
          <Text style={styles.investimentosSubsubtitle}>sem asteriscos, linguagem fácil</Text>
          <Text style={styles.investimentosSubsubtitle}>e a partir de R$1. Saiba mais.</Text>
        </View>
        <View style={styles.investimentosIcon}>
          <AntDesign name="right" size={24} color="#000" />
        </View>
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
    width: 70, 
    height: 70, 
    borderRadius: 40, 
    backgroundColor: '#F0F1F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    fontSize: 14, 
  },
  emprestimoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#848389',
  },
  emprestimoTextContainer: {
    flex: 1,
  },
  emprestimoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  emprestimoLine: {
    backgroundColor: '#848389',
    height: 2,
    width: 0,
    marginBottom: 5,
  },
  emprestimoSubtitle: {
    fontSize: 14,
    color: '#848389',
  },
  emprestimoValue: {
    fontSize: 16,
    color: '#000',
  },
  emprestimoIcon: {
    marginLeft: 10,
  },
  investimentosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#848389',
  },
  investimentosTextContainer: {
    flex: 1,
  },
  investimentosTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  investimentosLine: {
    backgroundColor: '#848389',
    height: 2,
    width: 0,
    marginBottom: 5,
  },
  investimentosSubtitle: {
    fontSize: 14,
    
    color: '#848389',
  },
  investimentosSubsubtitle: {
    fontSize: 14,
    color: '#848389',
    marginTop: 2,
  },
  investimentosIcon: {
    marginLeft: 10,
  },
});