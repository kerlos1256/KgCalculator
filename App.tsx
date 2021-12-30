import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface value {
  price: number;
  weight: number;
}

export default function App() {
  const [value, setValue] = useState<value>({
    price: 0,
    weight: 0,
  });
  const [newPrice, setNewPrice] = useState<number>(0);

  useEffect(() => {
    const weightPrec = value.weight / 1000;
    setNewPrice(weightPrec * value.price);
  }, [value]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          onChangeText={(e) => setValue({ ...value, price: +e })}
          placeholder="1Kg Price"
        />
      </View>
      <View>
        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          onChangeText={(e) => setValue({ ...value, weight: +e })}
          placeholder="weight by grams"
        />
      </View>
      <View>
        <Text style={styles.priceText}>
          {value.weight} Grams is {newPrice.toFixed(2)} L.E
        </Text>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    marginVertical: 8,
    width: 300,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    fontWeight: "700",
  },
  priceText: {
    fontSize: 20,
  },
});
