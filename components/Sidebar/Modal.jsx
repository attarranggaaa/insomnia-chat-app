import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useContext } from "react";
import { AppContext } from "../../context";

const Modal = () => {
  const { newChat } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    newChat(input);
    setInput("");
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <button
        onClick={openModal}
        className="hover:text-primary-content font-medium flex mb-4 justify-start px-8"
      >
        + New chat
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-base-200 p-6 text-left align-middle shadow-xl transition-all">
                  <form className="flex space-x-4" onSubmit={onSubmit}>
                    <input
                      type="email"
                      placeholder="Enter email of chat receipent"
                      className="input w-full focus:outline-none"
                      onChange={(e) => setInput(e.target.value)}
                      value={input}
                    />
                    <button type="submit" className="btn btn-accent">
                      Add +
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
