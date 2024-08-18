import os
import sys
import re


def cut_links_latin(f_input, f_output):
    """
    This function reads a file, removes links from each line,
    deletes lines with no latin characters inside, and writes the modified lines to a new file.
    
    Parameters:
    f_input (str): The path to the input file.
    f_output (str): The path to the output file.
    
    Returns:
    None
    """
    f_out = open(f_output, 'w', encoding="utf-8")

    with open(f_input, 'r', encoding="utf-8") as f:
        line = f.readline()
        while line:

            line = re.sub(r'\[[^\[]*?\]\(.*?\)', '', line)
            line = re.sub(r'\[[^\[]*?\]\(.*?\)', '', line)

            # Check if a line has alphabetical characters. If so, write it to the output file.
            if re.search(r'[a-zA-Z]', line):
                f_out.write(line)
            line = f.readline()

    f_out.close()


if __name__ == "__main__":
    # file_name_input = os.path.join(os.path.dirname(os.path.realpath(__file__)), "set_1_independent.md")

    file_name_input = os.path.join(os.path.dirname(os.path.realpath(__file__)), "input.md")
    file_name_output = os.path.join(os.path.dirname(os.path.realpath(__file__)), "output.md")

    if len(sys.argv) > 1:
        file_name_input = sys.argv[1]
    if len(sys.argv) > 2:
        file_name_output = sys.argv[2]

    if not os.path.exists(file_name_input):
        exit(1)

    cut_links_latin(file_name_input, file_name_output)