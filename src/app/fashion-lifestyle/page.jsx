
import { Blog } from "@/components/blog/Blog"
const page = () => {

    const cards = [
        { id: 1, title: "5 Reasons Why Too Much Sugar Is Bad For You", image: "/blog4.png" },
        
    ];

  return (
    <div>
        <Blog url="fashion-lifestyle" cards={cards}/>
    </div>
  )
}

export default page
