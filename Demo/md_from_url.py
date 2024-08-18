import os
import sys
import requests
from cut_unnecessary import cut_links_latin

CURRENT_DIRECTORY = os.path.dirname(__file__)
SCRAPPER_URL = "https://r.jina.ai/"

url = "https://www.irishexaminer.com/news/arid-41454697.html"


f_in_name = os.path.join(CURRENT_DIRECTORY, "input.md")
f_out_name = os.path.join(CURRENT_DIRECTORY, "output.md")

if len(sys.argv) > 1:
    url = sys.argv[1]

if len(sys.argv) > 2:
    file_name_input = sys.argv[1]
if len(sys.argv) > 3:
    file_name_output = sys.argv[2]


response = requests.get(SCRAPPER_URL + url, timeout=10)
if response.status_code == 200:
    text = response.text

with open(f_in_name, 'w', encoding="utf-8") as f_in:
    f_in.write(text)

cut_links_latin(f_in_name, f_out_name)
