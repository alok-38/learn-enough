def is_nil?(obj)
  obj.nil?
end

puts "Enter something or nothing:"
my_variable = gets.chomp

if is_nil?(my_variable)
  puts "The object is nil."
elsif my_variable.empty?
  puts "The object is an empty string."
else
  puts "The object is not nil and not an empty string."
end
