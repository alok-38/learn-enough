puts "What is your name?"
my_name = gets.chomp
puts "How old are you?"
my_age = gets.chomp
age = my_age.to_i

formatted_output = sprintf("My name is %s and I am %d years old.", my_name, age)
puts formatted_output
