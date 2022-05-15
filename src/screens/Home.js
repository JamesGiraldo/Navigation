import React from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Home(props) {
    const { navigation } = props;

    const toCursos = () => {
        navigation.navigate('contact', { screen: 'courses', header: () => null })
    }

    return (
        <View style={styles.container}>
            <Text>Hello Home</Text>

            <Button
                title="ir a About"
                onPress={() => navigation.navigate('about')}
            />
            <Button
                title="ir a Contacto"
                onPress={() => navigation.navigate('contact')}
            />
            <TouchableOpacity onPress={toCursos}>
                <Text style={styles.addButton}> Ir a cursos </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    addButton: {
        backgroundColor: "#00a680",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
})