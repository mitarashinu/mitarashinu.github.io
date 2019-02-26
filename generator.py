from itertools import takewhile
from datetime import datetime, timedelta, timezone
import json
import os
from pathlib import Path
import argparse

import yaml


JST = timezone(timedelta(hours=9))
DATA_DIR = Path(os.path.dirname(__file__)) / 'data'
INFO_DIR = DATA_DIR / 'info'
INFO_RAW_DIR = INFO_DIR / 'raw'


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
    data = {
        'title': None,
        'text': None,
    }
    write_data(
        INFO_RAW_DIR / f'{datetime.now(tz=JST).strftime("%Y%m%d")}.yml',
        yaml.dump(data, default_flow_style=False)
    )


def info(filename):
    data = yaml.safe_load(read_data(INFO_RAW_DIR / filename))
    print(data)


parser = argparse.ArgumentParser()
subparser = parser.add_subparsers()

parser_about = subparser.add_parser('about')
parser_about.set_defaults(which='about', func=about)

parser_info = subparser.add_parser('info')
parser_info.set_defaults(which='info')
parser_info.add_argument('--new', dest='func', const=new_info, action='store_const')
info_subparser = parser_info.add_subparsers()
parser_info_gen = info_subparser.add_parser('gen')
parser_info_gen.add_argument('date', type=int)
parser_info_gen.set_defaults(which='info_gen', func=info)

args = parser.parse_args()
if args.which == 'info_gen':
    args.func(f'{args.date}.yml')
else:
    args.func()
