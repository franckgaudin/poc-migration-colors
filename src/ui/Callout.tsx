import clsx from 'clsx';

export type Type = 'information' | 'sucess' | 'warning' | 'upsell'

import './callout.scss';

export default function Callout({ type = 'information'}: { type?: Type }) {
  return <div className={clsx("callout", { [`callout--${type}`]: type !== 'information'} )} >
    <div className="callout__placeholder"/>
    <div className="callout__content">
      <h2 className="callout__title">Callout title</h2>
      <p>description</p>
    </div>
    <div className="callout__close" />
  </div>
}