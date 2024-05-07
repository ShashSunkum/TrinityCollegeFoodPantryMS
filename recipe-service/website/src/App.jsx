// import React from "react";
// import { Select, SelectItem } from "@nextui-org/react";
// import { Button, Card, CardBody, Skeleton } from "@nextui-org/react";
// import axios from "axios";
// import { useState, useEffect } from "react";
//
// function App() {
//   const [selectedIngredients, setSelectedIngredients] = React.useState(new Set([]));
//   const [recipe, setRecipe] = React.useState("");
//   const [isLoaded, setIsLoaded] = useState(false);
//
//   // Effect to simulate the skeleton loading for recipe
//   useEffect(() => {
//     if (recipe === "") {
//       setIsLoaded(false);  // Set to false when waiting for a recipe
//       const timer = setTimeout(() => {
//         setIsLoaded(true);
//       }, 3000); // Change to true after 3 seconds, adjust as needed
//       return () => clearTimeout(timer);
//     }
//   }, [recipe]); // Depend on recipe
//
//   const foodItems = [
//     { label: "Tomato", value: "tomato" },
//     { label: "Potato", value: "potato" },
//     { label: "Rice", value: "rice" },
//     { label: "Beans", value: "beans" },
//     { label: "Cabbage", value: "cabbage" },
//   ];
//
//   const handleSelectionChange = (e) => {
//     setSelectedIngredients(new Set(e.target.value.split(",")));
//   };
//
//   const fetchRecipe = async () => {
//     try {
//       const ingredients = Array.from(selectedIngredients).join(",");
//       const response = await axios.get(`http://127.0.0.1:5000/article/generate-recipe/${ingredients}`);
//       setRecipe(response.data);
//     } catch (error) {
//       console.error("Error fetching recipe:", error);
//     }
//   };
//
//   return (
//     <div>
//       <Select
//         label="Food items"
//         placeholder="Select the ingredients"
//         selectionMode="multiple"
//         className="max-w-xs"
//         onChange={handleSelectionChange}
//       >
//         {foodItems.map((foodItem) => (
//           <SelectItem key={foodItem.value} value={foodItem.value}>
//             {foodItem.label}
//           </SelectItem>
//         ))}
//       </Select>
//       <Button color="secondary" variant="ghost" size="lg" onClick={fetchRecipe}>
//         Find me a recipe
//       </Button>
//       {!isLoaded ? (
//         <div className="space-y-3">
//           <Skeleton isLoaded={isLoaded} className="w-3/5 rounded-lg">
//             <div className="h-3 w-full rounded-lg bg-secondary"></div>
//           </Skeleton>
//           <Skeleton isLoaded={isLoaded} className="w-4/5 rounded-lg">
//             <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
//           </Skeleton>
//           <Skeleton isLoaded={isLoaded} className="w-2/5 rounded-lg">
//             <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
//           </Skeleton>
//         </div>
//       ) : (
//         <div>
//           <Card className="py-5 max-w-[1000px]">
//             <CardBody>
//               <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
//                 {recipe}
//               </pre>
//             </CardBody>
//           </Card>
//         </div>
//       )}
//       <footer style={{
//         width: '100%',
//         position: 'sticky',
//         bottom: 0,
//         textAlign: 'center',
//         borderTop: '1px dashed #888', // Gray separator line
//         backgroundColor: '#000', // Black background color for the footer
//         color: '#fff', // White text color for better contrast
//         padding: '1rem 0', // Vertical padding
//         boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.5)' // Dark-gray shadow for a more pronounced effect
//       }}>
//         Created by the FreeBytes Team - CPSC 415: Large Scale Dev
//       </footer>
//     </div>
//   );
// }
//
// export default App;


import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button, Card, CardBody, Skeleton } from "@nextui-org/react";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [selectedIngredients, setSelectedIngredients] = React.useState(new Set([]));
  const [recipe, setRecipe] = React.useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [foodItems, setFoodItems] = useState([]); // State to hold dynamic food items

  useEffect(() => {
    // Fetch items when component mounts
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/auth/item');
        const items = response.data.Result.map(item => ({
          label: item.name,
          value: item.name.toLowerCase().replace(/\s/g, '_') // Example transformation
        }));
        setFoodItems(items);
      } catch (error) {
        console.error('Error fetching items:', error.message);
      }
    };
    fetchItems();

    // Skeleton effect for recipe
    if (recipe === "") {
      setIsLoaded(false);
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [recipe]);

  const handleSelectionChange = (e) => {
    setSelectedIngredients(new Set(e.target.value.split(",")));
  };

  const fetchRecipe = async () => {
    try {
      const ingredients = Array.from(selectedIngredients).join(",");
      const response = await axios.get(`http://127.0.0.1:5000/article/generate-recipe/${ingredients}`);
      setRecipe(response.data);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  return (
      <div>
        <Select
            label="Food items"
            placeholder="Select the ingredients"
            selectionMode="multiple"
            className="max-w-xs"
            onChange={handleSelectionChange}
        >
          {foodItems.map((foodItem) => (
              <SelectItem key={foodItem.value} value={foodItem.value}>
                {foodItem.label}
              </SelectItem>
          ))}
        </Select>
        <Button color="secondary" variant="ghost" size="lg" onClick={fetchRecipe}>
          Find me a recipe
        </Button>
        {!isLoaded ? (
            <div className="space-y-3">
              <Skeleton isLoaded={isLoaded} className="w-3/5 rounded-lg">
                <div className="h-3 w-full rounded-lg bg-secondary"></div>
              </Skeleton>
              <Skeleton isLoaded={isLoaded} className="w-4/5 rounded-lg">
                <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
              </Skeleton>
              <Skeleton isLoaded={isLoaded} className="w-2/5 rounded-lg">
                <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
              </Skeleton>
            </div>
        ) : (
            <Card className="py-5 max-w-[1000px]">
              <CardBody>
            <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
              {recipe}
            </pre>
              </CardBody>
            </Card>
        )}
        <footer style={{
          width: '100%',
          position: 'sticky',
          bottom: 0,
          textAlign: 'center',
          borderTop: '1px dashed #888',
          backgroundColor: '#000',
          color: '#fff',
          padding: '1rem 0',
          boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.5)'
        }}>
          Created by the FreeBytes Team - CPSC 415: Large Scale Dev
        </footer>
      </div>
  );
}

export default App;

