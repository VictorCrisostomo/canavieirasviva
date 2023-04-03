import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';

const StellaMaris = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button" size="small">
        Ver Contato
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Pousada Stella Maris</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            <p>| Praia da Costa Norte, Ilha de Atalaia, Canavieiras, Bahia.</p>
            <br />
            <a href="www.stellamaris.tur.br">www.stellamaris.tur.br</a>
            <br />
            <a href="https://www.instagram.com/pousadastellamaris/">| @pousadastellamaris</a>
            <br />
        </Dialog.Description>
        <div className='FooterBtn' style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
           <a href="https://wa.me/5573991730979">
            <button className="Button-green">Conversar no WhatsApp</button>
            </a> 
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default StellaMaris;