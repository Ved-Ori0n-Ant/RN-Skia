import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Linking, Image, StyleSheet } from 'react-native';

const NewsCardFetch = () => {
    const [newsData, setNewsData] = useState();
    const myNewsData = async () => {
        try {
            const response = await fetch("https://newsapi.org/v2/everything?q=apple&from=2022-12-26&to=2022-12-26&sortBy=popularity&apiKey=b3161b6c42f04b749e25163c7af19831")
            const myNewsData = await response.json();
            setNewsData(myNewsData.articles);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        myNewsData();
    }, [])

    return(
        <FlatList 
            data={newsData}
            keyExtractor={(item, index) => index}
            renderItem={(item, index) => {
                return(
                    <View style={styles.newsCard}>
                        <Text style={styles.newsTitle} >{item.title}</Text>
                        <View style={styles.imgContainer}>
                            <Image source={{uri: item.urlToImage}} style={styles.img} />
                        </View>
                        <Text style={styles.description}>{item.description}</Text>
                        <TouchableOpacity
                            onPress={() => {Linking.openURL(item.url)}}
                            style={styles.readMoreBtn}
                        >
                            <Text>Read more...{">"}</Text>
                        </TouchableOpacity>
                    </View>
                );
            }}
        />
        
    );
}

const NewsFetch = () => {
    return (
        <View style = {styles.mainContainer}>
            <View style={styles.headingContainer}>
                <Text style={styles.mainHeading}>News_Apple</Text>
            </View>
            <View style={styles.cardContainer}>
                <NewsCardFetch />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    newsTitle: {
        fontSize: 25,
        padding: 5,
        fontWeight: "700",
      },
      newsCard: {
        //borderColor: "black",
        //borderWidth: 1,
        backgroundColor: "#ffff8f80",
        width: "98%",
        borderRadius: 13,
        marginVertical: 10,
      },
      description: {
       fontSize: 17,
       margin: 10,
      },
      readMoreContainer: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "flex-end",
      },
      readMoreBtn: {
        backgroundColor: "black",
        color: "skyblue",
        fontSize: 14,
        fontWeight: "700",
        margin: 10,
        padding: 10,
        borderRadius: 10,
      },
      imgContainer: {
        flex: 0,
        width: '100%',
        alignItems: 'center',
      },
      img: {
        width: '98%',
        height: 200,
      },
      mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginVertical: 25,
      },
      mainHeading: {
        color: '#f778ba',
        fontSize: 42,
        fontWeight: 'bold',
        padding: 12,
        textDecorationLine: 'underLine',
      },
      cardContainer: {
        marginVertical: 10,
        flex: 1,
        backgroundColor: '#ffff8f80',
        width: '100%',
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      headingContainer: {
        color: '#ffe5a4',
      }
});

export default NewsFetch;