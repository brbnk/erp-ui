type Action = {
  type: 'INSERT' | 'UPDATE' | 'DELETE',
  event: () => void
}

type State = (s: boolean) => void

export interface ModalActionsProps {
  action: Action,
  state: State
}

import style from './ModalActions.module.scss'

const ModalActions = ({ action, state }: ModalActionsProps) => {
  const { event } = action

  const actionText = (action: Action) => {
    switch(action.type) {
      case 'DELETE': return 'DELETAR'
      case 'INSERT': return 'INSERIR'
      case 'UPDATE': return 'EDITAR'
    }
  }

  return (
    <div className={style.actions}>
      <span className={style.insert} onClick={event}> { actionText(action) } </span>
      <span className={style.cancel} onClick={() => state(false)}> CANCELAR </span>
    </div>
  )
}

export default ModalActions