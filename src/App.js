import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailPage from './components/ProductDetailPage';

function App() {

  const products = [
    {
      id : 1,
      heading: "The Complete Python Bootcamp From Zero to Hero...",
      auth: "Jose Portilla",
      image: "https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg",
      price: "$449",
      descn : "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
      id : 2,
      heading: "Automate the Boring Stuff with Python Programming",
      auth: "Al Sweigart",
      image: "https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg",
      price: "$449",
      descn : "A practical programming course for office workers, academics, and administrators who want to improve their productivity."

    },
    {
      id : 3,
      heading: "Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]",
      auth: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team",
      image: "	https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
      price: "$449",
      descn:"Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included."
    },
    {
      id : 4,
      heading: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
      auth: "Dr. Angela Yu",
      image: "https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg",
      price: "$449",
      descn :"Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!"
    },
    {
      id : 5,
      heading: "Python : Master Programming and Development with 15 Projects",
      auth: "Dev Nirwal",
      image: "https://img-c.udemycdn.com/course/240x135/2485240_d405_7.jpg",
      price: "$449",
      descn:"Learn complete Python with Basics, Data Science, Data Visualisation, Desktop Graphical Applications and Machine Learning"
    },
  ];

  return (
    <>
      <ChakraProvider>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:productId" element={<ProductDetailPage products={products}/>} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
