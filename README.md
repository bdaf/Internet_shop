# Script for example set in DataBase:
# Products
Product nr. 1 - Mouse G102 Lightsync:

      {
          "name": "Mysz G102 Lightsync Czarna",
          "description": "Myszka z niesamowitą mocą i szybkością.",
          "price": 89.99,
          "amount": 20,
          "producer": {
              "nameOfCompany": "Logitech",
              "nip": "5213321788"
          },
          "category": {
          "name": "Mouses"
          },
          "gallery": {
              "photos": [
                  {"url": "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/24/2431210/Mysz-LOGITECH-G102-Lightsync-front-1x.jpg"},
                  {"url": "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/24/2431210/Mysz-LOGITECH-G102-Lightsync-rgb-2x.jpg"},
                  {"url": "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/24/2431210/Mysz-LOGITECH-G102-Lightsync-sensor-3x.jpg"}
              ]
          }
      }
      
      
Product nr. 2 - Keyboard G102 Lightsync:

      {
          "name": "Klawiatura LOGITECH G213 Prodigy",
          "description": "Niesamowita klawiatura.",
          "price": 159.99,
          "amount": 15,
          "producer": {
              "nameOfCompany": "Logitech",
              "nip": "5213321788"
          },
          "category": {
          "name": "Keyboards"
          },
          "gallery": {
              "photos": [
                  {"url": "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/91/914352/Klawiatura-LOGITECH-G213-Prodigy-skos.jpg"},
                  {"url": "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/91/914352/Klawiatura-LOGITECH-G213-Prodigy-bok-gora.jpg"},
                  {"url": "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/91/914352/Klawiatura-LOGITECH-G213-Prodigy-przod.jpg"}
              ]
          }
      }
      
Product nr. 3 - Mouse DeathAdder Essential:

      {
          "name": "Mysz RAZER DeathAdder Essential",
          "description": "Niesamowita myszka, jak żadna.",
          "price": 169.99,
          "amount": 5,
          "producer": {
              "nameOfCompany": "Razer",
              "nip": "9532311679"
          },
          "category": {
          "name": "Mouses"
          },
          "gallery": {
              "photos": [
                  {"url": "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/17/1710569/DeathAdder_Essential_1.jpg"},
                  {"url": "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/17/1710569/DeathAdder_Essential_2.jpg"},
                  {"url": "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/17/1710569/DeathAdder_Essential_3.jpg"}
              ]
          }
      }
      
 Product nr. 4 - Keyboard Razer Blackwidow V3 Pro (Green Switch) - Us Layout:

      {
          "name": "Klawiatura Razer Blackwidow V3 Pro (Green Switch) - Us Layout",
          "description": "Niesamowita klawiatura, chyba droższej nie ma!",
          "price": 629.99,
          "amount": 50,
          "producer": {
              "nameOfCompany": "Razer",
              "nip": "9532311679"
          },
          "category": {
          "name": "Keyboards"
          },
          "gallery": {
              "photos": [
                  {"url": "https://m.media-amazon.com/images/I/51EpbIF--QS._AC_SL1000_.jpg"},
                  {"url": "https://m.media-amazon.com/images/I/515cKw3QRLS._AC_SL1000_.jpg"},
                  {"url": "https://m.media-amazon.com/images/I/613C+QKI7dL._AC_SL1500_.jpg"}
              ]
          }
      }
      
 Product nr. 5 - Headphones Razer Kraken X USB:

      {
          "name": "Słuchawki Razer Kraken X USB",
          "description": "Słuchawki niewiarygodnie czarne, jednak bardzo niewygodne.",
          "price": 269.99,
          "amount": 25,
          "producer": {
              "nameOfCompany": "Razer",
              "nip": "9532311679"
          },
          "category": {
          "name": "Headphones"
          },
          "gallery": {
              "photos": [
                  {"url": "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/6/pr_2019_6_28_14_42_38_837_04.jpg"},
                  {"url": "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/6/pr_2019_6_28_14_42_35_991_03.jpg"},
                  {"url": "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/6/pr_2019_6_28_14_42_32_415_02.jpg"}
              ]
          }
      }
      
 Product nr. 6 - Monitor IIYAMA G2730HSU 27" 1920x1080px 1 ms:

      {
          "name": "Monitor IIYAMA G2730HSU 27 1920x1080px 1 ms",
          "description": "Monitor bardzo dobry, nie zawiedziesz się.",
          "price": 900.67,
          "amount": 3,
          "producer": {
              "nameOfCompany": "Iiyama",
              "nip": "8992328209"
          },
          "category": {
          "name": "Monitors"
          },
          "gallery": {
              "photos": [
                  {"url": "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/95/955846/1.jpg"},
                  {"url": "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/95/955846/4.jpg"},
                  {"url": "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/95/955846/7.jpg"}
              ]
          }
      }
      
 # Orders
 Order nr. 1 - Monitor and mouse:
      
      {
          "delivery": {
              "deliverer": {
                  "name": "Marek",
                  "surname": "Frankowski",
                  "phoneNumber": "728893912"
              }
          },
          "products": [
              {"productId": 3}, 
              {"productId": 6}
          ]
      }
      
 Order nr. 2 - Mouse and keyboard:
      
      {
          "delivery": {
              "deliverer": {
                  "name": "Marek",
                  "surname": "Frankowski",
                  "phoneNumber": "728893912"
              }
          },
          "products": [
              {"productId": 1}, 
              {"productId": 2}
          ]
      }
      
