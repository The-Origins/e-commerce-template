import storage from "redux-persist/lib/storage";

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
              currency: "USD",
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
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "16gb",
                    priceIncrement: { amount: 1000, currency: "USD" },
                  },
                ],
              },
              {
                title: "storage",
                options: [
                  {
                    title: "1gb-SSD",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "2TB-SSD",
                    priceIncrement: { amount: 1000, currency: "USD" },
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
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
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
              currency: "USD",
              amount: 50,
            },
            features: {
              material: "cotton",
            },
            variants: [
              {
                title: "size",
                options: [
                  {
                    title: "S",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "M",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "L",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                ],
              },
              {
                title: "color",
                options: [
                  {
                    title: "white",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "black",
                    priceIncrement: { amount: 0, currency: "USD" },
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
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
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
              currency: "USD",
              amount: 50,
            },
            features: {
              material: "cotton",
            },
            variants: [
              {
                title: "size",
                options: [
                  {
                    title: "S",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "M",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "L",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                ],
              },
              {
                title: "color",
                options: [
                  {
                    title: "white",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "black",
                    priceIncrement: { amount: 0, currency: "USD" },
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
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
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
              currency: "USD",
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
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "16gb",
                    priceIncrement: { amount: 1000, currency: "USD" },
                  },
                ],
              },
              {
                title: "storage",
                options: [
                  {
                    title: "1gb-SSD",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "2TB-SSD",
                    priceIncrement: { amount: 1000, currency: "USD" },
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
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
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
              currency: "USD",
              amount: 50,
            },
            features: {
              material: "cotton",
            },
            variants: [
              {
                title: "size",
                options: [
                  {
                    title: "S",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "M",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "L",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                ],
              },
              {
                title: "color",
                options: [
                  {
                    title: "white",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "black",
                    priceIncrement: { amount: 0, currency: "USD" },
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
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
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
              currency: "USD",
              amount: 50,
            },
            features: {
              material: "cotton",
            },
            variants: [
              {
                title: "size",
                options: [
                  {
                    title: "S",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "M",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "L",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                ],
              },
              {
                title: "color",
                options: [
                  {
                    title: "white",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "black",
                    priceIncrement: { amount: 0, currency: "USD" },
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
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
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
              currency: "USD",
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
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "16gb",
                    priceIncrement: { amount: 1000, currency: "USD" },
                  },
                ],
              },
              {
                title: "storage",
                options: [
                  {
                    title: "1gb-SSD",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "2TB-SSD",
                    priceIncrement: { amount: 1000, currency: "USD" },
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
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
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
              currency: "USD",
              amount: 50,
            },
            features: {
              material: "cotton",
            },
            variants: [
              {
                title: "size",
                options: [
                  {
                    title: "S",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "M",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "L",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                ],
              },
              {
                title: "color",
                options: [
                  {
                    title: "white",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "black",
                    priceIncrement: { amount: 0, currency: "USD" },
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
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
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
              currency: "USD",
              amount: 50,
            },
            features: {
              material: "cotton",
            },
            variants: [
              {
                title: "size",
                options: [
                  {
                    title: "S",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "M",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "L",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                ],
              },
              {
                title: "color",
                options: [
                  {
                    title: "white",
                    priceIncrement: { amount: 0, currency: "USD" },
                  },
                  {
                    title: "black",
                    priceIncrement: { amount: 0, currency: "USD" },
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
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
                  rating: 4,
                  review: {
                    title: "Very Good!",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
                  },
                },
                {
                  userName: "John Doe",
                  dateCreated: "10/10/2023",
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
    phone: { code: "KE", number: "+254 706 762571" },
    payments: {
      currency: {
        code: "KES",
        decimals: 2,
        name: "Kenyan shilling",
        number: "404",
        symbol: "KSh",
      },
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
          type: "office",
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
      5: { details: { quantity: 2, size: "m", color: "black" }, total: 100 },
    },
    cart: {
      total: 3220,
      items: {
        1: {
          details: { quantity: 1, ram: "8gb", storage: "500gb-SSD" },
          total: 3000,
        },
        4: {
          details: { quantity: 2, size: "m", color: "white" },
          total: 100,
        },
        7: {
          details: {
            quantity: 4,
            size: "large",
            crust: "normal",
            extras: ["extra cheese"],
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
      name: "Laptop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "USD",
        amount: 2000,
      },
      features: {
        SKU: "0123083423X",
        weight: "2kg",
        CPU: "i9-1200K",
        GPU: "RTX3060",
        color: "black",
      },
      variants: {
        ram: {
          "8gb": { amount: 0, currency: "USD" },
          "16gb": { amount: 3000, currency: "USD" },
        },
        storage: {
          "500gb-SSD": { amount: 0, currency: "USD" },
          "1TB-SSD": { amount: 1000, currency: "USD" },
        },
      },
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 4.3,
        reviews: [
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
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
      name: "Office Laptop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "USD",
        amount: 1500,
      },
      features: {
        SKU: "0123083423X",
        weight: "2kg",
        CPU: "i7-1100K",
        GPU: "RTX3050",
        color: "black",
      },
      variants: {
        ram: {
          "4gb": { amount: 0, currency: "USD" },
          "8gb": { amount: 1000, currency: "USD" },
        },
        storage: {
          "500gb-SSD": { amount: 0, currency: "USD" },
          "1TB-SSD": { amount: 1000, currency: "USD" },
        },
      },
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 4.3,
        reviews: [
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
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
      name: "Gaming Laptop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "USD",
        amount: 3000,
      },
      features: {
        SKU: "0123083423X",
        weight: "3kg",
        CPU: "i9-1300K",
        GPU: "RTX4070",
        color: "black",
      },
      variants: {
        ram: {
          "8gb": { amount: 0, currency: "USD" },
          "16gb": { amount: 1000, currency: "USD" },
        },
        storage: {
          "1gb-SSD": { amount: 0, currency: "USD" },
          "2TB-SSD": { amount: 1000, currency: "USD" },
        },
      },
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 4.3,
        reviews: [
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
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
      name: "T-shirt 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "USD",
        amount: 50,
      },
      features: {
        material: "cotton",
      },
      variants: {
        size: {
          s: { amount: 0, currency: "USD" },
          m: { amount: 0, currency: "USD" },
          l: { amount: 0, currency: "USD" },
        },
        color: {
          white: { amount: 0, currency: "USD" },
          black: { amount: 0, currency: "USD" },
        },
      },
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 4.3,
        reviews: [
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
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
      name: "T-shirt 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "USD",
        amount: 50,
      },
      features: {
        material: "cotton",
      },
      variants: {
        size: {
          s: { amount: 0, currency: "USD" },
          m: { amount: 0, currency: "USD" },
          l: { amount: 0, currency: "USD" },
        },
        color: {
          white: { amount: 0, currency: "USD" },
          black: { amount: 0, currency: "USD" },
        },
      },
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 4.3,
        reviews: [
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
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
        "https://media.istockphoto.com/id/1178379920/photo/mens-black-blank-sweatshirt-template-from-two-sides-natural-shape-on-invisible-mannequin-for.jpg?b=1&s=612x612&w=0&k=20&c=uKq6TRlKrLHl9i1nUkel-KLDkXa0GoxnNblL1-8knfY=",
        "https://media.istockphoto.com/id/1134011741/photo/mens-grey-blank-sweatshirt-template-from-two-sides-natural-shape-on-invisible-mannequin-for.jpg?b=1&s=612x612&w=0&k=20&c=0UeBe99l6lvyYpjsrybht7ZaSQfDOnaolX_l68jP2Bo=",
        "https://media.istockphoto.com/id/1124815039/photo/white-male-hoodie-sweatshirt-long-sleeve-with-clipping-path-mens-hoody-with-hood-for-your.jpg?b=1&s=612x612&w=0&k=20&c=oDmbUDm0HWkkFiJr_hUn1i_Q7cShJo5l-aQIvhKlyXc=",
      ],
      name: "Sweatshirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "USD",
        amount: 50,
      },
      features: {
        material: "fleece",
      },
      variants: {
        size: {
          s: { amount: 0, currency: "USD" },
          m: { amount: 0, currency: "USD" },
          l: { amount: 0, currency: "USD" },
        },
        color: {
          green: { amount: 0, currency: "USD" },
          blue: { amount: 0, currency: "USD" },
        },
      },
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 4.5,
        reviews: [
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
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
      categories: ["clothing", "sweatshirts"],
      id: 6,
      type: "sweatshirt",
    },
    {
      images: [
        "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
        "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      name: "Pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "USD",
        amount: 50,
      },
      features: {
        flavour: "pepperoni",
      },
      variants: {
        size: {
          small: { amount: 0, currency: "USD" },
          medium: { amount: 20, currency: "USD" },
          large: { amount: 30, currency: "USD" },
        },
        crust: {
          thin: { amount: 0, currency: "USD" },
          normal: { amount: 0, currency: "USD" },
        },
        extras: {
          selectMuiltiple: true,
          "extra cheese": { amount: 10, currency: "USD" },
          "extra pepperoni": { amount: 10, currency: "USD" },
        },
      },
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 5,
        reviews: [
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
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
      categories: ["food", "pizza"],
      id: 7,
      type: "pizza",
    },
    {
      images: [
        "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      name: "Beef Burger",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "USD",
        amount: 50,
      },
      features: {},
      variants: {
        size: {
          single: { amount: 0, currency: "USD" },
          double: { amount: 20, currency: "USD" },
        },
      },
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 5,
        reviews: [
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
            rating: 4,
            review: {
              title: "Very Good!",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend",
            },
          },
          {
            userName: "John Doe",
            dateCreated: "10/10/2023",
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
      type: "burger",
    },
    {
      images: [
        "https://images.pexels.com/photos/3558/morning-breakfast-orange-juice.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg",
        "https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      name: "Freshly squeezed Orange Juice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus at libero venenatis commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel bibendum vulputate. Nulla facilisi. In hac habitasse platea dictumst. Integer sed lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt. Proin in sagittis arcu. ",
      unitPrice: {
        currency: "USD",
        amount: 50,
      },
      features: {
        flavour: "Orange",
      },
      variants: {
        size: {
          "500ml": { amount: 0, currency: "USD" },
          "1Liter": { amount: 30, currency: "USD" },
        },
      },
      rating: {
        votes: [4, 3, 3, 4, 5],
        score: 4.4,
        reviews: [],
      },
      stock: 200,
      state: "In stock",
      categories: ["beverages", "orange juice"],
      id: 9,
      type: "orange juice",
    },
  ],
};

export default data;
