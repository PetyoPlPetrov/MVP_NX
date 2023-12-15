import styles from './ui.module.scss';
import {Utils} from '@mvp/utils'

// import {} from '@mvp/exchange'// NOT ALLOWED

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui!</h1>
      <Utils />
    </div>
  );
}

export default Ui;
