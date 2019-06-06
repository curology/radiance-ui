import React from 'react';

import { LegalContainer } from '../style';

const Disclaimer = () => (
  <LegalContainer>
    <h1>Disclaimer</h1>
    <time dateTime="2019-01-09">Last Updated: January 9, 2019</time>
    <p>
      Please review our{' '}
      <a href="/terms" target="_blank" rel="noopener noreferrer">
        Terms of Service
      </a>{' '}
      for all disclaimers of our liability, which include:
    </p>
    <ul>
      <li>
        Curology, Inc. provides technological and other services to connect
        patients to licensed medical providers.
      </li>
      <li>
        All medical care and prescription products are provided licensed
        providers.
      </li>
      <li>Curology, Inc. does not provide any medical services.</li>
      <li>
        All customized prescription medications are produced and shipped by
        licensed professionals directly to patients.
      </li>
      <li>
        Curology will send you email correspondence that may contain details of
        your treatment. These emails will never contain your photos or payment
        information. We will never request that you email us any health
        information or payment information.
      </li>
      <li>
        Curology is exclusively for the diagnosis and treatment of acne and skin
        aging (and related conditions), and not for any other medical or
        dermatological conditions.
      </li>
      <li>
        Curology’s affiliated medical providers do not provide screening for
        skin cancer or for any other conditions aside from acne and skin aging.
      </li>
      <li>
        Curology does not replace your existing relationship with your primary
        care physician.
      </li>
      <li>Curology is not for emergencies.</li>
      <li>Curology is not an insurance product.</li>
      <li>
        Curology and its affiliated medical professionals operate subject to
        state regulation and may not be available in certain states.
      </li>
      <li>Curology does not guarantee that a prescription will be written.</li>
      <li>
        Curology’s affiliated medical providers do not prescribe DEA controlled
        substances.
      </li>
      <li>
        Curology does not cover the cost of any prescription pills that may be
        prescribed in addition to your customized prescription cream.
      </li>
      <li>
        Curology’s affiliated medical providers reserve the right to deny
        treatment if they believe that a patient may be better served by a local
        provider, or for any other reason according to their professional
        judgment.
      </li>
    </ul>
  </LegalContainer>
);

export default Disclaimer;
