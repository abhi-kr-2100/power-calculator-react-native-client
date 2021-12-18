import { useState } from "react"
import {
    StyleProp, TextInput, TextInputProps, View, ViewStyle
} from "react-native"

import Button from "./Button"
import ButtonRow, { ButtonRowPropsType } from "./ButtonRow"


export type CalculatorViewPropsType = {
    height: string | number | undefined
    width: string | number | undefined
}

const CalculatorView = (props: CalculatorViewPropsType) => {
    const [inputExpression, setInputExpression] = useState('')

    const viewStyle: StyleProp<ViewStyle> = {
        height: props.height,
        width: props.width
    }

    const textInputProps: TextInputProps = {
        style: {
            width: '100%',
            height: '15%',
            paddingRight: '2%',

            backgroundColor: 'gray',

            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'right',
            
            overflow: 'scroll'
        },

        editable: false
    }

    const buttonRowCommonProps = {
        height: '14.16%',
        width: '100%',

        backgroundColor: 'blue'
    }

    const buttonCommonProps = {
        backgroundColor: 'orange',
        foregroundColor: 'black',

        fontFamily: 'Fira Code',
        fontSize: 14,

        height: '90%',

        inputExpression: inputExpression,
        setInputExpression: setInputExpression
    }

    const firstRow = (
        <ButtonRow { ...buttonRowCommonProps }>
            <Button { ...buttonCommonProps } label="C" width={ '20%' }
                onTouchEnd={ () => setInputExpression('') }
            />
            
            <Button { ...buttonCommonProps } label="( )" width={ '20%' }
                onTouchEnd={
                    () => {
                        // decide wether to insert open or close parentheses
                        
                        const openParenLastChars = [
                            '', '+', '-', 'X', '/', '^', '(']
                        const lastInputChar = inputExpression.slice(-1)

                        if (openParenLastChars.includes(lastInputChar)) {
                            setInputExpression(inputExpression + '(')
                        } else {
                            setInputExpression(inputExpression + ')')
                        }
                    }
                }
            />

            <Button { ...buttonCommonProps } label="!" width={ '20%' } />
            <Button { ...buttonCommonProps } label="^" width={ '20%' } />
        </ButtonRow>
    )

    const secondRow = (
        <ButtonRow { ...buttonRowCommonProps }>
            <Button { ...buttonCommonProps } label="7" width={ '20%' } />
            <Button { ...buttonCommonProps } label="8" width={ '20%' } />
            <Button { ...buttonCommonProps } label="9" width={ '20%' } />
            <Button { ...buttonCommonProps } label="+" width={ '20%' } />
        </ButtonRow>
    )

    const thirdRow = (
        <ButtonRow { ...buttonRowCommonProps }>
            <Button { ...buttonCommonProps } label="4" width={ '20%' } />
            <Button { ...buttonCommonProps } label="5" width={ '20%' } />
            <Button { ...buttonCommonProps } label="6" width={ '20%' } />
            <Button { ...buttonCommonProps } label="-" width={ '20%' } />
        </ButtonRow>
    )

    const fourthRow = (
        <ButtonRow { ...buttonRowCommonProps }>
            <Button { ...buttonCommonProps } label="1" width={ '20%' } />
            <Button { ...buttonCommonProps } label="2" width={ '20%' } />
            <Button { ...buttonCommonProps } label="3" width={ '20%' } />
            <Button { ...buttonCommonProps } label="X" width={ '20%' } />
        </ButtonRow>
    )
    
    const fifthRow = (
        <ButtonRow { ...buttonRowCommonProps }>
            <Button { ...buttonCommonProps } label="=" width={ '20%' }
                onTouchEnd={ () => void(0) }
            />
            <Button { ...buttonCommonProps } label="0" width={ '20%' } />
            <Button { ...buttonCommonProps } label="." width={ '20%' } />
            <Button { ...buttonCommonProps } label="/" width={ '20%' } />
        </ButtonRow>
    )

    const sixthRow = (
        <ButtonRow { ...buttonRowCommonProps }>
            <Button { ...buttonCommonProps } label="SAVE" width={ '45%' }
                onTouchEnd={ () => void(0) }
            />
            <Button { ...buttonCommonProps } label="BACKSPACE" width={ '45%' }
                onTouchEnd={
                    () => setInputExpression(inputExpression.slice(0, -1)) }
            />
        </ButtonRow>
    )

    return (
        <View style={ viewStyle }>
            <TextInput {...textInputProps} value={ inputExpression }>
            </TextInput>
            { firstRow }
            { secondRow }
            { thirdRow }
            { fourthRow }
            { fifthRow }
            { sixthRow }
        </View>
    )
}


export default CalculatorView
