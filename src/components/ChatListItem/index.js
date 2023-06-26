import{Text, View, Image, StyleSheet} from 'react-native';

const ChatListItem = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://scontent.cdninstagram.com/v/t51.2885-19/340474230_961943178314850_302248451994463777_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=RCGYjmGlrZMAX8XXmnp&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCPUSWrqq8DVYrlCNMSQKayghD2ayazCV_xoew_nxm4Rg&oe=649EAA54&_nc_sid=10d13b'}} 
            style={styles.image} 
            />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>Briana</Text>
                    <Text style={styles.subTitle}>8:30</Text>
                </View>

                <Text numberOfLines={2} style={styles.subTitle}>I love you!</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgray',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    name: {
        flex: 1,
        fontWeight: 'bold',
    },
    subTitle: {
        color: 'grey',
    }

});

export default ChatListItem;