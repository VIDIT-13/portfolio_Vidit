import React from "react";

const MobileAlert = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative max-w-md p-6 bg-neutral-900 rounded-xl border border-white/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white"
        >
          ✕
        </button>
        <h3 className="text-xl font-semibold mb-3">Performance Notice</h3>
        <p className="text-neutral-300 mb-4">
          The splash effect can be resource-intensive and may affect performance
          on some mobile devices. Please use with caution.
        </p>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
        >
          I understand
        </button>
      </div>
    </div>
  );
};

export default MobileAlert;
