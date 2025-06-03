import Article from "@/components/Article/Article"
import { base_url } from "@/components/Helper/helper";
import axios from "axios";


export async function generateMetadata({ params }) {
  const { slugName } = await params;

  try {
    const response = await axios.get(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`
    );
    const post = response.data;
    if (!post) {
      return {
        title: "Post not found",
        description: "This blog post could not be found.",
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    return {
      title: `${post.mtitle}`,
      description: `${post.mdesc}`,
      metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
    
    };
  } catch (error) {
    return {
      title: "Error loading post",
      description: "An error occurred while fetching post data.",
    };
  }
}
const page = async ({ params }) => {
  const { slugName } =await params;

  try {
    const response = await axios.get(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`
    );
    const data1 = response.data;
    console.log(data1)
   
    return (
      <div>
        <Article data={data1} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return <div>Failed to load article.</div>;
  }
};

export default page;
