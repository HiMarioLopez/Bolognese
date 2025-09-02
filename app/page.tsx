'use client';

import { AnimatedBackground } from '@/components/ui/animated-background';
import { BlogCategoryPill } from '@/components/ui/blog-category-pill';
import { Magnetic } from '@/components/ui/magnetic';
import { motion } from 'motion/react';
import Link from 'next/link';
import { BLOG_POSTS, EMAIL, SOCIAL_LINKS } from './data';

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const TRANSITION_SECTION = {
  duration: 0.3,
};

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  );
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            A simple recipe
            <button
              type="button"
              aria-describedby="emdash-tip"
              className="group relative inline cursor-help text-green-800 underline decoration-green-800/60 decoration-dotted underline-offset-2 transition-colors select-text hover:text-green-900 dark:text-green-400 dark:decoration-green-400/60 dark:hover:text-green-300"
            >
              —
              <span
                role="tooltip"
                id="emdash-tip"
                className="pointer-events-none absolute top-full left-1/2 z-10 mt-1 hidden w-64 -translate-x-1/2 rounded bg-zinc-800 px-2 py-1 text-xs leading-snug whitespace-normal text-white shadow-lg group-hover:block group-focus:block group-active:block dark:bg-zinc-200 dark:text-zinc-900"
              >
                Does anyone else feel weird using em dashes in the age of
                generative AI? I swear to you, I&apos;ve been using them
                extensively since I started writing essays—just ask my high
                school teachers!
              </span>
            </button>
            ground red meats (usually a blend of one or more: beef, pork, or
            veal), tomatoes, some spices. Maybe we get fancy with the{' '}
            <a
              href="https://en.wikipedia.org/wiki/Mirepoix"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-indigo-600 underline decoration-dotted underline-offset-4 transition-colors duration-200 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              mirepoix
            </a>
            . People I care for deeply know about my admiration for a great
            sauce—salsa, pesto, aioli, ... (the list goes on). Bolognese is not
            even my favorite sauce, but it&apos;s good enough to write about and
            document, just like most things in life. I also happen to be
            yearning for it this week—the week I decided to bring this blog to
            life.
          </p>
          <br />
          <p className="text-zinc-600 dark:text-zinc-400">
            This is{' '}
            <a
              href="https://mariolopez.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-indigo-600 underline decoration-dotted underline-offset-4 transition-colors duration-200 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              my
            </a>{' '}
            blog. There is a very high probability that we&apos;ll find more
            than just scribbles about Bolognese on this corner of the web. Maybe
            we&apos;ll produce some content that barely relates to food. Also, a
            fun fact: Italians don&apos;t even call it Bolognese; they simply
            refer to it as{' '}
            <a
              href="https://en.wikipedia.org/wiki/Ragù"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-indigo-600 underline decoration-dotted underline-offset-4 transition-colors duration-200 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              ragù
            </a>
            .
          </p>
          <br />
          <blockquote className="border-l-2 border-zinc-200 pl-4 text-zinc-600 italic dark:border-zinc-800 dark:text-zinc-500">
            “Bone Apple Tea”
            <span className="not-italic"> — Unknown</span>
          </blockquote>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Recent Posts</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.length === 0 ? (
              <div className="-mx-3 px-3 py-6 text-zinc-600 dark:text-zinc-400">
                No blog posts yet. Mario needs to go eat some pasta and write
                about it.
              </div>
            ) : (
              BLOG_POSTS.map((post) => (
                <Link
                  key={post.uid}
                  className="-mx-3 rounded-xl px-3 py-3"
                  href={post.link}
                  data-id={post.uid}
                >
                  <div className="flex flex-col space-y-1">
                    <span className="mb-1 md:hidden">
                      <BlogCategoryPill category={post.category} />
                    </span>
                    <h4 className="flex items-center font-normal dark:text-zinc-100">
                      {post.title}
                      <span className="hidden md:inline">
                        <BlogCategoryPill category={post.category} />
                      </span>
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))
            )}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Inquire</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          . I obsessively patrol my inbox, even the junk folder. I&apos;m also
          active on the social medias listed below.
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}
