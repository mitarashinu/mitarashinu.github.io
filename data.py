# -*- coding: utf-8 -*-
import os
import json
import argparse


def video(src):
    at = '{} {}'.format(input('locale? '), input('livehouse? '))
    date = '{}/{}/{}'.format(input('year? '), input('month? '), input('day? '))
    url = input('url? ').replace('https://www.youtube.com/watch?v=', '')
    comment = input('comment? ')

    src['data'].insert(0, {
        'at': at,
        'date': date,
        'url': url,
        'comment': comment
    })
    return src


if __name__ == '__main__':
    # TYPES = ['about', 'item', 'top-01', 'video']
    TYPES = ['video']
    parser = argparse.ArgumentParser()
    parser.add_argument('-t', '--type', choices=TYPES)
    arg = parser.parse_args()
    path = './src/data/{}.json'.format(arg.type)
    with open(path) as f:
        src = json.loads(f.read())
    new_data = {
        x: globals().get(x)
        for x in TYPES
    }[arg.type](src)
    with open(path, 'w') as f:
        f.write(json.dumps(new_data))
