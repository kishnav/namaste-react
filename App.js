/** <div id="parent">
 *    <div id="child">
 *      <h1>I'm h1 tag<h1>
 *    </div>
 * </diV>
 *React Element(object)=>HTML(Browser understand)
 *
 *  <div id="parents">
 *     <div id="child">
 *        <h1>I'm h1 tag</h1>
 *        <h2>i'm h2 tag</h2>
 *     </div>
 *     <div id="child">
 *        <h1>I'm h1 tag</h1>
 *        <h2>i'm h2 tag</h2>
 *     </div>
 *  </div>
 *
 * what is emmet?
 * emmet is set of plugin
 *
 *
 *
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",

  { id: "heading" },
  "Hello World From React"
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



// Test it here: https://jsfiddle.net/maasha/x7wz1686/
// var bunny = {
//   name: 'Usagi',
//   showName: ()=> {
//     console.log(this,"check")
//   }
// };

// bunny.showName(); 