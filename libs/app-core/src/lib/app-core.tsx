import styles from './app-core.module.css';

/* eslint-disable-next-line */
export interface AppCoreProps {}

export function AppCore(props: AppCoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AppCore!</h1>
    </div>
  );
}

export default AppCore;
