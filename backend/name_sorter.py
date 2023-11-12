import random

def exchange_names(names):
    if(len(names) < 3):
        raise Exception("Not enough names input.")
    while True:
        shuffled_names = list(names)
        random.shuffle(shuffled_names)
        pairs = list(zip(names, shuffled_names))
        is_valid_pair = all(pair[0] != pair[1] for pair in pairs)
        if is_valid_pair:
            break
    return pairs


