import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Button from './Components/Button';
import Placeholder from './Components/Placeholder';
import AddTodo from './Components/AddTodo';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };

    this.renderList = this.renderList.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  renderList() {
    if (!this.state.list.length > 0) {
      return <Placeholder />;
    }

    return (
      <FlatList
        style={{ marginTop: 20 }}
        data={this.state.list}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    );
  }

  addTodo(todo) {
    this.setState(prevState => ({
      list: prevState.list.concat({ key: todo.label }),
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 10 }}>Todo App</Text>
        <AddTodo saveTodo={this.addTodo} />
        {this.renderList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    alignItems: 'center',
  },
});
