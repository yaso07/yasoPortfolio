import { education, experience, profile, projects, skillGroups } from "@/lib/profile"

export default function Resume() {
  return (
    <div className="mx-auto max-w-4xl bg-white p-8 text-black print:p-6">
      <header className="mb-6 flex items-baseline justify-between gap-4">
        <h1 className="text-3xl font-bold">{profile.name}</h1>
        <p className="text-lg">{profile.role}</p>
      </header>

      <section className="mb-6 text-sm">
        <p>
          {profile.location} · {profile.phone} · {profile.email}
        </p>
        <p>
          GitHub: {profile.githubLabel}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xs font-bold uppercase tracking-wide">Professional summary</h2>
        <p className="text-sm leading-relaxed">{profile.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xs font-bold uppercase tracking-wide">Technical skills</h2>
        <ul className="space-y-1 text-sm">
          {skillGroups.map((group) => (
            <li key={group.title}>
              <span className="font-semibold">{group.title}: </span>
              {group.items.join(", ")}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-wide">Experience</h2>
        {experience.map((job) => (
          <div key={job.company} className="mb-4">
            <div className="flex justify-between gap-4 text-sm">
              <h3 className="font-bold">
                {job.role}, {job.company}
              </h3>
              <span>{job.period}</span>
            </div>
            <p className="text-sm">{job.location}</p>
            <ul className="mt-1 list-disc space-y-1 pl-4 text-sm">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-wide">Projects</h2>
        {projects.map((project) => (
          <div key={project.id} className="mb-4">
            <div className="flex justify-between gap-4 text-sm">
              <h3 className="font-bold">
                {project.title} — {project.role}
              </h3>
              <span>{project.period}</span>
            </div>
            <ul className="mt-1 list-disc space-y-1 pl-4 text-sm">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-4">
        <h2 className="mb-2 text-xs font-bold uppercase tracking-wide">Education</h2>
        <div className="flex justify-between gap-4 text-sm">
          <h3 className="font-bold">{education.school}</h3>
          <span>{education.period}</span>
        </div>
        <p className="text-sm">
          {education.degree}, {education.field} — {education.location}
        </p>
        <p className="text-sm">{education.score}</p>
      </section>

      <section>
        <h2 className="mb-2 text-xs font-bold uppercase tracking-wide">Languages</h2>
        <p className="text-sm">{profile.languages.join(", ")}</p>
      </section>
    </div>
  )
}
