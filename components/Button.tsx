import React from 'react'
import {
    ColorValue, GestureResponderEvent, StyleProp, Text, TextStyle, View,
    ViewStyle
} from 'react-native'


export type ButtonPropsType = {
    label: string

    backgroundColor: ColorValue | undefined
    foregroundColor: ColorValue | undefined

    height: string | number | undefined
    width: string | number | undefined

    fontFamily: string | undefined
    fontSize: number | undefined

    onTouchEnd?: ((event: GestureResponderEvent) => void) | undefined

    inputExpression: string | undefined
    setInputExpression: React.Dispatch<React.SetStateAction<string>> | undefined
}


const Button = (props: ButtonPropsType) => {
    const viewStyle: StyleProp<ViewStyle> = {
        backgroundColor: props.backgroundColor,

        height: props.height,
        width: props.width,

        justifyContent: 'center'
    }

    const textStyle: StyleProp<TextStyle> = {
        textAlign: 'center',

        fontWeight: 'bold',
        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        
        color: props.foregroundColor
    }

    const defaultOnTouchEndFunction = () => {
        if (props.setInputExpression !== undefined &&
                props.inputExpression !== undefined) {
            props.setInputExpression(props.inputExpression + props.label)
        }
    }

    return (
        <View style={ viewStyle } onTouchEnd={
            props.onTouchEnd || defaultOnTouchEndFunction }
        >
            <Text style={ textStyle }>{ props.label }</Text>
        </View>
    )
}


export default Button
