import { View, Text, StyleSheet, Pressable } from 'react-native';

type GoalItemProps = {
  text: string;
  onDelete: (id: string) => void;
};

function GoalItem({ text, onDelete }: GoalItemProps) {
  return (
    <Pressable onPress={onDelete}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
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
