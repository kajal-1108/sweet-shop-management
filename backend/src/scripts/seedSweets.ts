import mongoose from 'mongoose';
import Sweet from '../models/sweetModel';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const sweetsData = [
  {
    name: "Dark Chocolate Truffle",
    price: 2.50,
    quantity: 50,
    description: "Rich dark chocolate truffle with a smooth, creamy center",
    category: "Chocolate"
  },
  {
    name: "Milk Chocolate Bar",
    price: 1.75,
    quantity: 75,
    description: "Classic milk chocolate bar, perfect for everyday indulgence",
    category: "Chocolate"
  },
  {
    name: "White Chocolate Raspberry",
    price: 3.25,
    quantity: 30,
    description: "White chocolate filled with tangy raspberry cream",
    category: "Chocolate"
  },
  {
    name: "Sour Apple Candy",
    price: 1.25,
    quantity: 100,
    description: "Tangy sour apple flavored hard candy",
    category: "Candy"
  },
  {
    name: "Gummy Bears",
    price: 2.00,
    quantity: 80,
    description: "Assorted fruit-flavored gummy bears",
    category: "Candy"
  },
  {
    name: "Chocolate Mint Cookies",
    price: 4.50,
    quantity: 25,
    description: "Crispy cookies with chocolate chips and mint flavor",
    category: "Cookie"
  },
  {
    name: "Red Velvet Cupcake",
    price: 3.75,
    quantity: 40,
    description: "Moist red velvet cupcake with cream cheese frosting",
    category: "Cake"
  },
  {
    name: "Strawberry Lollipop",
    price: 0.75,
    quantity: 150,
    description: "Classic strawberry flavored lollipop",
    category: "Candy"
  },
  {
    name: "Peanut Butter Cups",
    price: 2.25,
    quantity: 60,
    description: "Creamy peanut butter in milk chocolate cups",
    category: "Chocolate"
  },
  {
    name: "Caramel Toffee",
    price: 3.00,
    quantity: 45,
    description: "Buttery caramel toffee with a hint of sea salt",
    category: "Candy"
  },
  {
    name: "Sugar Cookies",
    price: 1.50,
    quantity: 90,
    description: "Traditional sugar cookies with vanilla frosting",
    category: "Cookie"
  },
  {
    name: "Blueberry Muffin",
    price: 2.75,
    quantity: 35,
    description: "Fresh blueberry muffin with streusel topping",
    category: "Cake"
  },
  {
    name: "Licorice Twists",
    price: 1.80,
    quantity: 70,
    description: "Black licorice twists, classic and chewy",
    category: "Candy"
  },
  {
    name: "Hazelnut Praline",
    price: 4.25,
    quantity: 20,
    description: "Roasted hazelnuts in smooth praline chocolate",
    category: "Chocolate"
  },
  {
    name: "Jelly Beans",
    price: 2.50,
    quantity: 85,
    description: "Assorted fruit-flavored jelly beans",
    category: "Candy"
  },
  {
    name: "Oatmeal Raisin Cookies",
    price: 2.00,
    quantity: 55,
    description: "Chewy oatmeal cookies with plump raisins",
    category: "Cookie"
  },
  {
    name: "Lemon Tart",
    price: 3.50,
    quantity: 30,
    description: "Tangy lemon curd in a buttery pastry shell",
    category: "Cake"
  },
  {
    name: "Cinnamon Hard Candy",
    price: 1.25,
    quantity: 120,
    description: "Spicy cinnamon flavored hard candy",
    category: "Candy"
  },
  {
    name: "Almond Buttercrunch",
    price: 3.75,
    quantity: 40,
    description: "Toasted almonds in buttery toffee coating",
    category: "Candy"
  },
  {
    name: "Double Chocolate Brownies",
    price: 2.25,
    quantity: 65,
    description: "Fudgy brownies with extra chocolate chunks",
    category: "Cake"
  },
  {
    name: "Peppermint Patties",
    price: 1.75,
    quantity: 75,
    description: "Cool peppermint cream in dark chocolate shell",
    category: "Chocolate"
  },
  {
    name: "Rock Candy",
    price: 1.50,
    quantity: 95,
    description: "Large crystal rock candy on a stick",
    category: "Candy"
  },
  {
    name: "Snickerdoodle Cookies",
    price: 1.80,
    quantity: 80,
    description: "Soft cookies rolled in cinnamon sugar",
    category: "Cookie"
  },
  {
    name: "Tiramisu Cake",
    price: 4.75,
    quantity: 15,
    description: "Classic Italian tiramisu in cake form",
    category: "Cake"
  },
  {
    name: "Watermelon Sour Candy",
    price: 2.00,
    quantity: 70,
    description: "Sour watermelon flavored gummy candy",
    category: "Candy"
  },
  {
    name: "Macadamia Nut Cookies",
    price: 3.25,
    quantity: 45,
    description: "Buttery cookies with roasted macadamia nuts",
    category: "Cookie"
  },
  {
    name: "Chocolate Éclair",
    price: 3.50,
    quantity: 35,
    description: "Pastry filled with cream and topped with chocolate",
    category: "Cake"
  },
  {
    name: "Bubble Gum Balls",
    price: 1.00,
    quantity: 200,
    description: "Classic bubble gum in colorful balls",
    category: "Candy"
  },
  {
    name: "Coconut Macaroons",
    price: 2.75,
    quantity: 50,
    description: "Chewy coconut cookies with chocolate drizzle",
    category: "Cookie"
  },
  {
    name: "Black Forest Cake",
    price: 4.25,
    quantity: 25,
    description: "Chocolate cake with cherries and whipped cream",
    category: "Cake"
  },
  {
    name: "Cherry Cordials",
    price: 3.00,
    quantity: 60,
    description: "Whole cherries in liquid cherry center, chocolate covered",
    category: "Chocolate"
  },
  {
    name: "Fruit Slices Candy",
    price: 2.25,
    quantity: 85,
    description: "Gummy candy shaped like orange slices",
    category: "Candy"
  },
  {
    name: "Fortune Cookies",
    price: 1.25,
    quantity: 100,
    description: "Crispy cookies with fortune messages inside",
    category: "Cookie"
  },
  {
    name: "Cheesecake Bites",
    price: 3.75,
    quantity: 40,
    description: "Mini cheesecake bites with various toppings",
    category: "Cake"
  },
  {
    name: "Nougat Bar",
    price: 2.50,
    quantity: 65,
    description: "Soft nougat center with nuts and chocolate coating",
    category: "Candy"
  },
  {
    name: "Thumbprint Cookies",
    price: 2.00,
    quantity: 75,
    description: "Shortbread cookies with jam-filled centers",
    category: "Cookie"
  },
  {
    name: "Opera Cake",
    price: 5.00,
    quantity: 20,
    description: "Layered almond sponge cake with coffee and chocolate",
    category: "Cake"
  },
  {
    name: "Marshmallows",
    price: 1.75,
    quantity: 90,
    description: "Soft and fluffy vanilla marshmallows",
    category: "Candy"
  },
  {
    name: "Biscotti",
    price: 2.50,
    quantity: 55,
    description: "Twice-baked Italian cookies, perfect for dipping",
    category: "Cookie"
  },
  {
    name: "Pavlova",
    price: 4.00,
    quantity: 30,
    description: "Meringue base with whipped cream and fresh fruit",
    category: "Cake"
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sweetshop';
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    // Clear existing sweets
    await Sweet.deleteMany({});
    console.log('Cleared existing sweets');

    // Insert new sweets
    const sweets = await Sweet.insertMany(sweetsData);
    console.log(`Successfully seeded ${sweets.length} sweets into the database`);

    // Display some sample data
    console.log('\nSample sweets added:');
    sweets.slice(0, 5).forEach((sweet, index) => {
      console.log(`${index + 1}. ${sweet.name} - $${sweet.price} (${sweet.category})`);
    });

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Run the seeder
seedDatabase();
