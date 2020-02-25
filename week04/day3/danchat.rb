require 'pry'

loop do
    puts "Say something to Daniel or type Exit..."
    phrase = gets.chomp
    break if phrase == "Exit"
    if  phrase.end_with?("?") >>> can be a word
        puts "Sure"
    elsif phrase == ""
        puts "Fine, Be that way!"
    # elsif phrase.upcase == phrase && phrase != ""
    elsif phrase !~ /[a-z]/
        puts "Woah! Chill out!"
    else
        puts "Whatever!"
    end
end

# to exit the loop use a new condition and use 'break if'