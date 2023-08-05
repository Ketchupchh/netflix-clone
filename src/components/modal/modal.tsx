import { AnimatePresence, motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import cn from 'clsx';
import type { ReactNode } from 'react';
import type { Variants } from 'framer-motion';

type ModalProps = {
  open: boolean;
  children: ReactNode;
  className?: string;
  modalAnimation?: Variants;
  modalClassName?: string;
  closePanelOnClick?: boolean;
  closeModal: () => void;
};

const variants: Variants[] = [
  {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  {
    initial: { opacity: 0, scale: 0.3 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.15 } }
  }
];

export const [backdrop, modal] = variants;

export function Modal({
  open,
  children,
  className,
  modalAnimation,
  modalClassName,
  closePanelOnClick,
  closeModal
}: ModalProps): JSX.Element {
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          className='hidden xs:block relative z-50'
          open={open}
          onClose={closeModal}
          static
        >
          <motion.div
            className='hover-animation fixed inset-0 bg-black/50'
            aria-hidden='true'
            {...backdrop}
          />
          <div
            className={cn(
              'fixed inset-0 overflow-y-auto p-4',
              className ?? 'flex items-center justify-center'
            )}
          >
            <Dialog.Panel
              className={modalClassName}
              as={motion.div}
              {...(modalAnimation ?? modal)}
              onClick={closePanelOnClick ? closeModal : undefined}
            >
              {children}
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}