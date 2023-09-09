import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoLearningWithAi from '@/images/logos/learning.png'
import logoConvertdfile from '@/images/logos/convertdfile.png'
import logoGithub from '@/images/logos/github.png'
import logoVercel from '@/images/logos/vercel.png'
import logoWallet from '@/images/logos/wallet.png'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'Learning With AI',
    description:
      'Best AI for Homework, Tutoring, Debugging, and Image Generation',
    note: 'Developed a cutting-edge AI that learns around YOU. Sensei is a meld of the top AI systems in the world, and is trained to ask you followup questions (that you may not know to ask) to help you unlock your infinite learning potential.',
    link: { href: 'https://learningwith.ai', label: 'learningwith.ai' },
    logo: logoLearningWithAi,
  },
  {
    name: 'Convertdfile',
    description: 'High performance image conversion tool.',
    note: "I developed an image conversion website using Django for the back-end. The real game-changer was integrating Aspose.Words (imported as 'aw') for converting images to various document formats. This made conversions not only faster but also more reliable.",
    link: {
      href: 'https://convertdfile.pythonanywhere.com/',
      label: 'convertdfile.com',
    },
    logo: logoConvertdfile,
  },
  {
    name: 'Book Reader',
    description: 'Real-time book reading and podcast video with transcript.',
    note: "I built a multi-media platform using Django, where users can enjoy both e-books and podcast videos. The unique feature is the synchronized transcript alongside the podcast video, offering a seamless experience for those who like to read while they listen. It's your all-in-one digital library.",
    link: {
      href: 'https://github.com/Ocolus1/online-book-podcast',
      label: 'github.com',
    },
    logo: logoGithub,
  },
  {
    name: 'Comment With Polygon',
    description: 'Real-time blockchain public chat app',
    note: 'I developed an online public forum using React with TypeScript for the front-end. The defining feature was integrating Polygon, enabling users with a Polygon address to engage in discussions. To enhance the user experience and design, I utilized Chakra UI, ensuring a seamless and aesthetically pleasing interface.',
    link: {
      href: 'https://comments-with-polygon-five.vercel.app/',
      label: 'comments-with-polygon.app',
    },
    logo: logoVercel,
  },
  {
    name: 'Goerli-based wallet',
    description: 'Goerli-based blockchain wallet for secure transactions',
    note: "I designed and developed a fundamental blockchain wallet application, equipped with functionalities that enable users to either create a new account or recover an existing one. One of its standout features is the ability to send tokens seamlessly.",
    link: { href: 'https://aqua-wallet.vercel.app/', label: 'aqua-wallet.app' },
    logo: logoWallet,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Paul Awolesi</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description >
                <p className="flex flex-col justify-between h-52"> 
                  <p >{project.description} </p> 
                  <p> {project.note} </p> 
                </p>
                </Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
