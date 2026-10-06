import {
  BookOpen,
  Code2,
  BriefcaseBusiness,
  Scale,
  Wrench,
  Star,
} from "lucide-react";
import { categories, type MeetingCategory } from "../data/roadmap";

const categoryIcons = {
  concept: BookOpen,
  coding: Code2,
  career: BriefcaseBusiness,
  ethics: Scale,
  project: Wrench,
  showcase: Star,
};

export default function CategoryBadge({
  category,
}: {
  category: MeetingCategory;
}) {
  const Icon = categoryIcons[category];
  return (
    <span className={`category-badge category-${category}`}>
      <Icon size={15} aria-hidden="true" />
      {categories[category].label}
    </span>
  );
}
