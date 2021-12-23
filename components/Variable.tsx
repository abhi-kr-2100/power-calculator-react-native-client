import { View, Text, StyleProp, ViewStyle, ColorValue, TextStyle } from "react-native"


export type VariablePropsType = {
    width: string | number | undefined
    height: string | number | undefined

    name: string
    value: number

    textBgColor: ColorValue | undefined
    useButtonBgColor: ColorValue | undefined
    deleteButtonBgColor: ColorValue | undefined

    borderWidth: number
}


const Variable = (props: VariablePropsType) => {
    const topStyle: StyleProp<ViewStyle> = {
        width: props.width,
        height: props.height,

        flexDirection: "row",
        alignItems: 'center',

        backgroundColor: props.textBgColor,

        borderBottomWidth: props.borderWidth
    }

    const variableInfoOuterStyle: StyleProp<ViewStyle> = {
        width: '35%',
        height: '100%',

        justifyContent: 'center'
    }

    const variableInfoInnerStyle: StyleProp<TextStyle> = {
        textAlign: 'center'
    }

    const useButtonOuterStyle: StyleProp<ViewStyle> = {
        width: '20%',
        height: '100%',

        backgroundColor: props.useButtonBgColor,

        justifyContent: 'center'
    }

    const deleteButtonOuterStyle: StyleProp<ViewStyle> = {
        width: '10%',
        height: '100%',

        backgroundColor: props.deleteButtonBgColor,
        justifyContent: 'center'
    }

    const variableActionButtonsInnerStyle: StyleProp<TextStyle> = {
        textAlign: 'center'
    }

    return (
        <View style={ topStyle }>
            <View style={ variableInfoOuterStyle }>
                <Text style={ variableInfoInnerStyle }>{ props.name }</Text>
            </View>
            <View style={ variableInfoOuterStyle }>
                <Text style={ variableInfoInnerStyle }>{ props.value }</Text>
            </View>

            <View style={ useButtonOuterStyle }>
                <Text style={ variableActionButtonsInnerStyle }>USE</Text>
            </View>
            <View style={ deleteButtonOuterStyle }>
                <Text style={ variableActionButtonsInnerStyle }>X</Text>
            </View>
        </View>
    )
}


export default Variable
