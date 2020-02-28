require 'pry'

def can_make_word(word)

    blocks = [
        ['B','O'],
        ['X','K'],
        ['D','Q'],
        ['C','P'],
        ['N','A'],
        ['G','T'],
        ['R','E'],
        ['T','G'],
        ['Q','D'],
        ['F','S'],
        ['J','W'],
        ['H','U'],
        ['V','I'],
        ['A','N'],
        ['E','R'],
        ['F','S'],
        ['L','Y'],
        ['P','C'],
        ['Z','M']
    ]

    blocks.each do |block|
       
        if word.include?(block[0])
            puts block[0]
            puts true
        elsif word.include?(block[1])
            puts block[1]
            puts true
        else
            puts false
        end
        
    end
end

# can_make_word("BARK")
can_make_word("BOOK")
