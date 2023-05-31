import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';

const PortoDosMilagres= () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button" size="small">
        Ver Contato
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Porto dos Milagres</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            Endereço: Av. Cel. Augusto Luis de Carvalho, 18 | Canavieiras - BA
            <br />
            <a href="https://www.instagram.com/portodosmilagrescanes/">| @portodosmilagrescanes</a>
        </Dialog.Description>
        <div className='FooterBtn' style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
           <a href="https://api.whatsapp.com/send?phone=557398637431">
            <button className="Button-green">Conversar no Whatsapp</button>
            </a> 
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default PortoDosMilagres;