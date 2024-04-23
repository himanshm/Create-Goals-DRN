import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

type GoalInputProps = {
  showModal: boolean;
  onAddGoal: (text: string) => void;
};

function GoalInput({ onAddGoal, showModal }: GoalInputProps) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal animationType='slide' visible={showModal}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Your Goal'
          style={styles.textInput}
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
