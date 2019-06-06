import React from 'react';

import { LegalContainer } from '../style';

const TelehealthConsent = () => (
  <LegalContainer>
    <h1>Consent to Treatment via Telehealth</h1>
    <time dateTime="2019-01-09">Last Updated: January 9, 2019</time>
    <ol>
      <li>
        I understand that Curology, Inc.’s affiliated healthcare providers
        (“healthcare provider”) treat patients via telehealth, and I wish to be
        treated via telehealth. I understand that my telehealth treatment may
        involve all of the following (collectively “telehealth visit”):
        <ul>
          <li>
            Electronic creation and transmission of medical records, photo
            images, personal health information, or other data between me as the
            patient and healthcare providers and among healthcare providers and
            entities; and
          </li>
          <li>
            Interactions between me and a healthcare provider via data
            communications (including store and forward technology); and
          </li>
        </ul>
      </li>
      <li>
        I understand there are potential risks to a telehealth visit, including
        interruptions, unauthorized access which could disclose my health
        information, and technical difficulties. I understand that my healthcare
        provider or I can discontinue the treatment via telehealth visit if it
        is felt that the situation warrants.
      </li>
      <li>
        I understand that my health information as part of the telehealth visit
        may be shared with other individuals or entities for technological and
        billing purposes and any information collected by my healthcare provider
        as part of this telehealth visit will be used for analyzing my health,
        possible treatments, to conduct follow-up activities with me, including
        to offer other Curology products and services to me, and will be used
        further as stated in the Curology{' '}
        <a href="/privacy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        .
      </li>
      <li>
        I understand that my care at Curology is limited to the diagnosis and
        treatment of acne and skin aging and related disorders and not for the
        diagnosis or treatment of any other medical or dermatological
        conditions, including skin cancer. I understand that the Website is not
        a substitute for the in-person treatment or advice of my local
        dermatologist, primary care physician, or any other qualified healthcare
        professional. I understand that I should never delay seeking advice from
        my local dermatologist, primary care physician, or any other health
        professionals if advised to do so by my Curology healthcare provider, or
        if I have any concerns.
      </li>
      <li>
        I understand that Curology undertakes no obligation to review the
        inactive ingredients and or the base ingredients in any product that is
        recommended or sold to me, including, without limitation, to ascertain
        that I am not allergic to such inactive or base ingredients. I further
        understand that it is solely my responsibility to review those
        ingredients, as listed on the Curology website.
      </li>
      <li>
        I understand that if I have an emergency health issue of any nature, I
        should call my local emergency medical number or take such other action
        as I deem necessary.
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

export default TelehealthConsent;
