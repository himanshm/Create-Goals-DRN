import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>A piece of text</Text>
      </View>

      <Text
        style={{
          margin: 16,
          borderWidth: 1,
          borderColor: '#EED3D9',
          padding: 16,
        }}
      >
        Hello World!
      </Text>
      <Button title='Tap Me!' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B5C0D0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
