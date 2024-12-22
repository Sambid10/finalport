import React from 'react'
import { CodeBlock } from '../codeeditor/Codeeditor'
import CardRapper from '../CardRapper';

export default function HTMLpage() {
  const code = `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, 
  initial-scale=1.0">
  <title>Basic HTML Page</title>
</head>
<body>
  <header>
    <h1>Welcome to My Basic HTML Page</h1>
  </header>
  
  <main>
    <p>This is a simple example of an HTML structure. 
    It contains a header, a main content area, and a footer.</p>
    
    <section>
      <h2>About HTML</h2>
      <p>HTML (HyperText Markup Language) is the standard language 
      for creating webpages.</p>
    </section>
    
    <section>
      <h2>Example Image</h2>
      <img src="https://via.placeholder.com/150" 
      alt="Example Image">
    </section>
  </main>
  
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
</html>
      `;
  return (
   <CardRapper>
    <div className='flex justify-center  w-full mb-4' >
        <img
          className='h-32 w-32 '
          src='html.svg'
        />
      </div>


      <div className='h-[2vh]' />

      <span className="text-red-400">HTML</span> has been my <span className="text-blue-400">foundation</span> since grade 7, and it's the <span className="text-orange-400">tool</span> I use to shape and organize the <span className="text-green-400">content</span> of every <span className="text-purple-400">digital experience</span>. Over the years, I’ve leveraged <span className="text-red-400">HTML</span> to craft everything from <span className="text-teal-400">simple websites</span> to <span className="text-yellow-400">complex web apps</span>.<br /> Whether building <span className="text-blue-400">static pages</span>, <span className="text-orange-400">dynamic sites</span>, <span className="text-green-400">responsive layouts</span>, <span className="text-purple-400">multi-platform applications</span>, or <span className="text-teal-400">progressive web apps</span>, <span className="text-red-400">HTML</span> has been my <span className="text-yellow-400">go-to</span>. I’ve built <span className="text-orange-400">all</span> of my <span className="text-blue-400">projects</span> using <span className="text-red-400">HTML</span>. <span className="text-purple-400">😊</span>

      <div className='h-[2vh]' />
      <div className="border border-gray-600 px-4 py-4">
        <CodeBlock
          language='jsx'
          filename="index.html"
          code={code}
        />

      </div>
   </CardRapper>
      

  )
}
