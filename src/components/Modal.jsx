import React from 'react'

const Modal = ({data, title}) => {
  return (
    <dialog id="my_modal_2" className="modal">
    <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="py-4">{data ? data?.map((c, idx)=><p key={idx}>{idx+1}. {c}</p>) : <p>N/D</p>}</div>
        <form method="dialog">
        <button className="btn bg-prime-color">Закрити</button>
      </form>
    </div>
    <form method="dialog" className="modal-backdrop">
        <button>close</button>
    </form>
    </dialog>
  )
}

export default Modal