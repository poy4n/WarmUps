
class Say

    def initialize(num)
        @number = num
    end

    def in_english
        if @number < 0
            puts "number must be between 0 and 99..."

        elsif @number > 99
            puts "number must not be more than 99..."
        elsif
            to_words(@number)
        end
    end

    def to_words(num)
        #lookup table
        digits = {
            0 => "zero",
            1 => "one",
            2 => "two",
            3 => "three",
            4 => "four",
            5 => "five",
            6 => "six",
            7 => "seven",
            8 => "eight",
            9 => "nine",
            10 => "ten",
            11 => "eleven",
            12 => "twelve",
            13 => "thirteen",
            14 => "fourteen",
            15 => "fifteen",
            16 => "sixteen",
            17 => "seventeen",
            18 => "eighteen",
            19 => "nineteen",
            20 => "twenty",
            22 => "twenty-two",
            30 => "thirty",
            40 => "forty",
            50 => "fifty",
            60 => "sixty",
            70 => "seventy",
            80 => "eighty",
            90 => "ninety",
            99 => "ninety-nine"
        }
        if digits.has_key?(num)
            puts digits[num]
        end
    end
end

Say.new(-1).in_english
Say.new(100).in_english

Say.new(0).in_english
Say.new(22).in_english
Say.new(60).in_english
Say.new(99).in_english