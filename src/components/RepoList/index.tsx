import RepoItem from 'components/RepoItem'

import styles from './styles.module.scss'

export type RepoProps = {
  repository: {
    id: number
    name: string
    description: string
    stargazers_count?: string
    forks_count?: string
    language?: string
    owner?: {
      avatar: string
      avatar_url: string
      login: string
    }
  }
}

type RepoListProps = {
  loading: boolean
  repositories: RepoProps[]
}

const RepoList = ({ repositories, loading }: RepoListProps) => {
  if (loading) {
    return (
      <img src="/image/loader.gif" className={styles.loader} alt="Loading" />
    )
  }

  if (!repositories || repositories.length === 0) {
    return <span className={styles.message}>No repositories found.</span>
  }

  return (
    <div className={styles.repoList}>
      {repositories.map((repo, index) => (
        <RepoItem key={`repository-${index}`} repository={repo} />
      ))}
    </div>
  )
}

export default RepoList
