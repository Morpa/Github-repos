import Link from 'next/link'
import { FaStar, FaCodeBranch } from 'react-icons/fa'

import UserAvatar from 'components/UserAvatar'
import { RepoProps } from 'components/RepoList'

import styles from './styles.module.scss'

const RepoItem = ({ repository }: RepoProps) => {
  const cutDescription = (description: string) => {
    if (description.length > 100) {
      return `${description.slice(0, 100)}...`
    }

    return description
  }

  return (
    <div className={`${styles.repoListItem} box`}>
      <div className={styles.repoName}>
        <Link href="/repo/[id]" as={`/repo/${repository.id}`}>
          <a>{repository.name}</a>
        </Link>
      </div>

      <UserAvatar user={repository.owner} />
      <p className={styles.className}>
        {cutDescription(repository.description)}
      </p>

      <div className={styles.footer}>
        <div className={styles.counters}>
          <div className={styles.counter}>
            <FaStar />
            <span>{repository.stargazers_count}</span>
          </div>
          <div className={styles.counter}>
            <FaCodeBranch />
            <span>{repository.forks_count}</span>
          </div>
        </div>
        <div className={styles.language}>
          <span>{repository.language}</span>
        </div>
      </div>
    </div>
  )
}

export default RepoItem
