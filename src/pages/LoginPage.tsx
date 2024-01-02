import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { Button, StyleSheet, View } from 'react-native'
import StyledTextInput from '../components/StyledTextInput'

import { z } from 'zod'

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
  })
  .required()

// extract the inferred type

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
})

const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <View style={styles.form}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            fieldError={errors.email}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 6,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            placeholder="Password"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            fieldError={errors.password}
          />
        )}
        name="password"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

export default LoginPage
