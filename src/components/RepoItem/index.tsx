import UserAvatar from '@components/UserAvatar';
import Link from 'next/link';
import React from 'react';
import { FaStar, FaCodeBranch } from 'react-icons/fa';

import styles from './styles.module.scss';

export interface RepoProps {
  repo: {
    id: string;
    name: string;
    description: string;
    stargazers_count?: string;
    forks_count?: string;
    language?: string;
    owner?: {
      avatar: string;
      avatar_url: string;
      login: string;
    };
  };
}

const RepoItem: React.FC<RepoProps> = ({ repo }) => {
  const cutDescription = (description: string) => {
    if (description.length > 100) {
      return `${description.slice(0, 100)}...`;
    }

    return description;
  };

  return (
    <div className={`${styles.repoListItem} box`}>
      <div className={styles.repoName}>
        <Link href="/repo/[id]" as={`/repo/${repo.id}`}>
          <a>{repo.name}</a>
        </Link>
      </div>

      <UserAvatar user={repo.owner} />
      <p className={styles.className}>{cutDescription(repo.description)}</p>

      <div className={styles.footer}>
        <div className={styles.counters}>
          <div className={styles.counter}>
            <FaStar />
            <span>{repo.stargazers_count}</span>
          </div>
          <div className={styles.counter}>
            <FaCodeBranch />
            <span>{repo.forks_count}</span>
          </div>
        </div>
        <div className={styles.language}>
          <span>{repo.language}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
