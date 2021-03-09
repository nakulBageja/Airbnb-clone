import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  images: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  container: {
    margin: 20,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {fontSize: 18, lineHeight: 26},
  pricing: {
    fontSize: 18,
    marginVertical: 5,
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
    fontSize: 18,
  },
});
export default styles;
