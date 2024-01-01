import React from "react";
// loading a class -> creating a new instance
class UserClass extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };
    console.log(props);
    console.log("Child Constructor");
  }

  async componentDidMount() {
    console.log("Child Component Did Mount");
    //API call
    const data = await fetch("https://api.github.com/users/Zaid944");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    // keep on calling if we change the component since
    // we have SPA
    // this refers to the complete class
    this.timer = setInterval(() => {
      console.log("Hello");
    }, 1000);
  }

  // after every update
  componentDidUpdate(prevProps, prevState) {
    //this is replaced by dependency array
    // if(this.state.count !== prevState.count){

    // }
    console.log("Component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Unmount");
  }

  render() {
    console.log("Child render");
    // const { name, location } = this.props;
    const { count } = this.state;
    const { avatar_url, name, location } = this.state.userInfo;
    // to HTML and rendered on webpage
    return (
      <div className='user-card'>
        <h1>Count = {count}</h1>
        <button
          onClick={() => {
            // never update state variables directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Contact : zaid25akhter</h3>
      </div>
    );
  }
}
export default UserClass;
//loading,mounting the component
//first constructor then render() is called
//constructor -> render -> componentDidMount
//componentDidUpdate

/**
 * MOUNTING
 * Constructor called (dummy)
 * Render the component(dummy)
 * <HTML Dummy>
 * ComponentDidMount()
 * API CALL
 * this.setState({userInfo}) -> state var updated
 *
 * UPDATE CYCLE
 * render(API DATA)
 * <HTML API DATA>
 * ComponentDidUpdate()
 *
 *
 *unmounting -> when the component is gone -> when new page we go
 *
 *
 * don't compare react lifecycle methods with functional component
 *
 *
 */
