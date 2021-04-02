type Action = {
  type: 'INSERT' | 'UPDATE' | 'DELETE',
  event: () => void
}

type State = (s: boolean) => void

interface ModalActionsProps {
  action: Action,
  state: State
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