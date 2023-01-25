import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const NewsAxios = () => {
    return (
        <View style = {styles.mainContainer}>
            <View>
                <Text>News_Apple</Text>
            </View>
            <View style = {styles.cardContainer}>
                <NewsCardAxios />
            </View>
        </View>
    );
}

const NewsCardAxios = () => {
    const [newsData, setNewsData] = useState();
    axios({
        method: 'get',
        url: 'https://newsapi.org/v2/everything?q=apple&from=2022-12-26&to=2022-12-26&sortBy=popularity&apiKey=b3161b6c42f04b749e25163c7af19831',
    }).then((response) => {setNewsData(response)})
    
    return(
        <>
            {/* Main news component */}
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
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginVertical: 25,
    },
    headingContainer: {color: '#ffe5a4'},
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
})

export default NewsAxios;