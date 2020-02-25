
require 'securerandom'

class Coffee
    # we are creating properties of the object
    def initialize(new_c, type, size, number)
        @name = new_c
        @type = type
        @size = size
        @sugare = number
    end
    
    def to_s # is a method ruby look for first

        "#{ @name }'s #{ @type }, #{ @size }, #{ @sugare } sugars..."

        # "#{ @name.split('').map{ |x| (x == 'D') ? 'B' : x }.join }'s #{ @type }, #{ @size }, #{ @sugare } sugars..."

        # "#{ SecureRandom.alphanumeric }'s #{ @type }, #{ @size }, #{ SecureRandom.random_number(5) } sugars..."

    end
    
end

c1 = Coffee.new('Darryl', 'latte', 'medium', 2)
puts c1

# .tr