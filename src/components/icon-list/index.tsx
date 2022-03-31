import React from 'react'
import { Heading, Paragraph, textSprinkles } from '../typography'
import { listItemIconWrapper, listItem, textWrapper, list } from './index.css'

interface ListItem {
  title: string
  content: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

interface IconListProps {
  listItems: ListItem[]
}

const IconList: React.FC<IconListProps> = ({ listItems = [] }) => {
  return (
    <ul className={list}>
      {listItems.map(({ title, content, icon: Icon }, index) => {
        return (
          <li key={`list-icon-${index}`} className={listItem}>
            <div className={listItemIconWrapper}>
              <Icon />
            </div>
            <div className={textWrapper}>
              <Heading
                variant="h5"
                text={title}
                marginBottom="8px"
                style={textSprinkles({ typeSize: ['h5', 'h6'] })}
              />
              <Paragraph variant="medium" text={content} />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default IconList
