import { X } from "lucide-react"
import {
  BG_CARD,
  BORDER_DEFAULT,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../constants/tailwind-utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal panel */}
        <div
          className={`relative transform overflow-hidden rounded-lg ${BG_CARD} shadow-xl transition-all w-full max-w-4xl`}
        >
          <div className={BG_CARD}>
            {/* Header */}
            <div
              className={`flex items-center justify-between border-b ${BORDER_DEFAULT} px-6 py-4`}
            >
              <h3 className={`text-lg font-semibold ${TEXT_PRIMARY}`}>
                {title}
              </h3>
              <button
                type="button"
                className={`${TEXT_SECONDARY} hover:text-gray-500 dark:hover:text-gray-400`}
                onClick={onClose}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-4 max-h-[80vh] overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
