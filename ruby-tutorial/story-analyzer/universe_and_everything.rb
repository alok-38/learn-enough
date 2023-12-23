# Open the file containing

open_story = './universe_and_everything.md'

# Read the contents of the file and iterate through each line

File.open(open_story, 'r') do |file|
  file.each_line do |line|
    puts line
  end
end

for i in 0..(open_story.length - 1)
  puts open_story[i]
end

# Read the contents of the file into an array
lines = File.readlines(open_story)

# Print the lines in reverse order
lines.reverse.each do |line|
  puts line
end
