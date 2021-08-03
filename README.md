# PROTIP
Don't forget to add coma in json lists/objects 

## How to add yourself ?

1) Fork the repo  
2) clone the repo to your desktop
3) go to ```data.json``` in src/assests
4) copy paste the following template object inside the existing list and the key should be your md5
5) add your image and its name should be ```your md5.jpg``` and save it in src/assests/images
6) import you image in images.js using ```codename``` following syntax and map it with your md5 in the ```images``` object

```
   import lead2021 from './assests/images/8F2E218B6F8EBA330DFDD3146BDC48C1.jpg';  
```

7) git commit & make a pull request
8) chill out  

```json
 "8F2E218B6F8EBA330DFDD3146BDC48C1": {
        "name": "Eswar Abisheak Tadiparthi",
        "codename":"lead2021",
        "role": "DSCVIIT Lead",
        "image": "8F2E218B6F8EBA330DFDD3146BDC48C1.jpg",
        "academic_year": "2018-2022",
        "during": "2020-2021",
        "github": "https://github.com/eswar2001",
        "linkedin": "https://www.linkedin.com/in/eswar2001/",
        "twitter": "https://twitter.com/_eswar2001",
        "portfolio": "https://eswar.dev",
        "tagline": "Do things that matter"
    }
```

Use <a href="https://passwordsgenerator.net/md5-hash-generator/" target="__blank">this</a> link to generate your md5 for your full name
