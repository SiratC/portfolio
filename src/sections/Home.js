import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {tomorrow} from 'react-syntax-highlighter/dist/cjs/styles/prism';


const Home = () => {
  const codeSnippet = `coder = { 
  "name": "Syeda Chowdhury",
  "skills": ["Python", "Java", "C", "Node.js", "React", "API Integration"],
  "hard_worker": True,
  "quick_learner": True,
  "problem_solver": True,
}

def is_hireable(c):
    return c["hard_worker"] and c["problem_solver"] and len(c["skills"]) >= 6

print(is_hireable(coder))`;

  return (
    <section id="home">
      <h1>Hi! <span className="homeText">Syeda</span> here.</h1>
      <h2>3rd year CS @ York University</h2>
      <h3>
        I like to learn about new technologies and create stuff
        <br />
        that could potentially help users around the world.
      </h3>

      <div className="code-card">
        <div className="window-bar">
          <span className="circle red" />
          <span className="circle yellow" />
          <span className="circle green" />
        </div>

        <SyntaxHighlighter
          language="python"
          style={tomorrow}
          wrapLines={true}
          lineProps={{
            style: {
              display: 'block',
              backgroundColor: 'none',
            }
          }}
          customStyle={{
            background: '',

          }}
        >
          {codeSnippet}
        </SyntaxHighlighter>
      </div>

      <style jsx>{`
        .code-card {
          text-align: left;
          background: #002b36;
          border-radius: 12px;
          padding: 24px;
          font-size: 15px;
          font-family: 'Fira Code', Consolas, Menlo, monospace;
          color: #93a1a1;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
          max-width: 50vw;
          margin: 2rem auto;
          overflow-x: auto;
        }
        .window-bar {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }
        .circle {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
        }
        .red {
          background: #E38E8E;
        }
        .yellow {
          background: #FFB545;
        }
        .green {
          background: #BDD9BD;
        }
        @media (max-width: 768px) {

          .code-card {
            font-size: 8.5px;
            max-width: 60vw;
          }
          
        }
        :global(.react-syntax-highlighter) {
          margin: 0 !important;
        }
      `}</style>

      <div id="empty"></div>
    </section>
  );
};

export default Home;
