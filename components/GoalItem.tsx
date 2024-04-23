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
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#B5C0D0' }}
        onPress={handleDelete}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: '#B3C8CF',
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: '#FEFCF3',
  },
});
