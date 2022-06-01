import React from 'react';
import { observer } from '@formily/reactive-react';
import LeftMenusSettings from './components/LeftMenusSettings';
import WorkBench from './components/WorkBench';
import DataSourceSettings from './components/DataSourceSettings';
import cls from 'classnames'
import { prefix } from './shared/constants';
import './global/style.less'
import Header from './components/Header';
import Footer from './components/Footer';
import { setNpmCDNRegistry } from './components/registry';


setNpmCDNRegistry('//unpkg.com')


export default observer(() => {
  return (
    <div>
      <Header />
      <div className={cls(prefix + '-bg-container')}>
        <LeftMenusSettings />
        <WorkBench />
        <DataSourceSettings />
      </div>
      <Footer />
    </div>
  );
});