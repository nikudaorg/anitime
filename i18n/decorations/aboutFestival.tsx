import { decos } from '@/routes/Information/Deco';
import { FunctionComponent } from 'react';

interface AboutFestivalDecosProps {
  rtl?: boolean;
}

const AboutFestivalDecos: FunctionComponent<AboutFestivalDecosProps> = ({ rtl }) => {
  const Deco = decos[rtl ? 'rtl' : 'ltr'];
  return (
    <>
      <Deco l t22 x="-21%" y="-6.25%" rot="90deg" width="18%" />
      <Deco l t21 x="35%" y="6.72%" rot="270deg" width="20%" flip />
      <Deco l t25 x="10.5%" y="-1.53%" rot="330deg" width="21%" flip />
      <Deco l t23 x="60.5%" y="13.125%" rot="170deg" width="21%" flip />
      <Deco l t24 x="97.5%" y="8.94%" rot="90deg" width="25%" />
      <Deco l t22 x="76%" y="25.8%" rot="90deg" width="12%" />
      <Deco l t21 x="126%" y="30.7%" rot="180deg" width="22%" flip />
      <Deco l t24 x="118.5%" y="60.5%" rot="180deg" width="27%" flip />
      <Deco l t23 x="-19%" y="25%" rot="80deg" width="32%" flip />
      <Deco l t22 x="-19%" y="55.8%" rot="90deg" width="12%" />
      <Deco l t24 x="-11.5%" y="90.5%" rot="90deg" width="27%" />
    </>
  );
};

export default AboutFestivalDecos;
