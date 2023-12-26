puts "Enter a word or a sentence:"
user_input = gets.chomp

# Check if the input is a sentence
if user_input.include?(' ')
  # If the input contains spaces, break the sentence into an array
  words_array = user_input.split
  puts "Array of words: #{words_array}"
else
  # If the input is a single word, break it into characters separated by comma
  characters_array = user_input.split('')
  puts "Array of characters: #{characters_array.join(', ')}"
end

