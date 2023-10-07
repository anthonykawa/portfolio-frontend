import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
type ModalProps = {
  children: JSX.Element | JSX.Element[];
  show: boolean;
}

function Modal({ children, show }: ModalProps) {
  return (
    <>
      {/* Main Modal */}
      <div className={`${show ? '' : 'hidden'} fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto p-4 md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-60 overflow-clip`}>
        <div className="relative w-full max-w-5xl max-h-full m-auto">
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;