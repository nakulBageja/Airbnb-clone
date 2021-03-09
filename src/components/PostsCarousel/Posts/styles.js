import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  images: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  container: {
    height: '100%',
    padding: 5,
    marginHorizontal: 20,
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
