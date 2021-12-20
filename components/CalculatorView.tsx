import { useState } from "react"
import {
    StyleProp, TextInput, TextInputProps, View, ViewStyle
} from "react-native"

import axios from "axios"

import Button from "./Button"
import ButtonRow from "./ButtonRow"


export type CalculatorViewPropsType = {
    height: string | number | undefined
    width: string | number | undefined
}


/**
 * Given the input, determine whether open or closed parentheses should be
 * added.
 */
const decideParen = (input: string): '(' | ')' => {
    const openParenLastChars = ['', '+', '-', 'X', '/', '^', '(']
    const lastInputChar = input.slice(-1)

    if (openParenLastChars.includes(lastInputChar)) {
        return '('
    } else {
        return ')'
    }
}


/**
 * Evaluate the arithmetic expression input and return the result as a
 * Promise<string>. In case of any error, the Promise resolves to 'Error!'. 
 */
const evaluate = (input: string,
        variables: Map<string, number>): Promise<string> => {

    const payload = {
        expression: input,
        variables: variables
    }

    return axios.post(
        'https://powercalc.pythonanywhere.com/api/evaluate',
        payload
    )
        .then(
            resp => resp.data['result'].toString()
        )
        .catch(
            err => 'Error!'
        )
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
                    () => setInputExpression(decideParen(inputExpression))
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
            <Button { ...buttonCommonProps } label="*" width={ '20%' } />
        </ButtonRow>
    )
    
    const fifthRow = (
        <ButtonRow { ...buttonRowCommonProps }>
            <Button { ...buttonCommonProps } label="=" width={ '20%' }
                onTouchEnd={
                    () => {
                        evaluate(inputExpression, new Map<string, number>())
                            .then(d => setInputExpression(d))
                            .catch(e => setInputExpression(e))
                    }
                }
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
                    () => setInputExpression(inputExpression.slice(0, -1))
                }
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
