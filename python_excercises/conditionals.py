def test_name_length(name, expected_description):
    length = len(name)

    if length > 20:
        length_description = "long"
    elif length > 15:
        length_description = "semi long"
    elif length > 10:
        length_description = "semi long"
    elif 8 <= length <= 10:
        length_description = "semi short"
    else:
        length_description = "short"

    print(f'Name "{name}" (length {length}) -> {length_description}')
    assert length_description == expected_description, f"Expected {expected_description} but got {length_description}"

# Test cases
test_name_length("A" * 21, "long")        # 21 chars -> long
test_name_length("A" * 17, "semi long")   # 17 chars -> semi long
test_name_length("A" * 11, "semi long")   # 11 chars -> semi long
test_name_length("A" * 9, "semi short")   # 9 chars -> semi short
test_name_length("A" * 7, "short")        # 7 chars -> short

