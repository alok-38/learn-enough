def greeting_response(user_input)
  valid_responses = ["good", "great", "doing good", "awesome", "fantastic", "fine", "excellent", "superb", "amazing", "terrific", "outstanding"]

  if valid_responses.include?(user_input)
    puts "Awwwwe, that's great!"
  else
    puts "I didn't quite catch that. Please enter a positive response like: #{valid_responses.join(', ')}"
  end
end

puts "Hello, world!"
puts "How's it going? Type 'exit' to end the conversation."

loop do
  print "> "
  user_response = gets.chomp.downcase

  if user_response == "exit"
    puts "Goodbye!"
    break
  end

  greeting_response(user_response)
end

