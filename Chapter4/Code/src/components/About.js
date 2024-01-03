import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext.js";

class About extends Component {
  constructor(props) {
    //super() is used to call parent constructor
    // because in parent class we have this.props = props
    // and from their we need access of props variable in the children class
    super(props);

    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          Logged In User : 
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className='text-bold'>{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name='Zaid Akhter(class)' location='Delhi(class)' />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <UserClass name='Zaid Akhter(class)' location='Delhi(class)' />
//     </div>
//   );
// };
export default About;

//Parent Constructor -> Parent Render -> Child Constructor -> Child Render -> Child Mount -> Parent Mount
// render and commit phase are batched together
// DOM Manipulation is most expensive
