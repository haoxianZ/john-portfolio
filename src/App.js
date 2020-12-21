import logo from './logo.svg';
import React from 'react';
import './App.css';
import {AiFillCaretDown,AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
function App() {
  return (
    <main className="App">
      <header>
        <nav>
        <a className="smoothscroll" href="/">Home</a>
            <a className="smoothscroll" href="#about">About</a>
            <a className="smoothscroll" href="#projects">Projects</a>
            <a className="smoothscroll" href="#contact">Contact</a>
        </nav>
        <div className="intro">
          <h2>Hi, I am John Zhang </h2>
          <h3>I am a Full-Stack web developper.</h3>
          <h3>Welcome to my portfolio!</h3>
        </div>
         
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <AiFillCaretDown size="2em" color="black"/>
            </a>
         </p>
      </header>
 
     
      <div id="about" >
        <h2>
          About me
        </h2>
        <p>
        I am a Full Stack Web Developer trained by a curriculum designed by Thinkful.
        </p>
        <p>
        Throughout the curriculum, I had built a few projects to showcase the skills that I have learned. On top of web developing skill, my engineering experience also provides me solid foundation of science and data analysis.
        </p>
      </div>
      <div id="projects">
      <div className="project">
            
            <h3>What Should I make?</h3>
          <img alt="Screenshot of the App" 
          src="/whatMake.png" className="item-img"/>
          <img alt="Screenshot of the App" 
          src="/whatMake2.png" className="item-img"/>
            <p>
                A Web app that allows user to keep a log what are in their fridge and search recipes base on the ingredients they have in their fridges.
            </p>
            <div className="build">
              <h4 className="item">Built With:</h4>
            <ul className="item">
              <li>HTML</li>
              <li>CSS</li>
              <li>Postgres</li>
              <li>Express</li>
              <li>React</li>
              <li>Node</li>
            </ul>
            </div>
            
            <a target="_blank" href="https://what-should-i-make-client.vercel.app/">Live Demo</a>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://github.com/haoxianZ/what-should-i-make-client">
              Client Side Repo
            </a><br/>
            <a target="_blank" rel="noreferrer" href="https://github.com/haoxianZ/what-should-i-make-server">
              Server Side Repo
            </a>
            
        </div>
        
      <div className="project">
            
            <h3>Encouragement Bank</h3>
            
          <img alt="Screenshot of the App" 
          src="/encouragementScreenshot2.png" className="item-img"/>
          <img alt="Screenshot of the App" 
          src="/encouragementScreenshot.png" className="item-img"/>
            <p>
                A Web app that allows user to write encouragements to others and in return receive encouraging notes
            </p>
            <div className="build">
              <h4 className="item">Built With:</h4>
            <ul className="item">
              <li>HTML</li>
              <li>CSS</li>
              <li>Postgres</li>
              <li>Express</li>
              <li>React</li>
              <li>Node</li>
            </ul>
            </div>
            
            <a target="_blank" href="https://encouragement-exchange.vercel.app/">Live Demo</a>
            <br/>
            <a  target="_blank" rel="noreferrer" href="https://github.com/haoxianZ/encouraging-notes/tree/master/react-client">
              Client Side Repo
            </a><br/>
            <a  target="_blank" rel="noreferrer" href="https://github.com/haoxianZ/server-for-encouraging-note">
              Server Side Repo
            </a>
            
        </div>
        <div className="project">
            
            <h3>Recipe Search</h3>
            <img alt="Screenshot of the App" 
          src="/recipeSearch.png" className="item-img"/>
          <img alt="Screenshot of the App" 
          src="/recipeSearch2.png" className="item-img"/>
            <p>
                A Web app that allows user to search recipe through image
            </p>
            <div className="build">
              <h4>Built With:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
            </ul>
            </div>
            
            <a target="_blank"  rel="noreferrer" href="https://haoxianz.github.io/recipe-search/">Live Demo</a>
            <br/>
            <a target="_blank"  rel="noreferrer" href="https://github.com/haoxianZ/recipe-search">Repo</a>

        </div>

      </div>
      <footer>
        <div id="contact">
            <h3>Contact me at:</h3>
            <div>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/haoxianzhang/"><AiFillLinkedin size="2em"/></a>
              <a target="_blank"  rel="noreferrer" href="https://github.com/haoxianZ"><AiFillGithub size="2em"/></a>
            
            </div>
            
        </div>
      </footer>
      
    </main>
  );
}

export default App;
