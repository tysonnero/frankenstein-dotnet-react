import MonsterEye from './MonsterEye';

import './TheMonster.scss';

const TheMonster = (): JSX.Element => (
  <div className="the-monster">
    <div className="the-monster__face">
      <div className="the-monster__hair" />
      <div className="the-monster__eyes">
        <MonsterEye side={'left'} />
        <MonsterEye side={'right'} />
      </div>
      <div className="the-monster__mouth" />
    </div>
  </div>
);

export default TheMonster;
