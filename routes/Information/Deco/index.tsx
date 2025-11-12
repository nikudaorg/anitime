/* eslint-disable @next/next/no-img-element */
import decor21 from '@/assets/decorations/21.webp';
import decor22 from '@/assets/decorations/22.webp';
import decor23 from '@/assets/decorations/23.webp';
import decor24 from '@/assets/decorations/24.webp';
import decor25 from '@/assets/decorations/25.webp';
import { PropsOptions } from '../../PropsOptions';
import ScreenSize, { SizeProps, sizes } from '../../ScreenSize';

import styles from './index.module.css';
import { ReactNode } from 'react';

type Props = {
  rot?: `${number}deg`;
  /** Width in the percents of container's width */
  width: `${number}%`;
  flip?: boolean;

  /** y in percents of container's height */
  y: `${number}%`;

  /** x in percents of container's width */
  x: `${number}%`;

  zIndex?: number;
} & PropsOptions<['t21' | 't22' | 't23' | 't24' | 't25']> &
  SizeProps;

const srcMapping = {
  '21': decor21,
  '22': decor22,
  '23': decor23,
  '24': decor24,
  '25': decor25,
} as const;

const aspectRatios = {
  '21': '400 / 381',
  '22': '400 / 386',
  '23': '408 / 500',
  '24': '404 / 600',
  '25': '400 / 480',
} as const;

type DecoName = keyof typeof srcMapping;

const withName = <Props,>(name: string, Component: (props: Props) => ReactNode) => {
  (Component as never as { displayName: string }).displayName = name;
  return Component;
};
/**
 *
 * Always add to a container with container-type: inline-size and position: relative;
 *
 * @param rtl
 * @returns
 */
const createDeco = (rtl: boolean) => {
  return withName(`getDeco(${rtl})`, (props: Props) => {
    const type = Object.keys(srcMapping).find(
      (e) => props[`t${e as DecoName}`] as boolean
    ) as DecoName;

    const imgSrc = srcMapping[type].src;

    const flip = props.flip ? !rtl : rtl;
    return (
      <ScreenSize {...Object.fromEntries(sizes.map((s) => [s, props[s]]))}>
        <img
          alt=""
          className={`${[styles.decoration]}`}
          src={imgSrc}
          style={{
            width: `${props.width.slice(0, -1)}cqw`,
            ['--rotate-start' as string]: `${rtl ? '-' : 0}${props.rot}` || '0deg',
            top: rtl ? `${parseFloat(props.y.slice(0, -1)) * 1.03}%` : props.y,
            [rtl ? 'right' : 'left']: `${props.x.slice(0, -1)}cqw`,
            ...(flip ? { '--scaleX': '-1', '--scaleY': '1' } : {}),
            aspectRatio: aspectRatios[type],
            zIndex: props.zIndex ?? 3,
            ['--x' as string]: rtl ? '50%' : '-50%',
            ['--y' as string]: '-50%',
          }}
        />
      </ScreenSize>
    );
  });
};
export const decos = {
  ltr: createDeco(false),
  rtl: createDeco(true),
};
