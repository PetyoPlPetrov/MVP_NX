import styles from './borrow.module.scss';
import {Ui} from '@mvp/ui'

/* eslint-disable-next-line */
export interface BorrowProps {}

export function Borrow(props: BorrowProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Borrow!</h1>
      <Ui />
    </div>
  );
}

export default Borrow;
