def analyze_file(file_path, words_to_search)
  # Read the content of the file
  file_content = File.read(file_path)

  # Initialize an empty hash to store word counts
  word_counts = {}

  # Downcase the file content for case-insensitive matching
  downcased_content = file_content.downcase

  # Loop through each word to search for
  words_to_search.each do |word|
    # Count the occurrences of the word
    word_count = downcased_content.scan(/\b#{word}\b/).size

    # Store the word count in the hash
    word_counts[word] = word_count
  end

  # Print the result hash
  p word_counts
end

# Call the function with the file path and an array of words to search for
analyze_file("universe_and_everything.md", ["the", "42", "some", "other"])

