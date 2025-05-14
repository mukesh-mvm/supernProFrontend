
import { Blog } from "@/components/blog/Blog"
const page = () => {

    const cards = [
        { id: 1, title: "Facts About ATM Withdrawal Charges For Banks", image: "/blog1.png" },
        { id: 2, title: "Credit Or Debit Card Rules: Benefits For Customers", image: "/blog2.png" },
       {id:3,title:"Here is how Govt Has Limited Gold Storage at Home",image:"/blog3.png"}
    ];

  return (
    <div>
        <Blog url="finance" cards={cards}/>
    </div>
  )
}

export default page
