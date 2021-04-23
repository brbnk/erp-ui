import { InsertPhoto } from '@material-ui/icons'

const EmptyList = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <InsertPhoto style={{fontSize: '4rem'}}/>
      <span> Drag and drop files here </span>
    </div>
  )
}

export default EmptyList