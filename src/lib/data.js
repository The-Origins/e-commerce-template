const data = {
  spotlights: [
    {
      title: "Today's special",
      description: "Check out today's special",
      image:
        "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      action: { title: "View Details", path: "/product?p=1" },
    },
    {
      title: "New Product!",
      description: "Check out this new product",
      image:
        "https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      action: { title: "View Details", path: "/product?p=5" },
    },
    {
      title: "50% off all foods!",
      description: "Grab your favourite delicacies at half price",
      image:
        "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      action: { title: "Shop now", path: "/results?search=this+category" },
    },
  ],
  offers: { 1: 31, 2: 10, 3: 12 },
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
              "https://www.mockupworld.co/wp-content/uploads/2023/03/laptop-free-mockup.jpg",
              "https://elements-cover-images-0.imgix.net/6ba82f51-e9ce-4c43-8515-c9ec31fb5a8b?auto=compress%2Cformat&fit=max&w=2038&s=ebe7707ab55fd788f76bb379fe9f77fd",
              "https://imockups.com/storage/product/4883/thumb/WbXxxLCIdMANbD0nvuWh.jpeg",
            ],
            name: "My Product 3",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 3000,
            },
            features: {
              SKU: "0123083423X",
              weight: "3kg",
              CPU: "i9-1300K",
              GPU: "RTX4070",
              color: "black",
            },
            variants: [
              {
                title: "ram",
                options: [
                  {
                    title: "8gb",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                  {
                    title: "16gb",
                    priceIncrement: { amount: 1000, currency: "$" },
                  },
                ],
              },
              {
                title: "storage",
                options: [
                  {
                    title: "1gb-SSD",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                  {
                    title: "2TB-SSD",
                    priceIncrement: { amount: 1000, currency: "$" },
                  },
                ],
              },
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
            brand: "asus",
            categories: ["electronics", "laptops"],
            id: 3,
            type: "laptop",
          },
          total: 5000,
          details: { quatity: 1, ram: "16gb", storage: "2TB-ssd" },
        },
        {
          product: {
            images: [
              "https://i.etsystatic.com/15515907/r/il/20a858/2314845316/il_1140xN.2314845316_9lg3.jpg",
              "https://img.romwe.com/images/romwe.com/201703/1489627160858728237.jpg",
              "https://i5.walmartimages.com/asr/536dd76b-957f-457c-b3eb-f392b859759b_1.9d5076091fad01b2d315f328ca33f28f.jpeg",
            ],
            name: "My Product 4",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 50,
            },
            features: {
              material: "cotton",
            },
            variants: [
              {
                title: "size",
                options: [
                  { title: "S", priceIncrement: { amount: 0, currency: "$" } },
                  { title: "M", priceIncrement: { amount: 0, currency: "$" } },
                  { title: "L", priceIncrement: { amount: 0, currency: "$" } },
                ],
              },
              {
                title: "color",
                options: [
                  {
                    title: "white",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                  {
                    title: "black",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                ],
              },
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
            brand: "generic",
            categories: ["clothing", "t-shirts"],
            id: 4,
            type: "t-shirt",
          },
          total: 50,
          details: { quatity: 1, size: "M", color: "white" },
        },
        {
          product: {
            images: [
              "https://i.etsystatic.com/15515907/r/il/20a858/2314845316/il_1140xN.2314845316_9lg3.jpg",
              "https://img.romwe.com/images/romwe.com/201703/1489627160858728237.jpg",
              "https://i5.walmartimages.com/asr/536dd76b-957f-457c-b3eb-f392b859759b_1.9d5076091fad01b2d315f328ca33f28f.jpeg",
            ],
            name: "My Product 5",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 50,
            },
            features: {
              material: "cotton",
            },
            variants: [
              {
                title: "size",
                options: [
                  { title: "S", priceIncrement: { amount: 0, currency: "$" } },
                  { title: "M", priceIncrement: { amount: 0, currency: "$" } },
                  { title: "L", priceIncrement: { amount: 0, currency: "$" } },
                ],
              },
              {
                title: "color",
                options: [
                  {
                    title: "white",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                  {
                    title: "black",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                ],
              },
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
            brand: "generic",
            categories: ["clothing", "t-shirts"],
            id: 5,
            type: "t-shirt",
          },
          total: 50,
          details: { quatity: 1, size: "M", color: "white" },
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
              "https://www.mockupworld.co/wp-content/uploads/2023/03/laptop-free-mockup.jpg",
              "https://elements-cover-images-0.imgix.net/6ba82f51-e9ce-4c43-8515-c9ec31fb5a8b?auto=compress%2Cformat&fit=max&w=2038&s=ebe7707ab55fd788f76bb379fe9f77fd",
              "https://imockups.com/storage/product/4883/thumb/WbXxxLCIdMANbD0nvuWh.jpeg",
            ],
            name: "My Product 3",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 3000,
            },
            features: {
              SKU: "0123083423X",
              weight: "3kg",
              CPU: "i9-1300K",
              GPU: "RTX4070",
              color: "black",
            },
            variants: [
              {
                title: "ram",
                options: [
                  {
                    title: "8gb",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                  {
                    title: "16gb",
                    priceIncrement: { amount: 1000, currency: "$" },
                  },
                ],
              },
              {
                title: "storage",
                options: [
                  {
                    title: "1gb-SSD",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                  {
                    title: "2TB-SSD",
                    priceIncrement: { amount: 1000, currency: "$" },
                  },
                ],
              },
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
            brand: "asus",
            categories: ["electronics", "laptops"],
            id: 3,
            type: "laptop",
          },
          total: 5000,
          details: { quatity: 1, ram: "16gb", storage: "2TB-ssd" },
        },
        {
          product: {
            images: [
              "https://i.etsystatic.com/15515907/r/il/20a858/2314845316/il_1140xN.2314845316_9lg3.jpg",
              "https://img.romwe.com/images/romwe.com/201703/1489627160858728237.jpg",
              "https://i5.walmartimages.com/asr/536dd76b-957f-457c-b3eb-f392b859759b_1.9d5076091fad01b2d315f328ca33f28f.jpeg",
            ],
            name: "My Product 4",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 50,
            },
            features: {
              material: "cotton",
            },
            variants: [
              {
                title: "size",
                options: [
                  { title: "S", priceIncrement: { amount: 0, currency: "$" } },
                  { title: "M", priceIncrement: { amount: 0, currency: "$" } },
                  { title: "L", priceIncrement: { amount: 0, currency: "$" } },
                ],
              },
              {
                title: "color",
                options: [
                  {
                    title: "white",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                  {
                    title: "black",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                ],
              },
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
            brand: "generic",
            categories: ["clothing", "t-shirts"],
            id: 4,
            type: "t-shirt",
          },
          total: 50,
          details: { quatity: 1, size: "M", color: "white" },
        },
        {
          product: {
            images: [
              "https://i.etsystatic.com/15515907/r/il/20a858/2314845316/il_1140xN.2314845316_9lg3.jpg",
              "https://img.romwe.com/images/romwe.com/201703/1489627160858728237.jpg",
              "https://i5.walmartimages.com/asr/536dd76b-957f-457c-b3eb-f392b859759b_1.9d5076091fad01b2d315f328ca33f28f.jpeg",
            ],
            name: "My Product 5",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 50,
            },
            features: {
              material: "cotton",
            },
            variants: [
              {
                title: "size",
                options: [
                  { title: "S", priceIncrement: { amount: 0, currency: "$" } },
                  { title: "M", priceIncrement: { amount: 0, currency: "$" } },
                  { title: "L", priceIncrement: { amount: 0, currency: "$" } },
                ],
              },
              {
                title: "color",
                options: [
                  {
                    title: "white",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                  {
                    title: "black",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                ],
              },
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
            brand: "generic",
            categories: ["clothing", "t-shirts"],
            id: 5,
            type: "t-shirt",
          },
          total: 50,
          details: { quatity: 1, size: "M", color: "white" },
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
              "https://www.mockupworld.co/wp-content/uploads/2023/03/laptop-free-mockup.jpg",
              "https://elements-cover-images-0.imgix.net/6ba82f51-e9ce-4c43-8515-c9ec31fb5a8b?auto=compress%2Cformat&fit=max&w=2038&s=ebe7707ab55fd788f76bb379fe9f77fd",
              "https://imockups.com/storage/product/4883/thumb/WbXxxLCIdMANbD0nvuWh.jpeg",
            ],
            name: "My Product 3",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 3000,
            },
            features: {
              SKU: "0123083423X",
              weight: "3kg",
              CPU: "i9-1300K",
              GPU: "RTX4070",
              color: "black",
            },
            variants: [
              {
                title: "ram",
                options: [
                  {
                    title: "8gb",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                  {
                    title: "16gb",
                    priceIncrement: { amount: 1000, currency: "$" },
                  },
                ],
              },
              {
                title: "storage",
                options: [
                  {
                    title: "1gb-SSD",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                  {
                    title: "2TB-SSD",
                    priceIncrement: { amount: 1000, currency: "$" },
                  },
                ],
              },
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
            brand: "asus",
            categories: ["electronics", "laptops"],
            id: 3,
            type: "laptop",
          },
          total: 5000,
          details: { quatity: 1, ram: "16gb", storage: "2TB-ssd" },
        },
        {
          product: {
            images: [
              "https://i.etsystatic.com/15515907/r/il/20a858/2314845316/il_1140xN.2314845316_9lg3.jpg",
              "https://img.romwe.com/images/romwe.com/201703/1489627160858728237.jpg",
              "https://i5.walmartimages.com/asr/536dd76b-957f-457c-b3eb-f392b859759b_1.9d5076091fad01b2d315f328ca33f28f.jpeg",
            ],
            name: "My Product 4",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 50,
            },
            features: {
              material: "cotton",
            },
            variants: [
              {
                title: "size",
                options: [
                  { title: "S", priceIncrement: { amount: 0, currency: "$" } },
                  { title: "M", priceIncrement: { amount: 0, currency: "$" } },
                  { title: "L", priceIncrement: { amount: 0, currency: "$" } },
                ],
              },
              {
                title: "color",
                options: [
                  {
                    title: "white",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                  {
                    title: "black",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                ],
              },
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
            brand: "generic",
            categories: ["clothing", "t-shirts"],
            id: 4,
            type: "t-shirt",
          },
          total: 50,
          details: { quatity: 1, size: "M", color: "white" },
        },
        {
          product: {
            images: [
              "https://i.etsystatic.com/15515907/r/il/20a858/2314845316/il_1140xN.2314845316_9lg3.jpg",
              "https://img.romwe.com/images/romwe.com/201703/1489627160858728237.jpg",
              "https://i5.walmartimages.com/asr/536dd76b-957f-457c-b3eb-f392b859759b_1.9d5076091fad01b2d315f328ca33f28f.jpeg",
            ],
            name: "My Product 5",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
            unitPrice: {
              currency: "$",
              amount: 50,
            },
            features: {
              material: "cotton",
            },
            variants: [
              {
                title: "size",
                options: [
                  { title: "S", priceIncrement: { amount: 0, currency: "$" } },
                  { title: "M", priceIncrement: { amount: 0, currency: "$" } },
                  { title: "L", priceIncrement: { amount: 0, currency: "$" } },
                ],
              },
              {
                title: "color",
                options: [
                  {
                    title: "white",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                  {
                    title: "black",
                    priceIncrement: { amount: 0, currency: "$" },
                  },
                ],
              },
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
            brand: "generic",
            categories: ["clothing", "t-shirts"],
            id: 5,
            type: "t-shirt",
          },
          total: 50,
          details: { quatity: 1, size: "M", color: "white" },
        },
      ],
    },
  ],
  user: {
    name: { first: "John", last: "Doe" },
    email: "useremail@email.com",
    phone: { code: "+245", number: "140000000" },
    payment: {
      currency: "KSH",
      recent: 1,
      saved: [
        { type: "Mpesa", details: { number: "+254****7770" } },
        { type: "Visa", details: { number: "41************86" } },
      ],
    },
    addresses: {
      recent: 1,
      saved: [
        {
          country: "Kenya",
          city: "Nairobi",
          street: "Karen",
          address: "The hub karen",
          type: "Home",
          fee: 400,
        },
        {
          country: "Kenya",
          city: "Nairobi",
          street: "Kilimani",
          address: "Adams arcade",
          type: "Pick-up station",
          fee: 300,
        },
        {
          country: "Kenya",
          city: "Nairobi",
          street: "Ngong",
          address: "Milele mall",
          type: "Other",
          fee: 600,
        },
      ],
    },
    region: { currency: "KSH" },
    orders: [1, 2, 3, 4],
    notifications: {
      items: [
        {
          title: "This is a notification!!",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
          dateCreated: "11/11/2013",
          unread: true,
        },
        {
          title: "This is a notification!!",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
          dateCreated: "11/11/2013",
          unread: true,
        },
        {
          title: "This is a notification!!",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
          dateCreated: "11/11/2013",
          unread: false,
        },
        {
          title: "This is a notification!!",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
          dateCreated: "11/11/2013",
          unread: false,
        },
      ],
      new: true,
    },
    favourites: {
      2: {
        details: { quantity: 1, ram: "8gb", storage: "1TB-SSD" },
        total: 3500,
      },
      5: { details: { quantity: 2, size: "M", color: "black" }, total: 100 },
    },
    cart: {
      total: 3220,
      items: {
        1: {
          details: { quantity: 1, ram: "8gb", storage: "500gb-SSD" },
          total: 3000,
        },
        4: {
          details: { quantity: 2, size: "M", color: "white" },
          total: 100,
        },
        7: {
          details: {
            quantity: 4,
            size: "Large",
            crust: "Normal",
            extras: "extra cheese",
          },
          total: 120,
        },
      },
    },
  },
  products: [
    {
      images: [
        "https://www.mockupworld.co/wp-content/uploads/2023/03/laptop-free-mockup.jpg",
        "https://elements-cover-images-0.imgix.net/6ba82f51-e9ce-4c43-8515-c9ec31fb5a8b?auto=compress%2Cformat&fit=max&w=2038&s=ebe7707ab55fd788f76bb379fe9f77fd",
        "https://imockups.com/storage/product/4883/thumb/WbXxxLCIdMANbD0nvuWh.jpeg",
      ],
      name: "My Product 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 2000,
      },
      features: {
        SKU: "0123083423X",
        weight: "2kg",
        CPU: "i9-1200K",
        GPU: "RTX3060",
        color: "black",
      },
      variants: [
        {
          title: "ram",
          options: [
            { title: "8gb", priceIncrement: { amount: 0, currency: "$" } },
            { title: "16gb", priceIncrement: { amount: 3000, currency: "$" } },
          ],
        },
        {
          title: "storage",
          options: [
            {
              title: "500gb-SSD",
              priceIncrement: { amount: 0, currency: "$" },
            },
            {
              title: "1TB-SSD",
              priceIncrement: { amount: 1000, currency: "$" },
            },
          ],
        },
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
      brand: "dell",
      categories: ["electronics", "laptops", "trending"],
      id: 1,
      type: "laptop",
    },
    {
      images: [
        "https://www.mockupworld.co/wp-content/uploads/2023/03/laptop-free-mockup.jpg",
        "https://elements-cover-images-0.imgix.net/6ba82f51-e9ce-4c43-8515-c9ec31fb5a8b?auto=compress%2Cformat&fit=max&w=2038&s=ebe7707ab55fd788f76bb379fe9f77fd",
        "https://imockups.com/storage/product/4883/thumb/WbXxxLCIdMANbD0nvuWh.jpeg",
      ],
      name: "My Product 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 1500,
      },
      features: {
        SKU: "0123083423X",
        weight: "2kg",
        CPU: "i7-1100K",
        GPU: "RTX3050",
        color: "black",
      },
      variants: [
        {
          title: "ram",
          options: [
            { title: "4gb", priceIncrement: { amount: 0, currency: "$" } },
            { title: "8gb", priceIncrement: { amount: 1000, currency: "$" } },
          ],
        },
        {
          title: "storage",
          options: [
            {
              title: "500gb-SSD",
              priceIncrement: { amount: 0, currency: "$" },
            },
            {
              title: "1TB-SSD",
              priceIncrement: { amount: 1000, currency: "$" },
            },
          ],
        },
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
      brand: "asus",
      categories: ["electronics", "laptops"],
      id: 2,
      type: "laptop",
    },
    {
      images: [
        "https://www.mockupworld.co/wp-content/uploads/2023/03/laptop-free-mockup.jpg",
        "https://elements-cover-images-0.imgix.net/6ba82f51-e9ce-4c43-8515-c9ec31fb5a8b?auto=compress%2Cformat&fit=max&w=2038&s=ebe7707ab55fd788f76bb379fe9f77fd",
        "https://imockups.com/storage/product/4883/thumb/WbXxxLCIdMANbD0nvuWh.jpeg",
      ],
      name: "My Product 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 3000,
      },
      features: {
        SKU: "0123083423X",
        weight: "3kg",
        CPU: "i9-1300K",
        GPU: "RTX4070",
        color: "black",
      },
      variants: [
        {
          title: "ram",
          options: [
            { title: "8gb", priceIncrement: { amount: 0, currency: "$" } },
            { title: "16gb", priceIncrement: { amount: 1000, currency: "$" } },
          ],
        },
        {
          title: "storage",
          options: [
            {
              title: "1gb-SSD",
              priceIncrement: { amount: 0, currency: "$" },
            },
            {
              title: "2TB-SSD",
              priceIncrement: { amount: 1000, currency: "$" },
            },
          ],
        },
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
      brand: "asus",
      categories: ["electronics", "laptops"],
      id: 3,
      type: "laptop",
    },
    {
      images: [
        "https://i.etsystatic.com/15515907/r/il/20a858/2314845316/il_1140xN.2314845316_9lg3.jpg",
        "https://img.romwe.com/images/romwe.com/201703/1489627160858728237.jpg",
        "https://i5.walmartimages.com/asr/536dd76b-957f-457c-b3eb-f392b859759b_1.9d5076091fad01b2d315f328ca33f28f.jpeg",
      ],
      name: "My Product 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 50,
      },
      features: {
        material: "cotton",
      },
      variants: [
        {
          title: "size",
          options: [
            { title: "S", priceIncrement: { amount: 0, currency: "$" } },
            { title: "M", priceIncrement: { amount: 0, currency: "$" } },
            { title: "L", priceIncrement: { amount: 0, currency: "$" } },
          ],
        },
        {
          title: "color",
          options: [
            {
              title: "white",
              priceIncrement: { amount: 0, currency: "$" },
            },
            {
              title: "black",
              priceIncrement: { amount: 0, currency: "$" },
            },
          ],
        },
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
      brand: "generic",
      categories: ["clothing", "t-shirts"],
      id: 4,
      type: "t-shirt",
    },
    {
      images: [
        "https://i.etsystatic.com/15515907/r/il/20a858/2314845316/il_1140xN.2314845316_9lg3.jpg",
        "https://img.romwe.com/images/romwe.com/201703/1489627160858728237.jpg",
        "https://i5.walmartimages.com/asr/536dd76b-957f-457c-b3eb-f392b859759b_1.9d5076091fad01b2d315f328ca33f28f.jpeg",
      ],
      name: "My Product 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 50,
      },
      features: {
        material: "cotton",
      },
      variants: [
        {
          title: "size",
          options: [
            { title: "S", priceIncrement: { amount: 0, currency: "$" } },
            { title: "M", priceIncrement: { amount: 0, currency: "$" } },
            { title: "L", priceIncrement: { amount: 0, currency: "$" } },
          ],
        },
        {
          title: "color",
          options: [
            {
              title: "white",
              priceIncrement: { amount: 0, currency: "$" },
            },
            {
              title: "black",
              priceIncrement: { amount: 0, currency: "$" },
            },
          ],
        },
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
      brand: "generic",
      categories: ["clothing", "t-shirts"],
      id: 5,
      type: "t-shirt",
    },
    {
      images: [
        "https://i.etsystatic.com/15515907/r/il/20a858/2314845316/il_1140xN.2314845316_9lg3.jpg",
        "https://img.romwe.com/images/romwe.com/201703/1489627160858728237.jpg",
        "https://i5.walmartimages.com/asr/536dd76b-957f-457c-b3eb-f392b859759b_1.9d5076091fad01b2d315f328ca33f28f.jpeg",
      ],
      name: "My Product 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 50,
      },
      features: {
        material: "fleece",
      },
      variants: [
        {
          title: "size",
          options: [
            { title: "S", priceIncrement: { amount: 0, currency: "$" } },
            { title: "M", priceIncrement: { amount: 0, currency: "$" } },
            { title: "L", priceIncrement: { amount: 0, currency: "$" } },
          ],
        },
        {
          title: "color",
          options: [
            {
              title: "green",
              priceIncrement: { amount: 0, currency: "$" },
            },
            {
              title: "blue",
              priceIncrement: { amount: 0, currency: "$" },
            },
          ],
        },
      ],
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 4.5,
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
      brand: "generic",
      categories: ["clothing", "sweatshirts", "hoodies"],
      id: 6,
      type: "sweatshirt",
    },
    {
      images: [
        "https://assets.afcdn.com/recipe/20190319/89655_w3072h2304c1cx3680cy2456.jpg",
        "https://thelistlove.com/wp-content/uploads/2014/12/dominos-pepperoni-pizza.jpg",
        "https://www.cardamomo.news/__export/1614104578402/sites/debate/img/2021/02/23/whatsapp_image_2021-02-23_at_10_27_48_crop1614104531443.jpeg_242310155.jpeg",
      ],
      name: "My Product 7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 50,
      },
      features: {
        flavour: "pepperoni",
      },
      variants: [
        {
          title: "size",
          options: [
            { title: "Small", priceIncrement: { amount: 0, currency: "$" } },
            { title: "Medium", priceIncrement: { amount: 20, currency: "$" } },
            { title: "Large", priceIncrement: { amount: 30, currency: "$" } },
          ],
        },
        {
          title: "crust",
          options: [
            { title: "thin", priceIncrement: { amount: 0, currency: "$" } },
            { title: "Normal", priceIncrement: { amount: 0, currency: "$" } },
          ],
        },
        {
          title: "extras",
          options: [
            {
              title: "extra cheese",
              priceIncrement: { amount: 10, currency: "$" },
            },
            {
              title: "extra pepperoni",
              priceIncrement: { amount: 10, currency: "$" },
            },
          ],
        },
      ],
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 5,
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
      categories: ["food", "pizza", "trending"],
      id: 7,
      type: "food",
    },
    {
      images: [
        "https://assets.afcdn.com/recipe/20190319/89655_w3072h2304c1cx3680cy2456.jpg",
        "https://thelistlove.com/wp-content/uploads/2014/12/dominos-pepperoni-pizza.jpg",
        "https://www.cardamomo.news/__export/1614104578402/sites/debate/img/2021/02/23/whatsapp_image_2021-02-23_at_10_27_48_crop1614104531443.jpeg_242310155.jpeg",
      ],
      name: "My Product 8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 50,
      },
      features: {
        flavour: "beef",
      },
      variants: [
        {
          title: "type",
          options: [
            { title: "Single", priceIncrement: { amount: 0, currency: "$" } },
            { title: "Double", priceIncrement: { amount: 20, currency: "$" } },
          ],
        },
      ],
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 5,
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
      categories: ["food", "burgers", "trending"],
      id: 8,
      type: "food",
    },
    {
      images: [
        "https://assets.afcdn.com/recipe/20190319/89655_w3072h2304c1cx3680cy2456.jpg",
        "https://thelistlove.com/wp-content/uploads/2014/12/dominos-pepperoni-pizza.jpg",
        "https://www.cardamomo.news/__export/1614104578402/sites/debate/img/2021/02/23/whatsapp_image_2021-02-23_at_10_27_48_crop1614104531443.jpeg_242310155.jpeg",
      ],
      name: "My Product 9",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "$",
        amount: 50,
      },
      features: {
        flavour: "Orange",
      },
      variants: [
        {
          title: "type",
          options: [
            { title: "500ml", priceIncrement: { amount: 0, currency: "$" } },
            { title: "1Liter", priceIncrement: { amount: 30, currency: "$" } },
          ],
        },
      ],
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 4.4,
        reviews: [],
      },
      stock: 200,
      state: "In stock",
      categories: ["drinks", "juice"],
      id: 9,
      type: "drink",
    },
  ],
};
export default data;
