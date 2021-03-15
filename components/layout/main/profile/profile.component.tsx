import styles from './profile.module.scss'

type ProfileType = {
  name: string,
  role: string,
  img: string
}

const Profile = ({ name, role, img }: ProfileType) => {
  const { profile, info } = styles

  return (
    <div className={profile}>
      <div className={info}>
        <h4> {name} </h4>
        <span> {role} </span>
      </div>
      <img src={img}/>
    </div>
  )
}

export default Profile