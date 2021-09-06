import Layout from "../components/Layout"
import { Text } from "@chakra-ui/react"


export default function Home({ blogs }) {
  
  return (
    <Layout title="KKBlog">
      <ul>
         {blogs.map((blog) => {
           return(
              <li key={blog.blogId}><Text color="black">{ blog.title }</Text></li>
           )
         })}
      </ul>
     
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/blogs")
  const blogs = await res.json()
  
  if (!blogs) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      blogs,
    }
  }
}