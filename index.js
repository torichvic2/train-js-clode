
const fallery = {
    name: "Lena",
    age: 22,
    city: "Astana",
};
function addProperty(obj, prop, value) {
        if (prop in obj) {
          throw (
              new Error("Did not throw expected error")
          );
        } else {
            obj[prop] = value;
        }
    return obj;
    // Add your code here
}



console.log(addProperty(fallery, "name", 'Lena'));