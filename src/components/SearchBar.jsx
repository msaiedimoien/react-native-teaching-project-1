import React from "react";
import {View, StyleSheet, Image, TextInput} from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                style={styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#f0eeee",
        height: 50,
        marginTop: 10,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: "row"
    },

    inputStyle: {
        fontSize: 18,
        flex: 1,
    },

    iconStyle: {
        fontSize: 40,
        color: 'orange',
        alignSelf: "center",
        marginHorizontal: 10,
    }
});

export default SearchBar;