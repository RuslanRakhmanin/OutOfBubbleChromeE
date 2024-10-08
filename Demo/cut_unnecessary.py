"""
cut_unnecessary.py

This script removes unnecessary links from a markdown file.

Usage:
    python cut_unnecessary.py [input_file] [output_file]

Arguments:
    input_file (str): The markdown file to process. Defaults to 'input.md'.
    output_file (str): The file to save the processed content. Defaults to 'output.md'.

Functions:
    cut_links_latin: Removes links from each line of a file and deletes lines with no latin characters.

Requires:
    os
    sys
    re
"""
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

    CURRENT_DIRECTORY = os.path.dirname(__file__)

    file_name_input = os.path.join(CURRENT_DIRECTORY, "input.md")
    file_name_output = os.path.join(CURRENT_DIRECTORY, "output.md")

    # file_name_input = "input.md"
    # file_name_output = "output.md"

    if len(sys.argv) > 1:
        file_name_input = sys.argv[1]
    if len(sys.argv) > 2:
        file_name_output = sys.argv[2]

    if not os.path.exists(file_name_input):
        exit(1)

    cut_links_latin(file_name_input, file_name_output)