import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';

const LojaDoReal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button" size="small">
        Ver Contato
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Loja do real</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            Endereço: R. Benjamin Constant, 416, Centro | Canavieiras-BA
            <br />
            <a href="https://www.instagram.com/lojadoreal.canavieiras/">lojadoreal.canavieiras</a>
        </Dialog.Description>
        <div className='FooterBtn' style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
           <a href="https://api.whatsapp.com/message/XSYXSPUXXQ3OD1?autoload=1&app_absent=0">
            <button className="Button-green">Conversar no Whatsapp</button>
            </a> 
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default LojaDoReal;