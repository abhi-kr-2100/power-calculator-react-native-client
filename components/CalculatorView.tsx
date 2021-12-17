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
    const viewStyle: StyleProp<ViewStyle> = {
        height: props.height,
        width: props.width
    }

    const textInputProps: TextInputProps = {
        style: {
            width: '100%',
            height: '15%',

            backgroundColor: 'gray'
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

        height: '90%'
    }

    const firstRow = (
        <ButtonRow { ...buttonRowCommonProps }>
            <Button { ...buttonCommonProps } label="C" width={ '20%' } />
            <Button { ...buttonCommonProps } label="( )" width={ '20%' } />
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
            <Button { ...buttonCommonProps } label="=" width={ '20%' } />
            <Button { ...buttonCommonProps } label="0" width={ '20%' } />
            <Button { ...buttonCommonProps } label="." width={ '20%' } />
            <Button { ...buttonCommonProps } label="/" width={ '20%' } />
        </ButtonRow>
    )

    const sixthRow = (
        <ButtonRow { ...buttonRowCommonProps }>
            <Button { ...buttonCommonProps } label="SAVE" width={ '45%' } />
            <Button { ...buttonCommonProps } label="BACKSPACE" width={ '45%' } />
        </ButtonRow>
    )

    return (
        <View style={ viewStyle }>
            <TextInput {...textInputProps}></TextInput>
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
