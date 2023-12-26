# Creating an array to store customer information
customers = []

# Getting customer information from the user
2.times do
  puts "Enter customer details:"
  print "Name: "
  name = gets.chomp

  print "Email: "
  email = gets.chomp

  print "Phone: "
  phone = gets.chomp

  customers << { name: name, email: email, phone: phone }
end

# Displaying customer information
customers.each do |customer|
  puts "Name: #{customer[:name]}, Email: #{customer[:email]}, Phone: #{customer[:phone]}"
end

