type ModalBodyProps = {
  children: JSX.Element | JSX.Element[]
}

function ModalBody({ children }: ModalBodyProps) {
  return (
    <>
      {/* Modal Body */}
      <div className="p-6 space-y-6">
        {children}
      </div>
    </>
  )
}

export default ModalBody;
