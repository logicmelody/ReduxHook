import React, { Component } from 'react';
import {
	Text,
	View,
} from 'react-native';

import styles from "./styles";

class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>
					ReduxHook
				</Text>
			</View>
		);
	}
}

export default App;
