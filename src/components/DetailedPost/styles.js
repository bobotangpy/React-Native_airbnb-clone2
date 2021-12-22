import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  bedroom: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  desc: {
    fontSize: 18,
    lineHeight: 24,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
  details: {
    marginVertical: 20,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;
