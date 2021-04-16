import styles from './Profile.module.scss'

interface ProfileProps {
  name: string,
  role: string,
  img: string
}

const Profile = ({ name, role, img }: ProfileProps) => {
  const { profile, info } = styles

  return (
    <div className={profile}>
      <div className={info}>
        <h4> { name } </h4>
        <span> { role } </span>
      </div>
      <img src={ img } alt="Foto do Usuário"/>
    </div>
  )
}

export default Profile