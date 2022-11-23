# Food-Order-React-App

Simple food order application built with React, Javascript, HTML and CSS.

### Project purpose :

A food order application that will allow users to check the available list of meals. Users can add these meals to the cart, change their amounts and also add them multiple times. Users  can view the cart to see what's in there, they can also change their cart from that page. This project was built using React, Javascript, HTML, and CSS for styling.

### The Main Page:

The main page shows all the different parts of the project. Here we can see all the available meals that users can order from. Each meal has a name, a description and a price. So that users can add the meals to their cart by simply filling the form by entering the amount they want and click on the add button. 

<img width="1314" alt="Screen Shot 2022-11-08 at 5 08 09 PM" src="https://user-images.githubusercontent.com/95029840/200616969-d574d437-b352-476f-bd46-d17869789b69.png">


When the user add a meal to the cart, the total amount of items in the cart will be updated to show the number of items in the cart.

<img width="1363" alt="Screen Shot 2022-11-08 at 5 20 05 PM" src="https://user-images.githubusercontent.com/95029840/200619285-10e1cf85-970c-4332-8a0a-abc5810d4cda.png">


Users can view thier shopping cart by clicking on the cart button that appears in the header. The shopping cart is rendered in a Modal. The modal has a backdrop which blocks interaction with the rest of the page. Here I used React Portals to render the modal. When a new item is added to the shopping cart I checked that if this item is already a part of the cart or not. If the item is in the cart already I only update the amount and the price for that item, if not I added it as a new item in that array. Users also can add and delete items from the shopping cart by clicking on the plus and minus buttons. 



<img width="1327" alt="Screen Shot 2022-11-08 at 5 36 34 PM" src="https://user-images.githubusercontent.com/95029840/200623053-7405474b-5239-48d0-b1ee-820614352837.png">


The overall cart data is managed through React Context because I needed it in different places off the application. For example on the meal items, I needed to update the cart and the cart component, on the cart also, the cart items can also be added or removed.
The overall cart data is managed through React Context because I needed it in different places off the application. For example on the meal items, I needed to update the cart and the cart component, on the cart also, the cart items can also be added or removed.
This application uses a number of React Hooks for example: useState(), useRef(), useEffect(), useReducer() and useContext(). 


<img width="1440" alt="Screen Shot 2022-11-23 at 10 23 13 AM" src="https://user-images.githubusercontent.com/95029840/203578236-48a6a5d2-a830-4fd5-892f-7b12d1306198.png">

This application uses Firebase tool, which help us to connect our frontend application with a backend API which will do the talk to the database for example fetch and send data using the realtime database. I moved my hard-coded meals data(dummy_meals array) into a backend API which given by firebase.
I added a new node manually and I called it meals with some nested data, then i gave every meal an id, a name, a price and a description field.
Then, I used the built-in fetch API in order to fetch data from Firebase by sending GET HTTP request once the component is loaded so that's why I used (useEffect React Hook). Then I rednered the MealItems that I got from Firebase.


<img width="1401" alt="Screen Shot 2022-11-23 at 4 27 37 PM" src="https://user-images.githubusercontent.com/95029840/203585056-8e989d5b-e8f6-4710-a55a-9eddad9c440d.png">

Loading State is showing to the user while waiting the data to arrive because fetch return a promise. So that the list of meals is loaded once we really got a list of meals from firebas otherwise a loading paragraph will be rendered. 



<img width="1440" alt="Screen Shot 2022-11-23 at 4 58 06 PM" src="https://user-images.githubusercontent.com/95029840/203592010-29b55339-6a79-4c85-8eb0-aa45543bc3bd.png">


If error occured while fetching the data from the server (if users are not getting a successful response) an error message will be shown instead of loading.

<img width="1440" alt="Screen Shot 2022-11-23 at 5 12 41 PM" src="https://user-images.githubusercontent.com/95029840/203595094-a2ad4ad8-7e44-4074-ac44-7d8c9f0340a5.png">


When users add items to their cart and clicks the "Order" button, the modal will expand and a checkout form will be shown where the users should enter the their name, address, postal code and city. Thereafter I can confirm that input to send the order to the backend.

