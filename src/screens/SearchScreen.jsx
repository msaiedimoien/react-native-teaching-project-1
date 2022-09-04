import React, {useState } from "react";
import {Text, View, StyleSheet, ScrollView} from "react-native";
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
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? alert(errorMessage) : null}
            <ScrollView showsVerticalScrollIndicator={false}>
                <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'/>
                <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier'/>
                <ResultsList results={filterResultsByPrice('$$$')} title='Bit Spender'/>
                <ResultsList results={filterResultsByPrice('$$')} title='Bit Dollor'/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    },
});

export default SearchScreen;