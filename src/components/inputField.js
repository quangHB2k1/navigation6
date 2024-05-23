import react from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"

export default function InputField({
    label,
    icon,
    inputType,
    keyboardType,
    fieldButtonLabel,
    fieldButtonFunction,
}) {

    return (
        <View
            style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                paddingBottom: 8,
                marginBottom: 25,

            }}
        >
            {icon}
            {

                inputType == 'password' ? (
                    <TextInput
                        placeholder={label}
                        keyboardType={keyboardType}
                        style={{ flex: 1, paddingVertical: 0 }}
                        secureTextEntry={true}
                    />
                ) : (
                    <TextInput
                        placeholder={label}
                        keyboardType={keyboardType}
                        style={{ flex: 1, paddingVertical: 0 }}
                    />
                )
            }
            <TouchableOpacity
                onPress={fieldButtonFunction}
            >
                <Text
                    style={{ color: "#AD40AF", fontWeight: '700' }}
                >{fieldButtonLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}