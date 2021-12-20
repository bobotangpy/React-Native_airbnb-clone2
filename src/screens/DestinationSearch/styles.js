import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // margin: 20,
    padding: 20,
    height: '100%',
    backgroundColor: '#fff',
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
    // marginTop: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  iconContainer: {
    backgroundColor: '#efefef',
    padding: 10,
    borderRadius: 6,
    marginRight: 15,
  },
  locationText: {
    fontSize: 15,
  },
});

export default styles;
