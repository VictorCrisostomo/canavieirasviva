import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';

const Kigata = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button" size="small">
        Ver Contato
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Kigata</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            Endereço: R. General Pederneiras, 638, Centro | Canavieiras Bahia.
            <br />
            <a href="https://instagram.com/kigatacosmeticosebijuterias?igshid=OGRjNzg3M2Y=">kigatacosmeticosebijuterias</a>
        </Dialog.Description>
        <div className='FooterBtn' style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
           <a href="https://api.whatsapp.com/send/?phone=5573998455846&text&type=phone_number&app_absent=0">
            <button className="Button-green">Conversar no Whatsapp</button>
            </a> 
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Kigata;