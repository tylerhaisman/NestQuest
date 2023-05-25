# NestQuest
A housing search service prototype built by Tyler Haisman &amp; Eli Campos

NestQuest Project Overview:

Link to Video: https://youtu.be/y_gbIsRUoEY

Problem: Where is a person’s ideal place to live based on their hobbies, housing preferences, price, and location?

Motivation: Many people, especially students and recent graduates, struggle to find a place to live that is close to everything they want to do, and some people would prioritize being close to one hobby than another. How can we select exactly what hobbies to prioritize proximity to and find the overall ideal option?

Features Implemented: 
- An intuitive user interface which takes user input on their favorite interests, housing criteria (bedrooms & bathrooms), pricing, and location.
- Program returns the top three options based on input.
- Text readings which display the runtime of the quick sort and merge sort algorithms.
- Implemented a search bar that automatically completes your search by parsing through the city and state data of the entire csv file after 3 characters are typed.

Description of Data: We input and parse a comma separated values file with a list of 100,001 entries of addresses and other relevant data pertaining to each address such as number of bedrooms, number of bathrooms, distance from each hobby, price, and more.

Tools/Languages/APIs/Libraries Used: We used HTML, CSS, and JavaScript to implement our project. JavaScript was used for the backend where we programmed sorts and pushed data to the user interface.

Algorithms Implemented: We implemented a quick sort and a merge sort algorithm.

Additional Data Structures/Algorithms Used: To store our extracted data, we used arrays.

# References

Some of the references here can also be found as comments throughout our source code.

CSV File Generator for sample data:
 https://markbdsouza.github.io/csv-data-generator/
Code for reading dropdown inputs: 
https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
Code for reading CSV file data:
https://www.youtube.com/watch?v=WrI19Qp6Uoc&ab_channel=SouthBridge
https://www.reddit.com/r/learnjavascript/comments/nf6iga/how_to_use_papaparse_for_a_local_csv_file_with_a/
Code for elapsed time for each sort:
https://stackoverflow.com/questions/6341774/keep-track-of-how-much-time-is-spent-showing-certain-elements-on-the-page
Reference code for quick sort and merge sort: 
Professor Aman’s lecture slides on sorting
