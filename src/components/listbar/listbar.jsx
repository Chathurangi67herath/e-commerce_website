// import React, { useState } from 'react';
// import './listbar.css';
// import { PRODUCTS } from '../../products';


// function ListBar() {
//   const [hoveredItem, setHoveredItem] = useState(null);

//   // Define the information for each list item
//   const itemInfo = {
//     "Women’s Wear": {
//       text: "Information about Women’s Wear goes here. This is a paragraph of text describing women's wear.",
//       imageSrc: "1.png", // Replace with your image source
//     },
//     "Men’s Wear": {
//       text: "Information about Men’s Wear goes here. This is a paragraph of text describing men's wear.",
//       imageSrc: "men-wear.jpg", // Replace with your image source
//     },
//     "Kid’s Wear": {
//       text: "Information about Kid’s Wear goes here. This is a paragraph of text describing kid's wear.",
//       imageSrc: "kids-wear.jpg", // Replace with your image source
//     },
//     "Mother & Baby Care": {
//         text: "Information about Women’s Wear goes here. This is a paragraph of text describing women's wear.",
//         imageSrc: "women-wear.jpg", // Replace with your image source
//       },
//       "Bags": {
//         text: "Information about Men’s Wear goes here. This is a paragraph of text describing men's wear.",
//         imageSrc: "men-wear.jpg", // Replace with your image source
//       },
//       "Shoes": {
//         text: "Information about Kid’s Wear goes here. This is a paragraph of text describing kid's wear.",
//         imageSrc: "kids-wear.jpg", // Replace with your image source
//       },
//       "BeautyCare": {
//         text: "Information about Kid’s Wear goes here. This is a paragraph of text describing kid's wear.",
//         imageSrc: "kids-wear.jpg", // Replace with your image source
//       },
//     // Add or modify entries for other list items as needed
//   };

//   const handleItemHover = (item) => {
//     setHoveredItem(item);
//   };

//   const handleItemLeave = () => {
//     setHoveredItem(null);
//   };

//   return (
//     <div className="navbaro">
//       <ul>
//         {Object.keys(itemInfo).map((item) => (
//           <li
//             key={item}
//             onMouseEnter={() => handleItemHover(item)}
//             onMouseLeave={handleItemLeave}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//       {hoveredItem && (
//         <div className="info-container">
//           <p>{itemInfo[hoveredItem].text}</p>
//           <img
//             src={itemInfo[hoveredItem].imageSrc}
//             alt={`${hoveredItem} Image`}
//             className="info-image"
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default ListBar;

import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
  display: flex;
  background-color: #333;
  color: white;
`;

const NavbarItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #444;
  color: white;
  padding: 10px;
  display: none;

  ${NavbarItem}:hover & {
    display: block;
  }
`;

const ListBar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const items = [
    { name: 'Item 1', list: ['Name 1', 'Name 2'], imageUrl: 'image1.jpg' },
    { name: 'Item 2', list: ['Name 3', 'Name 4'], imageUrl: 'image2.jpg' },
    // Add similar data for the other items
  ];

  const handleItemHover = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <Navbar>
      {items.map((item, index) => (
        <NavbarItem
          key={index}
          onMouseEnter={() => handleItemHover(index)}
          onMouseLeave={handleMouseLeave}
        >
          {item.name}
          {hoveredItem === index && (
            <Dropdown>
              <ul>
                {item.list.map((name, nameIndex) => (
                  <li key={nameIndex}>{name}</li>
                ))}
              </ul>
              <img src={item.imageUrl} alt={item.name} />
            </Dropdown>
          )}
        </NavbarItem>
      ))}
    </Navbar>
  );
};

export default ListBar;
