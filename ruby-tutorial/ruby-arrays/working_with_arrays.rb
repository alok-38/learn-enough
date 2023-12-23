def process_array(input_array)
  puts "Array input: #{input_array}"

  input_array.each do |element|
    case element
    when Integer
      puts "#{element} is an integer."
      # Perform operations specific to integers
    when String
      puts "#{element} is a string."
      # Perform operations specific to strings
    when Float
      puts "#{element} is a float."
      # Perform operations specific to floats
    else
      puts "Unknown data type: #{element.class}"
        # Handle other data types as needed
    end
  end
end

input_array = [1, "hello", 3.14, true, :symbol]
process_array(input_array)

process_array(input_array.split(''))
