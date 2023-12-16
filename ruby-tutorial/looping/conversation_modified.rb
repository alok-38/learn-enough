def greeting_response(user_input)
  valid_responses = ["good", "great", "doing good", "awesome", "fantastic", "fine", "excellent", "superb", "amazing", "terrific", "outstanding"]
  vulgar_words = ["vulgar_word1", "vulgar_word2", "vulgar_word3"]
  negative_words = ["bad", "horrible", "terrible"]

  if valid_responses.include?(user_input)
    puts "Awe, that's great!"
  elsif vulgar_words.any? { |vulgar_word| user_input.include?(vulgar_word) }
    puts "I'm sorry, but let's keep it clean. Please enter a positive response like: #{valid_responses.join(', ')}"
  elsif negative_words.include?(user_input)
    puts "Get some sleep, please..."
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

