import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IButton {
  onPress: () => void;
  text: string;
}

export const Button = ({ onPress, text }: IButton) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.root}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 12,
    paddingRight: 18,
    paddingLeft: 18,
    borderRadius: 100,
    backgroundColor: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text: {
    color: '#000',
    fontSize: 24
  }
});
