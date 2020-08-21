import RepoItem from '@components/RepoItem';
import React from 'react';

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
    return <div>Loading...</div>;
  }

  if (!repositories || repositories.length === 0) {
    return <span>No repositories found.</span>;
  }

  return (
    <div>
      {repositories.map(repository => (
        <RepoItem key={repository.id} repo={repository} />
      ))}
    </div>
  );
};

export default RepoList;
