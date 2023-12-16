def evaluate_statement(statement)
  # Convert the statement to lowercase for case-insensitive comparison
  statement = statement.downcase

  # Define a set of true statements
  true_statements = [
    "the sky is blue",
    "earth is spherical",
    # Add more true statements as needed
  ]

  # Check if the statement is true or false
  if true_statements.include?(statement)
    puts "The statement is true."
  else
    puts "The statement is false."
  end
end

# Example usage
puts "Enter a statement:"
user_statement = gets.chomp

evaluate_statement(user_statement)

