import React from "react";
import withContext from "../withContext";
// import ProductItem from "./ProductItem";
// import ProductList from "./ProductList";

const product = [
    {
        name:"shorts",
        price:399.99,
    },
    {
        name:"bags",
        price:89.99,
    },
    {
        name:"shirts",
        price:149.99,
    },
    {
        name: "socks",
        price: 9.99,
    },
    {
        name:"shoes",
        price:229.99,
    },
];

function FilterButton() {
    return (
      <div>
        {product.filter(product => product.price < 100).map(filteredProduct => (
          <li>
            {filteredProduct.name}
          </li>
        ))}
      </div>
    );
  }

export default withContext(FilterButton);



// import ProductList from "./ProductList";

// const FilteredList = React.createClass({
//     filterList: function(event){
//         const updatedList = this.state.initialItems;
//         updatedList = updatedList.filter(funciton(item){
//             return item.toLowerCase().search(
//                 event.target.value.toLowerCase()) !== -1;
//             )
//         });
//         this.SVGElementInstanceList({items: updatedList});
//     },
//     getInitialState: function(){
//         return {
//             initialItems: [],
//             items: []
//         }
//     },
//     componentWillMount: function(){
//         this.setState({items: this.state.initialItems})
//     },
//     render: function(){
//         return (
//             <div className="filter-list">
//                 <form>
//                     <fieldset className="form-group">
//                         <input 
//                         type="text" 
//                         classname="form-control" 
//                         placeholder="search" 
//                         onChange={this.filterList}>
//                         </input>
//                     </fieldset>
//                 </form>
//                 <List items={this.state.items}/>
//             </div>
//         )
//     }
// });

// const List = React.createClass({
//     render: function (){
//         return (
//             <ul className="lsit-group">
//             {
//                 this.props.items.map(function(item) {
//                     return <li className="list-group-item"
//                     data-category={item} key={item}>{item}</li>
//                 })
//             }
//             </ul>
//         )
//     }
// });

// React.render(<FilteredList/>,
// document.getElementById('app'));