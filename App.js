import React from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions, ScrollView } from 'react-native';
import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Pix, BarChart, MonetizationOn, Send, AccountBalance, Description, AddCircleOutline } from '@mui/icons-material';

const windowWidth = Dimensions.get('window').width;

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
    paddingHorizontal: 20,
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
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#848389',
    marginVertical: 8,
  },
  sectionTextContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionLine: {
    backgroundColor: '#848389',
    height: 2,
    width: 0,
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#848389',
  },
  sectionIcon: {
    marginLeft: 10,
  },
  extraContentContainer: {
    backgroundColor: '#F0F1F5',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  extraContentText: {
    fontSize: 14,
    color: '#000',
  },
});

export default function App() {
  const data = [
    { icon: <Pix />, text: 'Área Pix' },
    { icon: <BarChart />, text: 'Pagar' },
    { icon: <MonetizationOn />, text: 'Pegar emprestado' },
    { icon: <Send />, text: 'Transferir' },
    { icon: <AccountBalance />, text: 'Depositar' },
    { icon: <Description />, text: 'Extrato' },
    { icon: <AddCircleOutline />, text: 'Novas funçoes' },
  ];

  const extraContent = [
    'Você tem até R$ 12.500,00 disponíveis para empréstimo.',
    'Salve seus amigos da burocracia. Faça um convite...',
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
      <ScrollView style={styles.whiteView}>
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
                {item.icon}
              </View>
              <Text style={styles.iconText}>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={styles.sliderContainer}
          snapToInterval={windowWidth * 0.3 + 20}
          decelerationRate="fast"
          getItemLayout={(data, index) => ({
            length: windowWidth * 0.3 + 20,
            offset: (windowWidth * 0.3 + 20) * index,
            index,
          })}
        />
        <View style={[styles.sectionContainer, { marginTop: 20, marginBottom: 20 }]}>
          <View style={styles.sectionTextContainer}>
            <Text style={styles.sectionTitle}>Meus cartões</Text>
          </View>
          <View style={styles.sectionIcon}>
            <AntDesign name="creditcard" size={24} color="#000" />
          </View>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={extraContent}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={[styles.sectionContainer, styles.extraContentContainer]}>
              <View style={styles.sectionTextContainer}>
                <Text style={[styles.sectionSubtitle, styles.extraContentText]}>{item}</Text>
              </View>
            </View>
          )}
        />
        <View style={styles.sectionContainer}>
          <View style={styles.sectionTextContainer}>
            <Text style={styles.sectionTitle}>Empréstimo</Text>
            <View style={styles.sectionLine}></View>
            <Text style={styles.sectionSubtitle}>Valor disponível de até</Text>
            <Text style={styles.sectionSubtitle}>R$ 25.000,00</Text>
          </View>
          <View style={styles.sectionIcon}>
            <AntDesign name="right" size={24} color="#000" />
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionTextContainer}>
            <Text style={styles.sectionTitle}>Seguros</Text>
            <View style={styles.sectionLine}></View>
            <Text style={styles.sectionSubtitle}>Proteção para você cuidar do que importa</Text>
          </View>
        </View>
        {/* Subseção dentro de Seguros - Seguro Vida */}
        <View style={[styles.sectionContainer, { flexDirection: 'row' }]}>
          <View style={styles.sectionTextContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AntDesign name="hearto" size={24} color="#830AD1" style={{ marginRight: 10 }} />
              <Text style={[styles.sectionTitle, { color: '#830AD1' }]}>Seguro Vida</Text>
            </View>
          </View>
          <View style={[styles.sectionIcon, { marginRight: 20 }]}>
            <Text style={{ color: '#830AD1', fontSize: 18 }}>Conhecer</Text>
          </View>
        </View>
        {/* Subseção dentro de Seguros - Seguro de Celular */}
        <View style={[styles.sectionContainer, { flexDirection: 'row' }]}>
          <View style={styles.sectionTextContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="ios-phone-portrait-outline" size={24} color="#F08E29" style={{ marginRight: 10 }} />
              <Text style={[styles.sectionTitle, { color: '#F08E29' }]}>Seguro de Celular</Text>
            </View>
          </View>
          <View style={[styles.sectionIcon, { marginRight: 20 }]}>
            <Text style={{ color: '#F08E29', fontSize: 18 }}>Conhecer</Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionTextContainer}>
            <Text style={styles.sectionTitle}>Investimentos</Text>
            <View style={styles.sectionLine}></View>
            <Text style={styles.sectionSubtitle}>O jeito Nu de investir:</Text>
            <Text style={styles.sectionSubtitle}>sem asteriscos, linguagem fácil</Text>
            <Text style={styles.sectionSubtitle}>e a partir de R$1. Saiba mais.</Text>
          </View>
          <View style={styles.sectionIcon}>
            <AntDesign name="right" size={24} color="#000" />
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionTextContainer}>
            <Text style={styles.sectionTitle}>Shopping</Text>
            <View style={styles.sectionLine}></View>
            <Text style={styles.sectionSubtitle}>
              Vantagens exclusivas das nossas marcas preferidas
            </Text>
          </View>
          <View style={styles.sectionIcon}>
            <AntDesign name="right" size={24} color="#000" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
