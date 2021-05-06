import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AppHeader from "../AppHeader";
import * as firebase from 'firebase';
import db from '../config.js';

export default class WriteStory extends React.Component {
  constructor() {
    super();
    this.state = {
      storyTitle: '',
      storyAuthor: '',
      story: ''
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: "Pink" }}>
        <AppHeader />
        <TextInput style={styles.author_input} placeholder="Story Title" />
        <TextInput style={styles.title_input} placeholder="Author Name" />
        <TextInput
          style={styles.story_input}
          placeholder="Write Your Story"
          multiline
          true
        />
        <TouchableOpacity style={styles.submit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  author_input: {
    marginLeft: 65,
    marginTop: 20,
    width: 350,
    height: 30,
    borderWidth: 2,
    fontSize: 20,
  },
  title_input: {
    marginLeft: 65,
    marginTop: 20,
    width: 350,
    height: 30,
    borderWidth: 2,
    fontSize: 20,
  },
  story_input: {
    marginLeft: 65,
    marginTop: 30,
    width: 350,
    height: 290,
    borderWidth: 2,
    fontSize: 20,
  },
  submit: {
    width: 80,
    height: 40,
    backgroundColor: "pink",
    marginLeft: 200,
    marginTop: 20,
  },
  submitText: {
    alignItems: "center",
    marginLeft: 8,
    marginTop: 5,
    fontSize: 20,
  },
});
