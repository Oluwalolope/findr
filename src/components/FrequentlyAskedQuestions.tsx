import { useState } from "react";
import AccordionItem from "./Accordion/AccordionItem";
import AccordionTrigger from "./Accordion/AccordionTrigger";
import AccordionContent from "./Accordion/AccordionContent";
import AccordionWrapper from "./Accordion/Accordion";


const FrequentlyAskedQuestions = () => {
    const [faqType, setFaqType] = useState<"seller" | "buyer">("seller");
    return ( 
        <>
        {/* FAQ Section */}
        <div id="faq" className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about {faqType === "seller" ? "selling" : "shopping"} on Findr
            </p>
          </div>

          {/* Toggle Menu */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setFaqType("buyer")}
                className={`px-6 py-2 rounded-md transition-all ${
                  faqType === "buyer"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                As a Buyer
              </button>
              <button
                onClick={() => setFaqType("seller")}
                className={`px-6 py-2 rounded-md transition-all ${
                  faqType === "seller"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                As a Seller
              </button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqType === "seller" ? <SellerFAQ /> : <BuyerFAQ /> }
          </div>
        </div>
        </>
    );
}
 
export default FrequentlyAskedQuestions;


const BuyerFAQ = () => {
    return ( 
        (
              <AccordionWrapper type="single" collapsible className="space-y-4">
                <AccordionItem value="buyer-1" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger>
                    Is it free to use Findr?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes! Findr is completely free for shoppers. Simply search for products, compare prices, and pay online with no extra fees. You only pay for the products you purchase.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="buyer-2" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    How does pickup work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    After placing your order online, you'll receive a notification when it's ready for pickup (typically 15-30 minutes). Head to the store, show your order confirmation code, and collect your items without waiting in line.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="buyer-3" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We accept all major credit cards, debit cards, PayPal, and digital wallets like Apple Pay and Google Pay. All payments are securely processed with encryption.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="buyer-4" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    Can I return or exchange items?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Return policies vary by store. You can view each store's return policy on their product pages. Most stores accept returns within 14-30 days with proof of purchase. Contact the store directly through the app for returns.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="buyer-5" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    What if an item is out of stock after I order?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    In the rare case an item becomes unavailable after your order, we'll notify you immediately and refund that item. You can choose to proceed with the rest of your order or cancel entirely for a full refund.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="buyer-6" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    How accurate are the store locations and hours?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Store information is updated in real-time by store owners. We recommend checking the store's current hours before heading out. You'll also receive notifications if a store updates their hours or temporarily closes.
                  </AccordionContent>
                </AccordionItem>
              </AccordionWrapper>
            )
    );
}

const SellerFAQ = () => {
    return ( 
        (
              <AccordionWrapper type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    How much does it cost to become a seller?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    It's completely free to sign up and list your products. You only pay a small commission when you make a sale. There are no monthly fees, setup costs, or hidden charges.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    How do I get paid?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Payments are processed automatically and transferred to your bank account weekly. You'll receive detailed sales reports and can track all transactions through your seller dashboard.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    What types of products can I sell?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    You can sell a wide range of products including groceries, electronics, home goods, pet supplies, and more. We'll work with you during onboarding to ensure your products comply with our marketplace guidelines.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    How long does it take to set up my store?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Most sellers complete the setup process in under 30 minutes. You'll need to provide basic business information, upload your product catalog, and set up your payment details. Our support team is available to help you every step of the way.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    Do you provide training and support?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes! We offer comprehensive onboarding training, video tutorials, and 24/7 customer support. You'll also have access to our seller community and regular webinars on best practices for growing your online sales.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    Can I manage inventory across multiple locations?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Absolutely. Our platform supports multiple store locations and provides real-time inventory management. You can update stock levels, prices, and product availability for each location from a single dashboard.
                  </AccordionContent>
                </AccordionItem>
              </AccordionWrapper>
            )
    );
}