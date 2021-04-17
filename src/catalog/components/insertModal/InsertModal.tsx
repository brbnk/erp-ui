import React from 'react'
import { Slot } from 'common/components'

import style from './InsertModal.module.scss'

interface InsertModalProps {
  children: JSX.Element | JSX.Element[]
}

const InsertModal = ({ children }: InsertModalProps) => {
  return (
    <div className={style.insert}>
      <Slot name='images'>
        { children }
      </Slot>
      <div className={style.infos}>
        <div className={style.identity}>
          <h2> Identificação </h2>
          <Slot name='identity'>
            { children }
          </Slot>
        </div>
        <div>
          <h2> Visibilidade </h2>
          <div>
            <Slot name='visibility'>
              { children }
            </Slot>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsertModal