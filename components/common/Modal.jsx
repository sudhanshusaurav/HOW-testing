"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CrossIcon from "@/public/assets/icons/CrossIcon";

function Modal({ children, open, onClose }) {
  console.log("loading mOdal================");

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" open={open} onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0" />
        </Transition.Child>
        <div className="fixed inset-0 z-[999] bg-[black]/60">
          <div className="flex min-h-screen items-start justify-center px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="panel relative my-8 w-full max-w-7xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                <button
                  onClick={onClose}
                  type="button"
                  className="absolute right-4 top-5 text-white-dark hover:text-dark"
                >
                  <CrossIcon />
                </button>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
