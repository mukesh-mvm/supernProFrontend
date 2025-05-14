
import Article from "@/components/Article/Article"

export async function generateStaticParams() {
  return [
    
    { slugName: "defense" },
    { slugName: "upsc" },
    { slugName: "ministry" },
  ];
}
 const page = () => {
  return (
    <div>
        <Article/>
    </div>
  )
}

export default page
