import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';

const Makaira = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button" size="small">
        Ver Contato
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Makaira Beach Resort</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            <p>Central de reservas: <a href="tel://08006008088">0800 600 8088 </a></p>
            <br />
            <a href="www.makaira.com.br">| makaira.com.br</a>
            <br />
            <a href="https://www.instagram.com/makairabeachresort/">| @makairabeachresort</a>
        </Dialog.Description>
        <div className='FooterBtn' style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
           <a href="https://api.whatsapp.com/send/?phone=5573999687267&text&type=phone_number&app_absent=0">
            <button className="Button-green">Conversar no Whatsapp</button>
            </a> 
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Makaira;