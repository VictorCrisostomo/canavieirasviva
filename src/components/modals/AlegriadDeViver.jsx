import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';

const AlegradDeViver = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button" size="small">
        Ver Contato
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Restaurante Alegria de Viver</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
        <Dialog.Description className="DialogDescription">
            <a href="https://www.instagram.com/restaurante_alegria_de_viver/">| @restaurante_alegria_de_viver</a>
            <br />
            <a href="https://www.facebook.com/carloslima.lima.1217727">| @carloslima.lima</a>
        </Dialog.Description>
        </Dialog.Description>
        <div className='FooterBtn' style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
           <a href="https://api.whatsapp.com/send?phone=5573999769900&text=">
            <button className="Button-green">Conversar no whatsapp</button>
            </a> 
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default AlegradDeViver;