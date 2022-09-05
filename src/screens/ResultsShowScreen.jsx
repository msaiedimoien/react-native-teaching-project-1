import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Image, FlatList, ScrollView} from "react-native";
import Yelp from "../api/yelp";

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await Yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return (
                        <ScrollView>
                            <Image style={styles.image} source={{uri: item}}/>
                        </ScrollView>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        marginLeft: 10,
        marginBottom: 10,
        borderRadius: 4,
    },

    title: {
        fontWeight: "bold",
        margin: 10,
    },
});

export default ResultsShowScreen;