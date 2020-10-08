import React, { useState } from 'react';
import { ImmersiveModal, Button } from 'src/shared-components';

export const WithScrollingContent = () => {
  const [withScrolling, setWithScrolling] = useState(true);

  const onClick = () => setWithScrolling(true);
  const onClose = () => setWithScrolling(false);

  return (
    <React.Fragment>
      <Button onClick={onClick}>with scrolling content</Button>
      {withScrolling && (
        <ImmersiveModal onClose={onClose} title="Immersive modal title">
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
    </React.Fragment>
  );
};
