original = " Python strings are COOL! "
lower_cased = original.lower()
print(lower_cased)  # prints all lowercase but with spaces

stripped = original.strip()
print(stripped)  # prints without leading/trailing spaces but original case

stripped_lower_cased = original.lower().strip()
print(stripped_lower_cased)  # lowercase and stripped

assert lower_cased == " python strings are cool! "
assert stripped == "Python strings are COOL!"
assert stripped_lower_cased == "python strings are cool!"

# Prettify ugly string
def prettify(ugly):
    # Remove leading/trailing spaces
    text = ugly.strip()
    # Replace multiple spaces/newlines with a single space
    text = " ".join(text.split())
    # Capitalize the first letter of each word
    text = text.title()
    return text

ugly = " tiTle of MY new Book\n\n"
print(prettify(ugly))


verb = "is"
language = "Python"
punctuation = "!"

sentence = f"Learning {language} {verb} fun{punctuation}"
print(f"sentence: {sentence}")

assert sentence == "Learning Python is fun!"

