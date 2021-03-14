import React, { Component } from 'react';
import Card from './Card';
import './style.css';

class Cards extends Component {
    render() {
        return (
            <div className="cards">
                <div>
                    <Card
                        img="https://source.unsplash.com/300x300/?nature"
                        title="Nature"
                        description="Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science, technology, and the natural sciences. It has core editorial offices across the United States, continental Europe, and Asia under the international scientific publishing company Springer Nature."
                        firstLink="https://en.wikipedia.org/wiki/Nature_(journal)"
                        secondLink="https://source.unsplash.com/300x300/?nature"
                    />
                </div>

                <div>
                    <Card
                        img="https://source.unsplash.com/300x300/?water"
                        title="Water"
                        description="Water is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth's hydrosphere and the fluids of all known living organisms (in which it acts as a solvent[1]). It is vital for all known forms of life, even though it provides no calories or organic nutrients. Its chemical formula is H2O, meaning that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds."
                        firstLink="https://en.wikipedia.org/wiki/Water"
                        secondLink="https://source.unsplash.com/300x300/?water"
                    />
                </div>

                <div>
                    <Card
                        img="https://source.unsplash.com/300x300/?israel"
                        title="Israel"
                        description="Israel (/ˈɪzriəl, ˈɪzreɪəl/; Hebrew: יִשְׂרָאֵל‎; Arabic: إِسْرَائِيل‎), officially known as the State of Israel (Hebrew: מְדִינַת יִשְׂרָאֵל‎, Medinat Yisra'el), is a country in Western Asia, located on the southeastern shore of the Mediterranean Sea and the northern shore of the Red Sea. "
                        firstLink="https://en.wikipedia.org/wiki/Israel"
                        secondLink="https://source.unsplash.com/300x300/?israel"
                    />
                </div>

            </div>
        );
    }
}

export default Cards;