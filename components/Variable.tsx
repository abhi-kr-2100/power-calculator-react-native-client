import { View, Button, Text, StyleProp, ViewStyle } from "react-native"


export type VariablePropsType = {
    height?: string | number | undefined

    name: string
    value: number
}


const Variable = (props: VariablePropsType) => {
    const viewStyle: StyleProp<ViewStyle> = {
        width: '100%',
        height: props.height,

        paddingTop: '2%',
        paddingBottom: '2%',

        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }

    const childrenStyle = {
        width: '25%'
    }

    return (
        <View style={ viewStyle }>
            <Text style={ childrenStyle }>{ props.name }</Text>
            <Text style={ childrenStyle }>{ props.value }</Text>
            <Button title="USE" onPress={ () => void(0) } />
            <Button title="X" onPress={ () => void(0) } />
        </View>
    )
}


export default Variable
