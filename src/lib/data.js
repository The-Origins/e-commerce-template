const data = {
  orders: [
    {
      id: 1,
      status: "processing",
      dateCreated: "13th may 2012",
      total: 33000,
      payment: {
        method: "M-pesa",
        details: { number: "+25470000000" },
        status: "pending",
      },
      delivery: {
        status: "pending",
        location: {
          country: "Kenya",
          city: "Nairobi",
          street: "Karen",
          address: "The hub karen",
        },
      },
      items: [
        {
          product: {
            images: [
              "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
              "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
              "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
            ],
            name: "My Product 1",
            flavours: ["Chocolate"],
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 2000,
              unit: "kg",
            },
            allergenAdvice: ["contains dairy", "contains nuts"],
            variants: [
              { title: "icing", options: ["whipped cream", "fondant"] },
              { title: "color", options: ["white", "blue"] },
            ],
            rating: {
              votes: [4, 3, 3, 4, 5],
              score: 4.3,
              reviews: [
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
              ],
            },
            stock: 200,
            state: "In stock",
            categories: ["nuts", "chocolate", "birthday", "vegan", "trending"],
            id: 1,
            type: "cake",
          },
          details: { icing: "whipped cream", color: "white", weight: 3 },
          total: 0,
        },
        {
          product: {
            images: [
              "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
              "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
              "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
            ],
            name: "My Product 2",
            type: "cake",
            offer: 24,
            flavours: ["Chocolate"],
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 4000,
              unit: "kg",
            },
            allergenAdvice: ["contains nuts"],
            variants: [
              { title: "icing", options: ["whipped cream", "fondant"] },
              { title: "color", options: ["white", "blue"] },
            ],
            rating: {
              votes: [4, 3, 3, 4, 5],
              score: 4,
              reviews: [
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
              ],
            },
            stock: 200,
            state: "In stock",
            categories: ["no sugar", "chocolate", "birthday", "vegan", "cakes"],
            id: 2,
          },
          details: { icing: "whipped cream", color: "white", weight: 3 },
          total: 0,
        },
      ],
    },
    {
      id: 2,
      status: "fulfilling",
      dateCreated: "13th may 2012",
      total: 33000,
      payment: {
        method: "M-pesa",
        details: { "phone number": "+25470000000" },
        status: "pending",
      },
      delivery: {
        status: "pending",
        location: {
          country: "Kenya",
          city: "Nairobi",
          street: "Karen",
          address: "The hub karen",
        },
      },
      items: [
        {
          product: {
            images: [
              "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
              "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
              "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
            ],
            name: "My Product 1",
            flavours: ["Chocolate"],
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 2000,
              unit: "kg",
            },
            allergenAdvice: ["contains dairy", "contains nuts"],
            variants: [
              { title: "icing", options: ["whipped cream", "fondant"] },
              { title: "color", options: ["white", "blue"] },
            ],
            rating: {
              votes: [4, 3, 3, 4, 5],
              score: 4.3,
              reviews: [
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
              ],
            },
            stock: 200,
            state: "In stock",
            categories: ["nuts", "chocolate", "birthday", "vegan", "trending"],
            id: 1,
            type: "cake",
          },
          details: { icing: "whipped cream", color: "white", weight: 3 },
          total: 0,
        },
        {
          product: {
            images: [
              "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
              "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
              "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
            ],
            name: "My Product 2",
            type: "cake",
            offer: 24,
            flavours: ["Chocolate"],
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 4000,
              unit: "kg",
            },
            allergenAdvice: ["contains nuts"],
            variants: [
              { title: "icing", options: ["whipped cream", "fondant"] },
              { title: "color", options: ["white", "blue"] },
            ],
            rating: {
              votes: [4, 3, 3, 4, 5],
              score: 4,
              reviews: [
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
              ],
            },
            stock: 200,
            state: "In stock",
            categories: ["no sugar", "chocolate", "birthday", "vegan", "cakes"],
            id: 2,
          },
          details: { icing: "whipped cream", color: "white", weight: 3 },
          total: 0,
        },
      ],
    },
    {
      id: 3,
      status: "fulfilled",
      dateCreated: "13th may 2012",
      total: 22200,
      payment: {
        method: "M-pesa",
        details: { "phone number": "+25470000000" },
        status: "paid",
      },
      delivery: {
        status: "delivered",
        location: {
          country: "Kenya",
          city: "Nairobi",
          street: "Karen",
          address: "The hub karen",
        },
      },
      items: [
        {
          product: {
            images: [
              "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
              "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
              "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
            ],
            name: "My Product 1",
            flavours: ["Chocolate"],
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 2000,
              unit: "kg",
            },
            allergenAdvice: ["contains dairy", "contains nuts"],
            variants: [
              { title: "icing", options: ["whipped cream", "fondant"] },
              { title: "color", options: ["white", "blue"] },
            ],
            rating: {
              votes: [4, 3, 3, 4, 5],
              score: 4.3,
              reviews: [
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
              ],
            },
            stock: 200,
            state: "In stock",
            categories: ["nuts", "chocolate", "birthday", "vegan", "trending"],
            id: 1,
            type: "cake",
          },
          details: { icing: "whipped cream", color: "white", weight: 3 },
          total: 0,
        },
        {
          product: {
            images: [
              "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
              "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
              "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
            ],
            name: "My Product 2",
            type: "cake",
            offer: 24,
            flavours: ["Chocolate"],
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 4000,
              unit: "kg",
            },
            allergenAdvice: ["contains nuts"],
            variants: [
              { title: "icing", options: ["whipped cream", "fondant"] },
              { title: "color", options: ["white", "blue"] },
            ],
            rating: {
              votes: [4, 3, 3, 4, 5],
              score: 4,
              reviews: [
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
              ],
            },
            stock: 200,
            state: "In stock",
            categories: ["no sugar", "chocolate", "birthday", "vegan", "cakes"],
            id: 2,
          },
          details: { icing: "whipped cream", color: "white", weight: 3 },
          total: 0,
        },
      ],
    },
  ],
  user: {
    name: { first: "John", last: "Doe" },
    email: "useremail@email.com",
    phone: { code: "+245", number: "140000000" },
    addresses: [
      {
        country: "Kenya",
        city: "Nairobi",
        street: "Karen",
        address: "The hub karen",
      },
    ],
    region: { currency: "KSH" },
    orders: [1, 2, 3, 4],
    favourites: {
      1: {
        product: {
          images: [
            "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
            "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
            "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
          ],
          name: "My Product 1",
          flavours: ["Chocolate"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
          unitPrice: {
            currency: "$",
            amount: 2000,
            unit: "kg",
          },
          allergenAdvice: ["contains dairy", "contains nuts"],
          variants: [
            { title: "icing", options: ["whipped cream", "fondant"] },
            { title: "color", options: ["white", "blue"] },
          ],
          rating: {
            votes: [4, 3, 3, 4, 5],
            score: 4.3,
            reviews: [
              {
                userName: "John Doe",
                date: "10/10/2023",
                rating: 4,
                review: {
                  title: "Very Good!",
                  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                },
              },
              {
                userName: "John Doe",
                date: "10/10/2023",
                rating: 4,
                review: {
                  title: "Very Good!",
                  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                },
              },
              {
                userName: "John Doe",
                date: "10/10/2023",
                rating: 4,
                review: {
                  title: "Very Good!",
                  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                },
              },
            ],
          },
          stock: 200,
          state: "In stock",
          categories: ["nuts", "chocolate", "birthday", "vegan", "trending"],
          id: 1,
          type: "cake",
        },
        details: { icing: "whipped cream", color: "white", weight: 3 },
      },
      2: {
        product: {
          images: [
            "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
            "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
            "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
          ],
          name: "My Product 2",
          type: "cake",
          offer: 24,
          flavours: ["Chocolate"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
          unitPrice: {
            currency: "$",
            amount: 4000,
            unit: "kg",
          },
          allergenAdvice: ["contains nuts"],
          variants: [
            { title: "icing", options: ["whipped cream", "fondant"] },
            { title: "color", options: ["white", "blue"] },
          ],
          rating: {
            votes: [4, 3, 3, 4, 5],
            score: 4,
            reviews: [
              {
                userName: "John Doe",
                date: "10/10/2023",
                rating: 4,
                review: {
                  title: "Very Good!",
                  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                },
              },
              {
                userName: "John Doe",
                date: "10/10/2023",
                rating: 4,
                review: {
                  title: "Very Good!",
                  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                },
              },
              {
                userName: "John Doe",
                date: "10/10/2023",
                rating: 4,
                review: {
                  title: "Very Good!",
                  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                },
              },
            ],
          },
          stock: 200,
          state: "In stock",
          categories: ["no sugar", "chocolate", "birthday", "vegan", "cakes"],
          id: 2,
        },
        details: { icing: "fondant", color: "blue", weight: 5 },
      },
    },
    cart: {
      total: 44000,
      items: [
        {
          product: {
            images: [
              "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
              "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
              "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
            ],
            name: "My Product 1",
            flavours: ["Chocolate"],
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 2000,
              unit: "kg",
            },
            allergenAdvice: ["contains dairy", "contains nuts"],
            variants: [
              { title: "icing", options: ["whipped cream", "fondant"] },
              { title: "color", options: ["white", "blue"] },
            ],
            rating: {
              votes: [4, 3, 3, 4, 5],
              score: 4.3,
              reviews: [
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
              ],
            },
            stock: 200,
            state: "In stock",
            categories: ["nuts", "chocolate", "birthday", "vegan", "trending"],
            id: 1,
            type: "cake",
          },
          details: { icing: "whipped cream", color: "white", weight: 3 },
          total: 0,
        },
        {
          product: {
            images: [
              "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
              "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
              "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
            ],
            name: "My Product 2",
            type: "cake",
            offer: 24,
            flavours: ["Chocolate"],
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 4000,
              unit: "kg",
            },
            allergenAdvice: ["contains nuts"],
            variants: [
              { title: "icing", options: ["whipped cream", "fondant"] },
              { title: "color", options: ["white", "blue"] },
            ],
            rating: {
              votes: [4, 3, 3, 4, 5],
              score: 4,
              reviews: [
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  date: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
              ],
            },
            stock: 200,
            state: "In stock",
            categories: ["no sugar", "chocolate", "birthday", "vegan", "cakes"],
            id: 2,
          },
          details: { icing: "whipped cream", color: "white", weight: 3 },
          total: 0,
        },
        {
          product: {
            images: [
              "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
              "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
              "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
            ],
            name: "My Product 3",
            type: "cake",
            offer: 13,
            flavours: ["Vanilla"],
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 1300,
              unit: "kg",
            },
            variants: [
              { title: "icing", options: ["whipped cream", "fondant"] },
              { title: "color", options: ["white", "blue"] },
            ],
            rating: { votes: [4, 3, 3, 4, 5], score: 4.7 },
            stock: 200,
            state: "In stock",
            categories: ["vanila", "birthday", "trending"],
            id: 3,
          },
          details: { icing: "whipped cream", color: "white", weight: 3 },
          total: 0,
        },
      ],
    },
  },
  products: [
    {
      images: [
        "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
        "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
        "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
      ],
      name: "My Product 1",
      flavours: ["Chocolate"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 2000,
        unit: "kg",
      },
      allergenAdvice: ["contains dairy", "contains nuts"],
      variants: [
        { title: "icing", options: ["whipped cream", "fondant"] },
        { title: "color", options: ["white", "blue"] },
      ],
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 4.3,
        reviews: [
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
        ],
      },
      stock: 200,
      state: "In stock",
      categories: ["nuts", "chocolate", "birthday", "vegan", "trending"],
      id: 1,
      type: "cake",
    },
    {
      images: [
        "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
        "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
        "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
      ],
      name: "My Product 2",
      type: "cake",
      offer: 24,
      flavours: ["Chocolate"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 4000,
        unit: "kg",
      },
      allergenAdvice: ["contains nuts"],
      variants: [
        { title: "icing", options: ["whipped cream", "fondant"] },
        { title: "color", options: ["white", "blue"] },
      ],
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 4,
        reviews: [
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
        ],
      },
      stock: 200,
      state: "In stock",
      categories: ["no sugar", "chocolate", "birthday", "vegan", "cakes"],
      id: 2,
    },
    {
      images: [
        "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
        "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
        "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
      ],
      name: "My Product 3",
      type: "cake",
      offer: 13,
      flavours: ["Vanilla"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 1300,
        unit: "kg",
      },
      variants: [
        { title: "icing", options: ["whipped cream", "fondant"] },
        { title: "color", options: ["white", "blue"] },
      ],
      rating: { votes: [4, 3, 3, 4, 5], score: 4.7 },
      stock: 200,
      state: "In stock",
      categories: ["vanila", "birthday", "trending"],
      id: 3,
    },
    {
      images: [
        "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
        "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
        "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
      ],
      name: "My Product 4",
      flavours: ["strawberry"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 2500,
        unit: "kg",
      },
      allergenAdvice: ["contains gluten"],
      rating: { votes: [4, 3, 3, 4, 5], score: 3.7 },
      stock: 200,
      state: "In stock",
      categories: ["no sugar", "Strawberry", "birthday", "nuts", "cakes"],
      id: 4,
      type: "cake",
    },
    {
      images: [
        "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
        "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
        "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
      ],
      name: "My Product 5",
      type: "pastry",
      offer: 23,
      flavours: ["Mint"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 70,
        unit: "piece",
      },
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 4.6,
        reviews: [
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
        ],
      },
      stock: 200,
      state: "In stock",
      categories: ["sides", "trending", "gluten free", "pastries"],
      id: 5,
    },
    {
      images: [
        "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
        "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
        "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
      ],
      name: "My Product 6",
      type: "pastry",
      offer: 23,
      flavours: ["Mint"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 70,
        unit: "piece",
      },
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 4.6,
        reviews: [
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
        ],
      },
      stock: 200,
      state: "In stock",
      categories: ["sides", "trending", "gluten free", "pastries"],
      id: 6,
    },
    {
      images: [
        "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
        "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
        "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
      ],
      name: "My Product 7",
      type: "pastry",
      offer: 23,
      flavours: ["Mint"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 70,
        unit: "piece",
      },
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 4.6,
        reviews: [
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
        ],
      },
      stock: 200,
      state: "In stock",
      categories: ["sides", "trending", "gluten free", "pastries"],
      id: 7,
    },
    {
      images: [
        "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
        "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
        "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
      ],
      name: "My Product 8",
      type: "pastry",
      offer: 23,
      flavours: ["Mint"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 70,
        unit: "piece",
      },
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 4.6,
        reviews: [
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            date: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
        ],
      },
      stock: 200,
      state: "In stock",
      categories: ["sides", "trending", "gluten free", "pastries"],
      id: 8,
    },
  ],
  spotlights: [
    {
      spotlight: {
        type: "product",
        title: "Today's Special",
        action: { path: "/products?p=1" },
        description: "Check out today's special",
      },
      images: [
        "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
        "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
        "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
      ],
      name: "My Product 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 2000,
      },
      stock: 200,
      state: "In stock",
      id: 1,
    },
    {
      spotlight: {
        type: "product",
        title: "New Vegan Cake",
        description: "Try out our new vegan cake",
      },
      images: [
        "https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg",
        "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
        "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
      ],
      name: "My Vegan 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 2000,
      },
      stock: 200,
      state: "In stock",
      id: 2,
    },
    {
      spotlight: {
        type: "product",
        title: "One of your favourites",
        action: { path: "/products?p=1" },
        description: "Endulge in your favourites today",
      },
      images: [
        "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png",
        "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
        "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
      ],
      name: "My Custom product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 2000,
      },
      stock: 200,
      state: "In stock",
      id: 3,
    },
  ],
};
export default data;
