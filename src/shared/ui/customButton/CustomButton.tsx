import React from 'react'

type Props = {
  callback: () => void
  children: React.ReactNode
  disabled?: boolean
}

export const CustomButton: React.FC<Props> = ({ callback, children, disabled }) => {
  const onClickHandler = () => {
    callback()
  }

  const isDisabled = disabled ? 'bg-gray-600' : 'bg-indigo-600 hover:bg-indigo-700'

  return (
    <button
      className={`flex items-center gap-2 py-2 px-4 ${isDisabled} text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg`}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {children}
    </button>
  )
}
