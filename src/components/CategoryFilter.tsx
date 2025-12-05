import { categories } from "@/data/plants";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={cn(
            "flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300",
            selectedCategory === category.id
              ? "bg-primary text-primary-foreground shadow-elevated"
              : "bg-card text-muted-foreground hover:bg-muted border border-border hover:border-primary/30"
          )}
        >
          <span className="text-lg">{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
