def analyze_file(file_path)
  # Read the content of the file
  file_content = File.read(file_path)

  # Count the occurrences of the word
  word_count = file_content.downcase.scan(/\bthe\b/).size

  # Calculate the total number of words in the file
  total_words = file_content.split.size

  contains_42 = file_content.include?('42')

  # Create the result array
  result_array = ["the", word_count, contains_42]

  # Print the result array
  p result_array
end

# Call the function with the file path
analyze_file("universe_and_everything.md")

