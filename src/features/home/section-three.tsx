import React from 'react'
import {
  wrapper,
  itemWrapper,
  itemImage,
  itemName,
  itemPrice,
  itemQuantity,
  itemQuantityInput,
  button
} from './section-three.css'

import { useTranslation } from 'next-i18next'
import Chip1 from '@/images/home/home.section.3.1a.png'
import Chip2 from '@/images/home/home.section.3.1b.png'
import Chip3 from '@/images/home/home.section.3.1c.png'
const SectionThree = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div id="shop" className={wrapper}>
      <div className={itemWrapper}>
        <img src={Chip1} className={itemImage} />
        <p className={itemName}>Original</p>
        <p className={itemPrice}>$12.99</p>
        <p className={itemQuantity}>Quantity</p>
        <p className={itemQuantityInput}>1</p>
        <button className={button}> SOLD OUT!</button>
      </div>
      <div className={itemWrapper}>
        <img src={Chip2} className={itemImage} />
        <p className={itemName}>Charcoal Smoked BBQ</p>
        <p className={itemPrice}>$12.99</p>
        <p className={itemQuantity}>Quantity</p>
        <p className={itemQuantityInput}>1</p>
        <button className={button}> SOLD OUT!</button>
      </div>
      <div className={itemWrapper}>
        <img src={Chip3} className={itemImage} />
        <p className={itemName}>Saffron Black Truffle</p>
        <p className={itemPrice}>$14.99</p>
        <p className={itemQuantity}>Quantity</p>
        <p className={itemQuantityInput}>1</p>
        <button className={button}> SOLD OUT!</button>
      </div>
    </div>
  )
}

export default SectionThree
