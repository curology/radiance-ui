import React, { useState } from 'react';
import { ImmersiveModal, Button } from 'src/shared-components';

import headerImage from './headerImage.jpg';

const ImmersiveModalExamples = (): JSX.Element => {
  const [defaultIsOpen, setDefaultIsOpen] = useState(true);
  const [headerImageIsOpen, setheaderImageIsOpen] = useState(false);

  return (
    <React.Fragment>
      {/* DEFAULT MODAL */}
      <Button onClick={(): void => setDefaultIsOpen(true)}>
        Open standard modal
      </Button>
      {defaultIsOpen && (
        <ImmersiveModal
          onClose={(): void => setDefaultIsOpen(false)}
          footerContent={
            <Button.Container>
              <Button isFullWidth>Update Payment Method</Button>
            </Button.Container>
          }
          title="Immersive modal title"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
        </ImmersiveModal>
      )}
      <br />
      <br />
      {/* MODAL WITH HEADER */}
      <Button onClick={(): void => setheaderImageIsOpen(true)}>
        Open with image as header
      </Button>
      {headerImageIsOpen && (
        <ImmersiveModal
          onClose={(): void => setheaderImageIsOpen(false)}
          headerImage={<img src={headerImage} alt="header" />}
          title="With image as header"
          footerContent={
            <Button.Container>
              <Button isFullWidth>Update Payment Method</Button>
            </Button.Container>
          }
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
        </ImmersiveModal>
      )}
    </React.Fragment>
  );
};

export default ImmersiveModalExamples;
