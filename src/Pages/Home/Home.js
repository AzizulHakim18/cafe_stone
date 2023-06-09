import React, { useEffect, useState } from 'react';
import Products from './Products';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

const Home = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    const [q, setQ] = useState("");
    const [searchParam] = useState(["name"]);

    useEffect(() => {
        fetch("CafeData.json")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    console.log(items);
    const search = (item) => {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                )
            })
        })
    }

    if (error) {
        return <>{error.message}</>;
    } else if (!isLoaded) {
        return <>loading...</>;
    } else {


        return (
            <div>

                {/* search section */}
                <Form inline={true}>
                    <Input
                        type='search'
                        name='search-form'
                        placeholder='Search .....'
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                </Form>

                {/* all item get by map method  */}
                <div className='hero_cart'>
                    <ul>
                        {search(items).map(item => <Products
                            key={item.id}
                            item={item}
                        ></Products>)}
                    </ul>
                </div>
            </div>
        );
    }

};

export default Home;