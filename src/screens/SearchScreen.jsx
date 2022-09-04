import React, {useState } from "react";
import {Text, View, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, errorMessage, searchApi] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => result.price === price);
    };

    return (
        <View style={styles.viewStyle}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? alert(errorMessage) : null}
            <Text>We have found {results.length} results</Text>
            <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
            <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
            <ResultsList results={filterResultsByPrice('$$$')} title='Bit Spender' />
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