import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  let name = "Welcome to the VMI TURNOUT"

  let posts = [
    {
      "title": "The first one",
      "content": "testing content 123"
    },
    {
      "title": "test title",
      "content": "testing content 123"
    },
  ]

  

  function Card({title, content}){
    return(
      <div>
        <h1>
          {title}
        </h1>
        <h1>{content}</h1>
      </div>
    )
  }

return(

  <div>
    
        {name}

      
    <img src = "https://www.insightintodiversity.com/wp-content/uploads/2020/12/VMI.jpg">

        
    </img>


    {posts.map((k) => {
      // return <Card title={k.title} content={k.content}></Card>
      return <div>{k.title}</div>
    })}

  </div>
)
  
  }