"use client"

const SimpleModal = ({children, onClose}) => {
    return (
        <div data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" style={{'background': 'rgba(17, 18, 18, .58)'}} className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    
                    <div className="p-4 md:p-5 space-y-4">
                        {children}
                    </div>
                    
                    <div className="flex justify-end p-2 md:p-2">
                        <button onClick={onClose} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

SimpleModal.displayName = "SimpleModal"

export default SimpleModal;