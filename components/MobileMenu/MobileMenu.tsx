import { FC, Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Logo from '@/public/images/logo.svg';
import { IconBtn } from '../IconBtn/IconBtn';
import { NavLink } from '../NavLink/NavLink';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import s from './MobileMenu.module.css';

export const MobileMenu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <IconBtn variant="burger" className={s.burger} onClick={openModal} />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={s.dialog} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={s.dialogOverlay} />
          </Transition.Child>

          <div className={s.dialogContent}>
            <IconBtn
              variant="close"
              className={s.closeButton}
              onClick={closeModal}
            />
            <div className={s.dialogBody}>
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Logo className={s.mobileLogo} />
                <div className={s.mobileMenu}>
                  <NavLink />
                  <SocialLinks />
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
