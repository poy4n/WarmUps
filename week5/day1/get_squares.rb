# resolved with use of no methods

# get_squares = [4, 1, 16, 1, 10, 25, 22]
# square_nums = []

# get_squares.each do |num|
#     if (Math.sqrt(num) % 1).zero?
#         square_nums << num
#     end
# end

# p square_nums.sort.uniq


# method defined

def get_squares array
    square_nums = []
    array.each do |num|
        if (Math.sqrt(num) % 1).zero?
            square_nums << num
        end
    end
    p square_nums.sort.uniq
end

get_squares([4, 1, 16, 1, 10, 25, 22])