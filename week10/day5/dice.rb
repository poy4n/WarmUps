
class Dice

    def self.roll times = 1
    
        array_of_dice = []

        times.times do
            array_of_dice << rand(1..6)
        end
       
        times == 1 ?
        array_of_dice.pop :
        array_of_dice
    end
end

p Dice.roll
p Dice.roll(3) 