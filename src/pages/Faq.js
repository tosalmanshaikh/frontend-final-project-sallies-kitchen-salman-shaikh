// import React from 'react';
// import Banner from "../components/Banner/Banner";
// import SubTitle from "../components/SubTitle/SubTitle";
//
// function Faq () {
//     return (
//
//         <div>
//             <section className="heading-home-page">
//                 <SubTitle>
//                     <Banner title="FAQ"/>
//                     <Banner sub="you have a question too?"/>
//                 </SubTitle>
//             </section>

//             <SubTitle>
//
//                 <section>
//                 <Banner title="our work speaks for itself"/>
//                 <Banner sub="We only use the best ingredients possible and a bit of love!"/>
//                 </section>
//
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ad tempore et maxime eius consectetur. Illo, nulla maiores maxime temporibus quos quaerat rerum ea cumque voluptatum itaque quidem.
//                     Asperiores delectus distinctio sit nihil tempore explicabo inventore illum nulla sint corrupti optio ea necessitatibus perspiciatis assumenda consequuntur velit nemo officia,
//                     blanditiis pariatur accusamus odio doloribus laborum? Quam aliquam maiores cum fuga iste unde. Et consequatur eaque natus ut dolorum dolorem
//                     voluptas quidem omnis praesentium, officiis, voluptatibus porro assumenda eius! Exercitationem, dolore.
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ad tempore et maxime eius consectetur. Illo, nulla maiores maxime temporibus quos quaerat rerum ea cumque voluptatum itaque quidem.
//                     Asperiores delectus distinctio sit nihil tempore explicabo inventore illum nulla sint corrupti optio ea necessitatibus perspiciatis assumenda consequuntur velit nemo officia,
//                     blanditiis pariatur accusamus odio doloribus laborum? Quam aliquam maiores cum fuga iste unde. Et consequatur eaque natus ut dolorum dolorem
//                     voluptas quidem omnis praesentium, officiis, voluptatibus porro assumenda eius! Exercitationem, dolore.
//                 </p>
//
//             </SubTitle>
//         </div>
//     );
// }
//
// export default Faq;




import React from 'react'

// import HeroImage from '../images/macroos.jpg';
// import StyledHero from '../components/StyledHero/StyledHero';
// import Fade from '../components/BackgroundFade/BackgroundFade';
import Banner from '../components/Banner/Banner';
import SubTitle from '../components/SubTitle/SubTitle';
import TextBlock from '../components/TextBlock/TextBlock'

function Faq() {
    return (
        <div>

            <section className="heading-home-page">
                <SubTitle>
                    <Banner title="FAQ"/>
                    <Banner sub="some of the frequently asked questions"/>
                </SubTitle>
            </section>

            <SubTitle>
            <TextBlock>
                <div>
                    <Banner title="Do you use organic ingredients?"/>
                    <Banner sub="Yes everything we use is organic and certified where possible"/>
                </div>

                <div>
                    <Banner title="Do you use local products?"/>
                    <Banner sub="Almost everything that we buy comes from our region"/>
                </div>

                <div>
                    <Banner title=" Do you offer home delivery?"/>
                    <Banner sub="Yes we do deliver only in Den Haag, you live just outside the city no worries at all. Just order online and we will get is shipped to your doorsteps"/>
                </div>

                <div>
                    <Banner title="How do I arrange a special order?"/>
                    <Banner sub="Just send us email and we will get you sorted"/>
                </div>

                <div>
                    <Banner title=" Can I purchase a gift voucher?"/>
                    <Banner sub="Just drop by at the store, we can arrange this for you" />
                </div>

                <div>
                    <Banner title="How will I know my order has gone through to you?"/>
                    <Banner sub="You will receive an email receipt and order confirmation from us confirming your order has been processed within a few minutes of placing your order."/>
                </div>

                <div>
                    <Banner title="How long do your products stay fresh?"/>
                    <Banner sub="We recommend to consume everything the same day"/>
                </div>

            </TextBlock>
            </SubTitle>

        </div>
    )
}

export default Faq;
