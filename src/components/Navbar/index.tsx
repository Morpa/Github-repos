import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <a>
            <Link href="/">Home</Link>
          </a>
        </li>
        <li>
          <a>
            <Link href="/about">About</Link>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
