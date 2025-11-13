import { decos } from '@/routes/Information/Deco';
import { FunctionComponent } from 'react';

interface ProgramShortDecosProps {
  rtl?: boolean;
}

const ProgramShortDecos: FunctionComponent<ProgramShortDecosProps> = ({ rtl }) => {
  const Deco = decos[rtl ? 'rtl' : 'ltr'];
  return (
    <>
      <Deco l t23 x="107.5%" y="11.68%" rot="90deg" width="25%" flip />
      <Deco l t23 x="-14.5%" y="38.94%" rot="170deg" width="21%" flip />
      <Deco l t22 x="116%" y="35.82%" rot="90deg" width="12%" />
      <Deco l t21 x="95%" y="66.2%" rot="180deg" width="30%" flip />
      <Deco l t22 x="115%" y="80.22%" rot="90deg" width="20%" />
      <Deco l t25 x="-17%" y="74.76%" rot="200deg" width="26%" flip />
      <Deco l t24 x="82.5%" y="102.8%" rot="250deg" width="35%" />
      <Deco l t24 x="-17.5%" y="108.25%" rot="160deg" width="25%" />
    </>
  );
};

export default ProgramShortDecos;
