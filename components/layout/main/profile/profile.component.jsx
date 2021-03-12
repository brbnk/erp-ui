import styles from './profile.module.scss'

const Profile = ({ name, role, img }) => {
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