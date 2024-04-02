import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    //padding: 8,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  title: {
    
   // margin: 24,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7A6448',
  },
  titlee: {
    
   // margin: 24,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7A6448',

  },
  viewInput: {
    borderWidth: 1,
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    color: '#000',
    fontSize: 18,
    height: 60,
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
    //borderWidth: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingBottom: 30,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#B1BA8E',
    marginTop: 35,
    height: 60,
    //width: 200,
  },
  textoBotao: {
    color: '#7A6448',
    fontWeight: 'bold',

  },
 /* botaoResultado: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 10,
    height: 60,
  },*/
  padding: {
    paddingBottom: 60,
  }
});