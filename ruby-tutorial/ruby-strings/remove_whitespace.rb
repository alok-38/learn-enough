puts "Enter a string with lots of white spaces:"
spaced_string = gets.chomp
stripped_string = spaced_string.gsub(/\s+/, '')
puts "Here is the corrected string: #{stripped_string}."

