import { ColorValue, StyleProp, View, ViewStyle } from "react-native"


export type ButtonRowPropsType = {
    children: JSX.Element[] | undefined

    height: string | number | undefined
    width: string | number | undefined

    backgroundColor: ColorValue | undefined
}

const ButtonRow = (props: ButtonRowPropsType) => {
    const viewStyle: StyleProp<ViewStyle> = {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        height: props.height,
        width: props.width,

        backgroundColor: props.backgroundColor
    }

    return (
        <View style={ viewStyle }>
            { props.children }
        </View>
    )
}


export default ButtonRow
