
# numbers = [14, 5, 7, 2, 50, 25, 10, -4, 3, 3, 25, 2, 6, 5]

# numbers.each do |num|
#     if num.even? and num % 5 == 0
#     puts num
#     end
# end

def even_multiples numbers

    result = []
    numbers.each do |num|
        if num.even? && num % 5 == 0
            result << num
        end
    end
    result
end

p even_multiples [14, 5, 7, 2, 50, 25, 10, -4, 3, 3, 25, 2, 6, 5]
p even_multiples [500, 50, 25, 10, 5]