"use client";

import { X } from "lucide-react";
import CartList from "./CartList";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-900 text-white rounded-lg shadow-2xl p-6 w-full max-w-lg max-h-[90vh] mx-4 border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
          aria-label="Cerrar Carrito"
        >
          <X className="w-6 h-6" />
        </button>
        <CartList />
      </div>
    </div>
  );
}
