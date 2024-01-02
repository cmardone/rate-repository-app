import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import { StyleSheet, Text, TextInput } from 'react-native'

interface Props {
  fieldError: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  [x: string]: any
}

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 6,
    overflow: 'hidden',
  },
  textInputError: {
    borderColor: 'red',
    borderWidth: 2,
    paddingVertical: 9,
    paddingHorizontal: 5,
  },
  textError: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
  },
})

const StyledText = ({ fieldError, style, ...props }: Props) => {
  return (
    <>
      <TextInput
        style={[styles.textInput, fieldError && styles.textInputError, style]}
        {...props}
      />
      {fieldError && (
        <Text style={styles.textError}>{`${fieldError.message}`}</Text>
      )}
    </>
  )
}

export default StyledText
