import React from 'react'
import * as styles from './index.css'

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = props => {
  return <input className={styles.input} {...props} />
}

export default Input
