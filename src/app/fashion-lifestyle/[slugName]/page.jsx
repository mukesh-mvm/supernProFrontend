
import Article from "@/components/Article/Article"

export async function generateStaticParams() {
  return [
    { slugName: "5-reasons-why-too-much-sugar-is-bad-for-you" },
    { slugName: "How-to-use-Copilot-Vision" },
  ];
}

 const page = async({params}) => {

  

  // Convert slug to normal text (replace dashes with spaces)
  const {slugName} = await params
  const text = slugName?.replace(/-/g, " ").replace(/_/g, ":")
  

  const data = [
     {
      id:2,
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
                    <h4 class='sub-heading'>(1) MAY INCREASE YOUR RISK OF DEPRESSION: </h4>

                    <p class='list-padding'>A balanced and nutritious diet can positively impact your mood, whereas consuming excessive added sugar and processed foods can potentially influence your emotional well-being. Moreover, such a diet could potentially heighten the risk of developing depression.
                        Scientific studies have established a correlation between increased sugar intake and various cognitive difficulties, memory issues, as well as emotional disorders such as anxiety and depression.
                    </p>


                    <h4 class='sub-heading'>(2) DRAINS YOUR ENERGY </h4>

                    <p class='list-padding'>Foods that contain a high amount of added sugar cause a rapid increase in blood sugar and insulin levels, resulting in a temporary surge of energy. However, this energy boost is short-lived. Consuming sugary products that lack protein, fiber, or fat provides a brief burst of energy followed by a sudden drop in blood sugar, commonly known as a crash. These fluctuations in blood sugar can cause significant variations in energy levels.
                    </p>


                    <h4 class='sub-heading'>(3) LINKED TO ACNE </h4>

                    <p class='list-padding'>A diet high in refined carbs, including sugary foods and drinks, has been associated with a higher risk of developing acne. Consuming sugary foods can cause a spike in blood sugar and insulin levels, leading to increased androgen secretion, oil production, and inflammation — all of which play a role in acne development. Research has provided proof that following a low-glycaemic diet can decrease the risk of developing acne, whereas a high-glycaemic diet is associated with a higher risk of acne.
                    </p>


                    <h4 class='sub-heading'>(4) MAY SPEED UP THE SKIN AGING PROCESS </h4>

                    <p class='list-padding'> Wrinkles are a natural sign of skin aging. They appear eventually, regardless of your health. However, poor food choices can worsen wrinkles and speed up the skin aging process. Advanced glycation end products (AGEs) are compounds that form when sugar reacts with proteins in the body and are believed to contribute to skin aging. A diet rich in refined carbohydrates and sugar can increase the production of AGEs, potentially accelerating premature skin aging.
                    </p>


                    <h4 class='sub-heading'>(5) IT CAN CAUSE WEIGHT GAIN </h4>

                    <p class='list-padding'>Sugar-sweetened beverages such as sodas, fruit juices, and sweet teas contain significant amounts of fructose, a type of simple sugar. Ingesting fructose stimulates hunger and food cravings more than glucose, the primary sugar found in starchy foods. Furthermore, studies conducted on animals indicate that excessive fructose consumption can lead to leptin resistance, a hormone crucial for regulating hunger and signalling satiety.
                    </p>

                </div>
      `
     },

     {
       id:1,
       title: "How to Use Copilot Vision",
       data:`<div class="mb-8">
        <img
          src="/copilotVision.webp" // replace with your actual image path
          alt="Copilot Vision in Action"
          class="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      <h1 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        How to Use Copilot Vision
      </h1>

      <p class="text-lg mb-6 text-gray-700">
        Copilot is one of the most popular AI assistants today. Microsoft recently launched a new feature called <strong>‘Copilot Vision’</strong>. Here’s everything you need to know about this feature, including key features, step-by-step instructions, and helpful tips.
      </p>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">What is Copilot Vision?</h2>
        <p class="text-gray-700">
Copilot Vision is a new feature of Copilot through which the AI can access your screen and then see what’s being displayed. It will then give feedback & suggestions to help out users. The feature, which was previously exclusive to Copilot Pro, is now free for all.  
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Evolution of Copilot</h2>
        <p class="text-gray-700 mb-2">
Microsoft’s Copilot has evolved significantly since its launch. It was launched in February 2023 as <strong>‘Bing Chat’</strong>. By the next month, Microsoft included it in the ‘Office 365’ pack. In October 2023, Bing Chat was officially renamed as Microsoft Copilot. 
        </p>
        <p class="text-gray-700">
 January 2024 saw the launch of Copilot Pro, which included multiple advanced features such as Copilot Vision, Think Deeper and the ability to generate customised responses as per their needs & requirements.    
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Key Features of Copilot Vision</h2>
        <p class="text-xl text-pink-500">Some key features of Copilot Vision include: 
</p>
        <ul class="list-disc pl-6 space-y-1 text-gray-700">
          <li>Help with context-aware navigation: Copilot can review the page you are currently reading and offer pertinent summaries, insights, and guidance.</li>
          <li>Voice-enabled interaction: Voice commands allow users to ask about the webpage, making consumers' browsing easier.</li>
          <li>Opt-in functionality: To protect privacy and provide consumers choice over AI interactions, Copilot Vision only turns on when they desire to.</li>
          <li>Real-time recommendations: It helps users explore topics more effectively by suggesting next steps depending on the information.
</li>
        </ul>
      </section>

      <section class="mb-4">
  <h2 class="text-2xl font-semibold text-gray-900 mb-2">How to Use Copilot Vision</h2>
  <p class="text-xl text-gray-600">Step-by-step guide</p>
  <p class="text-md text-gray-700 mb-4">
    As this feature became available only recently, many users haven’t tried it. Here’s a step-by-step guide on how to use Copilot Vision:
  </p>
  
  <ol class="list-decimal pl-6 space-y-4 text-gray-700">
    <li>
      <strong>Get Copilot:</strong> Microsoft Copilot can be accessed using your online browser, Microsoft 365 applications (such as Word or PowerPoint), or, in the case of Windows 11, the integrated sidebar.
    </li>
    <li>
      <strong>Copy or Upload an Image:</strong> The image input option, which is typically a paperclip or camera icon, can be clicked to upload a file. For this, you can use screenshots, other images, or scanned copies of documents.
    </li>
    <li>
      <strong>Submit Your Prompt:</strong> After uploading your image or file, give clear instructions to the AI assistant regarding what you want.
    </li>
    <li>
      <strong>Communicate with the Copilot:</strong> Analyse Copilot's output and, if required, ask follow-up questions for clarification. You can ask it to compare, explain, or rephrase certain aspects of the image.
    </li>
  </ol>
</section>


<section class="mb-8">
  <h2 class="text-2xl font-semibold text-gray-800 mb-2">Helpful Tips</h2>

  <ul class="list-disc pl-6 space-y-2 text-gray-700">
    <li>
      <strong>Use High-Quality, Clear Images:</strong> Low-resolution or blurry images can confuse the model and decrease accuracy.
    </li>
    <li>
      <strong>Be Specific with Your Prompts:</strong> Try “Summarise the financial trends in this chart” rather than “What is this?”
    </li>
    <li>
      <strong>Break Up Complicated Requests:</strong> To improve accuracy, ask one query at a time for thorough documents.
    </li>
    <li>
      <strong>Utilise Follow-Up Questions:</strong> Continue the discussion by expanding on Copilot's earlier answers to gain more in-depth understanding.
    </li>
    <li>
      <strong>Clearly Arrange Visual Data:</strong> Copilot can concentrate on relevant details by cropping irrelevant portions of the image.
    </li>
  </ul>
</section>


      <section class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Conclusion</h2>
        <p class="text-gray-700">
Copilot Vision provides fast, intelligent insights from visual data, making it easier for us to engage with images. It increases productivity with little effort, regardless of whether you're analysing texts, figures, or drawings. 
        </p>
        <p class="text-gray-700">
          It is a useful tool for contemporary, visual-first workflows and is very user-friendly and adaptable.
        </p>

      </section>
`
      }

     

    


  ]


 let filterdata = [];

  if(text){
     filterdata =  data.filter((item) => {

      console.log(item?.title?.toLowerCase())
      return item?.title?.toLowerCase() === text?.toLowerCase();
    });

 
  }

  
  

  

 
  return (
    <div>

      
        <Article data={filterdata[0]}/>
    </div>
  )
}

export default page
