// @ts-check

import React, { useReducer } from 'react'
import { render } from "react-dom";

import { defaultState } from './SAM-djs/State'
import * as actions from './SAM-djs/Actions'
import { reducer } from './SAM-djs/Reducers'
import { getDogs } from './SAM/Effects'

import "./styles.css";

/*
  Remember to use ctrl+. to trigger intellisense after:
    - a dot as you're about to write a property name
    - a quote as you're about to write a string literal
    - and many other contexts
*/

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState)
  return (
    <div className="App">
      <h1><code>useReducer</code> Test</h1>
      With Defensive(?) JavaScript
      <h2>See <code>./SAM</code> folder</h2>

      <h3>Counter demo</h3>
      <div>
        <button className='success'
          onClick={() => dispatch(actions.incrementBy(5))}
        >
          {state.stats.count} + 5
        </button>
        <button className='danger'
          onClick={() => dispatch(actions.decrementBy(5))}
        >
          {state.stats.count} - 5
        </button>
      </div>

      <h3>String demo</h3>
      <div>
        <div>
          Type your name here.
          <input
            onChange={evt => dispatch(actions.setUserName(evt.currentTarget.value))}
            value={state.user.name}
          />
        </div>
        <br />
        <div>
          Type your title here.
          <input
            onChange={evt => dispatch(actions.setUserTitle(evt.currentTarget.value))}
            value={state.user.title}
          />
        </div>
        <br />
        <div>
          Type your greeting here.
          <input
            onChange={evt => dispatch(actions.setGreeting(evt.currentTarget.value))}
          />
        </div>
        <br />
        <div>
          <code>
            {state.greeting || "Hello"}, {state.user.name || '<No name...>'}
          </code>
        </div>
        <br />
        <button className='warning'
          onClick={() => dispatch(actions.reverseUserName())}
        >
          Reverse your name!
        </button>
      </div>
      <br />
      
      <h3>Doggo-time</h3>
      <div>
        <button className='warning'
          onClick={() => getDogs(dogs => dispatch(actions.setDogs(dogs)))}
        >
          Get some!
        </button>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          {state.dogs.map((dog, i) => <img style={{width: 100, borderRadius: 20, padding: 10 }} key={i} src={dog.url}/>)}
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);