
def seriesSum num # number of terms
    
    series = []
    
    i = 1.00
    num.times do 
        series << i
        i += 3.00      
    end

    total = 0.00
    series.each do |denominator|
        total += 1/denominator
    end

    return total.round(2).to_s

end

p seriesSum(0)
p seriesSum(1)
p seriesSum(2)
p seriesSum(4)
p seriesSum(5)

# "%.2f" % 1
# sprintf '%.2f', 1