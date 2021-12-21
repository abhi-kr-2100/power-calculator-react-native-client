import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Text } from "react-native"

import CalculatorView from "../components/CalculatorView"
import VariableTable from "../components/VariableTable"


const VariablesScreen = ({ navigation }) => {
    return (
        <View style={{ height: '100%', width: '100%' }}>
            <VariableTable height={ '90%' } width={ '100%' }>
            </VariableTable>

            <View
                onTouchEnd={ () => navigation.navigate('Calculator') }
                style={{
                    backgroundColor: 'black',
                    
                    height: '10%',

                    alignItems: 'center'
                }}
            >
                <Text style={{
                    backgroundColor: 'orange',

                    height: '90%',
                    width: '95%',

                    textAlign: 'center',
                    fontSize: 38,
                    fontWeight: 'bold'
                }}>
                    CALCULATOR
                </Text>
            </View>
        </View>
    )
}


const CalculatorScreen = ({ navigation }) => {
    return (
        <View style={{ height: '100%', width: '100%' }}>
            <CalculatorView height={ '90%' } width={ '100%' } />
            <View 
                onTouchEnd={ () => navigation.navigate('Variables') }
                style={{
                    backgroundColor: 'black',
                    
                    height: '10%',

                    alignItems: 'center'
                }}
            >
                <Text style={{
                    backgroundColor: 'orange',

                    height: '90%',
                    width: '95%',

                    textAlign: 'center',
                    fontSize: 38,
                    fontWeight: 'bold'
                }}>
                    VARIABLES
                </Text>
            </View>
        </View>
    )
}


const NavScreen = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Calculator">
                    { CalculatorScreen }
                </Stack.Screen>
                <Stack.Screen name="Variables">
                    { VariablesScreen }
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default NavScreen
