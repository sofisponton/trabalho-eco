import { loadAsync } from 'expo-font';

export default useFonts = async () => {
  await loadAsync({
    Nova: require('../assets/Stylish-Regular.ttf'),
  });
};