
s1 = "xyaabbbccccdefww"
s2 = "xxxxyyyyabklmopq"

def longest (s1, s2)
    (s1 + s2).split('').uniq.sort.join
end

puts longest(s1, s2)