def split_this_string(my_string)
  return my_string.split(" ")
end

result = split_this_string("ant bat cat")
puts result.inspect

# let us now reverse this
reversed_result = result.reverse
puts reversed_result.inspect
