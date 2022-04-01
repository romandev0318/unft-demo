import { useState } from "react";

export const useModal = <T>() => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState<T | null>(null);

  const openModal = (modal: T) => {
    setModal(modal);
    setOpen(true);
  };

  const closeModal = () => setOpen((state) => !state);

  return { modal, open, openModal, closeModal };
};
