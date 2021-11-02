import './MonsterEye.scss';

interface MonsterEyeProps {
  side: 'left' | 'right';
}

const MonsterEye = ({ side }: MonsterEyeProps): JSX.Element => (
  <div className={`monster-eye monster-eye--${side}`}>
    <div className="monster-eye__pupil" />
  </div>
);

export default MonsterEye;
