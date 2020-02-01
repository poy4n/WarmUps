# Params

**Do NOT setup a web server for this problem. Just create a .rb file and write your answers there.**

You receive the data:
```ruby
params = {
  username: 'chocolate',
  password: 'pudding',
  friends: ['vanilla', 'strawberry', 'caramel'],
  image_url: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
}
```

**Write the code** to:
1. print the username to the console.
2. print the last friend from `friends`.
3. check if the password meets the requirements of at least 8 characters.
4. add a key-value pair to `params` where key is the `data_sent_time` and the value is the current time.

### Extension
Write code to check that the image is from the `unsplash` website.