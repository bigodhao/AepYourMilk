import { StyleSheet } from "react-native";


// TELA DE LOGIN //
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

  // FIM TELA LOGIN //

  // INÍCIO TELA FORMS //

  backgroundForm: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#75C9EE',
    height: '100%',
  },

  containerForm: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
    paddingTop: 30,
    paddingBottom: 30,
  },

  textTitle: {
    fontSize: 23,
    fontFamily: 'Tahoma',
    color: '#FFF',
    fontWeight: 700,
  },

  optContainer: {
    flexDirection: 'row',
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    marginTop: 7,
    alignItems: 'center',
  },

  outlineRadio: {
width: 28,
height: 28,
borderRadius: 14,
borderColor: '#282828',
borderWidth: 2,
justifyContent: 'center',
alignItems: 'center',
  },

  innerRadio: {
  width: 16,
height: 16,
borderRadius: 8,
backgroundColor: '#282828',
  },

  darkText: {
    fontSize: 14,
    marginLeft: 7,
  },

  btnConfirm: {
    backgroundColor: '#36A420',
width: '90%',
height: 45,
alignItems: 'center',
justifyContent: 'center',
borderRadius: 9,
marginTop: 10,
  },
  
});

export {css};

