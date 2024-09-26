import React from 'react';

function Skills() {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <ul className="flex flex-wrap gap-4">
          {/* Replace local image paths with hosted URLs */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" width={30} height={15} />
          <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java" width={30} height={15} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" width={30} height={15} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL" width={30} height={15} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width={30} height={15} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="MongoDB" width={30} height={15} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" width={60} height={15} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/IntelliJ_IDEA_Icon.svg" alt="IntelliJ IDEA" width={30} height={15} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" alt="GraphQL" width={30} height={15} />
        </ul>
      </div>
    </section>
  );
}

export default Skills;
