import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Paul Awolesi</title>
        <meta
          name="description"
          content="I'm Paul, a software engineer and entrepreneur based in Lagos."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Paul Awolesi. I live in Lagos, where I build the future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Introducing the dynamic and vibrant Paul Awolesi, hailing from
                the bustling city of Lagos, Nigeria! When he&apos;s not busy
                coding and problem-solving, you&apos;ll find him embracing his
                love for swimming and football, both on the field and in the
                water. But that&apos;s not all—Paul is also a self-proclaimed
                movie buff, always ready to discuss the latest releases and
                recommend hidden gems.
              </p>
              <p>
                As a Software Engineer and Coder extraordinaire, Paul exudes
                enthusiasm for all things tech. He firmly believes that
                technology holds the key to shaping the future and is passionate
                about leveraging its power to simplify and automate mundane
                tasks. From building enterprise solutions to tackling real-life
                problems head-on, Paul thrives on the challenges that come with
                using technology as a force for good.
              </p>
              <p>
                With his impressive skills in Django framework (Python),
                JavaScript, and React Js, Paul is a true maestro when it comes
                to crafting efficient and innovative solutions. Beyond his
                technical prowess, he is a master at building strong
                relationships and consistently delivers exceptional service.
                Known for his unwavering dedication and consistent track record
                of success, Paul is a reliable and valued team member who brings
                creativity and problem-solving skills to any project.
              </p>
              <p>
                In the ever-evolving world of technology, Paul Awolesi is a name
                to remember. With his passion, potential, and unwavering belief
                in the limitless possibilities of the digital realm, he is
                destined to leave an indelible mark on the tech industry. Keep
                an eye out for this rising star as he continues to inspire and
                make waves in the world of coding and beyond.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/PAwolesi" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://github.com/ocolus1" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/paul-awolesi" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:awolesiboluwatife@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                awolesiboluwatife@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
