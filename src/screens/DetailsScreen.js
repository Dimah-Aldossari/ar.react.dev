import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const DetailsScreen = ({ route }) => {
    const { post } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: post.Poster }} style={styles.poster} />
            <Text style={styles.title}>{post.Title}</Text>
            <Text style={styles.year}>{post.Year}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    poster: {
        width: 250,
        height: 350,
        borderRadius: 15,
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    year: {
        fontSize: 16,
        color: '#777',
        textAlign: 'center'
    }
});

export default DetailsScreen;
