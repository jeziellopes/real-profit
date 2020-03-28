import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require('../../assets/logo.svg');

export default function LogoMenu() {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <img
        src={logo}
        alt=""
        style={{
          width: 40,
          height: 40,
        }}
      />

    </div>

  );
}
