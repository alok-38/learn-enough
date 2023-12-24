def get_user_input
  print "Enter elements of the array separated by commas: "
  gets.chomp.split(",").map(&:strip)
end

def display_menu
  puts "Choose a sorting option:"
  puts "1. Sort in ascending order"
  puts "2. Sort in descending order"
  puts "3. Sort strings in alphabetical order"
  puts "4. Sort strings in reverse alphabetical order"
end

def determine_data_type(array)
  first_element = array.first

  if first_element.to_i.to_s == first_element
    :integer
  elsif first_element.to_f.to_s == first_element
    :float
  else
    :string
  end
end

def convert_array_elements(array, data_type)
  case data_type
  when :integer, :float
    array.map!(&:to_i)
  end
end

def sort_array(array, choice, data_type)
  case data_type
  when :integer, :float
    case choice
    when 1
      array.sort!
    when 2
      array.sort!.reverse!
    else
      puts "Invalid choice. Sorting in ascending order by default."
      array.sort!
    end
  when :string
    case choice
    when 3
      array.sort_by!(&:downcase)
    when 4
      array.sort_by!(&:downcase).reverse!
    else
      puts "Invalid choice. Sorting strings in alphabetical order by default."
      array.sort_by!(&:downcase)
    end
  end
end

def display_sorted_array(array, data_type)
  sorted_array = case data_type
                 when :integer, :float
                   array.join(', ')
                 when :string
                   if array.empty?
                     "Array is empty."
                   else
                     array.join(', ')
                   end
                 end

  puts "Sorted array: #{sorted_array}"
end

# Main program
loop do
  input_array = get_user_input
  data_type = determine_data_type(input_array)

  display_menu
  user_choice = gets.chomp.to_i

  convert_array_elements(input_array, data_type)
  sort_array(input_array, user_choice, data_type)
  display_sorted_array(input_array, data_type)

  print "Do you want to perform another array operation? (yes/no): "
  break unless gets.chomp.downcase == 'yes'
end

