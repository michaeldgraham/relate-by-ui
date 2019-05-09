import React, { useState } from 'react';
import { withInfo } from '@storybook/addon-info';

import { Modal as OriginalModal } from '@relate-by-ui/modal';
import { ButtonActionPrimary } from '@relate-by-ui/buttons';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Modules', module);

const Modal = props => {
  const [open, setModalState] = useState(false);

  props.semanticModal.open = open;
  props.semanticModal.trigger = <ButtonActionPrimary title="Open modal" onClick={() => setModalState(true)} />;
  props.semanticModal.onClose = () => setModalState(false);

  return (
    <div className="ui">
      <h1 className="ui dividing header">Modal</h1>
      <OriginalModal {...props}>{props.children}</OriginalModal>
    </div>
  );
};

stories.add(
  'Modal',
  () => (
    <Modal
      title="This is the title"
      contentClassName="test-modal"
      semanticModal={{
        className: 'test-semantic-modal',
      }}
    >
      <p>This is the modal content</p>
    </Modal>
  ),
  {
    info: {
      text: `The modal component.`,
    },
  },
);