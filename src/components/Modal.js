import "../Modal.scss"

export default function Modal({ children, setShowModal }) {
    return (
        <div className='modal-backdrop'>
            <div className='modal1'>
                {children}
                <button
                    className='btn btn-danger'
                    onClick={() => setShowModal(false)}
                >
                    close
                </button>
            </div>
        </div>
    )
}
