import { Leaf } from "lucide-react";

interface MenuItemProps {
  name: string;
  description?: string;
  descriptionEn?: string;
  price: string;
  allergens?: string;
  vegetarian?: boolean;
}

export function MenuItem({
  name,
  description,
  descriptionEn,
  price,
  allergens,
  vegetarian,
}: MenuItemProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-start gap-2 flex-1">
          <h3 className="text-lg text-[#4a3f35]">{name}</h3>
          {vegetarian && (
            <Leaf className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} />
          )}
        </div>
        <span className="text-lg text-[#8b6f47] ml-4 flex-shrink-0">€{price}</span>
      </div>
      {description && (
        <p className="text-sm text-[#6b5d52] mb-1">{description}</p>
      )}
      {descriptionEn && (
        <p className="text-xs text-[#8b8077] italic mb-2">{descriptionEn}</p>
      )}
      {allergens && (
        <p className="text-xs text-[#8b8077]">Allergene: {allergens}</p>
      )}
    </div>
  );
}


export default MenuItem;
