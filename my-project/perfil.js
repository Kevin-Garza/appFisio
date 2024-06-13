import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Image } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import setaImg from './assets/seta.png';
import perfilImg from './assets/perfil.png';

// Estilos
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const HeaderContainer = styled.View`
  width: 100%;
  height: 80px; /* Aumentando a altura do header para 80px */
  background-color: #00005D;
  flex-direction: row; /* Para alinhar itens na linha */
  align-items: center;
  padding-left: 10px; /* Adiciona um padding para afastar do lado esquerdo */
`;

const HeaderText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 105px;
`;

const imagemmage = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const Input = styled.View`
  width: 80%;
  margin-bottom: 20px;
`;

const TextInput = styled.TextInput`
  height: 40px;
  border-width: 1px;
  border-color: #ccc;
  margin-bottom: 20px;
  padding-left: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 4px #00000040;
  elevation: 5;
  font-family: 'Inter-Regular';
  font-style: italic;
`;

const LoginButton = styled.TouchableOpacity`
  width: 80%;
  height: 58px;
  border-radius: 10px;
  background: #00005D;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #00000033;
  box-shadow: 4px 4px #00000040;
`;

const LoginButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  margin-top: 5px;
  font-family: 'Inter-Bold';
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const FakeInput = styled.View`
  height: 40px;
  border-color: #ccc;
  border-width: 1px;
  margin-bottom: 20px;
  padding: 5px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
`;

const Containerbotao = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding-right: 10px;
`;

const Botaomf = styled.TouchableOpacity`
  width: 25px;
  padding: 5px;
  background-color: ${(props) => (props.selected ? '#00005D' : '#DDDDDD')};
  border-radius: 5px;
  margin-horizontal: 5px;
`;

const Falsoinputtexto = styled.Text`
  font-size: 14px;
  color: #565656;
  position: absolute;
  left: 10px;
  top: 10px;
  font-family: 'Inter-Regular';
`;

const Textomf = styled.Text`
  color: ${(props) => (props.selected ? '#FFFFFF' : '#000000')};
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  font-family: 'Inter-Regular';
`;

const EspacoPicker = styled.View`
  height: 40px;
  width: 100%;
  border-width: 1px;
  border-color: #ccc;
  margin-bottom: 20px;
  padding-left: 100px;
  padding-bottom: 5px;
  padding-top: 5px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 4px #00000040;
  elevation: 5;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-style: bold;
`;

const Estadocivil = styled(Picker)`
  height: 40px;
  width: 100%;
  align-items: center;
`;

const PickerTexto = styled.Text`
  position: absolute;
  left: 3px;
  top: 5px;
  font-size: 15px;
  color: #565656;
  background-color: #fff;
  padding: 0px 10px;
  font-style: italic;
`;

const PickerItem = styled(Picker.Item)`
  align-self: center;
`;

const ResetPasswordBox = styled.TouchableOpacity`
  height: 40px;
  width: 100%;
  border-width: 1px;
  border-color: #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  background-color: #00005D;
  box-shadow: 0px 2px 4px #00000040;
  elevation: 5;
  justify-content: center;
  align-items: center;
  font-style: italic;
`;

const ResetPasswordText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-style: bold;
  font-family: 'Inter-Regular';
`;

export default function Cadastro() {
    const [generoselect, setgenero] = useState('');
    const selectGenero = (generomf) => {
      setgenero(generomf);
    };
    const [selectedValue, setSelectedValue] = useState("solteiro");
  
    return (
      <Container>
          
        <HeaderContainer>
          <TouchableOpacity onPress={() => { /* Adicione a lógica de voltar aqui */ }}>
            <Image source={setaImg} style={{ width: 22, height: 22 }} />
          </TouchableOpacity>
          <HeaderText>Meu Perfil</HeaderText>
        </HeaderContainer>

      <ScrollContainer contentContainerStyle={{ alignItems: 'center' }}>
        <Image source={perfilImg} style={{margin:30}}/>

        <Input>
          <TextInput placeholder='Nome completo: ' />
          <TextInput placeholder='CPF: 000.000.000-00 ' />
          <TextInput placeholder='Cep: 73807775' />
          <TextInput placeholder='UF: GO' />
          <TextInput placeholder='Endereço: Rua das ruas' />
          <TextInput placeholder='Numero da casa: 6969' />
          <TextInput placeholder='Email: email@email.com' />
          <TextInput placeholder='Password: ***************' secureTextEntry={true} />
          <TextInput placeholder='Confirm password: ***************' secureTextEntry={true} />
          <TextInput placeholder='Data de Nascimento: 00/00/0000' />

          <FakeInput>
            <Falsoinputtexto>Sexo:</Falsoinputtexto>
            <Containerbotao>
              <Botaomf selected={generoselect === 'M'} onPress={() => selectGenero('M')}>
                <Textomf selected={generoselect === 'M'}>M</Textomf>
              </Botaomf>
              <Botaomf selected={generoselect === 'F'} onPress={() => selectGenero('F')}>
                <Textomf selected={generoselect === 'F'}>F</Textomf>
              </Botaomf>
            </Containerbotao>
          </FakeInput>

          <TextInput placeholder='Profissão: ' />
          <TextInput placeholder='Telefone: (61) 9 9999-9999' />

          <EspacoPicker>
            <PickerTexto>Estado Civil: </PickerTexto>
            <Estadocivil
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <PickerItem label="Solteiro" value="solteiro" />
              <PickerItem label="Casado" value="casado" />
              <PickerItem label="Separado" value="separado" />
              <PickerItem label="Divorciado" value="divorciado" />
              <PickerItem label="Viúvo" value="viuvo" />
            </Estadocivil>
          </EspacoPicker>

          <ResetPasswordBox>
            <ResetPasswordText>Redefinir Senha</ResetPasswordText>
          </ResetPasswordBox>

          {/* Novos campos de texto */}
          <TextInput placeholder='Senha Atual: ' />
          <TextInput placeholder='Nova Senha: ' />
          <TextInput placeholder='Repetir a Nova Senha: ' />
        </Input>

        <LoginButton>
          <LoginButtonText>Salvar Alterações</LoginButtonText>
        </LoginButton>
      </ScrollContainer>
    </Container>
  );
}
