import React from 'react';
import './HomePage.css'


const HomePage = () => {


    return (
        <header>
            <main id="main">
                <section id="landing-section">
                    <div>
                        <h1>Cafe Stone</h1>
                        <p>With nutrition, all the vital functions of the body are connected. It is the source of the
                            development of tissues and cells, their constant renewal, the saturation of man with energy.
                        </p>
                    </div>
                </section>
                <section id="steps-section">
                    <div id="first-step" className="step-item">
                        <i className="fa fa-cut"></i>
                        <h3>Step 01.</h3>
                        <p>
                            Vegetables are an integral part of the human diet. They are extremely useful because of the high
                            content of carbohydrates, various acids, vitamins and active elements in the form, easy for
                            digestion.
                        </p>
                    </div>
                    <div id="second-step" className="step-item">
                        <i className="fa fa-paint-brush"></i>
                        <h3>Step 02.</h3>
                        <p>
                            Fresh tomatoes are ideal for replenishing the loss of minerals. These vegetables contain a lot
                            of
                            acids that our body needs for full-fledged work.
                        </p>
                    </div>
                    <div id="third-step" className="step-item">
                        <i className="fa fa-shopping-bag"></i>
                        <h3>Step 03.</h3>
                        <p>
                            In the content of vitamin C, sweet peppers are superior to lemons and even black currants! The
                            greatest amount of vitamin is contained around the stalk, that is, in the part of the product
                            that is usually cut during cleaning.
                        </p>
                    </div>
                    <div id="fourth-step" className="step-item">
                        <i className="fa fa-smile-o"></i>
                        <h3>Step 04.</h3>
                        <p>
                            If you sometimes eat hot chili peppers, this will help normalize cerebral circulation, ease the
                            condition with bronchial asthma, cough, sore throat, flu.
                        </p>
                    </div>
                </section>
                <section id="store-section">
                    <p id="fresh-food-heading">Fresh Food</p>
                    <h3>Our Cafe Stone Store!</h3>
                    <p id="store-desc">Radish contains a lot of fiber, pectin and mineral salts.</p>
                    <div id="store-items-wrapper">
                        <div className="store-item">
                            <div className="icon-wrapper">
                                <i className="fa fa-camera"></i>
                            </div>
                            <h3>Fresh Vegetables</h3>
                            <p>Use for cooking several types of vegetable oil.</p>
                        </div>
                        <div className="store-item">
                            <div className="icon-wrapper">
                                <i className="fa-rocket fa"></i>
                            </div>
                            <h3>High Quality</h3>
                            <p>This is the best source of essential fatty acids for the body.</p>
                        </div>
                        <div className="store-item">
                            <div className="icon-wrapper">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                            <h3>Sale</h3>
                            <p>It is very good, if in the kitchen there will always be several bottles with different oils.
                            </p>
                        </div>
                        <div className="store-item">
                            <div className="icon-wrapper">
                                <i className="fa fa-weixin" aria-hidden="true"></i>
                            </div>
                            <h3>Best Price</h3>
                            <p>Remember that unrefined oils are not suitable for heat treatment.</p>
                        </div>
                    </div>
                </section>
                <section id="testimonials-section">
                    <p className="testimonials-heading">Fresh Food</p>
                    <h3>Our Cafe Stone Shop!</h3>
                    <p id="testimonials-desc">According to experts, any habit can be formed in 21 days. The same statement
                        applies to healthy
                        eating.</p>
                    <div id="testimonials-wrapper">
                        <div className="testimonial-item">
                            <img src="https://mobirise.com/extensions/organicamp/assets/images/face5.jpg" alt="img1" />
                            <p className="testimonial-message">Sales consultants are very polite. Many of the products have
                                tried and are ready to prompt
                                and recommend to customers. The staff shows that they completely share the philosophy of
                                proper nutrition, if you can say so.</p>
                            <h3 className="testimonial-by">VERONICA KING</h3>
                            <p className="job-role">Cook</p>
                        </div>
                        <div className="testimonial-item">
                            <img src="https://mobirise.com/extensions/organicamp/assets/images/face6.jpg" alt="img2" />
                            <p className="testimonial-message">The assortment is very wide. From useful organic oils, cereals
                                and teas to specific products for vegetarians, such as sausages and pies without meat.</p>
                            <h3 className="testimonial-by">JIM CASH</h3>
                            <p className="job-role">Seller</p>
                        </div>
                        <div className="testimonial-item">
                            <img src="https://mobirise.com/extensions/organicamp/assets/images/face7.jpg" alt="img3" />
                            <p className="testimonial-message">I want to say a huge thank you to the management of the store and
                                all its employees, I'm not a vegetarian, it would seem that the store is not for me, but
                                it's not so, any person who comes here will find something useful.</p>
                            <h3 className="testimonial-by">PETER GOODMAN</h3>
                            <p className="job-role">Manager</p>
                        </div>
                    </div>
                </section>
                <section id="follow-section">
                    <div id="left-section">
                        <img src="https://mobirise.com/extensions/organicamp/assets/images/19.jpg" alt="fruit" />
                    </div>
                    <div id="right-section">
                        <div id="text-wrapper">
                            <h3>Follow Us</h3>
                            <p>A wide range of products; many unusual and tasty products; courteous staff.</p>
                            <input id="subscribe-email" placeholder="Your Email" />
                            <input id="subscribe-btn" type="submit" value="Subscribe" />
                        </div>
                    </div>
                </section>
                <section id="stats-section">
                    <div id="stats-wrapper">
                        <div className="stats-item">
                            <h3>7</h3>
                            <p>Year of experiences</p>
                        </div>
                        <div className="stats-item">
                            <h3>123k</h3>
                            <p>Happy Customers</p>
                        </div>
                        <div className="stats-item">
                            <h3>72k</h3>
                            <p>100% Satisfaction</p>
                        </div>
                        <div className="stats-item">
                            <h3>13k</h3>
                            <p>Detox Smoothies</p>
                        </div>
                    </div>
                </section>

            </main>
        </header>
    );
};

export default HomePage;
