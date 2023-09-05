import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity ,StyleSheet, Image} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const MainScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const allPosts = useSelector(state => state.posts);
    const selectedPost = useSelector(state => state.selectedPost);
    const [refresh, setRefresh] = useState(false); // State to force re-render

    useEffect(() => {
        dispatch({ type: 'FETCH_POSTS' });
    }, [navigation]);


    const handlePostClick = (post) => {
            dispatch({ type: 'SET_SELECTED_POST', payload: post });
            setRefresh(!refresh); // Toggle state to force re-render
    
        navigation.navigate('Details', { post });
    };

    // Function to determine the order of posts based on selectedPost
    const getOrderedPosts = () => {
        return selectedPost 
            ? [selectedPost, ...allPosts.filter(post => post.Title !== selectedPost.Title)]
            : allPosts;
    }

    return (
        <View style={styles.container}>
        <FlatList
            data={getOrderedPosts()}
            keyExtractor={item => item.Title.toString()}
            renderItem={({ item }) => (
         item.Poster  &&  <TouchableOpacity style={styles.card} onPress={() => handlePostClick(item)}>
                    <Image source={{ uri: item.Poster }} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>{item.Title}</Text>
                </TouchableOpacity>
            )}
            numColumns={1} // Display two columns of cards
        />
    </View>
    );

    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    card: {
        flex: 1,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardImage: {
        width: "100%",
        resizeMode:'contain',
        height: 200,
        borderRadius: 10,
        marginBottom: 10
    },
    cardTitle: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 5, // Some padding for longer titles
        marginTop: 5,
        marginBottom: 5
    }
});

export default MainScreen;
