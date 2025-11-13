import { decos } from '@/routes/Information/Deco';
import { FunctionComponent } from 'react';

interface ProgramLongDecosProps {
  rtl?: boolean;
}

const ProgramLongDecos: FunctionComponent<ProgramLongDecosProps> = ({ rtl }) => {
  const Deco = decos[rtl ? 'rtl' : 'ltr'];
  return (
    <>
      <Deco l t23 x="107.5%" y="2.2%" rot="90deg" width="25%" flip />
      <Deco l t24 x="-15.2%" y="3.4%" rot="72deg" width="18%" flip />
      <Deco l t24 x="102.6%" y="4.3%" rot="330deg" width="15%" flip />
      <Deco l t22 x="-17.3%" y="7.6%" rot="290deg" width="13%" />
      <Deco l t24 x="110.1%" y="9.0%" rot="15deg" width="22%" flip /> {/* new */}
      <Deco l t22 x="-18.4%" y="10.1%" rot="320deg" width="16%" /> {/* new */}
      <Deco l t25 x="105.9%" y="12.0%" rot="200deg" width="14%" />
      <Deco l t25 x="-19.2%" y="14.8%" rot="60deg" width="32%" flip />
      <Deco l t23 x="113.7%" y="18.5%" rot="240deg" width="19%" /> {/* new */}
      <Deco l t24 x="-15.9%" y="21.2%" rot="100deg" width="24%" flip /> {/* new */}
      <Deco l t25 x="112.2%" y="25.7%" rot="120deg" width="13%" />
      <Deco l t22 x="-17.6%" y="29.1%" rot="310deg" width="18%" flip /> {/* new */}
      <Deco l t24 x="108.9%" y="30.2%" rot="35deg" width="20%" /> {/* new */}
      <Deco l t25 x="104.2%" y="33.3%" rot="85deg" width="23%" flip />
      <Deco l t21 x="-14.1%" y="36.9%" rot="275deg" width="22%" />
      <Deco l t23 x="112.7%" y="39.8%" rot="160deg" width="21%" flip /> {/* new */}
      <Deco l t24 x="-17.9%" y="41.8%" rot="30deg" width="15%" /> {/* new */}
      <Deco l t21 x="111.6%" y="44.7%" rot="310deg" width="26%" />
      <Deco l t24 x="-14.8%" y="47.9%" rot="300deg" width="19%" flip /> {/* new */}
      <Deco l t22 x="104.9%" y="49.5%" rot="10deg" width="17%" /> {/* new */}
      <Deco l t21 x="113.9%" y="52.2%" rot="5deg" width="25%" flip />
      <Deco l t22 x="-16.4%" y="55.8%" rot="10deg" width="17%" flip />
      <Deco l t25 x="108.7%" y="59.0%" rot="75deg" width="14%" /> {/* new */}
      <Deco l t23 x="-18.7%" y="61.9%" rot="220deg" width="26%" flip /> {/* new */}
      <Deco l t21 x="108.3%" y="66.4%" rot="185deg" width="21%" />
      <Deco l t25 x="-19.1%" y="70.2%" rot="260deg" width="15%" flip /> {/* new */}
      <Deco l t22 x="104.8%" y="71.4%" rot="350deg" width="22%" /> {/* new */}
      <Deco l t23 x="113.4%" y="73.1%" rot="95deg" width="29%" />
      <Deco l t24 x="-15.0%" y="77.6%" rot="180deg" width="20%" flip /> {/* new */}
      <Deco l t25 x="109.2%" y="79.0%" rot="45deg" width="16%" /> {/* new */}
      <Deco l t22 x="-17.8%" y="82.3%" rot="140deg" width="20%" flip />
      <Deco l t22 x="110.7%" y="89.0%" rot="225deg" width="18%" />
      <Deco l t21 x="-15.3%" y="92.2%" rot="120deg" width="17%" flip /> {/* new */}
      <Deco l t24 x="113.0%" y="95.0%" rot="280deg" width="28%" /> {/* new */}
      <Deco l t23 x="-14.5%" y="97.5%" rot="40deg" width="28%" flip />
      <Deco l t23 x="109.8%" y="101.2%" rot="250deg" width="24%" flip />
      <Deco l t22 x="-17.4%" y="103.0%" rot="330deg" width="15%" /> {/* new */}
      <Deco l t24 x="112.1%" y="104.0%" rot="140deg" width="21%" flip /> {/* new */}
      <Deco l t23 x="-16.9%" y="105.0%" rot="180deg" width="27%" flip />
      {/* <Deco l t24 x="-18.9%" y="-2.5%" rot="315deg" width="30%" flip /> */}
      {/* <Deco l t24 x="107.5%" y="-3.8%" rot="150deg" width="20%" /> */}
      {/*x: 0 to -13 - width/2 or 100 to 113 + width/2*/}
      {/*y: -5 to 105%*/}
    </>
  );
};

export default ProgramLongDecos;
