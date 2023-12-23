puts "Enter a jumbled up string:"
jumbled_string = gets.chomp
puts "What substring are you looking for?"
substring = gets.chomp

# Convert the jumbled and substring to lower case
if jumbled_string.downcase.include?(substring.downcase)
  puts "\"#{jumbled_string}\" includes the substring \"#{substring}\""
else
  puts "\"#{jumbled_string}\" does not include the substring \"#{substring}\""
end

