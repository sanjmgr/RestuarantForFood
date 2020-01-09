import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id');

    const getResult = async id => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);

        } catch (err) {
            console.log('Something went wrong!!')
        }
    } 

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }

    return (
        <>  
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{uri: item}} />
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        marginHorizontal: 25,
        marginVertical: 10,
        height: 200,
        width: 350,
        marginBottom: 7,
        borderRadius: 4
    }
})

export default ResultsShowScreen;