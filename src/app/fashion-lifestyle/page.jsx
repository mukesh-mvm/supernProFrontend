
import { Blog } from "@/components/blog/Blog"
const page = () => {

    const cards = [
        { id: 2, title: "5 Reasons Why Too Much Sugar Is Bad For You", image: "/blog4.png" },
         { id: 1, title: "How to use Copilot Vision", image: "/copilotVision.webp",base:"fashion-lifestyle" },
        
    ];

  return (
    <div>
        <Blog url="fashion-lifestyle" cards={cards}/>
    </div>
  )
}

export default page
