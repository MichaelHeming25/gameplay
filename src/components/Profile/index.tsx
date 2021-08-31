import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./style";

export function Profile() {
    return(
        <View style={styles.container}>

            <Avatar urlImage="https://github.com/michaelheming25.png" />
            
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        Michael
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vítoria
                </Text>
            </View>
        </View>
    )
}
