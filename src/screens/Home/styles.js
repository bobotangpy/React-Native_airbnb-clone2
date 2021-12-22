import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    // height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    marginLeft: 25,
    width: '70%',
    color: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    marginLeft: 25,
    marginTop: 25,
    width: 250,
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#FFF',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 60,
    zIndex: 999,
  },
  searchBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
