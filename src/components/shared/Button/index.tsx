import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

interface ButtonProps {
  href?: string;
  text?: string;
  target?: string;
  external?: boolean;
  type?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  type = 'primary',
  target,
  external,
}) => {
  const types = {
    primary: 'is-primary',
    success: 'is-success',
    danger: 'is-danger',
    dark: 'is-dark',
    light: 'is-light',
  };
  const buttonClass = `button ${types[type]}`;

  if (external) {
    return (
      <div className={styles.button}>
        <a className={buttonClass} target={target} href={href}>
          {text}
        </a>
      </div>
    );
  }

  return (
    <div className={styles.button}>
      <Link href={href}>
        <a className={buttonClass} target={target}>
          {text}
        </a>
      </Link>
    </div>
  );
};

export default Button;
