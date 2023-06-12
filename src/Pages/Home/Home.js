import React, { useEffect, useState } from 'react';
import Products from './Products';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import './Home.css'

const Home = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // filter method
    const [filterParam, setFilterParam] = useState(["All"]);

    // search method
    const [q, setQ] = useState("");
    const [searchParam] = useState(["name"]);

    useEffect(() => {
        fetch("CafeData.json")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    console.log(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    // console.log(items.map(item => console.log(item.category)));
    console.log(items);



    const search = (items) => {
        return items.filter((item) => {
            if (item.category === filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                })
            }
            else if (filterParam === "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                })
            }
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
                <div className='hero_search'>
                    <div>
                        <select

                            onChange={(e) => {
                                setFilterParam(e.target.value);
                            }}
                            className="custom-select"
                            aria-label="Filter  By Category">
                            <option value="All">All</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Burger">Burger</option>
                            <option value="Fish">Fish</option>

                        </select>
                        <span className="focus"></span>
                    </div>
                    <Form inline={true}>
                        <Input
                            type='search'
                            name='search-form'
                            placeholder='Search .....'
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </Form>
                </div>

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