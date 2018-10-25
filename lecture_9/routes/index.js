const path = require("path");
const constructorMethod = app => {
    app.get("/", (req, res)=>{
        res.render("input",{title: "The Best Palindrome Checker in the World!"});
    });
    app.use("*", (req, res) => {
        res.status(404).render("error", {
            title:"Errot 404",
            description: "Page not found"
        });
    });
};
  
module.exports = constructorMethod;
  