import Button from '@components/shared/Button';
import UserAvatar from '@components/UserAvatar';
import { getRepo } from '@services/githubService';
import { GetServerSideProps } from 'next';
import React from 'react';

import styles from './styles.module.scss';

interface RepoProps {
  repo: {
    name?: string;
    owner?: string;
    description?: string;
    language?: string;
    html_url?: string;
  };
}

const Repo: React.FC<RepoProps> = ({ repo }) => {
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
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await getRepo(query.id);

  return {
    props: { repo: response.data },
  };
};
export default Repo;
