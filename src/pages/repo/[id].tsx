import { GetServerSideProps } from 'next'

import Button from 'components/Button'
import UserAvatar from 'components/UserAvatar'
import { getRepo } from 'services/githubService'

import styles from './styles.module.scss'

type RepoProps = {
  repo: {
    id: string
    name?: string
    owner?: string
    description?: string
    language?: string
    html_url?: string
  }
}

const Repo = ({ repo }: RepoProps) => {
  return (
    <div>
      <Button href="/" text="Back" />

      <div className={styles.header}>
        <span>{repo.name}</span>
      </div>
      <UserAvatar user={repo.owner} />
      <div className={styles.description}>{repo.description}</div>
      <div className={styles.language}>{repo.language}</div>

      <Button
        href={repo.html_url}
        text="View on Github"
        type="dark"
        target="_blank"
        external
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await getRepo(query.id)

  return {
    props: { repo: response.data }
  }
}
export default Repo
