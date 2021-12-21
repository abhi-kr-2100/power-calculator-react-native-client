import { StyleProp, View, ViewStyle } from "react-native"

import Variable from "./Variable"


export type VariableTablePropsType = {
    children: JSX.Element[] | undefined

    width: string | number | undefined
    height: string | number | undefined
}


const VariableTable = (props: VariableTablePropsType) => {
    const viewStyle: StyleProp<ViewStyle> = {
        width: props.width,
        height: props.height
    }

    return (
        <View  style={ viewStyle }>
            { props.children }
        </View>
    )
}


export default VariableTable
