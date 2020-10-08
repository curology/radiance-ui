import React, { useState } from 'react';
import { ImmersiveModal, Button } from 'src/shared-components';

import headerImage from './headerImage.jpg';

export const WithHeaderImage = () => {
  const [withImageHeader, setWithImageHeader] = useState(true);

  const onClick = () => setWithImageHeader(true);
  const onClose = () => setWithImageHeader(false);

  return (
    <React.Fragment>
      <Button onClick={onClick}>with image as header</Button>
      {withImageHeader && (
        <ImmersiveModal
          onClose={onClose}
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
