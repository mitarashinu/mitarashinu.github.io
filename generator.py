from datetime import datetime, timedelta, timezone
import json
import os
from pathlib import Path
import argparse


JST = timezone(timedelta(hours=9))
DATA_DIR = Path(os.path.dirname(__file__)) / 'data'
SEPARATOR = '---'


def info_parser(data):
    title, text = data.split(SEPARATOR)
    return {
        'title': title.strip(),
        'text': text.strip(),
    }



def read_data(src):
    with open(src) as fp:
        return fp.read().strip()


def write_data(dest, data):
    with open(dest, 'w') as fp:
        fp.write(data)
    print(f'created a new file to {dest}')


def about():
    about_dir = DATA_DIR / 'about'
    data = read_data(about_dir / 'raw.txt')
    dest = about_dir / 'json' / 'about.json'
    write_data(dest, json.dumps({'body': data}))
    print(f'generate to {dest}')


def new_info():
    data = f'TITLE HERE\n{SEPARATOR}\nTEXT HERE'
    write_data(DATA_DIR / 'info' / 'raw' / f'{datetime.now(tz=JST).strftime("%Y%m%d")}.txt', data)


parser = argparse.ArgumentParser()
subparser = parser.add_subparsers(dest='cmd')

parser_about = subparser.add_parser('about')
parser_about.set_defaults(func=about)

parser_info = subparser.add_parser('info')
parser_info.add_argument('--new', dest='func', const=new_info, action='store_const')

args = parser.parse_args()
args.func()
