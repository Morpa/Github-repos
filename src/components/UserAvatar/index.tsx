import Link from 'next/link'

import styles from './styles.module.scss'

type UserProps = {
  user: {
    avatar: string
    avatar_url: string
    login: string
  }
}

const UserAvatar = ({ user }: UserProps) => {
  return (
    <div className={styles.user}>
      <figure className={`${styles.avatar} image`}>
        <img className="is-rounded" src={user.avatar_url} alt="avatar" />
      </figure>
      <div className={styles.userLink}>
        <Link href="/profile/[id]" as={`/profile/${user.login}`}>
          <a>{user.login}</a>
        </Link>
      </div>
    </div>
  )
}

export default UserAvatar
