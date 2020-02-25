
params = {
    username: 'chocolate',
    password: 'pudding',
    friends: ['vanilla', 'strawberry', 'caramel'],
    image_url: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
}

p params[:username]
p params[:friends].last

if params[:password].size <= 8
    p 'try a longer one'
elsif
    p 'success'
end

# key pair value
# time now just gives you current time
# time new a function to create a time object
# Time.new("2020-01-01")

params[:data_sent_time] = Time.now 
params[:data_sent_time] = Time.new

if params[:image_url].include? "unsplash.com"
    p "from unsplash"
end

def check_url(url, str)
    p url.include? str
end

check_url(params[:image_url], "unsplash.com")
# use slice to cut the string from https://..../

# built in function in ruby
# uri = URI.parse('http://www.unsplash.com/image')
# uri.host
# uri.port