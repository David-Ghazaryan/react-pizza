import { useDispatch, useSelector } from "react-redux";
import { setCategoryType } from "../redux/slices/filterSlice";

function Categories() {

  const dispatch = useDispatch();

  const onChangeCategory =(type) => {
    dispatch(setCategoryType(type))
  }
  
  const categoryId = useSelector(state => state.filter.categories[0].type)

  const categoryOptions = [
    { type: '', name: "All" },
    { type: 1, name: "Meat" },
    { type: 2, name: "Vegetarian" },
    { type: 3, name: "Grill" },
    { type: 4, name: "Spicy" },
    { type: 5, name: "Closed" },
  ];

    return (
        <div>
            <ul className="flex">
              {categoryOptions.map((obj) => (
                <li
                  key={obj.type}
                  onClick={() => onChangeCategory(obj.type)}
                  className={`mr-3 cursor-pointer rounded-full px-7 py-3 font-bold select-w transition
                    ${categoryId === obj.type
                      ? "bg-[#282828] text-white"
                      : "bg-[#f9f9f9] hover:bg-[#f2f2f2] active:bg-[#eaeaea]"
                    }`}
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
    )
}   
export default Categories;