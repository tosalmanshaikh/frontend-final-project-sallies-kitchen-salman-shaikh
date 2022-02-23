import React from 'react'
import Banner from '../../components/Others/Banner/Banner';
import SubTitle from '../../components/StyledComponents/SubTitle/SubTitle';


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
                <section>
                    <Banner title="Do you use organic ingredients?"/>
                    <Banner sub="Yes everything we use is organic and certified where possible"/>
                </section>

                <section>
                    <Banner title="Do you use local products?"/>
                    <Banner sub="Almost everything that we buy comes from our region"/>
                </section>

                <section>
                    <Banner title=" Do you offer home delivery?"/>
                    <Banner
                        sub="Yes we do deliver only in Den Haag, you live just outside the city no worries at all. Just order online and we will get is shipped to your doorsteps"/>
                </section>

                <section>
                    <Banner title="How do I arrange a special order?"/>
                    <Banner sub="Just send us email and we will get you sorted"/>
                </section>

                <section>
                    <Banner title=" Can I purchase a gift voucher?"/>
                    <Banner sub="Just drop by at the store, we can arrange this for you"/>
                </section>

                <section>
                    <Banner title="How will I know my order has gone through to you?"/>
                    <Banner
                        sub="You will receive an email receipt and order confirmation from us confirming your order has been processed within a few minutes of placing your order."/>
                </section>

                <section>
                    <Banner title="How long do your products stay fresh?"/>
                    <Banner sub="We recommend to consume everything the same day"/>
                </section>
            </SubTitle>

        </div>
    )
}

export default Faq;
