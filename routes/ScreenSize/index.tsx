import styles from './index.module.css';

export const sizes = ['xxs', 'xs', 's', 'm', 'l'] as const;

type Props = {
  children: React.ReactNode;
} & SizeProps;

export type SizeProps = { [K in (typeof sizes)[number]]?: boolean };

const ScreenSize = (props: Props) => {
  return (
    <div
      className={`${[
        styles.any,
        ...sizes.filter((s) => props[s]).map((s) => styles[s])
      ].join(' ')}`}
    >
      {props.children}
    </div>
  );
};

export default ScreenSize;
