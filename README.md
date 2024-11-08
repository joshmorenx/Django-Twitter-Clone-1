# Django Twitter Clone modified by Joshua Emmanuel Aranda Moreno

This is a fork, modified by Joshua Emmanuel Aranda Moreno,
in purpose to "data extraction" and also "data mining" where the user
has the posibility to post with latitude and longitude, there's an algorithm
that converts the dataframe made by the post published by the user, that takes
both latitude and longitude, then classifies the dataframe by country state
in this case i did it for Mexico only, this is possible after i have collected the Mexico's country sates and converted them into polygons,
the algorithm calculates in which position the latitude and longitude it is, 
in fact, the algorithm converts the previous dataframe without the Mexico's country states prefix
to a new dataframe that contains the full previous dataframa but with containing the prefix of the
Mexico's country states according the lat and lon
## Setup

1. Git Clone the project with: ```git clone https://github.com/redianmarku/Django-Twitter-Clone.git```.

2. Move to the base directory: ```cd Django-Twitter-Clone```

3. Create a new python enveronment with: ```python -m venv env```.

4. Activate enveronment with: ```env\Scripts\activate``` on windows, or ```source env/bin/activate``` on Mac and Linux.

5. Install required dependences with: ```pip install -r requirements.txt```.

6. Make migrations with: ```python manage.py makemigrations``` and then ```python manage.py migrate```.

7. Run app localy with: ```python manage.py runserver```.

## License
MIT License

Copyright (c) 2020 Redian Marku

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

=======
# Django Twitter Clone modded by Joshmorenx

Fully functional Django App that looks nice
