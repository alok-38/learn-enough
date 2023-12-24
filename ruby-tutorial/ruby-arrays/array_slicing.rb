my_array = (1..10).to_a

# Example 1: Print the length of the array
puts "Length of the array: #{my_array.length}"

# Example 2: Slice the array to get subsets

puts "First half of the array: #{my_array[0, my_array.length / 2]}"
puts "Second half of the array: #{my_array[my_array.length / 2, my_array.length / 2]}"

# Example 3: Reverse the array
puts "Reversed array: #{my_array.reverse}"

# Example 4: Get even and odd elements
even_numbers = my_array.select { |numbers| numbers.even? }
odd_numbers = my_array.select { |numbers| numbers.odd? }

puts "Even numbers: #{even_numbers}"
puts "Odd numbers: #{odd_numbers}"

