import '../App.css'
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import axios from 'axios'

import Sort from '../components/sort'
import Skeleton from "../skeleton/skeleton";
import Categories from '../components/categories'
import PizzaBlock from "../components/pizzaBlock";
import PizzaNotFound from '../components/pizzaNotFound';
import Pagination from '../pagination/pagination' 

function Home() {
  const searchValue = useSelector(state => state.search.searchValue)
  const currentPage = useSelector(state => state.filter.currentPage)
  // const category = useSelector(state => state.filter.categories[0].type)
  // const sortType = useSelector(state => state.filter.sortOptions[0].type)

  const [items,setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const limit = 4;

  const style = items.length > 0 ? "grid grid-cols-4  gap-x-6 gap-y-5" : "";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);

    // const orderBy = sortType.includes('-') ? 'desc' : 'asc';
    // const sortBy = sortType.replace('-','');
    const searchQuery = searchValue ? `${searchValue}` : '';

    axios.get(`https://69651116e8ce952ce1f412a0.mockapi.io/pizzas?page=${currentPage}&limit=${limit}&search=${searchQuery}`)
      //  &sortBy=${sortBy}&order=${orderBy} &category=${category}
    .then((res) =>{
      setItems(res.data)
      setIsLoading(false)
    })
  }, [ currentPage, searchValue]);
  const pizzas = items.map(pizza => <PizzaBlock {...pizza} key={pizza.id}/>)

  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />)
  return (
    <div className="container">
      <div className='flex items-center justify-between'>
        <Categories />
        <Sort />
      </div>
      <div className=" mx-auto">
        <div className="flex items-center justify-between mb-10">
          </div>
            <div className={style}>
              {isLoading ? skeletons : items.length != 0 ? pizzas : <PizzaNotFound />}
            </div>
      </div>
      <Pagination/>
    </div>
  )
}
export default Home
