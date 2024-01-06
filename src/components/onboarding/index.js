import { View, Text, FlatList, Animated } from "react-native";
import { useRef } from "react";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles.js";
import slides from "./slides.js";
import OnboardingItem from "./onboardingItem/index.js";
import Paginator from "../paginator/index.js";
import NextButton from "./nextButton/index.js";

const Onboarding = () => {
  const scrollHorizontal = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const slidesRef = useRef(null);

  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        await AsyncStorage.setItem("@viewedOnboarding", "true");
        console.log("Data successfully saved");
      } catch (e) {
        console.log("Error @setItem: ", e);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollHorizontal } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollHorizontal={scrollHorizontal} />
      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />
    </View>
  );
};

export default Onboarding;
