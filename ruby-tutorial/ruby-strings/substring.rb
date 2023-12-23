puts "Enter a word or a sentence:"
word_or_sentence = gets.chomp

puts "Enter a substring to check:"
substring = gets.chomp

if word_or_sentence.include?(substring)
  puts "#{substring} is present in the string."
else
  puts "#{substring} is not present in the string."
end

