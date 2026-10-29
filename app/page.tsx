import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'Lennie Art Page',
    desc: 'A place to show off my art and hopefully sell commissions.',
    tech: ['HTML', 'JavaScript', 'CSS'],
    link: 'https://github.com/masonleecarver/wdd231/tree/main/project'
  },
  {
    title: 'Simple Char',
    desc: 'The blueprint of a site that can randomize characters, save them to LocalStorage, and print them to PDFs using APIs.',
    tech: ['HTML', 'JavaScript', 'CSS'],
    link: 'https://github.com/masonleecarver/simple-char'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
