/** @format */

const ClearAllButton = ({ setTasks }) => {
  return (
    <button className='clear-all' onClick={() => setTasks([])}>
      Clear All Tasks
    </button>
  );
};

export default ClearAllButton;
