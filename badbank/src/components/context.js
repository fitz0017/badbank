// import React, { createContext, Component } from "react";

// export function Card(props) {
//   function classes() {
//     const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
//     const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
//     return "card m-3 p-4 shadow" + bg + txt;
//   }

//   return (
//     <div className={classes()} style={{ maxWidth: "18rem" }}>
//       {props.body ? (
//         props.body
//       ) : (
//         <div>
//           <h5 className="card-header card-title bg-light text-center shadow">
//             {props.email}
//           </h5>
//           <div className="card-body">
//             {props.email && <p className="card-text">Email: {props.email}</p>}
//             {props.password && (
//               <p className="card-text">Password: {props.password}</p>
//             )}
//             {props.balance && <div id="balance">Balance: ${props.balance}</div>}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export const UserContext = createContext([
//   { name: "bill", email: "bill@bill.com", balance: 0, password: "secret" },
// ]);

// class UserContextProvider extends Component {
//   state = {
//     name: "bill",
//     email: "bill@bill.com",
//     balance: 0,
//     password: "secret",
//   };
//   render() {
//     return (
//       <UserContext.Provider value={{ ...this.state }}>
//         {this.props.children}
//       </UserContext.Provider>
//     );
//   }
// }

// export default UserContextProvider;
