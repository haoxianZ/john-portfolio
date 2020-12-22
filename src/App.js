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
          <h3>I am a Full-Stack web developer.</h3>
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
        Hi, I’m John and I am a Web Developer with two years of material science research experience.
        </p>
        <p>
        In my previous roles, I conducted research to develop products according to each clients’ demand and improve current products with their feedback. Based on the specific application environment, either is under water, or requires our material to be stronger than usual, we design new materials and experiments to validate our new products. I loved the challenges come with it and the sense of accomplishment seeing our products pass the test.
        </p>
        <p>
        When I began to learn about the field of Web Development, I realized that it encompassed the best part of my job, creating something based on the need, without dealing with hazardous materials. So that’s why I decided to dive right into a career change by building projects and learning cutting-edge technologies with Thinkful’s program. I’m excited to enter into this industry with my new skills and get to work right away!
        </p>
        <p>
          On my free time, I love to play basketball and trying out new restaurants and recipes. 
        </p>
      </div>
      <div id="projects">
      <div className="project">
            <h2>Check out some of my works!</h2>
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
            
            <a target="_blank" rel="noreferrer" href="https://what-should-i-make-client.vercel.app/">Live Demo</a>
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
            
            <a target="_blank" rel="noreferrer" href="https://encouragement-exchange.vercel.app/">Live Demo</a>
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
                A Web app that allows user to search recipes through images.
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
            <h3><a target="_blank" rel="noreferrer" href="mailto:johnhaoxian@gmail.com">johnhaoxian@gmail.com</a></h3>
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
