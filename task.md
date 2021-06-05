The task is to update our Kitter timeline
by creating new Meows.

1. Add a useEffect hook in App.js to fetch data from the following API endpoint: https://cyf-cors-api.herokuapp.com/meows. Use this data
   to set the meows in App.js.

2. Create a new component called CreateMeow
   It should be a form with a <textarea>
   element to update the content of the
   Meow and a text input for the hashtags.
   Put it above the Timeline component.

3. Use useState to save the textarea and hashtag input
   values on change.

4. Add some styling to the CreateMeow component so that it looks more
   like the other Meow components. You can give it a class name of .CreateMeow
   and then add styling in styles.css.

5. Add a submit button to the form. On submit, handle
   the event so that it POSTs
   the text and hashtags to the the following API endpoint: https://cyf-cors-api.herokuapp.com/meow.

   Your fetch should look like this:

   ````
   fetch(
      "https://cyf-cors-api.herokuapp.com/meow",
      {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         text: (text from textarea),
         hashtags: (hashtags from input)
      })
   })
   ````

   (Make sure that the body property names are 'text' and 'hashtags')

   The hashtags should be comma separated values when you use them.

6. Clear the text and hashtag fields when the Meow is succesfully added

7. Alter the useEffect to use a dependency so that data is fetched again whenever a new
   Meow is created from your form. There are a few different ways you could do this - the goal
   is to have some value that updates when you successfully submit a new Meow and is accessible
   in App.js.

8. Sort the meow data in the useEffect hook so that newer Meows always show up at the top of the
   Timeline. (You can use the .sort() array method for this. Look it up on Mozilla Developer
   Network if you aren't sure how to use it).
