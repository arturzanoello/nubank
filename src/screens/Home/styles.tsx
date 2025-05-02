import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#820AD1',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '150%',
        padding: 60,
        paddingBottom: 40
    },
    nubankLogo: {
        resizeMode: 'contain',
        width: 65,
        height: 65,
    },
    settingsIcon: {
        backgroundColor: '#9500F6',
        borderRadius: 50,
        padding: 3,
        elevation: 5
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#9500F6',
        width: 329,
        height: 199,
        borderRadius: 21.9,
        justifyContent: 'space-between',
        padding: 10,
        elevation: 5
    },
    nameCard: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        padding: 10
    },
    mastercardLogo: {
        resizeMode: 'contain',
        width: 85,
        height: 50,
    },
    cardBalance: {
        backgroundColor: '#9500F6',
        width: 329,
        height: 125,
        borderRadius: 21.9,
        marginTop: 20,
        padding: 20,
        elevation: 5
    },
    cardBalanceName: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    scrollView: {
        marginTop: 30,
        marginLeft: 40
    },
    cardScrollView: {
        backgroundColor: '#9500F6',
        width: 104.16,
        height: 132.29,
        padding: 17,
        borderRadius: 21.9,
        marginRight: 10,
        elevation: 5
    },
    cardTextScroll: {
        color: 'white',
        fontSize: 15,
        marginTop: 30
    }

})