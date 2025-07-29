def get_data():

    with open('names.txt') as f:

        names = f.read()

        data = names.split()

        return data