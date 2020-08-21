import Link from 'next/link';
import React from 'react';

export interface RepoProps {
  repo: {
    id: string;
    name: string;
    description: string;
  };
}

const RepoItem: React.FC<RepoProps> = ({ repo }) => {
  return (
    <div>
      <div>
        <Link href="/repo/[id]" as={`/repo/${repo.id}`}>
          <a>{repo.name}</a>
        </Link>
        <p>{repo.description}</p>
      </div>
    </div>
  );
};

export default RepoItem;
