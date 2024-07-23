Create app "new create-react-app netplix-gpt"
run "npm start"
install tailwind
create component/utils folders
rafce shorthand
Routing=> npm i -D react-router-dom,createBrowserRouter,RouterProvider
header, login, sign up
formik library for form validation, useRef 
firebase => create project in firebase.google.com and config in app,npm install firebase,npm install -g firebase-tools, firebase login/ firebase login --reauth,firebase use --add, firebase init(build choose), npm run build, firebase deploy (-1.55)
Deploying our app to production
Create SignUp User Account(firebase api call)
Redux=> npm i -D @reduxjs/toolkit, npm i react-redux (-1.01)
create store, slice,import slice into store, inject in app 
saving login user in to slice in app 
useEffect(api call) =>dispatch the api response to store (like set)
useSelector (get) from store
useNavigation
signout , update
unsubscribed to callback - day 2
Regiter TMDB API & create an app & get access token
Get Data from TMDB now playing movies list API
Custom Hook for Now Playing Movies
Create movieSlice
Update Store with movies Data
Planning for MainContainer & secondary container
early return
Fetch Data for Trailer Video
Update Store with Trailer Video Data
Embedded the Youtube video and make it autoplay and mute
Tailwind Classes to make Main Container look awesome
Build Secondary Component
Build Movie List
build Movie Card
TMDB Image CDN URL
Made the Browse page amazing with Tailwind CSS
Day 3(GPT)
gpt search bar 
multi lang ddl
gpt login and create secrate key
install "npm i openai"
creat openai and add key 
call openai in gptsearchbar
promise.all() -1.48
to keep sensitive data in .env, while using 
memoization (if already data there dont call api)
Get Open AI Api Key 
Gpt Search API Call
fetched gptMoviesSuggestions from TMDB
created gptSlice added data
Reused Movie List component to make movie suggestion container
responsive -40.00




Login/Sign Up
    Sign In /Sign up Form
    redirect to Browse Page
Browse (after authentication)
    Header
    Main Movie
        Tailer in Background
        Title & Description
        MovieSuggestions
            MovieLists * N
NetplixGPT
    Search Bar
    Movie Suggestions

    https://shalinireact.netlify.app
    shalu.shalinigowda@gmail.com
    Shalu@2020

    https://api.themoviedb.org/3/movie/top_rated
    https://api.themoviedb.org/3/movie/popular
    https://api.themoviedb.org/3/movie/now_playing
    https://api.themoviedb.org/3/movie/upcoming