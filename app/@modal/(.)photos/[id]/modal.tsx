
'use client';
import { type ElementRef, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

function Modal({ children }: { children: React.ReactNode }) {

  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [isMounted]);

  function onDismiss() {
    router.back();
  }

  if (typeof window !== "undefined") {
    return createPortal(
      <div className=" h-screen">
        <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
          {children}
          <button onClick={onDismiss} className="close-button" />
        </dialog>
      </div>,
      window.document.getElementById('modal-root')!
    );
  } else {
    return null
  }

}

export default Modal;

