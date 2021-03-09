import React, {useEffect, useRef, useState} from 'react';
import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostsCarousel from '../../components/PostsCarousel/Posts';
const SearchResultsMap = () => {
  const [isSelectedId, setIsSelectedId] = useState(null);
  const width = useWindowDimensions().width;

  // to use values of flatlist
  const flatList = useRef();
  const viewConfig = useRef({
    itemVisiblePercentThreshold: 90,
    // waitForInteraction: true,
  }); //taking those item value only who is available 70%
  const onViewChanged = useRef((viewableItems) => {
    console.log(viewableItems);
    // Whenever the view changes select that item in the carousel
    // if (viewableItems.length > 0) {
    //   const selectedPlace = viewableItems[0].item;
    //   setIsSelectedId(selectedPlace.id);
    // }
  });

  useEffect(() => {
    if (!isSelectedId || !flatList) return;
    const index = places.findIndex((place) => place.id === isSelectedId); //find the selected id
    flatList.current.scrollToIndex({index}); //move the carousel to that item
  }, [isSelectedId]);

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
          ref={flatList}
          data={places}
          renderItem={({item}) => <PostsCarousel post={item} key={item.id} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
