import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import nubank from '../../../assets/Nubank.png'
import mastercard from '../../../assets/Mastercardlogo.png'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.nubankLogo} source={nubank} tintColor="white"
                />
                <View style={styles.settingsIcon}>
                    <MaterialIcons name="settings" size={28} color="white" />
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.nameCard}>Artur</Text>
                <Image style={styles.mastercardLogo} source={mastercard}></Image>
            </View>

            <View style={styles.cardBalance}>
                <View style={styles.cardBalanceName}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Saldo disponível</Text>
                    <Ionicons name="wallet-outline" size={27} color="white" />
                </View>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 37.5 }}>R$123.378,76</Text>
            </View>
            <Text style={{ color: 'white', fontSize: 15, alignSelf: 'flex-start', margin: 20, marginTop: 40, paddingLeft: 40 }}>Do que precisa?</Text>

            <ScrollView style={styles.scrollView} horizontal={true}>
                <View style={styles.cardScrollView}>
                    <MaterialIcons name="pix" size={24} color="white" />
                    <Text style={styles.cardTextScroll}>Fazer um Pix</Text>
                </View>

                <View style={styles.cardScrollView}>
                    <FontAwesome6 name="barcode" size={24} color="white" />
                    <Text style={styles.cardTextScroll}>Pagar um boleto</Text>
                </View>

                <View style={styles.cardScrollView}>
                    <MaterialIcons name="attach-money" size={24} color="white" />
                    <Text style={styles.cardTextScroll}>Fazer um depósito</Text>
                </View>

                <View style={styles.cardScrollView}>
                    <Ionicons name="card-outline" size={24} color="white" />
                    <Text style={styles.cardTextScroll}>Criar um cartão</Text>
                </View>
                <View style={styles.cardScrollView}>
                    <FontAwesome6 name="money-bill-transfer" size={24} color="white" />
                    <Text style={styles.cardTextScroll}>Pedir um empréstimo</Text>
                </View>
            </ScrollView>
        </View>
    )
}