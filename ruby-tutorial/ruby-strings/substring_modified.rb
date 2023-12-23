puts "Enter a word or a sentence:"
original_string = gets.chomp

puts "Enter a substring to check:"
substring = gets.chomp

# Convert both the original string and the substring to lowercase
original_string_downcase = original_string.downcase
substring_downcase = substring.downcase

# Check if the lowercase substring is present in the lowercase original string
if original_string_downcase.include?(substring_downcase)
  puts "The entered string '#{original_string}' contains the substring '#{substring}'."
else
  puts "The entered string '#{original_string}' does not contain the substring '#{substring}'."
end

