import React, { useState } from "react";
import { View, Image, ScrollView } from "react-native";

import OSText from "../OSText";

import { styles } from "./index.styles";

export default function ImagesScroll({ images, name }) {
  const [active, setActive] = useState(0);

  const handleChange = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) setActive(slide);
  };

  return (
    <View style={styles.scrollWrapper}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleChange}
        style={styles.scroll}
      >
        {images.map((image, i) => (
          <Image key={`${name}-img-${i}`} style={styles.image} source={image} />
        ))}
      </ScrollView>
      <View style={styles.dots}>
        {images.map((_, i) => (
          <OSText key={i} style={[styles.dot, active === i && styles.selected]}>
            ⬤
          </OSText>
        ))}
      </View>
    </View>
  );
}
