import React, {useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            alert(err);
        }
    };

    return (
        <View style={styles.viewStyle}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>We have found {results.length} results</Text>
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