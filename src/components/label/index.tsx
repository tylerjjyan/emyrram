import React from 'react'
import * as styles from './index.css'

type Props = {
  children: string
  htmlFor: string
}

const Label: React.FC<Props> = ({ htmlFor, children = '' }) => (
  <label htmlFor={htmlFor} className={styles.label}>
    {children}
  </label>
)

export default Label
