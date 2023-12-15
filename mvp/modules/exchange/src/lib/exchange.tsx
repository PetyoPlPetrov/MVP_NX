import styles from './exchange.module.scss';

import {Ui} from '@mvp/ui'
/* eslint-disable-next-line */
export interface ExchangeProps {}

export function Exchange(props: ExchangeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Exchange!</h1>
      <Ui />
    </div>
  );
}

export default Exchange;
