# weather-web-app
 Web app which shows information about the weather based on the user's location

This project involved creating a functional website using API calls. Upon beginning this assignment, I considered whether to continue adapting the Canberra Modern Website, or creating an entirely new site from scratch. I opted for a new website, as despite the potential challenges, it would provide greater creative and design freedom. I chose to use JavaScript, as it is the programming language I am most familiar with (as opposed to Vue.JS, Angular.JS etc.), and would have substantial online documentation if I needed further advice.  

I then deliberated what problem and subsequent API call I would adopt for the website. I initially considered creating a site that would show an individual’s daily horoscope based on their star sign. I figured this was a cute idea, with the potential for creative designs and animation. However, the API I found did not provide any guidance on how to apply it in Vanilla JavaScript. 

I discovered NASA had several APIs which could be adapted into a functional web app. I chose one titled, ‘Mars Rover Photos’, designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars (NASA, 2022). This site had very instructive documentation and examples which I used to understand how to properly perform API calls using JavaScript. I realised however, there was no clear ‘problem’ I was solving with this API, so I decided to change it to a more basic weather app. 

The problem would be discovering the current weather, including, temperature, wind speed and humidity. The user would simply need to enter a city into a search bar, and would receive data on current weather in that location. 
Using HTML and CSS, I created the website with placeholder information (i.e. city: Canberra, temp: 16°C, windspeed: 6km/h etc.) in order to focus entirely on the design of the site. I opted for a central search bar along with a display card that would feature all the weather content. In order to imitate current modern and chic trends, I made these items rounded, with translucent and blurred backgrounds that did not hinder the Canberra background. Once I was satisfied with the design, I was ready to replace the placeholder text with data from the online API. The organisation, Open Weather, had a free API which provides weather data based on geographical coordinates. I initially thought I would need two distinct API calls, the first being a Geolocation API that would convert the city name into longitude and latitude coordinates, which could then be placed into the Weather API as necessary parameters. This step was difficult to apply, as, whilst I could gain the coordinate data from the user input, I did not know how to then apply it in the new weather string (i.e. converting ‘London’ into ‘51.5072° N, 0.1276° W’ then placing said data into the new API call). Fortunately, upon reviewing the documentation, I found a new string which only required the city name as a parameter. Using this, I was able to return the correct data based on the city entered by the user. The chrome extension JSONVue was extremely useful in displaying and validating JSON documents, allowing me to see how to call specific data from the API. Using this I was able to include elements such as weather conditions, a weather icon, wind speed, humidity levels and temperature. After I was satisfied with the API call, I proceeded to add finishing touches to the styling of the website. I enlarged the title and tagline, added a linear infinite cloud animation, as well as hover animations for the search bar and weather card. These changes were intended to make the website more appealing, as it has a fairly simple concept.  

![OpenWeather API Website](/images/Open-Weather.PNG)

If I were to improve the site, I would add more interactive JavaScript elements to make the experience more engaging to the audience. For instance, I would change the image background to match whichever city had been entered by the user. Additionally, I would add a function to autocomplete cities as the user was typing them. Alternatively, I would potentially change the API to a more Canberra-oriented one, thereby allowing for more detail on particular suburbs. I would additionally try to add more description, such as the UV rating and ‘feels-like’ data. Despite these shortcomings, I am proud of the web app I have created, as it resolves the problem of finding the current weather in a particular location, whilst retaining the design and style I initially developed.  


## References 

Carla Notarobot, (2020), *Code a Starry Night CSS Animation Background (Easy) | CSS for Beginners | 5min Tech Projects*, [YouTube], https://www.youtube.com/watch?v=0t6Dmp70kTw

Google Maps Platform, (2022), *Geocoding request and response*, https://developers.google.com/maps/documentation/geocoding/requests-geocoding 

GreekProbin, (2021), *Food Recipe App Using API | Vanilla JS Project*, [YouTube], https://www.youtube.com/watch?v=opikz5x_1ak 

NASA, (2022), *APIs*, https://api.nasa.gov/ 

Online Tutorials (2021), *Glassmorphism Login Form using Html & CSS | CSS3 Animated Login Form*, https://www.youtube.com/watch?v=mW0Z1T8l7sU 

OpenWeather (2022), *Current Weather Data*, https://openweathermap.org/current#name 

The Coding Train, (2015), *10.6: API Query with User Input - p5.js Tutorial*, [YouTube], https://www.youtube.com/watch?v=4UoUqnjUC2c&t=2s 

The Coding Train, (2015), *10.5: Working with APIs in Javascript - p5.js Tutorial*, [YouTube], https://www.youtube.com/watch?v=ecT42O6I_WI 

Travis Media, (2017), *How To Make An Item Grow On Hover with CSS*, https://travis.media/how-to-make-an-item-grow-on-hover-with-css/

W3Schools, (2022), *How TO - Search Bar*, https://www.w3schools.com/howto/howto_css_searchbar.asp 
