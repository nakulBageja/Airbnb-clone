import React, {useState} from 'react';
import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostsCarousel from '../../components/PostsCarousel/Posts';
const SearchResultsMap = () => {
  const [isSelectedId, setIsSelectedId] = useState(null);
  const width = useWindowDimensions().width;
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 28.3915637,
          longitude: -16.6291304,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map((place) => (
          <CustomMarker
            key={place.id}
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === isSelectedId}
            onPress={() => setIsSelectedId(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          data={places}
          renderItem={({item}) => <PostsCarousel post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
