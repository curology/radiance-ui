import React from 'react';

import { LegalContainer } from '../style';

const ParentGuardianTelehealthConsent = () => (
  <LegalContainer>
    <h1>Parent/Guardian Consent to Treatment via Telehealth</h1>
    <time dateTime="2019-01-09">Last Updated: February 15, 2019</time>
    <ol>
      <li>
        I am the parent or legal guardian of someone under 18 years of age
        (“Minor”) seeking treatment via telehealth. The person being treated
        pursuant to this Consent to Treatment via Telehealth is referred to as
        the “Patient”.
      </li>
      <li>
        I understand that Curology, Inc.’s affiliated healthcare providers
        (“healthcare provider”) treat patients via telehealth, and I wish for
        the Minor to be treated via telehealth. I understand that the telehealth
        treatment may involve all of the following (collectively “telehealth
        visit”):
        <ul>
          <li>
            Electronic creation and transmission of medical records, photo
            images, personal health information, or other data between me and or
            the Minor as the Patient and healthcare providers and among
            healthcare providers and entities; and
          </li>
          <li>
            Interactions between me and or the Minor as the Patient and a
            healthcare provider via data communications (including store and
            forward technology); and
          </li>
        </ul>
      </li>
      <li>
        I understand there are potential risks to a telehealth visit, including
        interruptions, unauthorized access which could disclose health
        information, and technical difficulties. I understand that I, the
        healthcare provider or the Patient can discontinue the treatment via
        telehealth visit if it is felt that the situation warrants.
      </li>
      <li>
        I understand that Patient information as part of the telehealth visit
        may be shared with other individuals or entities for technological and
        billing purposes and any information collected by a healthcare provider
        as part of this telehealth visit will be used for analyzing the
        patient’s health, possible treatments, to conduct follow-up activities
        with the Patient, including to offer other Curology products and
        services to the Patient, and will be used further as stated in the
        Curology{' '}
        <a href="/privacy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        .
      </li>
      <li>
        I understand that Patient care at Curology is limited to the diagnosis
        and treatment of acne and skin aging and related disorders and not for
        the diagnosis or treatment of any other medical or dermatological
        conditions, including skin cancer. I understand that the Website is not
        a substitute for the in-person treatment or advice of the Patient’s
        local dermatologist, primary care physician, or any other qualified
        healthcare professional. I understand that the Patient should never
        delay seeking advice from the Patient’s local dermatologist, primary
        care physician, or any other health professionals if advised to do so by
        the Patient’s Curology healthcare provider, or if the Patient has any
        concerns.
      </li>
      <li>
        I understand that Curology undertakes no obligation to review the
        inactive ingredients and or the base ingredients in any product that is
        recommended or sold to the Patient, including, without limitation, to
        ascertain that Patient is not allergic to such inactive or base
        ingredients. I further understand that it is solely the Patient’s (or
        the Patient’s legal guardian’s) responsibility to review those
        ingredients, as listed on the Curology website.
      </li>
      <li>
        I understand that if the Patient has an emergency health issue of any
        nature, the Patient (or the Patient’s legal guardian) should call local
        emergency medical number or take such other action as necessary.
      </li>
      <li>
        I understand that I have the right to request that the Medical Record
        established with Curology be sent to my primary healthcare provider. I
        may request this on my{' '}
        <a
          href="/app/dashboard/request-medical-record"
          target="_blank"
          rel="noopener noreferrer"
        >
          dashboard
        </a>
        .
      </li>
    </ol>
    <p>By continuing, I represent:</p>
    <ul>
      <li>
        That I have read or had this form read and/or had this form explained to
        me.
      </li>
      <li>
        That I fully understand its contents, including the risks and benefits
        of the telehealth service provided through Curology’s affiliates.
      </li>
    </ul>
  </LegalContainer>
);

export default ParentGuardianTelehealthConsent;
