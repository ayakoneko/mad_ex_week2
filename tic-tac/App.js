import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.row}>
        <Text style={styles.grid}>O</Text>
        <Text style={styles.grid}></Text>
        <Text style={styles.grid}>O</Text>
      </View>
      <View style = {styles.row}>
        <Text style={styles.grid}>X</Text>
        <Text style={styles.grid}>X</Text>
        <Text style={styles.grid}>O</Text>
      </View><View style = {styles.row}>
        <Text style={styles.grid}>X</Text>
        <Text style={styles.grid}></Text>
        <Text style={styles.grid}>O</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c77210e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  grid: {
    width: 80, 
    height: 80, 
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 40,
    color: 'white',
    backgroundColor: '#5a8b3d',
    borderWidth: 2, 
    borderColor: '#fff',
  },
});
