import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import Button from '../Button';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      text: '',
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleClose() {
    this.setState(() => ({
      open: false,
    }));
  }

  handleOpen() {
    this.setState(() => ({
      open: true,
    }));
  }

  handleAddTodo() {
    if (this.state.text) {
      this.props.saveTodo({
        label: this.state.text,
      });

      this.handleClose();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.open ? (
          <Button onClick={this.handleOpen} type="black" title="Add Todo" />
        ) : (
          <Button onClick={this.handleClose} type="red" title="Close" />
        )}

        {this.state.open && (
          <View style={styles.input}>
            <TextInput
              onChangeText={text => this.setState({ text })}
              style={{ flex: 1, height: 50 }}
            />
            <Button
              onClick={this.handleAddTodo}
              title="Save"
              style={{ flex: 1, height: 50 }}
            />
          </View>
        )}
      </View>
    );
  }
}

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    height: 80,
    width: 300,
  },
});
