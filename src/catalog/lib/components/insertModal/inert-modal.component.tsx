import { ChangeEvent } from 'react'
import { InsertPhoto } from '@material-ui/icons'
import { ModalContent } from 'components/modal'
import { FormInput } from 'components/inputs'

import style from './insert-modal.module.scss'

type InsertModalProps = {
  handleFormInput: (e: ChangeEvent<HTMLInputElement>) => void
}

const InsertModal = ({ handleFormInput }: InsertModalProps) => {
  return (
    <ModalContent>
      <div className={style.insert}>
        <div className={style.img_container}>
          <div className={style.viewer}>

          </div>
          <div className={style.drop}>
            <div className={style.empty}>
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
            <FormInput placeholder='Código do Produto' name='code' handleInput={handleFormInput}/>
            <FormInput placeholder='Nome do Produto' name='name' handleInput={handleFormInput} />
          </div>
        </div>
      </div>
    </ModalContent>
  )
}

export default InsertModal