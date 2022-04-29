import { prefix } from '@/shared/constants';
import React from 'react';
import '../style.less'

function Logo() {
  return (
    <div>
      <a className={`${prefix}--header--logo`}>Table Designer</a>
    </div>
  );
}

export default Logo;
