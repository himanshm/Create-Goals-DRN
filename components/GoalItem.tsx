import { View, Text, StyleSheet, Pressable } from 'react-native';

type GoalItemProps = {
  text: string;
  id: string;
  onDelete: (id: string) => void;
};

function GoalItem({ text, id, onDelete }: GoalItemProps) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <Pressable onPress={handleDelete}>
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
