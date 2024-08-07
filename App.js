import React, {useState} from 'react';
import {Pressable,
        StyleSheet,
        Text,
        View,
        Image} from 'react-native';

const App = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style={styles.container}>

      <Image
      style={styles.tinyLogo}
      source={require(/Users/yusuf/Downloads/images.jpeg)}
      />
      <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            height:30,
            width:130,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: pressed ? 'gray' : 'orange',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: 3,
    borderRadius:20,
    borderColor: 'lightblue',
    backgroundColor: '#a7c957',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default App;