def generate_random_phrase
  print "Enter a verb: "
  verb = gets.chomp

  print "Enter an adjective: "
  adjective = gets.chomp

  print "Enter a noun: "
  noun = gets.chomp

  phrase = "#{adjective.capitalize} #{noun} #{verb}."

  return phrase
end

# Example usage
random_phrase = generate_random_phrase
puts random_phrase

