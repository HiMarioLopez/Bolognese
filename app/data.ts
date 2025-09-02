export const BLOG_CATEGORIES = ['Bolognese', 'Non-Bolognese'] as const;

export type BlogCategory = typeof BLOG_CATEGORIES[number];

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  category: BlogCategory
}

type SocialLink = {
  label: string
  link: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
    category: 'Non-Bolognese',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-2',
    category: 'Bolognese',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/HiMarioLopez',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/HiMarioLopez',
  },
]

export const EMAIL = 'howdy@bolognese.blog'
