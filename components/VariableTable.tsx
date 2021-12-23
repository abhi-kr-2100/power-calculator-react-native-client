import { ColorValue, StyleProp, View, ViewStyle } from "react-native"


export type VariableTablePropsType = {
    children: JSX.Element[] | undefined

    width: string | number | undefined
    height: string | number | undefined

    backgroundColor: ColorValue | undefined
}


const VariableTable = (props: VariableTablePropsType) => {
    const viewStyle: StyleProp<ViewStyle> = {
        width: props.width,
        height: props.height,

        backgroundColor: props.backgroundColor
    }

    return (
        <View  style={ viewStyle }>
            { props.children }
        </View>
    )
}


export default VariableTable
