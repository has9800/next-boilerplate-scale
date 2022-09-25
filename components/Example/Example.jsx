import { useExampleContext } from '@/context/ExampleContext';
import styles from './example.module.scss';

const Example = () => {
  const { foo } = useExampleContext();
  console.log(foo);

  return (
    <div className={styles.eg}>
      <h1 className={styles.h1}>Example component</h1>
    </div>
  );
};

export default Example;
