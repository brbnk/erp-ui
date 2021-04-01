type Action = 'INSERT' | 'UPDATE' | 'DELETE'

type ModalActionsProps = {
  action: {
    type: Action,
    event: () => void
  },
  state: (state: boolean) => void
}

import style from './modalActions.module.scss'

const ModalActions = ({ action, state }: ModalActionsProps) => {
  const { type, event } = action
  return (
    <div className={style.actions}>
      { type == 'INSERT' ? <span className={style.insert} onClick={event}> INSERIR </span> : null }
      { type == 'UPDATE' ? <span className={style.insert} onClick={event}> EDITAR </span> : null }
      { type == 'DELETE' ? <span className={style.insert} onClick={event}> DELETAR </span> : null }
      <span className={style.cancel} onClick={() => state(false)}> CANCELAR </span>
    </div>
  )
}

export default ModalActions