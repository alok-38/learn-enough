puts "Hello, world!"
puts "How's it going?"
hello_to_the_world = gets.chomp.downcase

# List of extended valid responses
valid_responses = ["good","great", "doing good", "awesome", "fantastic", "fine", "excellent", "superb", "amazing", "terrific", "outstanding"]

if valid_responses.include?(hello_to_the_world)
  puts "Awe, that's great!"
else
  puts "Get some sleep, dear..."
end

