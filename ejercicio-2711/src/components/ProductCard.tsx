import { ProductoInterface } from "@/app/page";
// import Image from "next/image";

export function ProductCard({
  product,
  onClick,
  label,
  className,
}: {
  product: ProductoInterface;
  onClick: () => void;
  label: string;
  className: string;
}) {
  console.log(product);

  return (
    <article className="group max-w-sm overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-amber-600 px-3 py-1 text-xs font-medium text-white">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-5">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-neutral-900 leading-tight text-balance">
            {product.title}
          </h2>
          <p className="text-sm text-neutral-500 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price & Stock */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-neutral-900">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-neutral-500">
            {product.stock} en stock
          </span>
        </div>

        <button className={className} onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {label}
        </button>
      </div>
    </article>
  );
}
