import React from 'react';

import * as Resizer from '@column-resizer/react';

export const MaxMinSize = () => (
  <section>
    <h2>Max/Min size demo</h2>
    <Resizer.Container className="container">
      <Resizer.Section className="section" minSize={150}>
        150px min size.
      </Resizer.Section>
      <Resizer.Bar size={10} className="bar" />
      <Resizer.Section className="section" maxSize={600} defaultSize={200}>
        600px max size.
      </Resizer.Section>
    </Resizer.Container>
  </section>
);
