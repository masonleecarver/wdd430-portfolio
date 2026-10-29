interface ProjectCardProps{
    title: string;
    desc: string;
    tech: string[];
    link?: string;
}

export default function ProjectCard({title, desc, tech, link} : ProjectCardProps) {
    return (
        <article className="p-4 border-1-4 border-blue-600 bg-gray-50 rounded">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700 mb-3">{desc}</p>
            <p className="text-sm text-gray-600">
                <strong>Technologies:</strong> {tech.join(', ')}
            </p>

            {link && (
                <p><a href={link} target="_blank" rel="noopener roreferrer" className="text-blue-600 hover:underline">View Project</a></p>
            )}
        </article>
    );
}