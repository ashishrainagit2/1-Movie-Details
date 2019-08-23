import React , {useState} from "react";

const homepage = (props) => {

    const [homeState, setHomeState] = useState({
        homepageStatus : true
    });

    // const switchHomepageStatus = () => {
    //     setHomeState({
    //         homepageStatus : false
    //     })
    // }

    return (
       <div>
           hello Home-page

       </div>
    )
}

export default homepage;


// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>You clicked {count} times!</h2>

//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }
// export default App;