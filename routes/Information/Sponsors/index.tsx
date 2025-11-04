/* eslint-disable @next/next/no-img-element */
import styles from './index.module.css';
import sponsors2564x928 from '@/assets/sponsors/2564x928.webp';
import sponsors1282x464 from '@/assets/sponsors/1282x464.webp';
import sponsors641x232 from '@/assets/sponsors/641x232.webp';

const Sponsors = () => {
  return (
    <div className={styles.root}>
      <img
        src={sponsors1282x464.src}
        srcSet={`
          ${sponsors641x232.src} 641w,
          ${sponsors1282x464.src} 1282w,
          ${sponsors2564x928.src} 2564w
        `}
        alt="Sponsors"
      />
    </div>
  );
};

export default Sponsors;
