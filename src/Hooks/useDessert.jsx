import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const useDessert = () => {
   const [dessert, setDessert]= useState(null);
    useEffect(()=>{

        fetch('/menue.json')
            .then(res => res.json())
            .then(data => {
                const desserts = data.filter(item => item.category === 'dessert');
                 setDessert(desserts)
            })
            .catch(err => console.error("Error loading menu:", err));

    },[])

    return [dessert];

};

export default useDessert;