import { View, Text, StyleProp, ViewStyle, ColorValue } from "react-native"


export type VariablePropsType = {
    height?: string | number | undefined

    name: string
    value: number

    buttonBgColor: ColorValue | undefined
}


const Variable = (props: VariablePropsType) => {
    const viewStyle: StyleProp<ViewStyle> = {
        width: '100%',
        height: props.height,

        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly',

        backgroundColor: 'wheat',

        borderBottomWidth: 1
    }

    const childrenStyle = {
        width: '35%',
        height: '100%',

        textAlign: 'center',
        justifyContent: 'center'
    }

    return (
        <View style={ viewStyle }>
            <View style={ childrenStyle }>
                <Text style={{ textAlign: 'center' }}>{ props.name }</Text>
            </View>
            <View style={ childrenStyle }>
                <Text style={{ textAlign: 'center' }}>{ props.value }</Text>
            </View>

            <View style={{
                width: '20%',
                height: '100%',
                backgroundColor: props.buttonBgColor,

                justifyContent: 'center'
            }}>
                <Text style={{ textAlign: 'center' }}>USE</Text>
            </View>

            <View style={{
                width: '10%',
                height: '100%',
                backgroundColor: 'red',

                justifyContent: 'center'
            }}>
                <Text style={{ textAlign: 'center' }}>X</Text>
            </View>
        </View>
    )
}


export default Variable
