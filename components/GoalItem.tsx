import { View, Text, StyleSheet } from 'react-native';

type GoalItemProps = {
  text: string;
};

function GoalItem({ text }: GoalItemProps) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: '#5E0ACC',
    borderRadius: 6,
  },
  goalText: {
    color: '#FEFCF3',
  },
});
