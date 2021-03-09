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
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  container: {
    height: '40%',
    padding: 5,
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
