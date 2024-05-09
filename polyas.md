 # Polyas Tweet

## Step 1: Understand the Problem
1. The main goal of this project is to create a `POST` route for the tweets.
2. Connect the backend to the frontend to add a tweet to the database.
4. In the frontend folder, you are going to add all the pieces to POST a fetch call to the backend, which will subsequently add a tweet to the database. 
5. If successful, the browser should automatically update the page based on the useSelector that was already created in the videos.

## Step 2: Devise a Plan
### Store
1. [ ] Add a post route to backend/routes/api/tweets.js.
2. [ ] Add a thunk action creator to add a post to the database. Export it.
   * a post will need:
     * a `method` key
     * a `headers` key with the `'Content-Type'` of `'application/json'`
     * a `body` key that uses `JSON.stringify` to send the information
3. [ ] Add a regular action creator to receive the information from the thunk action creator.
4. [ ] Create a constant to use in the action creator.
5. [ ] Add a case in the reducer for adding a tweet and add a tweet using normalization.

### Component
1. [ ] Add a CreateTweet.jsx file inside the frontend/src directory.
2. [ ] In CreateTweet.jsx, code a CreateTweet component that returns a simple form.
3  [ ] Use local state for the tweet information.
4. [ ] Use a handleSubmit function to check if the tweet is empty. If it isn't, dispatch the tweet using the thunk action creator.
1. [ ] Add a form to the TweetForm component to add a tweet.

## Step 3: Execute the Plan

## Step 4: Reflect on the Solution
