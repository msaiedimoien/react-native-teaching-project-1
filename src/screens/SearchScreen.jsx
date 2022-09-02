import React, {useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [term, setTerm] = useState('');

    return (
        <View style={styles.viewStyle}>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => console.log('term was submitted')}
            />
            <Text>{term}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        // padding: 10,
        backgroundColor: 'white',
        height: 600,
    }
});

export default SearchScreen;