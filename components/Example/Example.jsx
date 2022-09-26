import { useExampleContext } from '@/context/ExampleContext';
import useSWR from 'swr';
import styles from './example.module.scss';

const Example = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, loading } = useSWR('/api/hello', fetcher);

  const { foo } = useExampleContext();

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error occured fetching data!</h1>;

  return (
    <div className={styles.eg}>
      <h1 className={styles.h1}>Example component</h1>
      <p>{data.name}</p>
      <p>{foo}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          throw new Error('Sentry Frontend Error');
        }}
      >
        Throw sentry error
      </button>
    </div>
  );
};

export default Example;
