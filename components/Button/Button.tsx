import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants/colors';

interface IButton {
  onPress: () => void;
  text: string;
  style?: Object;
}

export const Button = ({ onPress, text, style }: IButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={styles.root}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: COLORS.action
  },
  text: {
    color: COLORS.brown,
    fontSize: 24,
    fontWeight: '500'
  }
});
