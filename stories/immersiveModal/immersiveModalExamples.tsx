import React, { useState } from 'react';
import { ImmersiveModal, Button } from 'src/shared-components';

import headerImage from './headerImage.jpg';

const ImmersiveModalExamples = (): JSX.Element => {
  const [withScrolling, setWithScrolling] = useState(false);
  const [withButtons, setWithButtons] = useState(false);
  const [withImageHeader, setWithImageHeader] = useState(false);

  return (
    <React.Fragment>
      {/* MODAL: scrolling */}
      <Button onClick={(): void => setWithScrolling(true)}>
        with scrolling content
      </Button>
      {withScrolling && (
        <ImmersiveModal
          onClose={(): void => setWithScrolling(false)}
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
      {/* MODAL: with buttons */}
      <Button onClick={(): void => setWithButtons(true)}>
        with footer buttons
      </Button>
      {withButtons && (
        <ImmersiveModal
          onClose={(): void => setWithButtons(false)}
          footerContent={
            <Button.Container>
              <Button isFullWidth>cta content</Button>
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
        </ImmersiveModal>
      )}
      <br />
      <br />
      {/* MODAL WITH HEADER */}
      <Button onClick={(): void => setWithImageHeader(true)}>
        with image as header
      </Button>
      {withImageHeader && (
        <ImmersiveModal
          onClose={(): void => setWithImageHeader(false)}
          headerImage={<img src={headerImage} alt="header" />}
          title="With image as header"
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
