
# string = "Switch caSe FoR eVery letter"
# p string.swapcase  

def switchup string

    converted = []

    string.each_char do |letter|
        if letter =~ /[A-Z]/
            up = letter.downcase
            converted.push up
        else
            low = letter.upcase
            converted.push low
        end
    end
    p converted.join('')
end

switchup "Switch caSe FoR eVery letter"
switchup "js_Was_created_bY BRENdan Eich"