class PasswordChecker
  MIN_LENGTH = 8
  MIN_UPPERCASE = 1
  MIN_LOWERCASE = 1
  MIN_DIGITS = 1
  MIN_SPECIAL_CHARS = 1

  SPECIAL_CHARACTERS = '!@#$%^&*()_-+=[]{}|;:,.<>?'.freeze

  def self.check_password(password)
    raise 'Password is too short' unless password.length >= MIN_LENGTH
    raise 'Password must contain at least one uppercase letter' unless password =~ /[A-Z]/
    raise 'Password must contain at least one lowercase letter' unless password =~ /[a-z]/
    raise 'Password must contain at least one digit' unless password =~ /\d/
    raise 'Password must contain at least one special character' unless contains_special_character?(password)

    puts 'Password meets complexity requirements'
  end

  def self.contains_special_character?(password)
    SPECIAL_CHARACTERS.each_char do |char|
      return true if password.include?(char)
    end
    false
  end
end

# Example Usage
begin
  PasswordChecker.check_password('StrongP@ssword123')
rescue StandardError => e
  puts "Error: #{e.message}"
end

