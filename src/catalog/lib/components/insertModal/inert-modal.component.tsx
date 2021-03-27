import { InsertPhoto } from '@material-ui/icons'
import { ModalContent } from 'lib/components/modal'
import { FormInput, Checkbox } from 'lib/components/inputs'

import style from './insert-modal.module.scss'

type InsertModalProps = {
  handleFormInput: (name: string, value: string | number | boolean) => void
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
            <div>
              <FormInput
                placeholder='Cód. Produto'
                name='code'
                handleInput={handleFormInput}
              />
              <FormInput
                placeholder='Cód. Auxiliar'
                name='auxcode'
                handleInput={handleFormInput}
              />
              <FormInput
                placeholder='Ref'
                name='reference'
                handleInput={handleFormInput}
              />
              <FormInput
                style={{ gridColumn: '1/4' }}
                placeholder='Nome do Produto'
                name='name'
                handleInput={handleFormInput}
              />
            </div>
          </div>
          <div>
            <h2> Visibilidade </h2>
            <div>
              <Checkbox name='isactive' label='Ativo?' handleInput={handleFormInput} />
            </div>
          </div>
        </div>
      </div>
    </ModalContent>
  )
}

export default InsertModal