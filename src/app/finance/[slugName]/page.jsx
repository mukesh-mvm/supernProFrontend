
import Article from "@/components/Article/Article"


export async function generateStaticParams() {
   return [
     { slugName: "facts-about-atm-withdrawal-charges-for-banks" },
     { slugName: "credit-or-debit-card-rules_-benefits-for-customers" },
     { slugName: "here-is-how-govt-has-limited-gold-storage-at-home" },
    
   ];
 }


 const page = async({params}) => {

  

  // Convert slug to normal text (replace dashes with spaces)
  const {slugName} = await params
  const text = slugName?.replace(/-/g, " ").replace(/_/g, ":")
  

  const data = [
     {
      id:1,
      title:"Facts About ATM Withdrawal Charges For Banks",
      data:` 
      <h1 class='heading-primary'>Facts About ATM Withdrawal Charges For Banks</h1>
      <h2  class='heading-secondary'>Check the ATM Transaction Limits and Charges of your bank. </h2>
      <div class='blog-image-container'>
                     <img src="/blog1.png" alt="" />
                   </div>

                    <div class='content-container'>
                        <p>Banks provide a limited number of complimentary ATM transactions every month, and the allowance varies based on the type of savings account selected. If the specified limit is surpassed, the bank imposes a fee on any additional transactions, both financial and non-financial. The number of free transactions and the charges di er when using another bank's ATM for withdrawals. </p>
                        <p>In June 2022, the RBI authorized banks to levy an additional charge of up to Rs. 21 per transaction at ATMs, on top of the monthly free transaction limit. According to the circular, customers were entitled to five free transactions (covering both financial and non-financial transactions) every month at their own bank's ATMs. Additionally, they were eligible for free transactions at other bank ATMs, with three transactions allowed in metro centres and five transactions in non-metro centres. </p>
                        <p>Beyond the free transactions, the maximum customer charge was set at Rs. 20 per transaction. However, considering the higher interchange fee and the rise in general expenses, banks were allowed to increase the customer charges to Rs. 21 per transaction, and this increase was effective from January 1, 2022. </p>
                        <p>Below are the most recent ATM withdrawal fees for leading banks, such as SBI, ICICI Bank, HDFC Bank, and Punjab National Bank, based on the information provided on their official websites. </p>
                        <p>State Bank Of India charges and fees State Bank of India (SBI) provides 5 complimentary transactions (comprising both financial and non-financial) at SBI ATMs for customers with average monthly balances up to Rs 25000. </p>
                        <p>For customers with balances exceeding this amount, there is no restriction on the number of transactions. However, for financial transactions that exceed the specified limit, the charge is Rs 10 + GST at SBI ATMs and Rs 20 + GST at other bank ATMs. Punjab National Bank charges and fees Punjab National Bank (PNB) offers 5 complimentary transactions per month at its ATMs in both Metro and Non-Metro Areas.</p>
                        <p>Once this limit is exceeded, each transaction will incur a charge of Rs 10/- along with applicable taxes. When using ATMs of other banks, PNB provides three free transactions in metro cities and five free transactions in non-metro cities. After exhausting the free transactions, the bank will levy Rs 21/- plus applicable taxes for financial transactions and Rs 9 plus tax for non-financial transactions. HDFC Bank's ATM charges and fees HDFC Bank allows 5 complimentary transactions at its own ATMs. </p>
                        <p>When using ATMs of other banks in metro locations, customers receive three free transactions, after which they will be charged Rs 21/- along with applicable taxes for cash withdrawals. ICICI Bank ATM charges and fees ICICI Bank adheres to the standard 3-transaction rule in metro areas and 5-transaction rule in non-metro areas for free withdrawals, just like other banks. Beyond this limit, the bank charges Rs. 20 per financial transaction and Rs. 8.50 per non-financial transaction. </p>
                       <p>The last change in interchange fee structure for ATM transactions was in August 2012, while the charges payable by customers were last revised in August 2014. The RBI has notified the changes from January 1, 2022, citing the increasing cost of ATM deployment and expenses towards ATM maintenance incurred by banks or white-label ATM operators</p>
                    </div>
      `
     },

     {
      id:1,
      title:"Credit Or Debit Card Rules: Benefits For Customers",
      data:` <h1 class='heading-primary'>Credit/Debit Card Rules: Benefits For Customers</h1>
                  <h2  class='heading-secondary'>Change your card's network from VISA to MasterCard to RuPay or any other preferred network. Don't know How? Then check details Now. </h2>
                
                  <div class='blog-image-container'>
                     <img src="/blog2.png" alt="" />
                   </div>
                   
                    <div class='content-container'>
                        <p>The Reserve Bank of India (RBI) has introduced a draft rule that empowers debit, credit, and prepaid card users to select their preferred card network. This rule challenges the existing practice card network options are predetermined by agreements between issuers and networks.</p>
                        <p>The RBI proposed that from October 1, 2023, credit card issuers will have to give customers the option to choose the network of their choice. According to a draft circular by RBI, card issuers would be prohibited from entering into any agreement with card networks that limit them from availing the services of other card networks. The rules would be applicable to both banks and non-banking financial companies that issue credit cards, debit cards, or prepaid cards. </p>
                         <p>Authorised card networks currently tie up with banks/non-banks for the issuance of debit, prepaid and credit cards. However, the choice of a affiliated network for a card is decided by the card issuer. This choice is also linked to the arrangements that the card issuers have with the card network. In the circular, RBI informed that &nbsp;
 
                            <strong>"arrangements existing between card networks and card issuers (banks and non-banks) are not conducive to the availability of choice for customers"</strong>
                         </p>

                         <p>In 2021, the RBI the Reserve Bank of India (RBI) imposed an indefinite prohibition on Mastercard, American Express, and Diners Club, preventing them from issuing fresh debit, credit, or prepaid cards to customers due to their failure to comply with rules regarding local data storage. However, in June 2022, the ban was lifted by the central bank after confirming that the companies had adhered to the regulations concerning the storage of payment data. </p>
                         
                         <h4 className='sub-heading'>HOW CAN YOU PORT YOUR CARD NETWORK? </h4>
                          <ul class="numbered-list">
                             <li>Existing agreements at the time of amendment or renewal thereof, and </li>
                             <li>Fresh agreements executed from the date of this circular.  </li>
                          </ul>
                         <p>As per the guidelines proposed by RBI, the card network portability option will be included in existing agreements or at the time of renewal or in fresh agreements executed from the date of the circular.   The RBI said that card issuers and card networks shall ensure to adhere to these requirements:  </p>
                         
                         <p>Traditionally, consumer choice in cards in India has rarely been driven by the network. The introduction of customer's priority in selecting the card network can build interest in the sector and boost competition among international and domestic network companies. With this, the cost of implementation and compliance will increase for banks.</p>
                    </div>  
      `
     },

     {
      id:3,
      title:"Here is how Govt Has Limited Gold Storage at Home",
      data:` <h1 class='heading-primary'>Here's how Govt Has Limited Gold Storage at Home</h1>
                
                
                  <div class='blog-image-container'>
                     <img src="/blog3.png" alt="" />
                   </div>

                   <h2  class='heading-secondary'>Know how much yellow metal you can keep at home without facing tax scrutiny and how the income from gold is taxed. </h2>

                    <div class='content-container'>
                        <p>Do you know how much gold you can keep at home, because the government has set a limit on this. If you're buying gold jewellery, find out how much you can keep at home without tax issues and learn about the taxation of gold income. </p>
                        <p>The government has set certain rules for how much gold or gold ornaments you can keep at home (Gold limit in India as per income tax rules). It's important for everyone to follow these rules, but many people are unaware of the specified amount of gold allowed. Let us inform you about it. </p>
                         <h4 className='sub-heading'>CBDT Regulations regarding Gold </h4>
                         <p>Board of Direct Taxes (CBDT) has set rules about how much gold individuals can possess in the country. You are allowed to keep gold beyond this limit, but you must be able to explain where you obtained it from. The rules also state that officers cannot seize gold jewellery or ornaments found during a search at a house, if the quantity is below the specified limit or can be proven as legitimately sourced. </p>
                          <ul >
                             <li>Existing agreements at the time of amendment or renewal thereof, and </li>
                             <li>The permitted gold possession limits are as follows: </li>

                             <li>A married woman can hold up to 500 grams of gold. </li>
                             <li>An unmarried woman can hold up to 250 grams of gold. </li>
                             <li>A man can hold up to 100 grams of gold. </li>
                          </ul>
                         <p>If you purchased gold using your declared income or money earned from farming, it won't be taxed. Similarly, if you bought gold by saving from your household expenses or inherited it, you also won't have to pay tax on it. </p>
                         <p>However, it's important to know the source of the gold. But if you decide to sell the gold, you'll be required to pay taxes on the earnings from the sale. </p>
                         <p>If you sell the gold after holding it for three years or more, you'll need to pay a long-term capital gains tax at a rate of 20% on the income generated from the sale. On the other hand, if you sell the gold within three years of purchasing it, the income from the sale will be added to your total income and taxed according to the tax slab you fall under as a taxpayer. </p>
                        <p>Hence, it is important to retain sources of income from which heavy purchases of gold are made, since this could trigger queries from authorities.</p>
                    </div>   
      `
     }


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
