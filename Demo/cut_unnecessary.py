import os
import sys
import re

# file_name_input = os.path.join(os.path.dirname(os.path.realpath(__file__)), "set_1_independent.md")
file_name_input = os.path.join(os.path.dirname(os.path.realpath(__file__)), "input.md")
file_name_output = os.path.join(os.path.dirname(os.path.realpath(__file__)), "output.md")

if len(sys.argv) > 1:
    file_name_input = sys.argv[1]
if len(sys.argv) > 2:
    file_name_output = sys.argv[2]

if not os.path.exists(file_name_input):
    exit(1)

f_out = open(file_name_output, 'w')

with open(file_name_input, 'r') as f:
    line = f.readline()
    while line:

        line = re.sub(r'\[[^\[]*?\]\(.*?\)', '', line)
        line = re.sub(r'\[[^\[]*?\]\(.*?\)', '', line)
        f_out.write(line)
        line = f.readline()