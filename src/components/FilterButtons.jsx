/** @format */

const FilterButtons = ({ setFilter }) => {
  return (
    <div className='filter'>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("incomplete")}>Incomplete</button>
    </div>
  );
};

export default FilterButtons;
