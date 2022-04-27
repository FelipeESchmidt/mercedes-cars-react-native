import { FlatList } from "react-native";

import mercedes from "../../mocks/mercedes";

import Car from "../../components/Car";
import Header from "../../components/Header";
import OSText from "../../components/OSText";

import { styles } from "./index.styles";
import Footer from "../../components/Footer";

function HomeScreen() {
  return (
    <>
      <FlatList
        data={mercedes.cars.available}
        renderItem={({ item }) => <Car item={item} />}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={
          <>
            <Header {...mercedes.header} />
            <OSText style={styles.text}>
              {`${mercedes.cars.availableTitle} (${mercedes.cars.available.length})`}
            </OSText>
          </>
        }
        ListFooterComponent={
          <FlatList
            data={mercedes.cars.unavailable}
            renderItem={({ item }) => <Car item={item} />}
            keyExtractor={({ name }) => name}
            ListHeaderComponent={
              <OSText style={styles.text}>
                {`${mercedes.cars.unavailableTitle} (${mercedes.cars.unavailable.length})`}
              </OSText>
            }
            ListFooterComponent={<Footer {...mercedes.footer} />}
          />
        }
      />
    </>
  );
}

export default HomeScreen;
