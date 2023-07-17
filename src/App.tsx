import { useEffect, useState } from 'react';

import Button from './ui/Button';
import Header from './ui/Header';
import Callout from './ui/Callout';

import { activeNewBrand } from './helper/featureSwitch';

export function App() {
  const [brandFlag, setBrandFlag] = useState(false)

  useEffect(() => {
    activeNewBrand(brandFlag)
  }, [brandFlag])

  return (
    <>
      <Header onChange={() => setBrandFlag(!brandFlag)} />
      <Button />
      <section style={{ marginBlock: '2.4rem'}}>
        <Callout />
      </section>
    </>
  );
}