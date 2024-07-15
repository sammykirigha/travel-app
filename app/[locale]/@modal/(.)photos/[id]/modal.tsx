
'use client';
import { type ElementRef, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { FaTimes } from "react-icons/fa";

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
      <div className=" pt-[70px]">
        <dialog ref={dialogRef} className=" mt-[70px] fixed" onClose={onDismiss}>
          {children}
          <button onClick={onDismiss} className=" absolute top-3 right-3">
            <FaTimes className=' text-gray-700 text-2xl' />
          </button>
        </dialog>
      </div>,
      window.document.getElementById('modal-root')!
    );
  } else {
    return null
  }

}

export default Modal;

