import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#c9c9c9',
    paddingVertical: 10,
    marginHorizontal: 25,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  count: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  num: {
    fontSize: 18,
    paddingHorizontal: 20,
    // paddingTop: 10,
  },
  button: {
    paddingVertical: 7,
    paddingHorizontal: 13,
    borderRadius: 50,
    borderColor: 'darkgrey',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBtn: {
    backgroundColor: '#f15454',
    position: 'absolute',
    bottom: 60,
    height: 60,
    width: '95%',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchTxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  warning: {
    fontSize: 18,
    color: '#ff3838',
    marginVertical: 15,
    marginHorizontal: 25,
  },
});

export default styles;
