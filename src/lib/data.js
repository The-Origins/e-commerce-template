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
      action: { title: "Shop now", path: "/results?search=Food" },
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
        details: {
          type: "Mobile",
          number: "+2575*******543",
        },
        status: "pending",
      },
      delivery: {
        status: "pending",
        location: {
          country: "Kenya",
          city: "Nairobi",
          street: "Karen",
          address: "The hub karen",
          type: "home",
          locationInfo: "House no A5, 3rd floor",
          fee: 400,
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
        details: {
          type: "Mobile",
          number: "+2575*******543",
        },
        status: "paid",
      },
      delivery: {
        status: "pending",
        location: {
          country: "Kenya",
          city: "Nairobi",
          street: "Karen",
          address: "The hub karen",
          type: "home",
          locationInfo: "House no A5, 3rd floor",
          fee: 400,
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
        details: {
          type: "Mobile",
          number: "+2575*******543",
        },
        status: "paid",
      },
      delivery: {
        status: "delivered",
        location: {
          country: "Kenya",
          city: "Nairobi",
          street: "Karen",
          address: "The hub karen",
          type: "home",
          locationInfo: "House no A5, 3rd floor",
          fee: 400,
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
    name: { first: "john", last: "doe" },
    email: "useremail@email.com",
    phone: { code: "+245", number: "140000000" },
    payment: {
      currency: "$",
      recent: 1,
      saved: [
        {
          type: "mobile",
          number: "+254****7770",
          details: { number: "+25454547770" },
        },
        {
          type: "card",
          number: "41************86",
          details: { number: "4100908689082438" },
        },
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
          type: "home",
          locationInfo: "House no A5, 3rd floor",
          fee: 400,
        },
        {
          country: "Kenya",
          city: "Nairobi",
          street: "Kilimani",
          address: "Adams arcade",
          locationInfo: "4th floor",
          type: "pick-up station",
          fee: 300,
        },
        {
          country: "Kenya",
          city: "Nairobi",
          street: "Ngong",
          address: "Milele mall",
          locationInfo: "My business, 10th floor",
          type: "other",
          fee: 600,
        },
      ],
    },
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

export const country_codes = [
  {
    code: "+7 840",
    name: "Abkhazia",
  },
  {
    code: "+93",
    name: "Afghanistan",
  },
  {
    code: "+355",
    name: "Albania",
  },
  {
    code: "+213",
    name: "Algeria",
  },
  {
    code: "+1 684",
    name: "American Samoa",
  },
  {
    code: "+376",
    name: "Andorra",
  },
  {
    code: "+244",
    name: "Angola",
  },
  {
    code: "+1 264",
    name: "Anguilla",
  },
  {
    code: "+1 268",
    name: "Antigua and Barbuda",
  },
  {
    code: "+54",
    name: "Argentina",
  },
  {
    code: "+374",
    name: "Armenia",
  },
  {
    code: "+297",
    name: "Aruba",
  },
  {
    code: "+247",
    name: "Ascension",
  },
  {
    code: "+61",
    name: "Australia",
  },
  {
    code: "+672",
    name: "Australian External Territories",
  },
  {
    code: "+43",
    name: "Austria",
  },
  {
    code: "+994",
    name: "Azerbaijan",
  },
  {
    code: "+1 242",
    name: "Bahamas",
  },
  {
    code: "+973",
    name: "Bahrain",
  },
  {
    code: "+880",
    name: "Bangladesh",
  },
  {
    code: "+1 246",
    name: "Barbados",
  },
  {
    code: "+1 268",
    name: "Barbuda",
  },
  {
    code: "+375",
    name: "Belarus",
  },
  {
    code: "+32",
    name: "Belgium",
  },
  {
    code: "+501",
    name: "Belize",
  },
  {
    code: "+229",
    name: "Benin",
  },
  {
    code: "+1 441",
    name: "Bermuda",
  },
  {
    code: "+975",
    name: "Bhutan",
  },
  {
    code: "+591",
    name: "Bolivia",
  },
  {
    code: "+387",
    name: "Bosnia and Herzegovina",
  },
  {
    code: "+267",
    name: "Botswana",
  },
  {
    code: "+55",
    name: "Brazil",
  },
  {
    code: "+246",
    name: "British Indian Ocean Territory",
  },
  {
    code: "+1 284",
    name: "British Virgin Islands",
  },
  {
    code: "+673",
    name: "Brunei",
  },
  {
    code: "+359",
    name: "Bulgaria",
  },
  {
    code: "+226",
    name: "Burkina Faso",
  },
  {
    code: "+257",
    name: "Burundi",
  },
  {
    code: "+855",
    name: "Cambodia",
  },
  {
    code: "+237",
    name: "Cameroon",
  },
  {
    code: "+1",
    name: "Canada",
  },
  {
    code: "+238",
    name: "Cape Verde",
  },
  {
    code: "+ 345",
    name: "Cayman Islands",
  },
  {
    code: "+236",
    name: "Central African Republic",
  },
  {
    code: "+235",
    name: "Chad",
  },
  {
    code: "+56",
    name: "Chile",
  },
  {
    code: "+86",
    name: "China",
  },
  {
    code: "+61",
    name: "Christmas Island",
  },
  {
    code: "+61",
    name: "Cocos-Keeling Islands",
  },
  {
    code: "+57",
    name: "Colombia",
  },
  {
    code: "+269",
    name: "Comoros",
  },
  {
    code: "+242",
    name: "Congo",
  },
  {
    code: "+243",
    name: "Congo, Dem. Rep. of (Zaire)",
  },
  {
    code: "+682",
    name: "Cook Islands",
  },
  {
    code: "+506",
    name: "Costa Rica",
  },
  {
    code: "+385",
    name: "Croatia",
  },
  {
    code: "+53",
    name: "Cuba",
  },
  {
    code: "+599",
    name: "Curacao",
  },
  {
    code: "+537",
    name: "Cyprus",
  },
  {
    code: "+420",
    name: "Czech Republic",
  },
  {
    code: "+45",
    name: "Denmark",
  },
  {
    code: "+246",
    name: "Diego Garcia",
  },
  {
    code: "+253",
    name: "Djibouti",
  },
  {
    code: "+1 767",
    name: "Dominica",
  },
  {
    code: "+1 809",
    name: "Dominican Republic",
  },
  {
    code: "+670",
    name: "East Timor",
  },
  {
    code: "+56",
    name: "Easter Island",
  },
  {
    code: "+593",
    name: "Ecuador",
  },
  {
    code: "+20",
    name: "Egypt",
  },
  {
    code: "+503",
    name: "El Salvador",
  },
  {
    code: "+240",
    name: "Equatorial Guinea",
  },
  {
    code: "+291",
    name: "Eritrea",
  },
  {
    code: "+372",
    name: "Estonia",
  },
  {
    code: "+251",
    name: "Ethiopia",
  },
  {
    code: "+500",
    name: "Falkland Islands",
  },
  {
    code: "+298",
    name: "Faroe Islands",
  },
  {
    code: "+679",
    name: "Fiji",
  },
  {
    code: "+358",
    name: "Finland",
  },
  {
    code: "+33",
    name: "France",
  },
  {
    code: "+596",
    name: "French Antilles",
  },
  {
    code: "+594",
    name: "French Guiana",
  },
  {
    code: "+689",
    name: "French Polynesia",
  },
  {
    code: "+241",
    name: "Gabon",
  },
  {
    code: "+220",
    name: "Gambia",
  },
  {
    code: "+995",
    name: "Georgia",
  },
  {
    code: "+49",
    name: "Germany",
  },
  {
    code: "+233",
    name: "Ghana",
  },
  {
    code: "+350",
    name: "Gibraltar",
  },
  {
    code: "+30",
    name: "Greece",
  },
  {
    code: "+299",
    name: "Greenland",
  },
  {
    code: "+1 473",
    name: "Grenada",
  },
  {
    code: "+590",
    name: "Guadeloupe",
  },
  {
    code: "+1 671",
    name: "Guam",
  },
  {
    code: "+502",
    name: "Guatemala",
  },
  {
    code: "+224",
    name: "Guinea",
  },
  {
    code: "+245",
    name: "Guinea-Bissau",
  },
  {
    code: "+595",
    name: "Guyana",
  },
  {
    code: "+509",
    name: "Haiti",
  },
  {
    code: "+504",
    name: "Honduras",
  },
  {
    code: "+852",
    name: "Hong Kong SAR China",
  },
  {
    code: "+36",
    name: "Hungary",
  },
  {
    code: "+354",
    name: "Iceland",
  },
  {
    code: "+91",
    name: "India",
  },
  {
    code: "+62",
    name: "Indonesia",
  },
  {
    code: "+98",
    name: "Iran",
  },
  {
    code: "+964",
    name: "Iraq",
  },
  {
    code: "+353",
    name: "Ireland",
  },
  {
    code: "+972",
    name: "Israel",
  },
  {
    code: "+39",
    name: "Italy",
  },
  {
    code: "+225",
    name: "Ivory Coast",
  },
  {
    code: "+1 876",
    name: "Jamaica",
  },
  {
    code: "+81",
    name: "Japan",
  },
  {
    code: "+962",
    name: "Jordan",
  },
  {
    code: "+7 7",
    name: "Kazakhstan",
  },
  {
    code: "+254",
    name: "Kenya",
  },
  {
    code: "+686",
    name: "Kiribati",
  },
  {
    code: "+965",
    name: "Kuwait",
  },
  {
    code: "+996",
    name: "Kyrgyzstan",
  },
  {
    code: "+856",
    name: "Laos",
  },
  {
    code: "+371",
    name: "Latvia",
  },
  {
    code: "+961",
    name: "Lebanon",
  },
  {
    code: "+266",
    name: "Lesotho",
  },
  {
    code: "+231",
    name: "Liberia",
  },
  {
    code: "+218",
    name: "Libya",
  },
  {
    code: "+423",
    name: "Liechtenstein",
  },
  {
    code: "+370",
    name: "Lithuania",
  },
  {
    code: "+352",
    name: "Luxembourg",
  },
  {
    code: "+853",
    name: "Macau SAR China",
  },
  {
    code: "+389",
    name: "Macedonia",
  },
  {
    code: "+261",
    name: "Madagascar",
  },
  {
    code: "+265",
    name: "Malawi",
  },
  {
    code: "+60",
    name: "Malaysia",
  },
  {
    code: "+960",
    name: "Maldives",
  },
  {
    code: "+223",
    name: "Mali",
  },
  {
    code: "+356",
    name: "Malta",
  },
  {
    code: "+692",
    name: "Marshall Islands",
  },
  {
    code: "+596",
    name: "Martinique",
  },
  {
    code: "+222",
    name: "Mauritania",
  },
  {
    code: "+230",
    name: "Mauritius",
  },
  {
    code: "+262",
    name: "Mayotte",
  },
  {
    code: "+52",
    name: "Mexico",
  },
  {
    code: "+691",
    name: "Micronesia",
  },
  {
    code: "+1 808",
    name: "Midway Island",
  },
  {
    code: "+373",
    name: "Moldova",
  },
  {
    code: "+377",
    name: "Monaco",
  },
  {
    code: "+976",
    name: "Mongolia",
  },
  {
    code: "+382",
    name: "Montenegro",
  },
  {
    code: "+1664",
    name: "Montserrat",
  },
  {
    code: "+212",
    name: "Morocco",
  },
  {
    code: "+95",
    name: "Myanmar",
  },
  {
    code: "+264",
    name: "Namibia",
  },
  {
    code: "+674",
    name: "Nauru",
  },
  {
    code: "+977",
    name: "Nepal",
  },
  {
    code: "+31",
    name: "Netherlands",
  },
  {
    code: "+599",
    name: "Netherlands Antilles",
  },
  {
    code: "+1 869",
    name: "Nevis",
  },
  {
    code: "+687",
    name: "New Caledonia",
  },
  {
    code: "+64",
    name: "New Zealand",
  },
  {
    code: "+505",
    name: "Nicaragua",
  },
  {
    code: "+227",
    name: "Niger",
  },
  {
    code: "+234",
    name: "Nigeria",
  },
  {
    code: "+683",
    name: "Niue",
  },
  {
    code: "+672",
    name: "Norfolk Island",
  },
  {
    code: "+850",
    name: "North Korea",
  },
  {
    code: "+1 670",
    name: "Northern Mariana Islands",
  },
  {
    code: "+47",
    name: "Norway",
  },
  {
    code: "+968",
    name: "Oman",
  },
  {
    code: "+92",
    name: "Pakistan",
  },
  {
    code: "+680",
    name: "Palau",
  },
  {
    code: "+970",
    name: "Palestinian Territory",
  },
  {
    code: "+507",
    name: "Panama",
  },
  {
    code: "+675",
    name: "Papua New Guinea",
  },
  {
    code: "+595",
    name: "Paraguay",
  },
  {
    code: "+51",
    name: "Peru",
  },
  {
    code: "+63",
    name: "Philippines",
  },
  {
    code: "+48",
    name: "Poland",
  },
  {
    code: "+351",
    name: "Portugal",
  },
  {
    code: "+1 787",
    name: "Puerto Rico",
  },
  {
    code: "+974",
    name: "Qatar",
  },
  {
    code: "+262",
    name: "Reunion",
  },
  {
    code: "+40",
    name: "Romania",
  },
  {
    code: "+7",
    name: "Russia",
  },
  {
    code: "+250",
    name: "Rwanda",
  },
  {
    code: "+685",
    name: "Samoa",
  },
  {
    code: "+378",
    name: "San Marino",
  },
  {
    code: "+966",
    name: "Saudi Arabia",
  },
  {
    code: "+221",
    name: "Senegal",
  },
  {
    code: "+381",
    name: "Serbia",
  },
  {
    code: "+248",
    name: "Seychelles",
  },
  {
    code: "+232",
    name: "Sierra Leone",
  },
  {
    code: "+65",
    name: "Singapore",
  },
  {
    code: "+421",
    name: "Slovakia",
  },
  {
    code: "+386",
    name: "Slovenia",
  },
  {
    code: "+677",
    name: "Solomon Islands",
  },
  {
    code: "+27",
    name: "South Africa",
  },
  {
    code: "+500",
    name: "South Georgia and the South Sandwich Islands",
  },
  {
    code: "+82",
    name: "South Korea",
  },
  {
    code: "+34",
    name: "Spain",
  },
  {
    code: "+94",
    name: "Sri Lanka",
  },
  {
    code: "+249",
    name: "Sudan",
  },
  {
    code: "+597",
    name: "Suriname",
  },
  {
    code: "+268",
    name: "Swaziland",
  },
  {
    code: "+46",
    name: "Sweden",
  },
  {
    code: "+41",
    name: "Switzerland",
  },
  {
    code: "+963",
    name: "Syria",
  },
  {
    code: "+886",
    name: "Taiwan",
  },
  {
    code: "+992",
    name: "Tajikistan",
  },
  {
    code: "+255",
    name: "Tanzania",
  },
  {
    code: "+66",
    name: "Thailand",
  },
  {
    code: "+670",
    name: "Timor Leste",
  },
  {
    code: "+228",
    name: "Togo",
  },
  {
    code: "+690",
    name: "Tokelau",
  },
  {
    code: "+676",
    name: "Tonga",
  },
  {
    code: "+1 868",
    name: "Trinidad and Tobago",
  },
  {
    code: "+216",
    name: "Tunisia",
  },
  {
    code: "+90",
    name: "Turkey",
  },
  {
    code: "+993",
    name: "Turkmenistan",
  },
  {
    code: "+1 649",
    name: "Turks and Caicos Islands",
  },
  {
    code: "+688",
    name: "Tuvalu",
  },
  {
    code: "+1 340",
    name: "U.S. Virgin Islands",
  },
  {
    code: "+256",
    name: "Uganda",
  },
  {
    code: "+380",
    name: "Ukraine",
  },
  {
    code: "+971",
    name: "United Arab Emirates",
  },
  {
    code: "+44",
    name: "United Kingdom",
  },
  {
    code: "+1",
    name: "United States",
  },
  {
    code: "+598",
    name: "Uruguay",
  },
  {
    code: "+998",
    name: "Uzbekistan",
  },
  {
    code: "+678",
    name: "Vanuatu",
  },
  {
    code: "+58",
    name: "Venezuela",
  },
  {
    code: "+84",
    name: "Vietnam",
  },
  {
    code: "+1 808",
    name: "Wake Island",
  },
  {
    code: "+681",
    name: "Wallis and Futuna",
  },
  {
    code: "+967",
    name: "Yemen",
  },
  {
    code: "+260",
    name: "Zambia",
  },
  {
    code: "+255",
    name: "Zanzibar",
  },
  {
    code: "+263",
    name: "Zimbabwe",
  },
];

export default data;
