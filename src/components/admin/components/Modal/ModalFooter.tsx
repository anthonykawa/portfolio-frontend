import { MouseEvent } from 'react';
import Spinner from '../Spinner';

type ModalFooterProps = {
  children?: JSX.Element | JSX.Element[];
  disableClose?: boolean;
  saving?: boolean;
  onSave?: () => Promise<void>;
  onCancel?: () => void;
}

function ModalFooter({ onSave, onCancel, disableClose, saving }: ModalFooterProps) {

  const handleSave = async (evt: MouseEvent) => {
    evt.preventDefault();
    if (typeof onSave === 'function') {
      await onSave()
    }
  }

  return (
    <>
      {/* Modal Footer */}
      <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-20 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSave}
        >
            {saving ? (
              <div className='flex justify-center'>
                <Spinner />
              </div>
            ) : (
              <>Save</>  
            )}
        </button>
        <button
          type="button"
          disabled={disableClose}
          className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          onClick={(evt) => {
            evt.preventDefault();
            if (typeof onCancel === 'function') {
              onCancel();
            }
          }}
        >
          Cancel
        </button>
      </div>
    </>
  )
}

export default ModalFooter;
