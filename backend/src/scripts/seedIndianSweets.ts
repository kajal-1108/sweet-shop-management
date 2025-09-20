import mongoose from 'mongoose';
import Sweet from '../models/sweetModel';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const indianSweetsData = [
  {
    name: "Gulab Jamun",
    price: 3.50,
    quantity: 50,
    description: "Deep-fried milk solids soaked in rose-flavored sugar syrup",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=400&h=300&fit=crop"
  },
  {
    name: "Rasgulla",
    price: 3.25,
    quantity: 45,
    description: "Soft, spongy cheese balls soaked in light sugar syrup",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop"
  },
  {
    name: "Jalebi",
    price: 2.75,
    quantity: 60,
    description: "Crispy, spiral-shaped deep-fried batter soaked in saffron syrup",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop"
  },
  {
    name: "Kaju Katli",
    price: 4.50,
    quantity: 35,
    description: "Diamond-shaped cashew nut fudge with silver leaf",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"
  },
  {
    name: "Ladoo",
    price: 2.50,
    quantity: 70,
    description: "Round sweet balls made from flour, sugar, and ghee",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },
  {
    name: "Barfi",
    price: 3.75,
    quantity: 40,
    description: "Dense milk-based sweet with nuts and cardamom",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
  },
  {
    name: "Peda",
    price: 2.25,
    quantity: 80,
    description: "Soft, semi-solid milk-based sweet with saffron",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"
  },
  {
    name: "Halwa",
    price: 3.00,
    quantity: 55,
    description: "Dense, sweet pudding made from various ingredients",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop"
  },
  {
    name: "Cham Cham",
    price: 4.00,
    quantity: 30,
    description: "Cylindrical shaped sweet made from cottage cheese",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop"
  },
  {
    name: "Sandesh",
    price: 3.50,
    quantity: 45,
    description: "Bengali sweet made from fresh paneer and sugar",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"
  },
  {
    name: "Mysore Pak",
    price: 4.25,
    quantity: 25,
    description: "Rich, dense sweet made from gram flour and ghee",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
  },
  {
    name: "Kalakand",
    price: 3.75,
    quantity: 35,
    description: "Milk cake made by reducing milk with sugar",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"
  },
  {
    name: "Besan Ladoo",
    price: 2.75,
    quantity: 65,
    description: "Round sweets made from roasted gram flour",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },
  {
    name: "Coconut Barfi",
    price: 3.25,
    quantity: 50,
    description: "Coconut-based sweet with cardamom flavor",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
  },
  {
    name: "Kheer",
    price: 2.50,
    quantity: 40,
    description: "Rice pudding cooked with milk and nuts",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop"
  },
  {
    name: "Gajar Halwa",
    price: 3.50,
    quantity: 30,
    description: "Carrot pudding with milk, sugar, and nuts",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
  },
  {
    name: "Shahi Tukda",
    price: 4.50,
    quantity: 20,
    description: "Royal bread pudding with saffron and nuts",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"
  },
  {
    name: "Malai Peda",
    price: 3.00,
    quantity: 55,
    description: "Creamy milk-based sweet with rich flavor",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"
  },
  {
    name: "Anjeer Barfi",
    price: 4.75,
    quantity: 25,
    description: "Fig-based sweet with nuts and cardamom",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
  },
  {
    name: "Badam Halwa",
    price: 5.00,
    quantity: 20,
    description: "Rich almond pudding with saffron",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop"
  },
  {
    name: "Rava Ladoo",
    price: 2.25,
    quantity: 75,
    description: "Semolina-based sweet balls with coconut",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },
  {
    name: "Kaju Roll",
    price: 4.25,
    quantity: 30,
    description: "Cashew-based sweet rolled with nuts",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"
  },
  {
    name: "Pista Barfi",
    price: 4.50,
    quantity: 25,
    description: "Pistachio-based sweet with silver leaf",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
  },
  {
    name: "Mohanthal",
    price: 3.75,
    quantity: 35,
    description: "Gram flour sweet from Gujarat",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },
  {
    name: "Sohan Papdi",
    price: 3.25,
    quantity: 50,
    description: "Flaky pastry with nuts and cardamom",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"
  },
  {
    name: "Chum Chum",
    price: 3.50,
    quantity: 40,
    description: "Bengali sweet with coconut coating",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop"
  },
  {
    name: "Ras Malai",
    price: 4.75,
    quantity: 25,
    description: "Cheese dumplings in sweetened milk",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"
  },
  {
    name: "Boondi Ladoo",
    price: 2.75,
    quantity: 60,
    description: "Small pearl-like sweets made into balls",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },
  {
    name: "Milk Cake",
    price: 3.50,
    quantity: 45,
    description: "Dense milk-based sweet from Alwar",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
  },
  {
    name: "Dry Fruit Barfi",
    price: 5.25,
    quantity: 20,
    description: "Mixed nuts and dry fruits sweet",
    category: "Indian Sweets",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"
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
    const sweets = await Sweet.insertMany(indianSweetsData);
    console.log(`Successfully seeded ${sweets.length} Indian sweets into the database`);

    // Display some sample data
    console.log('\nSample Indian sweets added:');
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
