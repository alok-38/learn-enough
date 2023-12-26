def go_fishing
  puts "Put worm on hook."
  puts "Cast line into pond."

  # Variables to track the state
  hook_broken = false
  out_of_worms = false

  loop do
    puts "Watch the bobber. Is it underwater? (yes/no)"
    underwater = gets.chomp.downcase

    if underwater == "yes"
      puts "Hook and pull in fish."

      # Simulate the hook getting broken randomly
      hook_broken = [true, false].sample

      if hook_broken
        puts "Uh-oh! The hook is broken. You need to check the hook."
      else
        puts "Done fishing? (yes/no)"
        done_fishing = gets.chomp.downcase

        if done_fishing == "yes"
          puts "Great! Time to go home."
          break
        else
          puts "Alright, let's go back to step 1."

          # Simulate running out of worms randomly
          out_of_worms = [true, false].sample

          if out_of_worms
            puts "Oops! You're out of worms. Need to check the can for worms and wait for the input."
            gets.chomp # Wait for user input before continuing
          end
        end
      end
    else
      puts "No fish yet. Keep waiting..."
    end
  end
end

# Start fishing
go_fishing

