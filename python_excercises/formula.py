a = 2
b = 3
c = 2
result = 6 * a * a * a - (8 * b * b) / (4 * c) + 11
assert result == 50
print(result)

# Floating point pitfalls
print(0.1 + 0.2 == 0.3)

# How to handle this?
import math
print(math.isclose(0.1 + 0.2, 0.3))
