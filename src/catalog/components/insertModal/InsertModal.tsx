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
        <section className={style.identity}>
          <h2> Identificação </h2>
          <Slot name='identity'>
            { children }
          </Slot>
        </section>
        <section className={style.characteristics}>
          <h2> Características </h2>
          <Slot name='characteristics'>
            { children }
          </Slot>
        </section>
        <section>
          <h2> Visibilidade </h2>
          <div>
            <Slot name='visibility'>
              { children }
            </Slot>
          </div>
        </section>
      </div>
    </div>
  )
}

export default InsertModal