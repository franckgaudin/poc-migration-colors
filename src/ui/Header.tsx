import { Switch } from 'react-aria-components';
import type { SwitchProps } from 'react-aria-components';

import './header.scss';

export default function Header({ onChange }: { onChange: SwitchProps['onChange'] }) {

  const handleChange = (isSelected: boolean) => {
    onChange && onChange(isSelected);
  }

  return (
    <header className='header'>
      <Switch onChange={handleChange}>
        <div className="indicator" />
        Active Workleap brand
      </Switch>
    </header>
  )
}
