import React from 'react';

import * as Resizer from '@column-resizer/react';

export const DefaultSize = () => (
  <section>
    <h2>default size demo</h2>
    <Resizer.Container className="container">
      <Resizer.Section className="section" defaultSize={400}>
        default is 400px.
      </Resizer.Section>
      <Resizer.Bar size={10} className="bar" />
      <Resizer.Section className="section" />
    </Resizer.Container>
  </section>
);
