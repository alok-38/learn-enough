class StoryGenerator
  def initialize
    @characters = ['Alice', 'Bob', 'Charlie', 'David']
    @locations = ['a mysterious forest', 'a bustling city', 'an ancient castle']
    @actions = ['discovered', 'explored', 'encountered', 'solved']
    @adjectives = ['mysterious', 'enchanted', 'dangerous', 'ancient']
  end

  def generate_sentence(character, location, action, adjective)
    case rand(2)
    when 0
      "#{character} #{action} the #{adjective} surroundings of #{location}."
    when 1
      "In #{location}, #{character} made a #{adjective} discovery and #{action} it."
    end
  end

  def generate_story
    puts 'Enter the main character\'s name:'
    input_name = gets.chomp.capitalize

    # Check if the entered name is a valid character
    character = @characters.include?(input_name) ? input_name : input_name

    location = @locations.sample
    action = @actions.sample
    adjective = @adjectives.sample

    story = "Once upon a time, in #{location}, #{character} embarked on a journey."

    3.times do
      character = @characters.sample
      location = @locations.sample
      action = @actions.sample
      adjective = @adjectives.sample

      story += "\n#{generate_sentence(character, location, action, adjective)}"
    end

    story += "\nThe end. Thanks for joining #{character}'s adventure."
    puts story
  end
end

# Example usage:
story_generator = StoryGenerator.new
story_generator.generate_story

