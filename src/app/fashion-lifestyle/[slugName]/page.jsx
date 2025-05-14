
import Article from "@/components/Article/Article"

export async function generateStaticParams() {
  return [
    { slugName: "5-reasons-why-too-much-sugar-is-bad-for-you" },
   
  ];
}

 const page = async({params}) => {

  

  // Convert slug to normal text (replace dashes with spaces)
  const {slugName} = await params
  const text = slugName?.replace(/-/g, " ").replace(/_/g, ":")
  

  const data = [
     {
      id:1,
      title:"5 Reasons Why Too Much Sugar Is Bad For You",
      data:` 
      <h1 class='heading-primary1'>5 Reasons Why Too Much Sugar Is Bad For You </h1>
                <h2 class='heading-secondary1'>Sugar is fine for you in small amounts, but too much can increase your risk of several serious medical conditions.</h2>

                <p class='heading-secondary-para'>ACCORDING TO DOCTORS, THE MAXIMUM AMOUNT OF ADDED SUGARS YOU SHOULD HAVE IN A DAY IS 6 TEASPOONS (25 grams or 100 calories) FOR WOMEN AND 9 TEASPOONS (37.5 grams or 150 calories) FOR MEN. </p>

                <div class='blog-image-container'>
                    <img src="/blog4.png" alt="" />
                </div>



                <div class='content-container'>
                    <p>In India, where sweets spell celebration, the chances of being sugar dependent are high. What's worrying is that most of us are clueless about the amount of sugar we consume in a day. In the last 50 years, sugar consumption in India has gone up from 5% to 13% of sugar produced globally.</p>
                    <p>So what harm can sugar do? It provides empty calories or false nourishments. In simple terms, it means it provides you energy but no nutritional sustenance. In fact, processed sugar (table sugar) has no minerals and often leeches minerals from the body.</p>
                    <p>Here's a closer look at how sugar can mess with your health, from head to toe.</p>
                    <h4 className='sub-heading'>(1) MAY INCREASE YOUR RISK OF DEPRESSION: </h4>

                    <p class='list-padding'>A balanced and nutritious diet can positively impact your mood, whereas consuming excessive added sugar and processed foods can potentially influence your emotional well-being. Moreover, such a diet could potentially heighten the risk of developing depression.
                        Scientific studies have established a correlation between increased sugar intake and various cognitive difficulties, memory issues, as well as emotional disorders such as anxiety and depression.
                    </p>


                    <h4 className='sub-heading'>(2) DRAINS YOUR ENERGY </h4>

                    <p class='list-padding'>Foods that contain a high amount of added sugar cause a rapid increase in blood sugar and insulin levels, resulting in a temporary surge of energy. However, this energy boost is short-lived. Consuming sugary products that lack protein, fiber, or fat provides a brief burst of energy followed by a sudden drop in blood sugar, commonly known as a crash. These fluctuations in blood sugar can cause significant variations in energy levels.
                    </p>


                    <h4 className='sub-heading'>(3) LINKED TO ACNE </h4>

                    <p class='list-padding'>A diet high in refined carbs, including sugary foods and drinks, has been associated with a higher risk of developing acne. Consuming sugary foods can cause a spike in blood sugar and insulin levels, leading to increased androgen secretion, oil production, and inflammation — all of which play a role in acne development. Research has provided proof that following a low-glycaemic diet can decrease the risk of developing acne, whereas a high-glycaemic diet is associated with a higher risk of acne.
                    </p>


                    <h4 className='sub-heading'>(4) MAY SPEED UP THE SKIN AGING PROCESS </h4>

                    <p class='list-padding'> Wrinkles are a natural sign of skin aging. They appear eventually, regardless of your health. However, poor food choices can worsen wrinkles and speed up the skin aging process. Advanced glycation end products (AGEs) are compounds that form when sugar reacts with proteins in the body and are believed to contribute to skin aging. A diet rich in refined carbohydrates and sugar can increase the production of AGEs, potentially accelerating premature skin aging.
                    </p>


                    <h4 className='sub-heading'>(5) IT CAN CAUSE WEIGHT GAIN </h4>

                    <p class='list-padding'>Sugar-sweetened beverages such as sodas, fruit juices, and sweet teas contain significant amounts of fructose, a type of simple sugar. Ingesting fructose stimulates hunger and food cravings more than glucose, the primary sugar found in starchy foods. Furthermore, studies conducted on animals indicate that excessive fructose consumption can lead to leptin resistance, a hormone crucial for regulating hunger and signalling satiety.
                    </p>

                </div>
      `
     },

     

    


  ]


 let filterdata = [];

  if(text){
     filterdata =  data.filter((item) => {

      console.log(item?.title?.toLowerCase())
      return item?.title?.toLowerCase() === text?.toLowerCase();
    });

  console.log("filterdata",filterdata)
  console.log(text)
  }

  
  

  

 
  return (
    <div>

      
        <Article data={filterdata[0]}/>
    </div>
  )
}

export default page
