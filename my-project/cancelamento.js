import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const pedidosIcon = require('./assets/pedidos.png');

export default function Atendimento() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Adicionando o ícone de menu */}
        <Ionicons name="menu" size={30} color="white" style={styles.menuIcon} />
        <Text style={styles.headerText}>Solicitar Atendimento</Text>
      </View>
      
      {/* Adicionando o contêiner com bordas */}
      <View style={styles.borderContainer}>
        {/* Adicionando a imagem abaixo do contêiner azul */}
        <View style={styles.imageContainer}>
          <Image source={pedidosIcon} style={styles.image} />
          {/* Adicionando o texto abaixo da imagem */}
          <Text style={styles.text}>Enviar Pedido médico:</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 80,
    backgroundColor: '#00005D',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Adicionado flexDirection para alinhar o ícone e o texto lado a lado
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, // Adicionado margem para separar o ícone do texto
  },
  menuIcon: {
    position: 'absolute',
    left: 10,
  },
  borderContainer: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
    color: '#202020',
    fontFamily: 'Inter',
    marginLeft: 20,
    marginRight: 'auto',
    textAlign: 'left',
    marginTop: 10,
    fontWeight: 'bold',
  },
});
