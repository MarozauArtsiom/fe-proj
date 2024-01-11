const data = [
  {
    rating: 3,
    text:
      "I absolutely adore the big blue hair dryer! It's not only pretty but also very effective, my hair dries so quickly.",
    author: "Olivia",
    avatar_url: "https://randomuser.me/api/portraits/men/1.jpg",
    created: "2023-03-15T08:30:00Z",
    comments: [
      {
        author: 'Author 1',
        text: 'Text from Author 1',
        comments: [
          {
            author: 'Author 2',
            text: 'Text from Author 2',
            comments: [
              {
                author: 'Author 1',
                text: 'Reply from Author 1',
                comments: [
                  {
                    author: 'Author 2',
                    text: 'Reply from Author 2',
                    comments: [
                      {
                        author: 'Author 4',
                        text: 'Comment from Author 4'
                      },
                      {
                        author: 'Author 5',
                        text: 'Comment from Author 5'
                      }
                    ]                                
                  }
                ]                    
              },
            ]    
          },
          {
            author: 'Author 3',
            text: 'Text from Author 3',
          }
        ]
      }
    ]
  },
  {
    rating: 5,
    text:
      "I absolutely adore the big blue hair dryer! It's not only pretty but also very effective, my hair dries so quickly.",
    author: "Olivia",
    avatar_url: "https://randomuser.me/api/portraits/men/1.jpg",
    created: "2023-03-15T08:30:00Z",
  },
  {
    rating: 1,
    text:
      "I am quite disappointed with the big blue hair dryer. It gets too hot to hold after a few minutes.",
    author: "Liam",
    avatar_url: "https://randomuser.me/api/portraits/women/2.jpg",
    comments: [
      {
        text:
          "Dear Liam, we are sorry to hear about your experience. We have taken note of your feedback and will try to improve. Meanwhile, please get in touch with our customer care for a replacement or refund.",
        author: "seller",
      },
    ],
    created: "2022-11-20T14:45:00Z",
  },
  {
    rating: 5,
    text:
      "The big blue hair dryer is fantastic! It's the perfect balance of power and control. My hair has never looked better.",
    author: "Amelia",
    avatar_url: "https://randomuser.me/api/portraits/women/1.jpg",
    created: "2023-06-10T10:15:00Z",
  },
  {
    rating: 3,
    text:
      "I've bought big blue hair dryer based on the reviews but it turned out far too loud for my taste.",
    author: "Oliver",
    avatar_url: "https://randomuser.me/api/portraits/men/2.jpg",
    comments: [
      {
        text:
          "Hello Oliver, we're really sorry that the noise level of the hairdryer is something that bothers you. We are trying to improve on this aspect. Thanks for your feedback.",
        author: "seller",
      },
    ],
    created: "2022-12-05T18:20:00Z",
  },
  {
    rating: 4,
    text:
      "This hairdryer is super lightweight and sleek. I love the big blue design too!",
    author: "Sophie",
    avatar_url: "https://randomuser.me/api/portraits/women/3.jpg",
    created: "2023-09-28T22:10:00Z",
  },
  {
    rating: 2,
    text:
      "I ordered the big blue hair dryer but got a small one. Not happy with the service.",
    author: "George",
    comments: [
      {
        text:
          "We terribly sorry for the mix up,George. Please contact our customer service department and they will send the correct item right away.",
        author: "seller",
      },
    ],
    created: "2022-10-12T12:05:00Z",
  },
  {
    rating: 5,
    text:
      "I love how compact and powerful the big blue hair dryer is! Dries my hair in no time.",
    author: "Lucy",
    avatar_url: "https://randomuser.me/api/portraits/women/4.jpg",
    created: "2023-02-18T09:40:00Z",
  },
  {
    rating: 2,
    text:
      "The big blue hair dryer was not durable, it stopped working within a few weeks.",
    author: "Harry",
    comments: [
      {
        text:
          "Dear Harry, we sincerely apologise for the inconvenience. Our team is looking into your case and will send a replacement as soon as possible.",
        author: "seller",
      },
    ],
    created: "2022-12-25T16:55:00Z",
  },
  {
    rating: 5,
    text:
      "Didn't expect such high quality from the big blue hair dryer, it exceeded my expectations!",
    author: "Scarlett",
    avatar_url: "https://randomuser.me/api/portraits/women/5.jpg",
    created: "2023-01-30T20:25:00Z",
  },
  {
    rating: 3,
    text:
      "The power cord of the big blue hair dryer is too short, makes it very inconvenient to use.",
    author: "Charlie",
    avatar_url: "https://randomuser.me/api/portraits/women/6.jpg",
    comments: [
      {
        text:
          "We're sorry for this inconvenience, Charlie. Your feedback is valuable to us and we will definitely take it into consideration for future improvements.",
        author: "seller",
      },
    ],
    created: "2023-07-08T11:50:00Z",
  },
  {
    rating: 5,
    text:
      "Very pleased with my big blue hair dryer. The heat and speed settings work perfectly.",
    author: "Mia",
    avatar_url: "https://randomuser.me/api/portraits/women/7.jpg",
    created: "2023-04-05T15:30:00Z",
  },
  {
    rating: 2,
    text:
      "I don't recommend the big blue hair dryer. Too heavy to hold for long.",
    author: "Jack",
    avatar_url: "https://randomuser.me/api/portraits/men/3.jpg",
    comments: [
      {
        text:
          "Dear Jack, we are sorry if our product did not meet your expectations. We are currently working on making our products lighter. Thank you for your feedback.",
        author: "seller",
      },
      {
        text:
          "Appreciate your prompt response. Looking forward to the improved product!",
        author: "Jack",
      },
    ],
    created: "2022-11-02T19:15:00Z",
  },
  {
    rating: 5,
    text: "I love my big blue hair dryer! So stylish and works so smoothly.",
    author: "Emma",
    avatar_url: "https://randomuser.me/api/portraits/women/8.jpg",
    created: "2023-10-20T14:00:00Z",
  },

  {
    rating: 2,
    text:
      "Big blue hair dryer is not worth the price. It stopped functioning in just a month.",
    author: "Oscar",
    avatar_url: "https://randomuser.me/api/portraits/men/7.jpg",
    comments: [
      {
        text:
          "Hello Oscar, we regret to hear about the issue you've encountered. We will contact you for replacing the product or processing a refund.",
        author: "seller",
      },
      {
        text: "Thanks for the quick response. Appreciated.",
        author: "Oscar",
      },
    ],
    created: "2023-10-20T14:00:00Z",
  },

  {
    rating: 5,
    text:
      "The big blue hair dryer is amazing! It fits perfectly in hand and makes styling easy.",
    author: "Charlotte",
    avatar_url: "https://randomuser.me/api/portraits/women/9.jpg",
    created: "2023-10-20T14:00:00Z",
  },

  {
    rating: 2,
    text:
      "Really disappointed with the big blue hair dryer, the air pressure is just too low.",
    author: "Thomas",
    avatar_url: "https://randomuser.me/api/portraits/men/6.jpg",
    comments: [
      {
        text:
          "Dear Thomas, sorry for the inconvenience. It seems like there might be a fault with your product. We'll arrange for a replacement.",
        author: "seller",
      },
    ],
    created: "2023-10-20T14:00:00Z",
  },

  {
    rating: 5,
    text:
      "The big blue hair dryer is fantastic. It's quiet and the output is perfect.",
    author: "Ella",
    avatar_url: "https://randomuser.me/api/portraits/women/10.jpg",
    created: "2023-10-20T14:00:00Z",
  },

  {
    rating: 4,
    text: "The big blue hair dryer doesn't dry hair as quickly as I'd like.",
    author: "James",
    avatar_url: "https://randomuser.me/api/portraits/men/5.jpg",
    comments: [
      {
        text:
          "Hello James, sorry to hear about your experience. We ensure that future models will have improved dry speed. We appreciate your valuable feedback.",
        author: "seller",
      },
    ],
    created: "2023-10-20T14:00:00Z",
  },

  {
    rating: 5,
    text:
      "I bought the big blue hair dryer and it's wonderful. Love the cool shot feature.",
    author: "Emily",
    avatar_url: "https://randomuser.me/api/portraits/women/11.jpg",
    created: "2023-10-20T14:00:00Z",
  },

  {
    rating: 4,
    text:
      "Even on the lowest setting, the big blue hair dryer is too hot for me.",
    author: "Henry",
    avatar_url: "https://randomuser.me/api/portraits/men/4.jpg",
    comments: [
      {
        text:
          "Dear Henry, We apologize for the inconvenience caused. Your concern has been noted. Meanwhile, you can seek a refund or exchange for the current product by reaching out to our customer service.",
        author: "seller",
      },
    ],
    created: "2023-10-20T14:00:00Z",
  },
];

module.exports = data;
