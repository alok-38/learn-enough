puts "Enter some string:"
original_string = gets.chomp
cleaned_string = original_string.downcase.gsub(/[^a-z0-9]/, '')
puts cleaned_string
