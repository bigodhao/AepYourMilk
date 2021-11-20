import { Prompt_600SemiBold } from "@expo-google-fonts/prompt";
import { StyleSheet } from "react-native";


// TELA DE LOGIN //
const css = StyleSheet.create({
  logo1x: {
    width: '162px',
    height: '135px',
  },

  logoPrincipal: {
  width: 60,
  height: 60,
  borderRadius: 30,
  shadowColor: '#75C9EE',
  shadowRadius: 5,
  textShadowOffset: { height: 10},
  shadowOpacity: 0.5,
  borderWidth: 3,
  borderColor: "#75C9EE"
  },

  nomeUsuario: {
    fontSize: 17,
  //  fontFamily: 'Tahoma',
    color: '#75C9EE',
    //fontWeight: 600,
    paddingStart: 17,
    paddingTop: 5,
  },

  notificacao: {
paddingStart: 150,
paddingTop: 5,
  },

  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#75C9EE',
  },

  backgroundPrincipal: {
    height: '100%',
    backgroundColor: '#f5fcff',
    width: '100%',
  },
  
  headerPrincipal: {
  height: '15%',
  flexDirection: "row",
  paddingHorizontal: 15,
  paddingVertical: 20,
  },

  conteudoPrincipal: {
    flex: 5,
    backgroundColor: 'green',
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
 //   fontFamily: 'Tahoma',
    color: '#FFF',
   // fontWeight: 700,
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

  btnAddContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3275C7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
    position: "absolute",
    shadowColor: "#3275C7",
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },

  graficocss: {
    width: '90%',
    marginStart: 17,
    marginTop: 10,
    marginBottom: 5,
  },

  tituloGrafico: {
      fontSize: 17,
      color: '#75C9EE',
      paddingStart: 82,
      paddingTop: 7,
    },
});

export {css};

