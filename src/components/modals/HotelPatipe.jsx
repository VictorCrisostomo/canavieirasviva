import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';

const HotelPatipe = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button" size="small">
        Ver Contato
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Hotel Patipe</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            <a href="https://www.instagram.com/patipe_hotel/">| @hotelpatipe</a>
        </Dialog.Description>
        <div className='FooterBtn' style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
           <a href="https://wa.me/5573999088511">
            <button className="Button-green">Conversar no Whatsapp</button>
            </a> 
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default HotelPatipe;