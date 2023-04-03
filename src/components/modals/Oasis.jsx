import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';

const Oasis = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button" size="small">
        Ver Contato
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Oásis Beach Club</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            <a href="http://oasisbeachclub.net/">| oasisbeachclub.net</a>
            <br />
            <a href="https://www.instagram.com/pousadaoasisbeachclub/?igshid=YmMyMTA2M2Y%3D">| @pousadaoasisbeachclub</a>
        </Dialog.Description>
        <div className='FooterBtn' style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
           <a href="http://oasisbeachclub.net/">
            <button className="Button-green">Conversar no Whatsapp</button>
            </a> 
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Oasis;