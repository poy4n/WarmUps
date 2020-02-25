
# use hashes, loops, 
# use key/value pair
# .each to access hash key/value

orders = {

}

loop do 
    print "what is your name..."
    user_name = gets.chomp
    
    print "what are you craving for?..."
    main_order = gets.chomp
    
    print "what extras do you want?..."
    extra = gets.chomp

    orders[user_name] = [main_order, extra]
   
    print "do you want more?..."
    answer = gets.chomp
    
    break if answer == "no"
end

orders.each do |key, val|
    puts "#{key} ordered a #{val[0]} and #{val[1]}"
end