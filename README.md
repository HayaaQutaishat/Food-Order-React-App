# Food-Order-React-App

Simple food order application built with React, Javascript, HTML and CSS.

### Project purpose :

A food order application that will allow users to check the available list of meals. Users can add these meals to the cart, change their amounts and also add them multiple times. Users  can view the cart to see what's in there, they can also change their cart from that page. This project was built using React, Javascript, HTML, and CSS for styling.

### The Main Page:

The main page shows all the different parts of the project. Here we can see all the available meals that users can order from. Each meal has a name, a description and a price. So that users can add the meals to their cart by simply filling the form by entering the amount they want and click on the add button. 

<img width="1314" alt="Screen Shot 2022-11-08 at 5 08 09 PM" src="https://user-images.githubusercontent.com/95029840/200616969-d574d437-b352-476f-bd46-d17869789b69.png">


When the user add a meal to the cart, the total amount of items in the cart will be updated to show the number of items in the cart.

<img width="1363" alt="Screen Shot 2022-11-08 at 5 20 05 PM" src="https://user-images.githubusercontent.com/95029840/200619285-10e1cf85-970c-4332-8a0a-abc5810d4cda.png">


Users can view thier shopping cart by clicking on the cart button that appears in the header. The shopping cart is rendered in a Modal. The modal has a backdrop which blocks interaction with the rest of the page. Here I used React Portals to render the modal.


<img width="1327" alt="Screen Shot 2022-11-08 at 5 36 34 PM" src="https://user-images.githubusercontent.com/95029840/200623053-7405474b-5239-48d0-b1ee-820614352837.png">


The overall cart data is managed through React Context because I needed it in different places off the application. For example on the meal items, I needed to update the cart and the cart component, on the cart also, the cart items can also be added or removed.
The overall cart data is managed through React Context because I needed it in different places off the application. For example on the meal items, I needed to update the cart and the cart component, on the cart also, the cart items can also be added or removed.
This application uses a number of React Hooks for example: useState(), useEffect(), useReducer() and useContext(). 

