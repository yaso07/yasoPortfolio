export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-black print:p-6">
      {/* Header */}
      <header className="flex justify-between items-baseline mb-8">
        <h1 className="text-3xl font-bold">Yasodharan Raman</h1>
        <p className="text-xl">Front End Developer</p>
      </header>

      {/* Contact Information */}
      <section className="mb-8">
        <h2 className="text-sm font-bold uppercase mb-2">Contact</h2>
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <span className="font-bold">Phone: </span>
            <span>8072687133</span>
          </div>
          <div>
            <span className="font-bold">Location: </span>
            <span>Salem, India</span>
          </div>
          <div>
            <span className="font-bold">Email: </span>
            <span>yasoyasodharan29@gmail.com</span>
          </div>
          <div>
            <span className="font-bold">GitHub: </span>
            <span>github.com/yaso07</span>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="mb-8">
        <h2 className="text-sm font-bold uppercase mb-2">Profile</h2>
        <p>
          I am a Frontend Developer with backend experience in Node.js. I have a strong interest in backend development
          and enjoy working with databases, APIs, and server-side technologies. My skills include JavaScript, Java,
          React, Node.js, Express.js, HTML, and CSS. I enjoy building user-friendly applications and reliable systems.
          Seeking a collaborative team where I can enhance my skills and contribute to impactful projects.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-sm font-bold uppercase mb-4">Skills</h2>
        <ul className="list-disc pl-4 space-y-1">
          <li>Languages: JavaScript, Java, C, TypeScript</li>
          <li>Web Technologies: HTML, CSS</li>
          <li>Frameworks & Libraries: React.js, Next.js, Angular, Express.js, Node.js</li>
          <li>Databases: MySQL, MongoDB</li>
          <li>Version Control: Git, GitHub</li>
          <li>Other: Data Structures & Algorithms (DSA)</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-8 break-after-page">
        <h2 className="text-sm font-bold uppercase mb-4">Experience</h2>

        <div className="mb-6">
          <div className="flex justify-between mb-1">
            <h3 className="font-bold">Front End Developer</h3>
            <span>Feb 2022 – Present</span>
          </div>
          <p className="mb-2">Foss Freaks</p>
          <ul className="list-disc pl-4 space-y-2">
            <li>Built and maintained full-stack applications.</li>
            <li>Designed responsive and interactive UI components.</li>
            <li>Developed APIs using Node.js for backend functionality.</li>
            <li>Optimized application performance and created scalable APIs.</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <h3 className="font-bold">Internship</h3>
            <span>2023</span>
          </div>
          <p className="mb-2">Zoho</p>
          <ul className="list-disc pl-4 space-y-2">
            <li>Worked on backend optimization and automation projects.</li>
            <li>Gained industry experience in software development best practices.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      {/* <section className="mt-[25px]">
        <h2 className="text-sm font-bold uppercase mb-4">Education</h2>

        <div>
          <div className="flex justify-between mb-1">
            <h3 className="font-bold">Karpagam Institute of Technology</h3>
            <span>2019 – 2023</span>
          </div>
          <p className="mb-2">B.E. Computer Science and Engineering – Coimbatore, India</p>
        </div>
      </section> */}

      {/* Projects */}
      <section className="mb-8 pt-[20px]">
        <h2 className="text-sm font-bold uppercase mb-4">Projects</h2>

        <div className="mb-4">
          <h3 className="font-bold">Jersey Island Tourism Application – <a href="http://roc.je" className="text-blue-600">roc.je</a></h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Developed a Next.js app with server-side rendering for better SEO and performance.</li>
            <li>Created a user-friendly UI for showcasing island attractions and accommodations.</li>
            <li>Integrated real-time APIs for live updates and navigation.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">Automated Car Rental System</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Built a car rental system with separate admin and client functionalities.</li>
            <li>Streamlined booking and management processes.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Health Monitor</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Developed a health tracking app with AI-powered food suggestions.</li>
            <li>Implemented server-side rendering, Tailwind CSS, and API integrations.</li>
          </ul>
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-sm font-bold uppercase mb-4">Languages</h2>
        <ul className="list-disc pl-4 space-y-1">
          <li>Tamil</li>
          <li>English</li>
        </ul>
      </section>
    </div>
  )
}
