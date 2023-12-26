def go_fishing
  puts "Put worm on hook."
  puts "Cast line into pond."

  loop do
    puts "Watch the bobber. Is it underwater? (yes/no)"
    underwater = gets.chomp.downcase

    if underwater == "yes"
      puts "Hook and pull in fish."
    else
      puts "No fish yet. Keep waiting..."
      next
    end

    puts "Done fishing? (yes/no)"
    done_fishing = gets.chomp.downcase

    if done_fishing == "yes"
      puts "Great! Time to go home."
      break
    else
      puts "Alright, let's go back to step 1."
    end
  end
end

# Start fishing
go_fishing

