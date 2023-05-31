import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';

const ComandanteDasIlhas = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button" size="small">
        Ver Contato
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Comandante das Ilhas</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            <p>Jailton passeios fluviais</p>
            <br />
            <a href="https://www.instagram.com/comandantedasilhascanavieiras/?igshid=OGRjNzg3M2Y%3D">| @comandantedasilhas</a>
        </Dialog.Description>
        <div className='FooterBtn' style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default ComandanteDasIlhas;