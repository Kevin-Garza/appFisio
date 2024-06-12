import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const pedidosIcon = require('./assets/pedidos.png');
const uploadIcon = require('./assets/upload.png');
const enviarIcon = require('./assets/enviar.png');

export default function Atendimento() {
  const [primeiraConsulta, setPrimeiraConsulta] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Adiciona o ícone de menu */}
        <Ionicons name="menu" size={30} color="white" style={styles.menuIcon} />
        <Text style={styles.headerText}>Solicitar Atendimento</Text>
      </View>
      
      {/* Adicionando a imagem abaixo do contêiner azul */}
      <View style={styles.imageContainer}>
        <Image source={pedidosIcon} style={styles.image} />
        {/* Adicionando o texto abaixo da imagem */}
        <Text style={styles.text}>Enviar Pedido médico:</Text>
        
        {/* Adicionando o contêiner com bordas cinzas */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Carregar Documentos:</Text>
            <Image source={uploadIcon} style={styles.upload} />
          </TouchableOpacity>

          {/* Componente booleano para primeira consulta */}
          <View style={styles.booleanContainer}>
            <Text style={styles.booleanText}>É sua primeira consulta?</Text>
            <View style={styles.booleanOptions}>
              <TouchableOpacity
                style={[styles.optionButton, primeiraConsulta === 'S' && styles.optionSelected]}
                onPress={() => setPrimeiraConsulta('S')}
              >
                <Text style={[styles.optionText, primeiraConsulta === 'S' && styles.optionSelectedText]}>S</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, primeiraConsulta === 'N' && styles.optionSelected]}
                onPress={() => setPrimeiraConsulta('N')}
              >
                <Text style={[styles.optionText, primeiraConsulta === 'N' && styles.optionSelectedText]}>N</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Botão abaixo do container bottom */}
        <TouchableOpacity style={styles.bottomButton}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 16, marginRight: 5 , fontWeight: 'bold'}}>Enviar</Text>
            <Image source={enviarIcon} style={styles.enviar} />
          </View>
        </TouchableOpacity>
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
  imageContainer: {
    alignItems: 'center',
    marginTop: 35,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
    color: '#202020',
    marginLeft: 40,
    marginRight: 'auto',
    textAlign: 'left',
    marginTop: 30,
    fontWeight: 'bold',
  },
  bottomContainer: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 30,
    padding: 10,
    paddingBottom: 200,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 8, // Alterado o paddingVertical
    paddingHorizontal: 12, // Alterado o paddingHorizontal
    borderWidth: 1,
    borderColor: 'gray',
  },
  buttonText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginLeft: 10,
  },
  upload: {
    width: 25,
    height: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  booleanContainer: {
    marginTop: 20,
  },
  booleanText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  booleanOptions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  optionButton: {
    paddingHorizontal: 10, // Alterado paddingHorizontal
    paddingVertical: 5, // Alterado paddingVertical
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: '#D3D3D3',
    borderWidth: 1,
    borderColor: 'gray',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionSelected: {
    backgroundColor: '#00005D',
  },
  optionSelectedText: {
    color: 'white',
  },
  bottomButton: {
    backgroundColor: '#00005D',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius:10,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  enviar: {
    marginRight: 0,
  }
});
