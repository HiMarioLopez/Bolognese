import { BLOG_CATEGORIES, BlogCategory } from '@/app/data';

export function BlogCategoryPill({ category }: { category: BlogCategory }) {
  return (
    <span
      className={`mt-1 inline-flex items-center rounded border py-0.5 pr-1 pl-0.5 text-xs font-medium md:mt-0 md:ml-2 ${
        category === BLOG_CATEGORIES[0]
          ? 'border-red-400 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
          : 'border-yellow-400 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200'
      }`}
    >
      {category === BLOG_CATEGORIES[0] ? '🍝 Bolognese' : '✨ Non-Bolognese'}
    </span>
  );
}
