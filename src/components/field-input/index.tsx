import React from 'react'
import { useField, FieldInputProps } from 'formik'
import Input from '@/components/input'
import Label from '@/components/label'
import * as styles from './index.css'

type Props = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  keyof Omit<FieldInputProps<any>, 'name'>
> & { label: string; onBlur?: React.FocusEventHandler; helperText?: string }

const FieldInput: React.FC<Props> = ({
  id = '',
  label = '',
  name = '',
  helperText = '',
  ...props
}) => {
  const [field, meta] = useField(name)

  return (
    <div className={styles.wrapper}>
      <Input id={id} placeholder={label} {...field} {...props} />
      {label && <Label htmlFor={name}>{label}</Label>}

      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : (
        <div className={styles.helperText}>{helperText}</div>
      )}
    </div>
  )
}
export default FieldInput
