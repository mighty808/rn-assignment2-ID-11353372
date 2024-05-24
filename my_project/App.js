import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView  } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.inscription}>
      My name is <Text style={styles.innertext}>Effah</Text>
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#ffff',
    flex: 1,
    backgroundColor: '#14274a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inscription: {
    color: '#ffff',
    fontSize: 24
  },

  innertext:{
    fontWeight: 'bold'
  }
});
