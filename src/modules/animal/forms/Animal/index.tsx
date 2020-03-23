import React, { FC } from 'react'
import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { TextInput } from 'components/TextInput'
import { FormButton } from 'components/FormButton'

const registerSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  species: Yup.string().required('Required'),
  uri: Yup.string().required('Required'),
})

export interface IAnimalFormValues {
  id?: number
  name: string
  species: string
  uri: string
}

export interface IProps {
  initialValues?: IAnimalFormValues
  handleSubmit: (
    values: IAnimalFormValues,
    actions?: FormikHelpers<IAnimalFormValues>
  ) => Promise<void>
}

export const AnimalForm: FC<IProps> = ({ initialValues, handleSubmit }) => (
  <Formik
    initialValues={initialValues ? initialValues : {}}
    validationSchema={registerSchema}
    onSubmit={handleSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <TextInput label="Name" name="name" />
        <TextInput label="Species" name="species" />
        <TextInput label="URL" name="uri" />

        <FormButton htmlType="submit" type="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </FormButton>
      </Form>
    )}
  </Formik>
)
