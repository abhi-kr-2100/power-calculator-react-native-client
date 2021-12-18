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

    fontFamily: string | undefined,
    fontSize: number | undefined,

    onTouchEnd?: ((event: GestureResponderEvent) => void) | undefined,

    inputExpression: string
    setInputExpression: React.Dispatch<React.SetStateAction<string>>
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
        props.setInputExpression(props.inputExpression + props.label)
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
