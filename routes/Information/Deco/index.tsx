/* eslint-disable @next/next/no-img-element */
import decor21 from '@/assets/decorations/21.webp';
import decor22 from '@/assets/decorations/22.webp';
import decor23 from '@/assets/decorations/23.webp';
import decor24 from '@/assets/decorations/24.webp';
import decor25 from '@/assets/decorations/25.webp';
import { PropsOptions } from '../../PropsOptions';
import ScreenSize, { SizeProps, sizes } from '../../ScreenSize/';

import styles from './index.module.css';
import { Locale } from '@/i18n';
// type Sign = '-' | '';

type Props = {
  rot?: `${number}deg`;
  /** Width in the percents of var(--width) */
  width: `${number}%`;
  flip?: boolean;

  /** y in percents of container */
  y: `${number}%`;

  /** x in percents of var(--width)*/
  x: `${number}%`;

  // /** X Origin of decoration in percents */
  // originX?: number;
  // /** Y Origin of decoration in percents */
  // originY?: number;

  zIndex?: number;
  loc: Locale;
} & PropsOptions<['t21' | 't22' | 't23' | 't24' | 't25']> &
  SizeProps;

const srcMapping = {
  '21': decor21,
  '22': decor22,
  '23': decor23,
  '24': decor24,
  '25': decor25
} as const;

const aspectRatios = {
  '21': '400 / 381',
  '22': '400 / 386',
  '23': '408 / 500',
  '24': '404 / 600',
  '25': '400 / 480'
} as const;

type DecoName = keyof typeof srcMapping;

const Deco = (props: Props) => {
  const type = Object.keys(srcMapping).find(
    (e) => props[`t${e as DecoName}`] as boolean
  ) as DecoName;

  const imgSrc = srcMapping[type].src;
  let left = parseFloat(props.x.slice(0, -1)) / 100;
  let top = props.y;
  const rtl = props.loc === "he";
  if (rtl) left = 0.75 - left;
  if (rtl) top = `${parseFloat(top.slice(0, -1)) * 1.03}%`;
  const flip = props.flip ? !rtl : rtl;
  // const rot = rtl ? `${0 - parseInt(props.rot?.slice(0, -3) || "0")}deg` : props.rot;
  return (
    <ScreenSize {...Object.fromEntries(sizes.map((s) => [s, props[s]]))}>
      <img
        alt=""
        className={`${[styles.decoration]}`}
        src={imgSrc}
        style={{
          width: `calc(${parseFloat(props.width.slice(0, -1)) / 100} * var(--width))`,
          ["--start" as string]: `${rtl ? "-" : 0}${props.rot}` || "0deg",
          top,
          left: `calc(${left} * var(--width))`,
          // ...(props.originX !== 0
          //   ? { '--x': `${-(props.originX || 50)}%` }
          //   : {}),
          // ...(props.originY !== 0
          //   ? { '--y': `${-(props.originY || 50)}%` }
          //   : {}),
          ...(flip ? { "--scaleX": "-1", "--scaleY": "1" } : {}),
          aspectRatio: aspectRatios[type],
          zIndex: props.zIndex ?? 3,
        }}
      />
    </ScreenSize>
  );
};

export default Deco;
