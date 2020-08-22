import Button from '@components/shared/Button';
import { getProfile } from '@services/githubService';
import { GetServerSideProps } from 'next';
import React from 'react';

import styles from './styles.module.scss';

interface ProfileProps {
  profile: {
    name: string;
    bio: string;
    email: string;
    blog: string;
    followers: string;
    following: string;
    location: string;
    html_url: string;
  };
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <div>
      <Button href="/" text="Back" />

      <h3 className="is-size-3">{profile.name}</h3>
      {profile.bio && <div className={styles.text}>{profile.bio}</div>}
      {profile.email && <div className={styles.text}>{profile.email}</div>}
      {profile.blog && <div className={styles.text}>{profile.blog}</div>}
      {profile.location && (
        <div className={styles.text}>{profile.location}</div>
      )}

      <div className={styles.counters}>
        <div>Followers: {profile.followers}</div>
        <div>Following: {profile.following}</div>
      </div>

      <Button
        href={profile.html_url}
        text="View on Github"
        type="dark"
        target="_blank"
        external
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await getProfile(query.id);

  return {
    props: { profile: response.data },
  };
};
export default Profile;
