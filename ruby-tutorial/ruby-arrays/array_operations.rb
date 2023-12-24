def display_menu
  puts "1. Display the array"
  puts "2. Slice the array"
  puts "3. Sort the array"
  puts "4. Search for an element"
  puts "5. Exit"
end

def display_array(arr)
  puts "Array: #{arr}"
end

def slice_array(arr)
  print "Enter start index: "
  start_index = gets.chomp.to_i
  print "Enter end index: "
  end_index = gets.chomp.to_i

  sliced_array = arr[start_index..end_index]
  puts "Sliced array: #{sliced_array}"
end

def sort_array(arr)
  sorted_array = arr.sort
  puts "Sorted array: #{sorted_array}"
end

def search_element(arr)
  print "Enter the element to search: "
  element = gets.chomp.to_i

  if arr.include?(element)
    puts "#{element} found in the array."
  else
    puts "#{element} not found in the array."
  end
end

my_array = (1..10).to_a

loop do
  display_menu
  print "Enter your choice: "
  choice = gets.chomp.to_i

  case choice
  when 1
    display_array(my_array)
  when 2
    slice_array(my_array)
  when 3
    sort_array(my_array)
  when 4
    search_element(my_array)
  when 5
    puts "Exiting program. Goodbye!"
    break
  else
    puts "Invalid choice. Please enter a valid option."
  end

  puts "\n" # Add a newline for better readability
end
