import { BLOG_CATEGORIES, BlogCategory } from '@/app/data'

export function BlogCategoryPill({ category }: { category: BlogCategory }) {
  return (
    <span
      className={`ml-2 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${
        category === BLOG_CATEGORIES[0]
          ? 'border-red-400 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
          : 'border-yellow-400 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200'
      }`}
    >
      {category === BLOG_CATEGORIES[0] ? '🍝 Bolognese' : '✨ Non-Bolognese'}
    </span>
  )
}
