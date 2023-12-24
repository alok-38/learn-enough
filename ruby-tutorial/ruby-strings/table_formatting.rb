data = [
  ["Alice", 30, "Engineer"],
  ["Bob", 40, "Designer"],
  ["Charlie", 35, "Manager"]
]

# Left-align strings with specific widths
table_format = "%-10s %5s %20s\n"
header = table_format % ["Name", "Age", "Occupation"]
puts header + data.map { |row| table_format % row }.join


