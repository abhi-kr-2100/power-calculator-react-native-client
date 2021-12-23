import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Text } from "react-native"

import CalculatorView, { CalculatorViewPropsType } from "../components/CalculatorView"
import VariableTable from "../components/VariableTable"
import { VariableTablePropsType } from "../components/VariableTable"
import Variable from "../components/Variable"


const VariablesScreen = ({ navigation }) => {
    const variableCommonProps = {
        borderWidth: 1,
        height: '5%',
        width: '100%',

        deleteButtonBgColor: 'red',
        useButtonBgColor: 'orange',
        textBgColor: 'wheat'
    }

    const variableTableProps: VariableTablePropsType = {
        backgroundColor: 'blue',
        height: '90%',
        width: '100%',

        children: [
            <Variable name="pi" value={ 3.14 } { ...variableCommonProps } />,
            <Variable name="e" value={ 2.71 } { ...variableCommonProps } />
        ]
    }

    return (
        <View style={{ height: '100%', width: '100%' }}>
            <VariableTable { ...variableTableProps } />

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
    const calculatorViewProps: CalculatorViewPropsType = {
        ioDisplayBackgroundColor: 'gray',
        ioDisplayFontSize: 25,

        calculatorBodyColor: 'blue',
        
        calculatorButtonBgColor: 'orange',
        calculatorButtonFgColor: 'black',

        calculatorButtonFontFamily: 'Fira Code',
        calculatorButtonFontSize: 25,
        
        width: '100%',
        height: '90%'
    }

    return (
        <View style={{ height: '100%', width: '100%' }}>
            <CalculatorView { ...calculatorViewProps } />
            
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
