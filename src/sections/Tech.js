import React from 'react';
import { ReactComponent as JavaIcon } from '../assets/java.svg';
import { ReactComponent as PythonIcon } from '../assets/python.svg';
import { ReactComponent as JavaScriptIcon } from '../assets/javascript.svg';
import { ReactComponent as HTMLIcon } from '../assets/html5.svg';
import { ReactComponent as DockerIcon } from '../assets/docker.svg';
import { ReactComponent as PostgreSQLIcon } from '../assets/postgresql.svg';
import { ReactComponent as MySQLIcon } from '../assets/mysql.svg';
import { ReactComponent as NodeIcon } from '../assets/nodedotjs.svg';
import { ReactComponent as CSSIcon } from '../assets/css.svg';
import { ReactComponent as JUnitIcon } from '../assets/junit5.svg';
import { ReactComponent as CIcon } from '../assets/c.svg';
import { ReactComponent as BashIcon } from '../assets/gnubash.svg';
import { ReactComponent as GitIcon } from '../assets/git.svg';
import { ReactComponent as RiscVIcon } from '../assets/riscv.svg';
import { ReactComponent as ReactIcon } from '../assets/react.svg';
import { ReactComponent as OpenSSLIcon } from '../assets/openssl.svg';
import { ReactComponent as OpenAiIcon } from '../assets/openai.svg';
import { ReactComponent as FigmaIcon } from '../assets/figma.svg';
import { ReactComponent as SocketIcon } from '../assets/socketdotio.svg';
import { ReactComponent as LinuxIcon } from '../assets/linux.svg';
const Tech = () => {
  return (
    <div className="tech-section" id="tech">
      <h2>
        Languages, Tools, and Frameworks
      </h2>
      <p>Some of the languages, tools, and frameworks that I'm familiar with</p>
      <div className="tech-grid">
        {/* Python */}
        <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="Python">
         <PythonIcon title ="" className="tech-icon" />
         </div>
         </a>
        {/* Java */}
        <a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer">
          <div className="tech-item" data-tooltip="Java">
            <JavaIcon title =""  className="tech-icon" />
         </div>
        </a>
        {/* OpenSSL */}
        <a href="https://www.openssl.org" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="OpenSSL">
          <OpenSSLIcon title =""  className="tech-icon" />
         </div>
        </a>
        {/* C */}
        <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="C">
          <CIcon title ="" className="tech-icon" />
         </div>
        </a>
        {/* Bash */}
        <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="Bash">
          <BashIcon title =""  className="tech-icon" />
         </div>
        </a>
        {/* Linux */}
        <a href="https://www.linux.org" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="Linux">
          <LinuxIcon title ="" className="tech-icon" />
         </div>
        </a>
        {/* JavaScript */}
        <a href="https://www.javascript.com" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="JavaScript">
          <JavaScriptIcon  title ="" className="tech-icon" />
         </div>
        </a>
        {/* Node.js */}
        <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="Node.js">
          <NodeIcon title ="" className="tech-icon" />
         </div>
        </a>
        {/* React */}
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="React.js">
          <ReactIcon title ="" className="tech-icon" />
         </div>
        </a>
        {/* Socket.io */}
        <a href="https://socket.io" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="Socket.io">
          <SocketIcon title =""  className="tech-icon" />
         </div>
        </a>
        {/* MySQL */}
        <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="MySQL">
          <MySQLIcon title ="" className="tech-icon" />
         </div>
        </a>
        {/* PostgreSQL */}
        <a href="https://www.postgresql.com" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="PostgreSQL">
          <PostgreSQLIcon title ="" className="tech-icon" />
         </div>
        </a>
        {/* RISC-V in Assembly */}
        <a href="https://riscv.org" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="Risc-V">
          <RiscVIcon title ="" className="tech-icon" />
         </div>
        </a>
        {/* Git */}
        <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="Git">
          <GitIcon title ="" className="tech-icon" />
         </div>
        </a>
        {/* Docker */}
        <a href="https://www.docker.com" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="Docker">
          <DockerIcon title ="" className="tech-icon" />
         </div>
        </a>
        {/* OpenAI */}
        <a href="https://openai.com" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="OpenAI">
          <OpenAiIcon title ="" className="tech-icon" />
         </div>
        </a>
        {/* Figma */}
        <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="Figma">
          <FigmaIcon title ="" className="tech-icon" />
         </div>
        </a>
        {/* JUnit */}
        <a href="https://junit.org/junit5/" target="_blank" rel="noopener noreferrer">
        <div className="tech-item" data-tooltip="JUnit">
          <JUnitIcon title ="" className="tech-icon" />
         </div>
        </a>
        {/* HTML5 */}
        <a
          href="https://en.wikipedia.org/wiki/HTML5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="tech-item" data-tooltip="HTML5">
          <HTMLIcon title ="" className="tech-icon" />
         </div>
        </a>
        {/* CSS */}
        <a
          href="https://en.wikipedia.org/wiki/CSS3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="tech-item" data-tooltip="CSS">
          <CSSIcon title ="" className="tech-icon" />
         </div>
        </a>
      </div>
    </div>
  );
};

export default Tech;
