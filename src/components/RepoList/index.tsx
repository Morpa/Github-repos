import RepoItem from '@components/RepoItem';
import React from 'react';

import styles from './styles.module.scss';

export interface RepoProps {
  id: string;
  name: string;
  description: string;
  repos: object;
}

interface RepositoriesProps {
  loading: boolean;
  repositories: RepoProps[];
}

const RepoList: React.FC<RepositoriesProps> = ({ repositories, loading }) => {
  if (loading) {
    return (
      <img src="/image/loader.gif" className={styles.loader} alt="Loading" />
    );
  }

  if (!repositories || repositories.length === 0) {
    return <span className={styles.message}>No repositories found.</span>;
  }

  return (
    <div className={styles.repoList}>
      {repositories.map(repository => (
        <RepoItem key={repository.id} repo={repository} />
      ))}
    </div>
  );
};

export default RepoList;
