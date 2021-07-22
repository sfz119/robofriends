import React, {useState, useEffect} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/searchBox';
import Scroll from '../Components/scroll';

function App() {
  const [ users, setUsers ] = useState([]);
  const [ searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(robots => {setUsers(robots)})
    .catch(err => console.log(err));
  }, []);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  }

  const filterRobots = users.filter(user => {
    return user.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if(!users.length){
    return (
      <div className="tc">
        <h2 id="header" className="f1 tc">Loading...</h2>
      </div>
    );
  }else{
    return (
      <div className="tc">
        <h2 id="header" className="f1 tc">Robo Friends</h2>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
