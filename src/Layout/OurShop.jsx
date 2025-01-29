import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import banner from '../assets/shop/banner2.jpg';
import { Helmet } from 'react-helmet';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenue from '../Hooks/useMenue';
import FoodCardByCategory from '../Components/FoodCard/FoodCardByCategory';



const OurShop = () => {
    const [tabIndex , setTabIndex]=useState(0);
    const [menue] = useMenue();
    console.log(menue);
    
    const desserts = menue?.filter(item => item.category === 'dessert');
    const soup = menue?.filter(item => item.category === 'soup');
    const salad = menue?.filter(item => item.category === 'salad');
    const pizza = menue?.filter(item => item.category === 'pizza');
    const drinks = menue?.filter(item => item.category === 'drinks');
     console.log(drinks);
    return (
        <>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={banner}
                bgImageAlt="the shop banner"
                strength={-40}
                bgImageStyle={{

                    objectPosition: 'center',
                }}
                className="h-[600px] w-full"
            >
                <div className="h-[600px] w-full flex items-center flex-col mt-[-1px] justify-center">
                    <Helmet>
                        <title>𝓞𝓤𝓡 𝓢𝓗𝓞𝓟</title>
                    </Helmet>
                    <div className="w-[600px] h-[200px] bg-black bg-opacity-70 flex flex-col items-center justify-center border-white border-r-2 rounded-sm border-b-2">
                        <strong className="text-4xl text-white">𝓞𝓤𝓡 𝓢𝓗𝓞𝓟</strong>
                        <span className="text-white font-mono mt-4 tracking-widest">Would You Like TO Try Dish?</span>
                    </div>
                </div>
            </Parallax>
            {/* Tabs */}
            <div>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel>
    <FoodCardByCategory item={salad} />
</TabPanel>
<TabPanel>
    <FoodCardByCategory item={pizza} />
</TabPanel>
<TabPanel>
    <FoodCardByCategory item={soup} />
</TabPanel>
<TabPanel>
    <FoodCardByCategory item={desserts} />
</TabPanel>
<TabPanel>
    <FoodCardByCategory item={drinks} />
</TabPanel>

                   
                        
                  
                   
                </Tabs>

            </div>
        </>
    );
};

export default OurShop;
