import React from 'react'
import { InsertPhoto } from '@material-ui/icons'
import { Slot } from 'common/components'

import style from './InsertModal.module.scss'

interface InsertModalProps {
  children: JSX.Element | JSX.Element[]
}

const InsertModal = ({ children }: InsertModalProps) => {
  return (
    <div className={style.insert}>
      <div className={style.img_container}>
        <div className={style.viewer}>

        </div>
        <div className={style.drop}>
          <div className={style.empty} draggable={true}>
            <InsertPhoto/>
            <h4> Drag and drop image here </h4>
          </div>
        </div>
        <div className={style.add_link}>
          <input type='text'/>
        </div>
      </div>
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