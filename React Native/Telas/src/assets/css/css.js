import { StyleSheet } from "react-native";


// CONTEÚDOS GERAIS //
const css = StyleSheet.create({
  logo1x: {
    width: '162px',
    height: '135px',
  },

  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#75C9EE',
  },

  containerLogo: {
flex: 1,
justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 60,
  },

  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 9,
    padding: 10,
  },

  btnSubmit: {
backgroundColor: '#3275C7',
width: '90%',
height: 45,
alignItems: 'center',
justifyContent: 'center',
borderRadius: 9,
marginTop: 10,

  },

  submitText: {
color: '#FFF',
fontSize: 18,
  },

  btnRegister: {
marginTop: 20,
marginBottom: 5,
  },

  registerText: {
color: '#FFF',
fontWeight: 'bold',
  },

  // FIM CONTEÚDOS GERAIS //

  // INÍCIO TELA CADASTRO //

  btnCadastrar: {
    backgroundColor: '#3275C7',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    marginTop: 10,
  }
});

export {css};

