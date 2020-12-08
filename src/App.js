import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allcategories = [
  'all',
  ...new Set(
    items.map((item) => {
      return item.category;
    }),
  ),
];

console.log(allcategories);

function App() {
  const [MenuItem, setMeneItem] = useState(items);
  const [category, setCatgory] = useState(allcategories);

  //filter function
  const FilterMenu = (category) => {
    const newMenu = items.filter((item) => item.category === category);
    if (category === 'all') {
      return setMeneItem(items);
    }
    setMeneItem(newMenu);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories category={category} FilterMenu={FilterMenu} />
        <Menu items={MenuItem} />
      </section>
    </main>
  );
}

export default App;
