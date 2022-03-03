import React, {useEffect, useRef, useState} from 'react';
// import {decrement, increment} from "./actions";
// import {useDispatch, useSelector} from 'react-redux';
import {Container, FormControl, InputGroup, Navbar} from 'react-bootstrap';

function App() {
  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);
  // const dispatch = useDispatch();
  const searchRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [beerResults, setBeerResults] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      setBeerResults([]);
      return;
    }

    const beers = async () => {
      const response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`);
      return await response.json();
    }

    beers().then(data => setBeerResults(data));
  }, [searchTerm]);

  return (
    <>
      <Navbar bg="light" className="mb-4">
        <Container>
          <h3 className="mt-2">Wikibeeria 🍺</h3>
        </Container>
      </Navbar>
      <Container>
        <InputGroup className="mb-3">
          <FormControl
            ref={searchRef}
            onInput={() => setSearchTerm(searchRef?.current.value)}
            placeholder="Search for Beer..."
          />
        </InputGroup>
        {!!beerResults.length
          ? beerResults?.map(beer => <p>{beer.name}</p>)
          : <p>No results found</p>
        }
      </Container>
      {/*<h1>Counter: {counter}</h1>*/}
      {/*<button className="btn" onClick={() => dispatch(increment())}>+</button>*/}
      {/*<button className="btn" onClick={() => dispatch(decrement())}>-</button>*/}
      {/*<h2>{isLogged ? 'Hello, Marcin' : 'Not logged in'}</h2>*/}
    </>
  );
}

export default App;
