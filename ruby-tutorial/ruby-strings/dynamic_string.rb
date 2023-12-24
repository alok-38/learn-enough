# Get user input for name, age, and occupation
print "Enter your name: "
name = gets.chomp

print "Enter your age: "
age = gets.chomp.to_i  # Convert input to integer

print "Enter your occupation: "
occupation = gets.chomp

# Build a dynamic string using user input
formatted_string = "User: #{name}, Age: #{age}, Occupation: #{occupation}"

# Display the formatted string
puts formatted_string

